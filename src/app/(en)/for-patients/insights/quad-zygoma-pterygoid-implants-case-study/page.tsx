import { finalizeMetadata } from "@/lib/seo-foundation"
import { InsightArticle } from "@/components/InsightArticle"
import { buildMetadata } from "@/constants/revisionArticles"
import { zygomaticVideoArticle as article } from "@/constants/zygomaticVideoArticle"

export const metadata = finalizeMetadata(
  buildMetadata(article),
  `/for-patients/insights/${article.slug}`,
)

export default function Page() {
  return <InsightArticle article={article} />
}
