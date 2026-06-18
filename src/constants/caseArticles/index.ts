import type { CaseArticle } from "@/constants/cases"
import { correctiveJawSurgeryArticles } from "./correctiveJawSurgery"
import { dentalImplantsArticles } from "./dentalImplants"
import { facialCosmeticSurgeryArticles } from "./facialCosmeticSurgery"

/**
 * All blog-style case write-ups, keyed by case `id`.
 * Look up with caseArticles[caseData.id]; may be undefined if a case has no
 * article yet (the detail page falls back to the documented summary).
 */
export const caseArticles: Record<string, CaseArticle> = {
  ...correctiveJawSurgeryArticles,
  ...dentalImplantsArticles,
  ...facialCosmeticSurgeryArticles,
}
