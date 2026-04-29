import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RussianChatbot from "@/components/RussianChatbot";
import StickyConciergeBar from "@/components/StickyConciergeBar";
import { officePhone, officePhoneHref, siteUrl } from "@/data/russianImplantFunnel";

const INDEX_URL = `${siteUrl}/ru/articles`;

export const metadata: Metadata = {
  title: "Гиды по имплантации — Dr. Antipov",
  description:
    "Подробные русскоязычные гиды по dental implants: same-day immediate load, zygomatic implants при потере кости, финансирование и FAQ. Без маркетинга — честно, что возможно и для кого.",
  alternates: {
    canonical: INDEX_URL,
    languages: {
      ru: INDEX_URL,
      "x-default": `${siteUrl}/ru`,
    },
  },
  openGraph: {
    title: "Гиды по имплантации — Dr. Antipov",
    description: "Same-day implants, zygomatic implants и другие подробные гиды на русском.",
    url: INDEX_URL,
    locale: "ru_RU",
    type: "website",
  },
};

const articles = [
  {
    slug: "zygomatic-implants",
    title: "Zygomatic implants: когда нужны и как работают",
    summary:
      "Длинные импланты в скуловую кость как альтернатива многоэтапной костной пластике при тяжёлой атрофии верхней челюсти. Когда показаны, как проходит операция, кому НЕ подходят.",
    tag: "Имплантация при потере кости",
    readTime: "7 мин",
  },
  {
    slug: "same-day-implants",
    title: "Импланты за один день — миф или реальность",
    summary:
      "Что реально означают same-day implants и immediate load. Что вы получите в день операции, чем временный протез отличается от постоянного, и о чём честно говорят на консультации.",
    tag: "Immediate load",
    readTime: "8 мин",
  },
];

export default function ArticlesIndex() {
  return (
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
        <section className="bg-light py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Гиды</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
              Подробные гиды по имплантации
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Без маркетинга. Каждый гид — конкретный ответ на конкретный вопрос: что возможно, для кого, что
              входит в стоимость, какие есть риски. Написано Dr. Antipov на основе 25+ лет практики.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ul className="space-y-6">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/ru/articles/${a.slug}`}
                    className="block rounded-3xl border border-dark/5 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-xl sm:p-8"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                      <span>{a.tag}</span>
                      <span className="text-muted">·</span>
                      <span className="text-muted">{a.readTime} чтения</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                      {a.title}
                    </h2>
                    <p className="mt-3 leading-7 text-muted">{a.summary}</p>
                    <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                      Читать полностью
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-12 text-sm text-muted">
              Хочешь больше? Также смотрите{" "}
              <Link href="/ru/questions" className="font-semibold text-primary hover:text-primary-dark">
                Гиды Dr. Antipov
              </Link>{" "}
              — структурированные ответы на high-intent вопросы. И{" "}
              <Link href="/ru/glossary" className="font-semibold text-primary hover:text-primary-dark">
                глоссарий имплантологии
              </Link>{" "}
              для разбора терминов.
            </p>
          </div>
        </section>

        <section className="bg-dark py-20 text-white lg:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Готовы обсудить ваш случай?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/80">
              Бесплатная консультация и 3D CT. Координатор перезвонит на русском в течение 24 часов и
              объяснит, что подготовить.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/ru#contact"
                className="rounded-2xl bg-primary px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Записаться
              </Link>
              <a
                href={officePhoneHref}
                className="rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Позвонить {officePhone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <StickyConciergeBar />
      <RussianChatbot />
    </div>
  );
}
