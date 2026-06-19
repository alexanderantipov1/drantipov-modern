"use client"

import Image from "next/image"
import { Section, Container } from "@/components/sections"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Badge } from "@/components/ui/badge"

interface ExpertisePageHeroProps {
  title: string
  subtitle: string
  badge?: string
  image?: string
}

export function ExpertisePageHero({ title, subtitle, badge, image }: ExpertisePageHeroProps) {
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

          {image && (
            <motion.div
              variants={fadeInUp}
              className="relative mx-auto mt-4 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Section>
  )
}
