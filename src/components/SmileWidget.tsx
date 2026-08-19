"use client";

import { useEffect, useId, useRef } from "react";
import {
  SMILE_WIDGET_PUBLIC_KEY,
  SMILE_WIDGET_SDK_SRC,
  getSmileLang,
  type SmileLocale,
} from "@/lib/smileWidget";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    SmileWidget?: any;
  }
}

// Load the DentalPrice SDK exactly once, shared across all widget instances.
let sdkPromise: Promise<void> | null = null;
function loadSmileSdk(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.SmileWidget) return Promise.resolve();
  if (sdkPromise) return sdkPromise;

  sdkPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SMILE_WIDGET_SDK_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(new Error("Smile SDK failed to load")),
      );
      if (window.SmileWidget) resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = SMILE_WIDGET_SDK_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Smile SDK failed to load"));
    document.head.appendChild(s);
  });
  return sdkPromise;
}

export interface SmileWidgetProps {
  /** Site locale - controls the widget UI language via getSmileLang(). */
  locale?: SmileLocale;
  /** Widget height (CSS value). */
  height?: string;
  className?: string;
}

/**
 * Renders the DentalPrice AI Smile simulator via their JavaScript SDK.
 * Leads are pushed to Salesforce natively by DentalPrice; onLeadSubmitted here
 * only fires optional analytics (GA4/dataLayer).
 */
export default function SmileWidget({
  locale = "en",
  height = "700px",
  className,
}: SmileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<any>(null);
  const rawId = useId();
  const domId = `smile-widget-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  useEffect(() => {
    let cancelled = false;

    loadSmileSdk()
      .then(() => {
        if (cancelled || !window.SmileWidget || !containerRef.current) return;
        try {
          instanceRef.current = window.SmileWidget.render(`#${domId}`, {
            publicKey: SMILE_WIDGET_PUBLIC_KEY,
            height,
            locale: getSmileLang(locale),
            showTitle: false,
            onLeadSubmitted: (data: any) => {
              // CRM handled natively by DentalPrice. Optional analytics only:
              try {
                (window as any).dataLayer?.push({
                  event: "smile_lead_submitted",
                  smile_email: data?.email,
                });
              } catch {
                /* noop */
              }
            },
            onError: (err: any) => {
              console.error("SmileWidget error:", err);
            },
          });
        } catch (e) {
          console.error("SmileWidget render failed:", e);
        }
      })
      .catch((e) => console.error(e));

    return () => {
      cancelled = true;
      try {
        instanceRef.current?.destroy?.();
      } catch {
        /* noop */
      }
      instanceRef.current = null;
    };
  }, [domId, height, locale]);

  return <div id={domId} ref={containerRef} className={className} />;
}
