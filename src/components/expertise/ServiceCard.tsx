"use client"

import { GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Smile,
  Bone,
  Wind,
  ScissorsLineDashed,
  Sparkles,
  ArrowRight
} from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

const iconMap = {
  teeth: Smile,
  tooth: Smile,
  bone: Bone,
  jaw: ScissorsLineDashed,
  sleep: Wind,
  sparkles: Sparkles,
} as const

interface ServiceCardProps {
  title: string
  description: string
  icon: keyof typeof iconMap
  href: string
  index: number
}

export function ServiceCard({ title, description, icon, href, index }: ServiceCardProps) {
  const Icon = iconMap[icon] || Smile

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      transition={{ delay: index * 0.1 }}
    >
      <GlassCard variant="hover" className="h-full flex flex-col">
        <div className="flex flex-col items-center text-center space-y-4 flex-1">
          <div className="p-4 rounded-2xl bg-primary-100">
            <Icon className="h-12 w-12 text-primary-600" />
          </div>

          <h3 className="text-2xl font-serif font-bold text-neutral-900">
            {title}
          </h3>

          <p className="text-neutral-600 leading-relaxed flex-1">
            {description}
          </p>

          <Button asChild variant="outline" className="w-full group">
            <Link href={href}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </GlassCard>
    </motion.div>
  )
}
