import React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
  as?: "div" | "section" | "article" | "main"
}

/**
 * Container - Max-width content wrapper with responsive padding
 *
 * Features:
 * - Multiple max-width options
 * - Centered content
 * - Consistent horizontal padding
 * - Responsive sizing
 *
 * @example
 * <Container size="lg">
 *   <h1>Page Title</h1>
 *   <p>Content...</p>
 * </Container>
 */
export function Container({
  children,
  className,
  size = "lg",
  as: Component = "div",
}: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-3xl",      // 768px
    md: "max-w-5xl",      // 1024px
    lg: "max-w-7xl",      // 1280px
    xl: "max-w-[1440px]", // 1440px
    full: "max-w-full",   // No max-width
  }

  return (
    <Component
      className={cn(
        // Centering
        "mx-auto",
        // Responsive padding
        "px-4 sm:px-6 lg:px-8",
        // Max width
        sizeClasses[size],
        // Width
        "w-full",
        // Custom classes
        className
      )}
    >
      {children}
    </Component>
  )
}
