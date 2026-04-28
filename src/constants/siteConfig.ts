export const siteConfig = {
  name: "Dr. Alexander Antipov",
  title: "Dr. Alexander Antipov - Northern California's Premier Oral Surgeon",
  description:
    "Board-certified oral surgeon Dr. Alexander Antipov specializes in dental implants, full-arch restoration, and corrective jaw surgery. Trusted by dentists across Northern California.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://drantipov.com",
  ogImage: "/og-image.jpg",
  links: {
    calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/dr-antipov",
  },
  contact: {
    email: "info@drantipov.com",
    phone: "(916) 783-2110",
    address: {
      street: "911 Reserve Dr",
      suite: "Ste 150",
      city: "Roseville",
      state: "CA",
      zip: "95678",
    },
  },
  social: {
    linkedin: "https://linkedin.com/in/dr-alexander-antipov",
    facebook: "https://facebook.com/drantipov",
    instagram: "https://instagram.com/drantipov",
  },
  hours: {
    weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
    weekend: "Closed",
    emergency: "24/7 Emergency On-Call Service Available",
  },
} as const

export const navigationLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Dr. Antipov",
    href: "/about",
  },
  {
    title: "Expertise",
    href: "/expertise",
    submenu: [
      { title: "Full-Arch Implant Solutions", href: "/expertise/full-arch-implants" },
      { title: "Single Tooth & Bridge Replacement", href: "/expertise/single-tooth" },
      { title: "Bone Grafting & Augmentation", href: "/expertise/bone-grafting" },
      { title: "Corrective Jaw Surgery", href: "/expertise/jaw-surgery" },
      { title: "Sleep Apnea Surgical Solutions", href: "/expertise/sleep-apnea" },
      { title: "Scarless Mole Removal", href: "/expertise/mole-removal" },
    ],
  },
  {
    title: "For Dentists",
    href: "/for-dentists",
    submenu: [
      { title: "Refer Patients", href: "/for-dentists/refer-patients" },
      { title: "Referral Partners", href: "/for-dentists/referral-partners" },
      { title: "Education & Courses", href: "/for-dentists/education/courses" },
    ],
  },
  {
    title: "Cases",
    href: "/surgical-cases",
    submenu: [
      { title: "Corrective Jaw Surgery", href: "/surgical-cases/corrective-jaw-surgery" },
      { title: "Dental Implants", href: "/surgical-cases/dental-implants" },
      { title: "Facial Cosmetic Surgery", href: "/surgical-cases/facial-cosmetic-surgery" },
    ],
  },
  {
    title: "For Patients",
    href: "/for-patients",
    submenu: [
      { title: "Testimonials", href: "/for-patients/testimonials" },
      { title: "Schedule Consultation", href: "/for-patients/consultation" },
      { title: "Pre-Op Instructions", href: "/for-patients/pre-op" },
      { title: "Post-Op Care", href: "/for-patients/post-op" },
      { title: "FAQs", href: "/for-patients/faqs" },
      { title: "Insights", href: "/for-patients/insights" },
    ],
  },
] as const

export const expertise = [
  {
    id: "full-arch-implants",
    title: "Full-Arch Implant Solutions",
    shortTitle: "Full-Arch Implants",
    description: "All-on-X restoration with same-day teeth using advanced techniques",
    icon: "teeth",
    href: "/expertise/full-arch-implants",
  },
  {
    id: "single-tooth",
    title: "Single Tooth & Bridge Replacement",
    shortTitle: "Single Tooth Implants",
    description: "Precision implant placement for natural-looking results",
    icon: "tooth",
    href: "/expertise/single-tooth",
  },
  {
    id: "bone-grafting",
    title: "Bone Grafting & Augmentation",
    shortTitle: "Bone Grafting",
    description: "Advanced techniques to restore bone volume for implant success",
    icon: "bone",
    href: "/expertise/bone-grafting",
  },
  {
    id: "jaw-surgery",
    title: "Corrective Jaw Surgery",
    shortTitle: "Jaw Surgery",
    description: "Orthognathic surgery to correct bite and facial structure",
    icon: "jaw",
    href: "/expertise/jaw-surgery",
  },
  {
    id: "sleep-apnea",
    title: "Sleep Apnea Surgical Solutions",
    shortTitle: "Sleep Apnea",
    description: "Surgical interventions for obstructive sleep apnea",
    icon: "sleep",
    href: "/expertise/sleep-apnea",
  },
  {
    id: "mole-removal",
    title: "Scarless Mole Removal from the Nose",
    shortTitle: "Scarless Mole Removal",
    description: "Advanced radio wave surgery for bloodless, scar-free mole removal",
    icon: "sparkles",
    href: "/expertise/mole-removal",
  },
] as const
