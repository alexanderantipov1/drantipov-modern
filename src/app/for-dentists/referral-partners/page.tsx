import { Section, Container, GlassCard } from "@/components/sections"
import { ReferralHero } from "@/components/for-dentists"
import { BenefitsList, ProcessTimeline } from "@/components/expertise"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Award, Users, Clock, FileText, MessageSquare, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Dental Referral Partners | Trusted Oral Surgery Referrals | Dr. Antipov",
  description:
    "Partner with Dr. Antipov for seamless oral surgery referrals. Comprehensive communication, exceptional patient care, and collaborative treatment planning. Serving Northern California dentists.",
}

const benefits = [
  "Direct communication with Dr. Antipov for complex case consultations",
  "Same-day or next-day emergency appointments for your patients",
  "Detailed post-operative reports sent within 24 hours",
  "Collaborative treatment planning using 3D imaging",
  "Your patients return to you for continuing care and restorative work",
  "Dedicated referral coordinator for seamless scheduling",
]

const referralProcess = [
  {
    step: 1,
    title: "Submit Referral",
    description:
      "Complete our secure online referral form or call our dedicated referral line. Include patient information, chief complaint, and any relevant imaging. We respond within 2 hours during business hours.",
    duration: "5 minutes",
  },
  {
    step: 2,
    title: "Consultation Scheduled",
    description:
      "We contact your patient directly to schedule their consultation. For urgent cases, we offer same-day or next-day appointments. Your patient receives a confirmation with pre-appointment instructions.",
    duration: "24-48 hours",
  },
  {
    step: 3,
    title: "Comprehensive Evaluation",
    description:
      "Dr. Antipov performs a thorough evaluation including clinical exam and necessary imaging (CBCT, panoramic x-ray). He discusses treatment options and answers all questions. Your patient never feels 'rushed.'",
    duration: "1 hour",
  },
  {
    step: 4,
    title: "Treatment & Communication",
    description:
      "If treatment is indicated, we schedule surgery and keep you informed every step of the way. Post-op reports with photos and recommendations are sent within 24 hours. Your patient returns to you for restorative care.",
    duration: "Ongoing",
  },
]

const services = [
  {
    icon: Users,
    title: "Dental Implants",
    description: "Single tooth, multiple implants, and full-arch solutions with digital planning",
  },
  {
    icon: Award,
    title: "Bone Grafting",
    description: "Ridge augmentation, sinus lifts, and socket preservation",
  },
  {
    icon: CheckCircle,
    title: "Extractions",
    description: "Simple and surgical extractions including impacted wisdom teeth",
  },
  {
    icon: FileText,
    title: "Corrective Jaw Surgery",
    description: "Orthognathic surgery with coordinated orthodontic treatment planning",
  },
  {
    icon: MessageSquare,
    title: "Pathology & Biopsies",
    description: "Oral lesion removal and histopathologic evaluation",
  },
  {
    icon: Clock,
    title: "Emergency Care",
    description: "Same-day appointments for infections, trauma, and post-op complications",
  },
]

export default function ReferralPartnersPage() {
  return (
    <>
      <ReferralHero />

      {/* Why Choose Dr. Antipov Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Why Northern California Dentists Choose Dr. Antipov
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A true partnership focused on exceptional patient outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <BenefitsList benefits={benefits} />
            </div>

            <div className="space-y-6">
              <GlassCard variant="hover">
                <div className="space-y-4">
                  <Award className="h-12 w-12 text-primary-600" />
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    Elite Training & Expertise
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Fellowship-trained at Columbia/Harlem Hospital and 4-year residency at Montefiore/Albert Einstein
                    College of Medicine. Board-certified by the American Board of Oral & Maxillofacial Surgery.
                  </p>
                </div>
              </GlassCard>

              <GlassCard variant="hover">
                <div className="space-y-4">
                  <Users className="h-12 w-12 text-primary-600" />
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    Collaborative Care Philosophy
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    We view referring dentists as valued partners. Your patients return to you for continuing care, and
                    we're always available for case consultations and treatment planning discussions.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Comprehensive Surgical Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Full spectrum of oral and maxillofacial surgery procedures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <GlassCard key={index} variant="hover">
                  <div className="space-y-4 text-center">
                    <div className="inline-flex p-3 rounded-xl bg-primary-100">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900">{service.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Referral Process Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <Clock className="h-12 w-12 text-primary-600 mx-auto" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Our Seamless Referral Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Simple, fast, and designed around your practice workflow
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ProcessTimeline steps={referralProcess} />
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              What Referring Dentists Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GlassCard>
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-neutral-700 italic leading-relaxed">
                  "Dr. Antipov is my go-to surgeon for complex implant cases. His communication is exceptional, and my
                  patients always return raving about their experience. He takes the time to explain everything and
                  never rushes through consultations."
                </p>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="font-semibold text-neutral-900">Dr. Sarah Mitchell, DDS</p>
                  <p className="text-sm text-neutral-600">Roseville Family Dentistry</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-neutral-700 italic leading-relaxed">
                  "I've been referring patients to Dr. Antipov for over 5 years. His surgical skills are outstanding,
                  but what really sets him apart is his collaborative approach. He includes me in treatment planning
                  and keeps me informed every step of the way."
                </p>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="font-semibold text-neutral-900">Dr. James Park, DDS</p>
                  <p className="text-sm text-neutral-600">Sacramento Dental Group</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Let's Partner for Exceptional Patient Care
            </h2>
            <p className="text-xl text-neutral-600">
              Ready to refer a patient or discuss a complex case? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Submit Referral</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:9167832110">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Referral Line
                </a>
              </Button>
            </div>
            <div className="pt-4 space-y-2 text-sm text-neutral-600">
              <p>📞 Direct referral line: (916) 783-2110</p>
              <p>📧 Email referrals: referrals@drantipov.com</p>
              <p>⏰ Same-day emergency appointments available</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
