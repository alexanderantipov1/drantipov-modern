"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/landing-pages/dental-implants/art/image-background04-713ddc8f.jpg"
          alt="Schedule a free dental implant consultation with Dr. Antipov — oral and maxillofacial surgeon in Roseville, CA"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Take the First Step
            <br />
            Toward Your New Smile
          </h2>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            Schedule your <strong>free consultation</strong> with Dr. Antipov today. Every visit includes a complimentary 3D cone beam CT scan, a detailed treatment plan for dental implants, jaw surgery, or facial cosmetic procedures, and a review of your financing options — all at no cost and no obligation.
          </p>

          {/* Procedure keywords */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              "All-on-4 Implants",
              "All-on-6 Implants",
              "Zygomatic Implants",
              "Jaw Surgery",
              "Bone Grafting",
              "Rhinoplasty",
              "Face Lift",
              "Eyelid Surgery",
              "Wisdom Teeth",
              "TMJ Treatment",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-white/80 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ConsultationModal>
              <button
                className="px-10 py-4 bg-white text-primary rounded-2xl font-bold text-lg hover:bg-white/90 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                Schedule Free Consultation
              </button>
            </ConsultationModal>
            <a
              href="tel:9167909693"
              className="px-10 py-4 bg-white/15 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/25 transition-all duration-300"
            >
              (916) 790-9693
            </a>
          </div>

          <p className="mt-6 text-white/60 text-sm">
            Free 3D CT Scan &bull; No Obligation &bull; Flexible Financing Available &bull; Roseville, CA
          </p>
        </motion.div>
      </div>
    </section>
  );
}
