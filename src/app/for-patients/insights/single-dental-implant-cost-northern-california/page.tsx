import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getGuideArticle, buildMetadata } from "@/constants/guideArticles"

const article = getGuideArticle("single-dental-implant-cost-northern-california")

export const metadata: Metadata = article ? buildMetadata(article) : {}

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} calculatorSlug="single-implant" />
}
