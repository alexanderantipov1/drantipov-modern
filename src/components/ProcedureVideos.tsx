"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const videos = [
  { id: "single-implant", title: "Single Tooth Dental Implant Placement", category: "Implants", thumb: "/videos/single-implant/thumb@2x-a167fdaf.jpg", mp4: "/videos/single-implant/video.mp4", webm: "/videos/single-implant/video.webm" },
  { id: "total-arch-restoration", title: "Full Arch Implant Restoration (All-on-4)", category: "Full Arch", thumb: "/videos/total-arch-restoration/thumb@2x-bd687a4d.jpg", mp4: "/videos/total-arch-restoration/video.mp4", webm: "/videos/total-arch-restoration/video.webm" },
  { id: "corrective-jaw-surgery", title: "Corrective Jaw Surgery (Orthognathic)", category: "Jaw Surgery", thumb: "/videos/corrective-jaw-surgery/thumb@2x-1cdcf81d.jpg", mp4: "/videos/corrective-jaw-surgery/video.mp4", webm: "/videos/corrective-jaw-surgery/video.webm" },
  { id: "sinus-lift", title: "Sinus Lift for Dental Implants", category: "Bone Grafting", thumb: "/videos/sinus-lift/thumb@2x-c15fd225.jpg", mp4: "/videos/sinus-lift/video.mp4", webm: "/videos/sinus-lift/video.webm" },
  { id: "block-bone-graft", title: "Block Bone Graft Procedure", category: "Bone Grafting", thumb: "/videos/block-bone-graft/thumb@2x-a870f52d.jpg", mp4: "/videos/block-bone-graft/video.mp4", webm: "/videos/block-bone-graft/video.webm" },
  { id: "wisdom-teeth-removal", title: "Impacted Wisdom Teeth Extraction", category: "Oral Surgery", thumb: "/videos/wisdom-teeth-removal/thumb@2x-ba22871c.jpg", mp4: "/videos/wisdom-teeth-removal/video.mp4", webm: "/videos/wisdom-teeth-removal/video.webm" },
  { id: "wisdom-teeth-eruption", title: "Wisdom Teeth Eruption Explained", category: "Oral Surgery", thumb: "/videos/wisdom-teeth-eruption/thumb@2x-479b1752.jpg", mp4: "/videos/wisdom-teeth-eruption/video.mp4", webm: "/videos/wisdom-teeth-eruption/video.webm" },
  { id: "tmj", title: "TMJ Disorder — Causes & Treatment", category: "TMJ", thumb: "/videos/tmj/thumb@2x-b0c59fba.jpg", mp4: "/videos/tmj/video.mp4", webm: "/videos/tmj/video.webm" },
  { id: "tmj-normal", title: "TMJ Normal Joint Function", category: "TMJ", thumb: "/videos/tmj-normal/thumb@2x-1cd078c0.jpg", mp4: "/videos/tmj-normal/video.mp4", webm: "/videos/tmj-normal/video.webm" },
  { id: "partial-boney-impaction", title: "Partial Bony Impaction Removal", category: "Oral Surgery", thumb: "/videos/partial-boney-impaction/thumb@2x-95d55bb6.jpg", mp4: "/videos/partial-boney-impaction/video.mp4", webm: "/videos/partial-boney-impaction/video.webm" },
  { id: "molar-uprighting", title: "Molar Uprighting Before Implant", category: "Implants", thumb: "/videos/molar-uprighting-for-implant/thumb@2x-d65e4970.jpg", mp4: "/videos/molar-uprighting-for-implant/video.mp4", webm: "/videos/molar-uprighting-for-implant/video.webm" },
  { id: "single-implant-anterior", title: "Anterior Implant with Socket Grafting", category: "Implants", thumb: "/videos/single-implant-anterior-socket-grafting/thumb@2x-1933e61a.jpg", mp4: "/videos/single-implant-anterior-socket-grafting/video.mp4", webm: "/videos/single-implant-anterior-socket-grafting/video.webm" },
  { id: "single-posterior", title: "Posterior Tooth Replacement Implant", category: "Implants", thumb: "/videos/single-posterior-tooth-replacement-implant/thumb@2x-bb17e5b7.jpg", mp4: "/videos/single-posterior-tooth-replacement-implant/video.mp4", webm: "/videos/single-posterior-tooth-replacement-implant/video.webm" },
  { id: "class-iii-skeletal", title: "Class III Underbite Correction Surgery", category: "Jaw Surgery", thumb: "/videos/class-iii-skeletal/thumb@2x-c7aee2eb.jpg", mp4: "/videos/class-iii-skeletal/video.mp4", webm: "/videos/class-iii-skeletal/video.webm" },
  { id: "palatal-expansion", title: "Surgically Assisted Palatal Expansion (SARPE)", category: "Jaw Surgery", thumb: "/videos/surgically-assisted-palatal-expansion/thumb@2x-1411fc63.jpg", mp4: "/videos/surgically-assisted-palatal-expansion/video.mp4", webm: "/videos/surgically-assisted-palatal-expansion/video.webm" },
];

export default function ProcedureVideos() {
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null);

  return (
    <section id="procedure-videos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Patient Education Videos
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            See How Each <span className="gradient-text">Procedure Works</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Explore detailed 3D animations of dental implant placement, jaw surgery, wisdom teeth extraction, and more. Understanding your procedure helps you feel confident and prepared.
          </p>
        </motion.div>

        {/* YouTube feature video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              src="https://www.youtube.com/embed/oH9rF2-DUQo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
          <p className="text-center text-muted text-sm mt-3">Featured: Patient Testimonial Video</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {videos.map((v, i) => (
            <motion.button
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              onClick={() => setActiveVideo(v)}
              className="group relative rounded-2xl overflow-hidden bg-dark/5 text-left"
            >
              <div className="relative aspect-square">
                <Image
                  src={v.thumb}
                  alt={v.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-primary ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <span className="text-[10px] font-medium text-primary">{v.category}</span>
                <p className="text-xs font-semibold text-dark leading-tight mt-0.5">{v.title}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <video
                controls
                autoPlay
                className="w-full rounded-2xl"
                poster={activeVideo.thumb}
              >
                <source src={activeVideo.webm} type="video/webm" />
                <source src={activeVideo.mp4} type="video/mp4" />
              </video>
              <p className="text-white text-center mt-4 font-semibold">{activeVideo.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
