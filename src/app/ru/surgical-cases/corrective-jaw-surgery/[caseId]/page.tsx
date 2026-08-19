import { Metadata } from "next"
import { notFound } from "next/navigation"
import { correctiveJawSurgeryCases } from "@/constants/ruCases"
import { caseArticles } from "@/constants/ruCaseArticles"
import { CaseDetail } from "@/components/CaseDetail"

interface CaseDetailPageProps {
  params: Promise<{
    caseId: string
  }>
}

export async function generateStaticParams() {
  return correctiveJawSurgeryCases.map((caseItem) => ({
    caseId: caseItem.id,
  }))
}

export async function generateMetadata({ params }: CaseDetailPageProps): Promise<Metadata> {
  const { caseId } = await params
  const caseData = correctiveJawSurgeryCases.find((c) => c.id === caseId)

  if (!caseData) {
    return { title: "Кейс не найден" }
  }

  const article = caseArticles[caseData.id]

  return {
    title: article?.metaTitle
      ? { absolute: article.metaTitle }
      : `${caseData.title} - кейс ортогнатической хирургии`,
    description:
      article?.metaDescription ||
      caseData.description ||
      `Кейс ортогнатической хирургии ${caseData.id}: ${caseData.title}. Коррекция прикуса и асимметрии лица.`,
    keywords: article?.keywords,
    alternates: {
      canonical: `/ru/surgical-cases/corrective-jaw-surgery/${caseId}`,
      languages: {
        ru: `/ru/surgical-cases/corrective-jaw-surgery/${caseId}`,
        en: `/surgical-cases/corrective-jaw-surgery/${caseId}`,
        "x-default": `/surgical-cases/corrective-jaw-surgery/${caseId}`,
      },
    },
    openGraph: {
      title: article?.metaTitle || `${caseData.title} | Доктор Александр Антипов`,
      description: article?.metaDescription || caseData.description || caseData.title,
      images: [caseData.imagePath],
      locale: "ru_RU",
      type: "article",
    },
  }
}

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
  const { caseId } = await params
  const caseData = correctiveJawSurgeryCases.find((c) => c.id === caseId)

  if (!caseData) {
    notFound()
  }

  return <CaseDetail caseData={caseData} article={caseArticles[caseData.id]} locale="ru" />
}
