import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { verifyRecaptcha } from "@/lib/recaptcha";

const SALESFORCE_API_URL = "https://api.fusiondentalimplants.com/api/v1/user-data"

const ALLOWED_FIELDS = new Set([
  "firstName", "lastName", "email", "phone", "dob",
  "streetAddress", "addressLine2", "city", "state", "zip",
  "paymentOptions", "ficoScore",
  "damagedTeeth", "missingTeeth", "gumDisease", "currentSmileNone",
  "currentSolutionsNone", "currentSolutionsImplants",
  "currentSolutionsBridgesCrowns", "currentSolutionsDentures",
  "recaptchaToken", "appointmentDate", "appointmentTime", "assignedCenter",
  "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term",
  "utm_id", "utm_location", "utm_adgroup", "utm_creative",
  "gclid", "fbclid", "device_type", "referral_source", "landing_page",
  "session_id", "client_id", "current_page", "referrer",
  "consent_ad_storage", "consent_analytics_storage",
  "consent_functionality_storage", "consent_personalization_storage",
  "consent_security_storage",
  "business_unit", "businessUnit",
])

export async function POST(request: NextRequest) {
  const rl = checkRateLimit(request, { prefix: "submit-consultation", max: 10, windowMs: 60_000 });
  if (rl) return rl;

  try {
    const body = await request.json()

    
    // Server-side reCAPTCHA verification (don't trust client-side validation alone)
    const recaptchaResult = await verifyRecaptcha(body?.recaptchaToken);
    if (!recaptchaResult.valid) {
      return NextResponse.json(
        { error: "Anti-bot verification failed. Please refresh and try again." },
        { status: 403 }
      );
    }
if (!body.firstName || !body.lastName || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      )
    }

    const sanitizedData: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(body)) {
      if (ALLOWED_FIELDS.has(key)) {
        if (value !== undefined && value !== null && value !== "") {
          sanitizedData[key] = value
        }
      }
    }

    // Upstream API rejects formatted phone numbers like "(916) 790-9693";
    // it only accepts plain digits (e.g. "9167909693") or E.164 ("+1916...").
    if (typeof sanitizedData["phone"] === "string") {
      const digits = (sanitizedData["phone"] as string).replace(/\D/g, "")
      const normalized =
        digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits
      if (normalized.length !== 10) {
        return NextResponse.json(
          { success: false, message: "Please enter a valid 10-digit phone number." },
          { status: 400 }
        )
      }
      sanitizedData["phone"] = normalized
    }

    sanitizedData["businessUnit"] = "Fusion Dental Implants"
    sanitizedData["business_unit"] = "Fusion Dental Implants"
    sanitizedData["landing_page"] = "Drantipov.com"

    // Development/preview only: the reCAPTCHA site key is domain-locked to
    // drantipov.com, so no token can be generated on dev/preview hosts and the
    // upstream API would reject every submission. Accept the submission locally
    // instead of forwarding it, so the form flow can be tested end-to-end.
    // Production behavior is unchanged.
    if (process.env.NODE_ENV !== "production" && !sanitizedData["recaptchaToken"]) {
      console.warn(
        "[submit-consultation] Dev mode: no reCAPTCHA token (domain-locked key); skipping upstream submission. Lead NOT sent to Salesforce.",
      )
      return NextResponse.json({ success: true, dev: true })
    }


    const payload = JSON.stringify(sanitizedData)

    const response = await fetch(SALESFORCE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    })

    const responseText = await response.text()

    let data
    try {
      data = JSON.parse(responseText)
    } catch {
      data = null
    }

    return NextResponse.json(
      data || { success: response.ok },
      { status: response.status }
    )
  } catch (error) {
    console.error("API proxy error:", error instanceof Error ? error.message : "Unknown error")
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
