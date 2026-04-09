"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const officeImages = [
  { src: "/images/office-tour/1/gallery@2x-ecef5848.jpg", preview: "/images/office-tour/1/gallery@2x-ecef5848.jpg", label: "Reception Area" },
  { src: "/images/office-tour/2/gallery@2x-9ed709d7.jpg", preview: "/images/office-tour/2/gallery@2x-9ed709d7.jpg", label: "Waiting Lounge" },
  { src: "/images/office-tour/3/gallery@2x-84de11ba.jpg", preview: "/images/office-tour/3/gallery@2x-84de11ba.jpg", label: "Consultation Room" },
  { src: "/images/office-tour/4/gallery@2x-506890ca.jpg", preview: "/images/office-tour/4/gallery@2x-506890ca.jpg", label: "Treatment Room" },
  { src: "/images/office-tour/5/gallery@2x-668f4e57.jpg", preview: "/images/office-tour/5/gallery@2x-668f4e57.jpg", label: "Surgical Suite" },
  { src: "/images/office-tour/6/gallery@2x-b63ecc36.jpg", preview: "/images/office-tour/6/gallery@2x-b63ecc36.jpg", label: "Recovery Area" },
  { src: "/images/office-tour/7/gallery@2x-e3edc33f.jpg", preview: "/images/office-tour/7/gallery@2x-e3edc33f.jpg", label: "CT Imaging" },
  { src: "/images/office-tour/8/gallery@2x-e877a601.jpg", preview: "/images/office-tour/8/gallery@2x-e877a601.jpg", label: "Equipment Room" },
  { src: "/images/office-tour/9/gallery@2x-40a5d0af.jpg", preview: "/images/office-tour/9/gallery@2x-40a5d0af.jpg", label: "Sterilization" },
];

const landingOffice: string[] = [];

export default function OfficeTour() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const allImages = [...officeImages.map(o => o.src), ...landingOffice];

  return (
    <section id="office-tour" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Tour Our Roseville Office
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            A Modern <span className="gradient-text">Surgical Facility</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Our Roseville office features cone beam CT imaging, dedicated surgical suites, comfortable recovery areas, and the latest sterilization technology — all designed with your safety and comfort in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {officeImages.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setLightbox(i)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image src={img.src} alt={img.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.label}</div>
            </motion.button>
          ))}
          {landingOffice.map((src, i) => (
            <motion.button
              key={`lo-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (officeImages.length + i) * 0.05 }}
              onClick={() => setLightbox(officeImages.length + i)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image src={src} alt={`Office ${i + 10}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <button onClick={() => setLightbox(null)} className="absolute -top-12 right-0 text-white/70 hover:text-white">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <Image src={allImages[lightbox] ?? ""} alt="Office" width={1400} height={900} className="w-full h-auto rounded-2xl" />
              <div className="mt-4 flex justify-between">
                <button onClick={() => setLightbox(Math.max(0, lightbox - 1))} disabled={lightbox === 0} className="px-4 py-2 bg-white/10 rounded-xl text-white text-sm disabled:opacity-30">&larr; Prev</button>
                <span className="text-white text-sm">{lightbox + 1} / {allImages.length}</span>
                <button onClick={() => setLightbox(Math.min(allImages.length - 1, lightbox + 1))} disabled={lightbox === allImages.length - 1} className="px-4 py-2 bg-white/10 rounded-xl text-white text-sm disabled:opacity-30">Next &rarr;</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
