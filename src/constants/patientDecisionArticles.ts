import type { RevisionArticle } from "./revisionArticles"
import { article as bridge } from "./patientDecisionArticles/bridge"
import { article as singleTooth } from "./patientDecisionArticles/single-tooth"
import { article as recovery } from "./patientDecisionArticles/recovery"
import { article as failingTeeth } from "./patientDecisionArticles/failing-teeth"
import { article as grafting } from "./patientDecisionArticles/grafting"
import { article as appearance } from "./patientDecisionArticles/appearance"

export type DecisionArticleContent = Omit<RevisionArticle,
  "date" | "datePublished" | "author" | "authorAttribution" |
  "editorialReviewPending" | "tldr">

export const patientDecisionArticles: RevisionArticle[] = [
  bridge, singleTooth, recovery, failingTeeth, grafting, appearance,
].map(article => ({
  ...article,
  date: "October 27, 2026",
  datePublished: "2026-10-27",
  author: "Dr. Alexander V. Antipov, DDS",
  authorAttribution: {
    type: "Person" as const,
    name: "Dr. Alexander V. Antipov, DDS",
    url: "/about",
  },
  editorialReviewPending: true,
  tldr: [],
}))

export { buildMetadata } from "./revisionArticles"

export function getPatientDecisionArticle(slug: string) {
  return patientDecisionArticles.find(article => article.slug === slug)
}
