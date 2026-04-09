"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

const stats = [
  { value: "10,000+", label: "Patients Treated" },
  { value: "25+", label: "Years of Surgical Experience" },
  { value: "3", label: "Office Locations" },
  { value: "Same Day", label: "Implant Teeth Available" },
];

const antipovCredentials = [
  "Diplomate, American Board of Oral & Maxillofacial Surgery",
  "Fellowship-Trained in Complex Implant Reconstruction",
  "Member, American Association of Oral & Maxillofacial Surgeons (AAOMS)",
  "Member, American Dental Association (ADA)",
  "Member, Academy of Osseointegration",
  "Preferred Referral Partner for 100+ Northern California Dentists",
  "Advanced Training in 3D Computer-Guided Surgery",
  "Certified in IV Sedation & General Anesthesia",
];

const kahwachCredentials = [
  "DDS, University of California, San Francisco (Honors)",
  "MD & OMS Residency, Loma Linda University",
  "Advanced Training in Anesthesia",
  "Full Scope Oral & Maxillofacial Surgery",
  "Dental Implants, Facial Trauma & Orthognathic Surgery",
  "Cosmetic Facial Surgery",
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Meet Your Oral &amp; Maxillofacial Surgeons
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight leading-tight">
            Two Experts. <span className="gradient-text">One Mission.</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Our practice brings together decades of combined surgical experience, advanced training, and a shared commitment to exceptional patient care.
          </p>
        </motion.div>

        {/* Dr. Antipov */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/drantipov@2x-b80a5ccf.jpg"
                alt="Dr. Alexander Antipov, DDS — Board-certified oral and maxillofacial surgeon specializing in dental implants, jaw surgery, and facial cosmetics in Roseville, CA"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 sm:right-6 glass rounded-2xl p-6 shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">Board Certified</p>
                  <p className="text-muted text-xs">Oral & Maxillofacial Surgery</p>
                </div>
              </div>
              <p className="text-muted text-xs leading-relaxed">
                Diplomate, American Board of Oral & Maxillofacial Surgery. Specializing in All-on-4 dental implants, zygomatic implants, orthognathic jaw surgery, and facial cosmetic procedures. Serving Roseville, Sacramento, San Francisco, and all of Northern California.
              </p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-4xl sm:text-5xl font-bold text-dark tracking-tight leading-tight">
              Dr. Alexander
              <br />
              <span className="gradient-text">Antipov, DDS</span>
            </h3>
            <p className="mt-6 text-muted text-lg leading-relaxed">
              Dr. Alexander Antipov is a <strong>board-certified oral and maxillofacial surgeon</strong> practicing in Roseville, California. With over <strong>25 years of experience</strong> and more than <strong>10,000 successful procedures</strong>, he is one of Northern California&apos;s most trusted specialists in <strong>dental implants</strong>, <strong>corrective jaw surgery</strong>, and <strong>facial cosmetic surgery</strong>.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              As a Diplomate of the American Board of Oral and Maxillofacial Surgery and fellowship-trained in complex implant reconstruction, Dr. Antipov brings an unmatched depth of expertise to every case. He is one of the few surgeons in Northern California who performs <strong>zygomatic implants</strong> for patients with severe bone loss, <strong>full arch All-on-4 and All-on-6 immediate-load protocols</strong>, complex <strong>orthognathic jaw surgery</strong> including Le Fort osteotomies, BSSO, and genioplasty, and advanced <strong>facial cosmetic procedures</strong> including rhinoplasty and face lift surgery.
            </p>

            {/* Credentials */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-dark mb-3 uppercase tracking-wide">Credentials &amp; Affiliations</h4>
              <ul className="grid grid-cols-1 gap-2">
                {antipovCredentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-2 text-sm text-muted">
                    <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-20 border-t border-dark/10" />

        {/* Dr. Kahwach */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side (reversed order for visual variety) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-4xl sm:text-5xl font-bold text-dark tracking-tight leading-tight">
              Dr. André-David
              <br />
              <span className="gradient-text">Kahwach, DDS, MD</span>
            </h3>
            <p className="mt-6 text-muted text-lg leading-relaxed">
              Dr. André-David Kahwach brings a unique blend of <strong>surgical excellence</strong>, <strong>artistic vision</strong>, and global perspective to oral and maxillofacial surgery. He earned his dental degree with honors from <strong>UC San Francisco</strong> before completing his OMS training at <strong>Loma Linda University</strong>, where he also obtained his medical degree and advanced training in anesthesia.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              With a passion for the full scope of oral and maxillofacial surgery, Dr. Kahwach is deeply committed to delivering exceptional care across <strong>cosmetic procedures</strong>, <strong>dental implants</strong>, <strong>facial trauma</strong>, and <strong>orthognathic surgery</strong>. His approach combines precision with creativity — an influence shaped not only by his surgical training, but also by his background in painting and sculpture.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Beyond the operating room, Dr. Kahwach has traveled extensively across Europe, Africa, the Caribbean, and the Middle East, strengthening his dedication to service through medical and dental mission work. Known for his approachable demeanor and commitment to excellence, he strives to ensure every patient feels confident, informed, and genuinely cared for.
            </p>

            {/* Credentials */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-dark mb-3 uppercase tracking-wide">Education &amp; Training</h4>
              <ul className="grid grid-cols-1 gap-2">
                {kahwachCredentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-2 text-sm text-muted">
                    <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/dr-kahwach.jpg"
                alt="Dr. André-David Kahwach, DDS, MD — Oral and maxillofacial surgeon specializing in dental implants, facial trauma, orthognathic surgery, and cosmetic procedures"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 sm:left-6 glass rounded-2xl p-6 shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">Dual Degree</p>
                  <p className="text-muted text-xs">DDS &amp; MD — UCSF &amp; Loma Linda</p>
                </div>
              </div>
              <p className="text-muted text-xs leading-relaxed">
                Full scope oral and maxillofacial surgeon with advanced training in anesthesia. Specializing in dental implants, orthognathic surgery, facial trauma, and cosmetic procedures.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Practice info + stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <p className="text-muted leading-relaxed text-center max-w-3xl mx-auto">
            Our practice uses <strong>3D cone beam CT imaging</strong>, computer-guided surgical templates, and minimally invasive techniques to deliver precise, predictable outcomes. We also offer <strong>organic and holistic bone grafting</strong> options for patients who prefer naturally derived materials. Every treatment plan is developed around your individual anatomy, goals, and timeline.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-muted text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <ConsultationModal>
              <button
                className="px-8 py-3.5 bg-primary text-white rounded-2xl font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
              >
                Book a Free Consultation
              </button>
            </ConsultationModal>
            <a
              href="#before-after"
              className="px-8 py-3.5 border-2 border-dark/10 text-dark rounded-2xl font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              View Before &amp; After Cases
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
