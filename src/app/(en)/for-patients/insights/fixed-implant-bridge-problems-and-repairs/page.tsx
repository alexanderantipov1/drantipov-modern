import { finalizeMetadata } from "@/lib/seo-foundation"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getClinicalInsightArticle, buildMetadata } from "@/constants/clinicalInsightArticles"

const slug = "fixed-implant-bridge-problems-and-repairs"
const article = getClinicalInsightArticle(slug)
export const metadata: Metadata = finalizeMetadata(article ? buildMetadata(article) : {}, `/for-patients/insights/${slug}`)
export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}
