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

export const metadata: Metadata = {
  title: "Выступления и лекции | Доктор Александр Антипов",
  description:
    "Доктор Антипов проводит выступления, мастер-классы и образовательные лекции по дентальной имплантации, челюстно-лицевой хирургии и хирургическим методикам.",
  keywords: [
    "докладчик по челюстно-лицевой хирургии",
    "лекции по дентальной имплантации",
    "обучение хирургии",
    "спикер конференций",
    "выступления доктора Антипова",
    "курсы повышения квалификации по хирургии",
    "мастер-классы по имплантологии",
  ],
  alternates: {
    canonical: "/ru/media/speaking",
    languages: {
      ru: "/ru/media/speaking",
      en: "/media/speaking",
      "x-default": "/media/speaking",
    },
  },
  openGraph: {
    title: "Выступления и лекции | Доктор Александр Антипов",
    description:
      "Пригласите доктора Антипова на вашу конференцию или образовательное мероприятие",
    type: "website",
    locale: "ru_RU",
  },
};

// Speaking topics
const speakingTopics = [
  {
    id: 1,
    title: "Реабилитация на полную челюсть с помощью имплантов",
    description:
      "Комплексный подход к случаям имплантации на полную челюсть: планирование лечения, хирургические методики, протоколы немедленной нагрузки и нюансы протезирования.",
    duration: "60-90 минут",
    audience: "Стоматологи общей практики, ортопеды, челюстно-лицевые хирурги",
    format: ["Лекция", "Мастер-класс", "Практикум"],
  },
  {
    id: 2,
    title: "Цифровой рабочий процесс в имплантационной хирургии",
    description:
      "Интеграция КЛКТ-визуализации, цифрового планирования лечения, навигационной хирургии и CAD/CAM-протезирования для предсказуемых результатов имплантации.",
    duration: "45-60 минут",
    audience: "Все специалисты-стоматологи",
    format: ["Лекция", "Живая демонстрация"],
  },
  {
    id: 3,
    title: "Продвинутые методики костной пластики",
    description:
      "Ведение сложных случаев с выраженной потерей костной ткани: синус-лифтинг, аугментация гребня, блоковые трансплантаты и выбор биоматериалов.",
    duration: "90-120 минут",
    audience: "Челюстно-лицевые хирурги, пародонтологи, имплантологи",
    format: ["Лекция", "Мастер-класс", "Демонстрация операции"],
  },
  {
    id: 4,
    title: "Ортогнатическая хирургия: от планирования до исполнения",
    description:
      "Современный подход к корригирующей хирургии челюстей: виртуальное хирургическое планирование, 3D-печать, общение с пациентом и проведение операции.",
    duration: "60-90 минут",
    audience: "Челюстно-лицевые хирурги, ортодонты",
    format: ["Лекция", "Разбор клинических случаев"],
  },
  {
    id: 5,
    title: "Ведение осложнений в имплантационной хирургии",
    description:
      "Профилактика, распознавание и устранение хирургических осложнений: повреждения нервов, перфорация синуса, отторжение имплантов и инфекции.",
    duration: "60 минут",
    audience: "Все практикующие имплантологи",
    format: ["Лекция", "Клинические случаи"],
  },
  {
    id: 6,
    title: "Хирургия апноэ сна: роль челюстно-лицевого хирурга",
    description:
      "Хирургические методы лечения обструктивного апноэ сна, отбор пациентов, методики выдвижения верхней и нижней челюсти и результаты лечения.",
    duration: "45-60 минут",
    audience: "Челюстно-лицевые хирурги, специалисты по медицине сна",
    format: ["Лекция"],
  },
];

// Past speaking engagements
const pastEngagements = [
  {
    id: 1,
    title: "Цифровой рабочий процесс в имплантологии",
    event:
      "American Association of Oral and Maxillofacial Surgeons Annual Meeting",
    location: "Сан-Диего, Калифорния",
    date: "22-24 сентября 2025",
    type: "Основной докладчик",
    attendees: "2500+",
    description:
      "Выступил с ключевым докладом о внедрении цифровых технологий на всех этапах работы с имплантами перед аудиторией более 2500 челюстно-лицевых хирургов и стоматологов.",
  },
  {
    id: 2,
    title: "Ведение осложнений при имплантации на полную челюсть",
    event: "Academy of Osseointegration Annual Meeting",
    location: "Чикаго, Иллинойс",
    date: "13-15 марта 2025",
    type: "Приглашённый лектор",
    attendees: "1800+",
    description:
      "Представил основанные на доказательствах стратегии профилактики и устранения осложнений при имплантации на полную челюсть с живыми демонстрациями клинических случаев.",
  },
  {
    id: 3,
    title: "Мастер-класс по продвинутой костной пластике",
    event: "California Society of Oral and Maxillofacial Surgeons",
    location: "Сан-Франциско, Калифорния",
    date: "18-19 января 2025",
    type: "Ведущий мастер-класса",
    attendees: "60",
    description:
      "Провёл интенсивный двухдневный практический мастер-класс по продвинутым методикам костной пластики, выбору биоматериалов и ведению сложных случаев.",
  },
  {
    id: 4,
    title: "Будущее челюстно-лицевой хирургии: ИИ и робототехника",
    event: "International Congress of Oral Implantologists",
    location: "Лас-Вегас, Невада",
    date: "8-10 ноября 2024",
    type: "Пленарный докладчик",
    attendees: "3200+",
    description:
      "Рассказал о новых технологиях в челюстно-лицевой хирургии, включая искусственный интеллект, роботизированную помощь и их клиническое применение.",
  },
  {
    id: 5,
    title: "Реабилитация на полную челюсть: от планирования до протезирования",
    event: "Implant Symposium",
    location: "Розвилл, Калифорния",
    date: "12 октября 2024",
    type: "Руководитель курса",
    attendees: "45",
    description:
      "Руководил однодневным курсом повышения квалификации для стоматологов общей практики по имплантации на полную челюсть — от хирургического до протезного этапа.",
  },
  {
    id: 6,
    title: "Скуловые импланты: продвинутые методики",
    event: "Pacific Coast Society for Prosthodontics",
    location: "Монтерей, Калифорния",
    date: "14-16 июня 2024",
    type: "Приглашённый лектор",
    attendees: "350+",
    description:
      "Представил хирургические протоколы и нюансы протезирования при установке скуловых имплантов в условиях выраженной резорбции верхней челюсти.",
  },
];

// Upcoming engagements
const upcomingEngagements = [
  {
    id: 1,
    title: "Цифровая имплантационная хирургия: полный рабочий процесс",
    event: "Seattle Study Club Symposium",
    location: "Сиэтл, Вашингтон",
    date: "8-9 ноября 2025",
    type: "Приглашённый докладчик",
    status: "Подтверждено",
  },
  {
    id: 2,
    title: "Сложные случаи имплантации на полную челюсть: поиск решений",
    event: "American College of Prosthodontists Annual Session",
    location: "Бостон, Массачусетс",
    date: "30 октября - 2 ноября 2025",
    type: "Секционная сессия",
    status: "Подтверждено",
  },
  {
    id: 3,
    title: "Ортогнатическая хирургия в цифровую эпоху",
    event: "Western Society of Oral and Maxillofacial Surgeons",
    location: "Финикс, Аризона",
    date: "6-7 декабря 2025",
    type: "Основной докладчик",
    status: "Подтверждено",
  },
];

// Statistics
const stats = [
  { label: "Выступлений", value: "150+", icon: Mic2 },
  { label: "Конференций по всему миру", value: "40+", icon: MapPin },
  { label: "Обученных специалистов", value: "5000+", icon: Users },
  { label: "Часов повышения квалификации", value: "10 000+", icon: Award },
];

const monthMap: Record<string, string> = {
  января: "янв.",
  февраля: "февр.",
  марта: "марта",
  апреля: "апр.",
  мая: "мая",
  июня: "июня",
  июля: "июля",
  августа: "авг.",
  сентября: "сент.",
  октября: "окт.",
  ноября: "нояб.",
  декабря: "дек.",
};

function parseEngagementDate(date: string): { month: string; year: string } {
  const monthMatch = Object.keys(monthMap).find((m) => date.includes(m));
  const yearMatch = date.match(/\d{4}/);
  return {
    month: monthMatch ? monthMap[monthMatch]! : "",
    year: yearMatch ? yearMatch[0] : "",
  };
}

export default function SpeakingPage() {
  return (
    <>
      <PageHero image="/images/blog/2014-12-05/speaker-dr-antipov-8af6f91c.jpg" eyebrow="Выступления и обучение" title="Доклады на конференциях" subtitle="Доктор Антипов делится опытом на национальных и международных стоматологических конференциях." overlay="navy" />

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
              Темы для выступлений
            </h2>
            <p className="text-lg text-neutral-600">
              Доктор Антипов проводит увлекательные, основанные на доказательствах
              доклады по самым разным темам челюстно-лицевой хирургии и имплантологии.
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
                      Длительность:
                    </span>
                    <span className="text-neutral-600">{topic.duration}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-neutral-900 min-w-24">
                      Аудитория:
                    </span>
                    <span className="text-neutral-600">{topic.audience}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-neutral-900 min-w-24">
                      Формат:
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
              Предстоящие выступления
            </h2>
            <p className="text-lg text-neutral-600">
              Встретьтесь с доктором Антиповым на этих мероприятиях
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
              Прошедшие выступления
            </h2>
            <p className="text-lg text-neutral-600">
              Недавние лекции, мастер-классы и доклады на крупных конференциях
            </p>
          </div>

          <div className="space-y-6">
            {pastEngagements.map((engagement) => {
              const parsed = parseEngagementDate(engagement.date);
              return (
              <GlassCard key={engagement.id} className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Date Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex flex-col items-center justify-center text-white">
                      <div className="text-2xl font-bold">
                        {parsed.month}
                      </div>
                      <div className="text-sm">
                        {parsed.year}
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
                        {engagement.attendees} участников
                      </span>
                    </div>

                    <p className="text-neutral-700 leading-relaxed">
                      {engagement.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
              );
            })}
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
                Пригласите доктора Антипова на ваше мероприятие
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Доктор Антипов проводит ключевые доклады, мастер-классы,
                практические курсы и образовательные лекции на конференциях,
                в учебных клубах и стоматологических обществах по всему миру.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 mb-8 max-w-xl mx-auto">
              <h3 className="font-semibold text-neutral-900 mb-3">
                Форматы выступлений:
              </h3>
              <ul className="text-sm text-neutral-700 space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>Ключевые доклады и пленарные лекции</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>Практические мастер-классы и демонстрации операций</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>
                    Курсы повышения квалификации (с зачётными часами)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>Доклады в учебных клубах и образовательные встречи</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5">•</span>
                  <span>Онлайн-вебинары и дистанционные курсы</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/ru/contact">Пригласить выступить</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="/ru/media/videos"
                  className="inline-flex items-center gap-2"
                >
                  Смотреть прошлые доклады
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <p className="text-sm text-neutral-500 mt-6">
              По вопросам выступлений свяжитесь с нашим офисом по адресу{" "}
              <a
                href="mailto:info@galleriaoms.com"
                className="text-primary-600 hover:underline"
              >
                info@galleriaoms.com
              </a>
            </p>
          </GlassCard>
        </Container>
      </Section>
    </>
  );
}
