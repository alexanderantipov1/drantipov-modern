import Link from "next/link"
import Image from "next/image"
import { Section, Container, GlassCard } from "@/components/sections"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { getRelatedInsights } from "@/constants/insights"

interface RelatedArticlesProps {
  /** Slug of the current article, excluded from the related list. */
  currentSlug: string
  /** Number of related articles to show. */
  count?: number
}

export function RelatedArticles({ currentSlug, count = 3 }: RelatedArticlesProps) {
  const related = getRelatedInsights(currentSlug, count)
  if (related.length === 0) return null

  return (
    <Section background="gradient" padding="xl">
      <Container size="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-3">
            Related Articles
          </h2>
          <p className="text-lg text-neutral-600">
            Keep learning with more insights from Dr. Antipov
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((post) => (
            <GlassCard
              key={post.slug}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/for-patients/insights/${post.slug}`} className="block">
                <div className="relative h-48 bg-neutral-200 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <Badge variant="outline" className="text-primary-700 border-primary-300">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-neutral-900 leading-tight line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center text-primary-600 text-sm font-medium pt-2 group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </GlassCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}
