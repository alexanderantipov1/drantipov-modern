import { finalizeMetadata } from "@/lib/seo-foundation";
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getGuideArticle, buildMetadata } from "@/constants/ruGuideArticles"

const article = getGuideArticle("dental-implants-for-seniors-age-limit")

export const metadata: Metadata = finalizeMetadata(article ? buildMetadata(article) : {}, "/ru/for-patients/insights/dental-implants-for-seniors-age-limit")

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} locale="ru" />
}
