import { Metadata } from "next"
import { notFound } from "next/navigation"
import { facialCosmeticSurgeryCases } from "@/constants/cases"
import { caseArticles } from "@/constants/caseArticles"
import { CaseDetail } from "@/components/CaseDetail"

interface CaseDetailPageProps {
  params: Promise<{
    caseId: string
  }>
}

export async function generateStaticParams() {
  return facialCosmeticSurgeryCases.map((caseItem) => ({
    caseId: caseItem.id,
  }))
}

export async function generateMetadata({ params }: CaseDetailPageProps): Promise<Metadata> {
  const { caseId } = await params
  const caseData = facialCosmeticSurgeryCases.find((c) => c.id === caseId)

  if (!caseData) {
    return { title: "Case Not Found" }
  }

  const article = caseArticles[caseData.id]

  return {
    title: article?.metaTitle
      ? { absolute: article.metaTitle }
      : `${caseData.title} - Facial Cosmetic Surgery Case`,
    description:
      article?.metaDescription ||
      caseData.description ||
      `Facial cosmetic surgery case ${caseData.id}: ${caseData.title}. View detailed procedure information and results.`,
    keywords: article?.keywords,
    alternates: {
      canonical: `/surgical-cases/facial-cosmetic-surgery/${caseId}`,
      languages: {
        en: `/surgical-cases/facial-cosmetic-surgery/${caseId}`,
        "x-default": `/surgical-cases/facial-cosmetic-surgery/${caseId}`,
      },
    },
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
  const caseData = facialCosmeticSurgeryCases.find((c) => c.id === caseId)

  if (!caseData) {
    notFound()
  }

  return <CaseDetail caseData={caseData} article={caseArticles[caseData.id]} />
}
