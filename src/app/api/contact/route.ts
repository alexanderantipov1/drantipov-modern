import { NextRequest, NextResponse } from "next/server"
import { checkRateLimit } from "@/lib/rate-limit"
import { contactFormSchema } from "@/lib/validations/contact"
import { sendContactNotification, isEmailConfigured } from "@/lib/email"

export async function POST(request: NextRequest) {
  const rl = checkRateLimit(request, { prefix: "contact", max: 10, windowMs: 60_000 });
  if (rl) return rl;

  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactFormSchema.parse(body)


    // Send email notification
    if (isEmailConfigured()) {
      const emailResult = await sendContactNotification({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.isReferringDentist 
          ? `[Dentist Referral] ${validatedData.subject}`
          : validatedData.subject,
        message: validatedData.message,
      })

      if (!emailResult.success) {
        console.error("Failed to send email notification:", emailResult)
      }
    } else {
      console.warn("Email service not configured - submission logged but not emailed")
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error instanceof Error ? error.message : "Unknown error")

    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 400 }
    )
  }
}
