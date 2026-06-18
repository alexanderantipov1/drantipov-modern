import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import Image from "next/image"

const latestPosts = [
  {
    slug: "implants-vs-dentures",
    title: "Say Goodbye to Dentures: Discover the Cutting-Edge Dental Implants of 2024",
    excerpt: "Explore the latest innovations in dental implant technology including 3D printing, nanotechnology, and smart implants.",
    date: "August 13, 2024",
    image: "/images/blog/2024-08-13/implants-vs-dentures-78639392.jpg",
    category: "Dental Implants",
  },
  {
    slug: "tooth-lost-emotional-toll",
    title: "The Hidden Emotional Toll of Tooth Loss",
    excerpt: "Discover how tooth loss affects self-esteem, social interactions, and mental health.",
    date: "August 9, 2024",
    image: "/images/blog/2024-08-09/tooth-lost-emotional-toll-fcc97e30.jpg",
    category: "Patient Care",
  },
  {
    slug: "poor-oral-health-systemic-diseases",
    title: "How Poor Oral Health Can Lead to Cancer and Systemic Diseases",
    excerpt: "Learn about the connection between oral bacteria and systemic diseases including cancer and heart disease.",
    date: "August 8, 2024",
    image: "/images/blog/2024-08-08/poor-oral-health-733c21c2.jpg",
    category: "Oral Health",
  },
]

export function LatestInsightsSection() {
  return (
    <Section background="gradient" padding="xl">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="text-base px-4 py-2 bg-primary-100 text-primary-700 hover:bg-primary-200 mb-4">
            <BookOpen className="h-4 w-4 inline mr-2" />
            Patient Education
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Stay informed with expert insights on dental implants, oral surgery, and oral health
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post, index) => (
            <GlassCard key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <Link href={`/for-patients/insights/${post.slug}`} className="block">
                {/* Image */}
                <div className="relative h-48 bg-neutral-200 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <Badge variant="outline" className="text-primary-700 border-primary-300">
                    {post.category}
                  </Badge>

                  <h3 className="text-xl font-semibold text-neutral-900 leading-tight line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-neutral-600 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4">
                    <time className="text-xs text-neutral-500">{post.date}</time>
                    <div className="flex items-center text-primary-600 text-sm font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </GlassCard>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/for-patients/insights">
              View All Insights
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
