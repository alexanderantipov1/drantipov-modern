import { Section, Container, GlassCard } from "@/components/sections"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Calendar, Eye } from "lucide-react"
import { Metadata } from "next"
import PageHero from "@/components/PageHero"

export const metadata: Metadata = {
  title: "Образовательные видео и лекции | Доктор Александр Антипов",
  description:
    "Смотрите образовательные видео доктора Антипова, демонстрации операций и доклады с конференций по дентальной имплантации, хирургии челюстей и методикам челюстно-лицевой хирургии.",
  keywords: [
    "видео по хирургии полости рта",
    "обучающие материалы по дентальной имплантации",
    "демонстрации операций",
    "лекции доктора Антипова",
    "обучение челюстно-лицевой хирургии",
    "видео по имплантологии",
    "доклады по хирургии челюстей",
  ],
  alternates: {
    canonical: "/ru/media/videos",
    languages: {
      ru: "/ru/media/videos",
      en: "/media/videos",
      "x-default": "/media/videos",
    },
  },
  openGraph: {
    title: "Образовательные видео и лекции | Доктор Александр Антипов",
    description: "Смотрите образовательные видео и демонстрации операций доктора Антипова",
    type: "website",
    locale: "ru_RU",
  },
}

// Video categories
const categories = [
  { id: "all", label: "Все видео" },
  { id: "surgical-techniques", label: "Хирургические методики" },
  { id: "patient-education", label: "Для пациентов" },
  { id: "case-studies", label: "Клинические случаи" },
  { id: "conference-talks", label: "Доклады с конференций" },
]

// Featured videos data
const featuredVideos = [
  {
    id: 1,
    title: "Установка имплантов на полную челюсть: запись живой операции",
    description:
      "Полная процедура All-on-4 от начала до конца — планирование операции, установка имплантов и немедленное временное протезирование.",
    thumbnail: "/images/video-thumbs/full-arch-demo.jpg", // Placeholder
    duration: "45:32",
    views: "12,5 тыс.",
    date: "2025-09-15",
    category: "surgical-techniques",
    videoUrl: "https://www.youtube.com/watch?v=placeholder1",
    topics: ["All-on-4", "Немедленная нагрузка", "Полная челюсть", "Планирование операции"],
  },
  {
    id: 2,
    title: "Всё о дентальных имплантах: руководство для пациента",
    description:
      "Подробное видео для пациентов: что такое дентальные импланты, как они работают, как проходит установка и чего ждать во время восстановления.",
    thumbnail: "/images/video-thumbs/patient-guide.jpg",
    duration: "18:24",
    views: "45,2 тыс.",
    date: "2025-08-20",
    category: "patient-education",
    videoUrl: "https://www.youtube.com/watch?v=placeholder2",
    topics: ["Для пациентов", "Дентальные импланты", "Ход лечения"],
  },
  {
    id: 3,
    title: "Сложная костная пластика при выраженной атрофии",
    description:
      "Продвинутые хирургические методики при выраженной потере костной ткани верхней и нижней челюсти, включая синус-лифтинг и аугментацию гребня.",
    thumbnail: "/images/video-thumbs/bone-grafting.jpg",
    duration: "32:18",
    views: "8,3 тыс.",
    date: "2025-07-10",
    category: "surgical-techniques",
    videoUrl: "https://www.youtube.com/watch?v=placeholder3",
    topics: ["Костная пластика", "Синус-лифтинг", "Аугментация гребня", "Продвинутые методики"],
  },
]

// Recent uploads
const recentVideos = [
  {
    id: 4,
    title: "Имплант одного зуба: эстетическая зона фронтального отдела",
    description:
      "Подробная демонстрация установки импланта в эстетической зоне с акцентом на работу с мягкими тканями и немедленное временное протезирование.",
    thumbnail: "/images/video-thumbs/single-tooth.jpg",
    duration: "24:15",
    views: "6,7 тыс.",
    date: "2025-09-01",
    category: "surgical-techniques",
    videoUrl: "https://www.youtube.com/watch?v=placeholder4",
  },
  {
    id: 5,
    title: "Корригирующая хирургия челюстей: планирование ортогнатического лечения",
    description:
      "Комплексный подход к планированию ортогнатической операции — 3D-визуализация, виртуальное хирургическое планирование и разбор клинического случая.",
    thumbnail: "/images/video-thumbs/jaw-surgery.jpg",
    duration: "28:45",
    views: "5,2 тыс.",
    date: "2025-08-15",
    category: "surgical-techniques",
    videoUrl: "https://www.youtube.com/watch?v=placeholder5",
  },
  {
    id: 6,
    title: "Лечение апноэ сна с помощью хирургии челюстей",
    description:
      "Видео для пациентов: как операция по выдвижению верхней и нижней челюсти помогает лечить обструктивное апноэ сна и улучшает качество жизни.",
    thumbnail: "/images/video-thumbs/sleep-apnea.jpg",
    duration: "16:30",
    views: "15,8 тыс.",
    date: "2025-07-25",
    category: "patient-education",
    videoUrl: "https://www.youtube.com/watch?v=placeholder6",
  },
  {
    id: 7,
    title: "Скуловые импланты: методика и применение",
    description:
      "Продвинутая хирургическая демонстрация установки скуловых имплантов для пациентов с выраженной потерей костной ткани верхней челюсти.",
    thumbnail: "/images/video-thumbs/zygomatic.jpg",
    duration: "38:20",
    views: "4,1 тыс.",
    date: "2025-06-30",
    category: "surgical-techniques",
    videoUrl: "https://www.youtube.com/watch?v=placeholder7",
  },
  {
    id: 8,
    title: "Чего ожидать после установки дентальных имплантов",
    description:
      "Рекомендации по уходу после операции, сроки восстановления и советы для оптимального заживления после установки дентальных имплантов.",
    thumbnail: "/images/video-thumbs/post-op.jpg",
    duration: "12:18",
    views: "22,4 тыс.",
    date: "2025-06-15",
    category: "patient-education",
    videoUrl: "https://www.youtube.com/watch?v=placeholder8",
  },
  {
    id: 9,
    title: "Сложный случай протезирования на полную челюсть: от и до",
    description:
      "Сложный случай имплантации на полную челюсть — от первой консультации до финального протезирования, включая трудности и их решения.",
    thumbnail: "/images/video-thumbs/case-study.jpg",
    duration: "52:40",
    views: "7,9 тыс.",
    date: "2025-05-20",
    category: "case-studies",
    videoUrl: "https://www.youtube.com/watch?v=placeholder9",
  },
]

// Conference presentations
const conferenceTalks = [
  {
    id: 10,
    title: "Цифровой рабочий процесс в имплантологии",
    conference: "American Association of Oral and Maxillofacial Surgeons Annual Meeting",
    location: "Сан-Диего, Калифорния",
    date: "2025-09-22",
    duration: "55:00",
    description:
      "Ключевой доклад о внедрении цифровых технологий на всех этапах работы с имплантами — от КЛКТ-визуализации и навигационной хирургии до цифрового протезирования.",
    videoUrl: "https://www.youtube.com/watch?v=placeholder10",
  },
  {
    id: 11,
    title: "Ведение осложнений при имплантации на полную челюсть",
    conference: "Academy of Osseointegration Annual Meeting",
    location: "Чикаго, Иллинойс",
    date: "2025-03-15",
    duration: "42:30",
    description:
      "Лекция о профилактике, распознавании и устранении осложнений при имплантации на полную челюсть с разбором реальных клинических случаев.",
    videoUrl: "https://www.youtube.com/watch?v=placeholder11",
  },
  {
    id: 12,
    title: "Будущее челюстно-лицевой хирургии: ИИ и робототехника",
    conference: "International Congress of Oral Implantologists",
    location: "Лас-Вегас, Невада",
    date: "2024-11-10",
    duration: "38:15",
    description:
      "Обзор новых технологий, включая искусственный интеллект и роботизированную хирургию, и их возможного применения в челюстно-лицевой хирургии.",
    videoUrl: "https://www.youtube.com/watch?v=placeholder12",
  },
]

export default function VideosPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Образовательные видео доктора Антипова",
    itemListElement: [...featuredVideos, ...recentVideos].map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VideoObject",
        name: v.title,
        description: v.description,
        thumbnailUrl: v.thumbnail,
        uploadDate: v.date,
        duration: `PT${v.duration.replace(":", "M")}S`,
        contentUrl: v.videoUrl,
        embedUrl: v.videoUrl.replace("watch?v=", "embed/"),
        publisher: {
          "@type": "Organization",
          name: "Dr. Alexander Antipov, DDS",
        },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <PageHero image="/images/testimonials/video-preview-3@2x-adae89ec.jpg" eyebrow="Медиа и видео" title="Смотрите наши процедуры" subtitle="Образовательные видео о наших хирургических методиках и результатах лечения пациентов." overlay="dark" />

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
              Избранные видео
            </h2>
            <p className="text-lg text-neutral-600">
              Самые популярные образовательные материалы и демонстрации операций
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
                      {new Date(video.date).toLocaleDateString("ru-RU", {
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
              Недавние загрузки
            </h2>
            <p className="text-lg text-neutral-600">Свежие образовательные материалы и видео операций</p>
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
                      {new Date(video.date).toLocaleDateString("ru-RU", {
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
              Доклады с конференций
            </h2>
            <p className="text-lg text-neutral-600">
              Ключевые лекции и доклады на крупнейших отраслевых конференциях
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
                          {talk.location} • {new Date(talk.date).toLocaleDateString("ru-RU", {
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
              Подпишитесь, чтобы видеть больше
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Получайте уведомления о новых образовательных видео, демонстрациях операций и докладах
              с конференций, как только они появятся на нашем канале.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.youtube.com/@DrAntipovchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg"
              >
                <Play className="h-5 w-5" />
                Подписаться на YouTube
              </a>
              <a
                href="/ru/for-patients/consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-full font-semibold hover:bg-neutral-50 transition-colors border-2 border-primary-600"
              >
                Записаться на консультацию
              </a>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
