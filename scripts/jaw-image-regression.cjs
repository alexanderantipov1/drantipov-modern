const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
require.extensions[".ts"] = (module, filename) => {
  module._compile(ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText, filename);
};

// JPEG SOF dimensions, including progressive JPEGs. Do not infer resolution from "@2x".
function jpegSize(file) {
  const bytes = fs.readFileSync(path.join(root, "public", file));
  assert.equal(bytes.readUInt16BE(0), 0xffd8, `${file} must be a JPEG`);
  for (let i = 2; i < bytes.length - 9;) {
    if (bytes[i] !== 0xff) { i++; continue; }
    const marker = bytes[i + 1];
    if ([0xc0, 0xc1, 0xc2, 0xc3].includes(marker)) {
      return { width: bytes.readUInt16BE(i + 7), height: bytes.readUInt16BE(i + 5) };
    }
    if (marker === 0xd8 || marker === 0xd9 || marker === 0x01) { i += 2; continue; }
    i += 2 + bytes.readUInt16BE(i + 2);
  }
  throw new Error(`No JPEG dimensions: ${file}`);
}

test("EN/RU jaw case references exist and use the largest actual first-view photo available", () => {
  for (const source of ["src/constants/cases.ts", "src/constants/ruCases.ts"]) {
    const data = read(source).split("export const correctiveJawSurgeryCases")[1].split("export const ")[0];
    for (const id of ["045", "046", "047", "048", "049", "050", "051", "052"]) {
      const entry = data.split(`id: "oms000${id}"`)[1].split("  },")[0];
      const match = entry.match(/imagePath: "(\/images\/cases\/corrective-jaw-surgery\/[^"]+)"/);
      assert.ok(match, `${source}: missing oms000${id} image`);
      const selected = match[1].slice(1);
      const dir = path.dirname(selected);
      const choices = fs.readdirSync(path.join(root, "public", dir)).filter((name) => name.startsWith("preview"));
      const best = Math.max(...choices.map((name) => jpegSize(path.join(dir, name)).width));
      assert.equal(jpegSize(selected).width, best, `${source}: oms000${id} uses lower resolution than available`);
    }
  }
});

test("clinical comparisons are never cropped or blown up into full-bleed jaw heroes", () => {
  for (const source of ["src/components/BeforeAfter.tsx", "src/components/ru-home/RuBeforeAfter.tsx"]) {
    assert.match(read(source), /aspect-\[720\/476\]/);
    assert.match(read(source), /max-w-\[720px\]/);
    assert.match(read(source), /caseData\.id\.startsWith\("oms"\) \? \(/);
    assert.match(read(source), /className="w-full h-auto object-contain"/);
  }
  assert.match(read("src/components/BeforeAfterSlider.tsx"), /className="object-contain/);
  assert.match(read("src/components/CaseDetail.tsx"), /jawCase \? "object-contain" : "object-cover"/);
  assert.match(read("src/components/expertise/ExpertisePageHero.tsx"), /<span>Before<\/span><span>After<\/span>/);
  assert.match(read("src/components/ru-home/RuExpertiseTemplate.tsx"), /<span>До<\/span><span>После<\/span>/);
  assert.match(read("src/components/PageHero.tsx"), /max-w-\[415px\]/);
  assert.deepEqual(jpegSize("images/procedures/corrective-jaw-surgery@2x-0c58ba67.jpg"), { width: 384, height: 200 });
  assert.deepEqual(jpegSize("images/corrective-jaw-surgery/corrective-jaw-surgery-97156448.jpg"), { width: 415, height: 296 });
});

test("all 34 historical jaw cases retain real same-case photos in both galleries, including 052", () => {
  const config = read("src/constants/jawGalleryPhotos.ts");
  const replacements = Object.fromEntries(
    [...config.matchAll(/"(\d{3}\/\d+)": "(preview(?:@2x)?-[a-f0-9]+\.jpg)"/g)].map(([, key, file]) => [key, file])
  );
  const small360 = new Set(config.split("const width360")[1].split("]);")[0].match(/"\d{3}\/\d+"/g).map((s) => s.slice(1, -1)));
  const small640 = new Set(config.split("const width640")[1].split("]);")[0].match(/"\d{3}\/\d+"/g).map((s) => s.slice(1, -1)));
  for (const source of ["src/components/BeforeAfter.tsx", "src/components/ru-home/RuBeforeAfter.tsx"]) {
    const contents = read(source);
    const gallery = contents.split("const jawCases")[1].split("const implantCases")[0];
    assert.equal((gallery.match(/id: "oms000\d{3}"/g) || []).length, 34);
    assert.match(gallery, /id: "oms000052"/);
    assert.match(contents, /showAll \? activeCat\.cases : activeCat\.cases\.slice\(0, 6\)/);
    assert.match(contents, /setShowAll\(!showAll\)/);
    const refs = [...gallery.matchAll(/"(\/images\/cases\/corrective-jaw-surgery\/oms000(\d{3})\/(\d+)\/gallery@2x-[a-f0-9]+\.jpg)"/g)];
    assert.equal(refs.length, 177);
    for (const [, src, id, slot] of refs) {
      const key = `${id}/${slot}`;
      assert.ok(fs.existsSync(path.join(root, "public", src)), `${source}: missing ${src}`);
      const replacement = replacements[key];
      const effective = replacement ? path.join(path.dirname(src), replacement) : src;
      assert.ok(fs.existsSync(path.join(root, "public", effective)), `${source}: missing matching ${effective}`);
      assert.equal(effective.split("/")[5], src.split("/")[5], "view must stay in the same case/slot");
      const actual = jpegSize(effective.slice(1)).width;
      const cap = small360.has(key) ? 360 : small640.has(key) ? 640 : 720;
      assert.ok(actual >= cap, `${source}: ${effective} has ${actual}px but renders up to ${cap}px`);
    }
  }
});

test("each EN/RU jaw detail case exposes its verified profile and existing same-case alternate views", () => {
  const { jawCaseAdditionalViews, jawGalleryPhoto } = require("../src/constants/jawGalleryPhotos.ts");
  const { correctiveJawSurgeryCases } = require("../src/constants/cases.ts");
  const { correctiveJawSurgeryCases: ruCases } = require("../src/constants/ruCases.ts");
  const confirmedProfiles = {
    oms000045: "/images/cases/corrective-jaw-surgery/oms000045/1/preview@2x-9b9e2864.jpg",
    oms000046: "/images/cases/corrective-jaw-surgery/oms000046/2/gallery@2x-92e0b6c0.jpg",
    oms000047: "/images/cases/corrective-jaw-surgery/oms000047/2/gallery@2x-0f0db188.jpg",
    oms000048: "/images/cases/corrective-jaw-surgery/oms000048/2/gallery@2x-a1cab86d.jpg",
    oms000049: "/images/cases/corrective-jaw-surgery/oms000049/2/gallery@2x-88276f2e.jpg",
    oms000050: "/images/cases/corrective-jaw-surgery/oms000050/2/gallery@2x-759e36c4.jpg",
    oms000051: "/images/cases/corrective-jaw-surgery/oms000051/2/gallery@2x-0d180ee1.jpg",
    oms000052: "/images/cases/corrective-jaw-surgery/oms000052/2/gallery@2x-39848b9d.jpg",
  };
  assert.deepEqual(Object.keys(jawCaseAdditionalViews).sort(), Object.keys(confirmedProfiles).sort());
  for (const cases of [correctiveJawSurgeryCases, ruCases]) {
    for (const { id, imagePath } of cases) {
      const views = jawCaseAdditionalViews[id];
      assert.ok(views?.length, `${id}: missing alternate views`);
      assert.ok(id === "oms000045" ? imagePath === confirmedProfiles[id] : views.includes(confirmedProfiles[id]), `${id}: missing verified side profile`);
      assert.ok(fs.existsSync(path.join(root, "public", imagePath)), `${id}: missing main image`);
      assert.equal(new Set(views).size, views.length, `${id}: repeated alternate view`);
      for (const src of views) {
        assert.ok(src.startsWith(`/images/cases/corrective-jaw-surgery/${id}/`), `${id}: image from a different case: ${src}`);
        assert.ok(fs.existsSync(path.join(root, "public", src)), `${id}: missing alternate ${src}`);
        const effective = jawGalleryPhoto(src);
        assert.ok(fs.existsSync(path.join(root, "public", effective.src)), `${id}: missing displayed ${effective.src}`);
        assert.ok(jpegSize(effective.src.slice(1)).width >= Math.min(effective.width, 720), `${id}: alternate would be upscaled`);
      }
    }
  }
  const detail = read("src/components/CaseDetail.tsx");
  assert.match(detail, /jawCaseAdditionalViews\[caseData\.id\]/);
  assert.match(detail, /additionalJawViews\.map/);
  assert.match(detail, /jawGalleryPhoto\(src\)/);
  assert.match(detail, /className="w-full h-auto object-contain"/);
  assert.match(detail, /href=\{`\$\{localePrefix\}\/#before-after`\}/);
  assert.match(read("src/app/(en)/surgical-cases/corrective-jaw-surgery/page.tsx"), /href="\/#before-after"/);
  assert.match(read("src/app/ru/surgical-cases/corrective-jaw-surgery/page.tsx"), /href="\/ru\/#before-after"/);
});