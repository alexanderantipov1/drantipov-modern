"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ConsultationModal } from "@/components/forms/ConsultationModal";
import { getVideoSchema, structuredDataScript } from "@/lib/structured-data";
import { siteConfig } from "@/constants/siteConfig";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* VideoObject schema for hero.mp4 — eligible for video rich snippet in Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(
          getVideoSchema({
            name: "Full-Arch Dental Implant Surgery — Workflow with Dr. Alexander Antipov, DDS",
            description: "Same-day All-on-4 / All-on-6 dental implant surgical workflow including digital planning, 3D scanning, and immediate-load placement performed by Dr. Antipov in Roseville, CA.",
            thumbnailUrl: `${siteConfig.url}/videos/hero-poster.jpg`,
            uploadDate: "2026-06-14",
            duration: "PT25S",
            contentUrl: `${siteConfig.url}/videos/hero.mp4`,
          })
        )}
      />
      {/* Background: looping video (desktop) + poster image (mobile) + navy overlay */}
      <div className="absolute inset-0">
        {/* Desktop: full-arch surgical workflow video, muted + looped */}
        <video
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/videos/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Mobile: doctor portrait (face above the fold, higher trust signal) */}
        <Image
          src="/images/doctor-hand3-mobile.jpg"
          alt="Dr. Alexander Antipov, DDS — Board-Certified Oral & Maxillofacial Surgeon in Roseville, California"
          fill
          className="object-cover object-top lg:hidden"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Semi-transparent navy overlay (65%) for text contrast */}
        <div className="absolute inset-0 bg-navy/65" />
        {/* Bottom gradient (preserved from original) */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Subtle fade to white at very bottom — softens edge between video and white About */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/30 pointer-events-none z-[5]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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
            className="hidden lg:block lg:absolute lg:right-0 lg:bottom-0 lg:w-[660px] lg:translate-y-[5%] lg:z-10"
          >
            <div className="relative">
              {/*
                Cutout portrait (transparent background) — doctor stands free
                directly over the looping background video. drop-shadow grounds
                him visually without a card frame.
              */}
              <Image
                src="/images/doctor-hand3-cutout.png"
                alt="Dr. Alexander Antipov, DDS — Board-Certified Oral & Maxillofacial Surgeon in Roseville, California"
                width={854}
                height={1239}
                quality={92}
                sizes="(min-width: 1024px) 50vw, 0vw"
                className="w-full h-auto drop-shadow-2xl"
              />

              {/* Credential caption — overlay at bottom of photo, photo position unchanged */}
              <div className="absolute bottom-0 left-0 right-0 pt-20 pb-6 px-6 text-center bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <a
                  href="https://www.aboms.org"
                  target="_blank"
                  rel="noopener nofollow"
                  className="text-primary text-xs font-bold tracking-widest uppercase hover:text-primary-light transition-colors"
                >
                  Diplomate · ABOMS
                </a>
                <h3 className="font-serif text-white text-xl font-bold mt-1">
                  Dr. Alexander Antipov, DDS
                </h3>
                <p className="text-white/70 text-sm mt-0.5">
                  Oral &amp; Maxillofacial Surgeon
                </p>
                <p className="text-white/70 text-sm mt-3">
                  Personally performing every surgery since 2008
                </p>
              </div>
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
