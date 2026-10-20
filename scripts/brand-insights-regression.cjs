const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");

require.extensions[".ts"] = (module, filename) => {
  module._compile(ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText, filename);
};
const resolve = Module._resolveFilename;
Module._resolveFilename = function (name, ...args) {
  return resolve.call(this, name.startsWith("@/") ? path.resolve("src", name.slice(2)) : name, ...args);
};

const expected = [
  "full-mouth-dental-implants-elk-grove-planning",
  "full-mouth-reconstruction-cost-sacramento",
  "replacing-removable-dentures-with-fixed-teeth",
  "healthy-gums-around-dental-implants",
  "all-on-4-san-francisco-patient-travel-planning",
  "verify-board-certified-oral-surgeon",
  "dental-implant-revision-warning-signs",
  "immediate-load-full-arch-implant-candidacy",
  "implant-dentist-roseville-treatment-team",
];
const sources = expected.map((_, i) => require(`../src/constants/brandInsightArticles/source-${i + 1}.ts`).article);
const { brandInsightArticles: articles, getBrandInsightArticle, buildMetadata } = require("../src/constants/brandInsightArticles.ts");
const { insightPosts, getRelatedInsights } = require("../src/constants/insights.ts");
const { indexableRoutes, finalizeMetadata, getSeoAlternates } = require("../src/lib/seo-foundation.ts");
const inventory = require("../src/lib/seo-route-inventory.json");
const normalize = value => (typeof value === "string" ? value : value.map(segment =>
  typeof segment === "string" ? segment : segment.text).join("")).toLowerCase().replace(/\s+/g, " ").trim();
const content = article => [article.intro, ...article.sections.flatMap(section => [
  ...(section.paras || []), ...(section.list || []),
])];
const links = article => content(article).flatMap(value => typeof value === "string" ? [] :
  value.filter(segment => typeof segment !== "string").map(segment => segment.href));
const longCopy = article => [
  ...content(article), ...article.faqs.map(faq => faq.answer),
].map(normalize).filter(text => text.length >= 80);

test("nine source drafts retain exact content with requested author overrides only", () => {
  assert.equal(articles.length, 9);
  assert.deepEqual(articles.map(a => a.slug), expected);
  assert.deepEqual(sources.map(a => a.slug), expected);
  assert.equal(new Set(articles.map(a => a.slug)).size, 9);
  articles.forEach((article, i) => {
    assert.deepEqual(article, {
      ...sources[i],
      author: i < 8 ? "Dr. Alexander V. Antipov, DDS" : "Dr. Antipov Practice Editorial Team",
      ...(i < 8 ? {
        authorAttribution: { type: "Person", name: "Dr. Alexander V. Antipov, DDS", url: "/about" },
      } : {}),
      editorialReviewPending: true,
    }, article.slug);
    assert.equal(getBrandInsightArticle(article.slug), article);
    assert.ok(!/\b(explains|reviewed by|written by|authored by)\s+Dr\./i.test(content(article).map(normalize).join(" ")),
      `${article.slug}: unsupported doctor attribution`);
  });
  assert.equal(getBrandInsightArticle("not-an-article"), undefined);
});

test("nine EN pages have canonical discovery, hub and related entries without invented RU mirrors", () => {
  for (const article of articles) {
    const route = `/for-patients/insights/${article.slug}`;
    const page = fs.readFileSync(`src/app/(en)${route}/page.tsx`, "utf8");
    assert.ok(page.includes(`const slug = "${article.slug}"`));
    assert.match(page, /getBrandInsightArticle\(slug\)/);
    assert.match(page, /finalizeMetadata\(article \? buildMetadata\(article\)/);
    assert.match(page, /<InsightArticle article=\{article\}/);
    assert.equal(inventory.filter(item => item === route).length, 1);
    assert.ok(indexableRoutes.includes(route));
    assert.ok(!indexableRoutes.includes(`/ru${route}`));
    assert.ok(!fs.existsSync(`src/app/ru${route}/page.tsx`));
    const meta = finalizeMetadata(buildMetadata(article), route);
    assert.equal(meta.alternates.canonical, `https://www.drantipov.com${route}`);
    assert.equal(meta.openGraph.url, meta.alternates.canonical);
    assert.ok(!getSeoAlternates(route).languages?.ru);
    assert.equal(insightPosts.filter(post => post.slug === article.slug).length, 1);
    const post = insightPosts.find(post => post.slug === article.slug);
    for (const key of ["title", "excerpt", "date", "image", "category", "readTime", "author"]) {
      assert.equal(post[key], article[key], `${article.slug}: hub ${key}`);
    }
    assert.ok(insightPosts.some(post => post.slug !== article.slug &&
      getRelatedInsights(post.slug).some(related => related.slug === article.slug)), `${article.slug}: related inbound link`);
  }
  const sitemap = fs.readFileSync("src/app/sitemap.ts", "utf8");
  assert.match(sitemap, /indexableRoutes\.map/);
});

test("all nine drafts have tables, 6–8 FAQs, disclaimers, real images, citations and three resolved internal links", () => {
  const routes = new Set(indexableRoutes);
  for (const article of articles) {
    assert.ok(article.sections.some(section => section.table?.rows.length >= 4), `${article.slug}: table`);
    assert.ok(article.faqs.length >= 6 && article.faqs.length <= 8, `${article.slug}: FAQs`);
    assert.equal(new Set(article.faqs.map(faq => faq.question)).size, article.faqs.length);
    assert.ok(article.faqs.every(faq => faq.question.trim() && faq.answer.trim()));
    assert.ok(article.disclaimer?.trim().length > 30, `${article.slug}: disclaimer`);
    assert.ok(article.heroAlt.trim().length > 10, `${article.slug}: descriptive image alt`);
    assert.ok(article.image.startsWith("/") && fs.existsSync(path.join("public", article.image)), `${article.slug}: image`);
    const hrefs = [...new Set(links(article))];
    const internal = hrefs.filter(href => href.startsWith("/"));
    assert.ok(internal.length >= 3, `${article.slug}: distinct internal links`);
    for (const href of internal) {
      assert.ok(routes.has(href.split(/[?#]/)[0].replace(/\/$/, "") || "/"), `${article.slug}: unresolved ${href}`);
    }
    assert.ok(hrefs.some(href => href.startsWith("https://") && [
      "www.fda.gov", "www.nidcr.nih.gov", "www.mouthhealthy.org", "www.aboms.org",
      "www.medicare.gov", "www.irs.gov", "www.aaoms.org", "aaoms.org",
      "www.perio.org", "www.ada.org", "www.dbc.ca.gov", "search.dca.ca.gov",
    ].includes(new URL(href).hostname)), `${article.slug}: authoritative citation`);
  }
});

test("new slugs and substantial copy are unique against previous articles including the prior fourteen", () => {
  const { guideArticles } = require("../src/constants/guideArticles.ts");
  const { revisionArticles } = require("../src/constants/revisionArticles.ts");
  const { newInsightArticles } = require("../src/constants/newInsightArticles.ts");
  assert.equal(newInsightArticles.length, 14, "previous fourteen preserved");
  const priorArticles = [...guideArticles, ...revisionArticles, ...newInsightArticles];
  const priorCopy = new Set(priorArticles.flatMap(longCopy));
  // Legacy hand-authored articles also count as prior copy. Extract literal
  // prose from their TSX rather than limiting the check to structured registries.
  const legacyRoot = "src/app/(en)/for-patients/insights";
  for (const directory of fs.readdirSync(legacyRoot, { withFileTypes: true })) {
    if (!directory.isDirectory() || expected.includes(directory.name)) continue;
    const filename = path.join(legacyRoot, directory.name, "page.tsx");
    if (!fs.existsSync(filename)) continue;
    const parsed = ts.createSourceFile(filename, fs.readFileSync(filename, "utf8"),
      ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    function collect(node) {
      if (ts.isJsxText(node) || ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
        const copy = normalize(node.text);
        if (copy.length >= 80) priorCopy.add(copy);
      }
      ts.forEachChild(node, collect);
    }
    collect(parsed);
  }
  const seen = new Map();
  for (const article of articles) {
    assert.ok(!priorArticles.some(prior => prior.slug === article.slug), `${article.slug}: existing slug`);
    // FAQ answers may intentionally repeat their own article's explanation.
    for (const paragraph of new Set(longCopy(article))) {
      assert.ok(!priorCopy.has(paragraph), `${article.slug}: reused earlier copy`);
      assert.ok(!seen.has(paragraph), `${article.slug}: copy reused from ${seen.get(paragraph)}`);
      seen.set(paragraph, article.slug);
    }
  }
  assert.equal(new Set(insightPosts.map(post => post.slug)).size, insightPosts.length, "global slug uniqueness");
});
