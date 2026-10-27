import { finalizeMetadata } from "@/lib/seo-foundation"
import { notFound } from "next/navigation"
import { InsightArticle } from "@/components/InsightArticle"
import { getPatientDecisionArticle, buildMetadata } from "@/constants/patientDecisionArticles"

const slug = "failing-dental-bridge-replacement-cost"
const article = getPatientDecisionArticle(slug)
export const metadata = finalizeMetadata(article ? buildMetadata(article) : {}, `/for-patients/insights/${slug}`)
export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} />
}
