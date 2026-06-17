"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface DoctorQuoteProps {
  quote: string
  author?: string
  role?: string
  variant?: "light" | "navy"
}

/**
 * DoctorQuote — large centered pull-quote with decorative quote icon.
 * Used to break up text-heavy sections with a personal note from the surgeon.
 */
export function DoctorQuote({
  quote,
  author = "Dr. Alexander Antipov",
  role = "Board-Certified Oral & Maxillofacial Surgeon",
  variant = "light",
}: DoctorQuoteProps) {
  const isDark = variant === "navy"
  return (
    <section
      className={`relative py-16 lg:py-20 overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-navy via-navy-dark to-navy text-white"
          : "bg-gradient-to-br from-bone/40 via-white to-primary/5"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <Quote className="absolute -top-8 -left-8 w-64 h-64" />
        <Quote className="absolute -bottom-8 -right-8 w-64 h-64 rotate-180" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <Quote
            className={`mx-auto h-10 w-10 ${
              isDark ? "text-primary-light" : "text-primary-600"
            }`}
            aria-hidden="true"
          />
          <blockquote
            className={`font-serif text-2xl sm:text-3xl lg:text-4xl leading-snug font-medium ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className={isDark ? "text-white/80" : "text-neutral-600"}>
            <p className="font-bold text-lg">{author}</p>
            {role && <p className="text-sm mt-1">{role}</p>}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
