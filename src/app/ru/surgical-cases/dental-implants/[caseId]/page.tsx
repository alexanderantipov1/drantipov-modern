import { Metadata } from "next"
import { notFound } from "next/navigation"
import { dentalImplantsCases } from "@/constants/ruCases"
import { caseArticles } from "@/constants/ruCaseArticles"
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
    return { title: "Кейс не найден" }
  }

  const article = caseArticles[caseData.id]

  return {
    title: article?.metaTitle
      ? { absolute: article.metaTitle }
      : `${caseData.title} — кейс имплантации зубов`,
    description:
      article?.metaDescription ||
      caseData.description ||
      `Кейс имплантации зубов ${caseData.id}: ${caseData.title}. Результаты All-on-4 и немедленной имплантации.`,
    keywords: article?.keywords,
    alternates: {
      canonical: `/ru/surgical-cases/dental-implants/${caseId}`,
      languages: {
        ru: `/ru/surgical-cases/dental-implants/${caseId}`,
        en: `/surgical-cases/dental-implants/${caseId}`,
        "x-default": `/surgical-cases/dental-implants/${caseId}`,
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
  const caseData = dentalImplantsCases.find((c) => c.id === caseId)

  if (!caseData) {
    notFound()
  }

  return <CaseDetail caseData={caseData} article={caseArticles[caseData.id]} locale="ru" />
}
