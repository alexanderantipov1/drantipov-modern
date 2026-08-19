/**
 * DentalPrice AI - "Smile Widget" configuration.
 *
 * The public key is embeddable by design (it ships in the page markup), so it is
 * NOT a secret. SDK docs: https://dentalprice.ai/resources/ai-smile/integration-guide/
 *
 * Salesforce delivery is handled NATIVELY by DentalPrice (Integrations → Salesforce),
 * so we do not POST leads ourselves - onLeadSubmitted is only used for analytics.
 */

export const SMILE_WIDGET_PUBLIC_KEY =
  "5B5MoKtBxy2Pds5ClVWwpITmAFE3vQ0kLm92d3cCj7w";

export const SMILE_WIDGET_SDK_SRC = "https://smile.dentalprice.ai/widget.js";

export const SMILE_WIDGET_ORIGIN = "https://smile.dentalprice.ai";

/**
 * Widget UI language.
 *
 * DentalPrice currently ships EN/ES/PT/TR only - Russian is being added by their
 * team. Until then we intentionally show the ENGLISH widget on BOTH the English
 * and the /ru versions of the site. When Russian is enabled, either:
 *   (a) set this to "ru" for the whole site, or
 *   (b) switch getSmileLang() below to return "ru" for the RU locale.
 * Keeping it in one place makes that a one-line change.
 */
export const SMILE_WIDGET_DEFAULT_LANG = "en";
export const SMILE_WIDGET_RU_ENABLED = true; // RU shipped by DentalPrice (locale param)

export type SmileLocale = "en" | "ru";

/** Resolve the widget language for a given site locale. */
export function getSmileLang(locale: SmileLocale): string {
  if (locale === "ru" && SMILE_WIDGET_RU_ENABLED) return "ru";
  return SMILE_WIDGET_DEFAULT_LANG;
}
