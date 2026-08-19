/**
 * RU translation audit for the cost calculator.
 *
 * The funnel's copy (step and component names/descriptions, insurance plan
 * names) is authored in the DentalPrice dashboard and arrives over their API in
 * English only - their platform has no locale for AI Forms (the AI Smile widget
 * does, AI Forms does not, verified 2026-08-19). We translate it with our own
 * dictionary in src/lib/calcTranslations.ts, keyed by the stable DentalPrice id.
 *
 * Consequence: anything created in their dashboard AFTER a dictionary update
 * renders in English on /ru - silently, because the fallback is "show the
 * original" (deliberate: never blank, never a crash). This script walks the
 * live funnel of every package and fails when a field has no RU entry, so the
 * gap shows up before deploy instead of on a patient's screen.
 *
 * Usage:
 *   npm run calc:i18n-check              # dev server (localhost:3010) if up, else the API
 *   npm run calc:i18n-check -- --base=http://localhost:3000
 *
 * Exit codes: 0 = every field translated · 1 = missing translations
 *             2 = could not read the funnel (down API is NOT a pass)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SLUGS = ["all-on-468-per-arch", "zirconia-teeth", "snap-in-denture", "single-implant"];
const PROXY_BASE = process.argv.find((a) => a.startsWith("--base="))?.slice(7) || "http://localhost:3010";

/** Import a TypeScript module by transpiling it in memory (no build step). */
async function importTs(relPath) {
  const source = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}

/** Public key lives in source, not env - it ships in page markup by design. */
function publicKey() {
  const src = fs.readFileSync(path.join(ROOT, "src/lib/costCalculator.ts"), "utf8");
  return src.match(/CALC_PUBLIC_KEY\s*=\s*\n?\s*"([^"]+)"/)?.[1] ?? "";
}

async function getJson(url) {
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

/** Prefer our own proxy (it has a warm cache and matches what the site renders). */
async function readFunnels() {
  try {
    const steps = {};
    for (const slug of SLUGS) steps[slug] = await getJson(`${PROXY_BASE}/api/calc/steps?slug=${slug}`);
    const plans = (await getJson(`${PROXY_BASE}/api/calc/insurance`)).plans || [];
    return { steps, plans, source: `${PROXY_BASE} (dev server proxy)` };
  } catch {
    /* dev server not running - fall back to the vendor API directly */
  }

  const key = publicKey();
  const api = "https://api.dentalprice.ai/api/v1/public";
  const list = await getJson(`${api}/packages?public_key=${key}`);
  const packages = Array.isArray(list) ? list : list.packages || list.data || [];
  const match = (slug) => {
    const tests = {
      "all-on-468-per-arch": /all[\s-]*on/i,
      "zirconia-teeth": /zirconia|final\s*teeth/i,
      "snap-in-denture": /snap/i,
      "single-implant": /single/i,
    };
    return packages.find((p) => tests[slug].test(String(p?.name || "")));
  };

  const steps = {};
  for (const slug of SLUGS) {
    const pkg = match(slug);
    if (!pkg?.id) throw new Error(`package not found for slug "${slug}"`);
    steps[slug] = await getJson(`${api}/packages/${pkg.id}/steps-config?public_key=${key}`);
  }
  const raw = await getJson(`${api}/insurance-plans?public_key=${key}`);
  const arr = Array.isArray(raw) ? raw : raw.plans || raw.data || [];
  const plans = arr
    .filter((p) => p?.is_active !== false)
    .map((p) => ({ id: String(p?.id ?? ""), name: String(p?.plan_name ?? p?.name ?? ""), description: String(p?.description ?? "") }));
  return { steps, plans, source: "api.dentalprice.ai (direct)" };
}

const { hasRuTranslation } = await importTs("src/lib/calcTranslations.ts");
const { getSupplementalSteps } = await importTs("src/lib/calcSupplementalSteps.ts");

let data;
try {
  data = await readFunnels();
} catch (err) {
  console.error(`\n✗ Не удалось прочитать воронку: ${err.message}`);
  console.error("  Запустите dev-сервер (npm run dev) или проверьте api.dentalprice.ai.");
  console.error("  Это НЕ считается успешной проверкой.\n");
  process.exit(2);
}

const missing = [];
/** Same argument order as ApiFunnel's tField: the English name is the discriminator. */
const check = (where, id, english, field, value) => {
  if (!value) return;
  if (!hasRuTranslation(id, english, field)) missing.push({ where, id, field, english: String(value).replace(/\s+/g, " ").slice(0, 70) });
};

let checked = 0;
for (const slug of SLUGS) {
  const apiSteps = data.steps[slug]?.steps || [];
  // The funnel renders API steps plus our own client-side ones - audit both.
  const allSteps = [...apiSteps, ...getSupplementalSteps(slug)];
  for (const s of allSteps) {
    check(slug, s.id, s.name, "name", s.name);
    check(slug, s.id, s.name, "description", s.description);
    checked += 1 + (s.description ? 1 : 0);
    for (const c of s.components || []) {
      check(slug, c.id, c.name, "name", c.name);
      check(slug, c.id, c.name, "description", c.description);
      checked += 1 + (c.description ? 1 : 0);
    }
  }
}
for (const p of data.plans) {
  check("insurance", p.id, p.name, "name", p.name);
  check("insurance", p.id, p.name, "description", p.description);
  checked += 1 + (p.description ? 1 : 0);
}

console.log(`\nИсточник: ${data.source}`);
console.log(`Проверено текстовых полей: ${checked}`);

if (!missing.length) {
  console.log("✓ Все тексты калькулятора переведены на русский.\n");
  process.exit(0);
}

console.error(`\n✗ Без русского перевода: ${missing.length}\n`);
for (const m of missing) console.error(`  [${m.where}] ${m.id} .${m.field}\n      EN: ${m.english}`);
console.error(`\nДобавьте записи в src/lib/calcTranslations.ts (DICT), ключ - id выше.\n`);
process.exit(1);
