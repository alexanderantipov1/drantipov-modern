import { finalizeMetadata } from "@/lib/seo-foundation";
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getRevisionArticle, buildMetadata } from "@/constants/revisionArticles"

const article = getRevisionArticle("replacing-a-failed-dental-implant-what-to-expect")

export const metadata: Metadata = finalizeMetadata(article ? buildMetadata(article) : {}, "/for-patients/insights/replacing-a-failed-dental-implant-what-to-expect")

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}
