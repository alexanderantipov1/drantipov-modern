import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getRevisionArticle, buildMetadata } from "@/constants/ruRevisionArticles"

const article = getRevisionArticle("can-a-loose-dental-implant-be-saved")

export const metadata: Metadata = article ? buildMetadata(article) : {}

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} locale="ru" />
}
