"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxHeroProps {
  image: string;
  alt: string;
  children: ReactNode;
  /** Section className (background colour, padding, layout). Defaults to dark surface. */
  className?: string;
  /** Optional gradient overlay class. Defaults to standard left-to-right dark fade. */
  overlayClassName?: string;
  /** Image opacity (0–1). Defaults to 0.3. */
  imageOpacity?: number;
  /** Parallax intensity in px. Higher = stronger effect. Defaults to 100. */
  intensity?: number;
}

export default function ParallaxHero({
  image,
  alt,
  children,
  className = "relative bg-dark text-white overflow-hidden",
  overlayClassName = "absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55",
  imageOpacity = 0.3,
  intensity = 100,
}: ParallaxHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, intensity]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className={className}>
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          style={{ opacity: imageOpacity }}
          priority
          sizes="100vw"
        />
        <div className={overlayClassName} />
      </motion.div>
      <div className="relative">{children}</div>
    </section>
  );
}
