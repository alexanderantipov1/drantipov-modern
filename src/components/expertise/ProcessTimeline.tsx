"use client"

import { GlassCard } from "@/components/sections"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

interface TimelineStep {
  step: number
  title: string
  description: string
  duration?: string
}

interface ProcessTimelineProps {
  steps: TimelineStep[]
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="space-y-6">
      {steps.map((item, index) => (
        <motion.div
          key={item.step}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          transition={{ delay: index * 0.1 }}
        >
          <GlassCard className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                {item.step}
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {item.title}
                </h3>
                {item.duration && (
                  <span className="text-sm text-primary-600 font-medium whitespace-nowrap">
                    {item.duration}
                  </span>
                )}
              </div>
              <p className="text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  )
}
