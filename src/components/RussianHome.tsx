"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import RussianLeadForm from "@/components/RussianLeadForm";
import StickyConciergeBar from "@/components/StickyConciergeBar";
import { officePhone, officePhoneHref, officeAddress } from "@/data/russianImplantFunnel";

const implantSequence = [
  { src: "/images/hero/01-extraction-socket.jpeg", label: "Удаление зуба", step: "Шаг 1" },
  { src: "/images/hero/02-blood-clot.png", label: "Естественное заживление", step: "Шаг 2" },
  { src: "/images/hero/03-bone-graft-placed.jpeg", label: "Костная пластика", step: "Шаг 3" },
  { src: "/images/hero/04-bone-graft-healing.png", label: "Интеграция трансплантата", step: "Шаг 4" },
  { src: "/images/hero/05-healed-bone.jpeg", label: "Зажившая кость", step: "Шаг 5" },
  { src: "/images/hero/06-implant-placed.jpeg", label: "Установка импланта", step: "Шаг 6" },
  { src: "/images/hero/07-osseointegration.jpeg", label: "Остеоинтеграция", step: "Шаг 7" },
  { src: "/images/hero/08-abutment.jpeg", label: "Абатмент", step: "Шаг 8" },
  { src: "/images/hero/09-final-crown.jpeg", label: "Постоянная коронка", step: "Шаг 9" },
];

const trustBadges = [
  "10 000+ восстановленных улыбок",
  "Бесплатный CT и консультация",
  "Импланты за один день",
  "Финансирование от $99/мес",
  "Сертифицированный хирург",
  "25+ лет опыта",
];

const services = [
  {
    title: "Full Arch имплантация",
    subtitle: "All-on-4, All-on-6, zygomatic implants, teeth-in-a-day",
    body:
      "Полный набор фиксированных зубов за один визит. Dr. Antipov использует 3D cone-beam CT и навигационную хирургию для точной установки — даже в случаях, когда другие хирурги отказались из-за нехватки кости. При тяжёлой потере кости верхней челюсти — zygomatic implants, без длительной костной пластики. В каждом случае All-on-4 / All-on-6 устанавливаются временные зубы в день операции.",
    image: "/images/procedures/dental-implants-26292ad9.jpg",
    features: [
      "All-on-4 / All-on-6",
      "Zygomatic implants",
      "Same-day teeth",
      "Immediate load",
      "CT-guided surgery",
      "Zirconia / Titanium",
    ],
  },
  {
    title: "Хирургия челюсти",
    subtitle: "Orthognathic, Le Fort, BSSO, genioplasty",
    body:
      "Компьютерное планирование исправления прикуса, восстановления функции жевания и гармонии лица. Mesial / distal occlusion, открытый прикус, перекрёстный прикус, асимметрия лица, обструктивное апноэ. Le Fort I osteotomy, BSSO, genioplasty, maxillomandibular advancement, double jaw surgery — с точностью до миллиметра по 3D-планированию.",
    image: "/images/procedures/corrective-jaw-surgery-406b79a4.jpg",
    features: [
      "Orthognathic surgery",
      "Le Fort I osteotomy",
      "BSSO",
      "Genioplasty",
      "Double jaw surgery",
      "Sleep apnea surgery",
    ],
  },
  {
    title: "Косметология лица",
    subtitle: "Rhinoplasty, face lift, blepharoplasty, филлеры",
    body:
      "Эстетические процедуры, выполненные board-certified челюстно-лицевым хирургом, который знает анатомию лица на самом глубоком уровне. Ринопластика, фейслифтинг, верхняя и нижняя blepharoplasty, азиатская двойная веко, facial feminization, удаление родинок без шрама, Juvederm, увеличение губ, аутологичный жировой transfer.",
    image: "/images/procedures/facial-cosmetic-surgery-e97fd634.jpg",
    features: [
      "Rhinoplasty",
      "Face lift",
      "Blepharoplasty",
      "Juvederm fillers",
      "Lip augmentation",
      "Fat transfer",
    ],
  },
  {
    title: "Костная пластика и sinus lift",
    subtitle: "Organic, holistic и аутогенная регенерация кости",
    body:
      "Восстановление кости челюсти, потерянной из-за удаления зубов, пародонтита или травмы. Sinus lift, ridge augmentation, socket preservation, block bone graft, guided bone regeneration. Аутогенный, allograft, xenograft и синтетические материалы — включая натуральные органические варианты для подготовки к имплантации.",
    image: "/images/procedures/extractions-1896b4c1.jpg",
    features: [
      "Sinus lift",
      "Ridge augmentation",
      "Socket preservation",
      "Block bone graft",
      "Guided bone regeneration",
      "Organic / autogenous",
    ],
  },
  {
    title: "Oral surgery",
    subtitle: "Зубы мудрости, TMJ, IV sedation",
    body:
      "Комплексная хирургия полости рта: удаление impacted зубов мудрости, сложные удаления, хирургическое раскрытие impacted зубов для ортодонтии, лечение TMJ, удаление кист и опухолей, pre-prosthetic surgery. Все процедуры — под комфортной IV-седацией или общей анестезией в Roseville surgical center.",
    image: "/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg",
    features: [
      "Wisdom teeth",
      "Impacted teeth",
      "TMJ treatment",
      "IV sedation",
      "General anesthesia",
      "Cyst removal",
    ],
  },
  {
    title: "Один и несколько имплантов",
    subtitle: "Single implants, мостовидные протезы, snap-on dentures",
    body:
      "Замена одного или нескольких зубов — самый естественный и долговечный вариант. Single tooth implants с immediate temporary crowns, implant-supported bridges для нескольких соседних зубов, snap-on dentures (overdentures) для съёмного варианта на имплантах. Все импланты ставятся под 3D CT-навигацией с титаном медицинского класса.",
    image: "/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg",
    features: [
      "Single tooth implant",
      "Implant bridge",
      "Snap-on dentures",
      "Overdentures",
      "Immediate implant",
      "CT-guided placement",
    ],
  },
];

const stats = [
  { value: "10 000+", label: "восстановленных улыбок" },
  { value: "25+", label: "лет board-certified практики" },
  { value: "4.9★", label: "средняя оценка по 300+ отзывам" },
  { value: "от $99", label: "в месяц — финансирование" },
];

const process = [
  { n: "1", title: "Заявка", body: "Расскажите ситуацию, город, желаемые сроки и удобный канал связи. Без формальностей." },
  { n: "2", title: "Бесплатный 3D CT и осмотр", body: "В офисе Roseville. CT-снимок, осмотр, обсуждение вариантов — без оплаты." },
  { n: "3", title: "Понятный план и стоимость", body: "Все опции с цифрами. Финансирование от $99/мес, до 84 месяцев под 0% APR." },
  { n: "4", title: "Операция и сопровождение", body: "Computer-guided surgery, временные зубы в день операции там, где возможно. Сопровождение до окончательного результата." },
];

const faq = [
  {
    q: "Сколько стоит All-on-4?",
    a: "От $21 000 за арку под ключ. После бесплатного CT и осмотра называем точную стоимость и подбираем финансирование (от $99/мес, до 84 месяцев под 0% APR).",
  },
  {
    q: "Можно ли поставить импланты за один день?",
    a: "Для All-on-4 и All-on-6 — да, при достаточной плотности кости. Импланты ставятся, и в этот же день фиксируются временные зубы. Постоянный протез — после периода заживления.",
  },
  {
    q: "Мне сказали, что кости недостаточно. Есть варианты?",
    a: "Да. Dr. Antipov делает сложную костную пластику и устанавливает zygomatic implants при тяжёлой потере кости в верхней челюсти. Точные рекомендации возможны после осмотра и 3D CT.",
  },
  {
    q: "Я живу не рядом с Roseville. Можно начать удалённо?",
    a: "Да. Координатор объяснит, какие фото, снимки или документы стоит подготовить. Часть пациентов прилетает на консультацию из других штатов и стран.",
  },
  {
    q: "Это безопасно? Что с анестезией?",
    a: "Все хирургические процедуры выполняются под IV-седацией или общей анестезией. Dr. Antipov fellowship-trained и сертифицирован для сложной челюстно-лицевой хирургии. Roseville surgical center полностью оборудован под хирургию любой сложности.",
  },
];

const concerns = [
  {
    title: "Поймут ли меня?",
    body: "Координатор и Dr. Antipov объяснят диагноз и план лечения понятным языком, без потери смысла.",
  },
  {
    title: "Будет ли цена прозрачной?",
    body: "После CT и осмотра вы видите все опции с цифрами и финансированием. Без скрытых платежей в день операции.",
  },
  {
    title: "Сколько лет практики?",
    body: "25+ лет board-certified опыта в челюстно-лицевой хирургии. 10 000+ восстановленных улыбок. 4.9★ по 300+ отзывам.",
  },
];

export default function RussianHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % implantSequence.length);
    }, 3500);
    return () => clearInterval(id);
  }, [isAutoPlaying]);

  const goToSlide = useCallback((i: number) => {
    setCurrentSlide(i);
    setIsAutoPlaying(false);
  }, []);

  return (
    <div className="min-h-screen bg-white text-dark" lang="ru">
      <header className="sticky top-0 z-50 border-b border-dark/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/ru" className="flex items-center gap-3">
            <Image
              src="/images/logo-d10cd66c.svg"
              alt="Dr. Alexander Antipov, DDS"
              width={180}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
            <a href="#services" className="transition hover:text-primary">Услуги</a>
            <Link href="/ru/questions" className="transition hover:text-primary">Гиды</Link>
            <Link href="/ru/glossary" className="transition hover:text-primary">Глоссарий</Link>
            <Link href="/ru/about" className="transition hover:text-primary">О докторе</Link>
            <a href="#contact" className="transition hover:text-primary">Контакты</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="hidden rounded-full border border-dark/15 px-3 py-1.5 text-xs font-semibold text-muted hover:border-primary/40 hover:text-dark sm:inline"
            >
              EN
            </a>
            <a
              href={officePhoneHref}
              className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-dark sm:px-5"
            >
              {officePhone}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-dark text-white">
          <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                Челюстно-лицевой хирург &middot; Roseville, California
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                Импланты
                <br />
                <span className="gradient-text">за один день</span>
                <br />
                Хирургия челюсти
                <br />
                и косметология лица
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
              >
                Dr. Alexander Antipov: <strong className="text-white">All-on-4 и All-on-6</strong> full-arch имплантация,{" "}
                <strong className="text-white">orthognathic surgery</strong>,{" "}
                <strong className="text-white">косметология лица</strong> и{" "}
                <strong className="text-white">органическая костная пластика</strong>. 25+ лет сертифицированной практики.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/30"
                >
                  Бесплатная консультация
                </a>
                <a
                  href={officePhoneHref}
                  className="rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Позвонить {officePhone}
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 grid grid-cols-2 gap-4 text-sm text-white/60 sm:grid-cols-3"
              >
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="leading-tight">{badge}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={implantSequence[currentSlide]?.src ?? ""}
                      alt={implantSequence[currentSlide]?.label ?? ""}
                      fill
                      className="object-cover"
                      quality={85}
                      sizes="(min-width: 1024px) 50vw, 0vw"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {implantSequence[currentSlide]?.step}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {implantSequence[currentSlide]?.label}
                  </h3>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-1.5">
                {implantSequence.map((slide, i) => (
                  <button
                    key={slide.label}
                    onClick={() => goToSlide(i)}
                    aria-label={slide.label}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === currentSlide ? "w-8 bg-primary" : i < currentSlide ? "w-3 bg-primary/50" : "w-3 bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 text-center text-xs text-white/40">
                Путь импланта — от удаления до постоянной коронки
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-dark/5 bg-light">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-dark sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Услуги</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Хирургия для взрослых пациентов с 25-летним стажем
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Имплантация, реконструкция челюсти, лицевая косметология и костная пластика — всё под одной крышей и
                одним хирургом, который ведёт случай от консультации до окончательного результата.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {services.map((service, idx) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="group overflow-hidden rounded-3xl border border-dark/5 bg-white shadow-sm transition hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-bold text-dark">{service.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{service.subtitle}</p>
                    <p className="mt-4 leading-7 text-muted">{service.body}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="rounded-full border border-dark/10 bg-light px-3 py-1 text-xs font-medium text-dark"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-light py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Процесс</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                От заявки до постоянной улыбки
              </h2>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <div key={step.n} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-dark/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {step.n}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-dark">{step.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">О докторе</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Dr. Alexander Antipov, DDS
              </h2>
              <p className="mt-3 text-xl text-primary">Board-Certified Oral &amp; Maxillofacial Surgeon</p>
              <p className="mt-6 leading-8 text-muted">
                25+ лет хирургической практики. Diplomate of the American Board of Oral &amp; Maxillofacial Surgery.
                Fellowship-trained по сложной имплантации и реконструкции. Член AAOMS, ADA и Academy of
                Osseointegration. Сертифицирован для 3D CT-навигации, IV-седации и общей анестезии.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Diplomate, ABOMS",
                  "Fellowship-trained implants",
                  "Member AAOMS / ADA",
                  "3D CT-guided surgery",
                  "10 000+ пациентов",
                  "4.9★ по 300+ отзывам",
                ].map((cred) => (
                  <li key={cred} className="flex items-start gap-2 text-sm text-dark">
                    <svg className="h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
              <Image
                src="/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg"
                alt="Dr. Antipov dental practice in Roseville, California"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </section>

        {/* Concerns */}
        <section className="bg-light py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Что важно знать</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Чаще всего спрашивают это
              </h2>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {concerns.map((c) => (
                <div key={c.title} className="rounded-3xl border border-dark/5 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-bold text-dark">{c.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">FAQ</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Частые вопросы
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-dark/5 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-bold text-dark">
                    <span>{item.q}</span>
                    <span className="text-2xl text-primary transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 leading-8 text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-light py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Бесплатная консультация</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
                Запишитесь на консультацию
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Заполните форму — координатор перезвонит в течение 24 часов и объяснит следующий шаг. Бесплатный 3D CT
                и осмотр включены.
              </p>
              <div className="mt-10 space-y-5 text-dark">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Адрес</h4>
                    <p className="mt-1 text-muted">{officeAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102A1.125 1.125 0 005.873 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Телефон</h4>
                    <a href={officePhoneHref} className="mt-1 inline-block text-muted hover:text-primary">
                      {officePhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <RussianLeadForm defaultCity="" landingPath="/ru" />
          </div>
        </section>
      </main>

      <footer className="border-t border-dark/10 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Dr. Alexander Antipov, DDS — Roseville, California</p>
          <div className="flex gap-4">
            <a href="/" className="font-semibold text-primary hover:text-primary-dark">English</a>
            <a href="#contact" className="hover:text-primary">Контакты</a>
          </div>
        </div>
      </footer>

      <StickyConciergeBar />
    </div>
  );
}
