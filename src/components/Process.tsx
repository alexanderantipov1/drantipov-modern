"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Free Consultation & 3D CT Scan",
    description:
      "Your journey starts with a complimentary consultation at our Roseville office. Dr. Antipov performs a thorough examination with a free 3D cone beam CT scan, discusses your goals, develops a personalized treatment plan for dental implants, jaw surgery, or cosmetic procedures, and reviews all financial options — at no cost to you.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Computer-Guided Surgery Day",
    description:
      "On procedure day, Dr. Antipov uses 3D surgical guides and computer-assisted planning for precise execution. For dental implants, your All-on-4 or All-on-6 implants are placed and same-day temporary teeth attached — all under comfortable IV sedation. For jaw surgery, 3D virtual planning ensures millimeter-accurate repositioning.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Guided Recovery & Healing",
    description:
      "Our team monitors your progress with scheduled follow-up visits. For implant patients, we track osseointegration as your titanium implants fuse permanently with your jawbone. For jaw surgery patients, we coordinate closely with your orthodontist. You'll have direct access to Dr. Antipov's team throughout your recovery.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Permanent Results for Life",
    description:
      "Once healing is complete, your permanent prosthesis is placed — custom-crafted from premium zirconia or porcelain. These teeth look, feel, and function like natural teeth. Titanium dental implants are designed to last a lifetime with routine care, and jaw surgery results are permanent. Welcome to your new smile.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Your Treatment Journey
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-dark tracking-tight">
            From Free Consultation to<br />
            <span className="gradient-text">Permanent Smile</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            A clear, four-step path to the smile you deserve — starting with a complimentary consultation and 3D CT scan at our Roseville office. Whether you need dental implants, jaw surgery, or facial cosmetic procedures, every step is guided by Dr. Antipov&apos;s board-certified expertise and advanced technology.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center group"
              >
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:scale-110">
                  {step.icon}
                </div>
                <span className="text-5xl font-bold text-light select-none absolute -top-2 left-1/2 -translate-x-1/2 text-primary/[0.07]">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
