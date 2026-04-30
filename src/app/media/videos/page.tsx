import { Section, Container, GlassCard } from "@/components/sections"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Calendar, Eye } from "lucide-react"
import { Metadata } from "next"
import PageHero from "@/components/PageHero"
import heroContent from "@/lib/heroContent"

export const metadata: Metadata = {
  title: "Educational Videos & Lectures | Dr. Alexander Antipov",
  description:
    "Watch Dr. Antipov's educational videos, surgical demonstrations, and conference presentations on dental implants, jaw surgery, and oral surgery techniques.",
  keywords: [
    "oral surgery videos",
    "dental implant tutorials",
    "surgical demonstrations",
    "Dr. Antipov lectures",
    "oral surgery education",
    "implant dentistry videos",
    "jaw surgery presentations",
  ],
  openGraph: {
    title: "Educational Videos & Lectures | Dr. Alexander Antipov",
    description: "Watch educational videos and surgical demonstrations from Dr. Antipov",
    type: "website",
  },
}

// Video categories
const categories = [
  { id: "all", label: "All Videos" },
  { id: "surgical-techniques", label: "Surgical Techniques" },
  { id: "patient-education", label: "Patient Education" },
  { id: "case-studies", label: "Case Studies" },
  { id: "conference-talks", label: "Conference Talks" },
]

// Featured videos data
const featuredVideos = [
  {
    id: 1,
    title: "Full-Arch Implant Placement: Live Surgical Demonstration",
    description:
      "Watch a complete All-on-4 procedure from start to finish, including surgical planning, implant placement, and immediate provisional restoration.",
    thumbnail: "/images/video-thumbs/full-arch-demo.jpg", // Placeholder
    duration: "45:32",
    views: "12.5K",
    date: "2025-09-15",
    category: "surgical-techniques",
    videoUrl: "https://www.youtube.com/watch?v=placeholder1",
    topics: ["All-on-4", "Immediate Load", "Full-Arch", "Surgical Planning"],
  },
  {
    id: 2,
    title: "Understanding Dental Implants: A Patient's Guide",
    description:
      "Comprehensive patient education video explaining what dental implants are, how they work, the placement process, and what to expect during recovery.",
    thumbnail: "/images/video-thumbs/patient-guide.jpg",
    duration: "18:24",
    views: "45.2K",
    date: "2025-08-20",
    category: "patient-education",
    videoUrl: "https://www.youtube.com/watch?v=placeholder2",
    topics: ["Patient Education", "Dental Implants", "Treatment Process"],
  },
  {
    id: 3,
    title: "Complex Bone Grafting for Severe Atrophy",
    description:
      "Advanced surgical techniques for managing severe maxillary and mandibular bone loss, including sinus lift procedures and ridge augmentation.",
    thumbnail: "/images/video-thumbs/bone-grafting.jpg",
    duration: "32:18",
    views: "8.3K",
    date: "2025-07-10",
    category: "surgical-techniques",
    videoUrl: "https://www.youtube.com/watch?v=placeholder3",
    topics: ["Bone Grafting", "Sinus Lift", "Ridge Augmentation", "Advanced Techniques"],
  },
]

// Recent uploads
const recentVideos = [
  {
    id: 4,
    title: "Single Tooth Implant: Anterior Aesthetic Zone",
    description:
      "Detailed demonstration of implant placement in the aesthetic zone with emphasis on soft tissue management and immediate provisionalization.",
    thumbnail: "/images/video-thumbs/single-tooth.jpg",
    duration: "24:15",
    views: "6.7K",
    date: "2025-09-01",
    category: "surgical-techniques",
    videoUrl: "https://www.youtube.com/watch?v=placeholder4",
  },
  {
    id: 5,
    title: "Corrective Jaw Surgery: Orthognathic Treatment Planning",
    description:
      "Comprehensive approach to orthognathic surgery planning, including 3D imaging, virtual surgical planning, and case presentation.",
    thumbnail: "/images/video-thumbs/jaw-surgery.jpg",
    duration: "28:45",
    views: "5.2K",
    date: "2025-08-15",
    category: "surgical-techniques",
    videoUrl: "https://www.youtube.com/watch?v=placeholder5",
  },
  {
    id: 6,
    title: "Managing Sleep Apnea with Jaw Surgery",
    description:
      "Patient education video explaining how maxillomandibular advancement surgery can treat obstructive sleep apnea and improve quality of life.",
    thumbnail: "/images/video-thumbs/sleep-apnea.jpg",
    duration: "16:30",
    views: "15.8K",
    date: "2025-07-25",
    category: "patient-education",
    videoUrl: "https://www.youtube.com/watch?v=placeholder6",
  },
  {
    id: 7,
    title: "Zygomatic Implants: Technique and Applications",
    description:
      "Advanced surgical demonstration of zygomatic implant placement for patients with severe maxillary bone loss.",
    thumbnail: "/images/video-thumbs/zygomatic.jpg",
    duration: "38:20",
    views: "4.1K",
    date: "2025-06-30",
    category: "surgical-techniques",
    videoUrl: "https://www.youtube.com/watch?v=placeholder7",
  },
  {
    id: 8,
    title: "What to Expect After Dental Implant Surgery",
    description:
      "Post-operative care instructions, recovery timeline, and tips for optimal healing after dental implant placement.",
    thumbnail: "/images/video-thumbs/post-op.jpg",
    duration: "12:18",
    views: "22.4K",
    date: "2025-06-15",
    category: "patient-education",
    videoUrl: "https://www.youtube.com/watch?v=placeholder8",
  },
  {
    id: 9,
    title: "Complex Full-Arch Case: Start to Finish",
    description:
      "Follow a complex full-arch implant case from initial consultation through final restoration, including challenges and solutions.",
    thumbnail: "/images/video-thumbs/case-study.jpg",
    duration: "52:40",
    views: "7.9K",
    date: "2025-05-20",
    category: "case-studies",
    videoUrl: "https://www.youtube.com/watch?v=placeholder9",
  },
]

// Conference presentations
const conferenceTalks = [
  {
    id: 10,
    title: "Digital Workflow in Implant Dentistry",
    conference: "American Association of Oral and Maxillofacial Surgeons Annual Meeting",
    location: "San Diego, CA",
    date: "2025-09-22",
    duration: "55:00",
    description:
      "Keynote presentation on integrating digital technologies throughout the implant workflow, from CBCT imaging to guided surgery to digital prosthetics.",
    videoUrl: "https://www.youtube.com/watch?v=placeholder10",
  },
  {
    id: 11,
    title: "Managing Complications in Full-Arch Implant Surgery",
    conference: "Academy of Osseointegration Annual Meeting",
    location: "Chicago, IL",
    date: "2025-03-15",
    duration: "42:30",
    description:
      "Lecture on prevention, recognition, and management of complications in full-arch implant cases, with real-world case examples.",
    videoUrl: "https://www.youtube.com/watch?v=placeholder11",
  },
  {
    id: 12,
    title: "The Future of Oral Surgery: AI and Robotics",
    conference: "International Congress of Oral Implantologists",
    location: "Las Vegas, NV",
    date: "2024-11-10",
    duration: "38:15",
    description:
      "Exploring emerging technologies including artificial intelligence, robotic surgery, and their potential applications in oral surgery.",
    videoUrl: "https://www.youtube.com/watch?v=placeholder12",
  },
]

export default function VideosPage() {
  return (
    <>
      <PageHero {...heroContent["/media/videos"]!} />

      {/* Categories */}
      <Section background="default" padding="md">
        <Container size="lg">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  category.id === "all"
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white/60 backdrop-blur-sm text-neutral-700 hover:bg-white/80 border border-neutral-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Videos */}
      <Section background="default" padding="lg">
        <Container size="xl">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-2">
              Featured Videos
            </h2>
            <p className="text-lg text-neutral-600">
              Most popular educational content and surgical demonstrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <GlassCard key={video.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-neutral-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                    <Play className="h-16 w-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-3">{video.description}</p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2">
                    {video.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-neutral-500 pt-2">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {video.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(video.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Recent Uploads */}
      <Section background="accent" padding="lg">
        <Container size="xl">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-2">
              Recent Uploads
            </h2>
            <p className="text-lg text-neutral-600">Latest educational content and surgical videos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentVideos.map((video) => (
              <GlassCard key={video.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-neutral-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white opacity-70 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-2">{video.description}</p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-neutral-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {video.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(video.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Conference Presentations */}
      <Section background="default" padding="lg">
        <Container size="xl">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-2">
              Conference Presentations
            </h2>
            <p className="text-lg text-neutral-600">
              Keynote lectures and presentations from major industry conferences
            </p>
          </div>

          <div className="space-y-6">
            {conferenceTalks.map((talk) => (
              <GlassCard key={talk.id} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Thumbnail */}
                  <div className="relative md:w-64 aspect-video md:aspect-auto md:h-36 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex-shrink-0 overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white opacity-80 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {talk.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
                        {talk.title}
                      </h3>
                      <div className="text-sm text-neutral-600 space-y-1">
                        <p className="font-medium text-primary-700">{talk.conference}</p>
                        <p>
                          {talk.location} • {new Date(talk.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <p className="text-neutral-700 leading-relaxed">{talk.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* YouTube Channel CTA */}
      <Section background="gradient" padding="lg">
        <Container size="md">
          <GlassCard className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Subscribe for More Content
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Get notified when new educational videos, surgical demonstrations, and conference presentations
              are uploaded to our channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.youtube.com/@DrAntipovchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg"
              >
                <Play className="h-5 w-5" />
                Subscribe on YouTube
              </a>
              <a
                href="/for-patients/consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-full font-semibold hover:bg-neutral-50 transition-colors border-2 border-primary-600"
              >
                Schedule a Consultation
              </a>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
