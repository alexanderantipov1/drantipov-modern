"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RuConsultationModal } from "@/components/ru-home/RuConsultationModal";
import CalculatorEmbed, { type CalcSlug } from "@/components/CalculatorEmbed";

export interface RuExpertiseData {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  variant: string;
  benefits: string[];
  conditions?: { title: string; description: string }[];
  processSteps?: { step: number; title: string; duration: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export default function RuExpertiseTemplate({
  data,
  calculatorSlug,
}: {
  data: RuExpertiseData;
  /** Встраивает калькулятор стоимости этого лечения перед финальным CTA. */
  calculatorSlug?: CalcSlug;
}) {
  return (
    <article className="bg-white text-dark" lang="ru">
      {/* Hero */}
      <header className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src={data.heroImage} alt={data.title} fill className="object-cover opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <nav aria-label="Навигация" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/ru" className="hover:text-primary-light">Главная</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/ru/expertise" className="hover:text-primary-light">Услуги</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">{data.title}</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">{data.category}</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">{data.title}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">{data.subtitle}</p>
        </div>
      </header>

      {/* Intro + benefits */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-muted">{data.intro}</p>

          {data.benefits?.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Преимущества</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {data.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 p-4 bg-light rounded-2xl">
                    <span className="text-primary mt-0.5 shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Conditions */}
      {data.conditions && data.conditions.length > 0 && (
        <section className="py-20 bg-light">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Когда это нужно</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {data.conditions.map((c) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-sm"
                >
                  <h3 className="font-bold text-lg mb-2">{c.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{c.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {data.processSteps && data.processSteps.length > 0 && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Как мы работаем</h2>
            <ol className="space-y-6">
              {data.processSteps.map((s) => (
                <motion.li
                  key={s.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-light rounded-2xl p-6 border-l-4 border-primary"
                >
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-bold text-lg">{s.step}. {s.title}</h3>
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider shrink-0">{s.duration}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{s.description}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faqs?.length > 0 && (
        <section className="py-20 bg-light">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Частые вопросы</h2>
            <div className="space-y-3">
              {data.faqs.map((f, idx) => (
                <details key={f.question} open={idx === 0} className="group bg-white rounded-2xl p-6 shadow-sm">
                  <summary className="font-semibold cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-start justify-between gap-4">
                    <span>{f.question}</span>
                    <svg className="w-5 h-5 text-muted shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-sm text-muted leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {calculatorSlug && <CalculatorEmbed slug={calculatorSlug} locale="ru" />}

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы обсудить ваш случай?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Запишитесь на бесплатную консультацию с 3D КТ. На приёме подробно разберём вашу ситуацию и составим персональный план.
          </p>
          <RuConsultationModal>
            <button className="px-8 py-4 bg-white text-primary rounded-2xl font-bold text-lg hover:bg-white/90 transition-all">
              Бесплатная консультация
            </button>
          </RuConsultationModal>
        </div>
      </section>
    </article>
  );
}
