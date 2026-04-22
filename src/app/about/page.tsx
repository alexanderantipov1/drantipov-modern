import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Award, GraduationCap, Heart } from "lucide-react"
import { AboutPageHero } from "@/components/about/AboutPageHero"
import {
  getPhysicianSchema,
  getBreadcrumbSchema,
  structuredDataScript,
} from "@/lib/structured-data"
import { siteConfig } from "@/constants/siteConfig"

const education = [
  {
    degree: "Oral & Maxillofacial Surgery Residency",
    institution: "Albert Einstein College of Medicine",
    year: "",
  },
  {
    degree: "Doctor of Dental Surgery (DDS)",
    institution: "Loma Linda University School of Dentistry",
    year: "",
  },
  {
    degree: "Doctor of Dental Surgery (DDS)",
    institution: "Moscow State Medical Stomatology University",
    year: "",
  },
]

const certifications = [
  "Diplomate, American Board of Oral & Maxillofacial Surgery",
  "Member, American Association of Oral & Maxillofacial Surgeons (AAOMS)",
  "Member, American Dental Association (ADA)",
]

export default function AboutPage() {
  // Structured data for About page
  const structuredData = [
    getPhysicianSchema(),
    getBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "About Dr. Antipov", url: `${siteConfig.url}/about` },
    ]),
  ]

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />

      <AboutPageHero />

      {/* Biography Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/meetdrantipov.png"
                alt="Dr. Alexander Antipov with a happy patient"
                width={600}
                height={800}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900">
                About Dr. Alexander Antipov
              </h2>

              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>
                  Dr. Alexander V. Antipov is the founder of Fusion Dental Implants and a board-certified oral and maxillofacial 
                  surgeon based in Roseville, California. A graduate of Moscow State Medical Stomatology University and Loma Linda 
                  University School of Dentistry, he completed advanced training in oral and maxillofacial surgery at Albert Einstein 
                  College of Medicine.
                </p>

                <p>
                  With extensive experience in dental implants, bone grafting, orthognathic surgery, facial trauma, and cosmetic 
                  facial procedures, Dr. Antipov has helped thousands of patients restore their smiles. He maintains hospital 
                  privileges at multiple Northern California medical facilities.
                </p>

                <p>
                  Dr. Antipov is a member of the American Board of Oral and Maxillofacial Surgery, AAOMS, and ADA. His dedication 
                  to excellence and patient care has made him one of the most trusted oral surgeons in Northern California.
                </p>
              </div>

              <Button asChild size="lg">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Education & Training */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <GraduationCap className="h-12 w-12 text-primary-600 mx-auto" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Education & Training
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Rigorous academic and clinical training from leading institutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {education.map((item, index) => (
              <GlassCard key={index} variant="hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {item.degree}
                    </h3>
                    <p className="text-neutral-600">{item.institution}</p>
                  </div>
                  {item.year && (
                    <div className="text-primary-600 font-medium mt-2 md:mt-0">
                      {item.year}
                    </div>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Certifications & Affiliations */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <Award className="h-12 w-12 text-primary-600 mx-auto" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Board Certifications & Professional Affiliations
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
            {certifications.map((cert, index) => (
              <GlassCard key={index} className="text-center">
                <p className="text-lg text-neutral-700">{cert}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Philosophy */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Heart className="h-12 w-12 text-primary-600 mx-auto" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Practice Philosophy
            </h2>

            <div className="text-lg lg:text-xl text-neutral-700 leading-relaxed space-y-6">
              <p>
                "My approach to oral surgery is rooted in the belief that every patient deserves exceptional care
                delivered with compassion and respect. I take the time to understand each patient's unique needs
                and concerns, creating customized treatment plans that achieve optimal outcomes."
              </p>

              <p>
                "Continuing education is paramount in our rapidly evolving field. I remain committed to staying
                at the forefront of surgical techniques and technologies, ensuring my patients benefit from the
                latest advancements in oral and maxillofacial surgery."
              </p>

              <p className="font-semibold text-neutral-900">
                — Dr. Alexander Antipov
              </p>
            </div>

            <div className="pt-8">
              <Button asChild size="lg">
                <Link href="/contact">Meet Dr. Antipov</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
