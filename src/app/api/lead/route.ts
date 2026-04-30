import { NextRequest, NextResponse } from "next/server";
import { isEmailConfigured, sendContactNotification } from "@/lib/email";

export const runtime = "nodejs";

const SF_ENDPOINT =
  "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";

const MIN_FILL_MS = 800;

interface LeadPayload {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  treatment?: string;
  timing?: string;
  contactPreference?: string;
  message?: string;
  lang?: string;
  landing_path?: string;
  landing_url?: string;
  first_landing_page?: string;
  current_page?: string;
  website?: string;
  started_at?: string;
  time_on_page?: string;
  form_variant?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  utm_id?: string;
  utm_location?: string;
  utm_adgroup?: string;
  utm_creative?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  msclkid?: string;
  ttclid?: string;
  campaign_id?: string;
  adset_id?: string;
  ad_id?: string;
  creative?: string;
  session_id?: string;
  client_id?: string;
  device_type?: string;
  referrer?: string;
  source?: string;
}

function splitName(full: string): { first: string; last: string } {
  const parts = full.trim().split(/\s+/).filter(Boolean);
  const first = parts[0] ?? "";
  if (parts.length <= 1) return { first: "", last: first || "Unknown" };
  return { first, last: parts.slice(1).join(" ") };
}

function buildDescription(data: LeadPayload, geo: string): string {
  return [
    data.treatment ? `Treatment interest: ${data.treatment}` : null,
    data.city ? `City: ${data.city}` : null,
    geo ? `Geo (IP): ${geo}` : null,
    data.timing ? `Timing: ${data.timing}` : null,
    data.contactPreference ? `Preferred contact: ${data.contactPreference}` : null,
    data.lang ? `Language: ${data.lang}` : null,
    data.form_variant ? `Form variant: ${data.form_variant}` : null,
    data.utm_source ? `UTM source: ${data.utm_source}` : null,
    data.utm_medium ? `UTM medium: ${data.utm_medium}` : null,
    data.utm_campaign ? `UTM campaign: ${data.utm_campaign}` : null,
    data.utm_content ? `UTM content: ${data.utm_content}` : null,
    data.utm_term ? `UTM term: ${data.utm_term}` : null,
    data.utm_id ? `UTM id: ${data.utm_id}` : null,
    data.utm_location ? `UTM location: ${data.utm_location}` : null,
    data.utm_adgroup ? `UTM adgroup: ${data.utm_adgroup}` : null,
    data.utm_creative ? `UTM creative: ${data.utm_creative}` : null,
    data.gclid ? `GCLID: ${data.gclid}` : null,
    data.gbraid ? `GBRAID: ${data.gbraid}` : null,
    data.wbraid ? `WBRAID: ${data.wbraid}` : null,
    data.fbclid ? `FBCLID: ${data.fbclid}` : null,
    data.msclkid ? `MSCLKID: ${data.msclkid}` : null,
    data.ttclid ? `TTCLID: ${data.ttclid}` : null,
    data.campaign_id ? `Campaign ID: ${data.campaign_id}` : null,
    data.adset_id ? `Ad set ID: ${data.adset_id}` : null,
    data.ad_id ? `Ad ID: ${data.ad_id}` : null,
    data.creative ? `Creative: ${data.creative}` : null,
    data.referrer ? `Referrer: ${data.referrer}` : null,
    data.landing_path ? `Landing path: ${data.landing_path}` : null,
    data.landing_url ? `Landing URL: ${data.landing_url}` : null,
    data.first_landing_page ? `First landing page: ${data.first_landing_page}` : null,
    data.current_page ? `Current page: ${data.current_page}` : null,
    data.time_on_page ? `Time on page (ms): ${data.time_on_page}` : null,
    data.session_id ? `Session ID: ${data.session_id}` : null,
    data.client_id ? `Client ID: ${data.client_id}` : null,
    data.device_type ? `Device: ${data.device_type}` : null,
    data.message ? `\n${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

async function postToSalesforce(
  data: LeadPayload,
  description: string,
  oid: string,
): Promise<{ ok: boolean; status?: number; body?: string }> {
  const { first, last } = splitName(data.name ?? "");
  const params = new URLSearchParams();
  params.set("oid", oid);
  if (first) params.set("first_name", first);
  params.set("last_name", last || "Unknown");
  if (data.email) params.set("email", data.email);
  if (data.phone) params.set("phone", data.phone);
  params.set(
    "lead_source",
    data.utm_source?.trim() || data.source?.trim() || "Website Lead",
  );
  params.set("company", "Individual");
  params.set("description", description);

  const debug = process.env.SALESFORCE_DEBUG_EMAIL;
  if (debug) {
    params.set("debug", "1");
    params.set("debugEmail", debug);
  }

  try {
    const res = await fetch(SF_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });
    if (!res.ok) {
      return { ok: false, status: res.status, body: await res.text() };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, body: err instanceof Error ? err.message : String(err) };
  }
}

async function postToResend(
  data: LeadPayload,
  description: string,
): Promise<{ ok: boolean; reason?: string }> {
  if (!isEmailConfigured()) return { ok: false, reason: "not_configured" };
  const { first, last } = splitName(data.name ?? "");
  const subject = data.lang === "ru"
    ? `[RU] ${data.treatment || "Заявка"} — ${data.city || "?"}`
    : `Lead: ${data.treatment || "Inquiry"} — ${data.city || "?"}`;
  try {
    const result = await sendContactNotification({
      name: `${first} ${last}`.trim() || "Unknown",
      email: data.email || "no-reply@drantipov.com",
      phone: data.phone,
      subject,
      message: description,
    });
    if (result.success) return { ok: true };
    return { ok: false, reason: result.message ?? "send_failed" };
  } catch (err) {
    return { ok: false, reason: err instanceof Error ? err.message : String(err) };
  }
}

export async function POST(request: NextRequest) {
  let data: LeadPayload;
  try {
    data = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  // Honeypot
  if (data.website && data.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Min-fill spam guard
  const startedAt = Number(data.started_at);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  const geoCity = request.headers.get("x-vercel-ip-city") ?? "";
  const geoRegion = request.headers.get("x-vercel-ip-country-region") ?? "";
  const geoCountry = request.headers.get("x-vercel-ip-country") ?? "";
  const geo = [geoCity, geoRegion, geoCountry].filter(Boolean).join(", ");

  const description = buildDescription(data, geo);

  const oid = process.env.SALESFORCE_ORG_ID;
  const sf = oid
    ? await postToSalesforce(data, description, oid)
    : { ok: false as const, status: 0, body: "salesforce_not_configured" };

  // Always try Resend in addition (so leads land in inbox even when SF works,
  // and especially when SF isn't configured yet). Only skips silently if
  // RESEND_API_KEY isn't set.
  const email = await postToResend(data, description);

  if (sf.ok || email.ok) {
    if (!sf.ok && oid) {
      console.error("[lead] Salesforce failed but email backup sent", sf.status, sf.body);
    }
    if (!email.ok && email.reason !== "not_configured") {
      console.warn("[lead] Email backup failed", email.reason);
    }
    return NextResponse.json({
      ok: true,
      delivered: { salesforce: sf.ok, email: email.ok },
    });
  }

  // Both attempts failed (or both unconfigured). Log the full payload so the
  // operator can recover the lead from Vercel logs.
  console.error("[lead] All delivery paths failed; lead in logs only", {
    sf: { configured: !!oid, status: sf.status, body: sf.body },
    email: { configured: isEmailConfigured(), reason: email.reason },
    data,
  });

  // Critical decision: still return ok=true to the user so the form shows
  // success — the lead is captured in Vercel function logs and the operator
  // can wire up Salesforce/Resend retroactively. Better than the user thinking
  // their submission failed and abandoning.
  return NextResponse.json({
    ok: true,
    delivered: { salesforce: false, email: false },
    note: "logged_only",
  });
}
