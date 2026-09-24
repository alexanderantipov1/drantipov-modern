const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

// Execute actual pure TS helpers offline, without introducing a test dependency.
require.extensions[".ts"] = (module, filename) => {
  module._compile(ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText, filename);
};
const seo = require("../src/lib/seo-foundation.ts");
const inventory = require("../src/lib/seo-route-inventory.json");
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e =>
  e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
const pages = walk("src/app").filter(f => f.endsWith("/page.tsx") && !f.includes("/api/"));
const routeFor = file => "/" + path.dirname(path.relative("src/app", file)).split(path.sep).filter(p => !p.startsWith("(") && p !== ".").join("/");

test("registry precisely covers current indexable static page files", () => {
  const expected = pages.filter(file => {
    const source = fs.readFileSync(file, "utf8");
    return !file.includes("[") && !file.includes("/recaptcha-test/") && !/index:\s*false|robots:\s*["'][^"']*noindex/.test(source);
  }).map(routeFor).sort();
  assert.deepEqual(inventory, expected);
});

test("every registered translation has reciprocal www/self canonical and English x-default", () => {
  assert.ok(seo.translationPairs.length > 100);
  for (const pair of seo.translationPairs) {
    const en = seo.getSeoAlternates(pair.en);
    const ru = seo.getSeoAlternates(pair.ru);
    assert.deepEqual(en.languages, ru.languages);
    assert.equal(en.canonical, en.languages.en);
    assert.equal(ru.canonical, ru.languages.ru);
    assert.equal(en.languages["x-default"], en.canonical);
    for (const value of Object.values(en.languages)) assert.ok(value.startsWith(seo.canonicalOrigin));
  }
});

test("untranslated and nonexistent pages have no invented language fallback", () => {
  assert.equal(seo.getSeoAlternates("/does-not-exist").languages, undefined);
  for (const route of seo.indexableRoutes) {
    if (!seo.translationPairs.some(p => p.en === route || p.ru === route))
      assert.equal(seo.getSeoAlternates(route).languages, undefined);
  }
});

test("existing dynamic routes only, unique sitemap entries, diagnostics excluded", () => {
  const { cities, stateSlugs, getCitiesByState } = require("../src/constants/cities.ts");
  const { allCases } = require("../src/constants/cases.ts");
  const expected = [
    ...stateSlugs.filter(s => getCitiesByState(s).length).map(s => `/locations/${s}`),
    ...cities.map(c => `/locations/${c.state.toLowerCase()}/${c.slug}`),
    ...allCases.map(c => `/surgical-cases/${c.category}/${c.id}`),
  ];
  assert.equal(new Set(seo.indexableRoutes).size, seo.indexableRoutes.length);
  for (const route of expected) {
    assert.ok(seo.indexableRoutes.includes(route));
    assert.ok(seo.indexableRoutes.includes(`/ru${route}`));
  }
  for (const route of ["/calc-test", "/recaptcha-test", "/api/lead"]) assert.ok(!seo.indexableRoutes.includes(route));
  assert.ok(!fs.existsSync("public/sitemap.xml"));
  assert.ok(!fs.existsSync("public/robots.txt"));
  assert.ok(!require("../package.json").scripts.postbuild);
});

test("final metadata is page-specific and preserves noindex", () => {
  const m = seo.finalizeMetadata({ title: { absolute: "Example" }, description: "Page description", keywords: ["old"] }, "/ru/about");
  assert.equal(m.openGraph.url, `${seo.canonicalOrigin}/ru/about`);
  assert.equal(m.openGraph.locale, "ru_RU");
  assert.equal(m.openGraph.title, "Example");
  assert.equal(m.keywords, null);
  const n = seo.finalizeMetadata({ robots: { index: false, follow: false } }, "/calc-test");
  assert.equal(n.robots.index, false);
  assert.equal(n.alternates.languages, undefined);
  assert.equal(seo.finalizeMetadata({ title: "Case Not Found" }).robots.index, false);
});

test("root language is static and no unconditional tracking iframe/client mutation remains", () => {
  const doc = fs.readFileSync("src/components/SiteDocument.tsx", "utf8");
  assert.match(doc, /<html lang=\{lang\}/);
  assert.doesNotMatch(doc, /HtmlLangSetter|GoogleTagManagerNoScript|next\/headers|suppressHydrationWarning/);
  assert.match(fs.readFileSync("src/app/(en)/layout.tsx", "utf8"), /lang="en"/);
  assert.match(fs.readFileSync("src/app/ru/layout.tsx", "utf8"), /lang="ru"/);
  assert.ok(!fs.existsSync("src/app/layout.tsx"));
  for (const page of pages.filter(p => !p.includes("recaptcha-test") && !p.includes("[...unmatched]"))) {
    assert.match(fs.readFileSync(page, "utf8"), /finalizeMetadata/);
  }
});

test("unmatched EN/RU handlers return localized HTML 404 responses without sitemap registration", async () => {
  const vm = require("node:vm");
  const helper = require("../src/lib/not-found-response.ts");
  for (const root of ["src/app/(en)", "src/app/ru"]) {
    const file = `${root}/[...unmatched]/route.ts`;
    const exports = {};
    const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    }).outputText;
    vm.runInNewContext(code, {
      exports,
      Response,
      require: id => {
        assert.equal(id, "@/lib/not-found-response");
        return helper;
      },
    }, { filename: file });
    const locale = root.endsWith("/ru") ? "ru" : "en";
    const response = exports.GET();
    assert.equal(response.status, 404);
    assert.equal(response.headers.get("content-language"), locale);
    assert.match(response.headers.get("x-robots-tag"), /noindex/);
    const html = await response.text();
    assert.match(html, new RegExp(`<html lang="${locale}">`));
    assert.doesNotMatch(html, /__next_error__|rel="canonical"|hreflang=/);
    assert.equal(exports.HEAD().status, 404);
    assert.ok(fs.existsSync(`${root}/not-found.tsx`));
  }
  assert.match(fs.readFileSync("src/app/ru/not-found.tsx", "utf8"), /Страница не найдена/);
  for (const route of ["/nonexistent-audit-review", "/ru/nonexistent-audit-review"]) {
    assert.ok(!seo.indexableRoutes.includes(route));
    assert.equal(seo.getSeoAlternates(route).languages, undefined);
  }
  assert.ok(seo.indexableRoutes.every(route => !route.includes("[")));
});

test("every route parses without syntax errors", () => {
  for (const file of pages) {
    const source = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    assert.equal(source.parseDiagnostics.length, 0, file);
  }
});