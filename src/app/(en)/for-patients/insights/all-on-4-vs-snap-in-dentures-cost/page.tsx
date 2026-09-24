import { finalizeMetadata } from "@/lib/seo-foundation";
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getGuideArticle, buildMetadata } from "@/constants/guideArticles"

const article = getGuideArticle("all-on-4-vs-snap-in-dentures-cost")

export const metadata: Metadata = finalizeMetadata(article ? buildMetadata(article) : {}, "/for-patients/insights/all-on-4-vs-snap-in-dentures-cost")

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}
