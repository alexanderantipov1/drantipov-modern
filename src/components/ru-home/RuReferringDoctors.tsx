"use client";

import { motion } from "framer-motion";

const referralBenefits = [
  {
    title: "Удобный процесс направления",
    description: "Направления принимаем онлайн, по факсу или по телефону. В течение 24 часов подтверждаем получение и быстро ставим пациента в график.",
  },
  {
    title: "Подробные отчёты и связь",
    description: "По каждому пациенту вы получаете полные послеоперационные отчёты, резюме лечения и снимки — всё, что нужно для дальнейшей работы.",
  },
  {
    title: "Совместное планирование",
    description: "Доктор Антипов в плотном контакте с направляющими стоматологами и ортодонтами — особенно в сложных случаях: имплантация, челюстная хирургия, ортопедическое планирование.",
  },
  {
    title: "Пациент возвращается к вам",
    description: "Как только хирургическая часть закончена — пациент возвращается в вашу клинику на ортопедию, последующее наблюдение и плановые визиты.",
  },
];

export default function RuReferringDoctors() {
  return (
    <section id="referring-doctors" lang="ru" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Для коллег-стоматологов
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight leading-tight">
              Направить пациента к
              <br />
              <span className="gradient-text">доктору Антипову</span>
            </h2>
            <p className="mt-6 text-muted text-lg leading-relaxed">
              Более 100 стоматологов и ортодонтов Северной Калифорнии доверяют доктору Антипову сложные хирургические случаи — от полной реконструкции All-on-4 и скуловых имплантов до ортогнатики и костной пластики. Процесс направления простой, и мы всегда держим вас в курсе.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              All-on-4, синус-лифтинг, удаление зубов мудрости, лечение ВНЧС, корректирующая хирургия челюстей — мы берём на себя хирургию, а ортопедия и наблюдение остаются у вас. Скачайте форму направления или позвоните, чтобы обсудить конкретный случай.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/documents/referral.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary-dark transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                Download Referral Form
              </a>
              <a
                href="tel:9167832110"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-dark/10 text-dark rounded-2xl font-semibold hover:border-primary hover:text-primary transition-all duration-300"
              >
                Call to Discuss a Case
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {referralBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-dark/5 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">{benefit.title}</h3>
                    <p className="text-muted text-sm mt-1 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
