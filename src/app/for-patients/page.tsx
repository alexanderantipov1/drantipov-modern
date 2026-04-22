import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Heart, Star, FileText, Phone, Mail } from "lucide-react"
import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export const metadata: Metadata = {
  title: "Patient Resources | Dr. Antipov Oral Surgery",
  description:
    "Everything you need to know as a patient of Dr. Antipov. Pre-op instructions, post-op care, testimonials, and consultation scheduling.",
  keywords: [
    "patient resources",
    "oral surgery preparation",
    "post-operative care",
    "patient testimonials",
    "consultation scheduling",
    "dental implant recovery",
  ],
}

const resources = [
  {
    icon: Calendar,
    title: "Schedule Consultation",
    description: "Book your complimentary consultation with Dr. Antipov to discuss your treatment options.",
    href: "/for-patients/consultation",
    cta: "Book Now",
  },
  {
    icon: Star,
    title: "Patient Testimonials",
    description: "Read real stories from patients who have transformed their smiles and lives with Dr. Antipov.",
    href: "/for-patients/testimonials",
    cta: "Read Stories",
  },
  {
    icon: FileText,
    title: "Pre-Op Instructions",
    description: "Prepare for your surgery with detailed pre-operative guidelines and what to bring.",
    href: "/for-patients/pre-op",
    cta: "View Instructions",
  },
  {
    icon: Heart,
    title: "Post-Op Care",
    description: "Essential recovery instructions, pain management, and what to expect after surgery.",
    href: "/for-patients/post-op",
    cta: "View Care Guide",
  },
]

const whatToExpect = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "Comprehensive evaluation including 3D imaging, treatment planning, and discussion of your goals. This visit typically takes 60-90 minutes.",
  },
  {
    step: 2,
    title: "Treatment Planning",
    description:
      "We'll create a customized treatment plan, review costs and financing options, and answer all your questions before moving forward.",
  },
  {
    step: 3,
    title: "Surgical Procedure",
    description:
      "Advanced surgical techniques with sedation options for your comfort. Most procedures are completed in a single appointment.",
  },
  {
    step: 4,
    title: "Recovery & Follow-Up",
    description:
      "Detailed post-operative care instructions and scheduled follow-up visits to monitor your healing and ensure optimal results.",
  },
]

export default function ForPatientsPage() {
  return (
    <>
      <PageHero {...heroContent["/for-patients"]!} />

      {/* Quick Access Resources */}
      <Section background="default" padding="xl">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Quick Access Resources
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Find the information you need quickly and easily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <GlassCard key={index} className="p-8">
                <div className="inline-flex p-4 rounded-full bg-primary-100 mb-4">
                  <resource.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-3">{resource.title}</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">{resource.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={resource.href}>{resource.cta}</Link>
                </Button>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* What to Expect */}
      <Section background="accent" padding="xl">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Your journey with Dr. Antipov, from consultation to final results
            </p>
          </div>

          <div className="space-y-8">
            {whatToExpect.map((item) => (
              <GlassCard key={item.step} className="p-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
                    <p className="text-neutral-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Office Information */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Conveniently located in Roseville, California, serving the Greater Sacramento area
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Location */}
              <div className="text-center">
                <h3 className="font-semibold text-neutral-900 mb-3">Location</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  911 Reserve Dr<br />
                  Ste 150<br />
                  Roseville, CA 95678
                </p>
              </div>

              {/* Hours */}
              <div className="text-center">
                <h3 className="font-semibold text-neutral-900 mb-3">Office Hours</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Monday - Friday<br />
                  8:00 AM - 5:00 PM<br />
                  <span className="text-xs text-neutral-500">(By appointment only)</span>
                </p>
              </div>

              {/* Contact */}
              <div className="text-center">
                <h3 className="font-semibold text-neutral-900 mb-3">Contact</h3>
                <div className="space-y-2">
                  <p className="text-neutral-700 text-sm">
                    <a href="tel:9167909693" className="hover:text-primary-600 transition-colors">
                      (916) 790-9693
                    </a>
                  </p>
                  <p className="text-neutral-700 text-sm">
                    <a href="mailto:info@drantipov.com" className="hover:text-primary-600 transition-colors">
                      info@drantipov.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* FAQs Preview */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
              Have Questions?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about procedures, recovery, insurance, and more
            </p>
            <Button size="lg" asChild variant="outline">
              <Link href="/for-patients/faqs">Browse FAQs</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Emergency Contact */}
      <Section background="gradient" padding="lg">
        <Container size="md">
          <GlassCard className="p-8 md:p-12 text-center">
            <div className="inline-flex p-4 rounded-full bg-red-100 mb-4">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-3">
              Post-Operative Emergency?
            </h2>
            <p className="text-neutral-700 mb-6">
              If you're experiencing a post-operative emergency outside of office hours, please call our
              24/7 emergency line.
            </p>
            <a
              href="tel:9167909693"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors text-lg"
            >
              <Phone className="h-5 w-5" />
              Emergency: (916) 790-9693
            </a>
            <p className="text-sm text-neutral-500 mt-4">
              For life-threatening emergencies, call 911 or go to the nearest emergency room
            </p>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
