import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Section, Container } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { correctiveJawSurgeryCases } from "@/constants/cases"
import { ArrowLeft, Calendar, User, Stethoscope } from "lucide-react"

interface CaseDetailPageProps {
  params: {
    caseId: string
  }
}

export async function generateStaticParams() {
  return correctiveJawSurgeryCases.map((caseItem) => ({
    caseId: caseItem.id,
  }))
}

export async function generateMetadata({ params }: CaseDetailPageProps): Promise<Metadata> {
  const caseData = correctiveJawSurgeryCases.find((c) => c.id === params.caseId)

  if (!caseData) {
    return {
      title: "Case Not Found",
    }
  }

  return {
    title: `${caseData.title} - Corrective Jaw Surgery Case | Dr. Antipov`,
    description: caseData.description || `Corrective jaw surgery case ${caseData.id}: ${caseData.title}. View detailed surgical outcome and procedure information.`,
    openGraph: {
      title: `${caseData.title} | Dr. Alexander Antipov`,
      description: caseData.description || caseData.title,
      images: [caseData.imagePath],
    },
  }
}

export default function CaseDetailPage({ params }: CaseDetailPageProps) {
  const caseData = correctiveJawSurgeryCases.find((c) => c.id === params.caseId)

  if (!caseData) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/surgical-cases/corrective-jaw-surgery">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Corrective Jaw Surgery Cases
              </Link>
            </Button>

            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                Case ID: {caseData.id}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900">
                {caseData.title}
              </h1>

              {caseData.description && (
                <p className="text-xl text-neutral-600 leading-relaxed">
                  {caseData.description}
                </p>
              )}

              <div className="flex flex-wrap gap-6 pt-4">
                {caseData.surgeon && (
                  <div className="flex items-center gap-2 text-neutral-600">
                    <User className="h-5 w-5 text-primary-600" />
                    <span className="font-medium">{caseData.surgeon}</span>
                  </div>
                )}
                {caseData.date && (
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Calendar className="h-5 w-5 text-primary-600" />
                    <span>{caseData.date}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Image */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-glass-lg">
              <Image
                src={caseData.imagePath}
                alt={caseData.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Case Details */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Diagnosis */}
            {caseData.diagnosis && caseData.diagnosis.length > 0 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <Stethoscope className="h-5 w-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Diagnosis
                  </h2>
                </div>
                <ul className="space-y-3">
                  {caseData.diagnosis.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-neutral-700">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Procedures */}
            {caseData.procedures && caseData.procedures.length > 0 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <Stethoscope className="h-5 w-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Procedures Performed
                  </h2>
                </div>
                <ul className="space-y-3">
                  {caseData.procedures.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-neutral-700">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center space-y-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Similar Case to Yours?
            </h2>
            <p className="text-xl text-neutral-600">
              Schedule a consultation with Dr. Antipov to discuss your specific needs and treatment options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/for-patients/consultation">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/surgical-cases/corrective-jaw-surgery">View More Cases</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
