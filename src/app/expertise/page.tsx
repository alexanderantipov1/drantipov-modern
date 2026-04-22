import { Section, Container } from "@/components/sections"
import { ServiceCard } from "@/components/expertise"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { expertise } from "@/constants/siteConfig"
import { Phone } from "lucide-react"

export const metadata = {
  title: "Expertise - Advanced Oral Surgery Solutions | Dr. Alexander Antipov",
  description: "Board-certified oral surgeon Dr. Antipov specializes in full-arch implants, bone grafting, corrective jaw surgery, and sleep apnea solutions. Serving Northern California.",
}

export default function ExpertisePage() {
  return (
    <>
      <PageHero {...heroContent["/expertise"]!} />

      {/* Services Grid */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Our Specialized Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive oral surgery solutions backed by advanced training and 15+ years of experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.shortTitle}
                description={service.description}
                icon={service.icon as any}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Dr. Antipov Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
                The Dr. Antipov Difference
              </h2>
              <p className="text-xl text-neutral-600">
                When you choose Dr. Antipov, you're choosing excellence backed by credentials and experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-neutral-900">Elite Training</h3>
                <p className="text-neutral-600">
                  Fellowship-trained at Columbia/Harlem Hospital and 4-year residency at Montefiore/Albert Einstein College of Medicine
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-neutral-900">Board Certified</h3>
                <p className="text-neutral-600">
                  Diplomate of the American Board of Oral & Maxillofacial Surgery, ensuring the highest standards of care
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-neutral-900">Advanced Techniques</h3>
                <p className="text-neutral-600">
                  Staying at the forefront of surgical innovation with the latest technologies and methodologies
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-neutral-900">Patient-Centered Care</h3>
                <p className="text-neutral-600">
                  15+ years dedicated to providing compassionate, personalized treatment for every patient
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/about">Learn More About Dr. Antipov</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Ready to Discuss Your Treatment?
            </h2>
            <p className="text-xl text-neutral-600">
              Schedule a consultation to learn how Dr. Antipov can help restore your smile and confidence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:9167909693">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (916) 790-9693
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
