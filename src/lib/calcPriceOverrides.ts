/**
 * Fusion-derived PRICE OVERRIDES.
 *
 * The calculator's prices come from the DentalPrice API (we can't edit the
 * dashboard from code), so these overrides are applied on top of the API
 * price at display/total time, keyed by the stable DentalPrice component id.
 *
 * Scope (confirmed by operator 2026-07-20): transfer prices ONLY for services
 * that exist in BOTH our calculator and Fusion's cost calculator
 * (fusiondentalimplants.com/costs-financing/calculator). Multiple Implants and
 * Thimble Bar are Fusion-only -> not transferred.
 *
 *  - All-on-4 Implant Surgery (Per Jaw) -> Fusion Full Arch base implants "$8,999+"
 *    (starting price; All-on-6 / All-on-8 have no Fusion equivalent, left as-is).
 *  - Standard Single Implant -> Fusion Single Tooth Implant "from $1,850".
 *
 * Zirconia Teeth ($8,999/arch) and Snap-in Denture ($9,999/arch) have NO priced
 * component in the DentalPrice API (their funnels were $0), so those Fusion
 * prices are added as priced base steps in calcSupplementalSteps.ts instead of
 * here.
 */

export const PRICE_OVERRIDES: Record<string, number> = {
  // Empty: prices now live in the DentalPrice dashboard and pull from the API.
  // 2026-07-20: All-on-4 Implant Surgery set to $8,999 and Standard Single Implant
  // to $1,850 directly in DentalPrice (Packages -> Configure Components), so no
  // code override is needed. Add entries here only for a temporary display override.
};

/** Returns the Fusion override price if one exists for this component id, else the original. */
export function overridePrice(id: string, original: number): number {
  return PRICE_OVERRIDES[id] ?? original;
}
