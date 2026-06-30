import { Section, Container } from "@/components/sections"
import Link from "next/link"
import Image from "next/image"
import {
  Award,
  GraduationCap,
  Hospital,
  ShieldCheck,
  Stethoscope,
  Heart,
  BookOpen,
  Building2,
  Globe2,
  Palette,
  Trophy,
} from "lucide-react"
import { StatPill } from "@/components/our-team/StatPill"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { Timeline } from "@/components/our-team/Timeline"
import { CEAccordion } from "@/components/our-team/CEAccordion"
import { Reveal } from "@/components/our-team/Reveal"
import RuNavbar from "@/components/ru-home/RuNavbar"
import RuFooter from "@/components/ru-home/RuFooter"
import RuCTA from "@/components/ru-home/RuCTA"
import StickyConciergeBar from "@/components/StickyConciergeBar"
import RussianChatbot from "@/components/RussianChatbot"
import MicrosoftClarity from "@/components/MicrosoftClarity"
import {
  getPhysicianSchema,
  getAntipovPersonSchema,
  getKahwachPhysicianSchema,
  getBreadcrumbSchema,
  structuredDataScript,
} from "@/lib/structured-data"
import { siteUrl } from "@/data/russianImplantFunnel"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Наша хирургическая команда — Доктор Антипов и Доктор Кахвач | Galleria Oral & Facial Surgery",
  description:
    "Знакомьтесь с хирургической командой Galleria Oral & Facial Surgery в Розвилле, Калифорния: доктор Александр В. Антипов, DDS (основатель, board-certified OMS, более 25 лет опыта) и доктор Андре-Давид Кахвач, DDS, MD. Образование в Albert Einstein, Loma Linda, UCSF, МГМСУ. Пять госпитальных привилегий, шесть профессиональных членств, основатель фонда Smile Again Foundation.",
  alternates: {
    canonical: `${siteUrl}/ru/our-team`,
    languages: {
      "x-default": `${siteUrl}/our-team`,
      en: `${siteUrl}/our-team`,
      ru: `${siteUrl}/ru/our-team`,
    },
  },
  openGraph: {
    title: "Наша хирургическая команда — Доктор Антипов и Доктор Кахвач",
    description:
      "Два board-certified челюстно-лицевых хирурга обслуживают Розвилл и Северную Калифорнию с госпитальными привилегиями в Sutter и Mercy.",
    url: `${siteUrl}/ru/our-team`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/landing-pages/dental-implants/art/slider03-00325586.jpg",
        width: 1920,
        height: 1080,
        alt: "Хирургическая команда доктора Антипова",
      },
    ],
  },
}

// ────────────────────────────────────────────────────────────────────
// Данные CV — переведены с alexander_antipov_cv.pdf
// ────────────────────────────────────────────────────────────────────

const educationItems = [
  {
    year: "1995 – 2000",
    title: "Магистерская степень",
    subtitle: "Московский государственный медико-стоматологический университет (МГМСУ)",
    description: "Российская Федерация. Фундаментальное медицинское и стоматологическое образование в одном из ведущих стоматологических вузов России.",
  },
  {
    year: "2001 – 2003",
    title: "Doctor of Dental Surgery (DDS)",
    subtitle: "Loma Linda University, School of Dentistry",
    description: "Получил американскую степень DDS в одной из самых уважаемых стоматологических школ Калифорнии.",
  },
  {
    year: "2007 – 2008",
    title: "Резидентура по челюстно-лицевой хирургии",
    subtitle: "Albert Einstein College of Medicine, Yeshiva University, Department of Dentistry",
    description: "Завершил резидентуру OMS в Нью-Йорке — фундамент для практики полного спектра хирургии.",
  },
]

const careerItems = [
  {
    year: "2008 – настоящее время",
    title: "Владелец, медицинский директор и хирург-стоматолог",
    subtitle: "Частная практика — Розвилл, Калифорния",
    description: "Основал практику в Розвилле в 2008 году и лично выполнил каждую операцию с тех пор.",
  },
  {
    year: "2008 – 2012",
    title: "Контрактный хирург-стоматолог",
    subtitle: "Pacific Dental Services — Сакраменто, Калифорния",
  },
  {
    year: "2009 – настоящее время",
    title: "Контрактный хирург-стоматолог",
    subtitle: "California Department of Corrections and Rehabilitation — Фолсом, Калифорния",
    description: "Предоставляет хирургическую помощь в исправительных медицинских учреждениях с 2009 года.",
  },
  {
    year: "2009 – настоящее время",
    title: "Контрактный хирург-стоматолог",
    subtitle: "Sacramento State Prison — Сакраменто, Калифорния",
  },
  {
    year: "2025 – настоящее время",
    title: "Основатель и директор",
    subtitle: "Smile Again Foundation",
    description: "Основал некоммерческий фонд, посвящённый расширению доступа к восстановительной стоматологической помощи и поддержке нуждающихся пациентов.",
  },
]

const hospitalPrivileges = [
  { name: "Sutter Roseville Medical Center", note: "Розвилл, Калифорния" },
  { name: "Sutter General Hospital", note: "Сакраменто, Калифорния" },
  { name: "Mercy General Hospital", note: "Сакраменто, Калифорния" },
  { name: "Mercy San Juan Medical Center", note: "Кармайкл, Калифорния" },
  { name: "Galleria Oral & Maxillofacial Surgery", note: "Розвилл, Калифорния" },
]

const certifications = [
  { label: "Лицензия стоматолога Калифорнии", value: "#50724" },
  { label: "Сертификат DEA", value: "#FA 0689717" },
  { label: "Разрешение на общую анестезию", value: "#GA 1446" },
  { label: "Разрешение на лицевую косметическую хирургию", value: "Калифорния" },
  { label: "Зарегистрированный провайдер CE", value: "#00948675" },
  { label: "Diplomate, ABOMS", value: "Board-Certified" },
  { label: "Life Support Network", value: "Действует" },
  { label: "CPR / BLS Certified", value: "Действует" },
]

const memberships = [
  {
    group: "Национальные",
    items: [
      "American Board of Oral & Maxillofacial Surgery (ABOMS) — Diplomate",
      "American Association of Oral & Maxillofacial Surgeons (AAOMS)",
      "American Dental Association (ADA)",
    ],
  },
  {
    group: "Штатные",
    items: [
      "California Association of Oral & Maxillofacial Surgeons (CALAOMS)",
      "California Dental Association (CDA)",
    ],
  },
  {
    group: "Местные",
    items: [
      "Sacramento District Dental Society (SDDS)",
    ],
  },
]

// Курсы повышения квалификации сохранены на английском — оригинальные названия международных программ
const continuingEducation = [
  "Arnett Orthognathic Surgery Forum",
  "What's New in Local Anesthesia",
  "Protocols of Care in Treating Patients with Clefts",
  "Medicine for the OMS Patient and You",
  "Site Augmentation for Advanced and Complex Implant Care",
  "Principles of Attachment Selection for Implant Supported Overdenture",
  "Full Arch Immediate-Load Fixed Prosthetic Rehabilitation",
  "Esthetic Zone Reconstruction",
  "Alveolar Bone Grafting: The Evidence",
  "Horizontal Augmentation Through the Ridge-Split Procedure",
  "Immediate Provisionalization of Dental Implants",
  "Management of Complications in the Edentulous Patient",
  "Digital Implant Dentistry: Impression-Free Implant Planning",
  "Avoiding and Managing Complications in Esthetic Implant Therapy",
  "Esthetic Soft Tissue Management A to Z",
  "Periodontal Plastic Surgery for the Implant Patient",
  "Anesthesia Update for the Oral & Maxillofacial Surgeon",
  "Observational Surgery Preceptorship in Cosmetic Facial Surgery — face lift, blepharoplasty, brow lift, facial liposuction, facial implants, neurotoxins, injectable fillers, CO2 laser resurfacing, chemical peels, radiowave surgery, and skin care",
  "What Hygienists Should Know",
]

const kahwachHighlights = [
  { icon: GraduationCap, label: "DDS, University of California, San Francisco (с отличием)" },
  { icon: Stethoscope, label: "MD и резидентура OMS, Loma Linda University — продвинутая подготовка в анестезиологии" },
  { icon: Palette, label: "Образование в области живописи и скульптуры формирует хирургическую точность и эстетику" },
  { icon: Globe2, label: "Медицинская и стоматологическая миссионерская работа в Европе, Африке, Карибском бассейне и на Ближнем Востоке" },
]

// ────────────────────────────────────────────────────────────────────
// СТРАНИЦА
// ────────────────────────────────────────────────────────────────────

export default function RussianOurTeamPage() {
  const structuredData = [
    getPhysicianSchema(),
    getAntipovPersonSchema(),
    getKahwachPhysicianSchema(),
    getBreadcrumbSchema([
      { name: "Главная", url: `${siteUrl}/ru` },
      { name: "Команда", url: `${siteUrl}/ru/our-team` },
    ]),
  ]

  return (
    <div className="min-h-screen bg-white text-dark" lang="ru">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />

      <RuNavbar />

      <main>
        {/* ============================================================ */}
        {/* HERO with stats + photo background                           */}
        {/* ============================================================ */}
        <section className="relative text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/landing-pages/dental-implants/art/slider03-00325586.jpg"
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-navy/70" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav aria-label="Хлебные крошки" className="mb-6 flex justify-center text-sm text-white/70">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/ru" className="hover:text-white transition-colors">Главная</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-semibold">Команда</li>
              </ol>
            </nav>
            <Reveal>
              <span className="inline-block text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-4">
                Наша хирургическая команда
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                Два хирурга.
                <br />
                <span className="text-primary">Один стандарт ухода.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
                Galleria Oral &amp; Facial Surgery возглавляет{" "}
                <strong className="text-white">доктор Александр В. Антипов, DDS</strong> —
                Diplomate Американского борда челюстно-лицевой хирургии, к которому присоединился{" "}
                <strong className="text-white">доктор Андре-Давид Кахвач, DDS, MD</strong>.
                Совместный опыт: более 25 лет хирургической практики полного спектра,
                пять госпитальных привилегий и двойная медицинская подготовка.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              <StatPill icon={<Trophy className="h-5 w-5 text-primary" />} value={<AnimatedCounter to={25} suffix="+" />} label="Лет в практике" delay={0.3} />
              <StatPill icon={<ShieldCheck className="h-5 w-5 text-primary" />} value="ABOMS" label="Board-Certified" delay={0.35} />
              <StatPill icon={<Hospital className="h-5 w-5 text-primary" />} value={<AnimatedCounter to={5} />} label="Госпитальных привилегий" delay={0.4} />
              <StatPill icon={<Award className="h-5 w-5 text-primary" />} value={<AnimatedCounter to={6} />} label="Профессиональных членств" delay={0.45} />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Доктор Антипов — основной блок                                */}
        {/* ============================================================ */}
        <Section background="default" padding="xl" id="dr-antipov">
          <Container size="lg">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-2">
                  <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/drantipov.png"
                      alt="Доктор Александр В. Антипов, DDS — основатель Galleria Oral & Facial Surgery"
                      width={600}
                      height={800}
                      className="w-full h-auto"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent p-6">
                      <p className="text-white/70 text-xs uppercase tracking-widest font-semibold">
                        Diplomate · ABOMS
                      </p>
                      <p className="text-white font-serif text-xl font-bold mt-1">
                        Доктор Александр В. Антипов, DDS
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3 px-2">
                    <span className="h-px flex-1 bg-primary/30" />
                    <span className="text-3xl text-primary" style={{ fontFamily: "var(--font-signature-cyrillic)" }}>
                      Доктор Антипов
                    </span>
                    <span className="h-px flex-1 bg-primary/30" />
                  </div>
                </div>

                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">
                      Основатель · Челюстно-лицевой хирург
                    </p>
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                      Доктор Александр В. Антипов, DDS
                    </h2>
                  </div>

                  <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                    <p>
                      Доктор Антипов практикует челюстно-лицевую хирургию полного спектра в Розвилле,
                      Калифорния, с <strong>2008 года</strong>. Diplomate Американского борда челюстно-лицевой
                      хирургии (ABOMS), его подготовка охватывает три страны и три самых уважаемых учреждения
                      стоматологии и медицины — <strong>Albert Einstein College of Medicine</strong>,
                      <strong> Loma Linda University</strong> и <strong>Московский государственный
                      медико-стоматологический университет</strong>.
                    </p>
                    <p>
                      Его практика охватывает полный объём OMS — зубные импланты и реставрацию полной дуги
                      (All-on-4 / All-on-X), корригирующую хирургию челюсти, хирургию апноэ сна, костную
                      пластику, лицевую травматологию и косметические процедуры лица. Имеет госпитальные
                      привилегии в пяти учреждениях Северной Калифорнии, разрешение Калифорнии на общую
                      анестезию для IV-седации в кабинете и разрешение на плановую косметическую хирургию лица.
                    </p>
                    <p>
                      В <strong>2025 году</strong> доктор Антипов основал{" "}
                      <strong>Smile Again Foundation</strong> — некоммерческую организацию, посвящённую
                      расширению доступа к восстановительной стоматологической помощи для пациентов,
                      которые иначе остались бы без лечения.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link
                      href="/ru/about"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                    >
                      Подробная биография
                    </Link>
                    <a
                      href="tel:9167832110"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white border-2 border-navy/10 text-navy rounded-xl font-semibold hover:bg-navy/5 transition-all"
                    >
                      Позвонить (916) 783-2110
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* ============================================================ */}
        {/* Образование (timeline)                                       */}
        {/* ============================================================ */}
        <section className="py-20 bg-bone/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-14">
                <GraduationCap className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900">
                  Образование
                </h2>
                <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
                  Три страны. Три самых уважаемых учреждения стоматологической медицины.
                </p>
              </div>
            </Reveal>

            <div className="max-w-3xl mx-auto">
              <Timeline items={educationItems} />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Госпитальные привилегии                                       */}
        {/* ============================================================ */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-12">
                <Hospital className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900">
                  Госпитальные и клинические привилегии
                </h2>
                <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
                  Хирургический доступ в пяти учреждениях Северной Калифорнии.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hospitalPrivileges.map((h, i) => (
                <Reveal key={h.name} delay={i * 0.05}>
                  <div className="h-full bg-white border border-neutral-200 rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all group">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <Hospital className="h-5 w-5 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 leading-snug">{h.name}</h3>
                        <p className="text-sm text-neutral-500 mt-1">{h.note}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Лицензии и сертификации                                       */}
        {/* ============================================================ */}
        <section className="py-20 bg-gradient-to-br from-navy via-navy-dark to-navy text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-12">
                <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="font-serif text-4xl lg:text-5xl font-bold">
                  Лицензии и сертификации
                </h2>
                <p className="mt-4 text-white/75 text-lg max-w-2xl mx-auto">
                  Каждое разрешение, сертификация и лицензия — подтверждаются в открытых государственных реестрах.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.04}>
                  <div className="h-full bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 hover:bg-white/15 hover:border-primary/50 transition-all">
                    <p className="text-xs uppercase tracking-widest text-white/60 font-semibold leading-snug">
                      {c.label}
                    </p>
                    <p className="mt-2 text-white font-bold text-lg break-all">{c.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Профессиональные членства                                     */}
        {/* ============================================================ */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-12">
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900">
                  Профессиональные членства
                </h2>
                <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
                  Активное членство в шести национальных, штатных и местных профессиональных ассоциациях.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {memberships.map((m, i) => (
                <Reveal key={m.group} delay={i * 0.08}>
                  <div className="h-full bg-bone/30 border border-neutral-200 rounded-2xl p-6">
                    <p className="text-xs uppercase tracking-widest text-primary font-bold mb-4">
                      {m.group}
                    </p>
                    <ul className="space-y-3">
                      {m.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-neutral-700 leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-primary mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Профессиональный путь (timeline)                              */}
        {/* ============================================================ */}
        <section className="py-20 bg-bone/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-14">
                <Building2 className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900">
                  Профессиональный путь
                </h2>
                <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
                  Частная практика, госпитальные системы, медицинская помощь в исправительных учреждениях и благотворительность.
                </p>
              </div>
            </Reveal>

            <div className="max-w-3xl mx-auto">
              <Timeline items={careerItems} />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Smile Again Foundation                                        */}
        {/* ============================================================ */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-bone/40 border-2 border-primary/20 rounded-3xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Heart className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-2">
                      Благотворительность · основан в 2025
                    </p>
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight">
                      Smile Again Foundation
                    </h2>
                    <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
                      В 2025 году доктор Антипов основал и теперь возглавляет фонд Smile Again Foundation —
                      некоммерческую организацию, посвящённую расширению доступа к восстановительной
                      стоматологической помощи для пациентов, которые иначе остались бы без лечения.
                      Фонд сосредоточен на поддержке пациентов с миссией и практических путях возвращения
                      к здоровью полости рта.
                    </p>
                    <p className="mt-4 text-neutral-600 italic">
                      «Хирургия должна восстанавливать больше, чем функцию. Она должна возвращать уверенность,
                      чтобы снова улыбаться».
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Повышение квалификации (аккордеон)                            */}
        {/* ============================================================ */}
        <section className="py-20 bg-bone/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-10">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900">
                  Продвинутая подготовка и повышение квалификации
                </h2>
                <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
                  Избранные курсы продвинутой подготовки и непрерывного образования, пройденные за годы
                  практики.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <CEAccordion courses={continuingEducation} />
            </Reveal>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Доктор Кахвач                                                 */}
        {/* ============================================================ */}
        <Section background="default" padding="xl" id="dr-kahwach">
          <Container size="lg">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-2 lg:order-2">
                  <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/dr-kahwach-v3.jpg"
                      alt="Доктор Андре-Давид Кахвач, DDS, MD — челюстно-лицевой хирург"
                      width={600}
                      height={800}
                      className="w-full h-auto"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent p-6">
                      <p className="text-white/70 text-xs uppercase tracking-widest font-semibold">
                        DDS · MD · OMS
                      </p>
                      <p className="text-white font-serif text-xl font-bold mt-1">
                        Доктор Андре-Давид Кахвач
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 lg:order-1 space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-3">
                      Челюстно-лицевой хирург
                    </p>
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                      Доктор Андре-Давид Кахвач, DDS, MD
                    </h2>
                  </div>

                  <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                    <p>
                      Доктор Кахвач сочетает в себе хирургическое мастерство, художественное видение
                      и международный опыт в области челюстно-лицевой хирургии. Он получил стоматологическую
                      степень <strong>с отличием в UC San Francisco</strong>, после чего прошёл резидентуру
                      OMS в <strong>Loma Linda University</strong>, где также получил степень доктора
                      медицины (MD) и продвинутую подготовку в анестезиологии.
                    </p>
                    <p>
                      С увлечением полным спектром челюстно-лицевой хирургии, доктор Кахвач посвящён
                      оказанию исключительной помощи в косметических процедурах, дентальной имплантации,
                      лицевой травматологии и ортогнатической хирургии. Его подход сочетает точность
                      и творчество — влияние, сформированное не только хирургической подготовкой,
                      но и его опытом в живописи и скульптуре.
                    </p>
                    <p>
                      Помимо операционной, доктор Кахвач много путешествовал по Европе, Африке,
                      Карибскому бассейну и Ближнему Востоку, укрепляя свою приверженность служению
                      через медицинские и стоматологические миссии.
                    </p>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {kahwachHighlights.map(({ icon: Icon, label }) => (
                      <li
                        key={label}
                        className="flex items-start gap-3 text-sm text-neutral-700 leading-snug"
                      >
                        <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <Link
                      href="/ru/contact"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                    >
                      Записаться на консультацию →
                    </Link>
                    <a
                      href="tel:9167832110"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white border-2 border-navy/10 text-navy rounded-xl font-semibold hover:bg-navy/5 transition-all"
                    >
                      Позвонить (916) 783-2110
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* ============================================================ */}
        {/* CTA                                                           */}
        {/* ============================================================ */}
        <RuCTA />
      </main>

      <RuFooter />
      <StickyConciergeBar />
      <RussianChatbot />
      <MicrosoftClarity />
    </div>
  )
}
