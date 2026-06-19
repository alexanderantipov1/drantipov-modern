"use client"

import { Section, Container } from "@/components/sections"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight } from "@/lib/animations"

export function AboutSection() {
  const credentials = [
    "Board Certified by the American Board of Oral & Maxillofacial Surgery",
    "Fellowship-trained in Complex Implant Reconstruction",
    "15+ years of surgical excellence",
    "Preferred referral partner for 100+ Northern California dentists",
  ]

  return (
    <Section background="default" padding="xl" id="about">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                Meet Dr. Alexander Antipov
              </h2>
              <p className="text-xl text-neutral-600">
                Northern California's Premier Oral & Maxillofacial Surgeon
              </p>
            </div>

            <p className="text-lg text-neutral-700 leading-relaxed">
              With over 15 years of experience and advanced fellowship training in complex implant reconstruction,
              Dr. Antipov combines surgical precision with compassionate care to deliver exceptional outcomes.
            </p>

            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-700">{credential}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Button asChild size="lg">
                <Link href="/about">Learn More About Dr. Antipov</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl" style={{ borderRadius: '50px' }}>
              <Image
                src="/images/dr-antipov-work.png"
                alt="Dr. Alexander Antipov performing dental implant surgery"
                fill
                className="object-cover"
                style={{ borderRadius: '50px' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
