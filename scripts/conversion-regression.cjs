// Offline tests: no live fetch, mail SDK, or real lead delivery.
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

function load(file, mocks = {}, globals = {}) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  vm.runInNewContext(code, {
    exports, URLSearchParams, Date, console: { error() {}, warn() {} },
    process: { env: {} },
    fetch: () => { throw Error("Unmocked network forbidden"); },
    require: (id) => {
      if (!(id in mocks)) throw Error(`Unmocked import: ${id}`);
      return mocks[id];
    },
    ...globals,
  }, { filename: file });
  return exports;
}
const baseMocks = {
  "next/server": { NextResponse: { json: (body, options) => ({ body, status: options?.status || 200 }) } },
  "@/lib/rate-limit": { checkRateLimit: () => null },
};
const request = (body) => ({ json: async () => body, headers: { get: () => null } });
const lead = { name: "Offline Test", phone: "9165550100", lang: "ru", started_at: "1" };

test("RU/full-arch lead: no configuration or both delivery failures cannot report success", async () => {
  const mocks = { ...baseMocks, "@/lib/email": { isEmailConfigured: () => false } };
  const route = load("src/app/api/lead/route.ts", mocks);
  const result = await route.POST(request(lead));
  assert.equal(result.status, 503);
  assert.equal(result.body.ok, false);
});

test("RU/full-arch lead retains Salesforce WebToLead and email backup", async () => {
  let endpoint, payload, emails = 0;
  const route = load("src/app/api/lead/route.ts", {
    ...baseMocks, "@/lib/email": {
      isEmailConfigured: () => true,
      sendContactNotification: async () => { emails++; return { success: true }; },
    },
  }, {
    process: { env: { SALESFORCE_ORG_ID: "offline-test-only" } },
    fetch: async (url, options) => { endpoint = url; payload = options.body; return { ok: true }; },
  });
  const result = await route.POST(request(lead));
  assert.equal(result.body.ok, true);
  assert.equal(endpoint, "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8");
  assert.equal(payload.get("phone"), lead.phone);
  assert.equal(emails, 1);
});

test("RU lead upstream failures return 503, invalid contacts never deliver", async () => {
  let calls = 0;
  const route = load("src/app/api/lead/route.ts", {
    ...baseMocks, "@/lib/email": {
      isEmailConfigured: () => true,
      sendContactNotification: async () => ({ success: false, message: "offline failure" }),
    },
  }, {
    process: { env: { SALESFORCE_ORG_ID: "offline-test-only" } },
    fetch: async () => { calls++; return { ok: false, status: 503, text: async () => "" }; },
  });
  assert.equal((await route.POST(request(lead))).status, 503);
  assert.equal((await route.POST(request(null))).status, 400);
  assert.equal((await route.POST(request({ name: "Offline" }))).status, 400);
  assert.equal(calls, 1);
});

test("EN consultation: missing configuration / failed admin mail fail explicitly", async () => {
  for (const configured of [false, true]) {
    const route = load("src/app/api/consultation/route.ts", {
      ...baseMocks,
      "@/lib/validations/consultation": { consultationFormSchema: { parse: x => x } },
      "@/lib/email": {
        isEmailConfigured: () => configured,
        sendConsultationNotification: async () => ({ success: false }),
        sendConsultationConfirmation: async () => { throw Error("Must not confirm failed lead"); },
      },
    });
    assert.equal((await route.POST(request({ firstName: "Offline" }))).status, 503);
  }
});

test("EN multistep preserves Fusion endpoint, phone normalization and DOB; rejects bad phone", async () => {
  const calls = [];
  const route = load("src/app/api/submit-consultation/route.ts", {
    ...baseMocks, "@/lib/recaptcha": { verifyRecaptcha: async () => ({ valid: true }) },
  }, {
    process: { env: { NODE_ENV: "production" } },
    fetch: async (url, options) => {
      calls.push({ url, data: JSON.parse(options.body) });
      return { ok: true, status: 200, text: async () => '{"success":true}' };
    },
  });
  const data = { firstName: "Offline", lastName: "Test", email: "offline@example.invalid",
    phone: "+1 (916) 555-0100", dob: "1990-01-01", recaptchaToken: "mock-only" };
  assert.equal((await route.POST(request(data))).status, 200);
  assert.equal(calls[0].url, "https://api.fusiondentalimplants.com/api/v1/user-data");
  assert.equal(calls[0].data.phone, "9165550100");
  assert.equal(calls[0].data.dob, "1990-01-01");
  assert.equal((await route.POST(request({ ...data, phone: "123" }))).status, 400);
  assert.equal(calls.length, 1);
});

test("Consent defaults denied, remembered rejection differs from no choice, withdrawal clears/reloads", () => {
  const cookies = new Map();
  class CookieManager {
    getJSONCookie(n) { return cookies.get(n) || null; }
    setJSONCookie(n, v) { cookies.set(n, v); }
    hasCookie(n) { return cookies.has(n); }
    deleteCookie(n) { cookies.delete(n); }
  }
  let reloads = 0;
  const window = { dataLayer: [], dispatchEvent() {}, location: { hostname: "www.example.invalid", reload() { reloads++; } } };
  const { ConsentManager, hasAnalyticsConsent } = load("src/lib/tracking.ts",
    { "./cookies": { CookieManager } }, { window, document: { cookie: "_ga=old; _fdi_cid=old" }, Event: class {} });
  const manager = new ConsentManager(new CookieManager());
  manager.initialize();
  assert.equal(window.dataLayer[0][2].analytics_storage, "denied");
  assert.equal(manager.hasConsent(), false);
  assert.equal(hasAnalyticsConsent(), false);
  manager.rejectAll();
  assert.equal(manager.hasConsent(), true);
  assert.equal(hasAnalyticsConsent(), false);
  manager.acceptAll();
  assert.equal(hasAnalyticsConsent(), true);
  manager.rejectAll();
  assert.equal(hasAnalyticsConsent(), false);
  assert.equal(reloads, 1);
});

test("Primary EN/RU form source still routes to the tested handlers", () => {
  for (const [file, endpoint] of [
    ["src/components/forms/MultiStepConsultationForm.tsx", "/api/submit-consultation"],
    ["src/components/forms/ConsultationForm.tsx", "/api/consultation"],
    ["src/components/RussianMultiStepForm.tsx", "/api/lead"],
    ["src/components/FullArchLeadForm.tsx", "/api/lead"],
  ]) assert.ok(fs.readFileSync(file, "utf8").includes(`fetch("${endpoint}"`));
  const gate = fs.readFileSync("src/components/analytics/ConsentGatedTracking.tsx", "utf8");
  assert.ok(gate.indexOf("if (!accepted) return null") < gate.indexOf("<GoogleAnalytics"));
});