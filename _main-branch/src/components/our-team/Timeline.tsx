"use client";

import { motion } from "framer-motion";

export interface TimelineItem {
  year: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l-2 border-primary/30 space-y-8 pl-8">
      {items.map((item, i) => (
        <motion.li
          key={`${item.year}-${item.title}-${item.subtitle ?? ""}-${i}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="relative"
        >
          <span className="absolute -left-[42px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-primary ring-4 ring-white shadow-md">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
          </span>
          <time className="text-xs font-bold text-primary tracking-wider uppercase">
            {item.year}
          </time>
          <h4 className="font-serif text-xl font-bold text-neutral-900 mt-1">
            {item.title}
          </h4>
          {item.subtitle && (
            <p className="text-sm text-neutral-600 mt-0.5">{item.subtitle}</p>
          )}
          {item.description && (
            <p className="text-neutral-700 mt-2 leading-relaxed">{item.description}</p>
          )}
        </motion.li>
      ))}
    </ol>
  );
}
