"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

export default function RuCTA() {
  return (
    <section lang="ru" className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/landing-pages/dental-implants/art/image-background04-713ddc8f.jpg"
          alt="Бесплатная консультация по имплантации у доктора Антипова — Roseville, CA"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Запишитесь на бесплатную консультацию
          </h2>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            Лично познакомитесь с доктором Антиповым и обсудите варианты лечения. На приёме делаем 3D КТ и собираем персональный план — без обязательств и без давления.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <ConsultationModal>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base bg-white text-primary shadow-2xl hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Записаться на консультацию
              </button>
            </ConsultationModal>
            <a
              href="tel:9167832110"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base bg-white/15 border border-white/30 text-white hover:bg-white/25 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (916) 783-2110
            </a>
          </div>

          <p className="mt-8 text-white/60 text-sm">
            Бесплатное 3D КТ &bull; без обязательств &bull; гибкая рассрочка &bull; Roseville, CA
          </p>
        </motion.div>
      </div>
    </section>
  );
}
