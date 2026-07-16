import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getGuideArticle, buildMetadata } from "@/constants/guideArticles"

const article = getGuideArticle("teeth-in-a-day-same-day-smile-restoration")

export const metadata: Metadata = article ? buildMetadata(article) : {}

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}
