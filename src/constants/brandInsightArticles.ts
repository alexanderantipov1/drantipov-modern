import type { RevisionArticle } from "./revisionArticles"
import { article as source1 } from "./brandInsightArticles/source-1"
import { article as source2 } from "./brandInsightArticles/source-2"
import { article as source3 } from "./brandInsightArticles/source-3"
import { article as source4 } from "./brandInsightArticles/source-4"
import { article as source5 } from "./brandInsightArticles/source-5"
import { article as source6 } from "./brandInsightArticles/source-6"
import { article as source7 } from "./brandInsightArticles/source-7"
import { article as source8 } from "./brandInsightArticles/source-8"
import { article as source9 } from "./brandInsightArticles/source-9"

// Keep source content intact. These drafts have not been clinically reviewed;
// publication must not imply doctor authorship or an approved clinical review.
export const brandInsightArticles: RevisionArticle[] = [
  source1, source2, source3, source4, source5, source6, source7, source8, source9,
].map((article) => ({
  ...article,
  author: "Dr. Antipov Practice Editorial Team",
  editorialReviewPending: true,
}))

export { buildMetadata } from "./revisionArticles"

export function getBrandInsightArticle(slug: string): RevisionArticle | undefined {
  return brandInsightArticles.find((article) => article.slug === slug)
}
