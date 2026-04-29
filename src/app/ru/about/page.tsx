import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StickyConciergeBar from "@/components/StickyConciergeBar";
import { officeAddress, officePhone, officePhoneHref, siteUrl } from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: "Dr. Alexander Antipov, DDS — челюстно-лицевой хирург в Roseville",
  description:
    "Dr. Alexander Antipov: 25+ лет board-certified практики, fellowship-trained по сложной имплантации. All-on-4, All-on-6, zygomatic implants, jaw surgery в Roseville, California.",
  alternates: {
    canonical: `${siteUrl}/ru/about`,
    languages: {
      ru: `${siteUrl}/ru/about`,
      en: `${siteUrl}/about`,
      "x-default": `${siteUrl}/about`,
    },
  },
  openGraph: {
    title: "Dr. Alexander Antipov, DDS — челюстно-лицевой хирург",
    description:
      "Board-certified oral & maxillofacial surgeon. 25+ лет опыта, 10 000+ пациентов. Имплантация и хирургия челюсти в Roseville, CA.",
    url: `${siteUrl}/ru/about`,
    locale: "ru_RU",
    type: "profile",
  },
};

const credentials = [
  { label: "Diplomate, American Board of Oral & Maxillofacial Surgery", note: "ABOMS" },
  { label: "Fellowship-trained по сложной имплантологии", note: "Complex implant reconstruction" },
  { label: "Active member — AAOMS, ADA", note: "Профессиональные общества" },
  { label: "Member, Academy of Osseointegration", note: "Имплантология" },
  { label: "Сертификация — IV-седация, общая анестезия", note: "DDS sedation permit" },
  { label: "3D CT-guided implant surgery", note: "Компьютерная навигация" },
];

const milestones = [
  {
    year: "1998",
    title: "DDS, школа стоматологии",
    body: "Начало клинической практики и специализация в челюстно-лицевой хирургии.",
  },
  {
    year: "2003",
    title: "Board certification — ABOMS",
    body: "Сертификация по высшим стандартам американской ассоциации oral & maxillofacial surgeons.",
  },
  {
    year: "2008",
    title: "Fellowship — сложная имплантология",
    body: "Специализированная подготовка по zygomatic implants, full-arch reconstruction и сложным случаям с потерей кости.",
  },
  {
    year: "2014",
    title: "Открытие практики в Roseville",
    body: "Современный surgical center с 3D CT, computer-guided implant placement и собственной анестезиологической службой.",
  },
  {
    year: "2026",
    title: "10 000+ восстановленных улыбок",
    body: "25+ лет board-certified практики и 4.9★ по 300+ верифицированным отзывам пациентов.",
  },
];

const philosophy = [
  {
    title: "Точность через 3D-планирование",
    body: "Каждый имплант ставится по 3D CT-плану с точностью до миллиметра. Никакой работы «на глаз» в зоне с нервами и пазухами.",
  },
  {
    title: "Прозрачная стоимость",
    body: "После CT и осмотра вы видите все опции с цифрами. Финансирование от $99/мес, до 84 месяцев под 0% APR. Без скрытых платежей в день операции.",
  },
  {
    title: "Один хирург — один план",
    body: "Случай ведёт сам Dr. Antipov: от первичной консультации и установки имплантов до контроля заживления и постоянного протеза.",
  },
  {
    title: "Сложные случаи — фокус практики",
    body: "Если вам сказали, что импланты невозможны из-за потери кости, есть варианты: zygomatic implants, advanced bone grafting, sinus lift по органическим протоколам.",
  },
];

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${siteUrl}/ru/about#physician`,
  name: "Dr. Alexander Antipov, DDS",
  alternateName: "Доктор Александр Антипов",
  url: `${siteUrl}/ru/about`,
  image: `${siteUrl}/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg`,
  medicalSpecialty: ["DentalSpecialty", "OMS"],
  jobTitle: "Board-Certified Oral & Maxillofacial Surgeon",
  worksFor: {
    "@type": "MedicalBusiness",
    name: "Dr. Alexander Antipov, DDS",
    address: {
      "@type": "PostalAddress",
      streetAddress: "911 Reserve Dr, Suite 150",
      addressLocality: "Roseville",
      addressRegion: "CA",
      postalCode: "95678",
      addressCountry: "US",
    },
    telephone: "+1-916-783-2110",
    url: siteUrl,
  },
  knowsLanguage: ["en", "ru"],
  description:
    "Board-certified oral and maxillofacial surgeon с 25+ годами практики. Специализация: All-on-4, All-on-6, zygomatic implants, orthognathic surgery, facial cosmetics, bone grafting. Roseville, California.",
};

export default function RussianAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <div className="min-h-screen bg-white text-dark" lang="ru">
        <header className="sticky top-0 z-50 border-b border-dark/10 bg-white/90 backdrop-blur-xl">
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
            <nav className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
              <Link href="/ru#services" className="transition hover:text-primary">Услуги</Link>
              <Link href="/ru/questions" className="transition hover:text-primary">Гиды</Link>
              <Link href="/ru/glossary" className="transition hover:text-primary">Глоссарий</Link>
              <Link href="/ru/about" className="transition hover:text-primary text-primary">О докторе</Link>
              <Link href="/ru#contact" className="transition hover:text-primary">Контакты</Link>
            </nav>
            <a
              href={officePhoneHref}
              className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-dark sm:px-5"
            >
              {officePhone}
            </a>
          </div>
        </header>

        <main>
          {/* Hero */}
          <section className="relative overflow-hidden bg-dark text-white">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">
                  О хирурге
                </p>
                <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Dr. Alexander <span className="gradient-text">Antipov, DDS</span>
                </h1>
                <p className="mt-5 text-xl text-primary-light">
                  Board-Certified Oral &amp; Maxillofacial Surgeon — Roseville, California
                </p>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                  25+ лет board-certified практики. 10 000+ восстановленных улыбок. Fellowship-trained по сложной
                  имплантологии и реконструкции челюсти. 3D CT-навигация, IV-седация, computer-guided implant
                  surgery.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/ru#contact"
                    className="rounded-2xl bg-primary px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-dark"
                  >
                    Бесплатная консультация
                  </Link>
                  <a
                    href={officePhoneHref}
                    className="rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    Позвонить {officePhone}
                  </a>
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg"
                  alt="Dr. Alexander Antipov dental practice in Roseville, California"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </section>

          {/* Credentials */}
          <section className="py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Сертификация</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                  Board certification и членство
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Хирургия челюсти и имплантология — высокорегулируемые специальности в США. Полный список
                  актуальных сертификатов и членств.
                </p>
              </div>
              <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {credentials.map((c) => (
                  <li
                    key={c.label}
                    className="flex gap-4 rounded-3xl border border-dark/5 bg-white p-6 shadow-sm"
                  >
                    <svg
                      className="h-6 w-6 shrink-0 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h3 className="font-bold text-dark">{c.label}</h3>
                      <p className="mt-1 text-sm text-muted">{c.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Philosophy */}
          <section className="bg-light py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Подход</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                  Как мы ведём пациента
                </h2>
              </div>
              <div className="mt-16 grid gap-6 md:grid-cols-2">
                {philosophy.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-3xl border border-dark/5 bg-white p-7 shadow-sm"
                  >
                    <h3 className="text-xl font-bold text-dark">{p.title}</h3>
                    <p className="mt-3 leading-7 text-muted">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-24 lg:py-32">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Путь</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                  Опыт и ключевые этапы
                </h2>
              </div>
              <ol className="relative mt-16 space-y-10 border-l border-dark/10 pl-8">
                {milestones.map((m) => (
                  <li key={m.year} className="relative">
                    <span className="absolute -left-[39px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                      ●
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-primary">{m.year}</p>
                      <h3 className="mt-2 text-xl font-bold text-dark">{m.title}</h3>
                      <p className="mt-2 leading-7 text-muted">{m.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Office */}
          <section className="bg-light py-24 lg:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Офис</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                  Surgical center в Roseville, CA
                </h2>
                <p className="mt-6 leading-8 text-muted">
                  Полностью оборудованный хирургический офис: 3D cone-beam CT, computer-guided implant placement,
                  собственная анестезиологическая служба, отдельная зона восстановления. Принимаем пациентов из
                  Sacramento, San Francisco Bay Area, Reno, Stockton, Fresno и других городов в радиусе 3.5 часов.
                </p>
                <div className="mt-8 space-y-5">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted">Адрес</h3>
                    <p className="mt-1 text-lg text-dark">{officeAddress}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted">Телефон</h3>
                    <a
                      href={officePhoneHref}
                      className="mt-1 inline-block text-lg text-dark hover:text-primary"
                    >
                      {officePhone}
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted">Часы приёма</h3>
                    <p className="mt-1 text-lg text-dark">
                      Понедельник — пятница: 8:00 — 17:00 · экстренные случаи 24/7
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-dark/5 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-dark">Готовы к следующему шагу?</h3>
                <p className="mt-4 leading-7 text-muted">
                  Бесплатная 3D CT консультация и осмотр — без оплаты. Координатор объяснит варианты, стоимость и
                  сроки.
                </p>
                <Link
                  href="/ru#contact"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-primary px-6 py-4 text-lg font-bold text-white transition hover:bg-primary-dark"
                >
                  Записаться на консультацию
                </Link>
                <a
                  href={officePhoneHref}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border border-dark/15 px-6 py-4 text-lg font-bold text-dark transition hover:border-primary/40"
                >
                  Позвонить {officePhone}
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-dark/10 bg-white py-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} Dr. Alexander Antipov, DDS — Roseville, California</p>
            <div className="flex gap-4">
              <Link href="/about" className="font-semibold text-primary hover:text-primary-dark">
                English
              </Link>
              <Link href="/ru" className="hover:text-primary">
                Главная
              </Link>
            </div>
          </div>
        </footer>

        <StickyConciergeBar />
      </div>
    </>
  );
}
