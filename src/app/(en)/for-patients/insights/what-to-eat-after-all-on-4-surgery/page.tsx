import { finalizeMetadata } from "@/lib/seo-foundation";
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getGuideArticle, buildMetadata } from "@/constants/guideArticles"

const article = getGuideArticle("what-to-eat-after-all-on-4-surgery")

export const metadata: Metadata = finalizeMetadata(article ? buildMetadata(article) : {}, "/for-patients/insights/what-to-eat-after-all-on-4-surgery")

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}
