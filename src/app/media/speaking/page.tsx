import { Section, Container, GlassCard } from "@/components/sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Users,
  Award,
  Mic2,
  ExternalLink,
} from "lucide-react";
import { Metadata } from "next";
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export const metadata: Metadata = {
  title: "Speaking Engagements & Lectures | Dr. Alexander Antipov",
  description:
    "Dr. Antipov is available for speaking engagements, workshops, and educational lectures on dental implants, oral surgery, and surgical techniques.",
  keywords: [
    "oral surgery speaker",
    "dental implant lectures",
    "surgical education",
    "conference speaker",
    "Dr. Antipov speaking",
    "CE courses oral surgery",
    "implant dentistry workshops",
  ],
  openGraph: {
    title: "Speaking Engagements & Lectures | Dr. Alexander Antipov",
    description:
      "Book Dr. Antipov for your next conference or educational event",
    type: "website",
  },
};

// Speaking topics
const speakingTopics = [
  {
    id: 1,
    title: "Full-Arch Implant Rehabilitation",
    description:
      "Comprehensive approach to full-arch cases including treatment planning, surgical techniques, immediate loading protocols, and prosthetic considerations.",
    duration: "60-90 minutes",
    audience: "General Dentists, Prosthodontists, Oral Surgeons",
    format: ["Lecture", "Workshop", "Hands-On"],
  },
  {
    id: 2,
    title: "Digital Workflow in Implant Surgery",
    description:
      "Integration of CBCT imaging, digital treatment planning, guided surgery, and CAD/CAM prosthetics for predictable implant outcomes.",
    duration: "45-60 minutes",
    audience: "All Dental Professionals",
    format: ["Lecture", "Live Demo"],
  },
  {
    id: 3,
    title: "Advanced Bone Grafting Techniques",
    description:
      "Management of complex cases with severe bone loss, including sinus lifts, ridge augmentation, block grafts, and biomaterial selection.",
    duration: "90-120 minutes",
    audience: "Oral Surgeons, Periodontists, Implantologists",
    format: ["Lecture", "Workshop", "Surgical Demo"],
  },
  {
    id: 4,
    title: "Orthognathic Surgery: Planning to Execution",
    description:
      "Modern approach to corrective jaw surgery, including virtual surgical planning, 3D printing, patient communication, and surgical execution.",
    duration: "60-90 minutes",
    audience: "Oral Surgeons, Orthodontists",
    format: ["Lecture", "Case Presentations"],
  },
  {
    id: 5,
    title: "Managing Complications in Implant Surgery",
    description:
      "Prevention, recognition, and management of surgical complications including nerve injuries, sinus perforations, implant failures, and infections.",
    duration: "60 minutes",
    audience: "All Implant Practitioners",
    format: ["Lecture", "Case Studies"],
  },
  {
    id: 6,
    title: "Sleep Apnea Surgery: The Oral Surgeon's Role",
    description:
      "Surgical treatment options for obstructive sleep apnea, patient selection, maxillomandibular advancement techniques, and outcomes.",
    duration: "45-60 minutes",
    audience: "Oral Surgeons, Sleep Medicine Specialists",
    format: ["Lecture"],
  },
];

// Past speaking engagements
const pastEngagements = [
  {
    id: 1,
    title: "Digital Workflow in Implant Dentistry",
    event:
      "American Association of Oral and Maxillofacial Surgeons Annual Meeting",
    location: "San Diego, CA",
    date: "September 22-24, 2025",
    type: "Keynote Speaker",
    attendees: "2,500+",
    description:
      "Delivered keynote presentation on integrating digital technologies throughout the implant workflow to over 2,500 oral surgeons and dental professionals.",
  },
  {
    id: 2,
    title: "Managing Complications in Full-Arch Implant Surgery",
    event: "Academy of Osseointegration Annual Meeting",
    location: "Chicago, IL",
    date: "March 13-15, 2025",
    type: "Featured Lecturer",
    attendees: "1,800+",
    description:
      "Presented evidence-based strategies for complication prevention and management in full-arch implant cases with live case demonstrations.",
  },
  {
    id: 3,
    title: "Advanced Bone Grafting Workshop",
    event: "California Society of Oral and Maxillofacial Surgeons",
    location: "San Francisco, CA",
    date: "January 18-19, 2025",
    type: "Workshop Instructor",
    attendees: "60",
    description:
      "Led intensive two-day hands-on workshop covering advanced grafting techniques, biomaterial selection, and complex case management.",
  },
  {
    id: 4,
    title: "The Future of Oral Surgery: AI and Robotics",
    event: "International Congress of Oral Implantologists",
    location: "Las Vegas, NV",
    date: "November 8-10, 2024",
    type: "Plenary Speaker",
    attendees: "3,200+",
    description:
      "Explored emerging technologies in oral surgery including artificial intelligence, robotic assistance, and their clinical applications.",
  },
  {
    id: 5,
    title: "Full-Arch Rehabilitation: From Planning to Prosthetics",
    event: "Fusion Dental Implant Symposium",
    location: "Roseville, CA",
    date: "October 12, 2024",
    type: "Course Director",
    attendees: "45",
    description:
      "Directed full-day continuing education course for general dentists on full-arch implant treatment from surgical to prosthetic phases.",
  },
  {
    id: 6,
    title: "Zygomatic Implants: Advanced Techniques",
    event: "Pacific Coast Society for Prosthodontics",
    location: "Monterey, CA",
    date: "June 14-16, 2024",
    type: "Guest Lecturer",
    attendees: "350+",
    description:
      "Presented surgical protocols and prosthetic considerations for zygomatic implant cases in severely resorbed maxillae.",
  },
];

// Upcoming engagements
const upcomingEngagements = [
  {
    id: 1,
    title: "Digital Implant Surgery: The Complete Workflow",
    event: "Seattle Study Club Symposium",
    location: "Seattle, WA",
    date: "November 8-9, 2025",
    type: "Featured Speaker",
    status: "Confirmed",
  },
  {
    id: 2,
    title: "Complex Full-Arch Cases: Problem Solving",
    event: "American College of Prosthodontists Annual Session",
    location: "Boston, MA",
    date: "October 30 - November 2, 2025",
    type: "Breakout Session",
    status: "Confirmed",
  },
  {
    id: 3,
    title: "Orthognathic Surgery in the Digital Age",
    event: "Western Society of Oral and Maxillofacial Surgeons",
    location: "Phoenix, AZ",
    date: "December 6-7, 2025",
    type: "Keynote Speaker",
    status: "Confirmed",
  },
];

// Statistics
const stats = [
  { label: "Speaking Engagements", value: "150+", icon: Mic2 },
  { label: "Conferences Worldwide", value: "40+", icon: MapPin },
  { label: "Professionals Trained", value: "5,000+", icon: Users },
  { label: "CE Hours Delivered", value: "10,000+", icon: Award },
];

export default function SpeakingPage() {
  return (
    <>
      <PageHero {...heroContent["/media/speaking"]!} />

      {/* Stats Section */}
      <Section background="default" padding="md">
        <Container size="lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="p-6 text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-primary-100">
                    <stat.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Speaking Topics */}
      <Section background="accent" padding="lg">
        <Container size="xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Available Speaking Topics
            </h2>
            <p className="text-lg text-neutral-600">
              Dr. Antipov offers engaging, evidence-based presentations on a
              variety of topics in oral surgery and implant dentistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {speakingTopics.map((topic) => (
              <GlassCard key={topic.id} className="p-6 md:p-8">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-3">
                  {topic.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  {topic.description}
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-neutral-900 min-w-24">
                      Duration:
                    </span>
                    <span className="text-neutral-600">{topic.duration}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-neutral-900 min-w-24">
                      Audience:
                    </span>
                    <span className="text-neutral-600">{topic.audience}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-neutral-900 min-w-24">
                      Format:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {topic.format.map((format, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {format}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Upcoming Engagements */}
      <Section background="default" padding="lg">
        <Container size="xl">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-2">
              Upcoming Engagements
            </h2>
            <p className="text-lg text-neutral-600">
              Join Dr. Antipov at these upcoming events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEngagements.map((engagement) => (
              <GlassCard
                key={engagement.id}
                className="p-6 border-l-4 border-primary-500"
              >
                <Badge className="mb-3">{engagement.status}</Badge>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {engagement.title}
                </h3>
                <p className="text-primary-700 font-medium mb-4">
                  {engagement.event}
                </p>

                <div className="space-y-2 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-neutral-400" />
                    <span>{engagement.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-neutral-400" />
                    <span>{engagement.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mic2 className="h-4 w-4 text-neutral-400" />
                    <span>{engagement.type}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Past Engagements */}
      <Section background="default" padding="lg">
        <Container size="xl">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-2">
              Past Speaking Engagements
            </h2>
            <p className="text-lg text-neutral-600">
              Recent lectures, workshops, and presentations at major conferences
            </p>
          </div>

          <div className="space-y-6">
            {pastEngagements.map((engagement) => (
              <GlassCard key={engagement.id} className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Date Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex flex-col items-center justify-center text-white">
                      <div className="text-2xl font-bold">
                        {new Date(
                          engagement.date.split("-")[0] || engagement.date
                        ).toLocaleDateString("en-US", {
                          month: "short",
                        })}
                      </div>
                      <div className="text-sm">
                        {new Date(
                          engagement.date.split("-")[0] || engagement.date
                        ).getFullYear()}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {engagement.type}
                      </Badge>
                      <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
                        {engagement.title}
                      </h3>
                      <p className="text-lg text-primary-700 font-medium">
                        {engagement.event}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {engagement.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {engagement.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {engagement.attendees} attendees
                      </span>
                    </div>

                    <p className="text-neutral-700 leading-relaxed">
                      {engagement.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Book Dr. Antipov CTA */}
      <Section background="gradient" padding="xl">
        <Container size="md">
          <GlassCard className="p-8 md:p-12 text-center">
            <div className="mb-6">
              <div className="inline-flex p-4 rounded-full bg-primary-100 mb-4">
                <Mic2 className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
                Book Dr. Antipov for Your Event
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Dr. Antipov is available for keynote presentations, workshops,
                hands-on courses, and educational lectures at conferences, study
                clubs, and dental societies worldwide.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 mb-8 max-w-xl mx-auto">
              <h3 className="font-semibold text-neutral-900 mb-3">
                Speaking Engagement Types:
              </h3>
              <ul className="text-sm text-neutral-700 space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>Keynote presentations and plenary lectures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>Hands-on workshops and surgical demonstrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>
                    Continuing education courses (CE credits available)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>Study club presentations and lunch-and-learns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>Virtual webinars and online courses</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Request Speaking Engagement</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="/media/videos"
                  className="inline-flex items-center gap-2"
                >
                  View Past Presentations
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <p className="text-sm text-neutral-500 mt-6">
              For speaking inquiries, please contact our office at{" "}
              <a
                href="mailto:info@drantipov.com"
                className="text-primary-600 hover:underline"
              >
                info@drantipov.com
              </a>
            </p>
          </GlassCard>
        </Container>
      </Section>
    </>
  );
}
