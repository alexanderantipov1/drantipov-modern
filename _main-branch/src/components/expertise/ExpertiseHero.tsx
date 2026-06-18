"use client"

import { Section, Container } from "@/components/sections"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function ExpertiseHero() {
  return (
    <Section background="gradient" padding="xl" className="pt-32">
      <Container size="lg">
        <motion.div
          className="text-center space-y-6 max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl lg:text-6xl font-serif font-bold text-neutral-900"
            variants={fadeInUp}
          >
            Specialized Oral Surgery Expertise
          </motion.h1>
          <motion.p
            className="text-xl lg:text-2xl text-neutral-600"
            variants={fadeInUp}
          >
            Advanced surgical solutions combining precision techniques with compassionate care
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  )
}
