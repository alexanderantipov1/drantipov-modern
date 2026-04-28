"use client";

import { motion } from "framer-motion";
import { MultiStepConsultationForm } from "@/components/forms/MultiStepConsultationForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Contact Our Roseville Office
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
              Book Your
              <br />
              <span className="gradient-text">Free Consultation</span>
            </h2>
            <p className="mt-6 text-muted text-lg leading-relaxed">
              Ready to explore dental implants, jaw surgery, or cosmetic procedures? Contact our Roseville office to schedule a complimentary consultation with Dr. Antipov — including a free CT scan and personalized treatment plan.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-dark">Visit Us</h4>
                  <p className="text-muted mt-1">
                    911 Reserve Dr, Suite 150
                    <br />
                    Roseville, CA 95678
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-dark">Call Us</h4>
                  <p className="text-muted mt-1">
                    <a href="tel:9167832110" className="hover:text-primary transition-colors">
                      (916) 783-2110
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-dark">Email Us</h4>
                  <p className="text-muted mt-1">info@drantipov.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Roseville", "San Francisco", "Virtual Consultation"].map(
                (loc) => (
                  <span
                    key={loc}
                    className="px-4 py-2 bg-white rounded-xl text-sm font-medium text-dark border border-dark/5"
                  >
                    {loc}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <MultiStepConsultationForm variant="inline" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
