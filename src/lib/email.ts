import { Resend } from "resend";

/**
 * Resend Email Service
 *
 * This module provides email functionality using Resend API.
 */

const NOTIFICATION_EMAILS = [
  "tzajfert@fusiondentalimplants.com",
  "marketing@fusiondentalimplants.com",
];

function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export interface ConsultationEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  preferredContact?: string;
  message?: string;
}

/**
 * Check if email service is configured
 */
export function isEmailConfigured(): boolean {
  return !!(
    process.env.RESEND_API_KEY &&
    process.env.RESEND_API_KEY !== "your_resend_api_key_here"
  );
}

/**
 * Send consultation notification to admin
 */
export async function sendConsultationNotification(
  data: ConsultationEmailData,
  metadata?: {
    referer?: string;
    ip?: string;
    userAgent?: string;
  }
) {
  if (!isEmailConfigured()) {
    console.warn("Email service not configured. Skipping email notification.");
    return { success: false, message: "Email service not configured" };
  }

  try {
    const resend = getResendClient();
    if (!resend) {
      return { success: false, message: "Email service not configured" };
    }
    const result = await resend.emails.send({
      from: "Dr. Antipov Website <notifications@drantipov.com>",
      to: NOTIFICATION_EMAILS,
      replyTo: data.email,
      subject: `New Consultation Request: ${data.interest}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #0369a1; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; background-color: #f9fafb; }
              .field { margin-bottom: 15px; }
              .field-label { font-weight: bold; color: #0369a1; }
              .field-value { margin-top: 5px; }
              .footer { margin-top: 20px; padding: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
              .button { display: inline-block; padding: 12px 24px; background-color: #0369a1; color: white; text-decoration: none; border-radius: 6px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Consultation Request</h1>
              </div>

              <div class="content">
                <div class="field">
                  <div class="field-label">Patient Name</div>
                  <div class="field-value">${data.firstName} ${
        data.lastName
      }</div>
                </div>

                <div class="field">
                  <div class="field-label">Email Address</div>
                  <div class="field-value"><a href="mailto:${data.email}">${
        data.email
      }</a></div>
                </div>

                <div class="field">
                  <div class="field-label">Phone Number</div>
                  <div class="field-value"><a href="tel:${data.phone}">${
        data.phone
      }</a></div>
                </div>

                <div class="field">
                  <div class="field-label">Area of Interest</div>
                  <div class="field-value">${data.interest}</div>
                </div>

                ${
                  data.preferredContact
                    ? `
                <div class="field">
                  <div class="field-label">Preferred Contact Method</div>
                  <div class="field-value">${
                    data.preferredContact === "phone" ? "Phone Call" : "Email"
                  }</div>
                </div>
                `
                    : ""
                }

                ${
                  data.message
                    ? `
                <div class="field">
                  <div class="field-label">Additional Message</div>
                  <div class="field-value">${data.message.replace(
                    /\n/g,
                    "<br>"
                  )}</div>
                </div>
                `
                    : ""
                }
              </div>

              <div class="footer">
                <p><strong>Submission Details:</strong></p>
                ${metadata?.referer ? `<p>Page: ${metadata.referer}</p>` : ""}
                ${metadata?.ip ? `<p>IP Address: ${metadata.ip}</p>` : ""}
                ${
                  metadata?.userAgent
                    ? `<p>Browser: ${metadata.userAgent}</p>`
                    : ""
                }
                <p>Time: ${new Date().toLocaleString("en-US", {
                  timeZone: "America/Los_Angeles",
                })} PT</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error("Failed to send consultation notification:", error);
    return { success: false, error };
  }
}

/**
 * Send confirmation email to patient
 */
export async function sendConsultationConfirmation(
  data: ConsultationEmailData
) {
  if (!isEmailConfigured()) {
    console.warn("Email service not configured. Skipping confirmation email.");
    return { success: false, message: "Email service not configured" };
  }

  try {
    const resend = getResendClient();
    if (!resend) {
      return { success: false, message: "Email service not configured" };
    }
    const result = await resend.emails.send({
      from: "Dr. Alexander Antipov <notifications@drantipov.com>",
      to: data.email,
      subject: "Thank You for Your Consultation Request",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #0369a1; color: white; padding: 20px; text-align: center; }
              .content { padding: 30px; background-color: #f9fafb; }
              .footer { margin-top: 20px; padding: 20px; border-top: 1px solid #ddd; background-color: #fff; }
              .contact-info { background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px; }
              .highlight { background-color: #dbeafe; padding: 15px; border-radius: 6px; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Your Interest</h1>
              </div>

              <div class="content">
                <p>Dear ${data.firstName},</p>

                <p>Thank you for contacting Dr. Alexander Antipov's office regarding <strong>${
                  data.interest
                }</strong>.</p>

                <div class="highlight">
                  <p style="margin: 0;"><strong>What happens next?</strong></p>
                  <p style="margin-top: 10px;">Our team will review your request and contact you within <strong>24 business hours</strong>${
                    data.preferredContact
                      ? ` via ${
                          data.preferredContact === "phone"
                            ? "phone call"
                            : "email"
                        }`
                      : ""
                  }.</p>
                </div>

                <p>We look forward to helping you achieve optimal oral health and a confident smile.</p>

                <div class="contact-info">
                  <p><strong>In the meantime, feel free to reach out:</strong></p>
                  <p>
                    📞 Phone: <a href="tel:${
                      process.env.CONTACT_PHONE || "(916) 790-9693"
                    }">${process.env.CONTACT_PHONE || "(916) 790-9693"}</a><br>
                    📧 Email: <a href="mailto:${
                      process.env.CONTACT_EMAIL || "info@drantipov.com"
                    }">${
        process.env.CONTACT_EMAIL || "info@drantipov.com"
      }</a><br>
                    🏥 Office: 911 Reserve Dr Ste 150, Roseville, CA 95678
                  </p>
                </div>
              </div>

              <div class="footer">
                <p style="margin: 0; color: #666; font-size: 14px; text-align: center;">
                  Dr. Alexander Antipov<br>
                  Board-Certified Oral & Maxillofacial Surgeon<br>
                  Northern California's Premier Oral Surgery Practice
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
    return { success: false, error };
  }
}

/**
 * Send contact form notification to admin
 */
export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  if (!isEmailConfigured()) {
    console.warn("Email service not configured. Skipping email notification.");
    return { success: false, message: "Email service not configured" };
  }

  try {
    const resend = getResendClient();
    if (!resend) {
      return { success: false, message: "Email service not configured" };
    }
    const result = await resend.emails.send({
      from: "Dr. Antipov Website <notifications@drantipov.com>",
      to: NOTIFICATION_EMAILS,
      replyTo: data.email,
      subject: `Contact Form: ${data.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #0369a1; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; background-color: #f9fafb; }
              .field { margin-bottom: 15px; }
              .field-label { font-weight: bold; color: #0369a1; }
              .field-value { margin-top: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Message</h1>
              </div>

              <div class="content">
                <div class="field">
                  <div class="field-label">From</div>
                  <div class="field-value">${data.name}</div>
                </div>

                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value"><a href="mailto:${data.email}">${
        data.email
      }</a></div>
                </div>

                ${
                  data.phone
                    ? `
                <div class="field">
                  <div class="field-label">Phone</div>
                  <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
                </div>
                `
                    : ""
                }

                <div class="field">
                  <div class="field-label">Subject</div>
                  <div class="field-value">${data.subject}</div>
                </div>

                <div class="field">
                  <div class="field-label">Message</div>
                  <div class="field-value">${data.message.replace(
                    /\n/g,
                    "<br>"
                  )}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error("Failed to send contact notification:", error);
    return { success: false, error };
  }
}
