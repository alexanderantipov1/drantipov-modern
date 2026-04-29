import { siteConfig } from "@/constants/siteConfig";

export type FullArchLocale = "en" | "ru";

export interface FullArchLandingContent {
  locale: FullArchLocale;
  lang: "en-US" | "ru-RU";
  path: string;
  alternatePath: string;
  title: string;
  description: string;
  keywords: string[];
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  proof: string[];
  form: {
    eyebrow: string;
    title: string;
    body: string;
    name: string;
    phone: string;
    email: string;
    city: string;
    condition: string;
    timing: string;
    contact: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    consent: string;
    successTitle: string;
    successBody: string;
    errorTitle: string;
    errorBody: string;
    conditionOptions: string[];
    timingOptions: string[];
    contactOptions: string[];
  };
  offer: {
    eyebrow: string;
    title: string;
    body: string;
    items: { title: string; body: string }[];
  };
  outcomes: {
    eyebrow: string;
    title: string;
    body: string;
    items: { title: string; body: string }[];
  };
  comparison: {
    title: string;
    rows: { label: string; fixed: string; dentures: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    body: string;
    steps: { title: string; body: string }[];
  };
  surgeon: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
  };
  faq: { question: string; answer: string }[];
  finalCta: {
    title: string;
    body: string;
    button: string;
  };
}

export const fullArchLanding: Record<FullArchLocale, FullArchLandingContent> = {
  en: {
    locale: "en",
    lang: "en-US",
    path: "/full-arch-dental-implants",
    alternatePath: "/ru/full-arch-dental-implants",
    title: "Full Arch Dental Implants in Roseville | Free 3D CT Consultation",
    description:
      "Surgeon-led All-on-4, All-on-6, zygomatic implants, and full-arch dental implant planning with Dr. Alexander Antipov in Roseville, CA.",
    keywords: [
      "full arch dental implants Roseville",
      "All-on-4 Sacramento",
      "full mouth dental implants",
      "zygomatic implants California",
      "dental implant consultation",
    ],
    hero: {
      eyebrow: "Full-arch dental implant consultation | Roseville, CA",
      headline: "Fixed teeth. Clear plan. Surgeon-led full-arch implants.",
      subheadline:
        "For failing teeth, loose dentures, severe bone loss, or a second opinion. Dr. Alexander Antipov plans All-on-4, All-on-6, zygomatic implants, and bone grafting with 3D CT imaging.",
      primaryCta: "Check eligibility",
      secondaryCta: "Call now",
      imageAlt: "Dr. Alexander Antipov with a smiling dental implant patient",
    },
    proof: [
      "Board-certified oral & maxillofacial surgeon",
      "Complimentary 3D CT consultation",
      "IV sedation and general anesthesia available",
      "All-on-4, All-on-6, zygomatic implants",
    ],
    form: {
      eyebrow: "60-second eligibility check",
      title: "Find out your best full-arch option",
      body: "Send the basics. The team will contact you with the next step and what to prepare before your consultation.",
      name: "Full name",
      phone: "Phone",
      email: "Email",
      city: "City",
      condition: "What best describes your teeth?",
      timing: "When do you want to start?",
      contact: "Best way to reach you",
      message: "What should Dr. Antipov's team know?",
      messagePlaceholder: "Dentures, failing teeth, missing teeth, prior quote, bone loss, pain, or timeline...",
      submit: "Request my consultation",
      sending: "Sending...",
      consent:
        "By submitting, you consent to be contacted about your inquiry. This form does not collect medical records or protected health information.",
      successTitle: "Request received",
      successBody: "The team will contact you within 24 hours. For urgent scheduling, call the office directly.",
      errorTitle: "Something went wrong",
      errorBody: "Please try again or call the office directly.",
      conditionOptions: [
        "Most teeth are failing",
        "I wear dentures",
        "I am missing many teeth",
        "I was told I do not have enough bone",
        "I want a second opinion",
      ],
      timingOptions: ["As soon as possible", "This month", "1-3 months", "Just researching"],
      contactOptions: ["Phone call", "SMS", "Email", "WhatsApp", "Telegram"],
    },
    offer: {
      eyebrow: "What the consultation includes",
      title: "A clear plan before you decide",
      body:
        "The best implant funnels remove uncertainty. This page routes patients into a focused consultation path: anatomy, options, cost range, financing, timing, and surgical comfort.",
      items: [
        {
          title: "3D CT scan",
          body: "Evaluate bone, sinus position, nerve location, and implant options before guessing at a plan.",
        },
        {
          title: "Surgeon review",
          body: "A board-certified oral and maxillofacial surgeon reviews All-on-4, All-on-6, zygomatic, and grafting paths.",
        },
        {
          title: "Written roadmap",
          body: "Understand surgical steps, temporary teeth, healing, final restoration timing, and likely next appointments.",
        },
        {
          title: "Cost and financing discussion",
          body: "See what changes the fee: one arch vs two, bone loss, sedation, materials, and restorative design.",
        },
      ],
    },
    outcomes: {
      eyebrow: "Built for full-arch cases",
      title: "From loose teeth or dentures to a fixed implant bridge",
      body:
        "Full-arch implants can replace an upper arch, lower arch, or both arches with fixed teeth supported by dental implants. Same-day temporary teeth may be possible when anatomy and implant stability allow it.",
      items: [
        {
          title: "No loose denture movement",
          body: "A fixed bridge is secured to implants and does not rely on denture adhesive.",
        },
        {
          title: "Designed around your bone",
          body: "3D planning helps determine whether All-on-4, All-on-6, bone grafting, or zygomatic implants make sense.",
        },
        {
          title: "Comfort-focused surgery",
          body: "IV sedation and general anesthesia options help make complex full-arch surgery more manageable.",
        },
      ],
    },
    comparison: {
      title: "Fixed full-arch implants vs removable dentures",
      rows: [
        { label: "Stability", fixed: "Secured to implants", dentures: "Can move or lift" },
        { label: "Daily routine", fixed: "Brush and maintain like a fixed bridge", dentures: "Remove, soak, and use adhesive" },
        { label: "Chewing confidence", fixed: "Designed for stronger function", dentures: "Often limited by movement" },
        { label: "Bone support", fixed: "Implants stimulate jawbone", dentures: "Does not replace tooth roots" },
      ],
    },
    process: {
      eyebrow: "Treatment path",
      title: "What happens after you request a consultation",
      body:
        "The exact plan depends on your health, bone, bite, and goals. This is the typical full-arch path patients can expect.",
      steps: [
        {
          title: "Eligibility call",
          body: "Your city, current dental condition, timeline, and preferred contact method are confirmed.",
        },
        {
          title: "3D CT consultation",
          body: "Dr. Antipov reviews anatomy, treatment options, sedation, and what is realistic for your case.",
        },
        {
          title: "Plan and pricing",
          body: "You receive a clear roadmap for one arch or both arches, including temporary and final teeth timing.",
        },
        {
          title: "Surgery and temporary teeth",
          body: "Extractions, implant placement, and temporary fixed teeth may happen the same day when clinically appropriate.",
        },
        {
          title: "Healing and final bridge",
          body: "After integration, final impressions and restorative steps create the long-term prosthesis.",
        },
      ],
    },
    surgeon: {
      eyebrow: "Why Dr. Antipov",
      title: "Complex implant surgery belongs with a surgical specialist",
      body:
        "Full-arch cases can involve extractions, bone grafting, sinus anatomy, severe upper-jaw bone loss, IV sedation, and medical risk review. Dr. Antipov's practice is built around oral and maxillofacial surgery.",
      bullets: [
        "25+ years of surgical experience",
        "10,000+ restored smiles referenced across the practice site",
        "3D CT-guided planning",
        "Experience with zygomatic implants and severe bone-loss cases",
      ],
    },
    faq: [
      {
        question: "Can I get teeth the same day?",
        answer:
          "Temporary fixed teeth may be possible the day of surgery when implant stability, bone quality, and bite planning support it. Final teeth are usually completed after healing.",
      },
      {
        question: "What if I was told I do not have enough bone?",
        answer:
          "You may still have options. Depending on anatomy, the plan may include bone grafting, sinus lift, angled implants, or zygomatic implants for severe upper-jaw bone loss.",
      },
      {
        question: "How much do full-arch implants cost?",
        answer:
          "The fee depends on one arch vs two, number of implants, bone grafting, sedation, temporary teeth, final material, and case complexity. The consultation gives you a case-specific plan.",
      },
      {
        question: "Do you treat people who already have dentures?",
        answer:
          "Yes. Many full-arch patients start with loose, uncomfortable, or unstable dentures and want a fixed implant-supported option.",
      },
    ],
    finalCta: {
      title: "Start with a focused full-arch consultation",
      body: "Send the form or call the office. The goal is simple: find out whether fixed implant teeth are realistic for your case and what the next step should be.",
      button: "Check eligibility",
    },
  },
  ru: {
    locale: "ru",
    lang: "ru-RU",
    path: "/ru/full-arch-dental-implants",
    alternatePath: "/full-arch-dental-implants",
    title: "Full Arch Dental Implants в Roseville | Бесплатная 3D CT консультация",
    description:
      "All-on-4, All-on-6, zygomatic implants и full-arch implant planning у Dr. Alexander Antipov в Roseville, CA.",
    keywords: [
      "full arch dental implants Roseville",
      "All-on-4 Sacramento",
      "имплантация всей челюсти",
      "zygomatic implants California",
      "консультация по имплантам",
    ],
    hero: {
      eyebrow: "Full-arch implant consultation | Roseville, CA",
      headline: "Фиксированные зубы. Понятный план. Full-arch implants у хирурга.",
      subheadline:
        "Для разрушенных зубов, неудобных dentures, сильной потери кости или second opinion. Dr. Alexander Antipov планирует All-on-4, All-on-6, zygomatic implants и bone grafting с 3D CT imaging.",
      primaryCta: "Проверить кандидатуру",
      secondaryCta: "Позвонить",
      imageAlt: "Dr. Alexander Antipov с пациентом после лечения",
    },
    proof: [
      "Сертифицированный oral & maxillofacial surgeon",
      "Бесплатная 3D CT консультация",
      "IV sedation и general anesthesia доступны",
      "All-on-4, All-on-6, zygomatic implants",
    ],
    form: {
      eyebrow: "Проверка за 60 секунд",
      title: "Узнайте лучший full-arch вариант",
      body: "Оставьте базовую информацию. Команда свяжется с вами и объяснит следующий шаг перед консультацией.",
      name: "Имя и фамилия",
      phone: "Телефон",
      email: "Email",
      city: "Город",
      condition: "Что лучше описывает ситуацию?",
      timing: "Когда хотите начать?",
      contact: "Как удобнее связаться?",
      message: "Что важно знать команде Dr. Antipov?",
      messagePlaceholder: "Dentures, разрушенные зубы, отсутствующие зубы, прошлый quote, потеря кости, боль или сроки...",
      submit: "Запросить консультацию",
      sending: "Отправляем...",
      consent:
        "Отправляя форму, вы соглашаетесь, что с вами свяжутся по вашему запросу. Форма не собирает медицинские документы или protected health information.",
      successTitle: "Заявка получена",
      successBody: "Команда свяжется с вами в течение 24 часов. Для срочной записи позвоните в офис.",
      errorTitle: "Что-то пошло не так",
      errorBody: "Попробуйте ещё раз или позвоните в офис напрямую.",
      conditionOptions: [
        "Большинство зубов разрушены",
        "Я ношу dentures",
        "Много зубов отсутствует",
        "Мне сказали, что кости недостаточно",
        "Мне нужен second opinion",
      ],
      timingOptions: ["Как можно скорее", "В этом месяце", "Через 1-3 месяца", "Пока изучаю варианты"],
      contactOptions: ["Звонок", "SMS", "Email", "WhatsApp", "Telegram"],
    },
    offer: {
      eyebrow: "Что входит в консультацию",
      title: "Понятный план до принятия решения",
      body:
        "Сильная implant-воронка убирает неопределенность. Эта страница ведет пациента к фокусированной консультации: анатомия, варианты, стоимость, financing, сроки и комфорт операции.",
      items: [
        {
          title: "3D CT scan",
          body: "Оценка кости, sinus position, nerve location и implant options до того, как обсуждать план.",
        },
        {
          title: "Обзор у хирурга",
          body: "Сертифицированный oral and maxillofacial surgeon оценивает All-on-4, All-on-6, zygomatic и grafting варианты.",
        },
        {
          title: "Письменный roadmap",
          body: "Вы понимаете этапы операции, temporary teeth, healing, сроки final restoration и следующие визиты.",
        },
        {
          title: "Стоимость и financing",
          body: "Разбор того, что влияет на цену: одна дуга или две, bone loss, sedation, материалы и дизайн протеза.",
        },
      ],
    },
    outcomes: {
      eyebrow: "Для full-arch случаев",
      title: "От loose teeth или dentures к фиксированному implant bridge",
      body:
        "Full-arch implants могут заменить верхнюю дугу, нижнюю дугу или обе дуги фиксированными зубами на dental implants. Same-day temporary teeth возможны, когда анатомия и стабильность имплантов позволяют.",
      items: [
        {
          title: "Без подвижности dentures",
          body: "Fixed bridge крепится к имплантам и не держится на denture adhesive.",
        },
        {
          title: "План вокруг вашей кости",
          body: "3D planning помогает выбрать All-on-4, All-on-6, bone grafting или zygomatic implants.",
        },
        {
          title: "Комфортная хирургия",
          body: "IV sedation и general anesthesia помогают легче пройти сложную full-arch surgery.",
        },
      ],
    },
    comparison: {
      title: "Fixed full-arch implants vs removable dentures",
      rows: [
        { label: "Стабильность", fixed: "Фиксация на имплантах", dentures: "Могут двигаться" },
        { label: "Ежедневный уход", fixed: "Уход как за fixed bridge", dentures: "Нужно снимать, замачивать и использовать adhesive" },
        { label: "Жевание", fixed: "Сильнее и увереннее", dentures: "Часто ограничено подвижностью" },
        { label: "Поддержка кости", fixed: "Implants стимулируют кость", dentures: "Не заменяют корни зубов" },
      ],
    },
    process: {
      eyebrow: "Путь лечения",
      title: "Что происходит после заявки",
      body:
        "Точный план зависит от здоровья, кости, прикуса и целей. Так обычно выглядит full-arch путь для пациентов.",
      steps: [
        {
          title: "Eligibility call",
          body: "Команда уточняет город, состояние зубов, сроки и удобный способ связи.",
        },
        {
          title: "3D CT консультация",
          body: "Dr. Antipov оценивает анатомию, варианты лечения, sedation и реалистичный план.",
        },
        {
          title: "План и стоимость",
          body: "Вы получаете roadmap для одной или двух дуг, включая сроки temporary и final teeth.",
        },
        {
          title: "Операция и temporary teeth",
          body: "Удаления, установка implants и temporary fixed teeth могут пройти в один день, когда это клинически подходит.",
        },
        {
          title: "Healing и final bridge",
          body: "После integration делаются final impressions и restorative steps для долгосрочного протеза.",
        },
      ],
    },
    surgeon: {
      eyebrow: "Почему Dr. Antipov",
      title: "Сложная implant surgery должна быть у хирургического специалиста",
      body:
        "Full-arch cases могут включать extractions, bone grafting, sinus anatomy, сильную потерю кости верхней челюсти, IV sedation и medical risk review. Практика Dr. Antipov построена вокруг oral and maxillofacial surgery.",
      bullets: [
        "25+ лет хирургического опыта",
        "10,000+ восстановленных улыбок указаны на сайте практики",
        "3D CT-guided planning",
        "Опыт со zygomatic implants и severe bone-loss cases",
      ],
    },
    faq: [
      {
        question: "Можно ли получить зубы в день операции?",
        answer:
          "Temporary fixed teeth возможны в день операции, когда стабильность implants, качество кости и bite planning это позволяют. Final teeth обычно завершаются после healing.",
      },
      {
        question: "Что если мне сказали, что кости недостаточно?",
        answer:
          "Варианты могут оставаться. В зависимости от анатомии план может включать bone grafting, sinus lift, angled implants или zygomatic implants при сильной потере кости верхней челюсти.",
      },
      {
        question: "Сколько стоят full-arch implants?",
        answer:
          "Цена зависит от одной или двух дуг, количества implants, bone grafting, sedation, temporary teeth, final material и сложности случая. Консультация дает план под ваш случай.",
      },
      {
        question: "Вы принимаете пациентов, которые уже носят dentures?",
        answer:
          "Да. Многие full-arch пациенты начинают с loose, uncomfortable или unstable dentures и хотят фиксированный implant-supported вариант.",
      },
    ],
    finalCta: {
      title: "Начните с focused full-arch consultation",
      body: "Отправьте форму или позвоните в офис. Цель простая: понять, реалистичны ли fixed implant teeth в вашем случае и какой следующий шаг имеет смысл.",
      button: "Проверить кандидатуру",
    },
  },
};

export const fullArchPhoneHref = "tel:9167832110";

export function getFullArchLandingStructuredData(content: FullArchLandingContent) {
  const url = `${siteConfig.url}${content.path}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: content.title,
      description: content.description,
      inLanguage: content.lang,
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: "Dr. Alexander Antipov",
        url: siteConfig.url,
      },
      about: [
        { "@type": "MedicalProcedure", name: "Full-arch dental implants" },
        { "@type": "MedicalProcedure", name: "All-on-4 dental implants" },
        { "@type": "MedicalProcedure", name: "All-on-6 dental implants" },
        { "@type": "MedicalProcedure", name: "Zygomatic dental implants" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: "Full-arch dental implant restoration",
      alternateName: ["All-on-4", "All-on-6", "Teeth in a Day"],
      bodyLocation: "Jaw",
      procedureType: "Surgical",
      howPerformed:
        "Treatment may include 3D CBCT imaging, clinical exam, extractions, alveoloplasty, bone grafting, dental implant placement, temporary fixed teeth when appropriate, and final prosthetic restoration after healing.",
      preparation:
        "Medical history review, 3D CT imaging, photographs, bite evaluation, treatment planning, sedation planning, and restorative coordination.",
      followup:
        "Post-operative checks, healing review, x-rays, implant integration monitoring, and final restorative phase.",
      provider: {
        "@type": "Physician",
        name: "Dr. Alexander Antipov",
        medicalSpecialty: "Oral and Maxillofacial Surgery",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "Dentist", "LocalBusiness"],
      "@id": `${siteConfig.url}/#organization`,
      name: "Dr. Alexander Antipov",
      url,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      priceRange: "$$$",
      medicalSpecialty: ["Oral Surgery", "Maxillofacial Surgery", "Implant Dentistry"],
      address: {
        "@type": "PostalAddress",
        streetAddress: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.suite}`,
        addressLocality: siteConfig.contact.address.city,
        addressRegion: siteConfig.contact.address.state,
        postalCode: siteConfig.contact.address.zip,
        addressCountry: "US",
      },
      image: `${siteConfig.url}/images/drantipov.png`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}
