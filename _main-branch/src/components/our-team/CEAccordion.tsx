"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CEAccordionProps {
  courses: string[];
}

export function CEAccordion({ courses }: CEAccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-bone/30 transition-colors"
        aria-expanded={open}
      >
        <div>
          <h3 className="font-serif text-2xl font-bold text-neutral-900">
            Continuing Education
          </h3>
          <p className="text-sm text-neutral-600 mt-0.5">
            {courses.length} advanced courses & forums completed
          </p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="h-6 w-6 text-primary" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-1 border-t border-neutral-100">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 mt-4">
                {courses.map((course, i) => (
                  <li
                    key={i}
                    className="text-sm text-neutral-700 leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="text-primary text-xs mt-1.5 flex-shrink-0">▸</span>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
