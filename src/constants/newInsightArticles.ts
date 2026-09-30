import type { RevisionArticle } from "./revisionArticles"
import { buildMetadata } from "./revisionArticles"
import { article as source1 } from "./newInsightArticles/source-1"
import { article as source2 } from "./newInsightArticles/source-2"
import { article as source3 } from "./newInsightArticles/source-3"
import { article as source4 } from "./newInsightArticles/source-4"
import { article as source5 } from "./newInsightArticles/source-5"
import { article as source6 } from "./newInsightArticles/source-6"
import { article as source7 } from "./newInsightArticles/source-7"
import { article as source8 } from "./newInsightArticles/source-8"
import { article as source9 } from "./newInsightArticles/source-9"
import { article as source10 } from "./newInsightArticles/source-10"
import { article as source11 } from "./newInsightArticles/source-11"
import { article as source12 } from "./newInsightArticles/source-12"
import { article as source13 } from "./newInsightArticles/source-13"
import { article as source14 } from "./newInsightArticles/source-14"

// The source drafts are intentionally untouched. Clinical review must be
// confirmed separately before removing these editorial-status overrides.
export const newInsightArticles: RevisionArticle[] = [
  source1, source2, source3, source4, source5, source6, source7,
  source8, source9,
  {
    ...source10,
    sections: source10.sections.map((section, index) => index === 0 ? {
      ...section,
      paras: [
        ...(section.paras ?? []),
        [
          "For general implant benefits, risks and follow-up considerations, see the ",
          { text: "FDA's dental implant patient guidance", href: "https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know" },
          "; a new treating clinician still needs to examine your records and circumstances.",
        ],
      ],
    } : section),
  },
  source11, source12, source13, source14,
].map((article) => ({
  ...article,
  author: "Dr. Antipov Practice Editorial Team",
  editorialReviewPending: true,
}))

export { buildMetadata }

export function getNewInsightArticle(slug: string): RevisionArticle | undefined {
  return newInsightArticles.find((article) => article.slug === slug)
}