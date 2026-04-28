"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

const implantSequence = [
  {
    src: "/images/hero/01-extraction-socket.jpeg",
    alt: "Jawbone cross-section showing empty extraction socket before dental implant — Dr. Antipov oral surgery Roseville CA",
    label: "Extraction Socket",
    step: "Step 1",
  },
  {
    src: "/images/hero/02-blood-clot.png",
    alt: "Blood clot formation in tooth socket — natural healing process before bone graft and dental implant placement",
    label: "Natural Healing",
    step: "Step 2",
  },
  {
    src: "/images/hero/03-bone-graft-placed.jpeg",
    alt: "Organic bone graft material placed in extraction socket — bone augmentation for dental implant by Dr. Antipov",
    label: "Bone Graft Placed",
    step: "Step 3",
  },
  {
    src: "/images/hero/04-bone-graft-healing.png",
    alt: "Bone graft healing and integrating with natural jawbone — regenerative bone grafting for implant support",
    label: "Graft Integration",
    step: "Step 4",
  },
  {
    src: "/images/hero/05-healed-bone.jpeg",
    alt: "Fully healed jawbone after bone grafting — strong foundation ready for titanium dental implant placement",
    label: "Healed Bone",
    step: "Step 5",
  },
  {
    src: "/images/hero/06-implant-placed.jpeg",
    alt: "Titanium dental implant surgically placed in jawbone — same-day dental implant surgery by Dr. Antipov Roseville",
    label: "Implant Placed",
    step: "Step 6",
  },
  {
    src: "/images/hero/07-osseointegration.jpeg",
    alt: "Osseointegration process — bone growing around and fusing with titanium dental implant for permanent stability",
    label: "Osseointegration",
    step: "Step 7",
  },
  {
    src: "/images/hero/08-implant-integrated.jpeg",
    alt: "Fully osseointegrated dental implant with bone and blood vessel growth — permanent implant foundation",
    label: "Fully Integrated",
    step: "Step 8",
  },
  {
    src: "/images/hero/09-final-crown.jpeg",
    alt: "Final zirconia crown placed on integrated dental implant — completed same-day teeth restoration by Dr. Antipov",
    label: "Final Crown",
    step: "Complete",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % implantSequence.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

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
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/75 to-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
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
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
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

          {/* Right: Implant Sequence Slideshow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
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
                      alt={implantSequence[currentSlide]?.alt ?? ""}
                      fill
                      className="object-cover"
                      quality={85}
                      sizes="(min-width: 1024px) 50vw, 0vw"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Step label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-primary text-xs font-bold tracking-widest uppercase">
                        {implantSequence[currentSlide]?.step}
                      </span>
                      <h3 className="text-white text-xl font-bold mt-1">
                        {implantSequence[currentSlide]?.label}
                      </h3>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Auto-play indicator */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white transition-colors"
                    aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isAutoPlaying ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex items-center justify-center gap-1.5 mt-4">
                {implantSequence.map((slide, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    aria-label={`Go to ${slide.label}`}
                    className="group relative"
                  >
                    <div
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === currentSlide
                          ? "w-8 bg-primary"
                          : i < currentSlide
                          ? "w-3 bg-primary/50"
                          : "w-3 bg-white/30"
                      }`}
                    />
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-2 py-0.5 rounded">
                      {slide.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Caption */}
              <p className="text-center text-white/40 text-xs mt-3">
                The Dental Implant Journey — from extraction to your new permanent smile
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
