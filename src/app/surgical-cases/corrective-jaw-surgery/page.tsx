import { Metadata } from "next"
import Link from "next/link"
import { Section, Container } from "@/components/sections"
import { CaseGrid } from "@/components/cases"
import { Button } from "@/components/ui/button"
import { correctiveJawSurgeryCases } from "@/constants/cases"
import { ArrowLeft } from "lucide-react"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"
import DualCTA from "@/components/DualCTA"

export const metadata: Metadata = {
  title: "Corrective Jaw Surgery Cases — Real Results",
  description: "Dr. Antipov's corrective jaw surgery portfolio — orthognathic procedures, mandibular advancement, and facial skeletal corrections with real patient outcomes.",
  alternates: {
    canonical: "/surgical-cases/corrective-jaw-surgery",
    languages: {
      en: "/surgical-cases/corrective-jaw-surgery",
      "x-default": "/surgical-cases/corrective-jaw-surgery",
    },
  },
  openGraph: {
    title: "Corrective Jaw Surgery Cases | Dr. Alexander Antipov",
    description: "Expert orthognathic surgery results from Northern California's premier oral surgeon. View real patient transformations.",
    images: ["/images/cases/corrective-jaw-surgery/oms000052/1/preview@2x-55e61064.jpg"],
  },
}

export default function CorrectiveJawSurgeryPage() {
  return (
    <>
      <PageHero {...heroContent["/surgical-cases/corrective-jaw-surgery"]!} />

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
                Transformative Jaw Surgery Results
              </h2>
              <p className="text-lg text-neutral-600">
                Each case represents a comprehensive treatment approach combining surgical expertise with advanced imaging and treatment planning. Procedures include Le Fort I osteotomy, bilateral sagittal split osteotomy (BSSO), and genioplasty. Wondering what healing looks like afterward? See our{" "}
                <Link href="/jaw-surgery-recovery-timeline" className="text-primary-600 hover:underline font-semibold">
                  week-by-week jaw surgery recovery timeline
                </Link>
                .
              </p>
            </div>

            <CaseGrid cases={correctiveJawSurgeryCases} columns={3} />
          </div>
        </Container>
      </Section>

      {/* Procedure Information */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-8 text-center">
              Common Procedures in Corrective Jaw Surgery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-glass">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Le Fort I Osteotomy
                </h3>
                <p className="text-neutral-600">
                  Upper jaw repositioning to correct maxillary hypoplasia, asymmetry, and malocclusion. Can include advancement, setback, or vertical changes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-glass">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Bilateral Sagittal Split Osteotomy (BSSO)
                </h3>
                <p className="text-neutral-600">
                  Lower jaw repositioning for mandibular advancement, setback, or asymmetry correction. Addresses Class II and III skeletal discrepancies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-glass">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Genioplasty
                </h3>
                <p className="text-neutral-600">
                  Chin repositioning for improved facial balance and aesthetics. Can involve advancement, lengthening, or setback procedures.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-glass">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Maxillomandibular Advancement
                </h3>
                <p className="text-neutral-600">
                  Combined upper and lower jaw advancement for skeletal deficiencies, obstructive sleep apnea, and facial profile enhancement.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <DualCTA variant="surgical"
        heading="Considering Corrective Jaw Surgery?"
        subheading="Orthognathic surgery is performed at Galleria Oral & Facial Surgery. Schedule a consultation to evaluate your case."
      />
    </>
  )
}
