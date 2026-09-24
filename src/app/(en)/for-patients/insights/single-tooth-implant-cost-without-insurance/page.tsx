import { finalizeMetadata } from "@/lib/seo-foundation";
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getGuideArticle, buildMetadata } from "@/constants/guideArticles"

const article = getGuideArticle("single-tooth-implant-cost-without-insurance")

export const metadata: Metadata = finalizeMetadata(article ? buildMetadata(article) : {}, "/for-patients/insights/single-tooth-implant-cost-without-insurance")

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}
