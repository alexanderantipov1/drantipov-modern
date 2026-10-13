import { finalizeMetadata } from "@/lib/seo-foundation"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getBrandInsightArticle, buildMetadata } from "@/constants/brandInsightArticles"

const slug = "all-on-4-san-francisco-patient-travel-planning"
const article = getBrandInsightArticle(slug)
export const metadata: Metadata = finalizeMetadata(article ? buildMetadata(article) : {}, `/for-patients/insights/${slug}`)
export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}
