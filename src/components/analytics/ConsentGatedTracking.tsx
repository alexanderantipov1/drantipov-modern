"use client";

import { useEffect, useState } from "react";
import { useTracking } from "@/components/TrackingProvider";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { GoogleTagManager } from "./GoogleTagManager";
import MicrosoftClarity from "@/components/MicrosoftClarity";

/**
 * Wraps third-party tracking (GA, GTM, Clarity) and only renders them
 * after the user has given consent via the cookie banner.
 *
 * Before consent: nothing loaded — no cookies, no tracking pixels, no requests.
 * After consent: scripts inject as usual.
 *
 * This satisfies GDPR/CCPA "prior consent" requirements. For US-only practice,
 * still wise because it speeds up first paint and reduces 3p script attack surface.
 */
export function ConsentGatedTracking() {
  const { hasConsent } = useTracking();
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    // Poll consent state — hasConsent is read from a context but consent
    // can change without re-render. Simple poll covers it.
    const check = () => setConsentGranted(hasConsent());
    check();
    const interval = setInterval(check, 1000);
    return () => clearInterval(interval);
  }, [hasConsent]);

  if (!consentGranted) return null;

  return (
    <>
      <GoogleAnalytics />
      <GoogleTagManager />
      <MicrosoftClarity />
    </>
  );
}
