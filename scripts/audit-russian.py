"""Audit every built Russian HTML page, optionally fetching the served version.

Run after npm run build. Latin text is reported for human review, not assumed
to be wrong: brand names, citations, addresses and medical acronyms can be valid.
No third-party packages or live form submissions are required.
"""
import argparse
import concurrent.futures
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import urllib.request


class TextCollector(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.skip = 0
        self.texts = []
        self.lang = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in ("script", "style"):
            self.skip += 1
        if tag == "html":
            self.lang = attrs.get("lang")
        if not self.skip:
            for key in ("alt", "title", "aria-label", "placeholder"):
                if attrs.get(key):
                    self.texts.append((key, attrs[key]))
            if tag == "meta" and attrs.get("name", attrs.get("property")) in (
                "description", "og:title", "og:description", "og:image:alt",
                "twitter:title", "twitter:description", "twitter:image:alt",
            ):
                self.texts.append(("metadata", attrs.get("content", "")))

    def handle_endtag(self, tag):
        if tag in ("script", "style"):
            self.skip = max(0, self.skip - 1)

    def handle_data(self, text):
        if not self.skip and text.strip():
            self.texts.append(("text", " ".join(text.split())))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--base-url", help="Fetch built routes from this server")
    parser.add_argument("--output", default="/tmp/russian-text-audit.json")
    args = parser.parse_args()
    root = Path(".next/server/app")
    files = sorted(root.glob("ru/**/*.html"))
    if (root / "ru.html").exists():
        files.insert(0, root / "ru.html")
    if not files:
        raise SystemExit("No Russian build output. Run npm run build first.")

    def inspect(file):
        route = "/" + str(file.relative_to(root)).removesuffix(".html")
        try:
            if args.base_url:
                with urllib.request.urlopen(args.base_url.rstrip("/") + route, timeout=30) as response:
                    html = response.read().decode()
                    status = response.status
            else:
                html, status = file.read_text(), 200
            collector = TextCollector()
            collector.feed(html)
            latin = sorted(set((kind, text) for kind, text in collector.texts if re.search(r"[A-Za-z]{3,}", text)))
            return {"route": route, "status": status, "lang": collector.lang, "latin": latin}
        except Exception as error:
            return {"route": route, "error": str(error)}

    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        pages = list(pool.map(inspect, files))
    grouped = {}
    for page in pages:
        for kind, text in page.get("latin", []):
            grouped.setdefault((kind, text), []).append(page["route"])
    report = {
        "pageCount": len(pages),
        "failures": [p for p in pages if p.get("status") != 200 or p.get("lang") != "ru"],
        "pages": pages,
        "latinStrings": [
            {"kind": kind, "text": text, "routes": routes}
            for (kind, text), routes in sorted(grouped.items(), key=lambda pair: (-len(pair[1]), pair[0]))
        ],
    }
    Path(args.output).write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"pages": len(pages), "failures": len(report["failures"]), "uniqueLatinStrings": len(grouped), "report": args.output}))
    if report["failures"]:
        raise SystemExit(1)


if __name__ == "__main__":
    main()