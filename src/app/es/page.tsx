import type { Metadata } from "next";
import SpanishHome from "@/components/SpanishHome";
import { spanishHomePage, siteUrl } from "@/data/spanishImplantFunnel";

export const metadata: Metadata = {
  title: spanishHomePage.title,
  description: spanishHomePage.description,
  alternates: {
    canonical: `${siteUrl}/es`,
    languages: {
      "x-default": siteUrl,
      en: siteUrl,
      es: `${siteUrl}/es`,
      ru: `${siteUrl}/ru`,
    },
  },
  openGraph: {
    title: spanishHomePage.title,
    description: spanishHomePage.description,
    url: `${siteUrl}/es`,
    locale: "es_US",
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
  "@id": `${siteUrl}/es#business`,
  name: "Dr. Alexander Antipov, DDS — Oral & Maxillofacial Surgery",
  alternateName: "Doctor Alexander Antipov",
  url: `${siteUrl}/es`,
  description: spanishHomePage.description,
  image: `${siteUrl}/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg`,
  telephone: "+1-916-783-2110",
  email: "info@drantipov.com",
  priceRange: "$$$$",
  inLanguage: ["en", "es", "ru"],
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
    longitude: -121.288,
  },
  areaServed: [
    "Roseville",
    "Sacramento",
    "Los Angeles",
    "San Diego",
    "San Jose",
    "Fresno",
    "Phoenix",
    "Houston",
    "Dallas",
    "Miami",
    "Chicago",
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
    name: "Cirugía e implantología",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "All-on-4 dental implants",
          alternateName: "Implantes All-on-4",
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
          alternateName: "Implantes All-on-6",
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
          alternateName: "Implantes zygomaticos",
          procedureType: "https://schema.org/SurgicalProcedure",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Single tooth implant",
          alternateName: "Implante individual",
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
          alternateName: "Injerto óseo y sinus lift",
          procedureType: "https://schema.org/SurgicalProcedure",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Orthognathic (corrective jaw) surgery",
          alternateName: "Cirugía ortognática",
          procedureType: "https://schema.org/SurgicalProcedure",
        },
      },
    ],
  },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${siteUrl}/es#physician`,
  name: "Dr. Alexander Antipov, DDS",
  alternateName: "Doctor Alexander Antipov",
  url: `${siteUrl}/about`,
  image: `${siteUrl}/images/landing-pages/dental-implants/art/smiling-woman-7bc2b588.jpg`,
  jobTitle: "Board-Certified Oral & Maxillofacial Surgeon",
  medicalSpecialty: ["DentalSpecialty", "OMS"],
  worksFor: { "@id": `${siteUrl}/es#business` },
  knowsLanguage: ["en", "es", "ru"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el All-on-4?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Desde $21,000 por arco completo. Después de la consulta gratis con CT 3D damos el costo exacto y financiamiento desde $99/mes con 0% APR hasta 84 meses para solicitantes calificados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es posible recibir los dientes el mismo día?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Para All-on-4 y All-on-6 — sí, cuando hay densidad ósea suficiente. Los implantes se colocan y los dientes provisionales se fijan ese mismo día (carga inmediata). La prótesis definitiva se entrega después del periodo de cicatrización (3 a 6 meses).",
      },
    },
    {
      "@type": "Question",
      name: "Me dijeron que no tengo suficiente hueso. ¿Hay opciones?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Sí. Dr. Antipov realiza injertos óseos complejos y coloca zygomatic implants cuando hay pérdida ósea severa en el maxilar superior. Las recomendaciones precisas son posibles tras la evaluación y CT 3D.",
      },
    },
    {
      "@type": "Question",
      name: "¿Aceptan seguros médicos y dentales?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Trabajamos con la mayoría de los planes PPO. El coordinador verifica tu cobertura sin costo. Si el seguro no cubre el implante, el financiamiento desde $99/mes cubre el resto.",
      },
    },
    {
      "@type": "Question",
      name: "Vivo lejos de Roseville. ¿Puedo empezar a distancia?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Sí. El coordinador explicará qué fotos, radiografías o documentos preparar. Recibimos pacientes que vuelan desde otros estados y países para concentrar el tratamiento en pocos días.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Inicio (Español)", item: `${siteUrl}/es` },
  ],
};

const allSchemas = [medicalBusinessSchema, physicianSchema, faqSchema, breadcrumbSchema];

export default function SpanishHomePage() {
  return (
    <>
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <SpanishHome />
    </>
  );
}
