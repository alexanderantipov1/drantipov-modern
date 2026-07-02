import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RussianMultiStepForm from "@/components/RussianMultiStepForm";
import StickyConciergeBar from "@/components/StickyConciergeBar";
import RussianChatbot from "@/components/RussianChatbot";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import { siteUrl, officeAddress, officePhone, officePhoneHref, officeEmail } from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: "Запись на консультацию | Доктор Антипов | Северная Калифорния",
  description:
    "Запишитесь на бесплатную консультацию по имплантам, ортогнатической хирургии или All-on-4. Принимаем новых пациентов. Удобное расположение в Roseville.",
  alternates: {
    canonical: `${siteUrl}/ru/for-patients/consultation`,
    languages: {
      ru: `${siteUrl}/ru/for-patients/consultation`,
      en: `${siteUrl}/for-patients/consultation`,
      "x-default": `${siteUrl}/for-patients/consultation`,
    },
  },
  openGraph: {
    title: "Запись на консультацию — Доктор Антипов",
    description: "Бесплатная консультация: имплантация, ортогнатическая хирургия, All-on-4. Новые пациенты приветствуются.",
    url: "https://www.drantipov.com/ru/for-patients/consultation",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/invitations/schedule-a16fad8c.jpg",
        width: 1920,
        height: 1080,
        alt: "Запись на консультацию — Доктор Антипов",
      },
    ],
  },
};

const whatToExpect = [
  { step: "1", title: "Комплексное обследование", description: "Доктор Антипов изучит медицинскую историю, проведёт клинический осмотр и обсудит ваши пожелания." },
  { step: "2", title: "Расширенная диагностика (при необходимости)", description: "3D CBCT-сканирование или панорамные снимки для точной оценки анатомии и составления плана." },
  { step: "3", title: "Индивидуальный план лечения", description: "Доктор объяснит диагноз, варианты лечения, ответит на вопросы и предоставит смету." },
  { step: "4", title: "Без давления", description: "Дайте себе время обдумать варианты. Мы никогда не торопим пациентов с решением." },
];

export default function RussianConsultationPage() {
  return (
    <div className="min-h-screen bg-white text-dark" lang="ru">
      <main>
        <section className="relative bg-dark text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/invitations/schedule-a16fad8c.jpg" alt="Запись на консультацию" fill className="object-cover opacity-30" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <nav aria-label="Навигация" className="text-sm text-white/60 mb-6">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/ru" className="hover:text-primary-light">Главная</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/ru/for-patients" className="hover:text-primary-light">Пациентам</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-semibold">Консультация</li>
              </ol>
            </nav>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Запись на приём</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Запишитесь на бесплатную консультацию
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
              Заполните форму ниже — наш координатор свяжется с вами в течение 24 часов для подтверждения времени.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2 rounded-3xl border border-dark/5 bg-light p-8 shadow-sm">
                <h2 className="font-serif text-3xl font-bold text-dark mb-2">Запрос на консультацию</h2>
                <p className="text-muted mb-8">Заполните форму — мы свяжемся с вами в течение 24 часов.</p>
                <RussianMultiStepForm />
              </div>
              <div className="space-y-6">
                <div className="rounded-3xl border border-dark/5 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-3">Адрес</h3>
                  <p className="text-muted text-sm leading-7">{officeAddress}</p>
                </div>
                <div className="rounded-3xl border border-dark/5 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-3">Часы работы</h3>
                  <p className="text-muted text-sm leading-7">Пн–Пт 8:00–17:00<br/>Экстренные случаи 24/7</p>
                </div>
                <div className="rounded-3xl border border-dark/5 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-3">Контакты</h3>
                  <div className="space-y-2 text-sm">
                    <p><a href={officePhoneHref} className="text-muted hover:text-primary">{officePhone}</a></p>
                    <p><a href={`mailto:${officeEmail}`} className="text-muted hover:text-primary">{officeEmail}</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl">Чего ожидать на консультации</h2>
              <p className="mt-4 text-lg text-muted">Бесплатно, без обязательств, ~60 минут</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {whatToExpect.map((s) => (
                <div key={s.step} className="rounded-3xl border border-dark/5 bg-white p-7 shadow-sm flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">{s.step}</div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">{s.title}</h3>
                    <p className="text-muted leading-7 text-sm">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <StickyConciergeBar />
      <RussianChatbot />
      <MicrosoftClarity />
    </div>
  );
}
