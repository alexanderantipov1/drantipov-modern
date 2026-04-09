"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const advantages = [
  {
    title: "Same-Day Teeth — Walk Out Smiling",
    description:
      "Using the All-on-4 and All-on-6 immediate-loading protocols, Dr. Antipov places dental implants and attaches a full set of temporary teeth in a single visit. You arrive with missing or failing teeth and leave the same day with a complete, natural-looking smile. No waiting months without teeth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Board-Certified Oral & Maxillofacial Surgeon",
    description:
      "Dr. Antipov is a Diplomate of the American Board of Oral & Maxillofacial Surgery with over 25 years of surgical experience and 10,000+ successful procedures. He completed his residency and fellowship training at top-tier institutions, specializing in complex implant reconstruction, jaw surgery, and facial cosmetics.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Complete Care Under One Roof",
    description:
      "3D cone beam CT imaging, fully equipped surgical suites, IV sedation, bone grafting, implant placement, and prosthetic restoration — all performed at our single Roseville location. No referrals, no bouncing between specialists. Your entire treatment journey from consultation to final teeth happens right here.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0H21" />
      </svg>
    ),
  },
  {
    title: "3D Computer-Guided Surgery",
    description:
      "Every implant and jaw surgery case is planned using advanced 3D cone beam CT imaging and virtual surgical planning software. Computer-guided surgical templates ensure each implant is placed at the precise angle, depth, and position for optimal long-term results. This technology dramatically reduces surgery time and speeds recovery.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Organic & Holistic Bone Grafting",
    description:
      "For patients who prefer a natural approach, Dr. Antipov offers organic and holistic bone grafting options using minimally processed, naturally derived materials. From autogenous bone grafts to biocompatible allograft and xenograft materials, we match the bone regeneration technique to your body and your values — without compromising clinical outcomes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Comfortable IV Sedation & Anesthesia",
    description:
      "Every surgical procedure is performed under monitored IV sedation or general anesthesia administered by trained professionals in our fully equipped surgical suites. You remain comfortable and relaxed throughout — most patients remember nothing at all. We prioritize your comfort and safety at every step of the process.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: "Flexible Financing — Starting at $99/Month",
    description:
      "We believe everyone deserves access to life-changing dental care. Our practice offers flexible financing through multiple lending partners with options starting at $99/month. We accept all major insurance plans, PPO dental insurance, CareCredit, and offer interest-free payment plans to make dental implants, jaw surgery, and cosmetic procedures affordable.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Lifetime Results — Built to Last",
    description:
      "Unlike bridges and dentures that need replacement every 5-10 years, titanium dental implants integrate permanently with your jawbone through osseointegration and are designed to last a lifetime. Our premium zirconia prosthetics are virtually indestructible, stain-resistant, and backed by a comprehensive warranty for lasting peace of mind.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function Results() {
  return (
    <section id="results" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Why Patients Choose Dr. Antipov
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            The Advantages of
            <br />
            <span className="gradient-text">Our Approach</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            When you choose Dr. Antipov for dental implants, jaw surgery, or facial cosmetic procedures, you are choosing a board-certified oral and maxillofacial surgeon with 25+ years of expertise, cutting-edge 3D technology, and a commitment to delivering the best possible outcomes at every stage of care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-8 rounded-3xl border border-dark/5 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-500"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Gallery preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 relative rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-3 gap-2">
            {[
              "/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg",
              "/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg",
              "/images/landing-pages/dental-implants/art/slider01-e9be043d.jpg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt={`Dental implant patient results — same-day teeth, full arch restoration — Dr. Antipov, Roseville CA — Photo ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
