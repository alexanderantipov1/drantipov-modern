---
name: Next.js dev preview on Replit
description: What a Next.js app needs in next.config to render in Replit's preview iframe
---

# Next.js dev preview in Replit's iframe

Replit's preview pane embeds the running app in a **cross-origin proxy iframe** (served via the `*.replit.dev` domain, not localhost). A Next.js app whose dev server otherwise works will show a **blank/empty preview** unless its `next.config.mjs` does all of:

1. `allowedDevOrigins: ['*.replit.dev', '*.replit.app', '*.janeway.replit.dev']` — Next blocks cross-origin dev asset requests otherwise.
2. Relax `frame-ancestors` in the Content-Security-Policy **in dev only** to include `https://*.replit.dev https://*.replit.app https://*.janeway.replit.dev`. A strict `frame-ancestors 'self'` blocks the iframe.
3. Drop `X-Frame-Options: SAMEORIGIN` **in dev only** (same clickjacking header, also blocks the iframe).

**Why:** the preview is a different origin than the app, so any same-origin framing restriction hides it.
**How to apply:** gate on `const isDev = process.env.NODE_ENV !== 'production'` so production keeps the strict security headers. Only port 5000 reliably renders in the webview pane.
