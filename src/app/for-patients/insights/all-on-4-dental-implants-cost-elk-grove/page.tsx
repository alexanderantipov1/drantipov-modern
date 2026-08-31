import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getGuideArticle, buildMetadata } from "@/constants/guideArticles"

const article = getGuideArticle("all-on-4-dental-implants-cost-elk-grove")

export const metadata: Metadata = article ? buildMetadata(article) : {}

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}
