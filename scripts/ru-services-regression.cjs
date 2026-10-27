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
const seo = require("../src/lib/seo-foundation.ts");
const inventory = require("../src/lib/seo-route-inventory.json");
const read = file => fs.readFileSync(file, "utf8");
const slugs = ["all-on-4", "all-on-5", "all-on-6", "multiple-teeth-implants", "pterygoid-implants", "botox", "lip-augmentation", "dermal-fillers", "all-on-4-revision", "peri-implantitis", "implant-consultation", "sinus-lift"];

test("all twelve Russian services have distinct, meaningful discovery entries and sitemap registration", () => {
  assert.deepEqual(ruServiceDiscovery.map(item => item.id), slugs);
  assert.equal(new Set(ruServiceDiscovery.map(item => item.shortTitle)).size, 12);
  assert.equal(new Set(ruServiceDiscovery.map(item => item.description)).size, 12);
  assert.equal(slugs.filter(slug => slug === "lip-augmentation").length, 1);
  assert.deepEqual(inventory, [...new Set(inventory)].sort(), "sitemap inventory stays sorted and unique");
  for (const item of ruServiceDiscovery) {
    assert.equal(item.href, `/ru/expertise/${item.id}`);
    assert.match(item.shortTitle, /[А-Яа-яЁё]/);
    assert.ok(item.description.length > 40);
    assert.equal(inventory.filter(route => route === item.href).length, 1);
    assert.equal(seo.getSeoAlternates(item.href).canonical, seo.canonicalOrigin + item.href);
    assert.equal(seo.getSeoAlternates(item.href).languages, undefined, "broader EN services are not translations");
    assert.ok(!inventory.includes(item.href.replace(/^\/ru/, "")), "no fabricated English route");
  }
  assert.match(read("src/app/sitemap.ts"), /indexableRoutes\.map/);
});

test("hub renders the same twelve discovery entries as its ItemList", () => {
  const hub = read("src/app/ru/expertise/page.tsx");
  assert.match(hub, /\.\.\.ruServiceDiscovery,/);
  assert.match(hub, /ruExpertise\.map/);
  assert.match(hub, /ruServiceDiscovery\.map/);
  assert.match(hub, /url: `\$\{siteConfig\.url\}\$\{service\.href\}`/);
});

test("topic parents expose contextual links rather than relying on a hidden global menu", () => {
  const groups = {
    "full-arch-implants": "full-arch",
    "single-tooth": "multiple",
    "facial-cosmetic": "cosmetic",
    "zygomatic-implants": "bone-loss",
    "bone-grafting": "bone-loss",
    "implant-rescue": "implant-care",
  };
  for (const [slug, group] of Object.entries(groups)) {
    assert.ok(read(`src/app/ru/expertise/${slug}/page.tsx`).includes(`<RuServiceDetailsLinks group="${group}" />`));
  }
  assert.ok(read("src/app/ru/expertise/single-tooth/page.tsx").includes('<RuServiceDetailsLinks group="planning" />'));
  const component = read("src/components/ru-home/RuServiceDetailsLinks.tsx");
  assert.match(component, /service\.group === group/);
  assert.match(component, /href=\{service\.href\}/);
  assert.match(read("src/components/ru-home/RuNavbar.tsx"), /slug: "facial-cosmetic"/);
});

test("discovery copy adds no unsupported clinical verification, outcomes or urgency claims", () => {
  const discovery = JSON.stringify(ruServiceDiscovery) + read("src/components/ru-home/RuServiceDetailsLinks.tsx");
  assert.doesNotMatch(discovery, /без\s+риска|без\s+осложнений|100\s*%|пожизненн|клинически\s+проверен|проверено\s+врачом|лучший\s+метод|без\s+костной\s+пластики\s+для\s+всех/i);
  assert.doesNotMatch(discovery, /рандомн|Base64-Image-Removed|Редактору:/i);
});
