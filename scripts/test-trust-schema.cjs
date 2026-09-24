const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");
const vm = require("node:vm");
const read = (p) => fs.readFileSync(p, "utf8");
const source = read("src/lib/structured-data.ts");
const configSource = read("src/constants/siteConfig.ts");
function load(text, requireFn = require) {
  const module = { exports: {} };
  const compiled = ts.transpileModule(text, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } });
  vm.runInNewContext(compiled.outputText, { module, exports: module.exports, require: requireFn, URL, process: { env: {} } });
  return module.exports;
}
const config = load(configSource);
const schema = load(source, (id) => id === "@/constants/siteConfig" ? config : require(id));
for (const locale of ["en", "ru"]) {
  const path = `${locale === "ru" ? "/ru" : ""}/contact`;
  const page = schema.getWebPageSchema({ path, name: "Contact", locale, type: "ContactPage" });
  assert.equal(page.url, `https://www.drantipov.com${path}`);
  assert.equal(page["@id"], `${page.url}#webpage`);
  assert.equal(page.inLanguage, locale);
}
assert.equal(schema.getAntipovPersonSchema()["@id"], schema.getPhysicianSchema()["@id"]);
const city = schema.getCityLocalBusinessSchema({ slug: "reno", city: "Reno", state: "NV", stateName: "Nevada", lat: 39.5, lng: -119.8 });
assert.equal(city["@id"], schema.getOrganizationSchema()["@id"]);
assert.equal(city.address.addressLocality, "Roseville");
const faqs = [{ question: "Вопрос?", answer: "Ответ." }];
const faq = schema.getFAQSchema(faqs);
assert.equal(faq.mainEntity[0].name, faqs[0].question);
assert.equal(faq.mainEntity[0].acceptedAnswer.text, faqs[0].answer);
assert.ok(!schema.structuredDataScript({ text: "</script>" }).__html.includes("</script>"));
const globalSchema = read("src/components/JsonLd.tsx");
assert.doesNotMatch(globalSchema, /MedicalWebPage|aggregateRating|reviewCount|reviewBody/);
const article = read("src/components/InsightArticle.tsx");
assert.doesNotMatch(article, /MedicalScholarlyArticle|inLanguage: "en"|identifier:/);
assert.match(article, /getFAQSchema\(article.faqs\)/);
assert.match(article, /article.faqs.map/);
assert.match(article, /locale=\{locale\}/);
assert.match(read("src/components/ReviewsPanel.tsx"), /lang="en"/);
assert.match(read("src/components/ru-home/RuReviewBanner.tsx"), /locale="ru"/);
console.log("Trust/schema regression assertions passed.");

const React = require("react");
const patientSchema = load(read("src/components/PatientArticleSchema.tsx"), (id) =>
  id === "@/lib/structured-data" ? schema : require(id));
const stub = (props) => props.children ?? null;
const stubs = new Proxy({ __esModule: true, default: stub, finalizeMetadata: (value) => value }, {
  get: (target, key) => key in target ? target[key] : stub,
});
let checked = 0;
let faqCount = 0;
for (const root of ["src/app/(en)/for-patients/insights", "src/app/ru/for-patients/insights"]) {
  for (const slug of fs.readdirSync(root)) {
    const file = `${root}/${slug}/page.tsx`;
    if (!fs.existsSync(file)) continue;
    const contents = read(file);
    if (!contents.includes("MedicalScholarlyArticle")) continue;
    assert.match(contents, /<PatientArticleSchema path=/, file);
    const page = load(contents, (id) => {
      if (id === "react/jsx-runtime") return require(id);
      if (id === "@/components/PatientArticleSchema") return patientSchema;
      if (id === "@/lib/structured-data") return schema;
      return stubs;
    }).default();
    const data = patientSchema.patientArticleData(page.props.children, page.props.path);
    const article = data.find((item) => item["@type"] === "Article");
    assert.ok(article, file);
    assert.equal(article.url, `https://www.drantipov.com${page.props.path}`, file);
    assert.equal(article.author["@id"], schema.getPhysicianSchema()["@id"]);
    assert.equal(article.inLanguage, root.includes("/ru/") ? "ru" : "en");
    assert.ok(!data.some((item) => /Scholarly|Breadcrumb/.test(item["@type"])), file);
    const faq = data.find((item) => item["@type"] === "FAQPage");
    // The RU comparison guide has no visible FAQ; its old hidden FAQ is removed.
    if (!(root.includes("/ru/") && slug === "implants-vs-dentures")) {
      assert.ok(faq?.mainEntity.length > 0, `Missing visible FAQ extraction: ${file}`);
    } else assert.equal(faq, undefined);
    for (const question of faq?.mainEntity ?? []) {
      assert.ok(question.name.length > 3 && question.acceptedAnswer.text.length > 10, file);
      faqCount++;
    }
    const output = patientSchema.default(page.props);
    const html = require("react-dom/server").renderToStaticMarkup(output);
    assert.doesNotMatch(html, /MedicalScholarlyArticle|"@type":"BreadcrumbList"/, file);
    assert.equal((html.match(/type="application\/ld\+json"/g) ?? []).length, 1, file);
    let scripts = 0;
    function countScripts(node) {
      React.Children.forEach(node, (child) => {
        if (!React.isValidElement(child)) return;
        if (child.type === "script" && child.props.type === "application/ld+json") scripts++;
        countScripts(child.props.children);
      });
    }
    countScripts(output);
    assert.equal(scripts, 1, `Legacy schema must be replaced, not duplicated: ${file}`);
    checked++;
  }
}
assert.equal(checked, 43);
console.log(`Validated ${checked} route article graphs and ${faqCount} visible FAQ answers.`);

for (const root of ["src/app/(en)", "src/app/ru"]) {
  assert.doesNotMatch(read(`${root}/results/page.tsx`), /AggregateRating|aggregateRating|reviewCount/);
  for (const page of ["contact", "legal/privacy-policy", "legal/terms-of-service"]) {
    assert.match(read(`${root}/${page}/page.tsx`), /<PageIdentity /);
    assert.doesNotMatch(read(`${root}/${page}/page.tsx`), /MedicalWebPage/);
  }
}
assert.doesNotMatch(read("src/components/RussianArticlePage.tsx"), /\/ru\/questions/);
assert.doesNotMatch(read("src/components/ru-home/RuReviewBanner.tsx"), /740|rating = "4/);
console.log("Non-medical identity, results rating removal and legacy-link assertions passed.");

const PageHero = load(read("src/components/PageHero.tsx"), (id) => {
  if (id === "react/jsx-runtime") return require(id);
  if (id === "framer-motion") return {
    motion: new Proxy({}, { get: (_, tag) => ({ children, className, "aria-label": label }) =>
      React.createElement(tag, { className, "aria-label": label }, children) }),
  };
  if (id === "next/link") return { __esModule: true, default: ({ children, href }) => React.createElement("a", { href }, children) };
  return stubs;
}).default;
const heroProps = { image: "/test.jpg", eyebrow: "Test", title: "Test", subtitle: "Test", breadcrumbs: [{ name: "Контакты" }] };
const render = require("react-dom/server").renderToStaticMarkup;
const ruHeroHtml = render(React.createElement(PageHero, { ...heroProps, locale: "ru" }));
assert.match(ruHeroHtml, /href="\/ru"/);
assert.match(ruHeroHtml, /Главная/);
assert.match(ruHeroHtml, /aria-label="Навигационная цепочка"/);
assert.doesNotMatch(ruHeroHtml, />Home<|href="\/"/);
const enHeroHtml = render(React.createElement(PageHero, heroProps));
assert.match(enHeroHtml, /href="\/"/);
assert.match(enHeroHtml, />Home</);
assert.match(enHeroHtml, /aria-label="Breadcrumb"/);
let ruHeroCalls = 0;
let ruRelatedCalls = 0;
function checkRuLocaleProps(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = `${dir}/${entry.name}`;
    if (entry.isDirectory()) { checkRuLocaleProps(file); continue; }
    if (!file.endsWith(".tsx")) continue;
    for (const match of read(file).matchAll(/<(PageHero|RelatedArticles)\b[\s\S]*?\/>/g)) {
      assert.match(match[0], /locale="ru"/, `Missing explicit RU interface locale: ${file}`);
      if (match[1] === "PageHero") ruHeroCalls++; else ruRelatedCalls++;
    }
  }
}
checkRuLocaleProps("src/app/ru");
assert.ok(ruHeroCalls > 0 && ruRelatedCalls > 0);
console.log(`Localized SSR breadcrumb and ${ruHeroCalls} RU heroes / ${ruRelatedCalls} RU related-card call sites verified.`);