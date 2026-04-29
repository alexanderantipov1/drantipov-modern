import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RussianChatbot from "@/components/RussianChatbot";
import StickyConciergeBar from "@/components/StickyConciergeBar";
import {
  officeAddress,
  officePhone,
  officePhoneHref,
  siteUrl,
} from "@/data/russianImplantFunnel";

const ARTICLE_URL = `${siteUrl}/ru/articles/same-day-implants`;
const PUBLISHED = "2026-04-28";
const MODIFIED = "2026-04-28";

export const metadata: Metadata = {
  title: "Импланты за один день (immediate load) — миф или реальность",
  description:
    "Same-day dental implants и immediate load: кто реально подходит, что вы получите в день операции, чем отличается временный протез от постоянного, и о каких рисках честно говорят на консультации у Dr. Antipov.",
  alternates: {
    canonical: ARTICLE_URL,
    languages: {
      ru: ARTICLE_URL,
      "x-default": `${siteUrl}/ru`,
    },
  },
  openGraph: {
    title: "Импланты за один день — что реально возможно",
    description:
      "Immediate load на All-on-4 и All-on-6: процесс, критерии, сроки до постоянного протеза, реалистичные ожидания.",
    url: ARTICLE_URL,
    locale: "ru_RU",
    type: "article",
  },
  authors: [{ name: "Dr. Alexander Antipov, DDS" }],
};

const faqs = [
  {
    q: "Это правда «зубы за один день»?",
    a: "Да, но с уточнением. В день операции вы уходите из офиса с фиксированными временными зубами на имплантах. Постоянный протез делается через 4–6 месяцев — после полной остеоинтеграции и стабилизации мягких тканей. Временный протез выглядит и функционирует достаточно хорошо для нормальной жизни и работы — но он не финальный.",
  },
  {
    q: "Кому immediate load НЕ подходит?",
    a: "Если первичная стабильность импланта ниже ~35 Ncm — рисковать не стоит. Также у пациентов с тяжёлым остеопорозом, неконтролируемым диабетом, активным курением больше 10 сигарет в день, с серьёзной потерей кости в зоне планируемого импланта. Точное решение — после CT и осмотра.",
  },
  {
    q: "Чем временный протез отличается от постоянного?",
    a: "Временный — обычно из акрила или композита, более лёгкий, не такой прочный, не идеально совпадает с финальным дизайном улыбки. Постоянный — из циркония или PMMA с титановой основой, рассчитан на годы службы, изготавливается под конкретного пациента в зуботехнической лаборатории.",
  },
  {
    q: "Можно ли есть в день операции?",
    a: "В день операции — только мягкая жидкая еда, чтобы не нагружать импланты. Первые 2–4 недели — мягкая диета (пюре, рыба, омлет, йогурт). Постепенный возврат к обычной еде по мере заживления. Жёсткое мясо, орехи, сухари — только после фиксации постоянного протеза.",
  },
  {
    q: "Сколько времени занимает сама операция?",
    a: "Удаление + установка имплантов + временный протез — обычно 4–6 часов в зависимости от случая. Под IV-седацией пациент не помнит хода операции. После 30–60 минут наблюдения вы уезжаете домой (обязательно с сопровождающим).",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalScholarlyArticle",
  "@id": `${ARTICLE_URL}#article`,
  headline: "Импланты за один день (immediate load) — миф или реальность",
  description:
    "Гид по same-day dental implants: кому подходит, что входит в один день, чем отличается временный протез от постоянного, реальные сроки и риски.",
  inLanguage: "ru",
  url: ARTICLE_URL,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: {
    "@type": "Physician",
    name: "Dr. Alexander Antipov, DDS",
    url: `${siteUrl}/ru/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "Dr. Alexander Antipov, DDS",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/logo-d10cd66c.svg`,
    },
  },
  about: {
    "@type": "MedicalProcedure",
    name: "Same-day dental implants (immediate load)",
    procedureType: "https://schema.org/SurgicalProcedure",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Главная (RU)", item: `${siteUrl}/ru` },
    { "@type": "ListItem", position: 3, name: "Гиды", item: `${siteUrl}/ru/articles` },
    { "@type": "ListItem", position: 4, name: "Same-day implants", item: ARTICLE_URL },
  ],
};

export default function SameDayImplantsArticle() {
  return (
    <>
      {[articleSchema, faqSchema, breadcrumbSchema].map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <div className="min-h-screen bg-white text-dark" lang="ru">
        <header className="sticky top-0 z-50 border-b border-dark/10 bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/ru" className="flex items-center gap-3">
              <Image
                src="/images/logo-d10cd66c.svg"
                alt="Dr. Alexander Antipov, DDS"
                width={180}
                height={60}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
              <Link href="/ru#services" className="transition hover:text-primary">Услуги</Link>
              <Link href="/ru/articles" className="text-primary">Гиды</Link>
              <Link href="/ru/glossary" className="transition hover:text-primary">Глоссарий</Link>
              <Link href="/ru/about" className="transition hover:text-primary">О докторе</Link>
              <Link href="/ru#contact" className="transition hover:text-primary">Контакты</Link>
            </nav>
            <a
              href={officePhoneHref}
              className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-dark sm:px-5"
            >
              {officePhone}
            </a>
          </div>
        </header>

        <main>
          <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <nav aria-label="Breadcrumb" className="text-xs font-medium text-muted">
              <Link href="/ru" className="hover:text-primary">Главная</Link> ·{" "}
              <Link href="/ru/articles" className="hover:text-primary">Гиды</Link> · Same-day implants
            </nav>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Immediate load имплантация
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
              Импланты за один день — миф или реальность
            </h1>
            <p className="mt-6 text-xl leading-9 text-muted">
              «Same-day implants» и «teeth in a day» — реклама, которую видит каждый, кто ищет имплантацию.
              Что из этого правда, а что маркетинг. Что вы реально получите в день операции, и почему
              финальный результат — через несколько месяцев, а не за 6 часов.
            </p>

            <div className="mt-10 rounded-2xl bg-light p-6 ring-1 ring-dark/5">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">TL;DR</p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-dark">
                <li>• В день операции вы уходите с фиксированными временными зубами на имплантах.</li>
                <li>• Постоянный протез — через 4–6 месяцев после полной остеоинтеграции.</li>
                <li>• Подходит при достаточной плотности кости и первичной стабильности импланта (≥35 Ncm).</li>
                <li>• Чаще всего применяется для All-on-4 и All-on-6 (полная дуга).</li>
                <li>• Курение, тяжёлый остеопороз, неконтролируемый диабет — относительные противопоказания.</li>
              </ul>
            </div>

            <h2 className="mt-14 text-3xl font-bold tracking-tight text-dark">Что такое immediate load</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Классический протокол имплантации — «двухэтапный»: ставится имплант, через 3–6 месяцев он
              срастается с костью (остеоинтеграция), и только после этого фиксируется коронка или протез.
              Всё это время пациент носит съёмный временный вариант или ходит без зубов в зоне импланта.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted">
              <strong className="text-dark">Immediate load (немедленная нагрузка)</strong> — протокол, при
              котором временный протез фиксируется на импланты в день операции. Имплант сразу начинает нести
              функциональную нагрузку. Это возможно благодаря двум вещам: высокой первичной стабильности
              импланта (благодаря резьбе и углу установки) и распределению нагрузки между несколькими
              имплантами в одной конструкции.
            </p>

            <h2 className="mt-14 text-3xl font-bold tracking-tight text-dark">Когда это работает</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Immediate load — стандарт для протоколов <strong className="text-dark">All-on-4</strong> и{" "}
              <strong className="text-dark">All-on-6</strong>: 4 или 6 имплантов в одной челюсти, на которые
              сразу же фиксируется балка с временным протезом. Распределение нагрузки между несколькими
              опорами компенсирует то, что каждый отдельный имплант ещё не полностью интегрирован.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted">
              Для <strong className="text-dark">single tooth implant</strong> immediate load возможен реже —
              требуется идеальная анатомия и плотная кость. Чаще ставится временная коронка-«пустышка», но
              без жевательной нагрузки в первые недели.
            </p>

            <h2 className="mt-14 text-3xl font-bold tracking-tight text-dark">Что входит в «один день»</h2>
            <ol className="mt-5 space-y-5 text-lg leading-8 text-muted">
              <li>
                <strong className="text-dark">Перед днём операции:</strong> 3D CT, осмотр, виртуальное
                планирование, изготовление навигационного шаблона и временного протеза в лаборатории.
              </li>
              <li>
                <strong className="text-dark">День операции — утро:</strong> анестезия (IV-седация),
                удаление оставшихся проблемных зубов (если нужно), установка имплантов по навигационному
                шаблону.
              </li>
              <li>
                <strong className="text-dark">День операции — после:</strong> проверка первичной
                стабильности каждого импланта. Если все ≥35 Ncm — фиксация временного протеза. Если меньше —
                вместо immediate load делается отсроченное протезирование (это редко, но бывает).
              </li>
              <li>
                <strong className="text-dark">Вечер того же дня:</strong> вы уезжаете домой с фиксированными
                зубами, можете говорить и пить. Жевать — на следующий день после прохождения анестезии.
              </li>
            </ol>

            <h2 className="mt-14 text-3xl font-bold tracking-tight text-dark">Чего ожидать после</h2>
            <ul className="mt-5 space-y-3 text-lg leading-8 text-muted">
              <li>
                — Первые <strong className="text-dark">2 недели</strong> — мягкая диета, отёк постепенно
                спадает, контрольный визит на 7-й день.
              </li>
              <li>
                — <strong className="text-dark">2–8 недель</strong> — постепенный возврат к более твёрдой
                еде. Тщательная гигиена, ирригатор обязателен.
              </li>
              <li>
                — <strong className="text-dark">3–6 месяцев</strong> — полная остеоинтеграция. К этому
                моменту делается финальное сканирование и постоянный протез.
              </li>
              <li>
                — <strong className="text-dark">Постоянный протез</strong> — обычно цирконий или
                PMMA-композит на титановой основе. Рассчитан на 15–25 лет при правильном уходе.
              </li>
            </ul>

            <h2 className="mt-14 text-3xl font-bold tracking-tight text-dark">О чём честно говорят</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Immediate load — это безопасный, отработанный десятилетиями протокол при правильных показаниях.
              Но честный хирург скажет:
            </p>
            <ul className="mt-5 space-y-3 text-lg leading-8 text-muted">
              <li>
                — <strong className="text-dark">Временный протез — действительно временный.</strong> Он
                выглядит хорошо, но не идеален эстетически и менее прочен, чем постоянный.
              </li>
              <li>
                — <strong className="text-dark">Не каждый случай подходит.</strong> Если ваша анатомия не
                позволяет — лучше отсроченное протезирование, а не риск потерять имплант.
              </li>
              <li>
                — <strong className="text-dark">Курение значительно ухудшает прогноз.</strong> Желательно
                бросить или хотя бы резко сократить за 4 недели до и 8 недель после операции.
              </li>
              <li>
                — <strong className="text-dark">Гигиена — критична.</strong> Имплант не разрушается кариесом,
                но мягкие ткани вокруг него могут воспаляться (мукозит, периимплантит). Профессиональная
                чистка каждые 4–6 месяцев — обязательна.
              </li>
            </ul>

            <h2 className="mt-14 text-3xl font-bold tracking-tight text-dark">Частые вопросы</h2>
            <div className="mt-7 space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-dark/5 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-bold text-dark">
                    <span>{f.q}</span>
                    <span className="text-2xl text-primary transition group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-8 text-muted">{f.a}</p>
                </details>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 rounded-3xl bg-dark p-8 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-light">Следующий шаг</p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Подходит ли вам immediate load?
              </h2>
              <p className="mt-4 leading-8 text-white/80">
                После бесплатного 3D CT и осмотра доктор Антипов скажет конкретно по вашему случаю — реально
                ли поставить временные зубы в день операции, или лучше отсроченный протокол.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/ru#contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-4 text-base font-bold text-white transition hover:bg-primary-dark"
                >
                  Записаться на консультацию
                </Link>
                <a
                  href={officePhoneHref}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Позвонить {officePhone}
                </a>
              </div>
              <p className="mt-6 text-sm text-white/55">
                Офис: {officeAddress}. Финансирование от $99/мес.
              </p>
            </div>

            <div className="mt-16 border-t border-dark/10 pt-8 text-sm text-muted">
              <p>
                Опубликовано: {PUBLISHED}. Автор: Dr. Alexander Antipov, DDS. Это образовательный материал, а
                не медицинская рекомендация.
              </p>
              <p className="mt-3">
                Связано:{" "}
                <Link href="/ru/articles/zygomatic-implants" className="text-primary hover:text-primary-dark">
                  Zygomatic implants
                </Link>{" "}
                ·{" "}
                <Link href="/ru/glossary" className="text-primary hover:text-primary-dark">
                  Глоссарий
                </Link>{" "}
                ·{" "}
                <Link href="/ru/about" className="text-primary hover:text-primary-dark">
                  О Dr. Antipov
                </Link>
              </p>
            </div>
          </article>
        </main>

        <StickyConciergeBar />
        <RussianChatbot />
      </div>
    </>
  );
}
