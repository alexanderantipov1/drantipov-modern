"use client"

import { Section, Container } from "@/components/sections"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Badge } from "@/components/ui/badge"

interface ExpertisePageHeroProps {
  title: string
  subtitle: string
  badge?: string
}

export function ExpertisePageHero({ title, subtitle, badge }: ExpertisePageHeroProps) {
  return (
    <Section background="gradient" padding="xl" className="pt-32">
      <Container size="lg">
        <motion.div
          className="text-center space-y-6 max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {badge && (
            <motion.div variants={fadeInUp} className="flex justify-center">
              <Badge className="text-base px-4 py-2 bg-primary-100 text-primary-700 hover:bg-primary-200">
                {badge}
              </Badge>
            </motion.div>
          )}

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900"
            variants={fadeInUp}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-neutral-600"
            variants={fadeInUp}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  )
}
