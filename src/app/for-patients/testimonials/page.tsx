import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, Quote, Heart } from "lucide-react"
import { YouTubeShortsSection } from "@/components/home/YouTubeShortsSection"

export const metadata = {
  title: "Patient Testimonials & Reviews | Real Results | Dr. Antipov",
  description:
    "Read and watch real patient testimonials about their experiences with Dr. Antipov. Life-changing dental implant, jaw surgery, and full-arch restoration results.",
}

const writtenTestimonials = [
  {
    name: "Robert T.",
    procedure: "Dental Implants",
    rating: 5,
    date: "October 2025",
    review:
      "Dr. Antipov is simply the best. I was nervous about getting implants, but he took the time to explain everything in detail and made sure I was comfortable. The surgery was painless, and the results exceeded my expectations. I can eat anything now without worry. Highly recommend!",
  },
  {
    name: "Jennifer S.",
    procedure: "Bone Grafting & Implants",
    rating: 5,
    date: "September 2025",
    review:
      "After being told by another dentist that I didn't have enough bone for implants, Dr. Antipov performed bone grafting and successfully placed my implants 6 months later. His expertise and patience throughout the process were remarkable. I'm so grateful for his skill.",
  },
  {
    name: "David W.",
    procedure: "Full-Arch Restoration",
    rating: 5,
    date: "August 2025",
    review:
      "I lived with dentures for 10 years and hated every minute. Dr. Antipov gave me fixed teeth in one day with the All-on-4 procedure. The difference in my quality of life is incredible. I can eat steak again! His staff is wonderful, and he's a true professional.",
  },
  {
    name: "Lisa M.",
    procedure: "Wisdom Teeth Removal",
    rating: 5,
    date: "July 2025",
    review:
      "My daughter needed her wisdom teeth removed, and we were referred to Dr. Antipov. He made her feel so comfortable, and the recovery was much easier than we expected. Great with young patients. Would absolutely recommend to other parents.",
  },
  {
    name: "Michael P.",
    procedure: "Sleep Apnea Surgery",
    rating: 5,
    date: "June 2025",
    review:
      "I struggled with CPAP for years before Dr. Antipov performed jaw advancement surgery. It completely resolved my sleep apnea. I sleep through the night now, and my energy levels are amazing. This surgery changed my life, and I'm so thankful I found Dr. Antipov.",
  },
  {
    name: "Patricia R.",
    procedure: "Corrective Jaw Surgery",
    rating: 5,
    date: "May 2025",
    review:
      "Dr. Antipov corrected my severe underbite with orthognathic surgery. Not only can I chew properly now, but my face looks so much more balanced. He's an artist as well as a surgeon. The care I received from him and his team was outstanding.",
  },
]

const stats = [
  { number: "500+", label: "Successful Full-Arch Cases" },
  { number: "98%", label: "Patient Satisfaction Rate" },
  { number: "1,200+", label: "Dental Implants Placed Annually" },
  { number: "4.9/5", label: "Average Google Rating" },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="pt-32">
        <Container size="lg">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge className="text-base px-4 py-2 bg-primary-100 text-primary-700 hover:bg-primary-200">
              Patient Stories
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900">
              Real Patients. Life-Changing Results.
            </h1>

            <p className="text-xl lg:text-2xl text-neutral-600">
              Hear directly from patients about their experiences with Dr. Antipov
            </p>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Video Testimonials Section - YouTube Shorts */}
      <YouTubeShortsSection />

      {/* Written Testimonials Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <Quote className="h-12 w-12 text-primary-600 mx-auto" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Patient Reviews
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Read what patients have to say about their treatment experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {writtenTestimonials.map((testimonial, index) => (
              <GlassCard key={index}>
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-accent-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-neutral-700 leading-relaxed">{testimonial.review}</p>

                  {/* Patient Info */}
                  <div className="pt-4 border-t border-neutral-200">
                    <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-600">{testimonial.procedure}</p>
                    <p className="text-xs text-neutral-500 mt-1">{testimonial.date}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <p className="text-neutral-600">
              Read more reviews on{" "}
              <a href="#" className="text-primary-600 hover:underline font-medium">
                Google
              </a>
              ,{" "}
              <a href="#" className="text-primary-600 hover:underline font-medium">
                Yelp
              </a>
              , and{" "}
              <a href="#" className="text-primary-600 hover:underline font-medium">
                Healthgrades
              </a>
            </p>
          </div>
        </Container>
      </Section>

      {/* Trust Section */}
      <Section background="gradient" padding="xl">
        <Container size="lg">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Heart className="h-12 w-12 text-primary-600 mx-auto" />
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Join Our Family of Happy Patients
            </h2>
            <p className="text-xl text-neutral-600">
              Experience the same exceptional care and life-changing results our patients rave about
            </p>

            <GlassCard className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <p className="text-neutral-700 italic text-lg leading-relaxed">
                  "Every patient is special to me, and I take the time to understand their unique needs and concerns.
                  My goal is not just to perform excellent surgery, but to create an experience where patients feel
                  heard, cared for, and confident in their treatment."
                </p>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="font-semibold text-neutral-900">Dr. Alexander Antipov</p>
                  <p className="text-sm text-neutral-600">Board-Certified Oral & Maxillofacial Surgeon</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-neutral-600">
              Schedule a consultation and experience the exceptional care our patients describe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn About Dr. Antipov</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
