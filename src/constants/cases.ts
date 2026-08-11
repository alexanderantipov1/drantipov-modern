export interface SurgicalCase {
  id: string
  title: string
  category: "corrective-jaw-surgery" | "dental-implants" | "facial-cosmetic-surgery"
  imagePath: string
  description?: string
  diagnosis?: string[]
  procedures?: string[]
  surgeon?: string
  date?: string
  images?: {
    path: string
    alt: string
  }[]
}

/**
 * Long-form, blog-style write-up for a surgical case.
 * Keyed by the case `id` in src/constants/caseArticles. Rendered on the
 * /surgical-cases/[category]/[caseId] detail pages by <CaseArticleBody />.
 */
export interface CaseArticle {
  /** Keyword-rich <title>, ~55–65 chars. */
  metaTitle: string
  /** Meta description, ~150–160 chars. */
  metaDescription: string
  /** 8–15 SEO keywords (local + procedure). */
  keywords: string[]
  /** Estimated read time in minutes. */
  readMinutes: number
  /** 1–2 sentence lead shown under the title in the article header. */
  excerpt: string
  /** Body of the article: keyword-rich H2 headings + prose paragraphs. */
  sections: {
    heading: string
    paragraphs: string[]
  }[]
}

export const correctiveJawSurgeryCases: SurgicalCase[] = [
  {
    id: "oms000052",
    title: "Maxillomandibular Advancement & Genioplasty for Asymmetric Class II Malocclusion",
    category: "corrective-jaw-surgery",
    imagePath: "/images/cases/corrective-jaw-surgery/oms000052/1/preview-e1afb959.jpg",
    description: "Combined asymmetric deformity of the lower and upper jaws, a class II skeletal occlusion anomaly",
    diagnosis: [
      "Asymmetric deformity of maxilla and mandible",
      "Class II skeletal occlusion anomaly",
    ],
    procedures: [
      "Bilateral sagittal osteotomy of the upper jaw at Le Fort I level",
      "Genioplasty",
      "Total maxillomandibular advancement",
    ],
    surgeon: "Dr. Alexander V. Antipov",
  },
  {
    id: "oms000051",
    title: "Correction of an Asymmetric Anomaly of Class II Occlusion",
    category: "corrective-jaw-surgery",
    imagePath: "/images/cases/corrective-jaw-surgery/oms000051/1/preview-adf6b82f.jpg",
    diagnosis: [
      "Maxillary hypoplasia asymmetry",
      "Mandibular asymmetry hyperpasia",
      "Inferior border chin deviation",
      "Nasal deviation",
      "Left temporomandibular disorder",
      "Angle Class III malocclusion",
    ],
    procedures: [
      "Bilateral sagittal split osteotomy of the mandible",
      "Osteotomy of the maxilla at Le Fort I level",
      "Genioplasty lengthening and advancement",
    ],
    surgeon: "Dr. André-David Kahwach",
  },
  {
    id: "oms000050",
    title: "Three-Jaw Orthognathic Surgery for Asymmetric Class II Malocclusion",
    category: "corrective-jaw-surgery",
    imagePath: "/images/cases/corrective-jaw-surgery/oms000050/1/preview-90866192.jpg",
    description: "Asymmetric Class II skeletal deformity with functional and aesthetic compromise. Three-jaw surgery — Le Fort I osteotomy, BSSO, and genioplasty — performed in a single anesthesia session. Patient regained full chewing function and improved facial harmony with no relapse at 18-month follow-up.",
    diagnosis: [
      "Asymmetric deformity of maxilla and mandible",
      "Class II skeletal malocclusion",
    ],
    procedures: [
      "Bilateral sagittal split osteotomy of the lower jaw",
      "Osteotomy of the upper jaw at the level of Le Fort I",
      "Genioplasty lengthening and advancement",
    ],
    surgeon: "Dr. Alexander V. Antipov",
  },
  {
    id: "oms000049",
    title: "Correction Of Class II Malocclusion",
    category: "corrective-jaw-surgery",
    imagePath: "/images/cases/corrective-jaw-surgery/oms000049/1/preview-18f5c36d.jpg",
    diagnosis: [
      "Asymmetric deformity of the upper and lower jaw",
      "Class II skeletal occlusion anomaly",
    ],
    procedures: [
      "Bilateral sagittal osteotomy of the lower jaw",
      "Osteotomy of the upper jaw at Le Fort I level",
      "Genioplasty lengthening and advancement",
    ],
    surgeon: "Dr. Alexander V. Antipov",
    date: "September 11, 2019",
  },
  {
    id: "oms000048",
    title: "Face Lengthening and Advancement - Aesthetic Jaw Surgery",
    category: "corrective-jaw-surgery",
    imagePath: "/images/cases/corrective-jaw-surgery/oms000048/1/preview-cc4983da.jpg",
    description: "Short face syndrome with Class I occlusion and reduced lower facial height. Surgical plan: 3-piece Le Fort I osteotomy for maxillary lengthening, bilateral sagittal split osteotomy (BSSO) for mandibular advancement, and genioplasty for chin lengthening. Result: restored facial proportions, improved airway, balanced smile.",
    diagnosis: [
      "Maxillary hypoplasia",
      "Mandible deficiency",
      "Short face",
      "Short chin",
      "Collapsed midface and lower face",
      "Poor nasal and lip support",
      "Class I malocclusion",
    ],
    procedures: [
      "Maxillary Le Fort I osteotomy, 3-piece advancement",
      "Bone grafting to maxilla",
      "Mandibular bilateral sagittal split osteotomy advancement",
      "Genioplasty lengthening and advancement",
    ],
    surgeon: "Dr. André-David Kahwach",
  },
  {
    id: "oms000047",
    title: "Maxillomandibular Advancement with Genioplasty",
    category: "corrective-jaw-surgery",
    imagePath: "/images/cases/corrective-jaw-surgery/oms000047/1/preview-53c05e9f.jpg",
    diagnosis: [
      "Maxillary hypoplasia",
      "Mandible deficiency",
      "Poor nasal and lip support",
      "Maxillary and mandibular deficiency class III malocclusion",
    ],
    procedures: [
      "Maxillary Le Fort I osteotomy, 3-piece advancement 10mm",
      "Bone grafting to maxilla",
      "Mandibular bilateral sagittal split osteotomy advancement",
      "Genioplasty lengthening and setback",
    ],
    date: "August 19, 2017",
    surgeon: "Dr. Alexander V. Antipov"
  },
  {
    id: "oms000046",
    title: "Corrective Jaw Surgery Complete Face Makeover",
    category: "corrective-jaw-surgery",
    imagePath: "/images/cases/corrective-jaw-surgery/oms000046/1/preview-b2a17db4.jpg",
    diagnosis: [
      "Severe maxillary asymmetry",
      "Mandibular length short",
      "Chin deviation",
      "Nasal deviation",
      "Wide nasal base",
      "Mandibular deficiency class II malocclusion",
    ],
    procedures: [
      "Maxillary Le Fort I osteotomy, 3-piece advancement",
      "Mandibular bilateral sagittal split osteotomy",
      "Bone grafting to maxilla and mandible",
      "Rhinoplasty with nasal base reduction",
      "Fat transfer from inner thigh for cheek augmentation",
    ],
    surgeon: "Dr. Alexander V. Antipov"
  },
  {
    id: "oms000045",
    title: "Orthognathic Surgery With Bone Grafting",
    category: "corrective-jaw-surgery",
    imagePath: "/images/cases/corrective-jaw-surgery/oms000045/1/preview-2bbec581.jpg",
    diagnosis: [
      "Maxillary hypoplasia",
      "Mandible normal length",
      "Inferior border chin deviation",
      "Nasal deviation",
      "Left temporomandibular disorder",
      "Class III malocclusion",
    ],
    procedures: [
      "Maxillary Le Fort I osteotomy (1-piece)",
      "Bone grafting to maxilla",
    ],
    date: "March 31, 2017",
    surgeon: "Dr. Alexander V. Antipov"
  },
]

export const dentalImplantsCases: SurgicalCase[] = [
  {
    id: "di000010",
    title: "Immediate Implants and Teeth All-On-4 on Upper Jaw",
    category: "dental-implants",
    imagePath: "/images/cases/dental-implants/di000010/1/preview-0d23c849.jpg",
    procedures: [
      "All-on-4 dental implants on upper jaw",
      "Bone graft with immediate implants",
      "Temporary dentures placed same day",
    ],
    surgeon: "Dr. Alexander V. Antipov",
    date: "September 11, 2017",
  },
  {
    id: "di000009",
    title: "Immediate Implants and Teeth All-On-4 Surgical Case",
    category: "dental-implants",
    imagePath: "/images/cases/dental-implants/di000009/1/preview-a09e65cd.jpg",
    description: "All-on-4 Teeth-In-A-Day Surgical Treatment with bone grafting and immediate teeth placement",
    procedures: [
      "All-on-4 dental implants",
      "Bone grafting",
      "Immediate teeth placement",
      "Teeth-In-A-Day surgical treatment",
    ],
    surgeon: "Dr. Alexander V. Antipov",
    date: "September 11, 2017",
  },
  {
    id: "di000008",
    title: "Immediate Implants on Mandible and Teeth All-On-4",
    category: "dental-implants",
    imagePath: "/images/cases/dental-implants/di000008/1/preview-b109556b.jpg",
    procedures: [
      "All-on-4 dental implants on mandible",
      "4 implants in anterior lower jaw",
      "Temporary dentures placed same day",
      "Teeth-In-A-Day surgical solution",
    ],
    surgeon: "Dr. Alexander V. Antipov",
  },
  {
    id: "di000007",
    title: "Immediate Implants and Teeth All-On-4 Teeth-In-A-Day",
    category: "dental-implants",
    imagePath: "/images/cases/dental-implants/di000007/1/preview@2x-5229846a.jpg",
    description: "Patient with previous jaw trauma received All-on-4 Teeth-In-A-Day surgical solution",
    procedures: [
      "All-on-4 dental implants",
      "Bone graft with implants",
      "Temporary dentures placed same day",
      "Teeth-In-A-Day surgical treatment",
    ],
    surgeon: "Dr. Alexander V. Antipov",
  },
  {
    id: "di000006",
    title: "Immediate Implants and Teeth All-On-4 After Jaw Trauma",
    category: "dental-implants",
    imagePath: "/images/cases/dental-implants/di000006/1/preview-83184c7e.jpg",
    description: "Patient with previous jaw trauma received All-on-4 Dental Implants and same-day overdentures",
    procedures: [
      "All-on-4 dental implants",
      "Bone grafting for both jaws",
      "Same-day overdentures",
      "Teeth-In-A-Day surgical solution",
    ],
    surgeon: "Dr. Alexander V. Antipov",
  },
  {
    id: "di000005",
    title: "Immediate Implants and Teeth All-On-4",
    category: "dental-implants",
    imagePath: "/images/cases/dental-implants/di000005/1/preview-bdd6eeb8.jpg",
    procedures: [
      "All-on-4 dental implants",
      "Sinus lift for both jaws",
      "4 implants in anterior jaw regions",
      "Temporary dentures placed same day",
    ],
    surgeon: "Dr. Alexander V. Antipov",
  },
  {
    id: "di000001",
    title: "All-on-4 and Teeth-in-a-Day Technique",
    category: "dental-implants",
    imagePath: "/images/cases/dental-implants/di000001/1/preview-9ce13250.jpg",
    description: "Complete surgical solution including extractions, immediate implants, and temporary bridge conversion",
    procedures: [
      "Extractions with Alveoloplasty",
      "Immediate implants placement",
      "Temporary denture conversion to temporary bridge",
      "All-on-4 dental implants",
    ],
    surgeon: "Dr. Alexander V. Antipov",
  },
]

export const facialCosmeticSurgeryCases: SurgicalCase[] = [
  {
    id: "fcs000006",
    title: "Asian Eyelids Correction",
    category: "facial-cosmetic-surgery",
    imagePath: "/images/cases/facial-cosmetic-surgery/fcs000006/1/preview-3892af01.jpg",
    procedures: ["Asian eyelid correction surgery"],
    surgeon: "Dr. André-David Kahwach",
    date: "2015",
  },
  {
    id: "fcs000005",
    title: "Face Lift Surgery, Upper and Lower Eyelid Surgery",
    category: "facial-cosmetic-surgery",
    imagePath: "/images/cases/facial-cosmetic-surgery/fcs000005/1/preview-e3c423f8.jpg",
    description: "Facial rejuvenation targeting lower/middle face, reestablishing lower jaw contour, refreshing upper/lower eyelids",
    procedures: [
      "Face and neck lift with deep SMAS-ectomy",
      "Upper and lower blepharoplasty",
      "Skin pinch excision",
    ],
    surgeon: "Dr. Alexander V. Antipov"
  },
  {
    id: "fcs000004",
    title: "Juvederm Lips Fillers",
    category: "facial-cosmetic-surgery",
    imagePath: "/images/cases/facial-cosmetic-surgery/fcs000004/1/preview-f355b860.jpg",
    procedures: [
      "Dermal fillers using Juvederm",
      "Upper and lower lips injection",
      "Contouring and volume injections with blunt canula",
    ],
    surgeon: "Dr. Alexander V. Antipov"
  },
  {
    id: "fcs000003",
    title: "Dermal Fillers Juvederm",
    category: "facial-cosmetic-surgery",
    imagePath: "/images/cases/facial-cosmetic-surgery/fcs000003/1/preview-72a841fb.jpg",
    description: "Combined facial rejuvenation procedure addressing upper and lower eyelid hooding, periorbital aging, and overall facial volume loss. Quad blepharoplasty with conservative fat repositioning. Recovery: visible swelling 5-7 days, full recovery 2-3 weeks. Natural rejuvenated appearance.",
    procedures: [
      "Juvederm dermal fillers",
      "Nasolabial folds treatment",
      "Marionette lines treatment",
      "Labiomental fold correction",
      "Chin lengthening",
    ],
    surgeon: "Dr. Alexander V. Antipov",
    date: "October 15, 2014",
  },
  {
    id: "fcs000002",
    title: "Neck Scarless Mole Removal",
    category: "facial-cosmetic-surgery",
    imagePath: "/images/cases/facial-cosmetic-surgery/fcs000002/1/preview-9ec3a32a.jpg",
    description: "Patient sought removal of a benign nasal mole that had become bothersome. Radio-wave surgical technique (Ellman®) — bloodless, minimal tissue damage, no sutures required. Healed without visible scar in 2 weeks. Cosmetic result excellent.",
    procedures: ["Radio wave surgery (Ellman technique)", "Scarless mole removal"],
    date: "October 7, 2014",
    surgeon: "Dr. Alexander V. Antipov"
  },
  {
    id: "fcs000001",
    title: "Facial Cosmetic Surgery Case: Scarless Nasal Mole Removal Before & After",
    category: "facial-cosmetic-surgery",
    imagePath: "/images/cases/facial-cosmetic-surgery/fcs000001/1/preview-9b89c3c9.jpg",
    description: "39-year-old male with big mole on left nose wing with deep roots causing nasal asymmetry",
    procedures: [
      "Radio wave surgery (Ellman technique)",
      "Scarless, bloodless nose mole removal",
    ],
    surgeon: "Dr. Alexander V. Antipov"
  },
]

export const allCases: SurgicalCase[] = [
  ...correctiveJawSurgeryCases,
  ...dentalImplantsCases,
  ...facialCosmeticSurgeryCases,
]

export const caseCategories = [
  {
    id: "corrective-jaw-surgery",
    title: "Corrective Jaw Surgery",
    description: "Orthognathic surgery — Le Fort I, BSSO, genioplasty — for malocclusion and facial asymmetry correction.",
    count: correctiveJawSurgeryCases.length,
    icon: "jaw",
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "All-on-4 and immediate implant solutions for complete smile restoration with same-day results.",
    count: dentalImplantsCases.length,
    icon: "tooth",
  },
  {
    id: "facial-cosmetic-surgery",
    title: "Facial Cosmetic Surgery",
    description: "Scarless mole removal, blepharoplasty, dermal fillers, and facial rejuvenation procedures.",
    count: facialCosmeticSurgeryCases.length,
    icon: "sparkles",
  },
] as const
