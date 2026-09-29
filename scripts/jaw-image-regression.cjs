const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

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