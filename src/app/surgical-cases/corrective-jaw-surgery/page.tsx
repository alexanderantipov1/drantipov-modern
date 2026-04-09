import { Metadata } from "next"
import Link from "next/link"
import { Section, Container } from "@/components/sections"
import { CaseHero, CaseGrid } from "@/components/cases"
import { Button } from "@/components/ui/button"
import { correctiveJawSurgeryCases } from "@/constants/cases"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Corrective Jaw Surgery Cases - Orthognathic Surgery Results | Dr. Antipov",
  description: "View Dr. Antipov's corrective jaw surgery portfolio featuring orthognathic procedures, maxillomandibular advancement, and facial skeletal corrections. Real patient transformations and surgical outcomes.",
  openGraph: {
    title: "Corrective Jaw Surgery Cases | Dr. Alexander Antipov",
    description: "Expert orthognathic surgery results from Northern California's premier oral surgeon. View real patient transformations.",
    images: ["/images/cases/corrective-jaw-surgery/oms000052/1/preview@2x-55e61064.jpg"],
  },
}

export default function CorrectiveJawSurgeryPage() {
  return (
    <>
      <CaseHero
        title="Corrective Jaw Surgery Cases"
        description="Advanced orthognathic surgical procedures to correct jaw deformities, skeletal malocclusions, and facial asymmetries. These complex cases demonstrate precision surgical planning and execution for optimal functional and aesthetic outcomes."
        stats={[
          { label: "Total Cases", value: `${correctiveJawSurgeryCases.length}` },
          { label: "Class II/III Corrections", value: "30+" },
          { label: "Maxillomandibular Adv.", value: "25+" },
          { label: "Combined Procedures", value: "20+" },
        ]}
      />

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
                Each case represents a comprehensive treatment approach combining surgical expertise with advanced imaging and treatment planning. Procedures include Le Fort I osteotomy, bilateral sagittal split osteotomy (BSSO), and genioplasty.
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

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center space-y-8 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-glass">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Considering Corrective Jaw Surgery?
            </h2>
            <p className="text-xl text-neutral-600">
              Schedule a comprehensive consultation to discuss your jaw concerns and explore surgical options tailored to your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/for-patients/consultation">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/expertise/jaw-surgery">Learn About Jaw Surgery</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
