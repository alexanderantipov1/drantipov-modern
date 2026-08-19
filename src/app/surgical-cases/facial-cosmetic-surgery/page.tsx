import { Metadata } from "next"
import Link from "next/link"
import { Section, Container } from "@/components/sections"
import { CaseGrid } from "@/components/cases"
import { Button } from "@/components/ui/button"
import { facialCosmeticSurgeryCases } from "@/constants/cases"
import { ArrowLeft } from "lucide-react"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"
import DualCTA from "@/components/DualCTA"
import { getBreadcrumbSchema, structuredDataScript } from "@/lib/structured-data"
import { siteConfig } from "@/constants/siteConfig"

export const metadata: Metadata = {
  title: "Facial Cosmetic Surgery - Before & After | Dr. Antipov",
  description: "Rhinoplasty, eyelid surgery, facial fillers, lip augmentation, scarless mole removal - facial cosmetic surgery results by Dr. Antipov, Roseville CA.",
  alternates: {
    canonical: "/surgical-cases/facial-cosmetic-surgery",
    languages: {
      "en": "/surgical-cases/facial-cosmetic-surgery",
      "x-default": "/surgical-cases/facial-cosmetic-surgery",
    },
  },
  openGraph: {
    title: "Facial Cosmetic Surgery - Before & After Cases",
    description: "Rhinoplasty, eyelid surgery, fillers, lip augmentation, scarless mole removal - Dr. Antipov, Roseville CA.",
    images: [
      {
        url: "/images/cases/facial-cosmetic-surgery/fcs000001/1/preview-9b89c3c9.jpg",
        width: 1200,
        height: 630,
        alt: "Facial Cosmetic Surgery - Before & After by Dr. Antipov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facial Cosmetic Surgery - Before & After",
    description: "Rhinoplasty, eyelid surgery, fillers, lip augmentation, scarless mole removal - Dr. Antipov, Roseville CA.",
    images: ["/images/cases/facial-cosmetic-surgery/fcs000001/1/preview-9b89c3c9.jpg"],
  },
}

export default function FacialCosmeticSurgeryPage() {
  const structuredData = [
    getBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Surgical Cases", url: `${siteConfig.url}/surgical-cases` },
      { name: "Facial Cosmetic Surgery", url: `${siteConfig.url}/surgical-cases/facial-cosmetic-surgery` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Facial Cosmetic Surgery Procedures",
      description: "Facial cosmetic and aesthetic procedures performed by Dr. Alexander Antipov in Roseville, CA - including rhinoplasty, eyelid surgery, fillers, lip augmentation, facial rejuvenation, and scarless mole removal.",
      url: `${siteConfig.url}/surgical-cases/facial-cosmetic-surgery`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Rhinoplasty", item: { "@type": "MedicalProcedure", name: "Rhinoplasty", url: `${siteConfig.url}/surgical-cases/facial-cosmetic-surgery` } },
        { "@type": "ListItem", position: 2, name: "Face Lift Surgery", item: { "@type": "MedicalProcedure", name: "Face Lift Surgery", url: `${siteConfig.url}/surgical-cases/facial-cosmetic-surgery` } },
        { "@type": "ListItem", position: 3, name: "Eyelid Surgery (Blepharoplasty)", item: { "@type": "MedicalProcedure", name: "Eyelid Surgery (Blepharoplasty)", url: `${siteConfig.url}/surgical-cases/facial-cosmetic-surgery` } },
        { "@type": "ListItem", position: 4, name: "Double Eyelid Surgery", item: { "@type": "MedicalProcedure", name: "Double Eyelid Surgery", url: `${siteConfig.url}/surgical-cases/facial-cosmetic-surgery` } },
        { "@type": "ListItem", position: 5, name: "Facial Feminization Surgery", item: { "@type": "MedicalProcedure", name: "Facial Feminization Surgery", url: `${siteConfig.url}/surgical-cases/facial-cosmetic-surgery` } },
        { "@type": "ListItem", position: 6, name: "Juvederm Dermal Fillers", item: { "@type": "MedicalProcedure", name: "Juvederm Dermal Fillers", url: `${siteConfig.url}/surgical-cases/facial-cosmetic-surgery` } },
        { "@type": "ListItem", position: 7, name: "Lip Augmentation", item: { "@type": "MedicalProcedure", name: "Lip Augmentation", url: `${siteConfig.url}/surgical-cases/facial-cosmetic-surgery` } },
        { "@type": "ListItem", position: 8, name: "Scarless Mole Removal", item: { "@type": "MedicalProcedure", name: "Scarless Mole Removal", url: `${siteConfig.url}/surgical-cases/facial-cosmetic-surgery` } },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: "Facial Cosmetic Surgery",
      description: "Facial aesthetic procedures including rhinoplasty, eyelid surgery, fillers, and scarless mole removal performed by a board-certified oral & maxillofacial surgeon in Roseville, CA.",
      url: `${siteConfig.url}/surgical-cases/facial-cosmetic-surgery`,
      procedureType: "Surgical",
      bodyLocation: "Face",
      medicineSystem: "WesternConventional",
    },
  ]
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />
      <PageHero {...heroContent["/surgical-cases/facial-cosmetic-surgery"]!} />

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

      <DualCTA variant="surgical"
        heading="Ready to Discuss Cosmetic Surgery?"
        subheading="Facial cosmetic surgery is performed at Galleria Oral & Facial Surgery - by Dr. Antipov and Dr. Kahwach."
      />
    </>
  )
}
