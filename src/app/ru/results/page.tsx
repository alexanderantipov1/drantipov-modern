import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import RuCTA from "@/components/ru-home/RuCTA";
import { getAggregateRatingSchema, structuredDataScript } from "@/lib/structured-data";
import { siteConfig } from "@/constants/siteConfig";

export const metadata: Metadata = {
  title: { absolute: "Результаты пациентов и галерея клиники | Доктор Антипов" },
  description:
    "Реальные преображения пациентов русскоговорящего челюстно-лицевого хирурга доктора Антипова, кейсы «до и после» и современная клиника в Roseville (район Сакраменто).",
  alternates: {
    canonical: `${siteConfig.url}/ru/results`,
    languages: {
      ru: `${siteConfig.url}/ru/results`,
      en: `${siteConfig.url}/results`,
      "x-default": `${siteConfig.url}/results`,
    },
  },
  openGraph: {
    title: "Результаты пациентов и галерея",
    description:
      "Реальные преображения пациентов, кейсы «до и после» и наша клиника челюстно-лицевой хирургии в Roseville.",
    locale: "ru_RU",
    images: [
      {
        url: "/images/office-tour/1/gallery@2x-ecef5848.jpg",
        width: 1200,
        height: 630,
        alt: "Результаты пациентов и галерея",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Результаты пациентов и галерея",
    description:
      "Реальные преображения пациентов, кейсы «до и после» и наша клиника челюстно-лицевой хирургии в Roseville.",
    images: ["/images/office-tour/1/gallery@2x-ecef5848.jpg"],
  },
};

const advantages = [
  {
    title: "Зубы за один день - уходите с улыбкой",
    description:
      "По протоколам немедленной нагрузки All-on-4 и All-on-6 доктор Антипов ставит импланты и крепит полный временный зубной ряд за один визит. Вы приходите с разрушенными или отсутствующими зубами, а уходите в тот же день с полной естественной улыбкой. Не нужно месяцами ходить без зубов.",
  },
  {
    title: "Сертифицированный челюстно-лицевой хирург",
    description:
      "Доктор Антипов - Diplomate Американского совета челюстно-лицевой хирургии (ABOMS) с опытом более 25 лет и более чем 10 000 успешных операций. Он прошёл резидентуру и фелло́шип в ведущих клиниках, специализируясь на сложной имплантации, хирургии челюстей и эстетике лица.",
  },
  {
    title: "Полный цикл лечения под одной крышей",
    description:
      "3D конусно-лучевая КТ, полностью оснащённые операционные, внутривенная седация, костная пластика, установка имплантов и протезирование - всё в одной клинике в Roseville. Без направлений и беготни между специалистами: весь путь от консультации до новых зубов проходит здесь.",
  },
  {
    title: "3D-навигационная хирургия",
    description:
      "Каждый случай имплантации и операции на челюсти планируется с помощью 3D конусно-лучевой КТ и виртуального хирургического планирования. Навигационные шаблоны обеспечивают точный угол, глубину и положение каждого импланта для долговечного результата. Это заметно сокращает время операции и ускоряет восстановление.",
  },
  {
    title: "Органическая и щадящая костная пластика",
    description:
      "Для пациентов, которые предпочитают натуральный подход, доктор Антипов предлагает органические методики костной пластики из минимально обработанных, естественных материалов. От аутогенной кости до биосовместимых алло- и ксенотрансплантатов - мы подбираем методику под ваш организм и ценности, не жертвуя клиническим результатом.",
  },
  {
    title: "Комфортная седация и анестезия",
    description:
      "Каждая операция проходит под контролируемой внутривенной седацией или общим наркозом, которые проводят опытные специалисты в полностью оснащённых операционных. Вы остаётесь спокойны и расслаблены - большинство пациентов вообще ничего не помнят. Ваш комфорт и безопасность для нас в приоритете.",
  },
  {
    title: "Гибкая оплата - от $99 в месяц",
    description:
      "Мы уверены, что качественное лечение должно быть доступным. Клиника предлагает рассрочку через несколько партнёров с платежами от $99 в месяц. Принимаем основные страховки, стоматологические PPO, CareCredit и предлагаем беспроцентные планы оплаты для имплантации, хирургии челюстей и эстетических процедур.",
  },
  {
    title: "Результат на всю жизнь",
    description:
      "В отличие от мостов и протезов, которые меняют каждые 5–10 лет, титановые импланты надёжно срастаются с костью (остеоинтеграция) и служат всю жизнь. Наши премиальные циркониевые протезы практически нерушимы, не окрашиваются и обеспечены гарантией - для вашего спокойствия надолго.",
  },
];

const stats = [
  { value: "10 000+", label: "Пациентов пролечено", description: "Импланты, хирургия челюстей и эстетические процедуры" },
  { value: "25+", label: "Лет опыта", description: "Сертифицированная хирургия с 1999 года" },
  { value: "157+", label: "Городов обслуживания", description: "Пациенты едут со всей Северной Калифорнии и Невады" },
  { value: "100+", label: "Направляющих стоматологов", description: "Нам доверяют коллеги по всему региону" },
];

const galleryImages = [
  "/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg",
  "/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg",
  "/images/landing-pages/dental-implants/art/slider01-e9be043d.jpg",
];

export default function RuResultsPage() {
  const aggregateRating = getAggregateRatingSchema({ ratingValue: 4.9, reviewCount: 312 });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript([aggregateRating])}
      />
      <PageHero
        image="/images/office-tour/1/gallery@2x-ecef5848.jpg"
        eyebrow="Почему пациенты выбирают нас"
        title="Результаты говорят сами за себя"
        subtitle="Посмотрите нашу современную клинику, реальные преображения пациентов и то, что отличает нашу практику."
        overlay="navy"
        breadcrumbs={[{ name: "Результаты" }]}
      />

      {/* Advantages */}
      <section id="results" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Почему пациенты выбирают доктора Антипова
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
              Преимущества нашего подхода
            </h2>
            <p className="mt-4 text-muted text-lg">
              Выбирая доктора Антипова для имплантации, хирургии челюстей или эстетических
              процедур, вы выбираете сертифицированного челюстно-лицевого хирурга с опытом
              более 25 лет, передовые 3D-технологии и нацеленность на лучший результат на
              каждом этапе лечения.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-3xl border border-dark/5 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-500"
              >
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Gallery preview */}
          <div className="mt-20 relative rounded-3xl overflow-hidden">
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt={`Результаты пациентов - зубы за один день, восстановление всей челюсти - доктор Антипов, Roseville CA - фото ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(min-width: 1280px) 426px, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(26,187,156,0.12),transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-sm mt-2">{stat.label}</div>
                <div className="text-white/40 text-xs mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RuCTA />
    </>
  );
}
