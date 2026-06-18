import { Metadata } from "next"
import { notFound } from "next/navigation"
import { dentalImplantsCases } from "@/constants/cases"
import { caseArticles } from "@/constants/caseArticles"
import { CaseDetail } from "@/components/CaseDetail"

interface CaseDetailPageProps {
  params: Promise<{
    caseId: string
  }>
}

export async function generateStaticParams() {
  return dentalImplantsCases.map((caseItem) => ({
    caseId: caseItem.id,
  }))
}

export async function generateMetadata({ params }: CaseDetailPageProps): Promise<Metadata> {
  const { caseId } = await params
  const caseData = dentalImplantsCases.find((c) => c.id === caseId)

  if (!caseData) {
    return { title: "Case Not Found" }
  }

  const article = caseArticles[caseData.id]

  return {
    title: article?.metaTitle
      ? { absolute: article.metaTitle }
      : `${caseData.title} - Dental Implants Case`,
    description:
      article?.metaDescription ||
      caseData.description ||
      `Dental implants case ${caseData.id}: ${caseData.title}. View All-on-4 and immediate implant surgical outcomes.`,
    keywords: article?.keywords,
    openGraph: {
      title: article?.metaTitle || `${caseData.title} | Dr. Alexander Antipov`,
      description: article?.metaDescription || caseData.description || caseData.title,
      images: [caseData.imagePath],
      type: "article",
    },
  }
}

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
  const { caseId } = await params
  const caseData = dentalImplantsCases.find((c) => c.id === caseId)

  if (!caseData) {
    notFound()
  }

  return <CaseDetail caseData={caseData} article={caseArticles[caseData.id]} />
}
