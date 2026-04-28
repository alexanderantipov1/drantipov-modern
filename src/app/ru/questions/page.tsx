import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { officePhone, officePhoneHref, russianArticlePages, siteUrl } from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: "Гиды по имплантам — Dr. Antipov",
  description:
    "Ответы на вопросы о dental implants, All-on-4, стоимости, страховке, bone grafting, dentures и recovery у Dr. Antipov.",
  alternates: {
    canonical: `${siteUrl}/ru/questions`,
    languages: {
      ru: `${siteUrl}/ru/questions`,
      "x-default": `${siteUrl}/ru`,
    },
  },
  openGraph: {
    title: "Гиды по имплантам — Dr. Antipov",
    description: "Структурированные ответы на high-intent implant questions для пациентов Dr. Antipov.",
    url: `${siteUrl}/ru/questions`,
    locale: "ru_RU",
    type: "website",
  },
};

export default function RussianQuestionsIndexPage() {
  return (
    <div className="min-h-screen bg-white text-dark" lang="ru">
      <header className="border-b border-dark/10 bg-white">
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
          <a
            href={officePhoneHref}
            className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-dark sm:px-5"
          >
            {officePhone}
          </a>
        </div>
      </header>

      <main>
        <section className="bg-light py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link href="/ru" className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Консультация по имплантам
            </Link>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-dark sm:text-5xl lg:text-6xl">
              Гиды по имплантам
            </h1>
            <p className="mt-6 text-xl leading-9 text-muted">
              Прямые ответы на вопросы, которые пациенты задают Google, ChatGPT, Perplexity и Gemini перед
              консультацией по dental implants.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {russianArticlePages.map((article) => (
              <Link
                key={article.slug}
                href={`/ru/questions/${article.slug}`}
                className="rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Гид</p>
                <h2 className="mt-3 text-2xl font-bold text-dark">{article.h1}</h2>
                <p className="mt-3 leading-7 text-muted">{article.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
