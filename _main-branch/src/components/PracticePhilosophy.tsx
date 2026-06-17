"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function PracticePhilosophy() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-bone/40 via-white to-bone/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <Heart className="h-12 w-12 text-primary mx-auto" aria-hidden="true" />
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
            Practice Philosophy
          </h2>

          <div className="text-lg lg:text-xl text-neutral-700 leading-relaxed space-y-6">
            <p>
              &ldquo;My approach to oral surgery is rooted in the belief that every patient deserves exceptional care
              delivered with compassion and respect. I take the time to understand each patient&apos;s unique needs
              and concerns, creating customized treatment plans that achieve optimal outcomes.&rdquo;
            </p>
            <p>
              &ldquo;Continuing education is paramount in our rapidly evolving field. I remain committed to staying
              at the forefront of surgical techniques and technologies, ensuring my patients benefit from the
              latest advancements in oral and maxillofacial surgery.&rdquo;
            </p>
            <p className="font-semibold text-neutral-900">— Dr. Alexander Antipov</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
