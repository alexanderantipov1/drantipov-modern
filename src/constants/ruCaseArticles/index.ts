import type { CaseArticle } from "@/constants/cases"
import { dentalImplantsArticles } from "./dentalImplants"
import { correctiveJawSurgeryArticles } from "./correctiveJawSurgery"
import { facialCosmeticSurgeryArticles } from "./facialCosmeticSurgery"

/**
 * RU blog-style case write-ups, keyed by case `id`.
 * Mirror of constants/caseArticles for the /ru/* surgical case pages.
 */
export const caseArticles: Record<string, CaseArticle> = {
  ...dentalImplantsArticles,
  ...correctiveJawSurgeryArticles,
  ...facialCosmeticSurgeryArticles,
}
