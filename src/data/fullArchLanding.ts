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
      title: "A surgeon-led plan for the implants, the bite, and the final arch",
      body:
        "Full-arch cases can involve extractions, bone grafting, sinus anatomy, severe upper-jaw bone loss, IV sedation, bite design, and final prosthetic management. Dr. Antipov's practice connects oral and maxillofacial surgery, prosthodontic planning, and an in-house dental lab so the case is designed from surgery through the final bridge.",
      bullets: [
        "25+ years of surgical experience",
        "10,000+ restored smiles referenced across the practice site",
        "3D CT-guided planning with prosthetic and bite design",
        "In-house dental lab and 50+ team members supporting patient and prosthetic management",
        "Experience with zygomatic implants and severe bone-loss cases",
        "Planning philosophy: Do it once. Do it right. Do it forever.",
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
    title: "Имплантация полного зубного ряда в Roseville | Бесплатная консультация с 3D КТ",
    description:
      "All-on-4, All-on-6, скуловые импланты и планирование реконструкции полного зубного ряда у доктора Александра Антипова в Roseville, CA.",
    keywords: [
      "имплантация полного ряда Roseville",
      "All-on-4 Сакраменто",
      "имплантация всех зубов",
      "скуловые импланты Калифорния",
      "консультация по имплантам",
    ],
    hero: {
      eyebrow: "Консультация по имплантации полного ряда | Roseville, CA",
      headline: "Фиксированные зубы. Чёткий план. Имплантация под руководством хирурга.",
      subheadline:
        "Для разрушающихся зубов, неудобных протезов, тяжёлой убыли кости или второго мнения. Доктор Александр Антипов планирует All-on-4, All-on-6, скуловые импланты и костную пластику по 3D КТ.",
      primaryCta: "Проверить, подходит ли мне",
      secondaryCta: "Позвонить сейчас",
      imageAlt: "Доктор Александр Антипов с улыбающимся пациентом после имплантации",
    },
    proof: [
      "Сертифицированный челюстно-лицевой хирург",
      "Бесплатная консультация с 3D КТ",
      "Доступны IV-седация и общий наркоз",
      "All-on-4, All-on-6, скуловые импланты",
    ],
    form: {
      eyebrow: "60-секундная проверка",
      title: "Узнайте, какой вариант имплантации вам подойдёт",
      body: "Заполните основное. Команда свяжется с вами, расскажет о следующем шаге и что подготовить к консультации.",
      name: "Полное имя",
      phone: "Телефон",
      email: "Email",
      city: "Город",
      condition: "Что лучше всего описывает ваши зубы?",
      timing: "Когда хотите начать?",
      contact: "Как удобнее связаться?",
      message: "Что важно знать команде доктора Антипова?",
      messagePlaceholder: "Съёмный протез, разрушающиеся зубы, отсутствуют зубы, уже есть оценка от другого врача, убыль кости, боль, сроки...",
      submit: "Записаться на консультацию",
      sending: "Отправляем...",
      consent:
        "Отправляя форму, вы соглашаетесь, что мы свяжемся с вами по вашему запросу. Форма не собирает медицинские записи или защищённую медицинскую информацию.",
      successTitle: "Заявка принята",
      successBody: "Мы свяжемся с вами в течение 24 часов. Если нужно срочно — позвоните в офис напрямую.",
      errorTitle: "Что-то пошло не так",
      errorBody: "Попробуйте ещё раз или позвоните в офис.",
      conditionOptions: [
        "Большинство зубов в плохом состоянии",
        "Ношу съёмный протез",
        "Не хватает многих зубов",
        "Сказали, что не хватает кости",
        "Хочу второе мнение",
      ],
      timingOptions: ["Как можно скорее", "В этом месяце", "1–3 месяца", "Пока просто узнаю"],
      contactOptions: ["Звонок", "SMS", "Email", "WhatsApp", "Telegram"],
    },
    offer: {
      eyebrow: "Что входит в консультацию",
      title: "Чёткий план до того, как вы решите",
      body:
        "Хорошая консультация по имплантации убирает неопределённость. Эта страница направляет вас в фокусную консультацию: анатомия, варианты, диапазон стоимости, рассрочка, сроки, комфорт во время операции.",
      items: [
        {
          title: "3D КТ-снимок",
          body: "Оцениваем кость, расположение пазух, положение нерва и варианты имплантации до того, как составлять план.",
        },
        {
          title: "Разбор хирургом",
          body: "Сертифицированный челюстно-лицевой хирург разбирает All-on-4, All-on-6, скуловые импланты и варианты пластики.",
        },
        {
          title: "План на бумаге",
          body: "Понимаете хирургические этапы, временные зубы, сроки заживления, сроки финального протеза и следующие приёмы.",
        },
        {
          title: "Разговор о стоимости и рассрочке",
          body: "Видите, от чего зависит цена: одна или обе челюсти, убыль кости, седация, материалы, дизайн протеза.",
        },
      ],
    },
    outcomes: {
      eyebrow: "Создано для случаев полной челюсти",
      title: "От расшатанных зубов или протезов — к фиксированному мосту на имплантах",
      body:
        "Имплантация полного ряда заменяет верхнюю, нижнюю или обе челюсти фиксированными зубами на дентальных имплантах. Временные зубы в день операции возможны, когда анатомия и стабильность имплантов это позволяют.",
      items: [
        {
          title: "Никакого ёрзания съёмника",
          body: "Фиксированный мост закреплён на имплантах и не зависит от фиксирующего геля.",
        },
        {
          title: "Подбирается под вашу кость",
          body: "3D-планирование помогает определить: All-on-4, All-on-6, нужна ли пластика или подойдут скуловые импланты.",
        },
        {
          title: "Операция с упором на комфорт",
          body: "IV-седация и общий наркоз делают сложную имплантацию полного ряда переносимой и спокойной.",
        },
      ],
    },
    comparison: {
      title: "Фиксированные импланты полного ряда vs съёмные протезы",
      rows: [
        { label: "Стабильность", fixed: "Закреплены на имплантах", dentures: "Могут смещаться или приподниматься" },
        { label: "Ежедневный уход", fixed: "Чистить как фиксированный мост", dentures: "Снимать, замачивать, использовать гель" },
        { label: "Уверенность при жевании", fixed: "Рассчитан на нормальную нагрузку", dentures: "Часто ограничено из-за движения" },
        { label: "Поддержка кости", fixed: "Импланты стимулируют челюстную кость", dentures: "Не заменяют корни зубов" },
      ],
    },
    process: {
      eyebrow: "Путь лечения",
      title: "Что происходит после того, как вы оставили заявку",
      body:
        "Точный план зависит от вашего здоровья, кости, прикуса и целей. Это типичный путь для случаев полной челюсти.",
      steps: [
        {
          title: "Звонок-проверка",
          body: "Уточняем ваш город, текущее состояние зубов, сроки и удобный способ связи.",
        },
        {
          title: "Консультация с 3D КТ",
          body: "Доктор Антипов разбирает анатомию, варианты лечения, седацию и что реалистично в вашем случае.",
        },
        {
          title: "План и стоимость",
          body: "Получаете чёткую дорожную карту по одной или обеим челюстям, со сроками временных и финальных зубов.",
        },
        {
          title: "Операция и временные зубы",
          body: "Удаление, установка имплантов и временные фиксированные зубы — часто в один день, когда это клинически возможно.",
        },
        {
          title: "Заживление и финальный мост",
          body: "После приживления — финальные слепки и ортопедические этапы для долгосрочного протеза.",
        },
      ],
    },
    surgeon: {
      eyebrow: "Почему доктор Антипов",
      title: "План от хирурга на импланты, прикус и финальный протез",
      body:
        "Случаи полной челюсти могут включать удаления, костную пластику, работу с гайморовой пазухой, тяжёлую убыль верхней челюсти, IV-седацию, дизайн прикуса и сопровождение финального протезирования. Практика доктора Антипова объединяет челюстно-лицевую хирургию, ортопедическое планирование и собственную зуботехническую лабораторию — дело собирается от операции до финального моста в одних руках.",
      bullets: [
        "25+ лет хирургического опыта",
        "10 000+ восстановленных улыбок (упоминаются по всему сайту)",
        "3D КТ-планирование с дизайном протеза и прикуса",
        "Собственная зуботехническая лаборатория и команда 50+ человек по работе с пациентами и протезами",
        "Опыт со скуловыми имплантами и случаями тяжёлой убыли кости",
        "Принцип планирования: сделать один раз, сделать правильно, сделать на всю жизнь.",
      ],
    },
    faq: [
      {
        question: "Можно ли получить зубы в день операции?",
        answer:
          "Временные фиксированные зубы возможны в день операции, когда первичная стабильность имплантов, качество кости и план прикуса это позволяют. Финальные зубы обычно ставятся после заживления.",
      },
      {
        question: "А если мне сказали, что не хватает кости?",
        answer:
          "У вас всё равно могут быть варианты. В зависимости от анатомии план может включать костную пластику, синус-лифтинг, наклонную установку имплантов или скуловые импланты при тяжёлой убыли верхней челюсти.",
      },
      {
        question: "Сколько стоит имплантация полного ряда?",
        answer:
          "Цена зависит от того, одна или обе челюсти, числа имплантов, костной пластики, седации, временных зубов, материала финального протеза и сложности случая. Точную смету даём на консультации.",
      },
      {
        question: "Вы работаете с теми, у кого уже есть съёмные протезы?",
        answer:
          "Да. Многие наши пациенты приходят с расшатанными, неудобными или подвижными протезами и хотят перейти на фиксированный вариант на имплантах.",
      },
    ],
    finalCta: {
      title: "Начните с фокусной консультации по имплантации полного ряда",
      body: "Заполните форму или позвоните в офис. Цель простая — выяснить, реалистична ли для вашего случая фиксированная имплантация и каким должен быть следующий шаг.",
      button: "Проверить, подходит ли мне",
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
      provider: { "@id": `${siteConfig.url}/#physician` },
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
