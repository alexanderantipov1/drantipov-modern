import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RuNavbar from "@/components/ru-home/RuNavbar";
import RuFooter from "@/components/ru-home/RuFooter";
import RuCTA from "@/components/ru-home/RuCTA";
import StickyConciergeBar from "@/components/StickyConciergeBar";
import RussianChatbot from "@/components/RussianChatbot";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import {
  officePhone,
  officePhoneHref,
  siteUrl,
} from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: {
    absolute:
      "Страховка и финансирование | Доктор Антипов, Roseville CA",
  },
  description:
    "Принимаем большинство PPO-страховок (Delta Dental, Cigna, Aetna, MetLife и др.). Партнёрство с CareCredit и Cherry для рассрочки. Прозрачные цены, бесплатные консультации.",
  alternates: {
    canonical: `${siteUrl}/ru/insurance`,
    languages: {
      ru: `${siteUrl}/ru/insurance`,
      en: `${siteUrl}/insurance`,
      "x-default": `${siteUrl}/insurance`,
    },
  },
  openGraph: {
    title: "Страховка и финансирование лечения — доктор Антипов",
    description:
      "PPO-страховки, CareCredit, Cherry, HSA/FSA. Прозрачные цены без скрытых платежей.",
    url: `${siteUrl}/ru/insurance`,
    locale: "ru_RU",
    type: "website",
  },
};

const insurancePlans = [
  "Delta Dental (PPO)",
  "Cigna PPO",
  "Aetna",
  "MetLife",
  "Guardian",
  "United Concordia",
  "Anthem Blue Cross PPO",
  "Blue Shield of California",
  "Principal",
  "Ameritas",
  "Humana",
  "Большинство других PPO-планов",
];

const financingOptions = [
  {
    name: "CareCredit",
    tagline: "Кредитная карта для медицинских расходов",
    bullets: [
      "0% годовых по акции на подходящих процедурах",
      "Планы на 6, 12, 18 или 24 месяца",
      "Решение в течение нескольких минут — онлайн или в офисе",
    ],
    cta: "Подать заявку в CareCredit",
    href: "https://www.carecredit.com/apply/",
  },
  {
    name: "Cherry",
    tagline: "Финансирование с оплатой по частям",
    bullets: [
      "До $10 000 без жёсткой проверки кредитной истории для предварительного одобрения",
      "Планы на 3, 6, 12, 18 и 24 месяца",
      "Мягкая проверка кредита — не влияет на ваш кредитный скоринг",
    ],
    cta: "Получить предварительное одобрение",
    href: "https://withcherry.com/",
  },
  {
    name: "HSA / FSA",
    tagline: "Накопительные счета с налоговыми льготами",
    bullets: [
      "Большинство хирургических процедур оплачиваются с HSA/FSA",
      "Платите долларами до уплаты налогов",
      "Предоставляем подробные чеки для возмещения",
    ],
    cta: null,
    href: null,
  },
  {
    name: "Оплата в офисе",
    tagline: "Прямая оплата",
    bullets: [
      "Принимаем все основные кредитные карты",
      "Наличные, чеки и электронные переводы",
      "Скидки при предоплате на выборочные процедуры",
    ],
    cta: null,
    href: null,
  },
];

const valueProps = [
  {
    title: "Бесплатные консультации",
    body:
      "Первичная консультация — включая 3D КТ (cone beam) при необходимости и полный план лечения — без оплаты. Вы уходите с письменной сметой ДО принятия решения.",
  },
  {
    title: "Предварительные расчёты",
    body:
      "До начала лечения мы подаём предварительное согласование в вашу страховую и предоставляем чёткую построчную смету ваших расходов из кармана.",
  },
  {
    title: "Сами оформляем заявки в страховую",
    body:
      "Мы сами заполняем и подаём все документы в вашу страховую (PPO). Вы платите только свою часть в день процедуры.",
  },
  {
    title: "Прозрачные и честные цены",
    body:
      "Никаких сюрпризов. Каждая сумма объясняется простым языком до начала лечения, и мы рассмотрим альтернативы, если процедура выходит за рамки вашего бюджета.",
  },
];

const faqs = [
  {
    question: "Принимаете ли вы мою страховку?",
    answer:
      "Мы in-network с большинством крупных PPO-планов: Delta Dental, Cigna, Aetna, MetLife, Guardian, Anthem Blue Cross, Blue Shield of California и многими другими. Также принимаем большинство out-of-network PPO-планов и подаём документы от вашего имени. Позвоните по номеру (916) 783-2110 с данными вашей страховки — мы проверим покрытие в течение одного рабочего дня.",
  },
  {
    question: "У меня нет стоматологической страховки. Что делать?",
    answer:
      "Многие наши пациенты платят из своего кармана, и для этого у нас простая схема. Прозрачный прайс, бесплатные консультации, партнёрство с CareCredit и Cherry для гибкой рассрочки (некоторые планы под 0% promotional APR). HSA и FSA счета также принимаются для большинства процедур.",
  },
  {
    question: "Сколько будет стоить моё лечение?",
    answer:
      "Цена зависит от процедуры, анатомических особенностей и покрытия вашей страховки. После бесплатной консультации вы получите письменную смету с разбивкой по пунктам — включая ожидаемый бенефит от страховой и вашу часть из кармана. Никаких сюрпризных счетов.",
  },
  {
    question: "Покрывает ли страховка All-on-4 (полную имплантацию)?",
    answer:
      "Большинство PPO-планов покрывают часть хирургических компонентов (импланты, удаление зубов, костная пластика), но редко финальное протезирование целиком. Обычно страховые компании покрывают $1 500–$4 000 за челюсть в зависимости от плана. Мы проверим ваши конкретные бенефиты и объясним опции финансирования, которые закроют разницу.",
  },
  {
    question: "Покрывается ли ортогнатическая хирургия страховкой?",
    answer:
      "Да, когда операция выполняется по функциональным показаниям — серьёзная мальокклюзия, апноэ сна, дисфункция ВНЧС, трудности с жеванием — ортогнатическая хирургия обычно покрывается медицинской страховкой (не стоматологической). Мы получаем предварительное согласование до планирования операции, чтобы вы знали своё покрытие заранее.",
  },
  {
    question: "Я живу в другом штате. Как работает страховка?",
    answer:
      "К нам часто приезжают русскоязычные пациенты из других штатов на All-on-4, zygomatic implants и сложные реконструктивные случаи. Если у вас PPO-страховка — она работает по всей территории США. Мы проверим покрытие по любому штату до вашего приезда, чтобы вы знали финальную стоимость и могли спланировать поездку.",
  },
  {
    question: "Можно ли разделить оплату на несколько визитов?",
    answer:
      "Конечно. Для многоэтапных процедур (например, All-on-4, занимающий несколько месяцев) оплата обычно разбивается по фазам — хирургическая установка, заживление, финальное протезирование. CareCredit и Cherry оба предлагают планы, которые соответствуют графику лечения.",
  },
  {
    question: "Есть ли скидки при оплате наличными или предоплате?",
    answer:
      "Да — на выборочные процедуры предоставляется скидка при полной предоплате в начале лечения. Спрашивайте о текущих предложениях во время консультации.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: `${siteUrl}/ru` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Страховка и финансирование",
      item: `${siteUrl}/ru/insurance`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "ru-RU",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function RussianInsurancePage() {
  return (
    <>
      {[faqSchema, breadcrumbSchema].map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <div className="min-h-screen bg-white text-dark" lang="ru">
        <RuNavbar />

        <main>
          {/* Hero — navy overlay, matches site stylistic */}
          <section className="relative text-white overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/online-consultation/online-consult@2x-6555264c.jpg"
                alt="Страховка и финансирование лечения у доктора Антипова"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-navy/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
              <nav aria-label="Хлебные крошки" className="text-sm text-white/70 mb-6">
                <ol className="flex flex-wrap items-center gap-2">
                  <li><Link href="/ru" className="hover:text-white">Главная</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-white font-semibold">Страховка</li>
                </ol>
              </nav>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">
                Страховка и финансирование
              </p>
              <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Лечение должно быть доступным
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
                Принимаем большинство PPO-планов, предлагаем прозрачные цены и партнёрствуем с CareCredit и Cherry, чтобы распределить оплату по месяцам.
              </p>
            </div>
          </section>

          {/* Trust intro */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Прозрачные цены, никаких сюрпризов
              </div>
              <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-dark sm:text-4xl">
                Качественная хирургия — по доступной цене
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Мы считаем, что стоимость не должна быть препятствием для нужной вам помощи. Поэтому каждый пациент уходит с консультации с письменной сметой и понятным путём вперёд, подходящим под бюджет. Ниже — как именно мы работаем со страховками, финансированием и пациентами, оплачивающими напрямую.
              </p>
            </div>
          </section>

          {/* Insurance plans */}
          <section className="py-16 lg:py-20 bg-bone/30">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Страховые компании
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                  Страховки, с которыми мы работаем
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  In-network с большинством крупных PPO-провайдеров. Также принимаем большинство out-of-network планов и подаём документы от вашего имени.
                </p>
              </div>

              <div className="mt-12 rounded-3xl border border-dark/5 bg-white p-8 shadow-md md:p-12">
                <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
                  {insurancePlans.map((plan) => (
                    <li key={plan} className="flex items-start gap-2 text-dark">
                      <svg className="h-5 w-5 shrink-0 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm leading-7 text-muted">
                  Не нашли вашу страховку? Позвоните{" "}
                  <a href={officePhoneHref} className="font-semibold text-primary hover:underline">
                    {officePhone}
                  </a>
                  {" "}— большинство PPO-планов позволяют out-of-network бенефиты, а мы оформляем все документы за вас.
                </p>
              </div>
            </div>
          </section>

          {/* Financing partners */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Финансирование
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                  Гибкие варианты оплаты
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Распределите оплату по месяцам с проверенными медицинскими кредитными программами — многие с 0% promotional APR.
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
                {financingOptions.map((opt) => (
                  <div
                    key={opt.name}
                    className="flex flex-col rounded-3xl border border-dark/5 bg-white p-8 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-5">
                      <h3 className="text-2xl font-bold leading-tight text-dark">{opt.name}</h3>
                      <p className="mt-1 text-sm text-muted">{opt.tagline}</p>
                    </div>
                    <ul className="mb-6 flex-grow space-y-2 text-sm leading-6 text-muted">
                      {opt.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <svg className="h-4 w-4 shrink-0 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {opt.cta && opt.href && (
                      <a
                        href={opt.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-dark"
                      >
                        {opt.cta}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Value props */}
          <section className="py-16 lg:py-20 bg-bone/30">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Наши гарантии
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                  Как мы упрощаем процесс
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Четыре обязательства, на которые вы можете рассчитывать с первого звонка.
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {valueProps.map((v) => (
                  <div
                    key={v.title}
                    className="rounded-3xl border border-dark/5 bg-white p-7 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <svg className="h-6 w-6 shrink-0 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <h3 className="text-xl font-bold text-dark">{v.title}</h3>
                    </div>
                    <p className="mt-3 pl-9 leading-7 text-muted">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Частые вопросы
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                  Страховка и оплата — FAQ
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Ответы на самые частые вопросы о стоимости и страховом покрытии.
                </p>
              </div>

              <div className="mt-12 space-y-3">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-2xl border border-dark/10 bg-white px-6 py-4 shadow-sm"
                  >
                    <summary className="cursor-pointer text-left font-bold text-dark transition group-open:mb-3">
                      {faq.question}
                    </summary>
                    <p className="leading-7 text-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <RuCTA />
        </main>

        <RuFooter />

        <StickyConciergeBar />
        <RussianChatbot />
        <MicrosoftClarity />
      </div>
    </>
  );
}
