import { finalizeMetadata } from "@/lib/seo-foundation";
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getRevisionArticle, buildMetadata } from "@/constants/revisionArticles"

const article = getRevisionArticle("fixing-a-failed-all-on-4-revision-options")

export const metadata: Metadata = finalizeMetadata(article ? buildMetadata(article) : {}, "/for-patients/insights/fixing-a-failed-all-on-4-revision-options")

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}
