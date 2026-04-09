"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I had a single tooth extraction and implant placement. Everything was done in one day. The whole process was quick and painless. I'm very grateful to Dr. Antipov for his great work.",
    name: "Sarah M.",
    procedure: "Single Tooth Implant",
    location: "Roseville, CA",
    stars: 5,
  },
  {
    quote:
      "I had large bone grafting with sinus lifts on both sides of the upper jaw with multiple implants and I got teeth in a day. Everything went very smoothly without any complications. Now look at my new smile!",
    name: "Michael R.",
    procedure: "All-on-4 Full Arch Implants with Bone Grafting",
    location: "Sacramento, CA",
    stars: 5,
  },
  {
    quote:
      "Dr. Antipov and his team made me feel comfortable from the very first consultation. The results exceeded my expectations. I can finally eat my favorite foods and smile with confidence again.",
    name: "Linda K.",
    procedure: "Full Mouth Restoration",
    location: "Folsom, CA",
    stars: 5,
  },
  {
    quote:
      "I flew from Honolulu to see Dr. Antipov because of his reputation for corrective jaw surgery. He performed Le Fort and BSSO to fix my severe underbite. The transformation is absolutely life-changing. Worth every mile traveled.",
    name: "Val M.",
    procedure: "Orthognathic Jaw Surgery",
    location: "Honolulu, HI",
    stars: 5,
  },
  {
    quote:
      "After years of wearing dentures that would slip and cause embarrassment, Dr. Antipov gave me permanent teeth with the All-on-4 technique. The same day! I cried tears of joy in the parking lot. Best decision I ever made.",
    name: "Vadim S.",
    procedure: "All-on-4 Same-Day Dental Implants",
    location: "Citrus Heights, CA",
    stars: 5,
  },
  {
    quote:
      "Dr. Antipov performed my rhinoplasty and the results are so natural — everyone says I look refreshed but no one can tell I had surgery. His understanding of facial bone structure as an oral surgeon gives him an incredible advantage.",
    name: "Chieko T.",
    procedure: "Rhinoplasty",
    location: "Yuba City, CA",
    stars: 5,
  },
  {
    quote:
      "I was told by three other surgeons that I didn't have enough bone for implants. Dr. Antipov performed zygomatic implants and I walked out with teeth the same day. He literally changed my life when no one else could help me.",
    name: "Robert J.",
    procedure: "Zygomatic Implants — Full Arch",
    location: "Reno, NV",
    stars: 5,
  },
  {
    quote:
      "My daughter had corrective jaw surgery for her open bite and facial asymmetry. Dr. Antipov used 3D computer planning and the results were beyond what we imagined. Her confidence has skyrocketed. We're so grateful.",
    name: "Evelina C.",
    procedure: "Corrective Jaw Surgery — Le Fort & Genioplasty",
    location: "Citrus Heights, CA",
    stars: 5,
  },
  {
    quote:
      "I chose Dr. Antipov for my All-on-6 implants because he uses organic bone grafting materials. The holistic approach was very important to me. The surgery was comfortable under IV sedation and my new teeth look absolutely beautiful.",
    name: "Patricia L.",
    procedure: "All-on-6 Implants with Organic Bone Grafting",
    location: "Walnut Creek, CA",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,187,156,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,174,239,0.1),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Real Patient Reviews &amp; Testimonials
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Trusted by Thousands of
            <br />
            <span className="gradient-text">Patients Across Northern California</span>
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Hear from real patients who chose Dr. Antipov for dental implants, jaw surgery, facial cosmetic procedures, and bone grafting. Patients travel from Sacramento, San Francisco, Reno, and beyond for his expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-dark rounded-3xl p-7 hover:border-primary/30 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/80 leading-relaxed mb-5 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.procedure}</p>
                  <p className="text-white/40 text-[10px]">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-white/40 text-sm"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.9/5 Average Rating
          </div>
          <div>300+ Verified Patient Reviews</div>
          <div>Preferred by 100+ Referring Dentists</div>
          <div>Patients Travel from 3+ Hours Away</div>
        </motion.div>
      </div>
    </section>
  );
}
