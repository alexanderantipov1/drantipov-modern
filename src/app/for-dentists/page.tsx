import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, GraduationCap, Handshake, Phone, Mail, Award } from "lucide-react"
import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export const metadata: Metadata = {
  title: "For Dentists - Referrals & Education | Dr. Antipov",
  description:
    "Partner with Dr. Antipov for complex oral surgery referrals. Collaborative care, seamless communication, and continuing education opportunities for dentists.",
  keywords: [
    "dental referrals",
    "oral surgeon referral",
    "implant referral",
    "dental continuing education",
    "dentist collaboration",
    "surgical referral partner",
  ],
}

const services = [
  {
    icon: Users,
    title: "Dental Implant Surgery",
    description: "Single tooth to full-arch implant placement with immediate loading protocols.",
  },
  {
    icon: Handshake,
    title: "Full-Arch Restoration",
    description: "All-on-X procedures for edentulous or failing dentition patients.",
  },
  {
    icon: GraduationCap,
    title: "Bone Grafting",
    description: "Ridge augmentation, sinus lifts, and complex grafting procedures.",
  },
  {
    icon: Award,
    title: "Corrective Jaw Surgery",
    description: "Orthognathic surgery for severe malocclusions and facial asymmetries.",
  },
  {
    icon: Users,
    title: "Sleep Apnea Surgery",
    description: "Maxillomandibular advancement for OSA treatment.",
  },
  {
    icon: Handshake,
    title: "Wisdom Teeth Removal",
    description: "Simple to complex extractions with sedation options.",
  },
]

const whyRefer = [
  {
    title: "Seamless Communication",
    description:
      "Detailed operative reports within 24 hours, with photos and recommendations for prosthetic phase.",
  },
  {
    title: "Collaborative Approach",
    description:
      "We work as an extension of your practice, keeping you involved every step of the surgical journey.",
  },
  {
    title: "Advanced Technology",
    description: "CBCT imaging, digital treatment planning, and guided surgery for predictable outcomes.",
  },
  {
    title: "Patient-Centered Care",
    description:
      "Your patients receive the same compassionate care you provide, maintaining your practice's standard of excellence.",
  },
]

export default function ForDentistsPage() {
  return (
    <>
      <PageHero {...heroContent["/for-dentists"]!} />

      {/* Services We Provide */}
      <Section background="default" padding="xl">
        <Container size="xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Surgical Services
            </h2>
            <p className="text-lg text-neutral-600">
              Comprehensive oral and maxillofacial surgery services for your referred patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlassCard key={index} className="p-8 text-center">
                <div className="inline-flex p-4 rounded-full bg-primary-100 mb-4">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Refer Section */}
      <Section background="accent" padding="xl">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Why Refer to Dr. Antipov?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Building long-term partnerships with referring dentists through excellent communication and
              patient care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyRefer.map((item, index) => (
              <GlassCard key={index} className="p-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quick Links */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Referral Partners Card */}
            <GlassCard className="p-8 md:p-12">
              <div className="inline-flex p-4 rounded-full bg-primary-100 mb-6">
                <Handshake className="h-10 w-10 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                Become a Referral Partner
              </h2>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Join our network of referring dentists. Simple referral process, excellent communication, and
                seamless coordination for your patients.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="text-primary-600 mt-0.5">✓</span>
                  <span>24-48 hour appointment scheduling</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="text-primary-600 mt-0.5">✓</span>
                  <span>Detailed operative reports with photos</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="text-primary-600 mt-0.5">✓</span>
                  <span>Direct access to Dr. Antipov for case consultations</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="text-primary-600 mt-0.5">✓</span>
                  <span>Patients returned to your care for restorative phase</span>
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/for-dentists/referral-partners">Learn More About Referrals</Link>
              </Button>
            </GlassCard>

            {/* Education Card */}
            <GlassCard className="p-8 md:p-12">
              <div className="inline-flex p-4 rounded-full bg-accent-100 mb-6">
                <GraduationCap className="h-10 w-10 text-accent-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                Continuing Education
              </h2>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Expand your knowledge with Dr. Antipov's educational courses on implant dentistry, bone
                grafting, and surgical techniques.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="text-accent-600 mt-0.5">✓</span>
                  <span>Online courses with CE credits</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="text-accent-600 mt-0.5">✓</span>
                  <span>Hands-on workshops and live surgical demonstrations</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="text-accent-600 mt-0.5">✓</span>
                  <span>Evidence-based protocols and clinical pearls</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="text-accent-600 mt-0.5">✓</span>
                  <span>Case-based learning from real-world scenarios</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/for-dentists/education/courses">Browse CE Courses</Link>
              </Button>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section background="gradient" padding="lg">
        <Container size="md">
          <GlassCard className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">Questions About Referrals?</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Our team is here to help. Contact us to discuss a patient case or learn more about our referral
              process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9167832110"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
                (916) 783-2110
              </a>
              <a
                href="mailto:referrals@drantipov.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-full font-semibold hover:bg-neutral-50 transition-colors border-2 border-primary-600"
              >
                <Mail className="h-5 w-5" />
                referrals@drantipov.com
              </a>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
