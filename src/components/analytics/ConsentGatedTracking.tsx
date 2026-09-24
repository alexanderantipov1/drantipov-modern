"use client";

import { GoogleAnalytics } from "./GoogleAnalytics";
import { GoogleTagManager } from "./GoogleTagManager";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import { useEffect, useState } from "react";
import { CONSENT_CHANGED, hasAnalyticsConsent } from "@/lib/tracking";

/**
 * No vendor script is rendered until an explicit stored acceptance exists.
 */
export function ConsentGatedTracking() {
  const [accepted, setAccepted] = useState(false);
  useEffect(() => {
    const sync = () => setAccepted(hasAnalyticsConsent());
    sync();
    window.addEventListener(CONSENT_CHANGED, sync);
    return () => window.removeEventListener(CONSENT_CHANGED, sync);
  }, []);
  if (!accepted) return null;
  return (
    <>
      <GoogleAnalytics />
      <GoogleTagManager />
      <MicrosoftClarity />
    </>
  );
}
