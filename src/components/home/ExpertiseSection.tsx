import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Smile, Bone, Wind, ScissorsLineDashed, Sparkles } from "lucide-react"
import { expertise } from "@/constants/siteConfig"

const iconMap = {
  teeth: Smile,
  tooth: Smile,
  bone: Bone,
  jaw: ScissorsLineDashed,
  sleep: Wind,
  sparkles: Sparkles,
} as const

/**
 * ExpertiseSection - Showcase services on homepage
 *
 * Features:
 * - Service cards with hover effects
 * - Links to individual service pages
 * - Responsive grid layout
 */
export function ExpertiseSection() {
  return (
    <Section background="gradient" padding="xl" id="expertise">
      <Container size="lg">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
            Surgical Expertise
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Advanced oral and maxillofacial surgical procedures with precision, compassion, and proven results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {expertise.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Smile
            return (
              <Link key={service.id} href={service.href}>
                <GlassCard variant="hover" className="h-full group">
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>

                    <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                      {service.shortTitle}
                    </h3>

                    <p className="text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-1 transition-transform">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/expertise">View All Services</Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
