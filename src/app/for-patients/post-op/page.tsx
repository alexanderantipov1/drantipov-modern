import { Section, Container, GlassCard } from "@/components/sections"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Phone, Clock, Thermometer, Pill } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Post-Operative Care Instructions | Recovery Guide | Dr. Antipov",
  description:
    "Essential post-operative care instructions after oral surgery with Dr. Antipov. Learn how to manage pain, swelling, bleeding, and ensure proper healing.",
  keywords: [
    "post-operative care",
    "oral surgery recovery",
    "after surgery instructions",
    "dental implant recovery",
    "jaw surgery recovery",
    "surgical healing",
  ],
}

const immediatePostOp = [
  {
    icon: Clock,
    title: "First 24 Hours",
    instructions: [
      "Bite firmly on gauze pads for 30-45 minutes to control bleeding",
      "Keep your head elevated (use 2-3 pillows) to reduce swelling",
      "Apply ice packs to the outside of your face (20 minutes on, 20 minutes off)",
      "Rest and avoid strenuous activity",
      "Do not rinse your mouth for the first 24 hours",
    ],
  },
  {
    icon: Pill,
    title: "Pain Management",
    instructions: [
      "Take prescribed pain medications as directed before pain becomes severe",
      "Take pain medication with food to prevent nausea",
      "Do not drive or operate machinery while taking narcotic pain medication",
      "If antibiotics are prescribed, complete the entire course",
      "Over-the-counter pain relievers can be alternated with prescription medication (ask us first)",
    ],
  },
  {
    icon: Thermometer,
    title: "Managing Swelling",
    instructions: [
      "Ice packs for first 48 hours (20 on, 20 off)",
      "After 48 hours, switch to warm compresses to promote healing",
      "Sleep with head elevated for 3-5 days",
      "Avoid bending over or lying flat",
      "Swelling peaks at 48-72 hours, then gradually decreases",
    ],
  },
]

const bleedingControl = [
  "Bite on gauze pads firmly for 30-45 minutes",
  "If bleeding persists, bite on a moistened tea bag for 30 minutes (tannic acid helps clotting)",
  "Avoid spitting, sucking through straws, or rinsing vigorously",
  "Some oozing is normal for 24-48 hours",
  "If heavy bleeding continues after 2 hours, call our office",
]

const dietGuidelines = {
  day1: [
    "Clear liquids and soft foods only",
    "Cold foods like ice cream, smoothies, yogurt (avoid straws!)",
    "Protein shakes or meal replacement drinks",
    "Avoid hot foods and drinks",
  ],
  days2to7: [
    "Soft, easy-to-chew foods (mashed potatoes, scrambled eggs, pasta)",
    "Lukewarm soups (avoid hot temperature)",
    "Oatmeal, pudding, applesauce",
    "Well-cooked vegetables",
  ],
  week2plus: [
    "Gradually return to normal diet as tolerated",
    "Chew away from surgical site if possible",
    "Avoid hard, crunchy, or sticky foods until fully healed",
    "Continue to avoid using straws",
  ],
}

const oralHygiene = [
  {
    title: "Days 1-2",
    instructions: "No rinsing, no brushing near surgical site. Gently wipe teeth with wet gauze if needed.",
  },
  {
    title: "Days 3-7",
    instructions: "Begin gentle salt water rinses (1 tsp salt in 8 oz warm water) 4-6 times daily, especially after meals. Resume brushing other teeth gently.",
  },
  {
    title: "Week 2+",
    instructions: "Continue salt water rinses. Gradually resume normal brushing and flossing, being gentle around surgical area.",
  },
]

const avoidList = [
  "Smoking or tobacco use (delays healing significantly)",
  "Drinking through straws (can dislodge blood clots)",
  "Spitting forcefully",
  "Rinsing vigorously in first 24 hours",
  "Alcohol consumption (especially with pain medication)",
  "Strenuous exercise or heavy lifting for 3-5 days",
  "Hot foods or drinks for first 48 hours",
  "Hard, crunchy, or sticky foods",
]

const normalSymptoms = [
  {
    symptom: "Swelling",
    description: "Peaks at 48-72 hours, may last 5-7 days. Use ice for first 48 hours, then warm compresses.",
  },
  {
    symptom: "Bruising",
    description: "May appear 2-3 days post-op on face or neck. This is normal and will fade in 7-10 days.",
  },
  {
    symptom: "Slight Bleeding",
    description: "Pink-tinged saliva is normal for 24-48 hours. Control with gauze and moistened tea bags.",
  },
  {
    symptom: "Jaw Stiffness",
    description: "Temporary difficulty opening mouth fully. Gentle stretching exercises help (we'll demonstrate).",
  },
  {
    symptom: "Numbness",
    description: "Temporary numbness of lip, tongue, or chin may occur. Usually resolves within days to weeks.",
  },
]

const whenToCall = [
  "Heavy bleeding that doesn't stop after 2 hours of pressure",
  "Severe, increasing pain not controlled by medication",
  "Fever above 101°F (38.3°C)",
  "Excessive swelling that worsens after 3 days",
  "Difficulty breathing or swallowing",
  "Allergic reaction (rash, itching, difficulty breathing)",
  "Persistent numbness lasting more than a week",
  "Foul odor or pus from surgical site",
]

export default function PostOpPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="pt-32">
        <Container size="lg">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-2">
              Patient Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900">
              Post-Operative Care Instructions
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              Following these instructions carefully will promote proper healing, minimize discomfort, and help you recover quickly from your oral surgery.
            </p>
          </div>
        </Container>
      </Section>

      {/* Emergency Contact */}
      <Section background="default" padding="md">
        <Container size="lg">
          <GlassCard className="p-6 md:p-8 bg-red-50 border-l-4 border-red-500">
            <div className="flex gap-4">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">24/7 Emergency Contact</h3>
                <p className="text-neutral-700 leading-relaxed mb-2">
                  For post-operative emergencies outside office hours, call: <a href="tel:9167832110" className="text-red-600 hover:underline font-bold">(916) 783-2110</a>
                </p>
                <p className="text-sm text-neutral-600">
                  For life-threatening emergencies, call 911 or go to the nearest emergency room.
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Immediate Post-Op Care */}
      <Section background="accent" padding="xl">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Immediate Post-Operative Care
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Critical steps for the first 24-48 hours after surgery
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {immediatePostOp.map((section, index) => (
              <GlassCard key={index} className="p-6 md:p-8">
                <div className="inline-flex p-3 rounded-full bg-primary-100 mb-4">
                  <section.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.instructions.map((instruction, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-primary-600 mt-1 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bleeding Control */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
              Controlling Bleeding
            </h2>
            <div className="space-y-3">
              {bleedingControl.map((instruction, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 leading-relaxed">{instruction}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Diet Guidelines */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Diet Guidelines
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Progress through these stages as your healing allows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-xl mb-2">
                  1
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">Day 1</h3>
              </div>
              <ul className="space-y-2">
                {dietGuidelines.day1.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-xl mb-2">
                  2
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">Days 2-7</h3>
              </div>
              <ul className="space-y-2">
                {dietGuidelines.days2to7.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-xl mb-2">
                  3
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">Week 2+</h3>
              </div>
              <ul className="space-y-2">
                {dietGuidelines.week2plus.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* Oral Hygiene */}
      <Section background="accent" padding="lg">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6 text-center">
              Oral Hygiene Timeline
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {oralHygiene.map((stage, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-24 flex-shrink-0">
                    <span className="text-sm font-semibold text-primary-700">{stage.title}</span>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{stage.instructions}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* What to Avoid */}
      <Section background="default" padding="lg">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12 bg-amber-50/50">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6 text-center">
              What to Avoid During Recovery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {avoidList.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Normal Symptoms */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Normal Post-Operative Symptoms
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              These are expected and part of the normal healing process
            </p>
          </div>

          <div className="space-y-4">
            {normalSymptoms.map((item, index) => (
              <GlassCard key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/4">
                    <h3 className="text-lg font-semibold text-neutral-900">{item.symptom}</h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-neutral-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* When to Call */}
      <Section background="gradient" padding="lg">
        <Container size="lg">
          <GlassCard className="p-8 md:p-12 border-2 border-red-500">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6 text-center flex items-center justify-center gap-2">
              <Phone className="h-6 w-6 text-red-600" />
              When to Call Our Office
            </h2>
            <p className="text-center text-neutral-600 mb-6">
              Contact us immediately if you experience any of the following:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {whenToCall.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="tel:9167832110"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors text-lg"
              >
                <Phone className="h-5 w-5" />
                Call Office: (916) 783-2110
              </a>
              <p className="text-sm text-neutral-500 mt-4">
                After hours emergency: <a href="tel:9167832110" className="text-red-600 font-semibold hover:underline">(916) 783-2110</a>
              </p>
            </div>
          </GlassCard>
        </Container>
      </Section>

      {/* Follow-Up */}
      <Section background="default" padding="lg">
        <Container size="md">
          <GlassCard className="p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
              Follow-Up Appointment
            </h2>
            <p className="text-neutral-700 mb-6 leading-relaxed">
              Your follow-up appointment is crucial for monitoring your healing. If you haven't scheduled your post-op visit, please call our office.
            </p>
            <Button size="lg" asChild>
              <Link href="/for-patients/faqs">View Frequently Asked Questions</Link>
            </Button>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
