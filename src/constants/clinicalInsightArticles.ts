import type { RevisionArticle } from "./revisionArticles"
import { article as source1 } from "./clinicalInsightArticles/source-1"
import { article as source2 } from "./clinicalInsightArticles/source-2"
import { article as source3 } from "./clinicalInsightArticles/source-3"
import { article as source4 } from "./clinicalInsightArticles/source-4"
import { article as source5 } from "./clinicalInsightArticles/source-5"
import { article as source6 } from "./clinicalInsightArticles/source-6"
import { article as source7 } from "./clinicalInsightArticles/source-7"

// Authorship is explicitly requested; it does not attest to clinical review.
// Preserve each source draft's content and keep review status independent.
export const clinicalInsightArticles: RevisionArticle[] = [
  source1, source2, source3, source4, source5, source6, source7,
].map((article) => ({
  ...article,
  author: "Dr. Alexander V. Antipov, DDS",
  authorAttribution: { type: "Person" as const, name: "Dr. Alexander V. Antipov, DDS", url: "/about" },
  editorialReviewPending: true,
}))

export { buildMetadata } from "./revisionArticles"

export function getClinicalInsightArticle(slug: string): RevisionArticle | undefined {
  return clinicalInsightArticles.find((article) => article.slug === slug)
}
