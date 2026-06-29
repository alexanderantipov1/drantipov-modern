"use client";

import { GoogleAnalytics } from "./GoogleAnalytics";
import { GoogleTagManager } from "./GoogleTagManager";
import MicrosoftClarity from "@/components/MicrosoftClarity";

/**
 * Loads third-party tracking (GA, GTM, Clarity) on every visit.
 *
 * NOTE: Consent gating is currently disabled to capture all traffic. Consent
 * Mode defaults are set to "granted" (see DEFAULT_CONSENT in src/lib/tracking.ts),
 * so analytics run in full mode without waiting for the cookie banner. The cookie
 * banner still records the user's choice and can downgrade consent on Reject.
 */
export function ConsentGatedTracking() {
  return (
    <>
      <GoogleAnalytics />
      <GoogleTagManager />
      <MicrosoftClarity />
    </>
  );
}
