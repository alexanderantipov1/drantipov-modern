import { NextRequest, NextResponse } from "next/server"
import { consultationFormSchema } from "@/lib/validations/consultation"
import {
  sendConsultationNotification,
  sendConsultationConfirmation,
  isEmailConfigured,
} from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

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
    console.error("Consultation form error:", error)

    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 400 }
    )
  }
}
