"use client";

import { useEffect, useState } from "react";
import {
  CALC_PUBLIC_KEY,
  CALC_SDK_SRC,
  CALC_DEFAULT_PACKAGE,
  CALC_WIDGET_URL,
  CALC_API_URL,
} from "@/lib/costCalculator";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    DentalPriceSDK?: any;
    __dpCalcInit?: boolean;
  }
}

let sdkPromise: Promise<void> | null = null;
function loadCalcSdk(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.DentalPriceSDK) return Promise.resolve();
  if (sdkPromise) return sdkPromise;
  sdkPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALC_SDK_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(new Error("Calculator SDK failed to load")),
      );
      if (window.DentalPriceSDK) resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = CALC_SDK_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Calculator SDK failed to load"));
    document.head.appendChild(s);
  });
  return sdkPromise;
}

export interface CostCalculatorProps {
  /** DentalPrice package slug to open (default: All-on-4/6/8 per arch). */
  packageSlug?: string;
  label?: string;
  className?: string;
}

/**
 * Renders a button that opens the DentalPrice AI Forms cost calculator in a modal
 * (JavaScript SDK). Leads go to Salesforce natively; onLeadSubmitted fires analytics only.
 */
export default function CostCalculator({
  packageSlug = CALC_DEFAULT_PACKAGE,
  label = "Calculate my cost",
  className,
}: CostCalculatorProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadCalcSdk()
      .then(() => {
        if (cancelled || !window.DentalPriceSDK) return;
        if (!window.__dpCalcInit) {
          window.__dpCalcInit = true;
          try {
            window.DentalPriceSDK.init({
              publicKey: CALC_PUBLIC_KEY,
              widgetUrl: CALC_WIDGET_URL,
              apiUrl: CALC_API_URL,
              onLeadSubmitted: (data: any) => {
                try {
                  (window as any).dataLayer?.push({
                    event: "calc_lead_submitted",
                    calc_value: data?.total_price,
                    calc_package: data?.package_name,
                  });
                } catch {
                  /* noop */
                }
              },
              onError: (err: any) =>
                console.error("Calculator SDK error:", err),
            });
            try {
              if (window.DentalPriceSDK.config) {
                window.DentalPriceSDK.config.widgetUrl = CALC_WIDGET_URL;
                window.DentalPriceSDK.config.apiUrl = CALC_API_URL;
              }
            } catch {
              /* noop */
            }
          } catch (e) {
            console.error("Calculator init failed:", e);
          }
        }
        setReady(true);
      })
      .catch((e) => console.error(e));
    return () => {
      cancelled = true;
    };
  }, []);

  const open = () => {
    try {
      window.DentalPriceSDK?.openPackage(packageSlug);
    } catch (e) {
      console.error("Calculator open failed:", e);
    }
  };

  return (
    <button
      type="button"
      onClick={open}
      aria-busy={!ready}
      className={
        className ??
        "inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90"
      }
    >
      {label}
    </button>
  );
}
