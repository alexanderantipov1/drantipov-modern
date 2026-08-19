"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import type { ReactNode } from "react"

export interface HeroStatItem {
  icon: ReactNode
  value: ReactNode
  label: string
}

interface HeroStatsProps {
  stats: HeroStatItem[]
}

/**
 * HeroStats - 4 floating stat cards that overlap the hero bottom edge.
 * Drops in immediately after a `<ExpertisePageHero>` block.
 */
export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="relative z-20 -mt-12 lg:-mt-16 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="rounded-2xl bg-white border border-neutral-200 shadow-xl shadow-navy/5 p-4 sm:p-5 text-center hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mb-2">
              {stat.icon}
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-neutral-600 mt-1">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Re-export AnimatedCounter so consumers can use it in stat values
export { AnimatedCounter }
