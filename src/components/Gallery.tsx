"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  "/images/slides/1/1844-99036b3b.jpg",
  "/images/slides/2/1844-5d2d5b72.jpg",
  "/images/slides/3/1844-169e16e0.jpg",
  "/images/slides/4/1844-4a4e4d77.jpg",
  "/images/slides/5/1844-05bcf948.jpg",
];

const procedureImages = [
  { src: "/images/dental-implants/multiple-implants-900aa5f6.jpg", label: "Multiple Implants" },
  { src: "/images/dental-implants/teeth-in-an-hour-64d330c5.jpg", label: "Teeth in an Hour" },
  { src: "/images/corrective-jaw-surgery/corrective-jaw-surgery-97156448.jpg", label: "Corrective Jaw Surgery" },
  { src: "/images/other-procedures/wisdom-teeth-removal-9108ccc6.jpg", label: "Wisdom Teeth Removal" },
  { src: "/images/online-consultation/online-consult-f296cd04.jpg", label: "Online Consultation" },
  { src: "/images/landing-pages/dental-implants/art/product05-703c368c.jpg", label: "Dental Restoration" },
];

// Template placeholder images excluded (slider04-06, image-background01-03 are generic stock/watermarked assets)

const testimonialPreviews = [
  { src: "/images/testimonials/video-preview-1@2x-61d7adf2.jpg", label: "Patient Testimonial 1" },
  { src: "/images/testimonials/video-preview-2@2x-65448b6e.jpg", label: "Patient Testimonial 2" },
  { src: "/images/testimonials/video-preview-3@2x-adae89ec.jpg", label: "Patient Testimonial 3" },
];

// Template placeholders excluded (pattern-background is stock collage, meet-the-doctor already used in About)
const additionalImages = [
  "/images/video-preview-1266beb9.jpg",
  "/images/other-procedures/video-preview-1@2x-eb855a82.jpg",
  "/images/online-consultation/online-consult@2x-6555264c.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Photo Gallery
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            Inside Our <span className="gradient-text">Practice</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Browse images from our Roseville office, surgical procedures, and real patient experiences.
          </p>
        </motion.div>

        {/* Homepage hero slides */}
        <h3 className="text-lg font-bold text-dark mb-4">Featured Slides</h3>
        <div className="grid grid-cols-5 gap-2 mb-12">
          {slides.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl overflow-hidden">
              <Image src={src} alt={`Featured ${i + 1}`} width={400} height={250} className="w-full h-auto" />
            </motion.div>
          ))}
        </div>

        {/* Procedure detail images */}
        <h3 className="text-lg font-bold text-dark mb-4">Procedures</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {procedureImages.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative rounded-2xl overflow-hidden group">
              <Image src={img.src} alt={img.label} width={500} height={350} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark/70 to-transparent pt-8 pb-3 px-4">
                <span className="text-white text-sm font-semibold">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video testimonials */}
        <h3 className="text-lg font-bold text-dark mb-4">Video Testimonials</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {testimonialPreviews.map((t, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden">
              <Image src={t.src} alt={t.label} width={600} height={350} className="w-full h-auto" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-primary ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional images */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {additionalImages.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden">
              <Image src={src} alt={`Additional ${i + 1}`} width={300} height={200} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
