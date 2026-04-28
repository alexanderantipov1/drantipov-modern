export const siteUrl = "https://drantipov.com";
export const officePhone = "(916) 783-2110";
export const officePhoneHref = "tel:9167832110";
export const officeEmail = "info@drantipov.com";
export const officeAddress = "911 Reserve Dr, Suite 150, Roseville, CA 95678";

export interface RussianFAQ {
  question: string;
  answer: string;
}

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
  keywords?: string[];
}

export interface ImplantJourneyStep {
  phase: string;
  title: string;
  body: string;
}

export interface RussianArticleSection {
  heading: string;
  body: string;
}

export interface RussianArticlePage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  summary: string;
  keywords: string[];
  sections: RussianArticleSection[];
  faqs: RussianFAQ[];
}

export const russianHomePage: RussianCityPage = {
  slug: "",
  city: "Roseville",
  region: "Roseville, Sacramento, Bay Area, Reno, Los Angeles, Seattle, New York, Miami, Toronto, Vancouver",
  country: "United States",
  title: "Имплантация зубов у Dr. Antipov — Roseville, California",
  description:
    "All-on-4, All-on-6, zygomatic implants, bone grafting и бесплатная 3D CT консультация у Dr. Alexander Antipov в Roseville, California.",
  headline: "Имплантация зубов у Dr. Alexander Antipov",
  subtitle:
    "All-on-4, All-on-6, zygomatic implants, bone grafting и временные зубы в день операции там, где это возможно. Расскажите ваш город, задачу и удобный канал связи.",
  proof: [
    "Сертифицированный челюстно-лицевой хирург",
    "Бесплатная 3D CT консультация",
    "Офис в Roseville, приём пациентов из других штатов",
  ],
  keywords: [
    "имплантация зубов Roseville",
    "All-on-4 Sacramento",
    "челюстно-лицевой хирург California",
    "Dr Antipov implants",
  ],
};

export const russianCityPages: RussianCityPage[] = [
  {
    slug: "roseville",
    city: "Roseville",
    region: "Roseville, Granite Bay, Rocklin, Lincoln, Citrus Heights",
    country: "United States",
    title: "Dr. Antipov — имплантация зубов в Roseville",
    description:
      "Первичная заявка для пациентов Roseville: All-on-4, All-on-6, dental implants, bone grafting и бесплатная 3D CT консультация у Dr. Antipov.",
    headline: "Имплантация зубов для пациентов Roseville",
    subtitle:
      "Офис Dr. Antipov находится в Roseville. Начните с заявки: объясните ситуацию, сроки и удобный способ связи перед консультацией.",
    proof: ["Офис в Roseville", "Бесплатная 3D CT консультация", "Понятный путь от заявки до визита"],
    keywords: ["dental implants Roseville", "имплантация Roseville", "All-on-4 Roseville"],
  },
  {
    slug: "sacramento",
    city: "Sacramento",
    region: "Sacramento, Roseville, Folsom, Citrus Heights",
    country: "United States",
    title: "Dr. Antipov — имплантация зубов в Sacramento",
    description:
      "All-on-4, All-on-6, zygomatic implants и консультации по имплантации у Dr. Antipov рядом с Sacramento.",
    headline: "Имплантация зубов для пациентов Sacramento и Roseville",
    subtitle:
      "Офис Dr. Antipov находится в Roseville: бесплатная 3D CT консультация, временные зубы в день операции там, где это возможно, All-on-4, All-on-6 и сложные случаи с потерей кости.",
    proof: ["Офис в Roseville рядом с Sacramento", "Бесплатная 3D CT консультация", "Удобный канал связи на ваш выбор"],
  },
  {
    slug: "san-francisco",
    city: "San Francisco Bay Area",
    region: "San Francisco, San Jose, Palo Alto, Oakland, Walnut Creek",
    country: "United States",
    title: "Dr. Antipov — All-on-4 implants в Bay Area",
    description:
      "All-on-4, All-on-6 и zygomatic implants для пациентов Bay Area у Dr. Antipov в Roseville.",
    headline: "Имплантация зубов у Dr. Antipov для пациентов Bay Area",
    subtitle:
      "Если вы живёте в San Francisco, San Jose или Walnut Creek, оставьте заявку и подготовьте вопросы перед консультацией в Roseville.",
    proof: ["Пациенты из Bay Area", "Сложные implant-реконструкции", "Подготовка к консультации в Roseville"],
  },
  {
    slug: "los-angeles",
    city: "Los Angeles",
    region: "Los Angeles, West Hollywood, Glendale, Valley",
    country: "United States",
    title: "Dr. Antipov — dental implants в Los Angeles",
    description:
      "All-on-4, All-on-6, zygomatic implants и second opinion для пациентов Los Angeles.",
    headline: "All-on-4 и сложная имплантация для пациентов Los Angeles",
    subtitle:
      "Команда Dr. Antipov уточнит ваш случай, сроки и удобный канал связи и объяснит следующий шаг перед поездкой в Roseville.",
    proof: ["Фокус на All-on-4 / All-on-6", "Zygomatic implants при сильной потере кости", "Связь через удобный канал"],
  },
  {
    slug: "seattle",
    city: "Seattle",
    region: "Seattle, Bellevue, Redmond, Everett",
    country: "United States",
    title: "Dr. Antipov — имплантация зубов в Seattle",
    description:
      "All-on-4, full arch restoration и second opinion для пациентов Seattle у Dr. Antipov.",
    headline: "Имплантация зубов для пациентов Seattle и Bellevue",
    subtitle:
      "Оставьте заявку: город, услуга, фото и удобный канал связи. Команда объяснит, как подготовиться к консультации.",
    proof: ["Пациенты из Seattle / Bellevue", "Second opinion для сложных случаев", "Телефон, SMS, WhatsApp или Telegram"],
  },
  {
    slug: "new-york",
    city: "New York",
    region: "Brooklyn, Queens, Staten Island, Manhattan",
    country: "United States",
    title: "Dr. Antipov — All-on-4 implants для пациентов из New York",
    description:
      "All-on-4, All-on-6 и zygomatic implants — первичная заявка для пациентов New York у Dr. Antipov.",
    headline: "Имплантация зубов для пациентов из New York",
    subtitle:
      "Для пациентов из Brooklyn, Queens и Staten Island — понятная заявка и план перед поездкой в California.",
    proof: ["Brooklyn / Queens / Staten Island", "Бесплатная заявка на консультацию", "Понятный план перед поездкой"],
  },
  {
    slug: "miami",
    city: "Miami",
    region: "Sunny Isles, Hallandale, Aventura, South Florida",
    country: "United States",
    title: "Dr. Antipov — dental implants для пациентов Miami",
    description:
      "Full arch implants, zygomatic implants и bone grafting для пациентов Miami и South Florida.",
    headline: "All-on-4 и zygomatic implants для пациентов Miami",
    subtitle:
      "Если вы сравниваете implant options, оставьте заявку. Команда Dr. Antipov поможет понять, какой следующий шаг имеет смысл.",
    proof: ["Пациенты из South Florida", "Сложные случаи и full arch", "Быстрый ответ на удобном канале"],
  },
  {
    slug: "toronto",
    city: "Toronto",
    region: "GTA, North York, Richmond Hill, Vaughan, Mississauga",
    country: "Canada",
    title: "Dr. Antipov — dental implants для пациентов Toronto",
    description:
      "Implant treatment для пациентов Toronto / GTA у Dr. Antipov в Roseville, California.",
    headline: "Concierge-имплантация для пациентов Toronto и GTA",
    subtitle:
      "Для пациентов Toronto и GTA — понятная заявка, обсуждение лечения и следующий шаг перед консультацией в California.",
    proof: ["Пациенты из Toronto / GTA", "Интерес к All-on-4 и All-on-6", "Связь по телефону"],
  },
  {
    slug: "vancouver",
    city: "Vancouver",
    region: "Richmond, Burnaby, Coquitlam, North Vancouver",
    country: "Canada",
    title: "Dr. Antipov — dental implants для пациентов Vancouver",
    description:
      "All-on-4, bone grafting и zygomatic implants для пациентов Vancouver у Dr. Antipov.",
    headline: "Имплантация зубов для пациентов Vancouver",
    subtitle:
      "Оставьте заявку, выберите услугу и удобный канал связи. Команда объяснит следующий шаг перед поездкой в Roseville.",
    proof: ["Пациенты из Vancouver / Richmond", "Сложные implant-варианты", "Телефон, WhatsApp, Telegram, SMS или email"],
  },
  {
    slug: "rocklin",
    city: "Rocklin",
    region: "Rocklin, Roseville, Loomis, Lincoln",
    country: "United States",
    title: "Dr. Antipov — имплантация зубов в Rocklin",
    description:
      "Консультация по dental implants, All-on-4, bone grafting и full arch restoration для пациентов Rocklin рядом с Roseville.",
    headline: "Dental implants для пациентов Rocklin",
    subtitle:
      "Если вы живете в Rocklin или Loomis, можно начать с заявки и быстро понять, какие снимки и вопросы подготовить к консультации.",
    proof: ["Рядом с офисом Roseville", "Фокус на full-arch implants", "Бесплатная 3D CT консультация"],
    keywords: ["dental implants Rocklin", "All-on-4 Rocklin", "имплантация зубов Rocklin"],
  },
  {
    slug: "folsom",
    city: "Folsom",
    region: "Folsom, El Dorado Hills, Orangevale, Fair Oaks",
    country: "United States",
    title: "Dr. Antipov — All-on-4 implants в Folsom",
    description:
      "Первичная заявка для Folsom: All-on-4, All-on-6, zygomatic implants, bone grafting и second opinion у Dr. Antipov.",
    headline: "All-on-4 и имплантация зубов в Folsom",
    subtitle:
      "Для пациентов Folsom и El Dorado Hills: короткая заявка, понятный следующий шаг и консультация в Roseville с бесплатным 3D CT.",
    proof: ["Пациенты из Folsom / El Dorado Hills", "Планирование All-on-4 / All-on-6", "Second opinion для сложных случаев"],
    keywords: ["dental implants Folsom", "All-on-4 Folsom", "имплантация зубов Folsom"],
  },
  {
    slug: "granite-bay",
    city: "Granite Bay",
    region: "Granite Bay, Roseville, Loomis, Folsom Lake",
    country: "United States",
    title: "Dr. Antipov — full arch implants в Granite Bay",
    description:
      "Заявка для пациентов Granite Bay, которые рассматривают full arch dental implants, All-on-4 или complex implant reconstruction.",
    headline: "Full-arch implants для пациентов Granite Bay",
    subtitle:
      "Страница для пациентов Granite Bay, которым нужна понятная консультация по full-arch restoration, стоимости, срокам и подготовке.",
    proof: ["Локальная страница Granite Bay", "Сертифицированный челюстно-лицевой хирург", "Implants, grafting и full-arch reconstruction"],
    keywords: ["dental implants Granite Bay", "full arch implants Granite Bay", "All-on-4 Granite Bay"],
  },
  {
    slug: "auburn",
    city: "Auburn",
    region: "Auburn, Newcastle, Grass Valley, Nevada City",
    country: "United States",
    title: "Dr. Antipov — dental implants в Auburn",
    description:
      "Заявка для пациентов Auburn area: dental implants, full arch restoration, bone grafting и oral surgery consultation у Dr. Antipov.",
    headline: "Dental implants для пациентов Auburn и foothills",
    subtitle:
      "Начните удаленно: город, dental issue, снимки или вопросы. Команда объяснит, как подготовиться к консультации в Roseville.",
    proof: ["Пациенты из Auburn / foothills", "Фокус на implants и oral surgery", "Вопросы для подготовки к визиту"],
    keywords: ["dental implants Auburn CA", "oral surgeon Auburn CA", "имплантация Auburn"],
  },
  {
    slug: "el-dorado-hills",
    city: "El Dorado Hills",
    region: "El Dorado Hills, Folsom, Cameron Park, Placerville",
    country: "United States",
    title: "Dr. Antipov — dental implants в El Dorado Hills",
    description:
      "Заявка на implant consultation для пациентов El Dorado Hills: All-on-4, All-on-6, dental implant cost questions и 3D CT consultation.",
    headline: "Implant consultation для пациентов El Dorado Hills",
    subtitle:
      "Если вы сравниваете варианты имплантации, начните с заявки. Команда уточнит проблему, сроки и удобный формат связи.",
    proof: ["Пациенты из El Dorado Hills", "Вопросы о стоимости и плане лечения", "Консультация в Roseville"],
    keywords: ["dental implants El Dorado Hills", "All-on-4 El Dorado Hills", "импланты El Dorado Hills"],
  },
  {
    slug: "reno",
    city: "Reno",
    region: "Reno, Sparks, Carson City, Lake Tahoe",
    country: "United States",
    title: "Dr. Antipov — dental implants в Reno",
    description:
      "Заявка для пациентов Reno и Northern Nevada, которые рассматривают implants, All-on-4 или second opinion в Roseville, CA.",
    headline: "Dental implant planning для пациентов Reno",
    subtitle:
      "Для Reno, Sparks и Tahoe пациентов: короткая заявка, вопросы для подготовки к поездке и понятный следующий шаг перед консультацией в Roseville.",
    proof: ["Пациенты из Reno / Tahoe", "Подготовка к консультации в Roseville", "Фокус на All-on-4 и second opinion"],
    keywords: ["dental implants Reno", "All-on-4 Reno", "oral surgeon Reno"],
  },
];

export const treatmentOptions = [
  "All-on-4 / All-on-6 полная дуга",
  "Zygomatic implants / сильная потеря кости",
  "Один или несколько имплантов",
  "Bone grafting / sinus lift",
  "Second opinion / пока изучаю варианты",
];

export const contactOptions = ["Звонок", "SMS", "WhatsApp", "Telegram", "Email"];
export const timingOptions = ["На этой неделе", "В этом месяце", "Пока изучаю варианты"];

export const processSteps = [
  {
    title: "Вы описываете ситуацию",
    body: "Один имплант, All-on-4, bone grafting, zygomatic implants или second opinion.",
  },
  {
    title: "Первичная координация",
    body: "Координатор уточняет город, сроки, бюджетные вопросы и удобный канал связи.",
  },
  {
    title: "Бесплатная 3D CT консультация",
    body: "В офисе Roseville Dr. Antipov оценивает анатомию, варианты лечения и financing.",
  },
  {
    title: "Операция и сопровождение",
    body: "Computer-guided implant surgery, временные зубы в день операции там, где это возможно, и контроль заживления.",
  },
];


export const implantJourneySteps: ImplantJourneyStep[] = [
  {
    phase: "1",
    title: "Консультация и медицинская история",
    body: "Пациент обсуждает цели, здоровье, dental history, текущие проблемы и получает направление на 3D imaging, если это нужно для планирования.",
  },
  {
    phase: "2",
    title: "Cone Beam CT, осмотр и фотографии",
    body: "3D CT помогает оценить кость, анатомию пазух, расположение нервов и реалистичные варианты implant planning.",
  },
  {
    phase: "3",
    title: "План лечения и разбор случая",
    body: "Dr. Antipov объясняет surgical plan, варианты временных зубов, сроки, риски, вопросы финансирования и следующие шаги.",
  },
  {
    phase: "4",
    title: "Удаление зубов, alveoloplasty и импланты",
    body: "В full-arch cases удаляются проблемные зубы, корректируется bone ridge, и импланты устанавливаются по хирургическому плану.",
  },
  {
    phase: "5",
    title: "Временные фиксированные зубы, когда это возможно",
    body: "При All-on-4 / All-on-6 временные фиксированные зубы могут быть установлены в тот же день или после короткого периода заживления. Решение зависит от стабильности имплантов и анатомии.",
  },
  {
    phase: "6",
    title: "Заживление и контрольные визиты",
    body: "Период заживления обычно включает x-rays, проверку мягких тканей, контроль abutment torque и инструкции перед финальным протезированием.",
  },
  {
    phase: "7",
    title: "Постоянный протез с restorative dentist",
    body: "После заживления final impressions, verification jig, wax rim, примерка зубов и установка постоянного протеза формируют долгосрочный результат.",
  },
];

export const russianServiceFaqs: RussianFAQ[] = [
  {
    question: "Сколько стоят зубные импланты у Dr. Antipov?",
    answer:
      "Стоимость зависит от количества имплантов, состояния кости, необходимости bone grafting, типа протеза и сложности случая. Для full-arch treatment индивидуальный план обычно составляется после осмотра и 3D CT консультации.",
  },
  {
    question: "All-on-4 и All-on-6 — в чем разница?",
    answer:
      "All-on-4 использует четыре импланта на дугу, а All-on-6 — шесть. Выбор зависит от анатомии, качества кости, прикуса, бюджета и того, сколько поддержки нужно для будущего fixed bridge.",
  },
  {
    question: "Можно ли получить временные зубы в день операции?",
    answer:
      "Иногда да. Same-day temporary teeth возможны, когда стабильность имплантов, качество кости и bite planning позволяют immediate loading. Окончательное решение принимается после 3D CT и surgical planning.",
  },
  {
    question: "Что делать, если кости недостаточно?",
    answer:
      "Недостаток кости не всегда означает, что implants невозможны. Возможны bone grafting, sinus lift, ridge augmentation или zygomatic implants при тяжелой потере кости в верхней челюсти. Выбор зависит от анатомии.",
  },
  {
    question: "Импланты лучше съемных протезов?",
    answer:
      "Implant-supported teeth обычно дают лучшую стабильность, жевательную функцию и уверенность, чем съемные dentures. Правильный вариант зависит от здоровья, кости, бюджета, ожиданий и готовности к уходу.",
  },
  {
    question: "Покрывает ли страховка dental implants?",
    answer:
      "Insurance coverage сильно отличается от плана к плану. Некоторые страховки покрывают часть удаления, imaging, grafting, anesthesia или протезирования, но сами implants могут иметь ограничения. Офис может проверить детали плана во время первичной заявки.",
  },
  {
    question: "Сколько длится восстановление после full-arch implants?",
    answer:
      "Первичный отек и дискомфорт часто уменьшаются за несколько дней, но заживление и integration имплантов обычно занимают месяцы. Финальные этапы протезирования часто проходят после периода заживления, обычно примерно через 3-6 месяцев в зависимости от случая.",
  },
  {
    question: "Можно ли начать консультацию, если я живу в другом городе?",
    answer:
      "Да. Для пациентов из других городов первичная заявка начинается с города, интересующего лечения, фото или имеющихся снимков, сроков и удобного способа связи. Затем команда объясняет, что подготовить перед очной консультацией.",
  },
];

export const russianArticlePages: RussianArticlePage[] = [
  {
    slug: "stoimost-implantov",
    title: "Сколько стоят зубные импланты — гид Dr. Antipov",
    description:
      "Гид по стоимости dental implants: что влияет на цену, почему нужен 3D CT, чем отличаются single implant, All-on-4 и bone grafting cases.",
    h1: "Сколько стоят зубные импланты?",
    summary:
      "Короткий ответ: цена dental implants зависит от количества зубов, качества кости, необходимости grafting, типа временных и постоянных зубов, а также sedation и prosthetic plan. Точную стоимость можно дать только после осмотра и 3D CT.",
    keywords: ["стоимость имплантов", "dental implants cost", "имплантация зубов цена", "All-on-4 cost"],
    sections: [
      {
        heading: "Почему нельзя назвать одну цену для всех",
        body:
          "Один implant case может быть простым single-tooth replacement, а другой — full-arch reconstruction с удалением зубов, alveoloplasty, bone grafting, temporary bridge и final prosthesis. Эти случаи не должны стоить одинаково, потому что отличаются время операции, материалы, риски и лабораторная работа.",
      },
      {
        heading: "Что обычно влияет на стоимость",
        body:
          "Главные факторы: количество implants, верхняя или нижняя челюсть, потеря кости, sinus lift, необходимость zygomatic implants, IV sedation, временные зубы, материал постоянного протеза, например acrylic, porcelain или zirconia, и необходимость дополнительной oral surgery.",
      },
      {
        heading: "Как получить понятный план",
        body:
          "Начните с короткой заявки: опишите проблему и приложите имеющиеся x-rays или записи, если они есть. Самый полезный следующий шаг — клиническая консультация с 3D CT, чтобы план был основан на анатомии, а не на догадках.",
      },
    ],
    faqs: [
      russianServiceFaqs[0]!,
      russianServiceFaqs[5]!,
      {
        question: "Можно ли сравнить цену с ClearChoice или другими центрами?",
        answer:
          "Да, но сравнивайте одинаковые вещи: количество дуг, implants, material, sedation, grafting, temporary teeth, final prosthesis, warranty/maintenance и кто выполняет операцию.",
      },
    ],
  },
  {
    slug: "all-on-4-stoimost",
    title: "All-on-4 стоимость и этапы лечения — Dr. Antipov",
    description:
      "Объяснение All-on-4 и All-on-6: этапы лечения, временные зубы, период заживления, final prosthesis и факторы стоимости.",
    h1: "All-on-4: стоимость, этапы и временные зубы",
    summary:
      "All-on-4 — это full-arch treatment, где фиксированные зубы держатся на имплантах. Стоимость зависит от количества дуг, состояния кости, temporary teeth, материала final prosthesis и необходимости grafting или advanced implants.",
    keywords: ["All-on-4 стоимость", "All-on-4 Sacramento", "full arch implants cost", "зубы за один день"],
    sections: [
      {
        heading: "Что входит в All-on-4 planning",
        body:
          "Full-arch plan обычно включает health review, 3D CT, bite evaluation, разбор лечения, удаление зубов при необходимости, установку имплантов и temporary fixed bridge, если это клинически подходит.",
      },
      {
        heading: "Почему final teeth не всегда ставятся сразу",
        body:
          "Temporary teeth используются во время заживления, чтобы implants могли integrate. Final prosthesis обычно изготавливается после периода заживления с impressions, verification steps и teeth try-in для лучшей посадки, прикуса и внешнего вида.",
      },
      {
        heading: "All-on-4 vs All-on-6",
        body:
          "All-on-6 может дать дополнительную поддержку, когда анатомия и план лечения это оправдывают. All-on-4 может быть отличным вариантом в правильном случае. Лучший выбор определяется 3D planning, а не рекламным названием.",
      },
    ],
    faqs: [russianServiceFaqs[1]!, russianServiceFaqs[2]!, russianServiceFaqs[6]!],
  },
  {
    slug: "implanty-ili-protezy",
    title: "Импланты или съемные протезы — что выбрать",
    description:
      "Сравнение dental implants, implant-supported dentures и removable dentures: комфорт, стабильность, цена и долгосрочный уход.",
    h1: "Импланты или съемные протезы?",
    summary:
      "Implants обычно дают лучшую стабильность и уверенность при жевании, чем removable dentures, но dentures могут подходить при определенном бюджете или состоянии здоровья. Правильный выбор зависит от анатомии, целей и ухода.",
    keywords: ["импланты или протезы", "dental implants vs dentures", "snap-on dentures", "implant supported dentures"],
    sections: [
      {
        heading: "Главная разница",
        body:
          "Removable dentures лежат на деснах. Implant-supported teeth крепятся к имплантам, что может уменьшить подвижность и улучшить жевание. Fixed full-arch bridges пациент не снимает ежедневно.",
      },
      {
        heading: "Когда dentures все еще имеют смысл",
        body:
          "Dentures могут быть практичным первым шагом, если бюджет, медицинские риски или сроки пока не позволяют implant treatment. Некоторые пациенты позже переходят на snap-on dentures или fixed full-arch implants.",
      },
      {
        heading: "Что спросить на консультации",
        body:
          "Спросите про объем кости, количество implants, съемный или фиксированный вариант, уход, стоимость ремонта и что происходит, если один implant или компонент протеза требует замены.",
      },
    ],
    faqs: [
      russianServiceFaqs[4]!,
      {
        question: "Что такое snap-on dentures?",
        answer:
          "Snap-on dentures — это съемные dentures, которые удерживаются имплантами. Они могут быть стабильнее традиционных протезов, но отличаются от фиксированных мостов в стиле All-on-4.",
      },
      {
        question: "Можно ли перейти от dentures к implants позже?",
        answer:
          "Часто да, но кость меняется со временем. 3D CT scan помогает понять, нужны ли grafting, sinus lift или другая подготовка перед implants.",
      },
    ],
  },
  {
    slug: "all-on-4-ili-all-on-6",
    title: "All-on-4 или All-on-6 — разница для full-arch implants",
    description:
      "Прямое сравнение All-on-4 и All-on-6: число имплантов, поддержка, bone quality, cost и treatment planning.",
    h1: "All-on-4 или All-on-6: что лучше?",
    summary:
      "Ни All-on-4, ни All-on-6 не является автоматически лучшим вариантом для всех. Выбор зависит от bone quality, bite forces, anatomy, prosthetic design, бюджета и долгосрочного ухода.",
    keywords: ["All-on-4 vs All-on-6", "All-on-6 implants", "full arch implants", "сколько имплантов нужно"],
    sections: [
      {
        heading: "Почему четыре импланта могут работать",
        body:
          "В правильно выбранных случаях четыре strategically positioned implants могут поддерживать full arch. Distal implants могут ставиться под углом, чтобы улучшить anterior-posterior spread и обойти важные anatomical structures.",
      },
      {
        heading: "Почему могут выбрать шесть имплантов",
        body:
          "Шесть implants могут добавить поддержку и распределение нагрузки, но только если анатомия позволяет и prosthetic planning от этого выигрывает. Больше implants не всегда лучше, если есть ограничения по кости, hygiene или positioning.",
      },
      {
        heading: "Как Dr. Antipov принимает решение",
        body:
          "Решение основано на medical history, clinical exam, CBCT imaging, photographs, bite evaluation и желаемом final prosthetic design.",
      },
    ],
    faqs: [russianServiceFaqs[1]!, russianServiceFaqs[3]!, russianServiceFaqs[2]!],
  },
  {
    slug: "strahovka-i-finansirovanie",
    title: "Покрывает ли страховка dental implants — гид Dr. Antipov",
    description:
      "Что спросить у страховки перед dental implants, All-on-4, bone grafting или oral surgery consultation у Dr. Antipov.",
    h1: "Покрывает ли страховка dental implants?",
    summary:
      "Insurance может покрывать часть лечения, но dental implant coverage зависит от конкретного плана. Extraction, imaging, anesthesia, bone grafting и prosthetic steps могут покрываться иначе, чем сами implants.",
    keywords: ["insurance dental implants", "страховка импланты", "dental implant financing", "All-on-4 financing"],
    sections: [
      {
        heading: "Почему coverage отличается",
        body:
          "Medical and dental plans часто разделяют surgical, imaging и prosthetic benefits. В некоторых планах есть периоды ожидания, missing-tooth clauses, annual maximums или исключения для implant fixtures.",
      },
      {
        heading: "Какие вопросы задать",
        body:
          "Спросите, покрывает ли ваш план extractions, CBCT, IV sedation, bone grafting, sinus lift, implant placement, abutments и final prosthesis. Также уточните annual maximum и pre-authorization.",
      },
      {
        heading: "Вопросы о financing",
        body:
          "Если financing важен, попросите written treatment plan и варианты по этапам. Сравнение только monthly payment может скрыть разницу в материалах, количестве implants и final prosthesis.",
      },
    ],
    faqs: [
      russianServiceFaqs[5]!,
      russianServiceFaqs[0]!,
      {
        question: "Можно ли получить estimate до консультации?",
        answer:
          "Ориентировочный диапазон можно обсудить заранее, но надежный estimate требует осмотра и 3D CT, потому что bone loss, grafting и тип final restoration меняют план.",
      },
    ],
  },
  {
    slug: "vosstanovlenie-posle-implantov",
    title: "Восстановление после dental implants и All-on-4",
    description:
      "Обзор восстановления после dental implants: первые дни, мягкая еда, healing, temporary teeth и final prosthesis timeline.",
    h1: "Восстановление после dental implants",
    summary:
      "Большинство пациентов планируют несколько дней отека или дискомфорта, период мягкой еды и месяцы implant healing перед финальным протезированием. Точное восстановление зависит от объема операции, здоровья и grafting.",
    keywords: ["dental implant recovery", "All-on-4 recovery", "восстановление после имплантации", "temporary teeth"],
    sections: [
      {
        heading: "Первые дни",
        body:
          "Следуйте post-op instructions: medications, ice, ограничения по гигиене, soft foods и activity restrictions. Если используется sedation, нужен надежный сопровождающий.",
      },
      {
        heading: "Temporary teeth и заживление",
        body:
          "Temporary fixed teeth могут быть установлены, когда это подходит клинически, но они остаются частью healing phase. Прикус и питание контролируются, чтобы защитить implants во время integration.",
      },
      {
        heading: "Final prosthesis",
        body:
          "После заживления final restorative steps могут включать impressions, verification jig, wax rim, teeth try-in и final delivery. Эти шаги улучшают посадку, прикус и эстетику.",
      },
    ],
    faqs: [
      russianServiceFaqs[6]!,
      russianServiceFaqs[2]!,
      {
        question: "Когда можно вернуться к работе?",
        answer:
          "После небольших процедур многие пациенты возвращаются к работе через несколько дней, но full-arch surgery или grafting могут требовать больше времени. Dr. Antipov дает инструкции под конкретный случай.",
      },
    ],
  },
  {
    slug: "nedostatochno-kosti",
    title: "Если кости недостаточно для implants — что делать",
    description:
      "Гид по потере кости перед dental implants: bone grafting, sinus lift, ridge augmentation и zygomatic implants у Dr. Antipov.",
    h1: "Если кости недостаточно для implants",
    summary:
      "Bone loss не всегда исключает implants. В зависимости от анатомии возможны bone grafting, sinus lift, ridge augmentation, angled implants или zygomatic implants при тяжелой потере кости верхней челюсти.",
    keywords: ["bone grafting implants", "zygomatic implants", "sinus lift", "недостаточно кости импланты"],
    sections: [
      {
        heading: "Почему кость исчезает",
        body:
          "Кость может уменьшаться после потери зубов, инфекции, periodontal disease, травмы или длительного ношения dentures. Важно, где именно проблема: upper jaw, lower jaw, sinus area и nerve location оцениваются по-разному.",
      },
      {
        heading: "Почему 3D CT критически важен",
        body:
          "Panoramic x-ray может не показать достаточно деталей. CBCT imaging помогает оценить ширину и высоту кости, sinus anatomy и nerve location перед рекомендацией grafting или advanced implant options.",
      },
      {
        heading: "Сложные варианты лечения",
        body:
          "Некоторым пациентам нужен staged grafting. В других случаях возможны angled implants или zygomatic implants, чтобы обойти зоны с недостатком кости. План должен быть индивидуальным после осмотра и imaging.",
      },
    ],
    faqs: [
      russianServiceFaqs[3]!,
      {
        question: "Что такое zygomatic implants?",
        answer:
          "Zygomatic implants — это более длинные импланты, которые фиксируются в области скуловой кости при некоторых тяжелых случаях потери кости верхней челюсти. Они требуют advanced surgical planning и подходят не каждому пациенту.",
      },
      {
        question: "Bone grafting всегда нужен?",
        answer:
          "Нет. У некоторых пациентов достаточно кости или возможен angled implant planning. Другим сначала нужен grafting. CBCT imaging помогает понять, какой путь реалистичен.",
      },
    ],
  },
];

function faqMainEntity(faqs: RussianFAQ[]) {
  return faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  }));
}

function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getRussianArticlePage(slug: string) {
  return russianArticlePages.find((page) => page.slug === slug);
}

export function getRussianFunnelStructuredData(page: RussianCityPage, path: string) {
  const url = `${siteUrl}${path}`;
  const pageName = page.slug ? `${page.city} dental implant consultation` : "Dental implant consultation";

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "ru-RU",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Dr. Alexander Antipov",
        url: siteUrl,
      },
      about: [
        { "@type": "MedicalProcedure", name: "Dental implants" },
        { "@type": "MedicalProcedure", name: "All-on-4 dental implants" },
        { "@type": "MedicalProcedure", name: "All-on-6 dental implants" },
        { "@type": "MedicalProcedure", name: "Zygomatic dental implants" },
        { "@type": "MedicalProcedure", name: "Dental bone grafting" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "Dentist", "LocalBusiness"],
      "@id": `${siteUrl}/ru#implant-consultation`,
      name: "Dr. Alexander Antipov dental implant consultation",
      alternateName: ["Dr. Antipov Dental Implants", pageName],
      url,
      telephone: "+1-916-783-2110",
      email: officeEmail,
      priceRange: "$$$",
      medicalSpecialty: ["Oral Surgery", "Maxillofacial Surgery", "Implant Dentistry"],
      description:
        "Dental implant consultations for All-on-4, All-on-6, zygomatic implants and bone grafting with Dr. Alexander Antipov in Roseville, California.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "911 Reserve Dr, Suite 150",
        addressLocality: "Roseville",
        addressRegion: "CA",
        postalCode: "95678",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: page.city },
        { "@type": "AdministrativeArea", name: page.region },
        { "@type": "Country", name: page.country },
      ],
      availableLanguage: ["ru-RU", "en-US"],
      image: `${siteUrl}/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg`,
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: "Immediate implants and full-arch fixed teeth",
      alternateName: ["All-on-4", "All-on-6", "Teeth in a Day"],
      bodyLocation: "Jaw",
      procedureType: "Surgical",
      howPerformed:
        "Treatment may include consultation, 3D CBCT scan, clinical exam, extractions, alveoloplasty, dental implant placement, multi-unit abutments, temporary fixed bridge and final prosthetic restoration after healing.",
      preparation:
        "Medical and dental history, Cone Beam CT imaging, photographs, implant planning, pre-operative instructions and restorative coordination.",
      followup:
        "Post-operative checks, x-rays, healing review, abutment verification and final prosthetic phase after implant integration.",
      provider: {
        "@type": "Physician",
        name: "Dr. Alexander Antipov",
        medicalSpecialty: "Oral and Maxillofacial Surgery",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqMainEntity(russianServiceFaqs),
    },
    breadcrumbSchema([
      { name: "Dr. Antipov", url: siteUrl },
      { name: "Консультация по имплантам", url: `${siteUrl}/ru` },
      ...(page.slug ? [{ name: page.city, url }] : []),
    ]),
  ];
}

export function getRussianArticleStructuredData(article: RussianArticlePage) {
  const url = `${siteUrl}/ru/questions/${article.slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: article.h1,
      name: article.title,
      description: article.description,
      inLanguage: "ru-RU",
      author: {
        "@type": "Person",
        name: "Dr. Alexander Antipov",
        jobTitle: "Oral and Maxillofacial Surgeon",
      },
      publisher: {
        "@type": "MedicalBusiness",
        name: "Dr. Alexander Antipov",
        url: siteUrl,
      },
      mainEntityOfPage: url,
      about: article.keywords.map((keyword) => ({
        "@type": "Thing",
        name: keyword,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqMainEntity(article.faqs),
    },
    breadcrumbSchema([
      { name: "Dr. Antipov", url: siteUrl },
      { name: "Консультация по имплантам", url: `${siteUrl}/ru` },
      { name: "Вопросы об имплантах", url: `${siteUrl}/ru/questions` },
      { name: article.h1, url },
    ]),
  ];
}

export function getRussianCityPage(slug: string) {
  return russianCityPages.find((page) => page.slug === slug);
}
