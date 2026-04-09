import { Section, Container } from "@/components/sections"
import { Award, Users, Lightbulb, Shield } from "lucide-react"

/**
 * WhyChooseSection - Key differentiators
 *
 * Features:
 * - 4 key reasons to choose Dr. Antipov
 * - Icon-based cards
 * - Responsive grid
 */
export function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      title: "Board Certified Excellence",
      description:
        "Diplomate of the American Board of Oral & Maxillofacial Surgery with rigorous continuing education and skill mastery.",
    },
    {
      icon: Lightbulb,
      title: "Advanced Technology",
      description:
        "Utilizing the latest surgical techniques, 3D imaging, and computer-guided surgery for superior precision and outcomes.",
    },
    {
      icon: Users,
      title: "Trusted by Dentists",
      description:
        "Preferred referral partner for 100+ general dentists across Northern California who trust us with their most complex cases.",
    },
    {
      icon: Shield,
      title: "Comprehensive Care",
      description:
        "From initial consultation through recovery, we provide personalized attention and support every step of the way.",
    },
  ]

  return (
    <Section background="default" padding="xl" id="why-choose">
      <Container size="lg">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
            Why Choose Dr. Antipov
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Experience the difference of specialized oral surgery care with proven expertise and patient-centered approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl hover:bg-neutral-50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {reason.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
