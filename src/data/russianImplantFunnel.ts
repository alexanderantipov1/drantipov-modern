export const siteUrl = "https://drantipov.com";
export const officePhone = "(916) 783-2110";
export const officePhoneHref = "tel:9167832110";
export const officeEmail = "info@drantipov.com";
export const officeAddress = "911 Reserve Dr, Suite 150, Roseville, CA 95678";

export interface RussianCityPage {
  slug: string;
  city: string;
  region: string;
  country: string;
  title: string;
  description: string;
  headline: string;
  subtitle: string;
  proof: string[];
}

export const russianHomePage: RussianCityPage = {
  slug: "",
  city: "Roseville",
  region: "Sacramento, Bay Area, Reno, Los Angeles, Seattle, New York, Miami, Toronto, Vancouver",
  country: "United States",
  title: "Имплантация зубов у Dr. Antipov — русскоязычный intake",
  description:
    "Русскоязычный intake для All-on-4, All-on-6, zygomatic implants, bone grafting и бесплатной 3D CT консультации у Dr. Alexander Antipov в Roseville, CA.",
  headline: "Имплантация зубов в Калифорнии у Dr. Alexander Antipov",
  subtitle:
    "All-on-4, All-on-6, zygomatic implants, bone grafting и same-day temporary teeth when appropriate. Начните на русском: расскажите город, задачу и удобный канал связи.",
  proof: [
    "Board-certified oral & maxillofacial surgeon",
    "Free consultation with complimentary 3D CT scan",
    "Roseville, CA office serving travel-in patients",
  ],
};

export const russianCityPages: RussianCityPage[] = [
  {
    slug: "sacramento",
    city: "Sacramento",
    region: "Sacramento, Roseville, Folsom, Citrus Heights",
    country: "United States",
    title: "Dr. Antipov — имплантация зубов для русскоязычных в Sacramento",
    description:
      "Русскоязычный intake для All-on-4, All-on-6, zygomatic implants и консультаций по имплантации у Dr. Antipov рядом с Sacramento.",
    headline: "Dental implants для русскоязычных пациентов Sacramento и Roseville",
    subtitle:
      "Офис Dr. Antipov находится в Roseville: бесплатная 3D CT консультация, same-day temporary teeth when appropriate, All-on-4, All-on-6 и сложные случаи с bone loss.",
    proof: ["Roseville office near Sacramento", "Free 3D CT scan & consultation", "Phone intake available in Russian"],
  },
  {
    slug: "san-francisco",
    city: "San Francisco Bay Area",
    region: "San Francisco, San Jose, Palo Alto, Oakland, Walnut Creek",
    country: "United States",
    title: "Dr. Antipov — All-on-4 implants для русскоязычных в Bay Area",
    description:
      "Русскоязычный intake для пациентов Bay Area, которые рассматривают All-on-4, All-on-6 или zygomatic implants у Dr. Antipov в Roseville.",
    headline: "Имплантация зубов у Dr. Antipov для пациентов Bay Area",
    subtitle:
      "Если вы живете в San Francisco, San Jose или Walnut Creek, можно начать с русскоязычного intake и подготовить вопросы перед консультацией в Roseville.",
    proof: ["Bay Area source-market page", "Complex implant reconstruction", "Travel-to-Roseville consultation flow"],
  },
  {
    slug: "los-angeles",
    city: "Los Angeles",
    region: "Los Angeles, West Hollywood, Glendale, Valley",
    country: "United States",
    title: "Dr. Antipov — dental implants для русскоязычных в Los Angeles",
    description:
      "Русскоязычная консультационная воронка для Los Angeles пациентов, которым нужны All-on-4, All-on-6, zygomatic implants или second opinion.",
    headline: "All-on-4 и сложная имплантация для русскоязычных клиентов Los Angeles",
    subtitle:
      "Команда Dr. Antipov уточнит ваш случай, сроки и предпочтительный канал связи, чтобы объяснить следующий шаг перед поездкой в Roseville.",
    proof: ["All-on-4 / All-on-6 focus", "Zygomatic implants for severe bone loss", "Russian-language follow-up"],
  },
  {
    slug: "seattle",
    city: "Seattle",
    region: "Seattle, Bellevue, Redmond, Everett",
    country: "United States",
    title: "Dr. Antipov — имплантация зубов для русскоязычных в Seattle",
    description:
      "Русскоязычный intake для Seattle-area пациентов, которые рассматривают dental implants, full arch restoration или second opinion у Dr. Antipov.",
    headline: "Dental implant consultation path for Russian-speaking Seattle patients",
    subtitle:
      "Начните с заявки на русском: город, treatment interest, фото/вопросы и удобный канал связи. Команда объяснит, как подготовиться к консультации.",
    proof: ["Seattle / Bellevue source market", "Second opinions for complex cases", "Phone, SMS, WhatsApp or Telegram preference"],
  },
  {
    slug: "new-york",
    city: "New York",
    region: "Brooklyn, Queens, Staten Island, Manhattan",
    country: "United States",
    title: "Dr. Antipov — All-on-4 implants для русскоязычных в New York",
    description:
      "Русскоязычный concierge intake для New York пациентов, которые ищут Dr. Antipov для All-on-4, All-on-6 или zygomatic implants.",
    headline: "Dental implant destination funnel for Russian-speaking New York patients",
    subtitle:
      "Для пациентов из Brooklyn, Queens и Staten Island, которые хотят получить понятный next step по имплантации у Dr. Antipov в California.",
    proof: ["Russian-speaking New York audience", "Free consultation request", "Clear treatment and travel-prep questions"],
  },
  {
    slug: "miami",
    city: "Miami",
    region: "Sunny Isles, Hallandale, Aventura, South Florida",
    country: "United States",
    title: "Dr. Antipov — dental implants для русскоязычных в Miami",
    description:
      "Русскоязычный intake для Miami и South Florida пациентов, которым нужны full arch implants, zygomatic implants или bone grafting consultation.",
    headline: "All-on-4 и zygomatic implants для русскоязычных пациентов Miami",
    subtitle:
      "Если вы сравниваете implant options, отправьте заявку на русском. Команда Dr. Antipov поможет понять, какой следующий шаг имеет смысл.",
    proof: ["South Florida Russian-speaking audience", "Full arch and severe bone loss cases", "Fast callback preference capture"],
  },
  {
    slug: "toronto",
    city: "Toronto",
    region: "GTA, North York, Richmond Hill, Vaughan, Mississauga",
    country: "Canada",
    title: "Dr. Antipov — dental implants для русскоязычных в Toronto",
    description:
      "Русскоязычный intake для Toronto/GTA пациентов, которые рассматривают dental implant treatment у Dr. Antipov in Roseville, California.",
    headline: "Russian-speaking dental implant concierge for Toronto patients",
    subtitle:
      "Для Toronto/GTA пациентов, которым нужен понятный русский intake, treatment discussion и следующий шаг перед консультацией в California.",
    proof: ["Toronto / GTA source market", "All-on-4 and All-on-6 interest capture", "Russian-language phone follow-up"],
  },
  {
    slug: "vancouver",
    city: "Vancouver",
    region: "Richmond, Burnaby, Coquitlam, North Vancouver",
    country: "Canada",
    title: "Dr. Antipov — dental implants для русскоязычных в Vancouver",
    description:
      "Русскоязычный intake для Vancouver-area пациентов, которые хотят обсудить All-on-4, bone grafting или zygomatic implants у Dr. Antipov.",
    headline: "Dental implant consultation path for Russian-speaking Vancouver patients",
    subtitle:
      "Оставьте заявку на русском, выберите treatment interest и удобный канал связи. Команда объяснит следующий шаг перед поездкой в Roseville.",
    proof: ["Vancouver / Richmond source market", "Complex implant options", "Phone, WhatsApp, Telegram, SMS or email preference"],
  },
];

export const treatmentOptions = [
  "All-on-4 / All-on-6 полная дуга",
  "Zygomatic implants / сильная потеря кости",
  "Один или несколько имплантов",
  "Bone grafting / sinus lift",
  "Second opinion / пока не знаю",
];

export const contactOptions = ["Звонок", "SMS", "WhatsApp", "Telegram", "Email"];
export const timingOptions = ["На этой неделе", "В этом месяце", "Пока изучаю варианты"];

export const processSteps = [
  {
    title: "Вы описываете ситуацию",
    body: "Один имплант, All-on-4, bone grafting, zygomatic implants или second opinion.",
  },
  {
    title: "Intake на русском",
    body: "Команда уточняет город, сроки, бюджетные вопросы и удобный канал связи.",
  },
  {
    title: "Бесплатная 3D CT консультация",
    body: "В офисе Roseville Dr. Antipov оценивает анатомию, варианты лечения и financing.",
  },
  {
    title: "Операция и follow-up",
    body: "Computer-guided implant surgery, временные зубы в день операции, когда возможно, и контроль заживления.",
  },
];

export function getRussianCityPage(slug: string) {
  return russianCityPages.find((page) => page.slug === slug);
}
