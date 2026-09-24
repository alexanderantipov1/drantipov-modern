import { finalizeMetadata } from "@/lib/seo-foundation";
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getGuideArticle, buildMetadata } from "@/constants/guideArticles"

const article = getGuideArticle("teeth-in-a-day-same-day-smile-restoration")

export const metadata: Metadata = finalizeMetadata(article ? buildMetadata(article) : {}, "/for-patients/insights/teeth-in-a-day-same-day-smile-restoration")

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}
