// Run against the parent's already-built/running preview; this script never starts a server.
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");
require.extensions[".ts"] = (module, filename) => {
  module._compile(ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText, filename);
};
const { ruServiceDiscovery } = require("../src/data/ruServiceDiscovery.ts");
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
  .map(match => [match[1].toLowerCase(), decode(match[2])]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]+>`, "gi"))].map(match => attributes(match[0]));
const nodes = html => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
  .flatMap(match => {
    const value = JSON.parse(match[1]);
    return Array.isArray(value) ? value : value["@graph"] || [value];
  });
const fetched = new Map();
function get(route) {
  if (!fetched.has(route)) fetched.set(route, (async () => {
    const response = await fetch(new URL(route, base), { signal: AbortSignal.timeout(60000) });
    assert.equal(response.status, 200, `${route}: expected HTTP 200`);
    return response.text();
  })());
  return fetched.get(route);
}
const parentByGroup = { "full-arch": "full-arch-implants", multiple: "single-tooth", "bone-loss": "bone-grafting", cosmetic: "facial-cosmetic", "implant-care": "implant-rescue", planning: "single-tooth" };
const neutralSlugs = ["all-on-4-revision", "peri-implantitis", "implant-consultation", "sinus-lift"];

test("twelve RU services: unique metadata, canonical/lang, FAQ parity, images and discovery", async t => {
  assert.equal(ruServiceDiscovery.length, 12);
  const [hub, sitemap] = await Promise.all([get("/ru/expertise"), get("/sitemap.xml")]);
  const titles = new Set();
  const descriptions = new Set();
  for (const service of ruServiceDiscovery) {
    await t.test(service.id, async () => {
      const html = await get(service.href);
      const visible = plain(html);
      const links = tags(html, "link");
      const metas = tags(html, "meta");
      const canonical = links.filter(link => link.rel === "canonical");
      assert.equal(canonical.length, 1);
      assert.equal(canonical[0].href, origin + service.href);
      assert.match(html, /<html\b[^>]*lang="ru"/);
      assert.equal(metas.find(meta => meta.property === "og:locale")?.content, "ru_RU");
      assert.ok(!links.some(link => ["en", "x-default"].includes(link.hreflang)), "no nonexistent EN counterpart");
      const title = plain(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || "");
      const description = metas.find(meta => meta.name === "description")?.content;
      assert.match(title, /[А-Яа-яЁё]/);
       assert.ok(title.length <= 60, "concise page title");
      assert.ok(!titles.has(title), "unique title");
      assert.ok(description && description.length > 40 && /[А-Яа-яЁё]/.test(description), "specific Russian description");
      assert.ok(!descriptions.has(description), "unique description");
      titles.add(title);
      descriptions.add(description);
      assert.equal((title.match(/Антипов/gi) || []).length, 1, "single branding");
      assert.equal([...html.matchAll(/<h1\b/gi)].length, 1);
      assert.ok(!metas.some(meta => meta.name === "robots" && /noindex/.test(meta.content)), "indexable service");
      // The explicit disclaimer "a goal, not a guaranteed result" is not a promise.
      const claims = visible.replace(/цель,\s*а\s+не\s+гарантированный\s+результат/gi, "");
      assert.doesNotMatch(claims, /100\s*%\s*(?:успех|гарант)|полностью\s+безопасн|гарантированн(?:ый|ая|ое)\s+результат|без\s+риска\s+осложнений|пожизненная\s+гарантия/i);
      assert.doesNotMatch(visible, /Base64-Image-Removed|Редактору:|Выводим рандомные|медицински\s+проверено|клинически\s+проверено/i);
      const schemas = nodes(html);
      assert.ok(!schemas.some(node => node.reviewedBy), "no unsupported clinical-review attribution");
      const faqs = schemas.filter(node => node["@type"] === "FAQPage");
      assert.equal(faqs.length, 1);
      assert.ok(faqs[0].mainEntity.length >= 3, "substantive FAQ");
      for (const question of faqs[0].mainEntity) {
        assert.ok(visible.includes(normalize(question.name)), "visible FAQ question matches schema");
        assert.ok(visible.includes(normalize(question.acceptedAnswer.text)), "visible FAQ answer matches schema");
      }
      // These educational pages intentionally have no unapproved clinical photos.
      // Check any content images present, excluding shared branded chrome.
      const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || "";
      assert.ok(main, "rendered service main content");
       const mainText = plain(main);
       assert.match(mainText, /не заменяет очную консультацию/);
       assert.match(mainText, /Результат лечения не гарантирован/);
       assert.match(mainText, /Запись подтверждается сотрудником клиники/);
       assert.equal([...html.matchAll(/<footer\b/g)].length, 1, "one shared footer remains rendered");
       if (service.group === "cosmetic" || neutralSlugs.includes(service.id)) {
         assert.doesNotMatch(mainText, /4\.9\s*\(247\)|сертифицированн.*(?:филлер|ботулин)/i, "no invented rating or cosmetic credential");
         const consultation = main.match(/<section\b[^>]*id="consultation"[\s\S]*$/)?.[0] || "";
         assert.ok(consultation, "service inquiry section renders");
         assert.match(plain(consultation), /Заявка на консультацию/);
         assert.match(plain(consultation), /Шаг 1 из 2/);
         assert.doesNotMatch(plain(consultation), /бесплат|3D|КТ включена|отсутствуют зубы|рассроч|FICO|Запись подтверждена/i);
       }
      for (const image of tags(main, "img")) {
        assert.match(image.alt || "", /[А-Яа-яЁё]/, "Russian descriptive image alt");
        const renderedImage = await fetch(new URL(image.src, base), { signal: AbortSignal.timeout(30000) });
        assert.equal(renderedImage.status, 200, "rendered image resolves");
        assert.match(renderedImage.headers.get("content-type") || "", /^image\//);
      }
      const og = metas.find(meta => meta.property === "og:image")?.content;
      assert.ok(og, "social image");
      const imageUrl = new URL(og, base);
      const imageResponse = await fetch(new URL(imageUrl.pathname + imageUrl.search, base), { signal: AbortSignal.timeout(30000) });
      assert.equal(imageResponse.status, 200, "social image resolves");
      assert.match(imageResponse.headers.get("content-type") || "", /^image\//);
      const anchors = tags(html, "a").map(link => link.href).filter(Boolean);
      // The service's related-materials section is itself a <nav>. Keep it:
      // limiting this check to <main> excludes global chrome without deleting
      // legitimate contextual navigation.
      const related = [...new Set(tags(main, "a").map(link => link.href)
        .filter(href => href?.startsWith("/ru/expertise/") && href !== service.href))];
      assert.ok(related.length >= 2, "relevant Russian service links");
      // Check local destinations without making requests to third-party sites.
      for (const href of [...new Set(anchors.filter(href => href.startsWith("/ru/") && !href.includes("#")))]) await get(href);
      assert.ok(tags(hub, "a").some(link => link.href === service.href), "hub inbound link");
      const hubList = nodes(hub).find(node => node["@type"] === "ItemList");
      assert.ok(hubList?.itemListElement.some(item => item.url === origin + service.href), "hub ItemList entry");
      const parent = await get(`/ru/expertise/${parentByGroup[service.group]}`);
      assert.ok(tags(parent, "a").some(link => link.href === service.href), "relevant parent inbound link");
      const location = `<loc>${origin}${service.href}</loc>`;
      assert.equal(sitemap.split(location).length - 1, 1, "sitemap entry exactly once");
      assert.ok(!sitemap.includes(`<loc>${origin}${service.href.replace(/^\/ru/, "")}</loc>`), "no invented EN sitemap route");
    });
  }
  assert.equal(titles.size, 12);
  assert.equal(descriptions.size, 12);
});
