"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

const stats = [
  { value: "10 000+", label: "Пациентов" },
  { value: "25+", label: "Лет в хирургии" },
  { value: "3", label: "Локации офисов" },
  { value: "В тот же день", label: "Импланты и зубы" },
];

const antipovCredentials = [
  "Премия Neodent Elite Practitioner 2026 (Straumann Group)",
  "Diplomate, American Board of Oral & Maxillofacial Surgery (ABOMS)",
  "Член American Association of Oral & Maxillofacial Surgeons (AAOMS)",
  "Член California Association of Oral & Maxillofacial Surgeons (CALAOMS)",
  "Член Sacramento District Dental Society (SDDS)",
  "Член American Dental Association (ADA)",
  "Член California Dental Association (CDA)",
  "Лицензия дантиста Калифорнии №50724",
  "Разрешение на общую анестезию №GA 1446 — IV-седация в офисе",
  "Разрешение на эстетическую хирургию лица",
  "Сертифицированный преподаватель CE №00948675",
  "Права госпитализации — Sutter Roseville, Sutter General, Mercy General, Mercy San Juan",
  "Основатель и директор фонда Smile Again Foundation (2025)",
];

const kahwachCredentials = [
  "DDS, University of California, San Francisco (с отличием)",
  "MD и резидентура OMS, Loma Linda University",
  "Дополнительная подготовка по анестезиологии",
  "Полный спектр челюстно-лицевой хирургии",
  "Имплантация, лицевая травма, ортогнатика",
  "Эстетическая хирургия лица",
];

export default function RuAbout() {
  return (
    <section id="about" lang="ru" className="pt-8 pb-16 lg:pt-10 lg:pb-20 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Ваши челюстно-лицевые хирурги
          </span>
          <h2 className="font-serif mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight leading-tight">
            Два специалиста. <span className="gradient-text">Одна цель.</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            В клинике работают два хирурга с десятками лет совокупного опыта, продвинутой подготовкой и одной общей идеей — давать пациентам результат высокого уровня.
          </p>
        </motion.div>

        {/* Dr. Antipov */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/drantipov-about-v7.jpg"
                alt="Доктор Александр Антипов, DDS — сертифицированный челюстно-лицевой хирург в Roseville, Калифорния"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 sm:right-6 glass rounded-2xl p-6 shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">Сертифицирован ABOMS</p>
                  <p className="text-muted text-xs">Челюстно-лицевая хирургия</p>
                </div>
              </div>
              <p className="text-muted text-xs leading-relaxed">
                Diplomate, American Board of Oral and Maxillofacial Surgery. Профиль — All-on-4, скуловые импланты, ортогнатика, эстетика лица. Принимаем пациентов из Roseville, Сакраменто, Сан-Франциско и всей Северной Калифорнии.
              </p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-4xl sm:text-5xl font-bold text-dark tracking-tight leading-tight">
              Доктор Александр
              <br />
              <span className="gradient-text">Антипов, DDS</span>
            </h3>
            <p className="mt-6 text-muted text-lg leading-relaxed">
              Доктор Александр Антипов — <strong>сертифицированный челюстно-лицевой хирург</strong> в Roseville, Калифорния. За <strong>25+ лет</strong> и <strong>более 10 000 успешных операций</strong> он стал одним из самых известных специалистов Северной Калифорнии в области <strong>дентальной имплантации</strong>, <strong>корректирующей хирургии челюстей</strong> и <strong>эстетической хирургии лица</strong>.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              As a Diplomate of the American Board of Oral and Maxillofacial Surgery and fellowship-trained in complex implant reconstruction, Dr. Antipov brings an unmatched depth of expertise to every case. He is one of the few surgeons in Northern California who performs <strong>zygomatic implants</strong> for patients with severe bone loss, <strong>full arch All-on-4 and All-on-6 immediate-load protocols</strong>, complex <strong>orthognathic jaw surgery</strong> including Le Fort osteotomies, BSSO, and genioplasty, and advanced <strong>facial cosmetic procedures</strong> including rhinoplasty and face lift surgery.
            </p>

            {/* Credentials */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-dark mb-3 uppercase tracking-wide">Сертификации и членства</h4>
              <ul className="grid grid-cols-1 gap-2">
                {antipovCredentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-2 text-sm text-muted">
                    <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Recognition — Neodent Elite Practitioner Award */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 w-screen relative left-1/2 -ml-[50vw] px-4 sm:px-6 lg:px-8"
        >
          <div className="rounded-3xl bg-white border border-dark/10 shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-2 items-stretch">
              {/* Award plaque */}
              <div className="relative bg-white min-h-[320px] lg:min-h-[520px]">
                <Image
                  src="/images/about/neodent-award-plaque-v4.jpeg"
                  alt="2026 Neodent Elite Practitioner Award plaque engraved for Dr. Alexander Antipov"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Soft white fade into the card (bottom on mobile, right on desktop) */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white lg:hidden" />
                <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-r from-transparent to-white lg:block" />
              </div>

              {/* Text */}
              <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
                <span className="text-[#A0218E] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                  Признание в индустрии
                </span>
                <h3 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
                  <span className="text-dark">2026 Neodent</span>
                  <br />
                  <span className="text-[#7A2E6B]">Elite Practitioner</span>
                </h3>
                <div className="mt-6 h-px w-16 bg-[#A0218E]" />
                <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-md">
                  Премия от Neodent (бренд Straumann Group) — за то, что доктор Антипов лично установил больше имплантов Neodent, чем любой другой хирург в США.
                </p>

                {/* Neodent logo */}
                <div className="mt-8">
                  <Image
                    src="/images/about/neodent-logo.png"
                    alt="Neodent — A Straumann Group Brand"
                    width={414}
                    height={122}
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-20 border-t border-dark/10" />

        {/* Dr. Kahwach */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side (reversed order for visual variety) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-4xl sm:text-5xl font-bold text-dark tracking-tight leading-tight">
              Доктор Андре-Давид
              <br />
              <span className="gradient-text">Кахвач, DDS, MD</span>
            </h3>
            <p className="mt-6 text-muted text-lg leading-relaxed">
              Доктор Кахвач совмещает в работе <strong>хирургическую точность</strong>, <strong>художественное видение</strong> и международный опыт. Стоматологическую степень с отличием получил в <strong>UC San Francisco</strong>, затем прошёл резидентуру по челюстно-лицевой хирургии в <strong>Loma Linda University</strong>, где также получил медицинскую степень и углублённую подготовку по анестезиологии.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Работает по всему профилю челюстно-лицевой хирургии: <strong>эстетические процедуры</strong>, <strong>имплантация</strong>, <strong>лицевая травма</strong>, <strong>ортогнатическая хирургия</strong>. Подход сочетает аккуратность и художественный вкус — отчасти потому, что доктор серьёзно занимается живописью и скульптурой.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Помимо работы в клинике, доктор Кахвач много путешествовал по Европе, Африке, Карибскому бассейну и Ближнему Востоку, участвовал в медицинских и стоматологических миссиях. Пациенты отмечают его открытость и внимание — он умеет объяснить, успокоить и сделать так, чтобы человек чувствовал себя уверенно на каждом этапе лечения.
            </p>

            {/* Credentials */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-dark mb-3 uppercase tracking-wide">Образование и подготовка</h4>
              <ul className="grid grid-cols-1 gap-2">
                {kahwachCredentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-2 text-sm text-muted">
                    <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/dr-kahwach-v4.jpg"
                alt="Доктор Андре-Давид Кахвач, DDS, MD — челюстно-лицевой хирург, имплантация, лицевая травма, ортогнатика, эстетика"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 sm:left-6 glass rounded-2xl p-6 shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">Две степени</p>
                  <p className="text-muted text-xs">DDS &amp; MD — UCSF и Loma Linda</p>
                </div>
              </div>
              <p className="text-muted text-xs leading-relaxed">
                Челюстно-лицевой хирург полного профиля с углублённой подготовкой по анестезиологии. Имплантация, ортогнатика, лицевая травма, эстетика лица.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Practice info + stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <p className="text-muted leading-relaxed text-center max-w-3xl mx-auto">
            В клинике используем <strong>3D КТ (cone beam)</strong>, навигационные шаблоны и малоинвазивные техники — это даёт точные и предсказуемые результаты. Для тех, кто хочет натуральные материалы, есть варианты <strong>органической и холистической костной пластики</strong>. Каждый план мы собираем под конкретного человека: его анатомию, его цели и его сроки.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-muted text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <ConsultationModal>
              <button
                className="px-8 py-3.5 bg-primary text-white rounded-2xl font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
              >
                Book a Free Consultation
              </button>
            </ConsultationModal>
            <a
              href="/ru/our-team"
              className="px-8 py-3.5 border-2 border-dark/10 text-dark rounded-2xl font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              Meet Our Surgeons
            </a>
            <a
              href="#before-after"
              className="px-8 py-3.5 border-2 border-dark/10 text-dark rounded-2xl font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              View Before &amp; After Cases
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
