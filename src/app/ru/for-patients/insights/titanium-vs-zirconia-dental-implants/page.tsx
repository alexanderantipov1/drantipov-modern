import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getGuideArticle, buildMetadata } from "@/constants/ruGuideArticles"

const article = getGuideArticle("titanium-vs-zirconia-dental-implants")

export const metadata: Metadata = article ? buildMetadata(article) : {}

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} locale="ru" />
}
