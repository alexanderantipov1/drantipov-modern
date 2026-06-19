import { Metadata } from "next"
import Link from "next/link"
import { Section, Container } from "@/components/sections"
import { CaseHero, CaseGrid } from "@/components/cases"
import { Button } from "@/components/ui/button"
import { caseCategories, allCases } from "@/constants/cases"
import { ArrowRight, Stethoscope, Award, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Surgical Cases - Real Patient Transformations | Dr. Alexander Antipov",
  description: "Explore Dr. Antipov's surgical case portfolio featuring corrective jaw surgery, dental implants, and facial cosmetic procedures. See real before-and-after results from Northern California's premier oral surgeon.",
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
      <CaseHero
        title="Surgical Cases"
        description="Transforming lives through precision surgery. Explore our comprehensive portfolio of successful surgical outcomes across corrective jaw surgery, dental implants, and facial cosmetic procedures."
        stats={[
          { label: "Total Cases", value: `${allCases.length}+` },
          { label: "Jaw Surgery", value: `${caseCategories[0].count}` },
          { label: "Dental Implants", value: `${caseCategories[1].count}` },
          { label: "Cosmetic Surgery", value: `${caseCategories[2].count}` },
        ]}
      />

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
                className="group bg-white rounded-2xl p-8 shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:-translate-y-1"
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

      {/* CTA Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center space-y-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-xl text-neutral-600">
              Schedule a consultation with Dr. Antipov to discuss your surgical options and create a personalized treatment plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/for-patients/consultation">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
