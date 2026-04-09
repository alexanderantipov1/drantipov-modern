export const services = {
  fullArchImplants: {
    title: "Full-Arch Implant Solutions",
    tagline: "Transform Your Smile in a Single Day",
    description:
      "Advanced All-on-X implant restoration offering permanent, natural-looking teeth with same-day functionality.",
    benefits: [
      "Same-day teeth - walk out with a new smile",
      "Permanent solution - no removable dentures",
      "Preserves facial structure and prevents bone loss",
      "Eat, speak, and smile with confidence",
      "Natural appearance and function",
    ],
    procedures: [
      "All-on-4® Treatment Concept",
      "All-on-6 Restoration",
      "Zygomatic Implants (for severe bone loss)",
      "Immediate Load Protocols",
      "Computer-Guided Surgery",
    ],
    candidateInfo:
      "Ideal for patients with multiple missing teeth, failing dentition, or who are unhappy with dentures.",
  },
  singleTooth: {
    title: "Single Tooth & Bridge Replacement",
    tagline: "Precision Implant Solutions",
    description:
      "State-of-the-art single tooth implants and implant-supported bridges for natural results.",
    benefits: [
      "Preserves adjacent teeth - no grinding needed",
      "Maintains bone health",
      "Looks and feels like a natural tooth",
      "Long-lasting solution (95%+ success rate)",
      "Immediate temporary options available",
    ],
    procedures: [
      "Single Tooth Implants",
      "Implant-Supported Bridges",
      "Immediate Implant Placement",
      "Socket Preservation",
      "Aesthetic Zone Implants",
    ],
    candidateInfo:
      "Perfect for patients missing one or more teeth who want a permanent, natural-looking solution.",
  },
  boneGrafting: {
    title: "Bone Grafting & Augmentation",
    tagline: "Building a Foundation for Success",
    description:
      "Advanced bone regeneration techniques to enable successful implant placement.",
    benefits: [
      "Enables implant placement in compromised areas",
      "Restores facial contours",
      "Prevents further bone loss",
      "Multiple grafting options available",
      "Predictable, proven techniques",
    ],
    procedures: [
      "Socket Preservation Grafting",
      "Ridge Augmentation",
      "Sinus Lift (Lateral & Crestal Approach)",
      "Block Bone Grafts",
      "Guided Bone Regeneration (GBR)",
    ],
    candidateInfo:
      "Required for patients with insufficient bone volume for implant placement.",
  },
  jawSurgery: {
    title: "Corrective Jaw Surgery",
    tagline: "Restore Function, Enhance Aesthetics",
    description:
      "Orthognathic surgery to correct jaw misalignment, improve bite, and enhance facial harmony.",
    benefits: [
      "Corrects bite problems and TMJ issues",
      "Improves chewing, speaking, and breathing",
      "Enhances facial aesthetics",
      "Reduces wear on teeth",
      "Comprehensive surgical planning",
    ],
    procedures: [
      "Upper Jaw Surgery (Le Fort I Osteotomy)",
      "Lower Jaw Surgery (Bilateral Sagittal Split Osteotomy)",
      "Genioplasty (Chin Surgery)",
      "Two-Jaw Surgery",
      "Virtual Surgical Planning",
    ],
    candidateInfo:
      "For patients with jaw misalignment causing functional or aesthetic concerns.",
  },
  sleepApnea: {
    title: "Sleep Apnea Surgical Solutions",
    tagline: "Breathe Better, Sleep Better",
    description:
      "Surgical interventions for obstructive sleep apnea when conservative treatments fail.",
    benefits: [
      "Long-term solution for OSA",
      "Reduces dependence on CPAP",
      "Improves sleep quality and daytime function",
      "Addresses underlying anatomical issues",
      "Comprehensive evaluation and treatment",
    ],
    procedures: [
      "Maxillomandibular Advancement (MMA)",
      "Genioglossus Advancement",
      "Hyoid Suspension",
      "Combined Orthognathic Procedures",
      "Collaboration with Sleep Medicine Specialists",
    ],
    candidateInfo:
      "For patients with moderate to severe OSA who cannot tolerate or have failed CPAP therapy.",
  },
} as const

export type ServiceKey = keyof typeof services
