import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RuCTA from "@/components/ru-home/RuCTA";
import StickyConciergeBar from "@/components/StickyConciergeBar";
import RussianChatbot from "@/components/RussianChatbot";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import {
  getBreadcrumbSchema,
  structuredDataScript,
} from "@/lib/structured-data";
import { siteUrl } from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title:
    "Имплантация зубов — кейсы All-on-4 и немедленная имплантация | Доктор Антипов",
  description:
    "Случаи имплантации зубов доктора Антипова: All-on-4, немедленная имплантация, восстановление всей челюсти. Новые зубы за один день — реальные результаты пациентов в Roseville, CA.",
  alternates: {
    canonical: `${siteUrl}/ru/surgical-cases/dental-implants`,
    languages: {
      ru: `${siteUrl}/ru/surgical-cases/dental-implants`,
      en: `${siteUrl}/surgical-cases/dental-implants`,
      "x-default": `${siteUrl}/surgical-cases/dental-implants`,
    },
  },
  openGraph: {
    title: "Имплантация зубов — кейсы доктора Антипова",
    description:
      "All-on-4, немедленная имплантация и восстановление всей челюсти. Реальные результаты пациентов в Roseville, Калифорния.",
    url: `${siteUrl}/ru/surgical-cases/dental-implants`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/cases/dental-implants/di000010/1/preview-0d23c849.jpg",
        width: 1200,
        height: 630,
        alt: "Имплантация зубов — кейсы доктора Антипова",
      },
    ],
  },
};

const benefits = [
  {
    title: "Зубы за один день",
    description:
      "Приходите с разрушенными зубами — уходите с полноценной рабочей улыбкой в тот же день.",
  },
  {
    title: "Меньше имплантов",
    description:
      "Всего 4–6 имплантов на челюсть. Меньше хирургии, ниже стоимость, проще приживление.",
  },
  {
    title: "Часто без костной пластики",
    description:
      "Импланты ставятся под нужным углом в плотную кость, поэтому костная пластика во многих случаях не нужна.",
  },
  {
    title: "Сразу в работе",
    description:
      "Временный протез ставится сразу: вы нормально едите и говорите, пока всё заживает.",
  },
  {
    title: "Долгий результат",
    description:
      "При правильном уходе приживаемость All-on-4 превышает 95%. Это решение на десятилетия.",
  },
  {
    title: "Естественный вид",
    description:
      "Зубы подбираются под черты лица: выглядят и работают как свои собственные.",
  },
];

export default function RuDentalImplantsCasesPage() {
  const structuredData = [
    getBreadcrumbSchema([
      { name: "Главная", url: `${siteUrl}/ru` },
      { name: "Клинические случаи", url: `${siteUrl}/ru/surgical-cases` },
      {
        name: "Имплантация зубов",
        url: `${siteUrl}/ru/surgical-cases/dental-implants`,
      },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      inLanguage: "ru",
      name: "Имплантация зубов All-on-4",
      description:
        "Восстановление всей челюсти на четырёх имплантах с немедленной нагрузкой. Выполняет сертифицированный челюстно-лицевой хирург в Roseville, CA.",
      url: `${siteUrl}/ru/surgical-cases/dental-implants`,
      procedureType: "Surgical",
      bodyLocation: "Jaw",
      medicineSystem: "WesternConventional",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-dark" lang="ru">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />
      <main>
        {/* Hero */}
        <section className="relative bg-dark text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/dental-implants/dental-implants@2x-0aad592f.jpg"
              alt="Имплантация зубов — доктор Антипов"
              fill
              className="object-cover opacity-30"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <nav aria-label="Навигация" className="text-sm text-white/60 mb-6">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/ru" className="hover:text-primary-light">
                    Главная
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/ru/surgical-cases"
                    className="hover:text-primary-light"
                  >
                    Клинические случаи
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-semibold">Имплантация зубов</li>
              </ol>
            </nav>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">
              Кейсы имплантации
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Новая улыбка — иногда за один день
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
              От замены одного зуба до восстановления всей челюсти. Методика
              All-on-4 «зубы за день» даёт результат сразу и держится годами.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 lg:py-28 bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark mb-4">
                Результаты, которые меняют жизнь
              </h2>
              <p className="text-lg text-muted">
                Каждый случай показывает, на что способна имплантация — от одного
                зуба до полной челюсти. Подбираем решение под вашу ситуацию,
                кость и сроки.
              </p>
            </div>

            {/* Benefits */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-dark mb-8 text-center">
                Почему All-on-4
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="text-lg font-bold text-dark mb-2">
                      {b.title}
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Explainer */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-light p-8 rounded-2xl">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-dark mb-4">
                Что такое методика All-on-4
              </h2>
              <p className="text-muted leading-relaxed">
                All-on-4 — это восстановление всего зубного ряда всего на четырёх
                имплантах. Задние импланты ставятся под углом 30–45 градусов: так
                они опираются на максимум кости и обходят гайморову пазуху и
                нижнечелюстной нерв. Благодаря этому временный протез можно
                поставить сразу — вы получаете зубы в тот же день и не ждёте
                месяцами между этапами лечения.
              </p>
            </div>
          </div>
        </section>

        <RuCTA />
      </main>
      <StickyConciergeBar />
      <RussianChatbot />
      <MicrosoftClarity />
    </div>
  );
}
