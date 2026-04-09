/**
 * Structured Data (Schema.org) for SEO
 *
 * This file contains JSON-LD structured data generators for different page types.
 * Following Schema.org standards for medical professionals and businesses.
 */

import { siteConfig } from "@/constants/siteConfig"

/**
 * Organization Schema - Used site-wide
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: "Dr. Antipov Oral Surgery",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/images/office.jpg`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.street} ${siteConfig.contact.address.suite}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.7521, // Roseville, CA approximate
      longitude: -121.2880,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$$",
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
    ],
    hasMap: "https://maps.google.com/?q=911+Reserve+Dr+Ste+150+Roseville+CA+95678",
  }
}

/**
 * Physician Schema - Dr. Antipov
 */
export function getPhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteConfig.url}/#physician`,
    name: "Dr. Alexander Antipov",
    givenName: "Alexander",
    familyName: "Antipov",
    honorificPrefix: "Dr.",
    jobTitle: "Oral and Maxillofacial Surgeon",
    description:
      "Board-certified oral and maxillofacial surgeon specializing in dental implants, full-arch restoration, corrective jaw surgery, and facial reconstruction.",
    url: `${siteConfig.url}/about`,
    image: `${siteConfig.url}/images/dr-antipov.jpg`,
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "University of California, San Francisco",
        sameAs: "https://www.ucsf.edu",
      },
      {
        "@type": "EducationalOrganization",
        name: "University of the Pacific Arthur A. Dugoni School of Dentistry",
        sameAs: "https://dental.pacific.edu",
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "American Association of Oral and Maxillofacial Surgeons",
        sameAs: "https://www.aaoms.org",
      },
      {
        "@type": "Organization",
        name: "American Dental Association",
        sameAs: "https://www.ada.org",
      },
      {
        "@type": "Organization",
        name: "Academy of Osseointegration",
        sameAs: "https://www.osseo.org",
      },
    ],
    worksFor: {
      "@id": `${siteConfig.url}/#organization`,
    },
    knowsAbout: [
      "Dental Implants",
      "Full-Arch Restoration",
      "All-on-4",
      "Corrective Jaw Surgery",
      "Orthognathic Surgery",
      "Bone Grafting",
      "Sleep Apnea Surgery",
      "Facial Reconstruction",
      "Oral Surgery",
      "Maxillofacial Surgery",
    ],
    medicalSpecialty: [
      "Oral Surgery",
      "Maxillofacial Surgery",
      "Implant Dentistry",
      "Reconstructive Surgery",
    ],
  }
}

/**
 * Medical Procedure Schema Generator
 */
export function getMedicalProcedureSchema(procedure: {
  name: string
  description: string
  url: string
  procedureType?: string
  followup?: string
  preparation?: string
  howPerformed?: string
  bodyLocation?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: procedure.name,
    description: procedure.description,
    url: procedure.url,
    procedureType: procedure.procedureType || "Surgical",
    followup: procedure.followup,
    preparation: procedure.preparation,
    howPerformed: procedure.howPerformed,
    bodyLocation: procedure.bodyLocation,
    medicineSystem: "WesternConventional",
    availableService: {
      "@type": "MedicalTherapy",
      name: procedure.name,
      provider: {
        "@id": `${siteConfig.url}/#physician`,
      },
    },
  }
}

/**
 * Full-Arch Implants Procedure Schema
 */
export function getFullArchImplantsSchema() {
  return getMedicalProcedureSchema({
    name: "Full-Arch Dental Implant Restoration (All-on-4)",
    description:
      "Complete tooth replacement using 4-6 dental implants to support a full arch of prosthetic teeth, providing same-day teeth with immediate loading.",
    url: `${siteConfig.url}/expertise/full-arch-implants`,
    procedureType: "Surgical",
    bodyLocation: "Jaw",
    howPerformed:
      "Strategically placed dental implants are inserted into the jawbone at specific angles to maximize bone contact. A temporary full-arch prosthesis is attached the same day, followed by a permanent restoration after healing.",
    preparation:
      "Comprehensive consultation, 3D CBCT imaging, digital treatment planning, medical history review, and pre-operative instructions.",
    followup:
      "Post-operative appointments at 1 week, 1 month, 3 months, and 6 months. Final restoration delivery at 3-6 months.",
  })
}

/**
 * Bone Grafting Procedure Schema
 */
export function getBoneGraftingSchema() {
  return getMedicalProcedureSchema({
    name: "Dental Bone Grafting",
    description:
      "Surgical procedure to rebuild or augment jawbone using bone graft material to provide adequate bone volume for dental implant placement.",
    url: `${siteConfig.url}/expertise/bone-grafting`,
    procedureType: "Surgical",
    bodyLocation: "Jaw",
    howPerformed:
      "Bone graft material (autograft, allograft, or xenograft) is placed in areas of bone deficiency. May include sinus lift procedures, ridge augmentation, or block grafts depending on the specific case.",
    preparation: "CBCT scan, medical history review, antibiotic prophylaxis if indicated.",
    followup: "Healing period of 3-6 months before implant placement. Regular monitoring appointments.",
  })
}

/**
 * Orthognathic Surgery Procedure Schema
 */
export function getOrthognathicSurgerySchema() {
  return getMedicalProcedureSchema({
    name: "Corrective Jaw Surgery (Orthognathic Surgery)",
    description:
      "Surgical correction of jaw alignment issues to improve bite function, facial aesthetics, and airway health. Treats severe malocclusions, TMJ disorders, and sleep apnea.",
    url: `${siteConfig.url}/expertise/jaw-surgery`,
    procedureType: "Surgical",
    bodyLocation: "Jaw, Face",
    howPerformed:
      "Performed under general anesthesia. Jaw bones are precisely repositioned using virtual surgical planning and 3D-printed surgical guides. May involve upper jaw (maxilla), lower jaw (mandible), or both (bimaxillary surgery).",
    preparation:
      "Orthodontic preparation (12-18 months), 3D imaging, virtual surgical planning, pre-surgical orthodontic alignment.",
    followup:
      "Hospital stay 1-2 nights. Post-operative orthodontics for 6-12 months. Regular follow-up for 12-24 months.",
  })
}

/**
 * Breadcrumb Schema Generator
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * FAQ Schema Generator
 */
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/**
 * Review Schema Generator
 */
export function getReviewSchema(review: {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    itemReviewed: {
      "@id": `${siteConfig.url}/#organization`,
    },
  }
}

/**
 * Aggregate Rating Schema
 */
export function getAggregateRatingSchema(stats: {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: stats.ratingValue,
    reviewCount: stats.reviewCount,
    bestRating: stats.bestRating || 5,
    worstRating: stats.worstRating || 1,
    itemReviewed: {
      "@id": `${siteConfig.url}/#organization`,
    },
  }
}

/**
 * Video Schema Generator
 */
export function getVideoSchema(video: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  contentUrl?: string
  embedUrl?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration, // ISO 8601 format (e.g., "PT1H30M")
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  }
}

/**
 * Course Schema Generator (for educational content)
 */
export function getCourseSchema(course: {
  name: string
  description: string
  provider: string
  url: string
  price?: string
  duration?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: course.provider,
    },
    url: course.url,
    offers: course.price
      ? {
          "@type": "Offer",
          price: course.price,
          priceCurrency: "USD",
        }
      : undefined,
    timeRequired: course.duration,
    courseMode: "online",
    educationalCredentialAwarded: "Continuing Education Credits",
  }
}

/**
 * Event Schema Generator (for speaking engagements)
 */
export function getEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: {
    name: string
    address: string
  }
  performer?: string
  eventStatus?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: event.eventStatus || "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location.name,
      address: {
        "@type": "PostalAddress",
        name: event.location.address,
      },
    },
    performer: {
      "@type": "Person",
      name: event.performer || "Dr. Alexander Antipov",
    },
    organizer: {
      "@id": `${siteConfig.url}/#organization`,
    },
  }
}

/**
 * Helper function to inject structured data into page
 */
export function structuredDataScript(data: object | object[]) {
  const jsonLd = Array.isArray(data) ? data : [data]

  return {
    __html: JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd),
  }
}
