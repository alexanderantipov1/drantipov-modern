import { finalizeMetadata } from "@/lib/seo-foundation";
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getRevisionArticle, buildMetadata } from "@/constants/ruRevisionArticles"

const article = getRevisionArticle("redoing-dental-implants-done-abroad-recovery-plan")

export const metadata: Metadata = finalizeMetadata(article ? buildMetadata(article) : {}, "/ru/for-patients/insights/redoing-dental-implants-done-abroad-recovery-plan")

export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} locale="ru" />
}
