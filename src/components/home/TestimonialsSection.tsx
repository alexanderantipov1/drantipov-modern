"use client"

import { Section, Container, GlassCard } from "@/components/sections"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Star, Quote } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Val M.",
    location: "Honolulu, HI",
    text: "I love the knowledge of the doctors and the staff. That made me feel confident of the surgery on my teeth.",
    rating: 5,
  },
  {
    name: "Vadim S.",
    location: "Citrus Heights, CA",
    text: "I was transferred here from my dentist saying this is the best oral surgeon in town... I had four teeth removed, two wisdom teeth, and 2 that were growing sideways.",
    rating: 5,
  },
  {
    name: "Chieko T.",
    location: "Yuba City, CA",
    text: "My 20 year old son had severe underbite... needed upper and lower jaw surgery which was very involved procedure. The results were amazing!",
    rating: 5,
  },
  {
    name: "Evelina C.",
    location: "Citrus Heights, CA",
    text: "I got all 4 of my impacted wisdom teeth pulled out in one day... The surgery took about 45 minutes. Dr. Antipov was professional and caring.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <Section background="primary" padding="xl">
      <Container size="lg">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4"
            variants={fadeInUp}
          >
            What Our Patients Say
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Real experiences from patients who trust Dr. Antipov for their oral surgery needs
          </motion.p>
        </motion.div>

        {/* Google Reviews Summary */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://share.google/fAwpKyJklmWayay6O"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
          >
            {/* Google Logo */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                Google Reviews
              </div>
              <div className="text-sm text-neutral-600">See what patients are saying</div>
            </div>
          </a>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <GlassCard variant="hover" className="h-full">
                <div className="flex flex-col h-full">
                  <Quote className="w-10 h-10 text-primary-300 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-neutral-700 mb-6 flex-grow leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Patient Info */}
                  <div className="border-t border-neutral-200 pt-4">
                    <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-600">{testimonial.location}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA to view more testimonials */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/for-patients/testimonials">Read More Patient Stories</Link>
          </Button>
        </motion.div>
      </Container>
    </Section>
  )
}
