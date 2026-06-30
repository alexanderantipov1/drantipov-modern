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
    "Эстетическая хирургия лица — кейсы «до и после» | Доктор Антипов, Roseville CA",
  description:
    "Ринопластика, блефаропластика, филлеры Juvederm, увеличение губ, бесшрамное удаление родинок, феминизация лица. Результаты пациентов доктора Антипова в Roseville, Калифорния.",
  alternates: {
    canonical: `${siteUrl}/ru/surgical-cases/facial-cosmetic-surgery`,
    languages: {
      ru: `${siteUrl}/ru/surgical-cases/facial-cosmetic-surgery`,
      en: `${siteUrl}/surgical-cases/facial-cosmetic-surgery`,
      "x-default": `${siteUrl}/surgical-cases/facial-cosmetic-surgery`,
    },
  },
  openGraph: {
    title: "Эстетическая хирургия лица — кейсы доктора Антипова",
    description:
      "Ринопластика, блефаропластика, филлеры, увеличение губ, удаление родинок без рубцов — доктор Антипов, Roseville CA.",
    url: `${siteUrl}/ru/surgical-cases/facial-cosmetic-surgery`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/cases/facial-cosmetic-surgery/fcs000001/1/preview-9b89c3c9.jpg",
        width: 1200,
        height: 630,
        alt: "Эстетическая хирургия лица — кейсы доктора Антипова",
      },
    ],
  },
};

const procedures = [
  {
    title: "Ринопластика",
    description:
      "Изменение формы носа — функциональное и эстетическое. Доктор Антипов как челюстно-лицевой хирург отлично знает анатомию лица: результат всегда выглядит естественно.",
  },
  {
    title: "Подтяжка лица",
    description:
      "Ритидэктомия — освежает черты и подтягивает кожу без эффекта «перетянутости». Делается через скрытые разрезы — линии шрамов почти не видны.",
  },
  {
    title: "Блефаропластика",
    description:
      "Подтяжка верхних и нижних век. Убирает «уставший» взгляд, нависание кожи, мешки. Восстановление 7–14 дней.",
  },
  {
    title: "Азиатская блефаропластика",
    description:
      "Формирование естественной складки на верхнем веке. Глаза выглядят шире и выразительнее, этнические черты лица сохраняются.",
  },
  {
    title: "Феминизация лица",
    description:
      "Комплекс процедур для феминизации черт лица — контурная пластика, ринопластика, работа с подбородком. Индивидуальный план под каждый случай.",
  },
  {
    title: "Бесшрамное удаление родинок",
    description:
      "Точная радиоволновая методика — без классических разрезов и швов. Минимальный или невидимый рубец. Особенно подходит для родинок на лице.",
  },
  {
    title: "Филлеры Juvederm",
    description:
      "Безоперационная коррекция: разглаживание морщин и восстановление объёма гиалуроновой кислотой. Эффект сохраняется 9–12 месяцев.",
  },
  {
    title: "Увеличение губ",
    description:
      "Аккуратное увеличение и контур губ филлерами на основе гиалуроновой кислоты. Естественный объём и симметрия без эффекта «уточки».",
  },
];

export default function RuFacialCosmeticSurgeryPage() {
  const structuredData = [
    getBreadcrumbSchema([
      { name: "Главная", url: `${siteUrl}/ru` },
      { name: "Кейсы", url: `${siteUrl}/ru/surgical-cases` },
      {
        name: "Эстетическая хирургия лица",
        url: `${siteUrl}/ru/surgical-cases/facial-cosmetic-surgery`,
      },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Эстетические процедуры лица",
      description:
        "Эстетические и косметические процедуры лица, которые выполняет доктор Александр Антипов в Roseville, CA: ринопластика, блефаропластика, филлеры, увеличение губ, омоложение лица, бесшрамное удаление родинок.",
      url: `${siteUrl}/ru/surgical-cases/facial-cosmetic-surgery`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ринопластика" },
        { "@type": "ListItem", position: 2, name: "Подтяжка лица" },
        { "@type": "ListItem", position: 3, name: "Блефаропластика" },
        { "@type": "ListItem", position: 4, name: "Азиатская блефаропластика" },
        { "@type": "ListItem", position: 5, name: "Феминизация лица" },
        { "@type": "ListItem", position: 6, name: "Филлеры Juvederm" },
        { "@type": "ListItem", position: 7, name: "Увеличение губ" },
        { "@type": "ListItem", position: 8, name: "Бесшрамное удаление родинок" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: "Эстетическая хирургия лица",
      description:
        "Эстетические процедуры лица — ринопластика, блефаропластика, филлеры, бесшрамное удаление родинок. Выполняется сертифицированным челюстно-лицевым хирургом в Roseville, CA.",
      url: `${siteUrl}/ru/surgical-cases/facial-cosmetic-surgery`,
      procedureType: "Surgical",
      bodyLocation: "Face",
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
              src="/images/procedures/facial-cosmetic-surgery-e97fd634.jpg"
              alt="Эстетическая хирургия лица — доктор Антипов"
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
                  <Link href="/ru/surgical-cases" className="hover:text-primary-light">
                    Кейсы
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-semibold">Эстетика лица</li>
              </ol>
            </nav>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">
              Эстетическая хирургия лица
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Естественный результат, в который верят
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
              Ринопластика, подтяжка лица, блефаропластика, феминизация лица,
              филлеры, увеличение губ, бесшрамное удаление родинок — всё это делает один
              сертифицированный челюстно-лицевой хирург с глубоким пониманием анатомии лица.
            </p>
          </div>
        </section>

        {/* Procedures list */}
        <section className="py-20 lg:py-28 bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark mb-4">
                Что мы делаем
              </h2>
              <p className="text-lg text-muted">
                Наш подход — мягкий и точный. Естественность важнее «эффекта операции».
                Каждая процедура планируется индивидуально с учётом анатомии, целей и сроков.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {procedures.map((proc) => (
                <div
                  key={proc.title}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-bold text-dark mb-3">{proc.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{proc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured procedures — detail */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark mb-12 text-center">
              Подробнее о ключевых процедурах
            </h2>

            <div className="space-y-6">
              {/* Mole removal */}
              <article className="bg-light p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-dark mb-4">
                  Бесшрамное удаление родинок радиоволной
                </h3>
                <p className="text-muted mb-4 leading-relaxed">
                  Используем радиоволновую методику Ellman — родинку убираем без скальпеля и
                  швов. Кровотечение минимальное, дискомфорт почти нулевой, восстановление —
                  быстрое. В отличие от классического иссечения, радиоволна «испаряет» ткань
                  на клеточном уровне, поэтому видимого рубца не остаётся.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-1">Время процедуры</div>
                    <div className="text-muted">15–30 минут</div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-1">Восстановление</div>
                    <div className="text-muted">1–2 недели</div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-1">Результат</div>
                    <div className="text-muted">Без видимых рубцов</div>
                  </div>
                </div>
              </article>

              {/* Juvederm */}
              <article className="bg-light p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-dark mb-4">
                  Филлеры Juvederm
                </h3>
                <p className="text-muted mb-4 leading-relaxed">
                  Филлеры на основе гиалуроновой кислоты — естественное восстановление объёма
                  и разглаживание морщин. Работаем тонкими тупыми канюлями: гематом и отёков
                  почти не бывает, результат мягкий и аккуратный. Корректируем носогубные
                  складки, складки «марионеток», губы и скулы — это даёт целостное омоложение лица.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-1">Время процедуры</div>
                    <div className="text-muted">30–60 минут</div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-1">Эффект</div>
                    <div className="text-muted">Сразу после процедуры</div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-1">Длительность</div>
                    <div className="text-muted">9–12 месяцев</div>
                  </div>
                </div>
              </article>

              {/* Facial rejuvenation */}
              <article className="bg-light p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-dark mb-4">
                  Комплексное омоложение лица
                </h3>
                <p className="text-muted leading-relaxed">
                  Часто лучший результат даёт комбинация процедур: подтяжка лица, подтяжка
                  шеи и блефаропластика. Подход у нас — «освежить и омолодить», а не
                  «перетянуть». Используем технику Deep SMAS — она даёт долговременный
                  результат без видимых следов операции.
                </p>
              </article>
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
