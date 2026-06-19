"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

const services = [
  {
    title: "Full Arch Dental Implants",
    subtitle: "All-on-4, All-on-6, Zygomatic & Teeth-in-a-Day",
    description:
      "Receive a complete set of permanent teeth in a single visit with our All-on-4 and All-on-6 immediate-load implant protocols. Dr. Antipov uses 3D cone beam CT imaging and computer-guided surgical templates for precise, predictable placement — even for patients who have been told they don't have enough bone. For severe upper jaw bone loss, we offer zygomatic implants anchored to the cheekbone, eliminating the need for extensive bone grafting. Every full arch case includes same-day temporary teeth so you never leave without a smile.",
    image: "/images/procedures/dental-implants-26292ad9.jpg",
    features: [
      "All-on-4 Implants",
      "All-on-6 Implants",
      "Zygomatic Implants",
      "Same-Day Teeth",
      "Teeth-in-a-Day",
      "Immediate Load",
      "CT-Guided Surgery",
      "Zirconia Prosthetics",
      "Titanium Implants",
      "Full Mouth Reconstruction",
    ],
  },
  {
    title: "Corrective Jaw Surgery",
    subtitle: "Orthognathic Surgery, Le Fort, BSSO & Genioplasty",
    description:
      "Computer-planned orthognathic surgery to correct jaw misalignment, restore bite function, and achieve facial harmony. Dr. Antipov treats underbites (Class III malocclusion), overbites (Class II malocclusion), open bites, crossbites, facial asymmetry, and obstructive sleep apnea. Procedures include Le Fort I osteotomy (single-piece and 3-piece), bilateral sagittal split osteotomy (BSSO), genioplasty (chin repositioning), maxillomandibular advancement, and double jaw surgery. Every case uses 3D virtual surgical planning for millimeter-precise results.",
    image: "/images/procedures/corrective-jaw-surgery-406b79a4.jpg",
    features: [
      "Orthognathic Surgery",
      "Le Fort I Osteotomy",
      "BSSO Surgery",
      "Genioplasty",
      "Double Jaw Surgery",
      "Underbite Correction",
      "Overbite Correction",
      "Facial Asymmetry",
      "Sleep Apnea Surgery",
      "3D Surgical Planning",
    ],
  },
  {
    title: "Facial Cosmetic Surgery",
    subtitle: "Rhinoplasty, Face Lift, Eyelid Surgery, Fillers & Mole Removal",
    description:
      "Refine your natural features with expert facial cosmetic procedures performed by a board-certified oral and maxillofacial surgeon who understands facial anatomy at the deepest level. Services include rhinoplasty (nose reshaping), rhytidectomy (face lift), upper and lower blepharoplasty (eyelid surgery), Asian double eyelid surgery, facial feminization surgery, scarless mole removal using radio wave technique, Juvederm dermal fillers, lip augmentation, and autologous fat transfer for facial volume restoration.",
    image: "/images/procedures/facial-cosmetic-surgery-e97fd634.jpg",
    features: [
      "Rhinoplasty",
      "Face Lift Surgery",
      "Eyelid Surgery",
      "Double Eyelid Surgery",
      "Facial Feminization",
      "Scarless Mole Removal",
      "Juvederm Fillers",
      "Lip Augmentation",
      "Fat Transfer",
      "Facial Rejuvenation",
    ],
  },
  {
    title: "Bone Grafting & Sinus Lifts",
    subtitle: "Organic, Holistic & Autogenous Bone Regeneration",
    description:
      "Advanced bone regeneration using organic and holistic bone grafting materials to rebuild jawbone lost to tooth extraction, periodontal disease, or trauma. Dr. Antipov performs sinus lift surgery (sinus augmentation), ridge augmentation, socket preservation, block bone grafts, and guided bone regeneration (GBR). We offer autogenous (your own bone), allograft, xenograft, and synthetic bone graft options — including minimally processed, naturally derived materials for patients who prefer a holistic approach to dental implant preparation.",
    image: "/images/procedures/extractions-1896b4c1.jpg",
    features: [
      "Organic Bone Graft",
      "Holistic Bone Grafting",
      "Sinus Lift Surgery",
      "Ridge Augmentation",
      "Socket Preservation",
      "Block Bone Graft",
      "Guided Bone Regeneration",
      "Autogenous Graft",
      "Allograft",
      "Xenograft",
    ],
  },
  {
    title: "Oral Surgery",
    subtitle: "Wisdom Teeth, Extractions, TMJ & IV Sedation",
    description:
      "Comprehensive oral surgery including impacted wisdom teeth extraction, complex tooth removal, surgical exposure of impacted teeth for orthodontics, TMJ disorder treatment (temporomandibular joint surgery), cyst and tumor removal, and pre-prosthetic surgery. All procedures are performed under comfortable IV sedation or general anesthesia at our fully equipped Roseville surgical center. Dr. Antipov is fellowship-trained to handle even the most complex cases with precision and care.",
    image: "/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg",
    features: [
      "Wisdom Teeth Removal",
      "Impacted Teeth",
      "TMJ Treatment",
      "TMJ Surgery",
      "IV Sedation",
      "General Anesthesia",
      "Tooth Extraction",
      "Cyst Removal",
      "Pre-Prosthetic Surgery",
      "Orthodontic Exposure",
    ],
  },
  {
    title: "Single & Multiple Tooth Implants",
    subtitle: "Individual Implants, Bridges & Implant-Supported Dentures",
    description:
      "Whether you are missing one tooth or several, dental implants provide the most natural and durable replacement available. Dr. Antipov places single tooth implants with immediate temporary crowns, implant-supported bridges to replace multiple adjacent teeth, and snap-on dentures (overdentures) for patients who want a removable implant-retained option. Each implant is precisely placed using 3D CT guidance and medical-grade titanium for permanent osseointegration with your jawbone.",
    image: "/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg",
    features: [
      "Single Tooth Implant",
      "Implant Bridge",
      "Snap-On Dentures",
      "Overdentures",
      "Immediate Implant",
      "Implant Crown",
      "CT-Guided Placement",
      "Titanium Implants",
      "Osseointegration",
      "Denture Alternative",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Comprehensive Oral &amp; Maxillofacial Surgery Services
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            Advanced Surgical
            <br />
            <span className="gradient-text">Specialties &amp; Procedures</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            From same-day full arch dental implants and zygomatic implants to complex orthognathic jaw surgery, facial cosmetic procedures, and holistic bone grafting — Dr. Antipov combines cutting-edge 3D technology with 25+ years of board-certified surgical expertise to deliver results that transform lives across Northern California.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} — ${service.subtitle} — Dr. Alexander Antipov, Oral Surgeon, Roseville CA`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-primary-light text-xs font-medium">
                    {service.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-muted leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 bg-primary/5 text-primary text-[11px] font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <ConsultationModal>
                <button
                  className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm group/link cursor-pointer"
                >
                  Schedule Free Consultation
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                </ConsultationModal>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
