"use client"

import { Container } from "@/components/sections"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ExpertisePageHeroProps {
  title: string
  subtitle: string
  badge?: string
  image?: string
}

export function ExpertisePageHero({ title, subtitle, badge, image }: ExpertisePageHeroProps) {
  // If an image is provided, render the dark hero variant with photo background.
  if (image) {
    return (
      <section className="relative overflow-hidden pt-32 pb-20 lg:pb-28 text-white">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-navy/70" />
        </div>

        <Container size="lg">
          <motion.div
            className="relative z-10 text-center space-y-6 max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {badge && (
              <motion.div variants={fadeInUp} className="flex justify-center">
                <Badge className="text-base px-4 py-2 bg-white/15 text-white border border-white/30 backdrop-blur-sm hover:bg-white/25">
                  {badge}
                </Badge>
              </motion.div>
            )}

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold drop-shadow"
              variants={fadeInUp}
            >
              {title}
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-white/90"
              variants={fadeInUp}
            >
              {subtitle}
            </motion.p>
          </motion.div>
        </Container>
      </section>
    )
  }

  // Fallback: original gradient hero (no image).
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-32 pb-20 lg:pb-28">
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
    </section>
  )
}
