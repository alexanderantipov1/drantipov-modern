export interface Course {
  title: string
  lessons: string
  ceCredits: string | null
  level: string
  description: string
  price: string
  link: string
}

export const courses: Course[] = [
  {
    title: "Free e-Book: Orthognathic Surgery: Second Edition",
    lessons: "1 Lesson",
    ceCredits: null,
    level: "All Levels",
    description:
      "Comprehensive e-book on orthognathic surgery techniques and protocols. Essential reading for surgeons interested in corrective jaw surgery.",
    price: "Free",
    link: "https://www.fusiondentalacademy.com/courses/orthognathic-surgery-second-edition",
  },
  {
    title: "EZ Block: Alveolar Ridge Augmentation",
    lessons: "35 Lessons",
    ceCredits: null,
    level: "Intermediate to Advanced",
    description:
      "Master advanced ridge augmentation techniques for implant site development. Learn block grafting, GBR, and soft tissue management for optimal implant outcomes.",
    price: "$690.00",
    link: "https://www.fusiondentalacademy.com/courses/alveolar-ridge-augmentation",
  },
  {
    title: "All-on-4, 5, 6, X (Full Arch Implant Course) - 7 CE Units",
    lessons: "34 Lessons",
    ceCredits: "7 CE Units",
    level: "Advanced",
    description:
      "Comprehensive full-arch implant restoration training covering All-on-4, All-on-5, All-on-6, and All-on-X protocols. From treatment planning to final prosthesis delivery.",
    price: "$549.00",
    link: "https://www.fusiondentalacademy.com/courses/full-arch-dental-implant-course-all-on-4-5-6-X",
  },
  {
    title: "IN PERSON 2 Days Full Arch Training (20 CE Units)",
    lessons: "3 Lessons",
    ceCredits: "20 CE Units",
    level: "Advanced",
    description:
      "Exclusive hands-on 2-day intensive training in full-arch implant protocols. Live surgery observation and hands-on practice with expert mentorship.",
    price: "$12,299.00",
    link: "https://www.fusiondentalacademy.com/courses/full-arch-specialists-deep-dive-express-course",
  },
  {
    title: "Zygomatic Implants - Everything is Possible",
    lessons: "18 Lessons",
    ceCredits: null,
    level: "Advanced",
    description:
      "Advanced training in zygomatic implant placement for severely atrophic maxilla. Anatomy, surgical techniques, and complication management.",
    price: "$650.00",
    link: "https://www.fusiondentalacademy.com/courses/zygomatic-implants-everything-is-possible",
  },
  {
    title: "Full Arch Digital Flow A to Z Course",
    lessons: "19 Lessons",
    ceCredits: null,
    level: "Intermediate to Advanced",
    description:
      "Complete digital workflow for full-arch cases from digital impressions to final prosthesis. CBCT planning, guided surgery, and digital prosthetics.",
    price: "$499.00",
    link: "https://www.fusiondentalacademy.com/courses/full-arch-digital-flow-a-to-z-course",
  },
  {
    title: "Wisdom Teeth Removal in 5 Minutes",
    lessons: "12 Lessons",
    ceCredits: null,
    level: "Beginner to Intermediate",
    description:
      "Efficient and safe wisdom teeth extraction techniques. Learn proper surgical approaches, instrumentation, and post-operative care protocols.",
    price: "$199.00",
    link: "https://www.fusiondentalacademy.com/courses/wisdom-teeth-removal",
  },
  {
    title: "How to Setup 3D Dental Printer - Technical Support Tutorial",
    lessons: "4 Lessons",
    ceCredits: null,
    level: "All Levels",
    description:
      "Complete guide to setting up and operating 3D dental printers. Hardware setup, software configuration, and troubleshooting common issues.",
    price: "$150.00",
    link: "https://www.fusiondentalacademy.com/courses/how-to-setup-3d-printer-technical-support-tutorial-video",
  },
  {
    title: "Orthodontic Preparation For Orthognathic Surgery - 2 CE Units",
    lessons: "12 Lessons",
    ceCredits: "2 CE Units",
    level: "Intermediate",
    description:
      "Pre-surgical orthodontic treatment planning and execution for orthognathic surgery cases. Coordination between orthodontics and surgery.",
    price: "$35.00",
    link: "https://www.fusiondentalacademy.com/courses/orthodontic-surgery-preparation",
  },
  {
    title: "Orthognathic Surgery KLS Martin Open Box (One Day Before Surgery)",
    lessons: "1 Lesson",
    ceCredits: null,
    level: "Advanced",
    description:
      "Detailed walkthrough of KLS Martin surgical kit preparation and organization for orthognathic surgery. Pre-operative checklist and setup.",
    price: "$19.97",
    link: "https://www.fusiondentalacademy.com/courses/orthognathic-surgery-open-box-kls-martin",
  },
]
