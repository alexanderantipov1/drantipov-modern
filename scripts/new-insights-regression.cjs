const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

require.extensions[".ts"] = (module, filename) => {
  module._compile(ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText, filename);
};

const expected = [
  "dental-implants-with-active-gum-disease",
  "dental-bridge-vs-implant-which-is-right",
  "dental-implants-for-seniors-health-and-value",
  "all-on-4-dental-implants-sacramento-guide",
  "choosing-dental-implant-surgeon-roseville",
  "dental-implants-rocklin-ca-buyers-guide",
  "implant-vs-denture-maintenance-and-longevity",
  "implant-supported-dentures-roseville-cost",
  "one-arch-vs-two-arch-dental-implant-cost",
  "switching-from-chain-dental-center-to-local-implant-surgeon",
  "front-tooth-dental-implant-procedure",
  "dental-implants-elk-grove-patient-guide",
  "find-dentist-implants-and-dentures-near-you",
  "full-mouth-reconstruction-california-guide",
];
const sources = expected.map((_, index) => require(`../src/constants/newInsightArticles/source-${index + 1}.ts`).article);
const { newInsightArticles: articles } = require("../src/constants/newInsightArticles.ts");
const inventory = require("../src/lib/seo-route-inventory.json");
const normalize = value => (typeof value === "string" ? value : value.map(segment =>
  typeof segment === "string" ? segment : segment.text).join("")).toLowerCase().replace(/\s+/g, " ").trim();
const paragraphs = article => [article.intro, ...article.sections.flatMap(section => [
  ...(section.paras || []), ...(section.list || []),
])].map(normalize).filter(text => text.length >= 80);
const links = article => [article.intro, ...article.sections.flatMap(section => [
  ...(section.paras || []), ...(section.list || []),
])].flatMap(value => typeof value === "string" ? [] : value.filter(segment =>
  typeof segment !== "string" && segment.href).map(segment => segment.href));

test("14 unique drafts match their EN route, registry and sitemap inventory; no invented RU mirror", () => {
  assert.equal(articles.length, 14);
  assert.equal(new Set(articles.map(a => a.slug)).size, 14);
  assert.deepEqual(articles.map(a => a.slug), expected);
  assert.deepEqual(sources.map(a => a.slug), expected);
  for (const article of articles) {
    assert.equal(article.author, "Dr. Antipov Practice Editorial Team");
    assert.equal(article.editorialReviewPending, true);
  }
  const registry = fs.readFileSync("src/constants/newInsightArticles.ts", "utf8");
  const hub = fs.readFileSync("src/constants/insights.ts", "utf8");
  assert.match(registry, /editorialReviewPending: true/);
  assert.match(registry, /author: "Dr. Antipov Practice Editorial Team"/);
  assert.match(hub, /\.\.\.newInsightPosts/);
  for (const slug of expected) {
    const route = `/for-patients/insights/${slug}`;
    const pageFile = `src/app/(en)${route}/page.tsx`;
    assert.ok(fs.existsSync(pageFile), route);
    const page = fs.readFileSync(pageFile, "utf8");
    assert.ok(page.includes(`const slug = "${slug}"`));
    assert.match(page, /finalizeMetadata\(article \? buildMetadata\(article\)/);
    assert.match(page, /<InsightArticle article=\{article\}/);
    assert.equal(inventory.filter(item => item === route).length, 1, route);
    assert.ok(!inventory.includes(`/ru${route}`), route);
  }
  const { buildMetadata } = require("../src/constants/revisionArticles.ts");
  for (const article of articles) {
    const meta = buildMetadata(article);
    assert.equal(meta.alternates.canonical, `/for-patients/insights/${article.slug}`);
    assert.ok(!("ru" in meta.alternates.languages));
  }
});

test("each draft meets editorial content and resolved-link requirements", () => {
  const routes = new Set(require("../src/lib/seo-foundation.ts").indexableRoutes);
  for (const article of articles) {
    assert.ok(article.sections.some(section => section.table && section.table.rows.length >= 4), `${article.slug}: comparison table`);
    assert.ok(article.faqs.length >= 6 && article.faqs.length <= 8, `${article.slug}: 6–8 FAQs`);
    assert.ok(article.disclaimer && article.disclaimer.trim().length > 30, `${article.slug}: disclaimer`);
    assert.ok(article.image.startsWith("/"), `${article.slug}: image path`);
    assert.ok(fs.existsSync(path.join("public", article.image)), `${article.slug}: image file ${article.image}`);
    const hrefs = [...new Set(links(article))];
    const internal = hrefs.filter(href => href.startsWith("/"));
    assert.ok(internal.length >= 3, `${article.slug}: 3 distinct internal links`);
    for (const href of internal) {
      assert.ok(routes.has(href.split(/[?#]/)[0].replace(/\/$/, "") || "/"), `${article.slug}: unresolved ${href}`);
    }
    assert.ok(hrefs.some(href => {
      if (!href.startsWith("https://")) return false;
      const host = new URL(href).hostname;
      return ["www.fda.gov", "www.nidcr.nih.gov", "www.mouthhealthy.org", "www.aboms.org", "www.medicare.gov", "www.irs.gov"].includes(host);
    }), `${article.slug}: authoritative external citation`);
  }
});

test("new long paragraphs are unique versus each other and previous structured articles", () => {
  const { guideArticles } = require("../src/constants/guideArticles.ts");
  const { revisionArticles } = require("../src/constants/revisionArticles.ts");
  const prior = new Set([...guideArticles, ...revisionArticles].flatMap(paragraphs));
  const seen = new Set();
  for (const article of articles) {
    for (const paragraph of paragraphs(article)) {
      assert.ok(!prior.has(paragraph), `${article.slug}: reused earlier paragraph`);
      assert.ok(!seen.has(paragraph), `${article.slug}: duplicated new paragraph`);
      seen.add(paragraph);
    }
  }
});