"""Check all newly authored article pages against the running preview."""
import concurrent.futures
from html.parser import HTMLParser
import json
import os
from pathlib import Path
import re
import urllib.request


class ArticleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tables = 0
        self.canonical = None
        self.lang = None
        self.jsonld = []
        self.in_jsonld = False
        self.buffer = ""
        self.text = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html":
            self.lang = a.get("lang")
        if tag == "table":
            self.tables += 1
        if tag == "link" and a.get("rel") == "canonical":
            self.canonical = a.get("href")
        if tag == "script" and a.get("type") == "application/ld+json":
            self.in_jsonld = True
            self.buffer = ""

    def handle_data(self, data):
        if self.in_jsonld:
            self.buffer += data
        else:
            self.text.append(data)

    def handle_endtag(self, tag):
        if tag == "script" and self.in_jsonld:
            self.jsonld.append(json.loads(self.buffer))
            self.in_jsonld = False


base = "https://" + os.environ["REPLIT_DEV_DOMAIN"]
slugs = [re.search(r'slug: "([^"]+)"', p.read_text())[1]
         for p in sorted(Path("src/constants/newInsightArticles").glob("source-*.ts"))]
assert len(slugs) == 14
with urllib.request.urlopen(base + "/sitemap.xml") as response:
    sitemap = response.read().decode()
with urllib.request.urlopen(base + "/for-patients/insights") as response:
    hub = response.read().decode()


def check(slug):
    route = "/for-patients/insights/" + slug
    with urllib.request.urlopen(base + route, timeout=30) as response:
        assert response.status == 200
        html = response.read().decode()
    parser = ArticleParser()
    parser.feed(html)
    assert parser.tables >= 1, slug + ": table missing"
    assert parser.lang == "en", slug + ": language"
    assert parser.canonical == "https://www.drantipov.com" + route, slug + ": canonical"
    assert route in sitemap and route in hub, slug + ": discovery"
    nodes = []
    for item in parser.jsonld:
        nodes.extend(item if isinstance(item, list) else [item])
    faqs = [n for n in nodes if n.get("@type") == "FAQPage"]
    assert len(faqs) == 1, slug + ": FAQ schema"
    questions = faqs[0]["mainEntity"]
    assert 6 <= len(questions) <= 8, slug + ": FAQ count"
    rendered = " ".join(parser.text)
    for question in questions:
        assert question["name"] in rendered, slug + ": visible question parity"
        assert question["acceptedAnswer"]["text"] in rendered, slug + ": visible answer parity"
    assert "Clinical review pending" in rendered, slug + ": review status"
    return {"slug": slug, "status": 200, "tables": parser.tables, "faqs": len(questions)}


with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    results = list(pool.map(check, slugs))
print(json.dumps(results, indent=2))
print("PASS: 14 live articles, tables, FAQ parity, canonicals, hub and sitemap.")