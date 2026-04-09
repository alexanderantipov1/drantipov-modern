"use client"

import { Section, Container } from "@/components/sections"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Badge } from "@/components/ui/badge"

export function ReferralHero() {
  return (
    <Section background="gradient" padding="xl" className="pt-32">
      <Container size="lg">
        <motion.div
          className="text-center space-y-6 max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <Badge className="text-base px-4 py-2 bg-accent-100 text-accent-700 hover:bg-accent-200">
              For Dental Professionals
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900"
            variants={fadeInUp}
          >
            Your Trusted Surgical Partner
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-neutral-600"
            variants={fadeInUp}
          >
            Comprehensive oral surgery referrals with seamless communication and exceptional patient care
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  )
}
