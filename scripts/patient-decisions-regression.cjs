const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");

require.extensions[".ts"] = (module, filename) => module._compile(
  ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText, filename);
const resolve = Module._resolveFilename;
Module._resolveFilename = function (name, ...args) {
  return resolve.call(this, name.startsWith("@/") ? path.resolve("src", name.slice(2)) : name, ...args);
};

const { patientDecisionArticles: articles } = require("../src/constants/patientDecisionArticles.ts");
const { insightPosts } = require("../src/constants/insights.ts");
const { indexableRoutes, getSeoAlternates } = require("../src/lib/seo-foundation.ts");
const map = require("../research/article-sources/patient-decisions-source-map.json");
const paras = a => [a.intro, ...a.sections.flatMap(s => s.paras || [])];
const text = p => typeof p === "string" ? p : p.map(s => typeof s === "string" ? s : s.text).join("");
const links = a => paras(a).flatMap(p => typeof p === "string" ? [] : p.filter(s => typeof s !== "string").map(s => s.href));
const normalize = s => s.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();

test("all six sources have unique original articles and discovery entries", () => {
  assert.equal(articles.length, 6);
  assert.equal(new Set(map.map(m => m.source)).size, 6);
  assert.deepEqual(map.map(m => m.slug), articles.map(a => a.slug));
  assert.equal(new Set(articles.map(a => a.metaTitle)).size, 6);
  assert.equal(new Set(articles.map(a => a.metaDescription)).size, 6);
  for (const a of articles) {
    const route = `/for-patients/insights/${a.slug}`;
    assert.equal(insightPosts.filter(p => p.slug === a.slug).length, 1);
    assert.ok(indexableRoutes.includes(route));
    assert.equal(getSeoAlternates(route).canonical, "https://www.drantipov.com" + route);
    assert.equal(getSeoAlternates(route).languages, undefined);
    assert.ok(fs.existsSync(`src/app/(en)${route}/page.tsx`));
    assert.ok(fs.existsSync(`public${a.image}`));
    assert.equal(a.authorAttribution.type, "Person");
    assert.equal(a.authorAttribution.name, "Dr. Alexander V. Antipov, DDS");
    assert.equal(a.editorialReviewPending, true);
    assert.ok(a.sections[0].table.rows.length >= 4);
    assert.ok(a.faqs.length >= 6 && a.faqs.length <= 8);
    assert.ok(a.disclaimer);
    assert.match(text(a.intro), /Antipov/);
    assert.match(text(a.intro), /Roseville/);
    const body = [...paras(a).map(text), ...a.faqs.map(f => f.answer)].join(" ");
    assert.ok(body.split(/\s+/).length >= 650, `substantial article: ${a.slug}`);
    assert.doesNotMatch(body, /Fusion Dental|Get Started Free|price-match guarantee|95[-–]98%/);
    assert.ok(links(a).some(h => h.startsWith("https://www.mouthhealthy.org/")));
    for (const href of links(a).filter(h => h.startsWith("/"))) assert.ok(indexableRoutes.includes(href), href);
  }
});

// Validate the generated production HTML, not only the article data.
for (const a of articles) test(`built page: ${a.slug}`, () => {
  const route = `/for-patients/insights/${a.slug}`;
  const html = fs.readFileSync(`.next/server/app${route}.html`, "utf8");
  const visible = normalize(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<\/(?:p|h[1-6]|div|li|td|th)>/gi, " ").replace(/<[^>]+>/g, ""));
  assert.ok(visible.includes(a.title));
  assert.ok(visible.includes("Clinical review pending."));
  assert.ok(visible.includes(a.author));
  assert.ok(html.includes(`href="https://www.drantipov.com${route}"`));
  assert.match(html, /<table\b/);
  assert.ok(!html.includes('hrefLang="ru"'));
  for (const p of paras(a)) assert.ok(visible.includes(normalize(text(p))), "rendered body parity");
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap(m => { const v = JSON.parse(m[1]); return Array.isArray(v) ? v : [v]; });
  const article = schemas.find(n => n["@type"] === "Article");
  assert.equal(article.author["@type"], "Person");
  assert.equal(article.author.name, a.author);
  const faq = schemas.find(n => n["@type"] === "FAQPage");
  assert.deepEqual(faq.mainEntity.map(q => ({ question: q.name, answer: q.acceptedAnswer.text })), a.faqs);
  for (const f of a.faqs) {
    assert.ok(visible.includes(normalize(f.question)));
    assert.ok(visible.includes(normalize(f.answer)));
  }
});
