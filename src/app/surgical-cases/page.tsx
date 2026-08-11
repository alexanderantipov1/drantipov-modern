import { Metadata } from "next"
import Link from "next/link"
import { Section, Container } from "@/components/sections"
import { CaseGrid } from "@/components/cases"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"
import { Button } from "@/components/ui/button"
import { caseCategories, allCases } from "@/constants/cases"
import { ArrowRight, Stethoscope, Award, Users } from "lucide-react"
import DualCTA from "@/components/DualCTA"

export const metadata: Metadata = {
  title: { absolute: "Surgical Cases: Real Patient Jaw & Implant Outcomes" },
  description: "Browse real surgical cases from Dr. Antipov — jaw surgery, dental implants, and facial cosmetic procedures with before-and-after results.",
  alternates: {
    canonical: "/surgical-cases",
    languages: {
      "en": "/surgical-cases",
      "x-default": "/surgical-cases",
    },
  },
  openGraph: {
    title: "Surgical Cases - Real Patient Transformations | Dr. Alexander Antipov",
    description: "Explore Dr. Antipov's surgical case portfolio featuring corrective jaw surgery, dental implants, and facial cosmetic procedures.",
    images: ["/images/cases/corrective-jaw-surgery/oms000052/1/preview@2x-55e61064.jpg"],
  },
}

export default function SurgicalCasesPage() {
  const featuredCases = allCases.slice(0, 6)

  return (
    <>
      <PageHero {...heroContent["/surgical-cases"]!} />

      {/* Case Categories */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Explore By Specialty
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Browse our surgical cases organized by specialty area to see real patient transformations and outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseCategories.map((category, index) => (
              <Link
                key={category.id}
                href={`/surgical-cases/${category.id}`}
                className="group bg-white/75 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-md hover:shadow-[0_20px_60px_-15px_rgba(14,62,94,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/85"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    {category.icon === "jaw" && <Stethoscope className="h-6 w-6 text-primary-600" />}
                    {category.icon === "tooth" && <Award className="h-6 w-6 text-primary-600" />}
                    {category.icon === "sparkles" && <Users className="h-6 w-6 text-primary-600" />}
                  </div>
                  <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {category.count} Cases
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-neutral-600 mb-6">{category.description}</p>

                <div className="flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                  View All Cases
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Cases */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Featured Surgical Cases
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A selection of transformative surgical procedures showcasing our expertise and patient outcomes
            </p>
          </div>

          <CaseGrid cases={featuredCases} columns={3} />

          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-6">
              Want to explore cases by specialty?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {caseCategories.map((category) => (
                <Button key={category.id} asChild variant="outline" size="lg">
                  <Link href={`/surgical-cases/${category.id}`}>
                    {category.title}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <DualCTA variant="dual"
        heading="See How We Can Help"
        subheading="Browse 21 real surgical cases by Dr. Antipov and Dr. Kahwach — then choose the right path for your treatment."
      />
    </>
  )
}
