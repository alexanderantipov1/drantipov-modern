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
import {
  siteUrl,
  officePhone,
  officePhoneHref,
  officeEmail,
} from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: "Партнёрам по направлениям - надёжная хирургия | Доктор Антипов",
  description:
    "Партнёрство с доктором Антиповым по направлениям на хирургию: прозрачная коммуникация, внимательный уход за пациентом и совместное планирование лечения. Для стоматологов Северной Калифорнии.",
  alternates: {
    canonical: `${siteUrl}/ru/for-dentists/referral-partners`,
    languages: {
      ru: `${siteUrl}/ru/for-dentists/referral-partners`,
      en: `${siteUrl}/for-dentists/referral-partners`,
      "x-default": `${siteUrl}/for-dentists/referral-partners`,
    },
  },
  openGraph: {
    title: "Партнёрам по направлениям - надёжный специалист",
    description:
      "Сеть доверенных специалистов для совместного ведения пациентов. Доктор Антипов, Roseville CA.",
    url: `${siteUrl}/ru/for-dentists/referral-partners`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/procedures/dental-implants@2x-06d1b2ea.jpg",
        width: 1200,
        height: 630,
        alt: "Партнёрам по направлениям",
      },
    ],
  },
};

const benefits = [
  "Прямая связь с доктором Антиповым для консультаций по сложным случаям",
  "Срочный приём ваших пациентов в тот же или на следующий день",
  "Подробные послеоперационные отчёты в течение 24 часов",
  "Совместное планирование лечения по 3D-снимкам",
  "Пациенты возвращаются к вам на протезирование и дальнейший уход",
  "Отдельный координатор направлений для удобной записи",
];

const services = [
  {
    title: "Имплантация зубов",
    description:
      "Один зуб, несколько имплантов и реконструкция всей челюсти с цифровым планированием.",
  },
  {
    title: "Костная пластика",
    description:
      "Наращивание гребня, синус-лифтинг и сохранение лунки после удаления.",
  },
  {
    title: "Удаления",
    description:
      "Простые и хирургические удаления, включая ретинированные зубы мудрости.",
  },
  {
    title: "Ортогнатическая хирургия",
    description:
      "Коррекция прикуса с согласованным ортодонтическим планированием.",
  },
  {
    title: "Патология и биопсии",
    description:
      "Удаление новообразований полости рта и гистологическое исследование.",
  },
  {
    title: "Неотложная помощь",
    description:
      "Приём в тот же день при инфекциях, травмах и послеоперационных осложнениях.",
  },
];

const referralProcess = [
  {
    step: "1",
    title: "Направление",
    duration: "5 минут",
    description:
      "Заполните защищённую онлайн-форму или позвоните на линию направлений. Укажите данные пациента, основную жалобу и приложите снимки. Отвечаем в течение 2 часов в рабочее время.",
  },
  {
    step: "2",
    title: "Запись на консультацию",
    duration: "24–48 часов",
    description:
      "Связываемся с пациентом напрямую и записываем на консультацию. Для срочных случаев - приём в тот же или на следующий день. Пациент получает подтверждение и инструкции перед визитом.",
  },
  {
    step: "3",
    title: "Полное обследование",
    duration: "1 час",
    description:
      "Доктор Антипов проводит подробный осмотр и нужную диагностику (КЛКТ, панорамный снимок), обсуждает варианты лечения и отвечает на все вопросы. Никакой спешки.",
  },
  {
    step: "4",
    title: "Лечение и обратная связь",
    duration: "Постоянно",
    description:
      "Если лечение показано, назначаем операцию и держим вас в курсе на каждом этапе. Послеоперационный отчёт с фото и рекомендациями приходит в течение 24 часов. Пациент возвращается к вам на протезирование.",
  },
];

const testimonials = [
  {
    quote:
      "Доктор Антипов - мой первый выбор для сложных имплантационных случаев. Коммуникация на высоте, а пациенты возвращаются в восторге. Он всё подробно объясняет и никогда не торопит на консультации.",
    name: "Доктор Сара Митчелл, DDS",
    place: "Roseville Family Dentistry",
  },
  {
    quote:
      "Направляю пациентов к доктору Антипову уже больше пяти лет. Хирургические навыки - выдающиеся, но что действительно отличает его, так это совместный подход. Он подключает меня к планированию и держит в курсе на каждом этапе.",
    name: "Доктор Джеймс Парк, DDS",
    place: "Sacramento Dental Group",
  },
];

export default function RuReferralPartnersPage() {
  const structuredData = [
    getBreadcrumbSchema([
      { name: "Главная", url: `${siteUrl}/ru` },
      { name: "Стоматологам", url: `${siteUrl}/ru/for-dentists` },
      {
        name: "Партнёрам по направлениям",
        url: `${siteUrl}/ru/for-dentists/referral-partners`,
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
              alt="Партнёрство по направлениям с доктором Антиповым"
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
                <li className="text-white font-semibold">
                  Партнёрам по направлениям
                </li>
              </ol>
            </nav>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">
              Партнёрство
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Надёжный хирург для ваших пациентов
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
              Настоящее партнёрство, нацеленное на отличный результат для
              пациента: прозрачная коммуникация, совместное планирование и
              возврат пациента в вашу практику.
            </p>
          </div>
        </section>

        {/* Why choose */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Почему стоматологи Северной Калифорнии выбирают доктора Антипова
              </h2>
            </div>
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                      ✓
                    </span>
                    <span className="text-muted leading-7">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-6">
                <div className="rounded-3xl border border-dark/5 bg-light p-7 shadow-sm">
                  <h3 className="font-serif text-xl font-bold text-dark mb-3">
                    Сильная подготовка и опыт
                  </h3>
                  <p className="text-muted leading-7">
                    Фелло́шип в Columbia/Harlem Hospital и четырёхлетняя
                    резидентура в Montefiore/Albert Einstein College of Medicine.
                    Сертифицирован Американским советом челюстно-лицевой хирургии
                    (ABOMS).
                  </p>
                </div>
                <div className="rounded-3xl border border-dark/5 bg-light p-7 shadow-sm">
                  <h3 className="font-serif text-xl font-bold text-dark mb-3">
                    Философия совместного ведения
                  </h3>
                  <p className="text-muted leading-7">
                    Мы видим в направляющих стоматологах ценных партнёров. Ваши
                    пациенты возвращаются к вам, а мы всегда на связи для
                    консультаций и планирования лечения.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-light py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Полный спектр хирургических услуг
              </h2>
              <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
                Все направления оральной и челюстно-лицевой хирургии
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-3xl border border-dark/5 bg-white p-7 text-center shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-dark mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted leading-7 text-sm">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Как устроено направление
              </h2>
              <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
                Просто, быстро и под рабочий ритм вашей практики
              </p>
            </div>
            <div className="space-y-6">
              {referralProcess.map((p) => (
                <div
                  key={p.step}
                  className="flex gap-5 rounded-3xl border border-dark/5 bg-light p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    {p.step}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-dark">{p.title}</h3>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {p.duration}
                      </span>
                    </div>
                    <p className="text-muted leading-7">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-light py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Что говорят направляющие стоматологи
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-3xl border border-dark/5 bg-white p-7 shadow-sm"
                >
                  <div className="mb-3 text-accent-500">★★★★★</div>
                  <p className="italic leading-relaxed text-dark/80">
                    «{t.quote}»
                  </p>
                  <div className="mt-4 border-t border-dark/10 pt-4">
                    <p className="font-semibold text-dark">{t.name}</p>
                    <p className="text-sm text-muted">{t.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA contact */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl mb-4">
              Давайте работать вместе ради пациента
            </h2>
            <p className="text-lg text-muted mb-8">
              Готовы направить пациента или обсудить сложный случай? Мы на связи.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={officePhoneHref}
                className="rounded-2xl bg-primary px-7 py-4 text-base font-bold text-white transition hover:bg-primary-dark"
              >
                {officePhone}
              </a>
              <a
                href={`mailto:${officeEmail}`}
                className="rounded-2xl border border-primary/30 px-7 py-4 text-base font-bold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                {officeEmail}
              </a>
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
