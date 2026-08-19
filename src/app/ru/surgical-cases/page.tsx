import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RuNavbar from "@/components/ru-home/RuNavbar";
import RuFooter from "@/components/ru-home/RuFooter";
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
    "Клинические случаи «до и после» - доктор Антипов, Roseville CA",
  description:
    "Реальные результаты пациентов русскоговорящего хирурга доктора Антипова (Roseville, район Сакраменто): ортогнатическая хирургия, имплантация зубов и эстетическая хирургия лица. Фото до и после, разбор каждого случая.",
  alternates: {
    canonical: `${siteUrl}/ru/surgical-cases`,
    languages: {
      ru: `${siteUrl}/ru/surgical-cases`,
      en: `${siteUrl}/surgical-cases`,
      "x-default": `${siteUrl}/surgical-cases`,
    },
  },
  openGraph: {
    title: "Клинические случаи доктора Антипова - результаты «до и после»",
    description:
      "Ортогнатическая хирургия, имплантация зубов, эстетика лица. Реальные результаты пациентов в Roseville, Калифорния.",
    url: `${siteUrl}/ru/surgical-cases`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/cases/corrective-jaw-surgery/oms000052/1/preview@2x-55e61064.jpg",
        width: 1200,
        height: 630,
        alt: "Клинические случаи доктора Антипова",
      },
    ],
  },
};

const categories = [
  {
    href: "/ru/surgical-cases/corrective-jaw-surgery",
    eyebrow: "Ортогнатика",
    title: "Ортогнатическая хирургия",
    description:
      "Коррекция прикуса и асимметрии лица: остеотомия Le Fort, BSSO, гениопластика. Меняется и функция, и профиль.",
  },
  {
    href: "/ru/surgical-cases/dental-implants",
    eyebrow: "Имплантация",
    title: "Имплантация зубов",
    description:
      "All-on-4, немедленная имплантация, восстановление всей челюсти. Новые зубы за один день, без долгих этапов.",
  },
  {
    href: "/ru/surgical-cases/facial-cosmetic-surgery",
    eyebrow: "Эстетика лица",
    title: "Эстетическая хирургия лица",
    description:
      "Ринопластика, блефаропластика, филлеры, увеличение губ, удаление родинок без рубцов. Естественный результат.",
  },
];

export default function RuSurgicalCasesPage() {
  const structuredData = [
    getBreadcrumbSchema([
      { name: "Главная", url: `${siteUrl}/ru` },
      { name: "Клинические случаи", url: `${siteUrl}/ru/surgical-cases` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      inLanguage: "ru",
      name: "Клинические случаи доктора Антипова",
      description:
        "Разделы клинических случаев доктора Александра Антипова в Roseville, CA: ортогнатическая хирургия, имплантация зубов, эстетическая хирургия лица.",
      url: `${siteUrl}/ru/surgical-cases`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ортогнатическая хирургия" },
        { "@type": "ListItem", position: 2, name: "Имплантация зубов" },
        { "@type": "ListItem", position: 3, name: "Эстетическая хирургия лица" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-dark" lang="ru">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />
      <RuNavbar />
      <main>
        {/* Hero */}
        <section className="relative bg-dark text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg"
              alt="Результаты пациентов доктора Антипова"
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
                <li className="text-white font-semibold">Клинические случаи</li>
              </ol>
            </nav>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">
              Реальные результаты пациентов
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Галерея «до и после»
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
              Реальные случаи из практики доктора Антипова: имплантация зубов,
              коррекция прикуса и эстетическая хирургия лица. Выберите направление
              и посмотрите результаты пациентов.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 lg:py-28 bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark mb-4">
                Выберите направление
              </h2>
              <p className="text-lg text-muted">
                Случаи разбиты по специализации, чтобы вам было проще найти
                результаты по вашей ситуации.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group flex flex-col rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {cat.eyebrow}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-dark group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed">
                    {cat.description}
                  </p>
                  <span className="mt-6 inline-flex items-center font-medium text-primary">
                    Смотреть случаи
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <RuCTA />
      </main>
      <RuFooter />
      <StickyConciergeBar />
      <RussianChatbot />
      <MicrosoftClarity />
    </div>
  );
}
