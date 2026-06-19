"use client"

import Script from "next/script"
import { useState, useEffect } from "react"

export function RecaptchaScript() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const hostname = window.location.hostname
    if (hostname !== "localhost" && hostname !== "127.0.0.1") {
      setShouldLoad(true)
    }
  }, [])

  if (!shouldLoad) return null

  return (
    <Script
      id="recaptcha-v3"
      src="https://www.google.com/recaptcha/api.js?render=6LfAv8grAAAAAFkd5EJ1HC4fbmTfdq3yce7rgPtg"
      strategy="afterInteractive"
    />
  )
}
