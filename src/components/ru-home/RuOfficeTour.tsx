"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const officeImages = [
  { src: "/images/gallery-behind-scenes/surgery-16.jpeg", preview: "/images/gallery-behind-scenes/surgery-16.jpeg", label: "Операционная" },
  { src: "/images/gallery-behind-scenes/surgery-26.jpeg", preview: "/images/gallery-behind-scenes/surgery-26.jpeg", label: "3D CT-Guided Treatment" },
  { src: "/images/gallery-behind-scenes/surgery-10.jpeg", preview: "/images/gallery-behind-scenes/surgery-10.jpeg", label: "Surgical Team" },
  { src: "/images/gallery-behind-scenes/surgery-07.jpeg", preview: "/images/gallery-behind-scenes/surgery-07.jpeg", label: "Sterile Surgical Field" },
  { src: "/images/gallery-behind-scenes/surgery-20.jpeg", preview: "/images/gallery-behind-scenes/surgery-20.jpeg", label: "Implant Surgery" },
  { src: "/images/gallery-behind-scenes/surgery-32.jpeg", preview: "/images/gallery-behind-scenes/surgery-32.jpeg", label: "Surgical Lighting & Equipment" },
  { src: "/images/gallery-behind-scenes/surgery-02.jpeg", preview: "/images/gallery-behind-scenes/surgery-02.jpeg", label: "Surgical Assisting" },
  { src: "/images/gallery-behind-scenes/lab-01.jpeg", preview: "/images/gallery-behind-scenes/lab-01.jpeg", label: "Sterilization & Prep" },
  { src: "/images/gallery-behind-scenes/lab-03.jpeg", preview: "/images/gallery-behind-scenes/lab-03.jpeg", label: "Procedure Prep" },
  { src: "/images/office-tour/10/gallery@2x-instrument-prep.jpg", preview: "/images/office-tour/10/gallery@2x-instrument-prep.jpg", label: "Подготовка инструментов" },
  { src: "/images/office-tour/11/gallery@2x-digital-workflow.jpg", preview: "/images/office-tour/11/gallery@2x-digital-workflow.jpg", label: "Digital Smile Design" },
  { src: "/images/office-tour/12/gallery@2x-surgical-planning.jpg", preview: "/images/office-tour/12/gallery@2x-surgical-planning.jpg", label: "Станция планирования операций" },
];

const landingOffice: string[] = [];

export default function RuOfficeTour() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const allImages = [...officeImages.map(o => o.src), ...landingOffice];

  return (
    <section id="office-tour" lang="ru" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Экскурсия по офису в Roseville
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            Современная <span className="gradient-text">хирургическая клиника</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            В нашем офисе в Roseville есть КТ (cone beam), отдельные операционные, удобные палаты восстановления и современная стерилизация — всё продумано так, чтобы пациенту было безопасно и комфортно.
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
              <Image src={img.src} alt={`${img.label} — клиника доктора Антипова в Roseville, CA`} fill className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="100vw"
        />
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
              <Image src={src} alt={`Office ${i + 10}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="100vw"
        />
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
              <Image src={allImages[lightbox] ?? ""} alt={`${officeImages[lightbox]?.label ?? "Office"} — клиника доктора Антипова в Roseville`} width={1400} height={900} className="w-full h-auto rounded-2xl" />
              <div className="mt-4 flex justify-between">
                <button onClick={() => setLightbox(Math.max(0, lightbox - 1))} disabled={lightbox === 0} className="px-4 py-2 bg-white/10 rounded-xl text-white text-sm disabled:opacity-30">&larr; Назад</button>
                <span className="text-white text-sm">{lightbox + 1} / {allImages.length}</span>
                <button onClick={() => setLightbox(Math.min(allImages.length - 1, lightbox + 1))} disabled={lightbox === allImages.length - 1} className="px-4 py-2 bg-white/10 rounded-xl text-white text-sm disabled:opacity-30">Вперёд &rarr;</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
