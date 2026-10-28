import type { RevisionArticle } from "./revisionArticles"
import { bridgeArticle } from "./ruToothReplacementArticles/bridge"
import { missingToothArticle } from "./ruToothReplacementArticles/missing-tooth"

export type RussianToothArticle = Omit<RevisionArticle,
  "author" | "authorAttribution" | "editorialReviewPending" | "date" | "datePublished" | "tldr">

export const ruToothReplacementArticles: RevisionArticle[] = [
  bridgeArticle, missingToothArticle,
].map(article => ({
  ...article,
  date: "27 октября 2026",
  datePublished: "2026-10-27",
  author: "Доктор Александр Антипов, DDS",
  authorAttribution: { type: "Person" as const, name: "Доктор Александр Антипов, DDS", url: "/ru/about" },
  editorialReviewPending: true,
  tldr: [],
}))

export function getRuToothReplacementArticle(slug: string) {
  return ruToothReplacementArticles.find(article => article.slug === slug)
}
