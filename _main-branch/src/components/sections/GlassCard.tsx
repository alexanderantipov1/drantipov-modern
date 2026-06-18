"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  variant?: "default" | "hover" | "dark" | "premium"
  blur?: "sm" | "md" | "lg" | "xl"
}

/**
 * GlassCard - Glassmorphism card component.
 * variants:
 *  - default: subtle frosted white
 *  - hover:   default + lift + shadow on hover (use for clickable cards)
 *  - dark:    dark navy frosted
 *  - premium: stronger frost + gradient border + glow on hover (Block I)
 */
export function GlassCard({
  children,
  className,
  variant = "default",
  blur = "lg",
  ...props
}: GlassCardProps) {
  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  }

  const variantClasses: Record<NonNullable<GlassCardProps["variant"]>, string> = {
    default: "bg-white/75 border-white/40 shadow-md",
    hover:
      "bg-white/75 border-white/40 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/85 hover:border-primary/30",
    dark: "bg-navy/70 border-white/10 text-white shadow-lg",
    premium:
      "bg-white/65 border-white/50 shadow-lg ring-1 ring-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(14,62,94,0.25)] hover:bg-white/80 hover:border-primary/40",
  }

  return (
    <motion.div
      className={cn(
        "rounded-3xl border",
        blurClasses[blur],
        variantClasses[variant],
        "p-6 lg:p-8",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
