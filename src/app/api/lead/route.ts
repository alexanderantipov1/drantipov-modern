import { NextRequest, NextResponse } from "next/server";

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
  website?: string;
  started_at?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  source?: string;
}

function splitName(full: string): { first: string; last: string } {
  const parts = full.trim().split(/\s+/).filter(Boolean);
  const first = parts[0] ?? "";
  if (parts.length <= 1) return { first: "", last: first || "Unknown" };
  return { first, last: parts.slice(1).join(" ") };
}

export async function POST(request: NextRequest) {
  const data = (await request.json()) as LeadPayload;

  if (data.website && data.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const startedAt = Number(data.started_at);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  const oid = process.env.SALESFORCE_ORG_ID;
  if (!oid) {
    console.error("[lead] SALESFORCE_ORG_ID not set; dropping lead", data);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const geoCity = request.headers.get("x-vercel-ip-city") ?? "";
  const geoRegion = request.headers.get("x-vercel-ip-country-region") ?? "";
  const geoCountry = request.headers.get("x-vercel-ip-country") ?? "";
  const geo = [geoCity, geoRegion, geoCountry].filter(Boolean).join(", ");

  const { first, last } = splitName(data.name ?? "");
  const params = new URLSearchParams();
  params.set("oid", oid);
  if (first) params.set("first_name", first);
  params.set("last_name", last || "Unknown");
  if (data.email) params.set("email", data.email);
  if (data.phone) params.set("phone", data.phone);
  params.set("lead_source", data.utm_source?.trim() || data.source?.trim() || "Website Lead");
  params.set("company", "Individual");
  params.set(
    "description",
    [
      data.treatment ? `Treatment interest: ${data.treatment}` : null,
      data.city ? `City: ${data.city}` : null,
      geo ? `Geo (IP): ${geo}` : null,
      data.timing ? `Timing: ${data.timing}` : null,
      data.contactPreference ? `Preferred contact: ${data.contactPreference}` : null,
      data.lang ? `Language: ${data.lang}` : null,
      data.utm_medium ? `UTM medium: ${data.utm_medium}` : null,
      data.utm_campaign ? `UTM campaign: ${data.utm_campaign}` : null,
      data.utm_content ? `UTM content: ${data.utm_content}` : null,
      data.utm_term ? `UTM term: ${data.utm_term}` : null,
      data.referrer ? `Referrer: ${data.referrer}` : null,
      data.landing_path ? `Landing path: ${data.landing_path}` : null,
      data.message ? `\n${data.message}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  const debug = process.env.SALESFORCE_DEBUG_EMAIL;
  if (debug) {
    params.set("debug", "1");
    params.set("debugEmail", debug);
  }

  const sfRes = await fetch(SF_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  if (!sfRes.ok) {
    console.error(
      "[lead] Salesforce rejected lead",
      sfRes.status,
      await sfRes.text(),
    );
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
