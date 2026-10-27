// Offline component/payload tests: no app server or real delivery.
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

function load(file, mocks, globals = {}) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
    reportDiagnostics: true,
  });
  assert.equal(code.diagnostics?.length ?? 0, 0, `Syntax diagnostics in ${file}`);
  vm.runInNewContext(code.outputText, {
    exports,
    URL,
    require: id => {
      if (id in mocks) return mocks[id];
      if (id === "react/jsx-runtime") return require(id);
      throw new Error(`Unmocked import: ${id}`);
    },
    console: { error() {} },
    ...globals,
  }, { filename: file });
  return exports;
}

const el = tag => ({ children, ...props }) => React.createElement(tag, props, children);
function formHarness(props = {}, deliveryOK = true) {
  let state = [], cursor = 0, submit, defaults, requests = [];
  const useState = initial => {
    const i = cursor++;
    if (!(i in state)) state[i] = initial;
    return [state[i], value => { state[i] = value; }];
  };
  const mocks = {
    react: { useState },
    "react-hook-form": {
      useForm: options => {
        defaults = options.defaultValues;
        return {
          register: name => ({ name, ...(name === "interest" ? { defaultValue: defaults[name] } : {}) }),
          handleSubmit: fn => { submit = fn; return () => {}; },
          formState: { errors: {} },
          setValue() {},
          reset() {},
        };
      },
    },
    "@hookform/resolvers/zod": { zodResolver() {} },
    "@/lib/validations/consultation": { consultationFormSchema: {} },
    "@/components/ui/button": { Button: el("button") },
    "@/components/ui/input": { Input: el("input") },
    "@/components/ui/label": { Label: el("label") },
    "@/components/ui/textarea": { Textarea: el("textarea") },
    "@/components/ui/select": Object.fromEntries(
      ["Select", "SelectContent", "SelectItem", "SelectTrigger", "SelectValue"].map(name => [name, el("div")])
    ),
    "lucide-react": Object.fromEntries(["Loader2", "CheckCircle", "AlertCircle"].map(name => [name, () => null])),
    "next/link": { default: el("a"), __esModule: true },
  };
  const { ConsultationForm } = load("src/components/forms/ConsultationForm.tsx", mocks, {
    fetch: async (endpoint, options) => {
      requests.push({ endpoint, body: JSON.parse(options.body) });
      return { ok: deliveryOK, status: deliveryOK ? 200 : 503 };
    },
  });
  return {
    render() { cursor = 0; return renderToStaticMarkup(ConsultationForm(props)); },
    async send(message = "Хочу обсудить процедуру и сроки.") {
      await submit({
        ...defaults, firstName: "Анна", lastName: "Иванова",
        email: "offline@example.test", phone: "9165550100",
        message, consent: true, website: "",
      });
    },
    requests,
  };
}

for (const treatment of ["Ботулинотерапия лица", "Увеличение и коррекция губ"]) {
  test(`Cosmetic form renders RU treatment without implant funnel and transmits it: ${treatment}`, async () => {
    const form = formHarness({ locale: "ru", treatment, category: "cosmetic" });
    const html = form.render();
    assert.ok(html.includes(treatment));
    assert.match(html, /Направление обращения/);
    assert.match(html, /Ваш вопрос или пожелания/);
    assert.match(html, /name="interest"[^>]*value="Other"/);
    assert.match(html, /\/ru\/legal\/privacy-policy/);
    assert.doesNotMatch(html.replace(/<[^>]*>/g, " "), /имплант|протез|зуб|костн|финансирован|бесплат|3D|\bCT\b|payment|graft|denture|Dental Implants/i);
    assert.doesNotMatch(html, /First Name|Last Name|Schedule Consultation|Optional|Privacy Policy/);
    await form.send("Мой отредактированный вопрос о сроках.");
    assert.equal(form.requests.length, 1);
    assert.equal(form.requests[0].endpoint, "/api/consultation");
    assert.equal(form.requests[0].body.interest, "Other");
    assert.equal(form.requests[0].body.message, `Направление: ${treatment}\n\nМой отредактированный вопрос о сроках.`);
    assert.match(form.render(), /Запрос отправлен/);
  });
}

test("Implant treatment uses the existing consultation enum and retains exact treatment", async () => {
  const form = formHarness({ locale: "ru", treatment: "All-on-6", category: "implant" });
  assert.match(form.render(), /All-on-6/);
  await form.send("");
  assert.equal(form.requests[0].body.interest, "Dental Implants");
  assert.equal(form.requests[0].body.message, "Направление: All-on-6\n\n");
});

test("Delivery failure is visible, never success, and preserves form inquiry", async () => {
  const form = formHarness({ locale: "ru", treatment: "Ботулинотерапия", category: "cosmetic" }, false);
  form.render();
  await form.send();
  const html = form.render();
  assert.match(html, /role="alert"/);
  assert.match(html, /Не удалось отправить запрос/);
  assert.match(html, /916/);
  assert.doesNotMatch(html, /Запрос отправлен/);
});

test("Default English consultation endpoint, enums and unprefixed message remain unchanged", async () => {
  const form = formHarness();
  const html = form.render();
  assert.match(html, /First Name/);
  assert.match(html, /Schedule Consultation/);
  assert.match(html, /Dental Implants/);
  assert.match(html, /href="\/legal\/privacy-policy"/);
  await form.send("Original English inquiry");
  assert.equal(form.requests[0].endpoint, "/api/consultation");
  assert.equal(form.requests[0].body.message, "Original English inquiry");
});

test("Server template always uses existing Fusion multistep form with RU service props and phone alternative", () => {
  const siteConfig = { url: "https://www.drantipov.com", contact: { phone: "(916) 783-2110" } };
  const structured = load("src/lib/structured-data.ts", { "@/constants/siteConfig": { siteConfig } });
  const { default: Page } = load("src/components/ru-services/RuTreatmentServicePage.tsx", {
    "next/link": { default: el("a"), __esModule: true },
    "@/components/forms/MultiStepConsultationForm": { MultiStepConsultationForm: ({ treatment, category, locale, variant, inquiryMode }) =>
      React.createElement("form", { "data-treatment": treatment, "data-category": category, lang: locale, "data-variant": variant, "data-inquiry": String(inquiryMode) }) },
    "@/constants/siteConfig": { siteConfig },
    "@/lib/structured-data": structured,
  });
  const service = {
    slug: "botox", title: "Ботулинотерапия", description: "Описание процедуры",
    intro: "Информация для обсуждения с врачом.", category: "cosmetic", treatment: "Ботулинотерапия лица",
    sections: [{ heading: "Сравнение", paragraphs: ["Различия подходов."], bullets: ["Требуется осмотр."],
      table: { headers: ["Подход", "Особенности"], rows: [["Процедура", "Временный эффект"]] } }],
    faqs: [{ question: "Как выбрать процедуру?", answer: "После очной консультации." }],
    sources: [{ href: "https://www.fda.gov/", label: "FDA" }],
    related: [{ href: "/ru/expertise/facial-cosmetic", label: "Эстетические процедуры" }],
  };
  const html = renderToStaticMarkup(React.createElement(Page, { service }));
  const schemas = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  const faq = schemas.find(item => item["@type"] === "FAQPage");
  assert.equal(faq.mainEntity.length, service.faqs.length);
  for (const item of faq.mainEntity) {
    assert.ok(html.includes(`<summary class="cursor-pointer font-bold">${item.name}</summary>`));
    assert.ok(html.includes(item.acceptedAnswer.text));
  }
  assert.match(html, /scope="col"/);
  assert.match(html, /scope="row"/);
  assert.match(html, /https:\/\/www.fda.gov\//);
  assert.match(html, /href="\/ru\/expertise\/facial-cosmetic"/);
  assert.match(html, /data-treatment="Ботулинотерапия лица"/);
  assert.match(html, /data-category="cosmetic"/);
  assert.match(html, /не заменяет очную консультацию/);
  assert.doesNotMatch(html.replace(/<[^>]*>/g, " "), /бесплат|3D|\bCT\b|имплант|Dental Implants/i);
  assert.match(html, /lang="ru" data-variant="inline"/);
  assert.match(html, /href="tel:9167832110"/);
  assert.doesNotMatch(html, /Онлайн-форма временно недоступна/);
  const implant = renderToStaticMarkup(React.createElement(Page, {
    service: { ...service, category: "implant", treatment: "All-on-6" },
  }));
  assert.match(implant, /data-treatment="All-on-6" data-category="implant" lang="ru"/);
  assert.match(implant, /data-inquiry="false"/);
  for (const slug of ["all-on-4-revision", "peri-implantitis", "implant-consultation", "sinus-lift"]) {
    const inquiry = renderToStaticMarkup(React.createElement(Page, {
      service: { ...service, slug, category: "implant", treatment: "Оценка лечения" },
    }));
    assert.match(inquiry, /data-category="implant"/);
    assert.match(inquiry, /data-inquiry="true"/);
  }
});

// Existing multistep form, entirely offline: fetch and reCAPTCHA are test doubles.
function multistepHarness(props = {}, { deliveryOK = true, tokenError = false } = {}) {
  const state = [], requests = [], actions = [];
  let cursor = 0, tree;
  const { MultiStepConsultationForm } = load("src/components/forms/MultiStepConsultationForm.tsx", {
    react: { useState: initial => {
      const i = cursor++;
      if (!(i in state)) state[i] = initial;
      return [state[i], value => { state[i] = typeof value === "function" ? value(state[i]) : value; }];
    } },
    "lucide-react": Object.fromEntries(
      ["Loader2", "CheckCircle", "ArrowRight", "ArrowLeft", "Calendar", "Clock", "Phone", "Star"].map(name => [name, () => null])
    ),
    "@/lib/utils": { cn: (...values) => values.filter(Boolean).join(" ") },
    "@/components/TrackingProvider": { useTracking: () => ({ getTrackingData: () => ({ referral_source: "https://referrer.example/", session_id: "offline-session" }) }) },
    "@/lib/recaptcha-client": { getRecaptchaToken: async action => {
      actions.push(action);
      if (tokenError) throw new Error("Verification unavailable");
      return "offline-test-token";
    } },
    "@/lib/tracking": { hasAnalyticsConsent: () => false },
  }, {
    fetch: async (endpoint, options) => {
      requests.push({ endpoint, body: JSON.parse(options.body) });
      return { ok: deliveryOK, json: async () => ({ success: deliveryOK, message: deliveryOK ? "" : "Rejected" }) };
    },
  });
  function nodes(node, predicate) {
    if (!node || typeof node !== "object") return [];
    if (Array.isArray(node)) return node.flatMap(child => nodes(child, predicate));
    return [...(predicate(node) ? [node] : []), ...nodes(node.props?.children, predicate)];
  }
  const text = node => typeof node === "string" ? node : Array.isArray(node) ? node.map(text).join("") : text(node?.props?.children ?? "");
  return {
    render() { cursor = 0; tree = MultiStepConsultationForm(props); return renderToStaticMarkup(tree); },
    fields(values) {
      const data = state.find(value => value && typeof value === "object" && "currentSituation" in value && "dob" in value);
      Object.assign(data, values);
    },
    step(value) { state[0] = value; },
    async click(label) {
      const button = nodes(tree, node => node.type === "button" && text(node).includes(label))[0];
      assert.ok(button, `Button ${label} exists`);
      button.props.onClick();
      await new Promise(resolve => setImmediate(resolve));
    },
    requests, actions,
  };
}

const contactFields = {
  firstName: "Offline", lastName: "Test", dob: "01/02/1990",
  phone: "(916) 555-0100", email: "offline@example.test",
  street: "Offline address", city: "Roseville", state: "CA", zipCode: "95678",
};

for (const [treatment, category, inquiryMode] of [
  ["Ботулинотерапия лица", "cosmetic", false],
  ["Увеличение и коррекция губ", "cosmetic", false],
  ["Контурная пластика филлерами", "cosmetic", false],
  ["Ревизия All-on-4", "implant", true],
  ["Лечение периимплантита", "implant", true],
  ["Консультация по имплантации", "implant", true],
  ["Синус-лифтинг", "implant", true],
]) {
  test(`Existing multistep RU inquiry omits dental/finance/scheduling questions and sends permitted context: ${treatment}`, async () => {
    const form = multistepHarness({ locale: "ru", variant: "inline", treatment, category, inquiryMode });
    const forbidden = /отсутствуют зубы|У меня|рассроч|FICO|бесплат|3D|\bCT\b|Assessment|First Name|4\.9\s*\(247\)|Готовы записаться/i;
    let html = form.render();
    assert.ok(html.includes(treatment));
    assert.match(html, /Шаг 1 из 2/);
    assert.match(html, /Ваш вопрос или пожелания/);
    assert.doesNotMatch(html.replace(/<[^>]*>/g, " "), forbidden);
    await form.click("Далее");
    assert.match(form.render(), /Укажите имя/);
    form.fields({ ...contactFields, inquiry: "Уточните условия процедуры." });
    await form.click("Далее");
    html = form.render();
    assert.match(html, /Шаг 2 из 2/);
    assert.doesNotMatch(html.replace(/<[^>]*>/g, " "), forbidden);
    await form.click("Назад");
    assert.match(form.render(), /Уточните условия процедуры/);
    await form.click("Далее");
    form.render();
    await form.click("Отправить заявку");
    assert.equal(form.requests.length, 1);
    const request = form.requests[0];
    assert.equal(request.endpoint, "/api/submit-consultation");
    assert.equal(request.body.referral_source, `https://referrer.example/\nTreatment: ${treatment}\nInquiry: Уточните условия процедуры.`);
    assert.equal(request.body.dob, "1990-01-02");
    assert.equal(request.body.recaptchaToken, "offline-test-token");
    assert.deepEqual(form.actions, ["form_submit"]);
    for (const key of [
      "paymentOptions", "ficoScore", "damagedTeeth", "missingTeeth", "gumDisease",
      "currentSmileNone", "currentSolutionsNone", "currentSolutionsImplants",
      "currentSolutionsBridgesCrowns", "currentSolutionsDentures",
      "appointmentDate", "appointmentTime", "assignedCenter", "treatment", "message",
    ]) {
      assert.equal(key in request.body, false, `${key} is not fabricated or sent as an ignored field`);
    }
    assert.match(form.render(), /Мы свяжемся с вами/);
    // Exercise the real website handler with this actual form payload. Only
    // external reCAPTCHA/Fusion calls are mocked; no live lead is created.
    const upstream = [];
    const { POST } = load("src/app/api/submit-consultation/route.ts", {
      "next/server": { NextResponse: { json: (body, options) => ({ body, status: options?.status || 200 }) } },
      "@/lib/rate-limit": { checkRateLimit: () => null },
      "@/lib/recaptcha": { verifyRecaptcha: async token => ({ valid: token === "offline-test-token" }) },
    }, {
      process: { env: { NODE_ENV: "production" } },
      fetch: async (url, options) => {
        upstream.push({ url, body: JSON.parse(options.body) });
        return { ok: true, status: 200, text: async () => '{"success":true}' };
      },
    });
    const response = await POST({ json: async () => request.body });
    assert.equal(response.status, 200);
    assert.equal(response.body.success, true);
    assert.equal(upstream.length, 1);
    assert.equal(upstream[0].url, "https://api.fusiondentalimplants.com/api/v1/user-data");
    assert.equal(upstream[0].body.phone, "9165550100");
    assert.ok(upstream[0].body.referral_source.includes(treatment));
    for (const field of [
      "paymentOptions", "ficoScore", "damagedTeeth", "missingTeeth", "gumDisease",
      "currentSmileNone", "currentSolutionsNone", "currentSolutionsImplants",
      "currentSolutionsBridgesCrowns", "currentSolutionsDentures",
      "appointmentDate", "appointmentTime", "assignedCenter",
    ]) {
      assert.equal(field in upstream[0].body, false, `${field} must remain omitted at the upstream boundary`);
    }
  });
}

test("Existing multistep EN and RU homepage defaults retain implant funnel and ordinary Fusion payload", async () => {
  for (const props of [{}, { locale: "ru" }]) {
    const form = multistepHarness(props);
    const html = form.render();
    assert.match(html, props.locale ? /Анкета для бесплатной консультации по имплантации/ : /Free Dental Implant Consultation Assessment/);
    assert.match(html, props.locale ? /У меня отсутствуют зубы/ : /I have missing teeth/);
    form.fields({ ...contactFields, consultationReadiness: "no", paymentPlan: "yes", ficoScore: "740+", currentSituation: ["missingTeeth"], currentTreatments: ["dentures"] });
    form.step(4);
    form.render();
    await form.click(props.locale ? "Отправить заявку" : "Submit");
    assert.equal(form.requests[0].endpoint, "/api/submit-consultation");
    assert.equal(form.requests[0].body.referral_source, "https://referrer.example/");
    assert.equal(form.requests[0].body.paymentOptions, "true");
    assert.equal(form.requests[0].body.missingTeeth, "true");
    assert.equal(form.requests[0].body.currentSolutionsDentures, "true");
  }
});

test("Implant selected treatment is carried in referral_source without changing Fusion endpoint", async () => {
  const form = multistepHarness({ locale: "ru", treatment: "All-on-6", category: "implant" });
  assert.match(form.render(), /All-on-6/);
  form.fields({ ...contactFields, consultationReadiness: "no" });
  form.step(4);
  form.render();
  await form.click("Отправить заявку");
  assert.equal(form.requests[0].body.referral_source, "https://referrer.example/\nTreatment: All-on-6");
});

test("Original five implant configuration pages retain the four-step assessment", () => {
  for (const treatment of ["All-on-4", "Полный ряд на пяти имплантах", "All-on-6", "Имплантация нескольких зубов", "Птеригоидные импланты"]) {
    const form = multistepHarness({ locale: "ru", treatment, category: "implant" });
    const html = form.render();
    assert.match(html, /Шаг 1 из 4/);
    assert.match(html, /У меня отсутствуют зубы/);
    assert.match(html, /Анкета для бесплатной консультации по имплантации/);
    assert.match(html, /3D КТ включена/);
  }
});

test("Existing Fusion failure and unavailable verification never show success", async () => {
  for (const props of [
    { locale: "ru", treatment: "Ботулинотерапия", category: "cosmetic" },
    { locale: "ru", treatment: "Синус-лифтинг", category: "implant", inquiryMode: true },
  ]) {
    for (const options of [{ deliveryOK: false }, { tokenError: true }]) {
      const form = multistepHarness(props, options);
      form.render();
      form.fields(contactFields);
      form.step(3);
      form.render();
      await form.click("Отправить заявку");
      const html = form.render();
      assert.match(html, /Не удалось отправить заявку/);
      assert.match(html, /tel:\+19167832110/);
      assert.doesNotMatch(html, /Мы свяжемся с вами/);
      if (options.tokenError) assert.equal(form.requests.length, 0);
    }
  }
});

test("Treatment carrier is in the real Fusion proxy allowlist; phone normalization and upstream path remain intact", () => {
  const route = fs.readFileSync("src/app/api/submit-consultation/route.ts", "utf8");
  const allowlist = route.match(/const ALLOWED_FIELDS = new Set\(\[([\s\S]*?)\]\)/)[1];
  assert.match(allowlist, /"referral_source"/);
  assert.doesNotMatch(allowlist, /"treatment"|"message"/);
  assert.match(route, /https:\/\/api.fusiondentalimplants.com\/api\/v1\/user-data/);
  assert.match(route, /verifyRecaptcha\(body\?\.recaptchaToken\)/);
  assert.match(route, /sanitizedData\["phone"\] = normalized/);
});
