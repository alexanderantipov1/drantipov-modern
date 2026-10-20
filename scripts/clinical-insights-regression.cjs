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

const provenance = require("../research/article-sources/clinical-source-map.json");
const { clinicalInsightArticles: articles, getClinicalInsightArticle, buildMetadata } = require("../src/constants/clinicalInsightArticles.ts");
const { brandInsightArticles } = require("../src/constants/brandInsightArticles.ts");
const { newInsightArticles } = require("../src/constants/newInsightArticles.ts");
const { guideArticles } = require("../src/constants/guideArticles.ts");
const { revisionArticles } = require("../src/constants/revisionArticles.ts");
const { insightPosts, getRelatedInsights } = require("../src/constants/insights.ts");
const { indexableRoutes, finalizeMetadata, getSeoAlternates } = require("../src/lib/seo-foundation.ts");
const inventory = require("../src/lib/seo-route-inventory.json");
const attribution = { type: "Person", name: "Dr. Alexander V. Antipov, DDS", url: "/about" };
const requested = [...articles, ...brandInsightArticles.slice(0, 8)];
const paras = article => [article.intro, ...article.sections.flatMap(section => [
  ...(section.paras || []), ...(section.list || []),
])];
const text = para => typeof para === "string" ? para : para.map(segment =>
  typeof segment === "string" ? segment : segment.text).join("");
const links = article => paras(article).flatMap(para => typeof para === "string" ? [] :
  para.filter(segment => typeof segment !== "string").map(segment => segment.href));
const longCopy = article => [...paras(article), ...article.faqs.map(faq => faq.answer)]
  .map(text).map(value => value.toLowerCase().replace(/\s+/g, " ").trim()).filter(value => value.length >= 80);

test("16 requested URLs resolve to 15 unique source mappings: seven new, eight existing", () => {
  assert.equal(provenance.length, 15);
  assert.equal(new Set(provenance.map(item => item.url)).size, 15);
  assert.equal(new Set(provenance.map(item => item.slug)).size, 15);
  assert.equal(provenance.filter(item => item.registration === "new").length, 7);
  assert.equal(provenance.filter(item => item.registration === "existing").length, 8);
  assert.equal(provenance.filter(item => item.slug === "healthy-gums-around-dental-implants").length, 1,
    "repeated gum-health URL must not produce a duplicate article");
  assert.deepEqual(requested.map(article => article.slug), provenance.map(item => item.slug));
  for (const item of provenance) {
    assert.ok(fs.existsSync(item.research), `${item.slug}: saved research`);
    assert.ok(fs.readFileSync(item.research, "utf8").includes(item.url), `${item.slug}: provenance URL`);
    assert.equal(require(path.resolve(item.source)).article.slug, item.slug);
  }
});

test("seven new sources retain their content; exactly the requested fifteen have person attribution", () => {
  assert.equal(articles.length, 7);
  articles.forEach((article, index) => {
    const source = require(`../src/constants/clinicalInsightArticles/source-${index + 1}.ts`).article;
    assert.deepEqual(article, {
      ...source, author: attribution.name, authorAttribution: attribution, editorialReviewPending: true,
    });
    assert.equal(getClinicalInsightArticle(article.slug), article);
  });
  assert.equal(getClinicalInsightArticle("not-an-article"), undefined);
  for (const article of requested) {
    assert.equal(article.author, attribution.name);
    assert.deepEqual(article.authorAttribution, attribution);
    assert.equal(article.editorialReviewPending, true, "authorship is not evidence of clinical review");
  }
  assert.equal(brandInsightArticles.length, 9);
  const source9 = require("../src/constants/brandInsightArticles/source-9.ts").article;
  assert.deepEqual(brandInsightArticles[8], {
    ...source9, author: "Dr. Antipov Practice Editorial Team", editorialReviewPending: true,
  }, "brand source 9 retains prior behavior");
  assert.equal(newInsightArticles.length, 14);
  newInsightArticles.forEach((article, index) => {
    const source = require(`../src/constants/newInsightArticles/source-${index + 1}.ts`).article;
    // The existing source-10 wrapper appends this FDA citation. Preserve that
    // production baseline rather than treating its untouched draft as output.
    const sections = index === 9 ? source.sections.map((section, sectionIndex) => sectionIndex === 0 ? {
      ...section,
      paras: [
        ...(section.paras ?? []),
        [
          "For general implant benefits, risks and follow-up considerations, see the ",
          { text: "FDA's dental implant patient guidance", href: "https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know" },
          "; a new treating clinician still needs to examine your records and circumstances.",
        ],
      ],
    } : section) : source.sections;
    assert.deepEqual(article, {
      ...source, sections,
      author: "Dr. Antipov Practice Editorial Team", editorialReviewPending: true,
    }, "previous fourteen remain unchanged");
  });
});

test("all fifteen requested pages are discoverable once, canonical, and EN-only", () => {
  for (const article of requested) {
    const route = `/for-patients/insights/${article.slug}`;
    const page = fs.readFileSync(`src/app/(en)${route}/page.tsx`, "utf8");
    assert.ok(page.includes(`const slug = "${article.slug}"`));
    assert.match(page, /finalizeMetadata\(article \? buildMetadata\(article\)/);
    assert.match(page, /<InsightArticle article=\{article\}/);
    if (articles.includes(article)) assert.match(page, /getClinicalInsightArticle\(slug\)/);
    assert.equal(inventory.filter(value => value === route).length, 1);
    assert.equal(indexableRoutes.filter(value => value === route).length, 1);
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
      getRelatedInsights(post.slug).some(related => related.slug === article.slug)), "related inbound link");
  }
  assert.match(fs.readFileSync("src/app/sitemap.ts", "utf8"), /indexableRoutes\.map/);
});

test("new articles have tables, FAQs, disclaimers, authentic images and resolved content links", () => {
  for (const article of articles) {
    assert.ok(article.sections.some(section => section.table?.rows.length >= 4), `${article.slug}: table`);
    for (const section of article.sections) {
      if (section.table) assert.ok(section.table.rows.every(row => row.length === section.table.headers.length));
    }
    assert.ok(article.faqs.length >= 6 && article.faqs.length <= 8, `${article.slug}: FAQ count`);
    assert.equal(new Set(article.faqs.map(faq => faq.question)).size, article.faqs.length);
    assert.ok(article.faqs.every(faq => faq.question.trim() && faq.answer.trim()));
    assert.ok(article.disclaimer?.trim().length > 30);
    assert.ok(article.heroAlt.trim().length > 10);
    assert.ok(article.image.startsWith("/") && fs.existsSync(path.join("public", article.image)));
    const hrefs = [...new Set(links(article))];
    const internal = hrefs.filter(href => href.startsWith("/"));
    assert.ok(internal.length >= 3, `${article.slug}: three internal links`);
    for (const href of internal) assert.ok(indexableRoutes.includes(href.split(/[?#]/)[0].replace(/\/$/, "") || "/"),
      `${article.slug}: unresolved ${href}`);
    assert.ok(hrefs.some(href => href.startsWith("https://") && [
      "www.fda.gov", "www.nidcr.nih.gov", "www.mouthhealthy.org", "www.aaoms.org", "aaoms.org",
      "www.medicare.gov", "www.irs.gov", "www.perio.org", "www.ada.org", "www.niams.nih.gov",
      "www.nof.org", "www.bonehealthandosteoporosis.org", "www.niddk.nih.gov", "www.consumerfinance.gov",
    ].includes(new URL(href).hostname)), `${article.slug}: authoritative citation`);
  }
});

test("no new slug or substantial copy duplicates earlier structured or legacy content", () => {
  const prior = [...guideArticles, ...revisionArticles, ...newInsightArticles, ...brandInsightArticles];
  const priorCopy = new Set(prior.flatMap(longCopy));
  const root = "src/app/(en)/for-patients/insights";
  for (const directory of fs.readdirSync(root, { withFileTypes: true })) {
    if (!directory.isDirectory() || articles.some(article => article.slug === directory.name)) continue;
    const filename = path.join(root, directory.name, "page.tsx");
    if (!fs.existsSync(filename)) continue;
    const parsed = ts.createSourceFile(filename, fs.readFileSync(filename, "utf8"),
      ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    function collect(node) {
      if (ts.isJsxText(node) || ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
        const copy = node.text.toLowerCase().replace(/\s+/g, " ").trim();
        if (copy.length >= 80) priorCopy.add(copy);
      }
      ts.forEachChild(node, collect);
    }
    collect(parsed);
  }
  const seen = new Set();
  for (const article of articles) {
    assert.ok(!prior.some(item => item.slug === article.slug));
    for (const copy of new Set(longCopy(article))) {
      assert.ok(!priorCopy.has(copy), `${article.slug}: reused prior copy`);
      assert.ok(!seen.has(copy), `${article.slug}: duplicate new copy`);
      seen.add(copy);
    }
  }
  assert.equal(new Set(insightPosts.map(post => post.slug)).size, insightPosts.length);
});
