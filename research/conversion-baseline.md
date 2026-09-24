# Conversion baseline (before implementation)

Scope: shared EN/RU tracking and primary forms. Read the supplied Fusion RU audit (P1-1/P1-8), consent/performance memory, CSP/reCAPTCHA memory, and Fusion phone-format memory.

- `ConsentGatedTracking` unconditionally mounts GA, GTM and Clarity; default consent grants analytics/advertising. Banner records Accept All / Reject All but does not prevent initial requests.
- Tracker creates attribution/session/client cookies before choice. No withdrawal control is visible once the banner closes.
- GA ID `G-9RB71866JE`, GTM ID `GTM-KN648QMQ`; existing analytics event names must remain unchanged. Container contents are unavailable, so GA tags inside GTM cannot be independently verified.
- Root layout includes GTM noscript, which bypasses client consent. Parent must remove this (layouts outside delegated ownership).
- EN multistep/shared localized consultation form posts to `/api/submit-consultation`, then Fusion `/api/v1/user-data`. Keep phone normalization, ISO DOB and reCAPTCHA behavior/CSP intact.
- RU lead forms and full-arch forms post to `/api/lead` (Salesforce WebToLead plus Resend). Both delivery paths failing currently returns `ok:true`, `logged_only` despite not retaining the lead.
- Simple consultation form posts to `/api/consultation`; absent email configuration or failed admin notification currently still reports success.
- Existing primary form success/error handlers depend on HTTP status. RU shared multistep has English submission/validation states.

Baseline is source inspection, not evidence of production delivery or browser network behavior. No real leads submitted. Mocked route tests and source checks will document regression coverage; approved external test/access is required to prove Salesforce/inbox receipt.