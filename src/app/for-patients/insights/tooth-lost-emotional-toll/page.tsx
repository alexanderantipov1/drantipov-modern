import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock, Heart } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Hidden Emotional Toll of Tooth Loss: Understanding Patient Struggles | Dr. Antipov",
  description:
    "Explore the psychological and emotional impacts of tooth loss, coping strategies, and how dental implants can restore confidence and quality of life.",
  keywords: [
    "tooth loss emotional impact",
    "dental anxiety",
    "tooth loss self-esteem",
    "dental implants confidence",
    "tooth loss psychology",
    "dental restoration",
  ],
}

export default function ToothLossEmotionalTollPost() {
  return (
    <>
      {/* Back Button */}
      <Section background="default" padding="sm" className="pt-24">
        <Container size="lg">
          <Button asChild variant="ghost" size="sm">
            <Link href="/for-patients/insights">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </Link>
          </Button>
        </Container>
      </Section>

      {/* Hero Section */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <article className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
              <Badge className="bg-primary-100 text-primary-700 hover:bg-primary-200">Patient Care</Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>August 9, 2024</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              The Hidden Emotional Toll of Tooth Loss: Understanding Patient Struggles
            </h1>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2024-08-09/tooth-lost-emotional-toll-fcc97e30.jpg"
                alt="Understanding the emotional impact of tooth loss"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Losing a tooth is more than just a physical change. It can profoundly affect a person's emotional
                well-being, self-esteem, and quality of life. Understanding these emotional impacts is crucial for both
                patients and healthcare providers.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                The Four Stages of the "Denture Journey"
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                A groundbreaking study from the University of Sheffield identified four distinct emotional stages that
                patients experience when dealing with tooth loss and denture use:
              </p>

              <div className="space-y-8 my-8">
                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Stage 1: Initial Shock and Grief</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The realization of tooth loss often triggers feelings similar to grief. Patients may experience
                    denial, sadness, and a sense of loss that extends beyond the physical tooth itself.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                    Stage 2: Emotional Turmoil and Self-Consciousness
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    As patients adapt to dentures or live with missing teeth, many become acutely self-conscious about
                    their appearance. This stage is characterized by anxiety about social interactions and fear of
                    judgment.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                    Stage 3: Hope Through Prosthetic Solutions
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    When patients explore treatment options like dental implants or improved dentures, hope begins to
                    emerge. This stage marks a turning point toward emotional recovery.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                    Stage 4: Adaptation and Disclosure Management
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Patients learn to manage their condition, deciding when and how to disclose their tooth loss to
                    others. Successful treatment often leads to renewed confidence and improved quality of life.
                  </p>
                </GlassCard>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Psychological Impacts of Tooth Loss
              </h2>

              <div className="space-y-6 my-8">
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Decreased Self-Esteem</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Missing teeth can significantly impact how people view themselves. Many patients report feeling
                    older, less attractive, and less confident in professional and social settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Social Anxiety</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Fear of embarrassment often leads patients to avoid social gatherings, smile less frequently, and
                    withdraw from activities they once enjoyed. This social isolation can contribute to depression and
                    loneliness.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Speech and Nutritional Challenges</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Beyond the emotional impact, tooth loss affects practical aspects of daily life. Difficulty
                    speaking clearly and limitations in diet can further diminish quality of life and self-confidence.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Body Image Issues</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The visible nature of tooth loss makes it particularly distressing. Unlike other health conditions
                    that can be hidden, missing teeth are often immediately noticeable during conversation and smiling.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">Coping Strategies</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                If you're struggling with the emotional impact of tooth loss, consider these strategies:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-neutral-900">Seek Support:</strong>
                    <span className="text-neutral-700">
                      {" "}
                      Talk to friends, family, or a mental health professional about your feelings
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-neutral-900">Join Support Groups:</strong>
                    <span className="text-neutral-700">
                      {" "}
                      Connect with others who understand your experience
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-neutral-900">Practice Self-Care:</strong>
                    <span className="text-neutral-700">
                      {" "}
                      Prioritize activities that boost your mood and well-being
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-neutral-900">Explore Treatment Options:</strong>
                    <span className="text-neutral-700">
                      {" "}
                      Modern solutions like dental implants can restore both function and confidence
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-neutral-900">Practice Self-Compassion:</strong>
                    <span className="text-neutral-700">
                      {" "}
                      Remember that tooth loss is a common experience and doesn't define your worth
                    </span>
                  </div>
                </li>
              </ul>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                The Role of Dental Implants in Emotional Recovery
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Dental implants offer more than just functional restoration. By providing a permanent, natural-looking
                solution, they can significantly improve self-esteem, reduce social anxiety, and restore quality of
                life. Many patients report feeling "like themselves again" after implant treatment.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                A Holistic Approach to Care
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                At our practice, we recognize that dental care extends beyond physical treatment. We take a
                compassionate, holistic approach that addresses both the functional and emotional aspects of tooth loss.
                Our goal is to help you regain not just your smile, but your confidence and quality of life.
              </p>
            </div>

            {/* Author Info */}
            <GlassCard className="mt-12 p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-serif font-bold text-primary-700">DA</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Dr. Alexander V. Antipov</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Board-certified oral and maxillofacial surgeon specializing in dental implants, full-arch
                    restoration, and corrective jaw surgery. Committed to providing compassionate, patient-centered
                    care.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Ready to Restore Your Confidence?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Let's discuss how we can help you overcome the challenges of tooth loss
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/for-patients/consultation">Schedule Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/for-patients/testimonials">Read Patient Stories</Link>
                  </Button>
                </div>
              </GlassCard>
            </div>
          </article>
        </Container>
      </Section>
    </>
  )
}
