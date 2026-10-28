import { finalizeMetadata } from "@/lib/seo-foundation"
import { InsightArticle } from "@/components/InsightArticle"
import { getRuToothReplacementArticle } from "@/constants/ruToothReplacementArticles"
import { notFound } from "next/navigation"

const slug = "what-happens-if-missing-tooth-not-replaced"
const article = getRuToothReplacementArticle(slug)
export const metadata = finalizeMetadata({
  title: { absolute: article!.metaTitle },
  description: article!.metaDescription,
  openGraph: { title: article!.metaTitle, description: article!.metaDescription, type: "article", locale: "ru_RU", images: [article!.image] },
}, `/ru/for-patients/insights/${slug}`)
export default function Page() {
  if (!article) notFound()
  return <InsightArticle article={article} locale="ru" />
}
