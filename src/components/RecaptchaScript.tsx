"use client"

import Script from "next/script"
import { useState, useEffect } from "react"

/**
 * reCAPTCHA v3 is only needed when a user actually submits a form. Loading it on
 * initial page load costs ~1s of main-thread time (script eval + parse), which
 * tanks mobile PageSpeed. So we defer the script until the first real user
 * interaction (pointer/keyboard/touch/scroll). Opening any consultation form is
 * itself an interaction, so the token is ready well before submit. The form's
 * token generator also degrades gracefully if grecaptcha isn't present yet.
 */
export function RecaptchaScript() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const hostname = window.location.hostname
    if (hostname === "localhost" || hostname === "127.0.0.1") return

    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const
    const trigger = () => {
      setShouldLoad(true)
      events.forEach((e) => window.removeEventListener(e, trigger))
    }
    events.forEach((e) =>
      window.addEventListener(e, trigger, { once: true, passive: true })
    )

    return () => events.forEach((e) => window.removeEventListener(e, trigger))
  }, [])

  if (!shouldLoad) return null

  return (
    <Script
      id="recaptcha-v3"
      src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "6LfAv8grAAAAAFkd5EJ1HC4fbmTfdq3yce7rgPtg"}`}
      strategy="afterInteractive"
    />
  )
}
