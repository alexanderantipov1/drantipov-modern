"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface PageHeroBreadcrumb {
  name: string;
  href?: string;
}

export interface PageHeroProps {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  overlay?: "dark" | "navy" | "gradient";
  breadcrumbs?: PageHeroBreadcrumb[];
  /** When true, renders a signature line under the subtitle (homepage-style). */
  signature?: boolean;
}

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  overlay = "navy",
  breadcrumbs,
  signature = false,
}: PageHeroProps) {
  const overlayClass =
    overlay === "dark"
      ? "bg-dark/70"
      : overlay === "gradient"
      ? "bg-gradient-to-r from-navy/80 via-navy/60 to-navy/40"
      : "bg-navy/80";

  return (
    <section className="relative min-h-[520px] sm:min-h-[600px] lg:min-h-[640px] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlayClass}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 text-sm text-bone/70"
          >
            <ol className="flex flex-wrap items-center gap-1.5">
              <li className="flex items-center">
                <Link
                  href="/"
                  className="flex items-center gap-1 hover:text-bone transition-colors"
                >
                  <Home className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Home</span>
                </Link>
              </li>
              {breadcrumbs.map((item, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <li key={item.name} className="flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5 text-bone/40" aria-hidden="true" />
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="hover:text-bone transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span
                        className="text-bone font-medium"
                        aria-current={isLast ? "page" : undefined}
                      >
                        {item.name}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            {eyebrow}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-bone leading-[1.1] tracking-tight">
            {title}
          </h1>
          <p className="mt-5 text-bone/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          {signature && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-primary/60" />
              <span className="font-signature text-3xl text-primary tracking-wide">
                Dr. Antipov
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
