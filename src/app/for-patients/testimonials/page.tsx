import { redirect } from "next/navigation"

/**
 * /for-patients/testimonials was merged into /for-patients.
 * All content (resources, what to expect, reviews, videos, CTAs, emergency)
 * now lives at /for-patients.
 */
export default function TestimonialsRedirect() {
  redirect("/for-patients")
}
