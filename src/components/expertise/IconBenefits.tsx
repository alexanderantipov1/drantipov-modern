"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import type { ReactNode } from "react"

export interface IconBenefitItem {
  icon?: ReactNode
  title: string
  description?: string
}

interface IconBenefitsProps {
  items: IconBenefitItem[]
  columns?: 1 | 2
}

/**
 * IconBenefits - 2-column grid of benefits with icon chips.
 * Replaces plain bullet lists for visual interest and scan-ability.
 */
export function IconBenefits({ items, columns = 2 }: IconBenefitsProps) {
  return (
    <div className={`grid gap-4 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          className="flex items-start gap-4 rounded-2xl border border-neutral-200/70 bg-white p-5 hover:border-primary/30 hover:shadow-md transition-all"
        >
          <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary-600 ring-1 ring-primary/20">
            {item.icon ?? <Check className="h-5 w-5" />}
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-neutral-900 leading-snug">{item.title}</p>
            {item.description && (
              <p className="text-sm text-neutral-600 leading-relaxed mt-1">{item.description}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
