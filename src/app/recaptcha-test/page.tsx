"use client"

import { useEffect, useState } from "react"

const SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
  "6LfAv8grAAAAAFkd5EJ1HC4fbmTfdq3yce7rgPtg"

type Grecaptcha = {
  ready: (cb: () => void) => void
  execute: (siteKey: string, options: { action: string }) => Promise<string>
}

export default function RecaptchaTestPage() {
  const [steps, setSteps] = useState<string[]>([])
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const timer = window.setInterval(
      () => setElapsed(Math.round((Date.now() - start) / 1000)),
      1000
    )
    const log = (s: string) =>
      setSteps((prev) => [...prev, `[${((Date.now() - start) / 1000).toFixed(1)}s] ${s}`])

    log(`start, key=...${SITE_KEY.slice(-6)}`)

    const win = window as unknown as { grecaptcha?: Grecaptcha }

    const script = document.createElement("script")
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`
    script.async = true
    script.onload = () => {
      log("script loaded")
      const g = win.grecaptcha
      if (!g) {
        log("FAIL: script loaded but window.grecaptcha undefined")
        return
      }
      log("grecaptcha present, waiting for ready()")
      const readyTimeout = window.setTimeout(
        () => log("WARN: ready() not fired after 6s"),
        6000
      )
      try {
        g.ready(() => {
          window.clearTimeout(readyTimeout)
          log("ready fired, calling execute()")
          g.execute(SITE_KEY, { action: "form_submit" })
            .then((token) => log(`TOKEN_OK length=${token?.length ?? 0}`))
            .catch((e) => log(`FAIL: execute rejected: ${String(e)}`))
        })
      } catch (e) {
        window.clearTimeout(readyTimeout)
        log(`FAIL: ready threw: ${String(e)}`)
      }
    }
    script.onerror = () => log("FAIL: script failed to load (blocked?)")
    document.head.appendChild(script)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div style={{ padding: 40, fontSize: 18, fontFamily: "monospace", minHeight: "60vh" }}>
      <h1>reCAPTCHA diagnostic</h1>
      <p>host: {typeof window !== "undefined" ? window.location.hostname : ""} | elapsed: {elapsed}s</p>
      <ol>
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </div>
  )
}
