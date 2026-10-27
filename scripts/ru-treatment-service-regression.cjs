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

test("Server template renders table, sources, related links and exact visible FAQ/schema parity", () => {
  let configured = true;
  const siteConfig = { url: "https://www.drantipov.com", contact: { phone: "(916) 783-2110" } };
  const structured = load("src/lib/structured-data.ts", { "@/constants/siteConfig": { siteConfig } });
  const { default: Page } = load("src/components/ru-services/RuTreatmentServicePage.tsx", {
    "next/link": { default: el("a"), __esModule: true },
    "@/components/forms/ConsultationForm": { ConsultationForm: ({ treatment, category, locale }) =>
      React.createElement("form", { "data-treatment": treatment, "data-category": category, lang: locale }) },
    "@/constants/siteConfig": { siteConfig },
    "@/lib/email": { isEmailConfigured: () => configured },
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
  configured = false;
  const unavailable = renderToStaticMarkup(React.createElement(Page, { service }));
  assert.match(unavailable, /Онлайн-форма временно недоступна/);
  assert.match(unavailable, /href="tel:9167832110"/);
  assert.doesNotMatch(unavailable, /<form/);
});
