"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

const patientPhotos = [
  {
    src: "/images/patients/patient-smile-1.jpeg",
    alt: "Dr. Alexander Antipov with a smiling dental implant patient at his Roseville, CA practice",
    rotate: "-3deg",
    marginTop: "mt-0",
  },
  {
    src: "/images/patients/patient-smile-2.jpeg",
    alt: "Dr. Alexander Antipov with a happy full-arch patient after treatment in Roseville, CA",
    rotate: "2.5deg",
    marginTop: "mt-8",
  },
  {
    src: "/images/patients/patient-smile-3.jpeg",
    alt: "Dr. Alexander Antipov with grateful patients following oral surgery in Roseville, CA",
    rotate: "3deg",
    marginTop: "-mt-6",
  },
  {
    src: "/images/patients/patient-smile-4.jpeg",
    alt: "Dr. Alexander Antipov with a delighted patient at his Northern California surgical center",
    rotate: "-2.5deg",
    marginTop: "mt-4",
  },
];

export default function PracticePhilosophy() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-bone/40 via-white to-bone/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <Heart className="h-12 w-12 text-primary" aria-hidden="true" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Practice Philosophy
            </h2>

            <div className="text-lg text-neutral-700 leading-relaxed space-y-5">
              <p>
                &ldquo;My approach to oral surgery is rooted in the belief that every patient deserves exceptional care
                delivered with compassion and respect. I take the time to understand each patient&apos;s unique needs
                and concerns, creating customized treatment plans that achieve optimal outcomes.&rdquo;
              </p>
              <p>
                &ldquo;Continuing education is paramount in our rapidly evolving field. I remain committed to staying
                at the forefront of surgical techniques and technologies, ensuring my patients benefit from the
                latest advancements in oral and maxillofacial surgery.&rdquo;
              </p>
              <p className="font-semibold text-neutral-900">— Dr. Alexander Antipov</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.12 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {patientPhotos.map((photo) => (
                <motion.div
                  key={photo.src}
                  variants={{
                    hidden: { opacity: 0, y: 24, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
                  style={{ rotate: photo.rotate }}
                  className={`${photo.marginTop} relative aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-lg ring-1 ring-black/5 border-4 border-white transition-shadow duration-300 hover:shadow-2xl`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 45vw"
                  />
                </motion.div>
              ))}
            </div>
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="mt-7 text-center text-sm font-medium uppercase tracking-wider text-primary"
            >
              Real patients. Real smiles.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
