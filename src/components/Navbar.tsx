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
  { label: "Results", href: "/results" },
  { label: "Before & After", href: "/surgical-cases" },
  { label: "For Patients", href: "/for-patients" },
  { label: "Doctor's Corner", href: "/for-dentists/doctors-corner" },
  { label: "Insurance", href: "/insurance" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Russian (/ru) routes render their own RuNavbar via the /ru layout.
  if (pathname === "/ru" || pathname?.startsWith("/ru/")) return null;

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
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3 group" aria-label="Dr. Antipov — Home">
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
            className="hidden lg:flex flex-1 items-center justify-between gap-2 mx-10"
            onMouseLeave={() => setMegaOpen(false)}
          >
            {/* About — first */}
            <a
              href="/about"
              className="px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 text-dark hover:text-primary hover:bg-primary/10"
            >
              About
            </a>

            {/* Services mega-menu trigger */}
            <div className="relative" onMouseEnter={() => setMegaOpen(true)}>
              <Link
                href="/expertise"
                className="flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 text-dark hover:text-primary hover:bg-primary/10"
              >
                Services
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
                          href={`/expertise/${e.slug}`}
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
                      <span className="text-muted">25+ years of experience · 10,000+ surgeries</span>
                      <Link
                        href="/expertise"
                        onClick={() => setMegaOpen(false)}
                        className="font-bold text-primary hover:text-primary-dark"
                      >
                        View all services →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining nav links */}
            {navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 text-dark hover:text-primary hover:bg-primary/10"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <ConsultationModal>
            <button
              className="hidden lg:block shrink-0 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 pulse-glow cursor-pointer"
            >
              Free Implant Consultation
            </button>
          </ConsultationModal>

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
              {navLinks.slice(1).map((link, i) => (
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
                  Free Implant Consultation
                </button>
              </ConsultationModal>
              <a
                href="tel:9167832110"
                onClick={() => setMobileOpen(false)}
                className="mt-2 py-4 bg-navy text-white rounded-2xl text-center font-semibold text-lg"
              >
                Call (916) 783-2110
              </a>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
