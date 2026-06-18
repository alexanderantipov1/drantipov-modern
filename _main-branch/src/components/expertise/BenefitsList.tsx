"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

interface BenefitsListProps {
  benefits: string[]
}

export function BenefitsList({ benefits }: BenefitsListProps) {
  return (
    <motion.ul
      className="space-y-4"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {benefits.map((benefit, index) => (
        <motion.li
          key={index}
          className="flex items-start gap-3"
          variants={fadeInUp}
        >
          <div className="mt-1 flex-shrink-0">
            <div className="p-1 rounded-full bg-primary-100">
              <Check className="h-4 w-4 text-primary-600" />
            </div>
          </div>
          <span className="text-neutral-700 leading-relaxed">{benefit}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}
