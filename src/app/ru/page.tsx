import type { Metadata } from "next";
import RussianHome from "@/components/RussianHome";
import {
  officeAddress,
  officePhone,
  russianHomePage,
  siteUrl,
} from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: russianHomePage.title,
  description: russianHomePage.description,
  alternates: {
    canonical: `${siteUrl}/ru`,
    languages: {
      "x-default": siteUrl,
      en: siteUrl,
      ru: `${siteUrl}/ru`,
    },
  },
  openGraph: {
    title: russianHomePage.title,
    description: russianHomePage.description,
    url: `${siteUrl}/ru`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg",
        width: 1920,
        height: 1080,
        alt: "Dr. Antipov same-day dental implants in Roseville California",
      },
    ],
  },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Dentist", "LocalBusiness"],
  "@id": `${siteUrl}/ru#business`,
  name: "Dr. Alexander Antipov, DDS — Oral & Maxillofacial Surgery",
  alternateName: "Доктор Александр Антипов",
  url: `${siteUrl}/ru`,
  description: russianHomePage.description,
  image: `${siteUrl}/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg`,
  telephone: "+1-916-783-2110",
  email: "info@drantipov.com",
  priceRange: "$$$$",
  inLanguage: ["en", "ru"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "911 Reserve Dr, Suite 150",
    addressLocality: "Roseville",
    addressRegion: "CA",
    postalCode: "95678",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.7521,
    longitude: -121.2880,
  },
  areaServed: [
    "Roseville",
    "Sacramento",
    "San Francisco Bay Area",
    "San Jose",
    "Reno",
    "Stockton",
    "Fresno",
    "Bay Area",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "300",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Хирургия и имплантология",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "All-on-4 dental implants",
          alternateName: "Имплантация на 4 имплантах",
          procedureType: "https://schema.org/SurgicalProcedure",
        },
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 21000,
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "All-on-6 dental implants",
          alternateName: "Имплантация на 6 имплантах",
          procedureType: "https://schema.org/SurgicalProcedure",
        },
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 25000,
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Zygomatic implants",
          alternateName: "Зигоматические импланты",
          procedureType: "https://schema.org/SurgicalProcedure",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Single tooth implant",
          alternateName: "Одиночный имплант",
          procedureType: "https://schema.org/SurgicalProcedure",
        },
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 2100,
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Bone grafting and sinus lift",
          alternateName: "Костная пластика и синус-лифтинг",
          procedureType: "https://schema.org/SurgicalProcedure",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Orthognathic (corrective jaw) surgery",
          alternateName: "Ортогнатическая хирургия",
          procedureType: "https://schema.org/SurgicalProcedure",
        },
      },
    ],
  },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${siteUrl}/ru#physician`,
  name: "Dr. Alexander Antipov, DDS",
  alternateName: "Доктор Александр Антипов",
  url: `${siteUrl}/ru/about`,
  image: `${siteUrl}/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg`,
  jobTitle: "Board-Certified Oral & Maxillofacial Surgeon",
  medicalSpecialty: ["DentalSpecialty", "OMS"],
  worksFor: { "@id": `${siteUrl}/ru#business` },
  knowsLanguage: ["en", "ru"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько стоит All-on-4?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "От $21 000 за арку под ключ у Dr. Antipov. После бесплатного 3D CT и осмотра называется точная стоимость. Финансирование от $99/мес, до 84 месяцев под 0% APR для квалифицированных заявителей.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли поставить импланты за один день?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Для All-on-4 и All-on-6 — да, при достаточной плотности кости и первичной стабильности импланта (≥35 Ncm). Импланты ставятся, и в этот же день фиксируются временные зубы (immediate load). Постоянный протез — после 3–6 месяцев заживления.",
      },
    },
    {
      "@type": "Question",
      name: "Мне сказали, что кости недостаточно для имплантов. Есть варианты?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Да. Dr. Antipov делает сложную костную пластику и устанавливает zygomatic implants при тяжёлой потере кости в верхней челюсти. Точные рекомендации возможны после осмотра и 3D CT снимка.",
      },
    },
    {
      "@type": "Question",
      name: "Я живу не рядом с Roseville. Можно начать удалённо?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Да. Координатор объяснит, какие фото, снимки или документы стоит подготовить. Часть пациентов прилетает на консультацию из других штатов и стран.",
      },
    },
    {
      "@type": "Question",
      name: "Это безопасно? Что с анестезией?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Все хирургические процедуры выполняются под IV-седацией или общей анестезией. Dr. Antipov fellowship-trained и сертифицирован для сложной челюстно-лицевой хирургии. Surgical center в Roseville полностью оборудован под хирургию любой сложности.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Главная (Russian)",
      item: `${siteUrl}/ru`,
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}#website`,
  url: siteUrl,
  name: "Dr. Alexander Antipov, DDS",
  inLanguage: ["en", "ru"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/ru/questions?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const allSchemas = [
  websiteSchema,
  medicalBusinessSchema,
  physicianSchema,
  faqSchema,
  breadcrumbSchema,
];

export default function RussianImplantPage() {
  return (
    <>
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <RussianHome />
    </>
  );
}
