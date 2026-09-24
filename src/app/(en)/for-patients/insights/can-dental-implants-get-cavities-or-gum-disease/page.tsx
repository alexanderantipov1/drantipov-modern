import { finalizeMetadata } from "@/lib/seo-foundation";
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getGuideArticle, buildMetadata } from "@/constants/guideArticles"

const article = getGuideArticle("can-dental-implants-get-cavities-or-gum-disease")

export const metadata: Metadata = finalizeMetadata(article ? buildMetadata(article) : {}, "/for-patients/insights/can-dental-implants-get-cavities-or-gum-disease")

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}
