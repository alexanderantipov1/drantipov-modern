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
  title: "Обучение имплантологии и курсы | Доктор Антипов",
  description:
    "Освойте продвинутые методики имплантации на практических курсах доктора Антипова: реконструкция всей челюсти, костная пластика, сложная имплантология. Доступны баллы CE.",
  alternates: {
    canonical: `${siteUrl}/ru/for-dentists/education/courses`,
    languages: {
      ru: `${siteUrl}/ru/for-dentists/education/courses`,
      en: `${siteUrl}/for-dentists/education/courses`,
      "x-default": `${siteUrl}/for-dentists/education/courses`,
    },
  },
  openGraph: {
    title: "Курсы повышения квалификации",
    description:
      "Практические хирургические тренинги и курсы CE для стоматологов общей практики. Доктор Антипов, Roseville CA.",
    url: `${siteUrl}/ru/for-dentists/education/courses`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/procedures/dental-implants@2x-06d1b2ea.jpg",
        width: 1200,
        height: 630,
        alt: "Курсы повышения квалификации",
      },
    ],
  },
};

const courses = [
  {
    title: "Бесплатная e-книга: ортогнатическая хирургия, 2-е издание",
    lessons: "1 урок",
    ceCredits: null,
    level: "Любой уровень",
    description:
      "Подробная электронная книга о методиках и протоколах ортогнатической хирургии. Обязательное чтение для хирургов, которым интересна коррекция прикуса.",
    price: "Бесплатно",
    link: "https://www.fusiondentalacademy.com/courses/orthognathic-surgery-second-edition",
  },
  {
    title: "EZ Block: наращивание альвеолярного гребня",
    lessons: "35 уроков",
    ceCredits: null,
    level: "Средний и продвинутый",
    description:
      "Продвинутые методики наращивания гребня для подготовки места под имплант: блоковая пластика, НКР и работа с мягкими тканями ради предсказуемого результата.",
    price: "$690.00",
    link: "https://www.fusiondentalacademy.com/courses/alveolar-ridge-augmentation",
  },
  {
    title: "All-on-4, 5, 6, X: имплантация всей челюсти - 7 баллов CE",
    lessons: "34 урока",
    ceCredits: "7 баллов CE",
    level: "Продвинутый",
    description:
      "Полный курс по реконструкции всей челюсти: протоколы All-on-4, All-on-5, All-on-6 и All-on-X - от планирования лечения до установки финального протеза.",
    price: "$549.00",
    link: "https://www.fusiondentalacademy.com/courses/full-arch-dental-implant-course-all-on-4-5-6-X",
  },
  {
    title: "Очный 2-дневный тренинг по полной челюсти (20 баллов CE)",
    lessons: "3 урока",
    ceCredits: "20 баллов CE",
    level: "Продвинутый",
    description:
      "Эксклюзивный практический интенсив по протоколам имплантации всей челюсти. Наблюдение за живой операцией и практика под наставничеством эксперта.",
    price: "$12,299.00",
    link: "https://www.fusiondentalacademy.com/courses/full-arch-specialists-deep-dive-express-course",
  },
  {
    title: "Скуловые импланты: возможно всё",
    lessons: "18 уроков",
    ceCredits: null,
    level: "Продвинутый",
    description:
      "Продвинутый тренинг по установке скуловых имплантов при тяжёлой атрофии верхней челюсти: анатомия, хирургические техники и работа с осложнениями.",
    price: "$650.00",
    link: "https://www.fusiondentalacademy.com/courses/zygomatic-implants-everything-is-possible",
  },
  {
    title: "Цифровой протокол полной челюсти от А до Я",
    lessons: "19 уроков",
    ceCredits: null,
    level: "Средний и продвинутый",
    description:
      "Полный цифровой рабочий процесс для случаев полной челюсти: от цифровых оттисков до финального протеза. Планирование по КЛКТ, навигационная хирургия и цифровое протезирование.",
    price: "$499.00",
    link: "https://www.fusiondentalacademy.com/courses/full-arch-digital-flow-a-to-z-course",
  },
  {
    title: "Удаление зубов мудрости за 5 минут",
    lessons: "12 уроков",
    ceCredits: null,
    level: "Начальный и средний",
    description:
      "Быстрые и безопасные методики удаления зубов мудрости: правильные хирургические подходы, инструментарий и протоколы послеоперационного ухода.",
    price: "$199.00",
    link: "https://www.fusiondentalacademy.com/courses/wisdom-teeth-removal",
  },
  {
    title: "Как настроить 3D-принтер для стоматологии - техническое руководство",
    lessons: "4 урока",
    ceCredits: null,
    level: "Любой уровень",
    description:
      "Полное руководство по настройке и работе со стоматологическими 3D-принтерами: сборка оборудования, настройка ПО и решение типичных проблем.",
    price: "$150.00",
    link: "https://www.fusiondentalacademy.com/courses/how-to-setup-3d-printer-technical-support-tutorial-video",
  },
  {
    title: "Ортодонтическая подготовка к ортогнатической операции - 2 балла CE",
    lessons: "12 уроков",
    ceCredits: "2 балла CE",
    level: "Средний",
    description:
      "Планирование и проведение предхирургического ортодонтического лечения для случаев ортогнатики. Согласование работы ортодонта и хирурга.",
    price: "$35.00",
    link: "https://www.fusiondentalacademy.com/courses/orthodontic-surgery-preparation",
  },
  {
    title: "Ортогнатика: разбор набора KLS Martin (за день до операции)",
    lessons: "1 урок",
    ceCredits: null,
    level: "Продвинутый",
    description:
      "Подробный разбор подготовки и организации хирургического набора KLS Martin для ортогнатической операции. Предоперационный чек-лист и раскладка.",
    price: "$19.97",
    link: "https://www.fusiondentalacademy.com/courses/orthognathic-surgery-open-box-kls-martin",
  },
];

const benefits = [
  {
    title: "Малые группы",
    description:
      "Не более 12–15 участников - больше внимания каждому и больше практики.",
  },
  {
    title: "Обучение у эксперта",
    description:
      "Учитесь напрямую у доктора Антипова с опытом имплантологии более 25 лет.",
  },
  {
    title: "Подробные материалы",
    description:
      "Детальные методички, хирургические протоколы и поддержка по почте после курса.",
  },
  {
    title: "Доступ к видеотеке",
    description:
      "Год доступа к онлайн-видеотеке с более чем 50 записями хирургических случаев.",
  },
];

export default function RuEducationCoursesPage() {
  const structuredData = [
    getBreadcrumbSchema([
      { name: "Главная", url: `${siteUrl}/ru` },
      { name: "Стоматологам", url: `${siteUrl}/ru/for-dentists` },
      {
        name: "Обучение и курсы",
        url: `${siteUrl}/ru/for-dentists/education/courses`,
      },
    ]),
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
              src="/images/procedures/dental-implants@2x-06d1b2ea.jpg"
              alt="Курсы повышения квалификации доктора Антипова"
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
                    href="/ru/for-dentists"
                    className="hover:text-primary-light"
                  >
                    Стоматологам
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-semibold">Обучение и курсы</li>
              </ol>
            </nav>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">
              Повышение квалификации
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Учитесь у практикующего хирурга
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
              Реальная практика от хирурга, который ставит импланты каждый день.
              Курсы по имплантологии, костной пластике и реконструкции всей
              челюсти - с баллами CE.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Почему повышение квалификации у доктора Антипова
              </h2>
              <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
                Практичные знания от хирурга, который оперирует каждый день
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-3xl border border-dark/5 bg-light p-7 text-center shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-dark mb-2">
                    {b.title}
                  </h3>
                  <p className="text-muted leading-7 text-sm">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="bg-light py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Доступные курсы
              </h2>
              <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
                Программы для любого уровня подготовки
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="flex flex-col overflow-hidden rounded-3xl border border-dark/5 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-serif text-xl font-bold text-dark min-h-[3.5rem]">
                    {course.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                      {course.lessons}
                    </span>
                    {course.ceCredits && (
                      <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                        {course.ceCredits}
                      </span>
                    )}
                    <span className="rounded-full bg-dark/5 px-3 py-1 text-xs font-semibold text-dark/70">
                      {course.level}
                    </span>
                  </div>
                  <div className="mt-4 text-3xl font-bold text-primary">
                    {course.price}
                  </div>
                  <p className="mt-3 flex-grow text-sm leading-relaxed text-muted">
                    {course.description}
                  </p>
                  <div className="mt-auto pt-4">
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-2xl bg-primary px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-primary-dark"
                    >
                      Открыть курс
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-dark/5 bg-light p-8 shadow-sm">
              <h2 className="font-serif text-3xl font-bold text-dark mb-4">
                Учитесь у мастера
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                У доктора Александра Антипова более 25 лет клинической практики в
                сложной имплантологии и реабилитации всей челюсти. Фелло́шип в
                Columbia/Harlem Hospital и резидентура в Albert Einstein College
                of Medicine дали ему продвинутые навыки в хирургии и планировании
                лечения.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Доктор Антипов увлечён тем, чтобы поднимать стандарт
                имплантологии через обучение. Его подход - практичные, сразу
                применимые методики на основе доказательной медицины.
              </p>
              <Link
                href="/ru/our-team"
                className="inline-block rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-dark"
              >
                Подробнее о докторе Антипове
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-light py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl mb-4">
              Готовы повысить свой уровень?
            </h2>
            <p className="text-lg text-muted mb-8">
              Присоединяйтесь к сотням стоматологов, которые изменили свою
              практику благодаря нашим программам обучения.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://www.udemy.com/user/dr-alexander-antipov/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-primary px-7 py-4 text-base font-bold text-white transition hover:bg-primary-dark"
              >
                Все курсы на Udemy
              </a>
              <Link
                href="/ru/contact"
                className="rounded-2xl border border-primary/30 px-7 py-4 text-base font-bold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Связаться с нами
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">
              Скидки для групп · Корпоративное обучение на выезде · Провайдер,
              аккредитованный ADA CERP
            </p>
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
