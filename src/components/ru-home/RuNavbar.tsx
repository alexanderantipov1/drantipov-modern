"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { officePhone, officePhoneHref, officeEmail, officeAddress } from "@/data/russianImplantFunnel";
import LanguageToggle from "@/components/LanguageToggle";

const expertiseItems = [
  { slug: "full-arch-implants", title: "Имплантация полной дуги", desc: "All-on-4, All-on-6, zygomatic" },
  { slug: "single-tooth", title: "Одиночные импланты", desc: "Замена одного зуба" },
  { slug: "jaw-surgery", title: "Корригирующая хирургия", desc: "Ортогнатическая хирургия" },
  { slug: "sleep-apnea", title: "Хирургия апноэ сна", desc: "Maxillomandibular advancement" },
  { slug: "bone-grafting", title: "Костная пластика", desc: "Sinus lift, augmentation" },
  { slug: "mole-removal", title: "Удаление родинок", desc: "Бесшрамная техника" },
];

const navLinks = [
  { href: "/ru/our-team", label: "Команда" },
  { href: "/ru/results", label: "Результаты" },
  { href: "/ru/surgical-cases", label: "До и после" },
  { href: "/ru/for-patients", label: "Пациентам" },
    { href: "/ru/insurance", label: "Страховка" },
  { href: "/ru/for-patients/faqs", label: "FAQ" },
  { href: "/ru/contact", label: "Контакты" },
];

export default function RuNavbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (pathname === "/ru") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-dark/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/ru" className="flex items-center gap-3" onClick={handleLogoClick}>
          <Image
            src="/images/logo-d10cd66c.svg"
            alt="Доктор Александр Антипов, DDS"
            width={180}
            height={60}
            className="h-10 w-auto"
            />
        </Link>

        <nav
          className="hidden items-center gap-5 text-sm font-semibold text-muted lg:flex"
          onMouseLeave={() => setMegaOpen(false)}
        >
          {/* About Us — placed left of the Услуги mega-menu */}
          <Link href="/ru/about" className="transition hover:text-primary">
            О нас
          </Link>

          {/* Услуги mega-menu trigger */}
          <div className="relative" onMouseEnter={() => setMegaOpen(true)}>
            <Link href="/ru/expertise" className="flex items-center gap-1 transition hover:text-primary">
              Услуги
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
                        href={`/ru/expertise/${e.slug}`}
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
                          <h4 className="text-sm font-bold text-dark group-hover:text-primary transition">
                            {e.title}
                          </h4>
                          <p className="text-xs text-muted mt-0.5">{e.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-dark/5 pt-4 flex justify-between items-center text-xs">
                    <span className="text-muted">25+ лет опыта · 10 000+ операций</span>
                    <Link
                      href="/ru/expertise"
                      onClick={() => setMegaOpen(false)}
                      className="font-bold text-primary hover:text-primary-dark"
                    >
                      Все услуги →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-primary">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle className="shrink-0" />
          <a
            href={officePhoneHref}
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-dark sm:inline-flex sm:px-5"
          >
            {officePhone}
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Открыть меню"
            className="rounded-full border border-dark/15 p-2.5 text-dark transition hover:bg-light lg:hidden"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-dark/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 z-[70] flex h-full w-[85vw] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-dark/10 px-6 py-4">
                <Link href="/ru" onClick={handleLogoClick}>
                  <Image src="/images/logo-d10cd66c.svg" alt="Доктор Антипов" width={140} height={48} className="h-9 w-auto" />
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Закрыть меню"
                  className="rounded-full p-2 text-muted hover:bg-light hover:text-dark"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-1">
                  <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.03 }}>
                    <Link
                      href="/ru/about"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-bold text-dark transition hover:bg-light hover:text-primary"
                    >
                      О нас
                    </Link>
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 }}>
                    <Link
                      href="/ru/expertise"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-bold text-dark transition hover:bg-light hover:text-primary"
                    >
                      Услуги
                    </Link>
                  </motion.li>
                  {navLinks.map((l, i) => (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.09 + i * 0.04 }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-3 text-base font-bold text-dark transition hover:bg-light hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-dark/10 pt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted mb-3">Контакты</p>
                  <div className="space-y-2 text-sm text-muted leading-7">
                    <p>{officeAddress}</p>
                    <p>
                      <a href={officePhoneHref} className="font-bold text-primary">
                        {officePhone}
                      </a>
                    </p>
                    <p>
                      <a href={`mailto:${officeEmail}`} className="text-primary">
                        {officeEmail}
                      </a>
                    </p>
                  </div>
                </div>
              </nav>

              <div className="border-t border-dark/10 p-6 space-y-3">
                <a
                  href={officePhoneHref}
                  className="block w-full rounded-2xl bg-primary px-5 py-3 text-center text-base font-bold text-white transition hover:bg-primary-dark"
                >
                  Позвонить {officePhone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
