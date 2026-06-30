import { NextRequest, NextResponse } from "next/server"
import { checkRateLimit } from "@/lib/rate-limit"
import { consultationFormSchema } from "@/lib/validations/consultation"
import { verifyRecaptcha } from "@/lib/recaptcha"
import {
  sendConsultationNotification,
  sendConsultationConfirmation,
  isEmailConfigured,
} from "@/lib/email"

export async function POST(request: NextRequest) {
  const rl = await checkRateLimit(request, { prefix: "consultation", max: 10, windowMs: 60_000 });
  if (rl) return rl;

  try {
    const body = await request.json()

    // Server-side reCAPTCHA verification (don't trust client-side alone)
    const recaptchaResult = await verifyRecaptcha(body?.recaptchaToken)
    if (!recaptchaResult.valid) {
      return NextResponse.json(
        { error: "Anti-bot verification failed. Please refresh and try again." },
        { status: 403 }
      )
    }

    // Validate the request body
    const validatedData = consultationFormSchema.parse(body)

    // Check honeypot field - if filled, it's likely a bot
    if (validatedData.website && validatedData.website.length > 0) {
      // Return success to not reveal the honeypot to bots
      return NextResponse.json(
        { message: "Request received successfully" },
        { status: 200 }
      )
    }

    // Prepare email data (exclude honeypot field)
    const emailData = {
      firstName: validatedData.firstName,
      lastName: validatedData.lastName,
      email: validatedData.email,
      phone: validatedData.phone,
      interest: validatedData.interest,
      preferredContact: validatedData.preferredContact,
      message: validatedData.message,
    }

    // Send emails if configured
    if (isEmailConfigured()) {
      // Send notification to admin
      const notificationResult = await sendConsultationNotification(
        emailData,
        {
          referer: request.headers.get('referer') || undefined,
          ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined,
          userAgent: request.headers.get('user-agent') || undefined,
        }
      )

      if (!notificationResult.success) {
        console.error('Failed to send admin notification:', notificationResult.error)
      }

      // Send confirmation to patient
      const confirmationResult = await sendConsultationConfirmation(emailData)

      if (!confirmationResult.success) {
        console.error('Failed to send patient confirmation:', confirmationResult.error)
      }
    }

    return NextResponse.json(
      { message: "Consultation request submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Consultation form error:", error instanceof Error ? error.message : "Unknown error")

    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 400 }
    )
  }
}
