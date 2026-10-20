// Verify the already-running preview. Never start or restart the app here.
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");
require.extensions[".ts"] = (module, filename) => {
  module._compile(ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText, filename);
};
const { clinicalInsightArticles } = require("../src/constants/clinicalInsightArticles.ts");
const { brandInsightArticles } = require("../src/constants/brandInsightArticles.ts");
const provenance = require("../research/article-sources/clinical-source-map.json");
const articles = [...clinicalInsightArticles, ...brandInsightArticles.slice(0, 8)];
const base = process.env.SEO_RUNTIME_BASE_URL || "http://127.0.0.1:5000";
const origin = "https://www.drantipov.com";
const decode = value => value.replace(/&(?:amp|lt|gt|quot|apos|nbsp|#\d+|#x[\da-f]+);/gi, entity => {
  const named = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&apos;": "'", "&nbsp;": " " };
  if (named[entity]) return named[entity];
  return String.fromCodePoint(entity.startsWith("&#x") ? parseInt(entity.slice(3), 16) : parseInt(entity.slice(2), 10));
});
const normalize = value => value.replace(/\s+/g, " ").trim();
const plain = html => normalize(decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "").replace(/<[^>]+>/g, "")));
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)]
  .map(match => [match[1], decode(match[2])]));
const nodes = html => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
  .flatMap(match => {
    const value = JSON.parse(match[1]);
    return Array.isArray(value) ? value : value["@graph"] || [value];
  });
const paras = article => [article.intro, ...article.sections.flatMap(section => [
  ...(section.paras || []), ...(section.list || []),
])];
const paraText = para => typeof para === "string" ? para :
  para.map(segment => typeof segment === "string" ? segment : segment.text).join("");
async function get(route) {
  const response = await fetch(new URL(route, base), { signal: AbortSignal.timeout(60000) });
  assert.equal(response.status, 200, `${route}: expected HTTP 200 from running preview`);
  return response.text();
}
let discovery;
function getDiscovery() {
  discovery ||= Promise.all([get("/sitemap.xml"), get("/for-patients/insights")]);
  return discovery;
}

test("seven new plus eight existing pages exactly match fifteen unique requested source URLs", () => {
  assert.equal(clinicalInsightArticles.length, 7);
  assert.equal(brandInsightArticles.length, 9);
  assert.equal(articles.length, 15);
  assert.equal(new Set(articles.map(article => article.slug)).size, 15);
  assert.equal(new Set(provenance.map(item => item.url)).size, 15);
  assert.deepEqual(articles.map(article => article.slug), provenance.map(item => item.slug));
});

for (const article of articles) {
  test(`${article.slug}: live author, source/table/FAQ parity, canonical and discovery`, async () => {
    const route = `/for-patients/insights/${article.slug}`;
    const html = await get(route);
    const visible = plain(html);
    assert.match(html, /<html[^>]*lang="en"/);
    const tags = [...html.matchAll(/<link\b[^>]+>/gi)].map(match => attributes(match[0]));
    assert.equal(tags.filter(tag => tag.rel === "canonical").length, 1);
    assert.equal(tags.find(tag => tag.rel === "canonical")?.href, origin + route);
    assert.ok(!tags.some(tag => tag.hreflang === "ru"), "no nonexistent Russian alternate");
    assert.equal([...html.matchAll(/<h1\b/gi)].length, 1);
    assert.ok(visible.includes(article.title));
    assert.ok(visible.includes(normalize(article.disclaimer)));
    assert.ok(visible.includes(`By ${article.author}. Clinical review pending.`), "author and review status are separate");
    assert.ok(!visible.includes("Medically reviewed by"), "no unsupported clinical review claim");
    assert.ok([...html.matchAll(/<a\b[^>]*href="\/about"[^>]*>([\s\S]*?)<\/a>/gi)]
      .some(match => plain(match[1]) === article.author), "visible linked author byline");
    for (const para of paras(article)) assert.ok(visible.includes(normalize(paraText(para))), "source paragraph/list parity");
    for (const section of article.sections) {
      assert.ok(visible.includes(section.heading));
      if (section.table) {
        for (const cell of [...section.table.headers, ...section.table.rows.flat()]) {
          assert.ok(visible.includes(normalize(cell)), "table source parity");
        }
      }
    }
    const tables = [...html.matchAll(/<tbody\b[^>]*>([\s\S]*?)<\/tbody>/gi)];
    assert.ok(tables.some(match => [...match[1].matchAll(/<tr\b/gi)].length >= 4), "four-plus table data rows");
    const schemas = nodes(html);
    const schema = schemas.filter(node => node["@type"] === "Article");
    assert.equal(schema.length, 1);
    assert.equal(schema[0].url, origin + route);
    assert.equal(schema[0].headline, article.title);
    assert.equal(schema[0].author["@type"], "Person");
    assert.equal(schema[0].author.name, "Dr. Alexander V. Antipov, DDS");
    assert.equal(schema[0].author.url, `${origin}/about`);
    assert.equal(schema[0].author["@id"], `${origin}/#physician`);
    assert.ok(!schema[0].reviewedBy, "author attribution must not fabricate medical review");
    const faq = schemas.filter(node => node["@type"] === "FAQPage");
    assert.equal(faq.length, 1);
    assert.ok(faq[0].mainEntity.length >= 6 && faq[0].mainEntity.length <= 8);
    assert.deepEqual(faq[0].mainEntity.map(question => ({
      question: question.name, answer: question.acceptedAnswer.text,
    })), article.faqs, "FAQ schema parity");
    for (const item of article.faqs) {
      assert.ok(visible.includes(normalize(item.question)), "visible FAQ question");
      assert.ok(visible.includes(normalize(item.answer)), "visible FAQ answer");
    }
    const anchors = [...html.matchAll(/<a\b[^>]+>/gi)].map(match => attributes(match[0]).href);
    const sourceLinks = [...new Set(paras(article).flatMap(para => typeof para === "string" ? [] :
      para.filter(segment => typeof segment !== "string").map(segment => segment.href)))];
    assert.ok(sourceLinks.filter(href => href.startsWith("/")).length >= 3);
    assert.ok(sourceLinks.some(href => href.startsWith("https://")));
    for (const href of sourceLinks) assert.ok(anchors.includes(href), `visible source link ${href}`);
    const images = [...html.matchAll(/<img\b[^>]+>/gi)].map(match => attributes(match[0]));
    assert.ok(images.some(image => image.alt === article.heroAlt &&
      (image.src === article.image || image.src?.includes(encodeURIComponent(article.image)))), "hero image parity");
    const imageResponse = await fetch(new URL(article.image, base), { signal: AbortSignal.timeout(30000) });
    assert.equal(imageResponse.status, 200);
    assert.match(imageResponse.headers.get("content-type") || "", /^image\//);
    const [sitemap, hub] = await getDiscovery();
    const location = `<loc>${origin}${route}</loc>`;
    assert.equal(sitemap.split(location).length - 1, 1, "sitemap canonical registered once");
    assert.ok(!sitemap.includes(`<loc>${origin}/ru${route}</loc>`), "no fake RU sitemap entry");
    assert.ok([...hub.matchAll(/<a\b[^>]+>/gi)].some(match => attributes(match[0]).href === route), "hub inbound link");
  });
}
