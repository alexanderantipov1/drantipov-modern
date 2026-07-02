import { Section, Container } from "@/components/sections"
import { ServiceCard } from "@/components/expertise"
import PageHero from "@/components/PageHero"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import DualCTA from "@/components/DualCTA"
import { getBreadcrumbSchema, structuredDataScript } from "@/lib/structured-data"
import { siteConfig } from "@/constants/siteConfig"

const ruHero = {
  image: "/images/procedures/dental-implants@2x-06d1b2ea.jpg",
  eyebrow: "Полный спектр челюстно-лицевой хирургии",
  title: "Услуги и хирургические специализации",
  subtitle:
    "От имплантов «за один день» и корригирующей челюстной хирургии до эстетических процедур лица — весь перечень того, что делает наша сертифицированная команда.",
  overlay: "navy" as const,
  breadcrumbs: [{ name: "Услуги" }],
}

const ruExpertise = [
  {
    id: "full-arch-implants",
    shortTitle: "Импланты на полную челюсть",
    description: "Реставрация All-on-X с зубами за один день по современным протоколам",
    icon: "teeth",
    href: "/ru/expertise/full-arch-implants",
  },
  {
    id: "single-tooth",
    shortTitle: "Имплантация одного зуба",
    description: "Точная установка имплантов для максимально естественного результата",
    icon: "tooth",
    href: "/ru/expertise/single-tooth",
  },
  {
    id: "bone-grafting",
    shortTitle: "Костная пластика",
    description: "Современные методики восстановления объёма кости для успешной имплантации",
    icon: "bone",
    href: "/ru/expertise/bone-grafting",
  },
  {
    id: "jaw-surgery",
    shortTitle: "Челюстная хирургия",
    description: "Ортогнатическая хирургия для коррекции прикуса и черт лица",
    icon: "jaw",
    href: "/ru/expertise/jaw-surgery",
  },
  {
    id: "sleep-apnea",
    shortTitle: "Лечение апноэ сна",
    description: "Хирургические решения при обструктивном апноэ сна",
    icon: "sleep",
    href: "/ru/expertise/sleep-apnea",
  },
  {
    id: "mole-removal",
    shortTitle: "Удаление родинок без рубцов",
    description: "Радиоволновая хирургия — бескровно и без рубцов",
    icon: "sparkles",
    href: "/ru/expertise/mole-removal",
  },
  {
    id: "tooth-extractions",
    shortTitle: "Удаление зубов",
    description: "Простые и хирургические удаления, ретинированные зубы — с седацией",
    icon: "tooth",
    href: "/ru/expertise/tooth-extractions",
  },
  {
    id: "sedation-anesthesia",
    shortTitle: "Седация и анестезия",
    description: "Оральная, ингаляционная и IV-седация — вплоть до общего наркоза в офисе",
    icon: "sparkles",
    href: "/ru/expertise/sedation-anesthesia",
  },
  {
    id: "zygomatic-implants",
    shortTitle: "Скуловые импланты",
    description: "Фиксированные зубы на прочной кости, когда верхняя челюсть сильно резорбирована",
    icon: "teeth",
    href: "/ru/expertise/zygomatic-implants",
  },
  {
    id: "implant-rescue",
    shortTitle: "Спасение и переделка имплантов",
    description: "Исправление неудачных и заграничных случаев имплантации с восстановлением кости",
    icon: "teeth",
    href: "/ru/expertise/implant-rescue",
  },
  {
    id: "snap-on-dentures",
    shortTitle: "Съёмные протезы на имплантах",
    description: "Надёжный съёмный протез на 2–4 имплантах — без скольжения и щелчков",
    icon: "tooth",
    href: "/ru/expertise/snap-on-dentures",
  },
  {
    id: "facial-cosmetic",
    shortTitle: "Эстетика лица",
    description: "Ботокс, инъекционные филлеры и аугментация губ для естественного баланса лица",
    icon: "sparkles",
    href: "/ru/expertise/facial-cosmetic",
  },
  {
    id: "oral-pathology",
    shortTitle: "Патология полости рта и биопсия",
    description: "Биопсия и диагностика образований полости рта и челюстей — точно и быстро",
    icon: "bone",
    href: "/ru/expertise/oral-pathology",
  },
] as const

export const metadata = {
  title: { absolute: "Услуги челюстно-лицевой хирургии | Доктор Антипов" },
  description: "Русскоговорящий челюстно-лицевой хирург в Roseville, CA (район Сакраменто): импланты на полную челюсть (All-on-4), челюстная хирургия, апноэ сна, костная пластика, одиночные импланты, удаление родинок.",
  alternates: {
    canonical: "/ru/expertise",
    languages: {
      "en": "/expertise",
      "ru": "/ru/expertise",
      "x-default": "/expertise",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Услуги челюстно-лицевой хирургии",
    description: "Полный спектр сертифицированной челюстно-лицевой хирургии — импланты, ортогнатика, апноэ сна, костная пластика.",
    images: [
      {
        url: "/images/procedures/dental-implants@2x-06d1b2ea.jpg",
        width: 1200,
        height: 630,
        alt: "Услуги челюстно-лицевой хирургии",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Услуги челюстно-лицевой хирургии",
    description: "Полный спектр сертифицированной челюстно-лицевой хирургии — импланты, ортогнатика, апноэ сна, костная пластика.",
    images: ["/images/procedures/dental-implants@2x-06d1b2ea.jpg"],
  }
}

export default function ExpertisePage() {
  const structuredData = [
    getBreadcrumbSchema([
      { name: "Главная", url: `${siteConfig.url}/ru` },
      { name: "Услуги", url: `${siteConfig.url}/ru/expertise` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Услуги и процедуры челюстно-лицевой хирургии",
      description: "Полный перечень процедур челюстно-лицевой хирургии, которые выполняет доктор Антипов в Розвилле, штат Калифорния — импланты на полную челюсть, костная пластика, челюстная хирургия, лечение апноэ сна, одиночные импланты, удаление родинок, ВНЧС и зубы мудрости.",
      url: `${siteConfig.url}/ru/expertise`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Импланты на полную челюсть (All-on-4 / All-on-6)", url: `${siteConfig.url}/ru/expertise/full-arch-implants` },
        { "@type": "ListItem", position: 2, name: "Имплантация одного зуба и мостовидные конструкции", url: `${siteConfig.url}/ru/expertise/single-tooth` },
        { "@type": "ListItem", position: 3, name: "Костная пластика и аугментация", url: `${siteConfig.url}/ru/expertise/bone-grafting` },
        { "@type": "ListItem", position: 4, name: "Корригирующая челюстная хирургия (ортогнатическая)", url: `${siteConfig.url}/ru/expertise/jaw-surgery` },
        { "@type": "ListItem", position: 5, name: "Лечение апноэ сна", url: `${siteConfig.url}/ru/expertise/sleep-apnea` },
        { "@type": "ListItem", position: 6, name: "Удаление родинок", url: `${siteConfig.url}/ru/expertise/mole-removal` },
        { "@type": "ListItem", position: 7, name: "Лечение ВНЧС", url: `${siteConfig.url}/ru/expertise/tmj` },
        { "@type": "ListItem", position: 8, name: "Удаление зубов мудрости", url: `${siteConfig.url}/ru/expertise/wisdom-teeth` },
        { "@type": "ListItem", position: 9, name: "Удаление зубов", url: `${siteConfig.url}/ru/expertise/tooth-extractions` },
        { "@type": "ListItem", position: 10, name: "Седация и анестезия", url: `${siteConfig.url}/ru/expertise/sedation-anesthesia` },
        { "@type": "ListItem", position: 11, name: "Скуловые и крыловидные импланты", url: `${siteConfig.url}/ru/expertise/zygomatic-implants` },
        { "@type": "ListItem", position: 12, name: "Спасение и переделка имплантов", url: `${siteConfig.url}/ru/expertise/implant-rescue` },
        { "@type": "ListItem", position: 13, name: "Съёмные протезы на имплантах", url: `${siteConfig.url}/ru/expertise/snap-on-dentures` },
        { "@type": "ListItem", position: 14, name: "Эстетика лица", url: `${siteConfig.url}/ru/expertise/facial-cosmetic` },
        { "@type": "ListItem", position: 15, name: "Патология полости рта и биопсия", url: `${siteConfig.url}/ru/expertise/oral-pathology` },
      ],
    },
  ]
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript(structuredData)}
      />
      <PageHero {...ruHero} />

      {/* About Dr. Antipov — biography block */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/IMG_844_3.jpg"
                alt="Доктор Александр Антипов с пациентом после имплантации полной челюсти в Розвилле, Калифорния"
                width={1409}
                height={1600}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900">
                О докторе Александре Антипове
              </h2>

              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>
                  Доктор Александр В. Антипов — сертифицированный челюстно-лицевой хирург, работает в Розвилле, штат Калифорния.
                  Выпускник Московского государственного медико-стоматологического университета и Loma Linda University School of Dentistry,
                  прошёл углублённую резидентуру по челюстно-лицевой хирургии в Albert Einstein College of Medicine.
                </p>

                <p>
                  За плечами доктора — большой опыт в дентальной имплантации, костной пластике, ортогнатической хирургии,
                  лечении травм лица и эстетических процедурах. Тысячи пациентов снова обрели улыбку. Доктор Антипов имеет
                  госпитальные привилегии в нескольких медицинских учреждениях северной Калифорнии.
                </p>

                <p>
                  Доктор Антипов — член American Board of Oral and Maxillofacial Surgery, AAOMS и ADA. Его принципы — высокий
                  стандарт работы и внимание к пациенту — сделали его одним из самых надёжных челюстно-лицевых хирургов в северной Калифорнии.
                </p>
              </div>

              <Button asChild size="lg">
                <Link href="/ru/contact">Записаться на консультацию</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section background="default" padding="xl">
        <Container size="lg">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Наши специализированные услуги
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Комплексные решения в хирургической стоматологии — опираемся на углублённое обучение и 25+ лет опыта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ruExpertise.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.shortTitle}
                description={service.description}
                icon={service.icon as any}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Dr. Antipov Section */}
            <DualCTA variant="dual"
      />

    </>
  )
}
