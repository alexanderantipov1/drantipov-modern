import { Section, Container, GlassCard } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowLeft, Clock, Heart, Check } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dental Implant Aftercare: Tips for a Successful Recovery | Dr. Antipov",
  description:
    "Essential guide to dental implant aftercare. Learn post-operative care tips, oral hygiene practices, diet recommendations, and recovery expectations.",
  keywords: [
    "dental implant aftercare",
    "dental implant recovery",
    "post-op implant care",
    "dental implant healing",
    "implant care tips",
    "dental implant success",
  ],
}

export default function DentalImplantAftercarePost() {
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
                <time>April 13, 2023</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
              Dental Implant Aftercare: Tips for a Successful Recovery
            </h1>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-[40px] overflow-hidden">
              <Image
                src="/images/blog/2023-04-13/dental-implant-aftercare-3ae5a0d1.jpg"
                alt="Dental implant aftercare and recovery tips"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <GlassCard className="p-6 mb-8 bg-green-50 border-green-200">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Essential Recovery Information</h3>
                    <p className="text-neutral-700">
                      Proper aftercare is crucial for successful dental implant healing and long-term success. Following
                      these guidelines will help ensure optimal results and minimize complications.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                Congratulations on taking the first step toward restoring your smile with dental implants! Now that
                you've had your surgery, proper aftercare is essential for ensuring successful healing and long-term
                implant success. Here's your comprehensive guide to post-operative care.
              </p>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                9 Essential Aftercare Tips for Successful Recovery
              </h2>

              <div className="space-y-8 my-8">
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                        Follow Post-Operative Instructions Precisely
                      </h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Your surgeon will provide specific instructions tailored to your procedure. These may include:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-neutral-700 flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          When and how to change gauze pads
                        </li>
                        <li className="text-neutral-700 flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          Medication schedules for pain and antibiotics
                        </li>
                        <li className="text-neutral-700 flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          Activity restrictions and rest recommendations
                        </li>
                        <li className="text-neutral-700 flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          Signs of complications to watch for
                        </li>
                      </ul>
                      <p className="text-neutral-700 leading-relaxed mt-4">
                        Don't hesitate to call our office if you have any questions or concerns about your instructions.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Maintain Good Oral Hygiene</h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        While you need to be gentle around the surgical site, maintaining oral hygiene is crucial:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-neutral-700">• Avoid brushing directly on the implant site for the first few days</li>
                        <li className="text-neutral-700">• Continue brushing and flossing other teeth gently</li>
                        <li className="text-neutral-700">• Rinse with warm salt water (1/2 tsp salt in 8 oz water) after meals</li>
                        <li className="text-neutral-700">• Use prescribed antimicrobial mouthwash as directed</li>
                        <li className="text-neutral-700">• After initial healing, clean around the implant with extra soft brush</li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Avoid Smoking and Alcohol</h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Both smoking and alcohol can significantly impair healing:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-neutral-700">
                          <strong>Smoking:</strong> Reduces blood flow, increases infection risk, and dramatically
                          decreases implant success rates. Avoid for at least 2 weeks, ideally permanently
                        </li>
                        <li className="text-neutral-700">
                          <strong>Alcohol:</strong> Can interfere with medications and delay healing. Avoid for at least
                          48-72 hours after surgery
                        </li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Be Mindful of Your Diet</h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Your diet plays a crucial role in healing. Follow this timeline:
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2">First 24-48 Hours:</h4>
                          <ul className="space-y-1 ml-6">
                            <li className="text-neutral-700">• Cold liquids and soft foods only</li>
                            <li className="text-neutral-700">• Smoothies, yogurt, pudding, ice cream</li>
                            <li className="text-neutral-700">• Avoid hot foods/drinks, which can increase bleeding</li>
                            <li className="text-neutral-700">• Don't use straws (suction can dislodge blood clots)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2">Days 3-7:</h4>
                          <ul className="space-y-1 ml-6">
                            <li className="text-neutral-700">• Soft foods: mashed potatoes, scrambled eggs, soups</li>
                            <li className="text-neutral-700">• Cooked vegetables, pasta, soft fish</li>
                            <li className="text-neutral-700">• Protein shakes for nutrition</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2">Weeks 2-4:</h4>
                          <ul className="space-y-1 ml-6">
                            <li className="text-neutral-700">• Gradually reintroduce regular foods</li>
                            <li className="text-neutral-700">• Chew on opposite side of implant</li>
                            <li className="text-neutral-700">• Avoid very hard, crunchy, or sticky foods</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">5</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                        Avoid Pressure on the Implants
                      </h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Protect your healing implants by:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-neutral-700">• Not touching or probing the implant site with your tongue or fingers</li>
                        <li className="text-neutral-700">• Avoiding sleeping on the side of the implant initially</li>
                        <li className="text-neutral-700">• Being careful when putting on shirts or pulling things over your head</li>
                        <li className="text-neutral-700">• Postponing contact sports or vigorous exercise for 2-4 weeks</li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">6</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                        Attend All Follow-Up Appointments
                      </h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Follow-up visits are essential for:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-neutral-700">• Monitoring healing progress</li>
                        <li className="text-neutral-700">• Removing stitches if non-dissolvable</li>
                        <li className="text-neutral-700">• Detecting and addressing any issues early</li>
                        <li className="text-neutral-700">• Determining when to proceed with crown placement</li>
                        <li className="text-neutral-700">• Professional cleaning around the implant</li>
                      </ul>
                      <p className="text-neutral-700 leading-relaxed mt-4">
                        Never skip these appointments, even if you feel everything is healing well.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">7</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Report Any Complications</h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Contact our office immediately if you experience:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-neutral-700">• Severe pain not controlled by medication</li>
                        <li className="text-neutral-700">• Excessive bleeding beyond the first 24 hours</li>
                        <li className="text-neutral-700">• Signs of infection (fever, pus, increasing swelling after 3 days)</li>
                        <li className="text-neutral-700">• Numbness or tingling that persists beyond a few hours</li>
                        <li className="text-neutral-700">• Implant feeling loose or mobile</li>
                        <li className="text-neutral-700">• Allergic reaction to medications</li>
                      </ul>
                      <p className="text-neutral-700 leading-relaxed mt-4">
                        Early intervention can prevent minor issues from becoming serious problems.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">8</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                        Wear a Nightguard if Recommended
                      </h3>
                      <p className="text-neutral-700 leading-relaxed">
                        If you grind or clench your teeth (bruxism), wearing a custom nightguard protects your implant
                        from excessive forces that could compromise its stability. This is especially important during
                        the healing phase and after the crown is placed.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-lg">9</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                        Maintain Regular Dental Check-Ups
                      </h3>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        Long-term success requires ongoing care:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-neutral-700">• Schedule cleanings every 6 months (or as recommended)</li>
                        <li className="text-neutral-700">• Have implants professionally cleaned and monitored</li>
                        <li className="text-neutral-700">• Update X-rays periodically to check bone levels</li>
                        <li className="text-neutral-700">• Address any issues with natural teeth that could affect the implant</li>
                      </ul>
                      <p className="text-neutral-700 leading-relaxed mt-4">
                        With proper care, dental implants can last a lifetime!
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">Recovery Timeline</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Understanding what to expect during recovery helps reduce anxiety:
              </p>

              <div className="space-y-4 my-8">
                <GlassCard className="p-6 bg-blue-50">
                  <h4 className="font-semibold text-neutral-900 mb-2">First 24 Hours:</h4>
                  <p className="text-neutral-700">
                    Some bleeding, swelling, and discomfort are normal. Use ice packs and rest.
                  </p>
                </GlassCard>
                <GlassCard className="p-6 bg-blue-50">
                  <h4 className="font-semibold text-neutral-900 mb-2">Days 2-3:</h4>
                  <p className="text-neutral-700">
                    Swelling peaks around day 2-3. Bruising may appear. Pain should be manageable with medication.
                  </p>
                </GlassCard>
                <GlassCard className="p-6 bg-blue-50">
                  <h4 className="font-semibold text-neutral-900 mb-2">Week 1:</h4>
                  <p className="text-neutral-700">
                    Swelling subsides. Stitches removed or dissolve. You can return to most normal activities.
                  </p>
                </GlassCard>
                <GlassCard className="p-6 bg-blue-50">
                  <h4 className="font-semibold text-neutral-900 mb-2">Weeks 2-4:</h4>
                  <p className="text-neutral-700">
                    Soft tissue healing is mostly complete. Bone integration continues beneath the surface.
                  </p>
                </GlassCard>
                <GlassCard className="p-6 bg-blue-50">
                  <h4 className="font-semibold text-neutral-900 mb-2">Months 3-6:</h4>
                  <p className="text-neutral-700">
                    Osseointegration (bone bonding) is complete. Ready for crown placement and final restoration.
                  </p>
                </GlassCard>
              </div>

              <h2 className="text-3xl font-serif font-bold text-neutral-900 mt-12 mb-6">
                Contact Our Office
              </h2>
              <GlassCard className="p-6 mb-8">
                <p className="text-neutral-700 leading-relaxed mb-4">
                  <strong>Galleria Oral & Maxillofacial Surgery</strong>
                  <br />
                  911 Reserve Dr Ste 150, Roseville, CA 95678
                  <br />
                  Phone: <a href="tel:916-790-9693" className="text-primary-600 hover:underline">916-790-9693</a>
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Our team is here to support you throughout your recovery. Don't hesitate to reach out with questions
                  or concerns at any time.
                </p>
              </GlassCard>
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
                    Board-certified oral and maxillofacial surgeon committed to providing exceptional patient care and
                    ensuring successful outcomes for every dental implant procedure.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* CTA */}
            <div className="mt-12 text-center">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Ready to Transform Your Smile?
                </h3>
                <p className="text-neutral-700 mb-6">
                  Schedule a consultation to learn more about dental implants and what to expect
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/for-patients/consultation">Schedule Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/for-patients/pre-op">View Pre-Op Instructions</Link>
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
