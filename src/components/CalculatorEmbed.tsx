import CalculatorPackages from "@/components/CalculatorPackages";
import type { FunnelLocale } from "@/lib/calcTranslations";

/**
 * Cost calculator embedded into a page about ONE treatment.
 *
 * Opens straight into that package's funnel: no four-card grid, no back
 * control (see CalculatorPackages' `initialSlug` - the visitor must stay on the
 * treatment the page is about). Prices are live from DentalPrice; nothing is
 * hard-coded here.
 *
 * The funnel renders its own hero band with its own tagline ("answer a few quick
 * questions..."), so the copy above it must NOT repeat that pitch - it says what
 * the block is instead.
 */

export type CalcSlug = "all-on-468-per-arch" | "zirconia-teeth" | "snap-in-denture" | "single-implant";

const COPY: Record<CalcSlug, { en: string; ru: string }> = {
  "all-on-468-per-arch": {
    en: "Estimate your All-on-X cost",
    ru: "Рассчитайте стоимость All-on-X",
  },
  "zirconia-teeth": {
    en: "Estimate your final teeth cost",
    ru: "Рассчитайте стоимость финальных зубов",
  },
  "snap-in-denture": {
    en: "Estimate your snap-on denture cost",
    ru: "Рассчитайте стоимость съёмного протеза",
  },
  "single-implant": {
    en: "Estimate your single implant cost",
    ru: "Рассчитайте стоимость одиночного импланта",
  },
};

const KICKER = { en: "Instant estimate", ru: "Мгновенный расчёт" } as const;

const SUB = {
  en: "Prices here are live from our treatment planner - tick what applies to your case and the total updates as you go.",
  ru: "Цены здесь актуальные - отмечайте то, что относится к вашему случаю, и сумма пересчитывается на ходу.",
} as const;

export default function CalculatorEmbed({
  slug,
  locale = "en",
}: {
  slug: CalcSlug;
  locale?: FunnelLocale;
}) {
  return (
    <section className="bg-light py-10 lg:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-600">{KICKER[locale]}</p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {COPY[slug][locale]}
          </h2>
          <p className="mt-4 text-base text-neutral-600">{SUB[locale]}</p>
        </div>
        <div className="mt-6">
          <CalculatorPackages locale={locale} initialSlug={slug} />
        </div>
      </div>
    </section>
  );
}
