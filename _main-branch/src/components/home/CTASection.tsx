"use client"

import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Phone } from "lucide-react"
import { siteConfig } from "@/constants/siteConfig"
import { ConsultationModal } from "@/components/forms/ConsultationModal"

/**
 * CTASection - Call-to-action for booking consultation
 *
 * Features:
 * - Dual CTA options (phone and online booking)
 * - Glassmorphism design
 * - Responsive layout
 */
export function CTASection() {
  return (
    <Section background="gradient" padding="xl" id="cta">
      <Container size="lg">
        <GlassCard className="text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-lg lg:text-xl text-neutral-600">
                Schedule your consultation with Dr. Antipov today and discover why dentists across Northern California trust us with their patients' care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ConsultationModal>
                <Button size="lg" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </ConsultationModal>

              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {siteConfig.contact.phone}
                </a>
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-neutral-500">
                For dentist referrals, please visit our{" "}
                <Link href="/for-dentists" className="text-primary-600 hover:underline">
                  For Dentists
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </GlassCard>
      </Container>
    </Section>
  )
}
