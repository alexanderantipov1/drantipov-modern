"use client"

import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Award, GraduationCap, Users } from "lucide-react"
import { ConsultationModal } from "@/components/forms/ConsultationModal"

export function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="none" className="pt-32 overflow-hidden">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Text Content */}
            <motion.div
              className="space-y-6 flex flex-col justify-center pb-12"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-5xl lg:text-6xl font-serif font-bold text-neutral-900"
                variants={fadeInUp}
              >
                Dr. Alexander Antipov
              </motion.h1>
              <motion.p
                className="text-xl lg:text-2xl text-neutral-600"
                variants={fadeInUp}
              >
                Northern California's Trusted Oral Surgery Innovator
              </motion.p>
              <motion.p
                className="text-lg text-neutral-500"
                variants={fadeInUp}
              >
                Board-certified oral surgeon specializing in dental implants, full-arch restoration, and corrective jaw surgery
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                variants={fadeInUp}
              >
                <ConsultationModal>
                  <Button size="lg">Schedule Consultation</Button>
                </ConsultationModal>
                <Button asChild variant="outline" size="lg">
                  <Link href="/expertise">View Services</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="relative h-[600px] lg:h-[700px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Signature Overlay with Writing Animation */}
              <motion.div
                className="absolute bottom-2 right-4 lg:bottom-4 lg:right-8 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <motion.span
                  className="text-4xl lg:text-6xl font-signature text-primary-700 drop-shadow-lg inline-block"
                  style={{ transform: 'rotate(-5deg)' }}
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ clipPath: 'inset(0 0% 0 0)' }}
                  transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  Dr. Antipov
                </motion.span>
              </motion.div>

              <Image
                src="/images/drantipov.png"
                alt="Dr. Alexander Antipov - Board-certified Oral and Maxillofacial Surgeon"
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Trust Indicators */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <GlassCard variant="hover" className="text-center">
                <div className="flex justify-center mb-4">
                  <Award className="w-12 h-12 text-primary-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Board Certified
                </h3>
                <p className="text-neutral-600">
                  Diplomate of the American Board of Oral & Maxillofacial Surgery
                </p>
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlassCard variant="hover" className="text-center">
                <div className="flex justify-center mb-4">
                  <GraduationCap className="w-12 h-12 text-primary-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Advanced Training
                </h3>
                <p className="text-neutral-600">
                  Fellowship-trained in complex implant reconstruction
                </p>
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlassCard variant="hover" className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-primary-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Trusted by Dentists
                </h3>
                <p className="text-neutral-600">
                  Preferred referral partner across Northern California
                </p>
              </GlassCard>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
