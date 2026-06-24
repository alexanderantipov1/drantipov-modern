"use client";

import { motion } from "framer-motion";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

export type DualCTAVariant = "surgical" | "implants" | "dual";

interface DualCTAProps {
  variant?: DualCTAVariant;
  heading?: string;
  subheading?: string;
  footnote?: string;
}

export default function DualCTA({
  variant = "dual",
  heading,
  subheading,
  footnote = "Free 3D CT Scan · No Obligation · Flexible Financing · Roseville, CA · Restrictions apply",
}: DualCTAProps) {
  const defaultHeading =
    variant === "surgical"
      ? "Ready to Discuss Your Surgery?"
      : variant === "implants"
      ? "Ready to Restore Your Smile?"
      : "Schedule Your Consultation";

  const defaultSub =
    variant === "surgical"
      ? "Dr. Antipov performs full-scope oral and maxillofacial surgery. Schedule a consultation to discuss your procedure."
      : variant === "implants"
      ? "Whether you're considering single-tooth implants or full-arch restoration, start with a free dental implant consultation and 3D CT scan."
      : "Meet Dr. Antipov and discuss your treatment options, including advanced 3D imaging and a personalized treatment plan.";

  const buttonLabel =
    variant === "implants" ? "Free Dental Implant Consultation" : "Book a Consultation";

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-navy">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {heading ?? defaultHeading}
          </h2>
          <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto">
            {subheading ?? defaultSub}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ConsultationModal>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {buttonLabel}
              </button>
            </ConsultationModal>
            <a
              href="tel:9167832110"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base bg-white/10 backdrop-blur-md text-white border border-white/25 hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (916) 783-2110
            </a>
          </div>

          <p className="mt-8 text-sm text-white/60">{footnote}</p>
        </motion.div>
      </div>
    </section>
  );
}
