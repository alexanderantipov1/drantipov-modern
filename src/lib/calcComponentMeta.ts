/**
 * Presentation-only metadata for DentalPrice funnel components.
 *
 * The DentalPrice dashboard has no field for a "Most Popular" ribbon or for
 * the small fact chips ("Implants: 4 per arch", "Timeline: Same day") that we
 * want to show under an option, so they live here, keyed by the stable
 * DentalPrice component id. Purely cosmetic: nothing here affects pricing,
 * selection logic, or the total. Components without an entry render exactly
 * as before.
 *
 * Content mirrors the practice's own presentation on fullarchcenter.ai.
 */

import type { FunnelLocale } from "@/lib/calcTranslations";

interface Fact {
  /** Short label, e.g. "Implants" */
  label: { en: string; ru: string };
  /** Short value, e.g. "4 per arch" */
  value: { en: string; ru: string };
}

export interface ComponentMeta {
  /** Renders a highlighted ribbon above the option title. */
  badge?: { en: string; ru: string };
  /** Small chips shown under the description. */
  facts?: Fact[];
}

const META: Record<string, ComponentMeta> = {
  // All-on-4/6/8 package -> Implant Selection
  comp_1756938242473: {
    badge: { en: "Most Popular", ru: "Выбирают чаще всего" },
    facts: [
      { label: { en: "Implants", ru: "Импланты" }, value: { en: "4 per arch", ru: "4 на челюсть" } },
      { label: { en: "Timeline", ru: "Сроки" }, value: { en: "Same day", ru: "За один день" } },
    ],
  },
  comp_1756938250306: {
    facts: [
      { label: { en: "Implants", ru: "Импланты" }, value: { en: "6 per arch", ru: "6 на челюсть" } },
      { label: { en: "Timeline", ru: "Сроки" }, value: { en: "Same day", ru: "За один день" } },
    ],
  },
  // Snap-in Denture package -> Prosthesis Options
  comp_1784587912428: {
    facts: [
      { label: { en: "Implants", ru: "Импланты" }, value: { en: "2-4 per arch", ru: "2-4 на челюсть" } },
      { label: { en: "Timeline", ru: "Сроки" }, value: { en: "2-3 months", ru: "2-3 месяца" } },
    ],
  },
  // Single Implant package -> Implant Selection
  comp_1755622753414: {
    facts: [
      { label: { en: "Implants", ru: "Импланты" }, value: { en: "1", ru: "1" } },
      { label: { en: "Timeline", ru: "Сроки" }, value: { en: "3-6 months", ru: "3-6 месяцев" } },
    ],
  },
};

export function getComponentMeta(id: string): ComponentMeta | undefined {
  return META[id];
}

/** Picks the locale-specific string from a { en, ru } pair. */
export function pick(v: { en: string; ru: string }, locale: FunnelLocale): string {
  return locale === "ru" ? v.ru : v.en;
}
