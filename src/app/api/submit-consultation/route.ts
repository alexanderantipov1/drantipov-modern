import { NextRequest, NextResponse } from "next/server"

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
  try {
    const body = await request.json()

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

    sanitizedData["businessUnit"] = "Fusion Dental Implants"
    sanitizedData["business_unit"] = "Fusion Dental Implants"
    sanitizedData["landing_page"] = "Drantipov.com"

    console.log("[Submit] Sending consultation request with", Object.keys(sanitizedData).length, "fields")

    const payload = JSON.stringify(sanitizedData)

    const response = await fetch(SALESFORCE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    })

    const responseText = await response.text()
    console.log("[Submit] Salesforce response status:", response.status)
    console.log("[Submit] Salesforce response body:", responseText)

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
    console.error("API proxy error:", error)
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
