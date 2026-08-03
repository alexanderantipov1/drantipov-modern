/**
 * DentalPrice AI - "AI Forms" cost calculator (SDK integration).
 *
 * Public key is embeddable (ships in page markup) - NOT a secret.
 * SDK docs: admin.dentalprice.ai/docs/forms-sdk
 * Leads flow to Salesforce natively (DentalPrice Integrations); onLeadSubmitted
 * here is only used for optional analytics.
 */

export const CALC_PUBLIC_KEY =
  "wgt_ecd1326c8ddc59504616d10e271815ad9c248d98"; // Fusion widget

export const CALC_SDK_SRC = "https://widget.dentalprice.ai/dentalprice-sdk.js";
export const CALC_ORIGIN = "https://widget.dentalprice.ai";

// Public data API (packages, design, seo). Used server-side by /api/calc-packages.
export const CALC_API_ORIGIN = "https://api.dentalprice.ai";

// The production SDK ships with localhost dev defaults (widgetUrl/apiUrl) - override
// them so the calculator iframe loads from the real widget host.
export const CALC_WIDGET_URL = "https://widget.dentalprice.ai";
export const CALC_API_URL = "https://widget.dentalprice.ai";

/** Package slug opened by default (All-on-4/6/8 per arch). */
export const CALC_DEFAULT_PACKAGE = "all-on-468-per-arch";

/**
 * Modal window styling to match the site palette (navy backdrop, rounded corners).
 * The calculator content itself (forms/colors) is themed in the DentalPrice dashboard.
 */
export const CALC_MODAL = {
  borderRadius: "16px",
  backgroundColor: "#ffffff",
  backdropColor: "rgba(10, 46, 71, 0.72)",
  maxWidth: "1100px",
  width: "95%",
  height: "90vh",
};
