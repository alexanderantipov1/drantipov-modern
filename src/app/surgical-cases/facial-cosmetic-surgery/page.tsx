import { Metadata } from "next"
import Link from "next/link"
import { Section, Container } from "@/components/sections"
import { CaseHero, CaseGrid } from "@/components/cases"
import { Button } from "@/components/ui/button"
import { facialCosmeticSurgeryCases } from "@/constants/cases"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Facial Cosmetic Surgery Cases - Aesthetic Procedures | Dr. Antipov",
  description: "View Dr. Antipov's facial cosmetic surgery portfolio featuring scarless mole removal, dermal fillers, facial rejuvenation, and eyelid surgery. Real patient transformations and aesthetic results.",
  openGraph: {
    title: "Facial Cosmetic Surgery Cases | Dr. Alexander Antipov",
    description: "Expert facial cosmetic procedures including scarless mole removal, dermal fillers, and facial rejuvenation from Roseville, CA.",
    images: ["/images/cases/facial-cosmetic-surgery/fcs000001/1/preview-9b89c3c9.jpg"],
  },
}

export default function FacialCosmeticSurgeryPage() {
  return (
    <>
      <CaseHero
        title="Facial Cosmetic Surgery Cases"
        description="Aesthetic procedures for facial enhancement and rejuvenation. These cases demonstrate our commitment to natural-looking results through advanced techniques including scarless mole removal, dermal fillers, and facial rejuvenation procedures."
        stats={[
          { label: "Total Cases", value: `${facialCosmeticSurgeryCases.length}` },
          { label: "Scarless Procedures", value: "3" },
          { label: "Dermal Fillers", value: "2" },
          { label: "Facial Rejuvenation", value: "1" },
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
                Natural-Looking Aesthetic Results
              </h2>
              <p className="text-lg text-neutral-600">
                Each case reflects our philosophy of enhancing natural beauty through minimally invasive techniques. From scarless mole removal using radiowave surgery to facial rejuvenation with dermal fillers, we prioritize patient safety and aesthetic excellence.
              </p>
            </div>

            <CaseGrid cases={facialCosmeticSurgeryCases} columns={3} />
          </div>
        </Container>
      </Section>

      {/* Procedure Highlights */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-8 text-center">
              Featured Cosmetic Procedures
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-glass">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Scarless Mole Removal with Radiowave Surgery
                </h3>
                <p className="text-neutral-600 mb-4">
                  Our advanced Ellman radiowave surgery technique allows for precise removal of facial moles without scalpels or stitches. The procedure is virtually bloodless and painless, with minimal recovery time. Unlike traditional excision, radiowave surgery vaporizes tissue at the cellular level, leaving no visible scarring.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <div className="font-semibold text-primary-900 mb-1">Procedure Time</div>
                    <div className="text-primary-700">15-30 minutes</div>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <div className="font-semibold text-primary-900 mb-1">Recovery</div>
                    <div className="text-primary-700">1-2 weeks</div>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <div className="font-semibold text-primary-900 mb-1">Results</div>
                    <div className="text-primary-700">No visible scarring</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-glass">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Dermal Fillers with Juvederm
                </h3>
                <p className="text-neutral-600 mb-4">
                  Hyaluronic acid-based dermal fillers provide natural-looking volume restoration and wrinkle reduction. Using precise injection techniques with blunt cannulas, we achieve smooth, natural results with minimal bruising or swelling. Treatments target nasolabial folds, marionette lines, lips, and cheeks for comprehensive facial rejuvenation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <div className="font-semibold text-primary-900 mb-1">Procedure Time</div>
                    <div className="text-primary-700">30-60 minutes</div>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <div className="font-semibold text-primary-900 mb-1">Results</div>
                    <div className="text-primary-700">Immediate improvement</div>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <div className="font-semibold text-primary-900 mb-1">Duration</div>
                    <div className="text-primary-700">9-12 months</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-glass">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Facial Rejuvenation Surgery
                </h3>
                <p className="text-neutral-600">
                  Comprehensive facial rejuvenation combines multiple procedures including facelift, neck lift, and blepharoplasty (eyelid surgery). Our approach focuses on natural results that refresh and rejuvenate without the "overdone" appearance. Deep SMAS-ectomy technique provides long-lasting results with minimal visible scarring.
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
              Interested in Facial Cosmetic Procedures?
            </h2>
            <p className="text-xl text-neutral-600">
              Schedule a consultation to discuss your aesthetic goals and explore cosmetic options tailored to your unique needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/for-patients/consultation">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/expertise/mole-removal">Learn About Mole Removal</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
