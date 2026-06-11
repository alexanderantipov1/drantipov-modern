"use client"

import { motion } from "framer-motion"
import { Section, Container } from "@/components/sections"
import { fadeInUp } from "@/lib/animations"

interface CaseHeroProps {
  title: string
  description: string
  stats?: {
    label: string
    value: string
  }[]
}

export function CaseHero({ title, description, stats }: CaseHeroProps) {
  return (
    <Section background="gradient" padding="xl">
      <Container size="lg">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div {...fadeInUp} className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              {description}
            </p>
          </motion.div>

          {stats && stats.length > 0 && (
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-glass"
                >
                  <div className="text-3xl font-bold text-primary-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </Container>
    </Section>
  )
}
