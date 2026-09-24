import { finalizeMetadata } from "@/lib/seo-foundation";
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getRevisionArticle, buildMetadata } from "@/constants/revisionArticles"

const article = getRevisionArticle("correcting-bite-problems-after-implant-work")

export const metadata: Metadata = finalizeMetadata(article ? buildMetadata(article) : {}, "/for-patients/insights/correcting-bite-problems-after-implant-work")

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}
