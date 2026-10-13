// Run against an already-running server; this script never starts or restarts it.
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");

require.extensions[".ts"] = (module, filename) => {
  module._compile(ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText, filename);
};
const { brandInsightArticles: articles } = require("../src/constants/brandInsightArticles.ts");
const base = process.env.SEO_RUNTIME_BASE_URL || "http://127.0.0.1:5000";
const origin = "https://www.drantipov.com";
const decode = value => value.replace(/&(?:amp|lt|gt|quot|apos|nbsp|#\d+|#x[\da-f]+);/gi, entity => {
  const named = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&apos;": "'", "&nbsp;": " " };
  if (named[entity]) return named[entity];
  return String.fromCodePoint(entity.startsWith("&#x") ? parseInt(entity.slice(3), 16) : parseInt(entity.slice(2), 10));
});
const plain = html => decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "").replace(/<[^>]+>/g, ""))
  .replace(/\s+/g, " ").trim();
const paraText = para => typeof para === "string" ? para :
  para.map(segment => typeof segment === "string" ? segment : segment.text).join("");
const paras = article => [article.intro, ...article.sections.flatMap(section => [
  ...(section.paras || []), ...(section.list || []),
])];
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)]
  .map(match => [match[1], decode(match[2])]));
const nodes = html => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
  .flatMap(match => {
    const parsed = JSON.parse(match[1]);
    return Array.isArray(parsed) ? parsed : parsed["@graph"] || [parsed];
  });
async function get(route) {
  const response = await fetch(new URL(route, base), { signal: AbortSignal.timeout(60000) });
  assert.equal(response.status, 200, `${route}: HTTP status (is the preview running?)`);
  return response.text();
}
let discovery;
function getDiscovery() {
  discovery ||= Promise.all([get("/sitemap.xml"), get("/for-patients/insights")]);
  return discovery;
}

test("runtime registry contains exactly nine distinct articles", () => {
  assert.equal(articles.length, 9);
  assert.equal(new Set(articles.map(article => article.slug)).size, 9);
});

for (const article of articles) {
  test(`${article.slug}: live source parity, editorial status, canonical and discovery`, async () => {
    const route = `/for-patients/insights/${article.slug}`;
    const html = await get(route);
    const text = plain(html);
    assert.match(html, /<html[^>]*lang="en"/);
    const tags = [...html.matchAll(/<link\b[^>]+>/gi)].map(match => attributes(match[0]));
    assert.equal(tags.find(tag => tag.rel === "canonical")?.href, origin + route);
    assert.ok(!tags.some(tag => tag.hreflang === "ru"), "no nonexistent Russian alternate");
    assert.ok(text.includes(article.title), "visible title");
    assert.ok(text.includes(article.disclaimer), "visible disclaimer");
    assert.ok(text.includes(`By ${article.author}. Clinical review pending`), "editorial-team attribution");
    assert.ok(text.includes("this article has not yet been medically reviewed by"), "explicit pending review");
    for (const para of paras(article)) {
      assert.ok(text.includes(paraText(para).replace(/\s+/g, " ").trim()), "visible source paragraph/list parity");
    }
    for (const section of article.sections) {
      assert.ok(text.includes(section.heading), "visible section heading");
      if (section.table) {
        for (const cell of [...section.table.headers, ...section.table.rows.flat()]) {
          assert.ok(text.includes(cell), "visible table source parity");
        }
      }
    }
    const tables = [...html.matchAll(/<tbody\b[^>]*>([\s\S]*?)<\/tbody>/gi)];
    assert.ok(tables.some(match => [...match[1].matchAll(/<tr\b/gi)].length >= 4), "four-plus data rows");
    const schemas = nodes(html);
    const schema = schemas.find(node => node["@type"] === "Article");
    assert.ok(schema, "Article schema");
    assert.equal(schema.url, origin + route);
    assert.equal(schema.author["@type"], "Organization", "no doctor authorship");
    assert.equal(schema.author.name, article.author);
    assert.ok(!schema.reviewedBy, "no clinical review claim");
    const faq = schemas.filter(node => node["@type"] === "FAQPage");
    assert.equal(faq.length, 1);
    assert.ok(faq[0].mainEntity.length >= 6 && faq[0].mainEntity.length <= 8);
    assert.deepEqual(faq[0].mainEntity.map(question => ({
      question: question.name, answer: question.acceptedAnswer.text,
    })), article.faqs, "FAQ schema source parity");
    for (const item of article.faqs) {
      assert.ok(text.includes(item.question), "visible FAQ question");
      assert.ok(text.includes(item.answer), "visible FAQ answer");
    }
    const anchors = [...html.matchAll(/<a\b[^>]+>/gi)].map(match => attributes(match[0]).href);
    const sourceLinks = [...new Set(paras(article).flatMap(para => typeof para === "string" ? [] :
      para.filter(segment => typeof segment !== "string").map(segment => segment.href)))];
    assert.ok(sourceLinks.filter(href => href.startsWith("/")).length >= 3, "three distinct content internal links");
    assert.ok(sourceLinks.some(href => href.startsWith("https://")), "external citation");
    for (const href of sourceLinks) assert.ok(anchors.includes(href), `visible source link ${href}`);
    const images = [...html.matchAll(/<img\b[^>]+>/gi)].map(match => attributes(match[0]));
    assert.ok(images.some(image => image.alt === article.heroAlt &&
      (image.src === article.image || image.src?.includes(encodeURIComponent(article.image)))), "source hero image");
    const imageResponse = await fetch(new URL(article.image, base), { signal: AbortSignal.timeout(30000) });
    assert.equal(imageResponse.status, 200, "image asset resolves");
    assert.match(imageResponse.headers.get("content-type") || "", /^image\//);
    const [sitemap, hub] = await getDiscovery();
    assert.ok(sitemap.includes(`<loc>${origin}${route}</loc>`), "sitemap URL");
    assert.ok(!sitemap.includes(`<loc>${origin}/ru${route}</loc>`), "no invented RU sitemap entry");
    assert.ok([...hub.matchAll(/<a\b[^>]+>/gi)].some(match => attributes(match[0]).href === route), "hub inbound link");
  });
}
