"use client"

import { useEffect, useState } from "react"
import { getRecaptchaToken } from "@/lib/recaptcha-client"

export default function RecaptchaTestPage() {
  const [status, setStatus] = useState("running...")

  useEffect(() => {
    getRecaptchaToken("form_submit").then((token) => {
      if (token) {
        setStatus(`TOKEN_OK length=${token.length}`)
      } else {
        setStatus("TOKEN_EMPTY")
      }
    })
  }, [])

  return (
    <div style={{ padding: 40, fontSize: 24, fontFamily: "monospace" }}>
      <h1>reCAPTCHA test</h1>
      <p id="result">{status}</p>
      <p>host: {typeof window !== "undefined" ? window.location.hostname : ""}</p>
    </div>
  )
}
