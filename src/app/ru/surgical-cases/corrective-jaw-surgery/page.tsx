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
    "Ортогнатическая хирургия — кейсы коррекции прикуса | Доктор Антипов, Roseville CA",
  description:
    "Случаи ортогнатической хирургии доктора Антипова: остеотомия Le Fort, BSSO, гениопластика, коррекция асимметрии лица. Реальные результаты пациентов в Roseville, Калифорния.",
  alternates: {
    canonical: `${siteUrl}/ru/surgical-cases/corrective-jaw-surgery`,
    languages: {
      ru: `${siteUrl}/ru/surgical-cases/corrective-jaw-surgery`,
      en: `${siteUrl}/surgical-cases/corrective-jaw-surgery`,
      "x-default": `${siteUrl}/surgical-cases/corrective-jaw-surgery`,
    },
  },
  openGraph: {
    title: "Ортогнатическая хирургия — кейсы доктора Антипова",
    description:
      "Коррекция прикуса и асимметрии лица: Le Fort, BSSO, гениопластика. Реальные результаты пациентов в Roseville, CA.",
    url: `${siteUrl}/ru/surgical-cases/corrective-jaw-surgery`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/cases/corrective-jaw-surgery/oms000052/1/preview@2x-55e61064.jpg",
        width: 1200,
        height: 630,
        alt: "Ортогнатическая хирургия — кейсы доктора Антипова",
      },
    ],
  },
};

const procedures = [
  {
    title: "Остеотомия Le Fort I",
    description:
      "Перемещение верхней челюсти при её недоразвитии, асимметрии и неправильном прикусе. Челюсть можно выдвинуть, сместить назад или изменить по высоте.",
  },
  {
    title: "Двусторонняя сагиттальная остеотомия (BSSO)",
    description:
      "Перемещение нижней челюсти: выдвижение вперёд, смещение назад или исправление асимметрии. Решает скелетные нарушения 2 и 3 класса.",
  },
  {
    title: "Гениопластика",
    description:
      "Коррекция подбородка для гармоничного профиля. Подбородок можно выдвинуть, удлинить или сместить назад.",
  },
  {
    title: "Бимаксиллярное выдвижение",
    description:
      "Одновременное выдвижение верхней и нижней челюсти. Помогает при скелетном дефиците, апноэ во сне и для улучшения профиля лица.",
  },
];

export default function RuCorrectiveJawSurgeryCasesPage() {
  const structuredData = [
    getBreadcrumbSchema([
      { name: "Главная", url: `${siteUrl}/ru` },
      { name: "Клинические случаи", url: `${siteUrl}/ru/surgical-cases` },
      {
        name: "Ортогнатическая хирургия",
        url: `${siteUrl}/ru/surgical-cases/corrective-jaw-surgery`,
      },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      inLanguage: "ru",
      name: "Ортогнатическая хирургия",
      description:
        "Хирургическая коррекция прикуса и асимметрии лица: остеотомия Le Fort, BSSO, гениопластика. Выполняет сертифицированный челюстно-лицевой хирург в Roseville, CA.",
      url: `${siteUrl}/ru/surgical-cases/corrective-jaw-surgery`,
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
      <RuNavbar />
      <main>
        {/* Hero */}
        <section className="relative bg-dark text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/corrective-jaw-surgery/corrective-jaw-surgery-97156448.jpg"
              alt="Ортогнатическая хирургия — доктор Антипов"
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
                <li className="text-white font-semibold">
                  Ортогнатическая хирургия
                </li>
              </ol>
            </nav>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">
              Кейсы ортогнатики
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Когда меняется не только прикус
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
              Ортогнатическая хирургия исправляет прикус, асимметрию и пропорции
              лица. Каждый случай — это совместная работа хирурга, 3D-планирования
              и точной диагностики.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 lg:py-28 bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark mb-4">
                Результаты, которые меняют лицо и жизнь
              </h2>
              <p className="text-lg text-muted">
                За каждым случаем — комплексный план: хирургия в связке с 3D-визуализацией
                и продуманной подготовкой. Хотите понять, как проходит восстановление?
                Посмотрите наш{" "}
                <Link
                  href="/ru/jaw-surgery-recovery-timeline"
                  className="text-primary font-semibold hover:underline"
                >
                  понедельный план восстановления после операции на челюсти
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Procedures */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark mb-12 text-center">
              Основные операции в ортогнатической хирургии
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {procedures.map((proc) => (
                <div
                  key={proc.title}
                  className="bg-light rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-dark mb-3">
                    {proc.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{proc.description}</p>
                </div>
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
