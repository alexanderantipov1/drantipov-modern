"use client";

import { motion } from "framer-motion";
import { ConsultationModal } from "@/components/forms/ConsultationModal";
import { totalCities } from "@/constants/serviceAreas";

/* ───────────────────────────────────────────
   SEO keyword-rich service descriptions
   ─────────────────────────────────────────── */

const services = [
  {
    title: "Full Arch Dental Implants",
    aka: "All-on-4 / All-on-6 Implants",
    description:
      "Permanently replace an entire arch of missing or failing teeth in a single visit. Our full arch dental implant procedure uses four to six strategically placed titanium implants to support a fixed, non-removable bridge — giving you a complete, natural-looking smile the same day.",
    keywords: [
      "Full Arch Dental Implants",
      "All-on-4 Implants",
      "All-on-6 Implants",
      "Full Mouth Dental Implants",
      "Permanent Teeth in One Day",
      "Fixed Implant Bridge",
      "Same-Day Teeth",
      "Teeth in a Day",
    ],
  },
  {
    title: "Organic & Holistic Bone Grafting",
    aka: "Biocompatible Bone Regeneration",
    description:
      "Dr. Antipov offers organic and holistic bone grafting solutions using biocompatible, minimally processed human donor tissue and advanced growth factors. Unlike synthetic alternatives, our organic bone grafts integrate naturally with your existing bone, creating a strong foundation for dental implant placement — even in patients with significant bone loss.",
    keywords: [
      "Organic Bone Graft",
      "Holistic Bone Grafting",
      "Natural Bone Graft",
      "Biocompatible Bone Graft",
      "Bone Graft for Dental Implants",
      "Bone Regeneration",
      "Sinus Lift",
      "Ridge Augmentation",
    ],
  },
  {
    title: "Full Mouth Restoration",
    aka: "Complete Smile Reconstruction",
    description:
      "For patients with extensive dental damage, decay, or tooth loss, our full mouth restoration combines dental implants, bone grafting, and prosthetic design to completely rebuild your smile. Dr. Antipov uses cone beam CT imaging and computer-guided surgical planning to deliver predictable, life-changing results.",
    keywords: [
      "Full Mouth Restoration",
      "Smile Reconstruction",
      "Full Mouth Rehabilitation",
      "Implant-Supported Dentures",
      "Snap-In Dentures Alternative",
      "Permanent Dentures",
      "Fixed Dentures",
      "Dental Implants vs Dentures",
    ],
  },
  {
    title: "Immediate Load Implants",
    aka: "Same-Day Smile / Teeth in 24 Hours",
    description:
      "Walk in with missing teeth and walk out with a brand-new smile — all in a single appointment. Our immediate load implant protocol allows Dr. Antipov to place implants and attach fully functional temporary teeth the same day, eliminating the months-long wait associated with traditional implant procedures.",
    keywords: [
      "Immediate Load Implants",
      "Same-Day Dental Implants",
      "Teeth in 24 Hours",
      "One-Day Dental Implants",
      "New Teeth in One Day",
      "Immediate Dental Implants",
      "Same-Day Smile",
      "New Smile in One Day",
    ],
  },
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Serving {totalCities}+ Cities Across California &amp; Nevada
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            Full Arch Dental Implants &amp;
            <br />
            <span className="gradient-text">Oral Surgery Near You</span>
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            Dr. Alexander Antipov provides full arch dental implants, organic bone grafting, corrective jaw surgery, and facial cosmetic procedures to patients across Northern California and Northern Nevada. Our main office in Roseville, CA is within a 3.5-hour drive of over {totalCities} cities — from Redding to Fresno, San Francisco to Reno.
          </p>
        </motion.div>

        {/* Service descriptions — keyword blocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-dark text-center mb-12">
            Procedures Available at Our <span className="gradient-text">Roseville Office</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-light rounded-3xl p-8 hover:shadow-lg transition-shadow duration-500"
              >
                <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                  {svc.aka}
                </span>
                <h4 className="text-xl font-bold text-dark mt-2 mb-3">{svc.title}</h4>
                <p className="text-muted text-sm leading-relaxed mb-4">{svc.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {svc.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-1 bg-primary/5 text-primary text-[11px] font-medium rounded-full"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO-rich bottom content — long-form keyword text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-4 max-w-4xl mx-auto"
        >
          <div className="section-divider mb-12" />
          <h3 className="text-2xl font-bold text-dark text-center mb-8">
            Why Patients Choose Dr. Antipov for <span className="gradient-text">Full Arch Dental Implants</span>
          </h3>
          <div className="prose prose-lg text-muted leading-relaxed space-y-6">
            <p>
              If you are searching for <strong>full arch dental implants near me</strong>, <strong>All-on-4 dental implants</strong>, or a <strong>same-day teeth procedure</strong> in Northern California or Nevada, Dr. Alexander Antipov&apos;s practice in Roseville, CA offers the expertise, technology, and results you deserve. With over 25 years of experience and more than 10,000 patients treated, Dr. Antipov is one of the most experienced oral and maxillofacial surgeons in the region for <strong>full mouth dental implant restoration</strong>.
            </p>
            <p>
              Unlike dental implant centers that rely on general dentists, Dr. Antipov is a <strong>board-certified oral and maxillofacial surgeon</strong> who personally performs every procedure — from the initial <strong>cone beam CT scan</strong> and treatment planning to implant placement, <strong>organic bone grafting</strong>, and final prosthetic delivery. This means your entire treatment stays under one roof with one surgeon, eliminating the complexity of being referred between multiple providers.
            </p>
            <p>
              Our <strong>organic and holistic bone grafting</strong> program sets us apart from other implant centers. We use biocompatible, minimally processed human donor tissue combined with advanced platelet-rich growth factors to naturally regenerate bone in the jaw. This approach is ideal for patients who prefer <strong>natural bone graft materials</strong> over synthetic alternatives, or for those with <strong>severe bone loss</strong> who have been told they are not candidates for dental implants elsewhere.
            </p>
            <p>
              Patients travel to our Roseville office from <strong>Sacramento, San Francisco, Oakland, San Jose, Reno, Stockton, Modesto, Fresno, Redding, Chico, Napa, Santa Rosa</strong>, and over 150 other cities across California and Nevada. We offer <strong>free consultations</strong> that include a complimentary cone beam CT scan, a personalized treatment plan, and a review of your financing options — all at no cost or obligation.
            </p>
            <p>
              Whether you need <strong>full arch dental implants</strong>, <strong>All-on-4 or All-on-6 implant-supported teeth</strong>, <strong>immediate load same-day implants</strong>, <strong>holistic bone grafting</strong>, <strong>corrective jaw surgery</strong>, or <strong>wisdom teeth removal</strong>, Dr. Antipov and his team deliver life-changing results with the precision and care that only a board-certified oral surgeon can provide. <strong>Dental implant financing</strong> is available through multiple lending partners, making treatment accessible regardless of budget.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <ConsultationModal>
              <button
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 cursor-pointer"
              >
                Schedule Your Free Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </ConsultationModal>
            <p className="mt-4 text-muted text-sm">
              Free CT scan included &bull; No obligation &bull; Financing available
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
