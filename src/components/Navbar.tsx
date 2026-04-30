"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Before & After", href: "#before-after" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/images/logo-d10cd66c.svg"
              alt="Dr. Alexander Antipov, DDS — Oral and Maxillofacial Surgeon"
              width={220}
              height={72}
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 text-dark hover:text-primary hover:bg-primary/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/ru"
              className="ml-2 rounded-full border border-dark/15 px-3 py-1.5 text-xs font-semibold text-muted hover:border-primary/40 hover:text-dark transition-all"
              aria-label="Switch to Russian version"
            >
              RU
            </a>
            <ConsultationModal>
              <button
                className="ml-2 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 pulse-glow cursor-pointer"
              >
                Free Consultation
              </button>
            </ConsultationModal>
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
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
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
                  Free Consultation
                </button>
              </ConsultationModal>
              <a
                href="tel:9167832110"
                onClick={() => setMobileOpen(false)}
                className="mt-2 py-4 bg-dark text-white rounded-2xl text-center font-semibold text-lg"
              >
                Call (916) 783-2110
              </a>
              <a
                href="/ru"
                onClick={() => setMobileOpen(false)}
                className="mt-2 py-3 border-2 border-dark/15 text-dark rounded-2xl text-center font-medium text-base hover:border-primary hover:text-primary transition-colors"
              >
                🇷🇺 Русская версия
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
