"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface PageHeroProps {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  overlay?: "dark" | "navy" | "gradient";
}

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  overlay = "navy",
}: PageHeroProps) {
  const overlayClass =
    overlay === "dark"
      ? "bg-dark/70"
      : overlay === "gradient"
      ? "bg-gradient-to-r from-navy/80 via-navy/60 to-navy/40"
      : "bg-navy/80";

  return (
    <section className="relative h-[420px] sm:h-[480px] flex items-center overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            {eyebrow}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-bone leading-tight tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-bone/70 text-lg sm:text-xl max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
