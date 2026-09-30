import { finalizeMetadata } from "@/lib/seo-foundation"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getNewInsightArticle, buildMetadata } from "@/constants/newInsightArticles"

const slug = "one-arch-vs-two-arch-dental-implant-cost"
const article = getNewInsightArticle(slug)
export const metadata: Metadata = finalizeMetadata(article ? buildMetadata(article) : {}, `/for-patients/insights/${slug}`)
export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}