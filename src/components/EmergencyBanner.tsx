"use client";

import { motion } from "framer-motion";

export default function EmergencyBanner() {
  return (
    <section className="relative py-12 bg-gradient-to-r from-secondary to-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(26,187,156,0.15),transparent_60%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Dental Emergency? We Can Help.</h3>
              <p className="text-white/60 text-sm mt-1">
                Broken tooth, dental trauma, severe pain, or jaw injury? Contact our Roseville office immediately. Same-day emergency appointments available.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:9167832110"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-2xl font-bold hover:bg-red-600 transition-all duration-300 pulse-glow"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (916) 783-2110
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
