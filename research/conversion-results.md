# Conversion results

## Implemented

- Consent defaults deny nonessential storage. GA/GTM/Clarity mount only after stored analytics acceptance; existing Accept All / Reject All semantics remain (a rejection counts as a recorded choice).
- Added persistent cookie-settings control to reopen the existing choices, translated banner/control strings on RU without adding legal claims. Withdrawal records denial, sends Google consent update, removes accessible first-party tracking cookies, and reloads to stop already-executing vendor scripts. Tracker/session/marketing data and analytics helper events are acceptance-gated; repeated acceptance does not increment the session again.
- Preserved GA/GTM IDs and all existing event names. No extra conversion/page-view events added. Existing Next Script IDs preserved.
- `/api/lead` now returns HTTP 503 and `ok:false` when Salesforce and email delivery both fail or are unconfigured. Added contact/type checks; too-fast submissions produce explicit failure rather than false success. Existing honeypot handling remains.
- `/api/consultation` fails explicitly when admin notification cannot be sent, instead of confirming an undelivered request.
- Fusion proxy preserves actual endpoint, phone normalization, DOB forwarding, and reCAPTCHA integration. Preview without token now explicitly says no lead was sent rather than reporting a fake success.
- RU multistep checks response `ok` as well as HTTP status and uses a Russian error state rather than raw technical exceptions. The old RU full-arch placeholder now reuses the existing working RU multistep form. EN multistep displays API `error` as well as `message`.

## Verification

`node --test scripts/conversion-regression.cjs`: **7 passed**. All requests and email calls are mocked, and unknown network/import calls fail closed in the test harness. Covers lead no configuration, both failures, real endpoint selection/payload, invalid contact, EN admin mail failures, Fusion phone/DOB forwarding, invalid phone, consent default/reject/accept/withdrawal, and source assertions mapping primary EN/RU forms to tested routes.

`npx tsc --noEmit --incremental false`: initially passed; final concurrent-workspace run blocked by 316 stale `.next` generated validator references after the parent's route relocation and 2 errors in `src/lib/seo-foundation.ts` (`languages:null`). No errors reported in this workstream's files. No full build, workflow restart, live leads, secret changes, or layout edits.

Attempted screenshot of the already-running `/ru/` preview: connection refused on port 5000. Did not start/restart the app; parent owns browser verification.

## Required parent / deployment checks

- Remove root-layout `GoogleTagManagerNoScript` import/render: it bypasses JavaScript cookie consent. Component left untouched because layouts are parent-owned.
- Browser request/cookie tests on EN and RU still required: clean visit, reject, accept, revisit, withdrawal, and mobile form interaction. Offline tests are not browser E2E proof.
- Existing direct GA plus GTM could duplicate GA collection if the external GTM container also configures the same property. Container contents/access were unavailable. Do not arbitrarily disable either existing integration; inspect GTM Preview/GA DebugView and establish one page-view owner before claiming deduplication verified. No duplicate emissions were added by this patch.
- Salesforce WebToLead HTTP acceptance does not prove CRM creation; Resend success does not prove inbox receipt. **External delivery cannot be proved without an approved test and authorized CRM/email access.** No real submissions were made.
- Existing reCAPTCHA verifier fail-open behavior is unchanged. CSP/reCAPTCHA allowlists and credentials were not modified. Third-party/domain/path cookies unavailable to JavaScript cannot be cleared by the first-party withdrawal code; reload prevents this application from restarting vendor scripts under denied consent.