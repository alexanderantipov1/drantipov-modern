import { finalizeMetadata } from "@/lib/seo-foundation";
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getGuideArticle, buildMetadata } from "@/constants/guideArticles"

const article = getGuideArticle("best-full-arch-dental-implant-clinics-california-how-to-compare")

export const metadata: Metadata = finalizeMetadata(article ? buildMetadata(article) : {}, "/for-patients/insights/best-full-arch-dental-implant-clinics-california-how-to-compare")

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}
