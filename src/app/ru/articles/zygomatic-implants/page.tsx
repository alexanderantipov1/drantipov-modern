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

const ARTICLE_URL = `${siteUrl}/ru/articles/zygomatic-implants`;
const PUBLISHED = "2026-04-28";
const MODIFIED = "2026-04-28";

export const metadata: Metadata = {
  title: "Zygomatic implants: когда нужны и как работают — Dr. Antipov",
  description:
    "Зигоматические импланты при тяжёлой потере кости верхней челюсти. Когда обычная имплантация невозможна, как проходит операция, кто подходит, сроки и стоимость у Dr. Antipov, Roseville CA.",
  alternates: {
    canonical: ARTICLE_URL,
    languages: {
      ru: ARTICLE_URL,
      "x-default": `${siteUrl}/ru`,
    },
  },
  openGraph: {
    title: "Zygomatic implants: когда нужны и как работают",
    description:
      "Длинные импланты в скуловую кость при тяжёлой атрофии верхней челюсти. Альтернатива многоэтапной костной пластике у Dr. Antipov.",
    url: ARTICLE_URL,
    locale: "ru_RU",
    type: "article",
  },
  authors: [{ name: "Dr. Alexander Antipov, DDS" }],
};

const faqs = [
  {
    q: "В чём разница между zygomatic implants и обычными имплантами?",
    a: "Обычные dental implants ставятся в кость альвеолярного гребня челюсти длиной 8–13 мм. Zygomatic implants — это длинные импланты (30–55 мм), которые крепятся в скуловую кость (zygoma). Они нужны, когда верхней челюсти просто нет — слишком тонкая или резорбированная кость. Скуловая кость намного плотнее и не атрофируется, поэтому даёт надёжную опору даже в самых сложных случаях.",
  },
  {
    q: "Можно ли поставить временные зубы в день операции?",
    a: "Да, в большинстве случаев. Zygomatic implants спроектированы под immediate load — высокая первичная стабильность позволяет фиксировать временный протез сразу. Постоянная конструкция изготавливается после 4–6 месяцев заживления.",
  },
  {
    q: "Это больно? Под какой анестезией делают?",
    a: "Операция проходит под IV-седацией или общей анестезией. Пациент не помнит ход вмешательства. Послеоперационный дискомфорт обычно умеренный и контролируется стандартными обезболивающими в течение 3–5 дней.",
  },
  {
    q: "Кому zygomatic implants НЕ подходят?",
    a: "Синусит в активной фазе, тяжёлые системные заболевания, неконтролируемый диабет, активный приём бисфосфонатов в высоких дозах. Курение значительно повышает риск неудачи. Полный список противопоказаний обсуждается на консультации после CT.",
  },
  {
    q: "Сколько это стоит?",
    a: "Zygomatic implants дороже обычной имплантации, но в большинстве случаев выходят дешевле и быстрее, чем многоэтапная костная пластика + sinus lift + классические импланты. Точная стоимость называется после CT — обычно в диапазоне $35 000–$60 000 за полную дугу. Финансирование от $99/мес доступно.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalScholarlyArticle",
  "@id": `${ARTICLE_URL}#article`,
  headline: "Zygomatic implants: когда нужны и как работают",
  description:
    "Гид по зигоматическим имплантам: показания, отличия от обычной имплантации и костной пластики, процесс, сроки, кто подходит. Dr. Antipov, Roseville, CA.",
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
    name: "Zygomatic implants",
    alternateName: "Зигоматические импланты",
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
    { "@type": "ListItem", position: 4, name: "Zygomatic implants", item: ARTICLE_URL },
  ],
};

export default function ZygomaticImplantsArticle() {
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
              <Link href="/ru/articles" className="hover:text-primary">Гиды</Link> · Zygomatic implants
            </nav>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Имплантация при потере кости
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
              Zygomatic implants: когда нужны и как работают
            </h1>
            <p className="mt-6 text-xl leading-9 text-muted">
              Если вам сказали, что обычная имплантация невозможна из-за нехватки кости в верхней челюсти —
              zygomatic implants могут быть решением. Это не альтернатива «получше», а отдельный подход для
              сложных случаев, когда классические протоколы и костная пластика не справляются.
            </p>

            <div className="mt-10 rounded-2xl bg-light p-6 ring-1 ring-dark/5">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">TL;DR</p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-dark">
                <li>• Zygomatic implants — длинные (30–55 мм) импланты в скуловую кость, не в челюсть.</li>
                <li>• Показаны при тяжёлой атрофии верхней челюсти, когда обычные импланты невозможны.</li>
                <li>• Часто избавляют от многоэтапной костной пластики и года ожидания.</li>
                <li>• Временные зубы возможны в день операции (immediate load).</li>
                <li>• Только опытные челюстно-лицевые хирурги работают с этой техникой.</li>
              </ul>
            </div>

            <h2 className="mt-14 text-3xl font-bold tracking-tight text-dark">Что это и где они стоят</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Обычный dental implant — это титановый винт длиной 8–13 миллиметров, вживляемый в кость
              альвеолярного гребня челюсти. Когда зубы отсутствуют долгое время, эта кость атрофируется. В
              нижней челюсти потеря кости обычно не критична. В верхней — атрофия плюс гайморова пазуха
              сверху часто оставляют слишком мало материала для классической имплантации.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted">
              <strong className="text-dark">Zygomatic implants</strong> решают эту задачу другим путём. Это
              длинные импланты (30–55 мм), которые крепятся не в верхнюю челюсть, а в{" "}
              <strong className="text-dark">скуловую кость (zygoma)</strong> — мощную, плотную и не
              подверженную атрофии структуру лицевого скелета. Один или два zygomatic импланта плюс несколько
              обычных в передней части челюсти дают опору для полного несъёмного протеза.
            </p>

            <h2 className="mt-14 text-3xl font-bold tracking-tight text-dark">Когда zygomatic implants — лучший выбор</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Не каждому пациенту с потерей кости они нужны. Типичные показания:
            </p>
            <ul className="mt-5 space-y-3 text-lg leading-8 text-muted">
              <li>
                — <strong className="text-dark">Тяжёлая атрофия верхней челюсти</strong> (часто после долгого
                ношения съёмного протеза или потери зубов 10+ лет назад).
              </li>
              <li>
                — <strong className="text-dark">Неудачный исход костной пластики</strong> или sinus lift в
                прошлом.
              </li>
              <li>
                — <strong className="text-dark">Желание избежать многоэтапного лечения</strong> (классическая
                схема: костная пластика → 6–9 месяцев → имплантация → 4–6 месяцев → протезирование).
              </li>
              <li>
                — <strong className="text-dark">Состояние после онкологии</strong> или травмы лица, когда
                обычная анатомия повреждена.
              </li>
              <li>
                — <strong className="text-dark">Возраст и общее здоровье</strong>, не позволяющие пройти
                несколько отдельных операций.
              </li>
            </ul>

            <h2 className="mt-14 text-3xl font-bold tracking-tight text-dark">Как проходит операция</h2>
            <ol className="mt-5 space-y-5 text-lg leading-8 text-muted">
              <li>
                <strong className="text-dark">3D CT и виртуальное планирование.</strong> Снимок показывает
                плотность скуловой кости, расположение пазухи и нерва. Хирург строит траекторию каждого
                импланта в программе до операции.
              </li>
              <li>
                <strong className="text-dark">Анестезия.</strong> IV-седация или общий наркоз — пациент не
                помнит хода операции и не испытывает дискомфорта.
              </li>
              <li>
                <strong className="text-dark">Установка имплантов.</strong> Хирург входит через десну,
                формирует канал в скуловой кости по навигационному шаблону и фиксирует имплант под нужным
                углом. Операция занимает 2–4 часа в зависимости от сложности.
              </li>
              <li>
                <strong className="text-dark">Временные зубы в тот же день.</strong> Если первичная
                стабильность достаточна (≥35 Ncm), фиксируется immediate-load протез.
              </li>
              <li>
                <strong className="text-dark">Заживление и постоянная конструкция.</strong> 4–6 месяцев
                остеоинтеграции, затем изготовление и фиксация постоянного протеза.
              </li>
            </ol>

            <h2 className="mt-14 text-3xl font-bold tracking-tight text-dark">Восстановление</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Большинство пациентов возвращаются к работе через 5–7 дней. Первые 2 недели — мягкая диета,
              ограничение физических нагрузок, тщательная гигиена. Контрольные визиты — на 7-й, 30-й, 90-й
              день и через 6 месяцев. Полная остеоинтеграция длится 4–6 месяцев, но временные зубы делают
              этот период комфортным с точки зрения еды и социальной жизни.
            </p>

            <h2 className="mt-14 text-3xl font-bold tracking-tight text-dark">Кто это делает</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Zygomatic implants — техника, требующая fellowship-trained челюстно-лицевого хирурга. Это не
              процедура общей стоматологии. Dr. Antipov:
            </p>
            <ul className="mt-5 space-y-3 text-lg leading-8 text-muted">
              <li>— Diplomate of the American Board of Oral &amp; Maxillofacial Surgery (ABOMS).</li>
              <li>— Fellowship-trained по сложной имплантологии и реконструкции верхней челюсти.</li>
              <li>— 25+ лет board-certified практики, 10 000+ восстановленных улыбок.</li>
              <li>
                — Принимает пациентов из других штатов и стран, специально на zygomatic-случаи (Roseville, CA
                — 30 минут от международного аэропорта Sacramento).
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
                Узнайте, подходят ли zygomatic implants именно вам
              </h2>
              <p className="mt-4 leading-8 text-white/80">
                Точные рекомендации возможны только после очного осмотра и 3D CT. Бесплатно. Координатор
                перезвонит в течение 24 часов и объяснит, что подготовить к консультации.
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
                Офис: {officeAddress}. Принимаем пациентов из Sacramento, Bay Area, Reno, и других штатов.
              </p>
            </div>

            <div className="mt-16 border-t border-dark/10 pt-8 text-sm text-muted">
              <p>
                Опубликовано: {PUBLISHED}. Автор: Dr. Alexander Antipov, DDS. Это образовательный материал, а
                не медицинская рекомендация — точные показания определяются после очного осмотра.
              </p>
              <p className="mt-3">
                Связано:{" "}
                <Link href="/ru/articles/same-day-implants" className="text-primary hover:text-primary-dark">
                  Same-day implants
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
