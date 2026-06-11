"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg"
          alt="Dr. Alexander Antipov — board-certified oral and maxillofacial surgeon performing same-day dental implants at his Roseville, CA practice"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Board-Certified Oral &amp; Maxillofacial Surgeon &mdash; Roseville, CA
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Same-Day
              <br />
              <span className="gradient-text">Dental Implants</span>
              <br />
              Jaw Surgery &amp;
              <br />
              Facial Cosmetics
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed"
            >
              Dr. Alexander Antipov delivers life-changing results with <strong className="text-white">All-on-4 and All-on-6 full arch dental implants</strong>, <strong className="text-white">orthognathic jaw surgery</strong>, <strong className="text-white">facial cosmetic surgery</strong>, and <strong className="text-white">organic bone grafting</strong> — backed by 25+ years of board-certified expertise.
            </motion.p>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-primary/60" />
              <span className="font-signature text-3xl text-primary tracking-wide">
                Dr. Antipov
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <ConsultationModal>
                <button
                  className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span className="relative z-10">Schedule Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </ConsultationModal>
              <a
                href="tel:9167832110"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Call (916) 783-2110
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-white/60 text-sm"
            >
              {[
                "10,000+ Smiles Restored",
                "Free CT Scan & Consultation",
                "Same-Day Teeth Available",
                "Flexible Financing from $99/mo",
                "Board-Certified Surgeon",
                "25+ Years Experience",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="leading-tight">{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dr. Antipov Portrait — mirrors Russian site layout, bg color matches site */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/*
                No rounded corners, no border, no shadow — photo's navy background
                (#0e3e5e via PIL bg-replacement) is identical to site navy, so the
                photo edges become invisible.
              */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-bl-[64px] rounded-br-[64px]">
                <Image
                  src="/images/drantipov-hero-navy-v3.jpg"
                  alt="Dr. Alexander V. Antipov, DDS — Board-Certified Oral & Maxillofacial Surgeon in Roseville, California"
                  fill
                  className="object-cover object-top"
                  quality={92}
                  sizes="(min-width: 1024px) 50vw, 0vw"
                  priority
                />
                {/* Bottom gradient with caption (mirrors RU style) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                  <span className="text-primary text-xs font-bold tracking-widest uppercase">
                    Diplomate · ABOMS
                  </span>
                  <h3 className="font-serif text-white text-xl font-bold mt-1">
                    Dr. Alexander V. Antipov, DDS
                  </h3>
                  <p className="text-white/70 text-sm mt-0.5">
                    Oral &amp; Maxillofacial Surgeon
                  </p>
                </div>
              </div>

              {/* Caption */}
              <p className="text-center text-white/40 text-xs mt-3">
                Personally performing every surgery since 2008
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
