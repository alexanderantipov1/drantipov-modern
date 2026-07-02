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
import {
  siteUrl,
  officePhone,
  officePhoneHref,
  officeEmail,
} from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: "Направить пациента — для стоматологов | Доктор Антипов",
  description:
    "Направляйте пациентов к доктору Антипову на сложную хирургию: имплантация всей челюсти, ортогнатика, костная пластика, скуловые импланты. Простой процесс направления и подробные отчёты обратно.",
  alternates: {
    canonical: `${siteUrl}/ru/for-dentists/refer-patients`,
    languages: {
      ru: `${siteUrl}/ru/for-dentists/refer-patients`,
      en: `${siteUrl}/for-dentists/refer-patients`,
      "x-default": `${siteUrl}/for-dentists/refer-patients`,
    },
  },
  openGraph: {
    title: "Направить пациента — хирургия доктора Антипова",
    description:
      "Простой процесс направления на сложные случаи челюстно-лицевой хирургии. Подробные отчёты, быстрая запись.",
    url: `${siteUrl}/ru/for-dentists/refer-patients`,
    locale: "ru_RU",
    type: "website",
  },
};

const benefits = [
  {
    title: "Берём на себя сложную хирургию",
    description:
      "Выполняем хирургический этап — установку имплантов, костную пластику, удаления и другие сложные процедуры. Вы занимаетесь тем, что умеете лучше всего.",
  },
  {
    title: "Пациент возвращается к вам на протезирование",
    description:
      "После завершения хирургии и подтверждённого заживления пациент возвращается в вашу практику для финальной реставрации и дальнейшего наблюдения.",
  },
  {
    title: "Прозрачная коммуникация",
    description:
      "Держим вас в курсе на каждом этапе: подробные планы лечения, обновления о ходе и развёрнутые послеоперационные отчёты.",
  },
  {
    title: "Консультация в день обращения",
    description:
      "Ваши пациенты получают внимание без задержек. Для срочных случаев — приём в тот же или на следующий день.",
  },
  {
    title: "Ваши пациенты остаются вашими",
    description:
      "Мы поддерживаем вашу практику, а не конкурируем с ней. Пациент остаётся вашим на протяжении всего процесса.",
  },
];

const process = [
  {
    step: "1",
    title: "Вы направляете",
    description:
      "Передаёте направление по телефону, на почту или через форму. Приложите снимки и нужные записи.",
  },
  {
    step: "2",
    title: "Мы лечим",
    description:
      "Доктор Антипов проводит операцию и ведёт пациента до полного заживления.",
  },
  {
    step: "3",
    title: "Пациент возвращается",
    description:
      "Пациент возвращается к вам на протезирование и дальнейшее наблюдение.",
  },
];

export default function RuReferPatientsPage() {
  const structuredData = [
    getBreadcrumbSchema([
      { name: "Главная", url: `${siteUrl}/ru` },
      { name: "Стоматологам", url: `${siteUrl}/ru/for-dentists` },
      {
        name: "Направить пациента",
        url: `${siteUrl}/ru/for-dentists/refer-patients`,
      },
    ]),
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
              src="/images/landing-pages/dental-implants/art/meet-the-doctor-76c0424d.jpg"
              alt="Направление пациентов к доктору Антипову"
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
                <li className="text-white font-semibold">Направить пациента</li>
              </ol>
            </nav>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">
              Для коллег
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Настоящее партнёрство для вашей практики
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
              Когда вы направляете пациента к доктору Антипову, вы работаете с
              опытным челюстно-лицевым хирургом, который ценит ваши отношения с
              пациентами и возвращает их к вам на протезирование.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={officePhoneHref}
                className="rounded-2xl bg-primary px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Позвонить {officePhone}
              </a>
              <Link
                href="/ru/contact"
                className="rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Отправить направление
              </Link>
            </div>
          </div>
        </section>

        {/* Partnership + benefits */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl mb-6">
                Совместный подход к лечению
              </h2>
              <div className="space-y-4 text-lg text-muted leading-relaxed">
                <p>
                  Мы занимаемся только хирургическим этапом лечения — установкой
                  имплантов, костной пластикой, удалениями и другими сложными
                  процедурами. Как только операция завершена и пациент зажил, он
                  возвращается в вашу практику для протезирования и дальнейшего
                  наблюдения.
                </p>
                <p>
                  Такой подход даёт пациенту экспертную хирургическую помощь и при
                  этом сохраняет преемственность с его лечащим стоматологом.
                </p>
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-dark mb-6">
              Почему стоматологи направляют к доктору Антипову
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-3xl border border-dark/5 bg-light p-7 shadow-sm"
                >
                  <h4 className="text-lg font-bold text-dark mb-2">{b.title}</h4>
                  <p className="text-muted leading-7 text-sm">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-light py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Как проходит направление
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {process.map((p) => (
                <div
                  key={p.step}
                  className="rounded-3xl border border-dark/5 bg-white p-7 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    {p.step}
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{p.title}</h3>
                  <p className="text-muted leading-7 text-sm">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl mb-4">
              Связаться напрямую
            </h2>
            <p className="text-lg text-muted mb-8">
              Приоритетная запись для направленных пациентов. По срочным вопросам
              или для обсуждения случая свяжитесь с нашей командой:
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
      <StickyConciergeBar />
      <RussianChatbot />
      <MicrosoftClarity />
    </div>
  );
}
