"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

const expertiseItems = [
  { slug: "full-arch-implants", title: "Full-Arch Implants", desc: "All-on-4, All-on-6, Zygomatic" },
  { slug: "single-tooth", title: "Single Tooth Implants", desc: "Replace one missing tooth" },
  { slug: "jaw-surgery", title: "Corrective Jaw Surgery", desc: "Orthognathic surgery" },
  { slug: "sleep-apnea", title: "Sleep Apnea Surgery", desc: "Maxillomandibular advancement" },
  { slug: "bone-grafting", title: "Bone Grafting", desc: "Sinus lift, augmentation" },
  { slug: "mole-removal", title: "Scarless Mole Removal", desc: "Radio-wave surgery" },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/our-team" },
  { label: "Results", href: "/results" },
  { label: "Before & After", href: "/surgical-cases" },
  { label: "For Patients", href: "/for-patients" },
  { label: "Insurance", href: "/insurance" },
  { label: "FAQ", href: "/for-patients/faqs" },
  { label: "Contact", href: "/contact" },
];

const navLinksRu = [
  { label: "О нас", href: "/ru" },
  { label: "Команда", href: "/ru/our-team" },
  { label: "Результаты", href: "/ru/results" },
  { label: "До и после", href: "/ru/surgical-cases" },
  { label: "Пациентам", href: "/ru/for-patients" },
  { label: "Страховки", href: "/ru/insurance" },
  { label: "FAQ", href: "/ru/for-patients/faqs" },
  { label: "Контакты", href: "/ru/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  const isRu = pathname?.startsWith("/ru") ?? false;

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" || pathname === "/ru") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Language-aware nav links
  const currentNavLinks = isRu ? navLinksRu : navLinks;

  return (
    <>
      <motion.nav
        aria-label="Main navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${
          scrolled
            ? "shadow-lg shadow-black/5 py-3"
            : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href={isRu ? "/ru" : "/"} onClick={handleLogoClick} className="flex items-center gap-3 group" aria-label={isRu ? "Доктор Антипов — Главная" : "Dr. Antipov — Home"}>
            <Image
              src="/images/logo-d10cd66c.svg"
              alt="Dr. Alexander Antipov, DDS — Oral and Maxillofacial Surgeon"
              width={220}
              height={72}
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
          </Link>

          {/* Desktop Nav */}
          <div
            className="hidden lg:flex items-center gap-1"
            onMouseLeave={() => setMegaOpen(false)}
          >
            {/* About / О нас — first */}
            <a
              href={currentNavLinks[0]?.href ?? "/about"}
              className="px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 text-dark hover:text-primary hover:bg-primary/10"
            >
              {currentNavLinks[0]?.label ?? "About"}
            </a>

            {/* Services mega-menu trigger */}
            <div className="relative" onMouseEnter={() => setMegaOpen(true)}>
              <Link
                href={isRu ? "/ru/expertise" : "/expertise"}
                className="flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 text-dark hover:text-primary hover:bg-primary/10"
              >
                {isRu ? "Услуги" : "Services"}
                <svg
                  className={`h-3 w-3 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full -translate-x-1/2 mt-3 w-[640px] rounded-3xl border border-dark/10 bg-white p-6 shadow-2xl"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {expertiseItems.map((e) => (
                        <Link
                          key={e.slug}
                          href={isRu ? `/ru/expertise/${e.slug}` : `/expertise/${e.slug}`}
                          onClick={() => setMegaOpen(false)}
                          className="group flex items-start gap-3 rounded-2xl p-3 transition hover:bg-light"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-bold text-sm text-dark group-hover:text-primary transition">
                              {e.title}
                            </h4>
                            <p className="text-xs text-muted mt-0.5">{e.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-dark/5 pt-4 flex justify-between items-center text-xs">
                      <span className="text-muted">{isRu ? "25+ лет опыта · 10 000+ операций" : "25+ years of experience · 10,000+ surgeries"}</span>
                      <Link
                        href={isRu ? "/ru/expertise" : "/expertise"}
                        onClick={() => setMegaOpen(false)}
                        className="font-bold text-primary hover:text-primary-dark"
                      >
                        {isRu ? "Все услуги →" : "View all services →"}
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining nav links */}
            {currentNavLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 text-dark hover:text-primary hover:bg-primary/10"
              >
                {link.label}
              </a>
            ))}
            <ConsultationModal>
              <button
                className="ml-2 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 pulse-glow cursor-pointer"
              >
                {isRu ? "Бесплатная консультация" : "Free Consultation"}
              </button>
            </ConsultationModal>
            {/* Language switcher EN ⇄ RU */}
            <a
              href={isRu ? "/" : "/ru"}
              aria-label={isRu ? "Switch to English" : "Переключиться на русский"}
              className="ml-2 px-3 py-2 rounded-full text-sm font-bold tracking-wide border border-dark/15 text-dark hover:bg-dark hover:text-white transition-colors duration-300"
            >
              {isRu ? "EN" : "RU"}
            </a>
            
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`w-6 h-0.5 rounded-full transition-all duration-300 bg-dark ${
                mobileOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 rounded-full transition-all duration-300 bg-dark ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 rounded-full transition-all duration-300 bg-dark ${
                mobileOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {/* About */}
              <motion.a
                href="/about"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.02 }}
                className="text-lg font-medium text-dark py-3 px-4 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors"
              >
                About
              </motion.a>
              {/* Services */}
              <motion.a
                href="/expertise"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                className="text-lg font-medium text-dark py-3 px-4 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Services
              </motion.a>
              {currentNavLinks.slice(1).map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                  className="text-lg font-medium text-dark py-3 px-4 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <ConsultationModal>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 py-4 bg-primary text-white rounded-2xl text-center font-semibold text-lg cursor-pointer"
                >
                  {isRu ? "Бесплатная консультация" : "Free Consultation"}
                </button>
              </ConsultationModal>
              {/* Language switcher EN ⇄ RU on mobile */}
              <a
                href={isRu ? "/" : "/ru"}
                onClick={() => setMobileOpen(false)}
                aria-label={isRu ? "Switch to English" : "Переключиться на русский"}
                className="mt-2 py-4 border border-dark/15 text-dark rounded-2xl text-center font-bold text-lg tracking-wide hover:bg-dark hover:text-white transition-colors"
              >
                {isRu ? "Switch to English (EN)" : "Переключить на русский (RU)"}
              </a>
              <a
                href="tel:9167832110"
                onClick={() => setMobileOpen(false)}
                className="mt-2 py-4 bg-navy text-white rounded-2xl text-center font-semibold text-lg"
              >
                {isRu ? "Позвонить: (916) 783-2110" : "Call (916) 783-2110"}
              </a>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
