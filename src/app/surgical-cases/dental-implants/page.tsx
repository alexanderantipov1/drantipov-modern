import { Metadata } from "next"
import Link from "next/link"
import { Section, Container } from "@/components/sections"
import { CaseGrid } from "@/components/cases"
import { Button } from "@/components/ui/button"
import { dentalImplantsCases } from "@/constants/cases"
import { ArrowLeft, CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export const metadata: Metadata = {
  title: "Dental Implant Cases - All-on-4 and Immediate Implants | Dr. Antipov",
  description: "Explore Dr. Antipov's dental implant portfolio featuring All-on-4, immediate implants, and full-arch restoration cases. See real patient transformations with same-day teeth solutions.",
  openGraph: {
    title: "Dental Implant Cases - All-on-4 Solutions | Dr. Alexander Antipov",
    description: "Expert dental implant surgery results including All-on-4 and immediate implant placement. Real transformations from Roseville, CA.",
    images: ["/images/cases/dental-implants/di000010/1/preview-0d23c849.jpg"],
  },
}

export default function DentalImplantsPage() {
  return (
    <>
      <PageHero {...heroContent["/surgical-cases/dental-implants"]!} />

      {/* Back Navigation */}
      <Section background="default" padding="sm">
        <Container size="lg">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/surgical-cases">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Cases
            </Link>
          </Button>
        </Container>
      </Section>

      {/* Cases Grid */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900">
                Life-Changing Dental Implant Results
              </h2>
              <p className="text-lg text-neutral-600">
                Each case demonstrates the transformative power of dental implants, from single tooth replacement to full-arch restoration. Our All-on-4 Teeth-In-A-Day technique provides immediate results and long-term stability.
              </p>
            </div>

            <CaseGrid cases={dentalImplantsCases} columns={3} />
          </div>
        </Container>
      </Section>

      {/* All-on-4 Benefits */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-8 text-center">
              The All-on-4 Advantage
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Same-Day Teeth",
                  description: "Walk in with failing teeth, leave with a complete, functional smile the same day",
                },
                {
                  title: "Fewer Implants Needed",
                  description: "Only 4-6 implants per arch, reducing surgical complexity and cost",
                },
                {
                  title: "No Bone Grafting",
                  description: "Strategic implant placement often eliminates the need for bone grafting procedures",
                },
                {
                  title: "Immediate Function",
                  description: "Temporary prosthesis allows you to eat and speak normally while healing",
                },
                {
                  title: "Long-Term Stability",
                  description: "Proven success rates exceeding 95% for properly maintained All-on-4 restorations",
                },
                {
                  title: "Natural Aesthetics",
                  description: "Custom-designed teeth that match your facial features and provide a natural appearance",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-glass flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                What is the All-on-4 Technique?
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                All-on-4 is a revolutionary dental implant technique that uses just four strategically placed implants to support a full arch of replacement teeth. The posterior implants are angled at 30-45 degrees to maximize bone contact and avoid anatomical structures like the maxillary sinus or inferior alveolar nerve. This innovative approach allows for immediate loading with a temporary prosthesis, providing same-day teeth and eliminating the need for lengthy healing periods between procedures.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center space-y-8 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-glass">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Ready to Restore Your Smile?
            </h2>
            <p className="text-xl text-neutral-600">
              Discover if All-on-4 dental implants are right for you. Schedule a consultation to discuss your options and receive a personalized treatment plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/for-patients/consultation">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/expertise/full-arch-implants">Learn About Full-Arch Implants</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
