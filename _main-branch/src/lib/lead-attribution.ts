import { CookieManager } from "@/lib/cookies";

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "utm_location",
  "utm_adgroup",
  "utm_creative",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "ttclid",
  "campaign_id",
  "adset_id",
  "ad_id",
  "creative",
] as const;

type AttributionKey = (typeof ATTRIBUTION_KEYS)[number];

interface LeadAttributionInput {
  startedAt: number;
  landingPath: string;
  formVariant: string;
}

type CookieRecord = Record<string, string | number | undefined>;

function toStringValue(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value);
}

function getDeviceType(): string {
  if (typeof navigator === "undefined") return "";
  const ua = navigator.userAgent.toLowerCase();
  if (/ipad|android(?!.*mobile)|tablet/i.test(ua)) return "Tablet";
  if (/mobile|android|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua)) return "Mobile";
  return "Desktop";
}

export function collectLeadAttribution({
  startedAt,
  landingPath,
  formVariant,
}: LeadAttributionInput): Record<string, string> {
  if (typeof window === "undefined") {
    return {
      landing_path: landingPath,
      started_at: String(startedAt),
      form_variant: formVariant,
    };
  }

  const query = new URLSearchParams(window.location.search);
  const cookies = new CookieManager();
  const marketing = cookies.getJSONCookie<CookieRecord>("_fdi_mkt") || {};
  const firstTouch = cookies.getJSONCookie<CookieRecord>("_fdi_ft") || {};
  const session = cookies.getJSONCookie<CookieRecord>("_fdi_sess") || {};
  const clientId = cookies.getCookie("_fdi_cid") || "";

  const payload: Record<AttributionKey, string> = ATTRIBUTION_KEYS.reduce(
    (acc, key) => {
      acc[key] = query.get(key) || toStringValue(marketing[key]) || toStringValue(firstTouch[key]);
      return acc;
    },
    {} as Record<AttributionKey, string>,
  );

  return {
    ...payload,
    landing_path: landingPath,
    landing_url: window.location.href,
    first_landing_page: toStringValue(firstTouch.landing_page),
    current_page: window.location.href,
    referrer: document.referrer || toStringValue(firstTouch.referral_source),
    started_at: String(startedAt),
    time_on_page: String(Math.max(0, Date.now() - startedAt)),
    form_variant: formVariant,
    session_id: toStringValue(session.session_id),
    client_id: toStringValue(session.client_id) || clientId,
    device_type: getDeviceType(),
  };
}
