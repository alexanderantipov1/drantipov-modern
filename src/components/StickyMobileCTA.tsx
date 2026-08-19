"use client";

import { useEffect, useState } from "react";
import { Phone, Calendar } from "lucide-react";
import { ConsultationModal } from "@/components/forms/ConsultationModal";
import { siteConfig } from "@/constants/siteConfig";

/**
 * StickyMobileCTA - mobile-only sticky bottom bar with Call + Book buttons.
 * Appears after the user scrolls past ~60% of the first viewport.
 */
export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = () => Math.max(window.innerHeight * 0.6, 400);
    const onScroll = () => setVisible(window.scrollY > threshold());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const telHref = `tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-3 bottom-3 z-50 md:hidden transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex gap-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-navy/10 shadow-[0_15px_40px_-10px_rgba(14,62,94,0.35)] p-2">
        <a
          href={telHref}
          aria-label={`Call ${siteConfig.contact.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white border border-navy/15 px-3 py-3 text-sm font-semibold text-navy hover:bg-navy/5 active:scale-[0.98] transition"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call
        </a>
        <ConsultationModal>
          <button
            type="button"
            aria-label="Book a consultation"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy text-white px-3 py-3 text-sm font-semibold shadow-md shadow-navy/30 hover:bg-navy/90 active:scale-[0.98] transition cursor-pointer"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Book Consultation
          </button>
        </ConsultationModal>
      </div>
    </div>
  );
}
