"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ConsultationModal } from "@/components/forms/ConsultationModal";

const caseSteps = [
  {
    src: "/images/fullarch/01-before-damaged.jpeg",
    alt: "Before full arch dental implants — severely damaged and worn upper teeth requiring complete restoration by Dr. Antipov",
    label: "Before",
    description: "Severely worn and damaged upper teeth — patient unable to eat or smile comfortably",
  },
  {
    src: "/images/fullarch/02-teeth-extracted.jpeg",
    alt: "Upper teeth extracted revealing damaged roots and bone loss — preparation for All-on-4 dental implants",
    label: "Extractions",
    description: "Damaged teeth carefully removed, revealing bone loss in the anterior maxilla",
  },
  {
    src: "/images/fullarch/03-implant-sites-prepared.jpeg",
    alt: "Implant osteotomy sites prepared in upper jawbone — surgical preparation for full arch implant placement",
    label: "Sites Prepared",
    description: "Precise osteotomy sites drilled using 3D computer-guided surgical planning",
  },
  {
    src: "/images/fullarch/04-bone-graft-placed.jpeg",
    alt: "Organic bone graft material placed in extraction sockets with titanium fixation plate for ridge augmentation",
    label: "Bone Grafting",
    description: "Organic bone graft packed into deficient areas to rebuild the jawbone foundation",
  },
  {
    src: "/images/fullarch/05-plate-fixation.jpeg",
    alt: "Titanium fixation plate and screws securing bone graft in anterior maxilla — bone augmentation for dental implants",
    label: "Plate Fixation",
    description: "Titanium plate and fixation screws stabilize the graft for optimal bone regeneration",
  },
  {
    src: "/images/fullarch/06-bone-graft-packed.jpeg",
    alt: "Bone graft fully packed around titanium plate with particulate bone material for maximum ridge augmentation",
    label: "Graft Complete",
    description: "Particulate bone graft fully packed to restore the ridge volume for implant support",
  },
  {
    src: "/images/fullarch/07-implants-abutments.jpeg",
    alt: "Four dental implant abutments protruding through healed gums — All-on-4 implants ready for final zirconia bridge",
    label: "Implants Ready",
    description: "Four osseointegrated implants with healing abutments — ready for the final restoration",
  },
  {
    src: "/images/fullarch/08-final-result.jpeg",
    alt: "Beautiful final result after full arch All-on-4 dental implant restoration — natural looking zirconia teeth by Dr. Antipov",
    label: "Final Result",
    description: "Beautiful, natural-looking full arch zirconia restoration — a brand new smile",
  },
];

export default function FullArchShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = useCallback(() => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  }, [isVideoPlaying]);

  // Auto-advance slides
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || isVideoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % caseSteps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isVideoPlaying]);

  const goToStep = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  return (
    <section id="full-arch" className="py-24 lg:py-32 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Real Patient Case Study
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Full Arch <span className="gradient-text">Transformation</span>
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            Watch a complete All-on-4 dental implant journey — from damaged teeth to a brand new smile. Every step performed by Dr. Antipov at our Roseville office.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Main image / video display */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Video player */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 mb-6">
              <div className="relative aspect-[9/16] sm:aspect-[3/4] max-h-[600px] bg-black">
                {/* Case step image */}
                <AnimatePresence mode="wait">
                  {!isVideoPlaying && (
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={caseSteps[activeStep]?.src ?? ""}
                        alt={caseSteps[activeStep]?.alt ?? ""}
                        fill
                        className="object-cover"
                        quality={85}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                      {/* Step label */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          {activeStep + 1} of {caseSteps.length} — {caseSteps[activeStep]?.label}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Video */}
                <video
                  ref={videoRef}
                  src="/videos/fullarch-case-study.mp4"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    isVideoPlaying ? "opacity-100" : "opacity-0"
                  }`}
                  playsInline
                  onEnded={() => setIsVideoPlaying(false)}
                />

                {/* Bottom gradient overlay for description */}
                {!isVideoPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-16">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={activeStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-white/90 text-sm leading-relaxed"
                      >
                        {caseSteps[activeStep]?.description}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>

            {/* Play video button */}
            <button
              onClick={toggleVideo}
              className={`w-full py-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-3 transition-all duration-300 ${
                isVideoPlaying
                  ? "bg-white/10 text-white border border-white/20 hover:bg-white/15"
                  : "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20"
              }`}
            >
              {isVideoPlaying ? (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Pause Video
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Full Case Video
                </>
              )}
            </button>
          </motion.div>

          {/* Right: Step-by-step timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-2">
              {caseSteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => goToStep(i)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 group ${
                    activeStep === i
                      ? "bg-primary/10 border border-primary/30"
                      : "bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={step.src}
                      alt={step.label}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                    {activeStep === i && (
                      <div className="absolute inset-0 border-2 border-primary rounded-xl" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          activeStep === i
                            ? "bg-primary text-white"
                            : i < activeStep
                            ? "bg-primary/20 text-primary"
                            : "bg-white/10 text-white/40"
                        }`}
                      >
                        {i === 0 ? "Before" : i === caseSteps.length - 1 ? "After" : `Step ${i}`}
                      </span>
                      <span
                        className={`font-bold text-sm ${
                          activeStep === i ? "text-white" : "text-white/70"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        activeStep === i ? "text-white/70" : "text-white/40"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Active indicator */}
                  {activeStep === i && (
                    <div className="shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20">
              <h4 className="text-white font-bold text-lg mb-2">
                Ready for Your Transformation?
              </h4>
              <p className="text-white/60 text-sm mb-4">
                Full arch dental implants starting at $21,000/arch. Same-day teeth available. Free 3D CT scan and consultation.
              </p>
              <div className="flex flex-wrap gap-3">
                <ConsultationModal>
                  <button
                    className="px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-dark transition-all duration-300 pulse-glow cursor-pointer"
                  >
                    Book Free Consultation
                  </button>
                </ConsultationModal>
                <a
                  href="tel:9167832110"
                  className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold text-sm hover:bg-white/20 transition-all border border-white/10"
                >
                  (916) 783-2110
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
