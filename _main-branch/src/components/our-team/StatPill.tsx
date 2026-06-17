"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StatPillProps {
  /** Icon element, e.g. <Trophy className="h-5 w-5 text-primary" /> */
  icon: ReactNode;
  /** Value — string OR ReactNode (e.g. <AnimatedCounter to={25} suffix="+" />) */
  value: ReactNode;
  label: string;
  delay?: number;
}

export function StatPill({ icon, value, label, delay = 0 }: StatPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3"
    >
      <span className="flex-shrink-0">{icon}</span>
      <div className="leading-tight text-left">
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-[11px] uppercase tracking-widest text-white/70">{label}</div>
      </div>
    </motion.div>
  );
}
