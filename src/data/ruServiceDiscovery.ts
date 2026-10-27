// Russian-only detail pages. Broader English services are not translations.
export const ruServiceDiscovery = [
  { id: "all-on-4", shortTitle: "All-on-4: четыре импланта", description: "Когда полный зубной ряд можно восстановить с опорой на четыре импланта и как выбирают план лечения.", icon: "teeth", href: "/ru/expertise/all-on-4", group: "full-arch" },
  { id: "all-on-5", shortTitle: "Полный ряд на пяти имплантах", description: "Индивидуальный вариант опоры для несъёмного протеза: показания, ограничения и этапы.", icon: "teeth", href: "/ru/expertise/all-on-5", group: "full-arch" },
  { id: "all-on-6", shortTitle: "All-on-6: шесть имплантов", description: "Планирование протеза на шести опорах с учётом объёма кости и жевательной нагрузки.", icon: "teeth", href: "/ru/expertise/all-on-6", group: "full-arch" },
  { id: "multiple-teeth-implants", shortTitle: "Имплантация нескольких зубов", description: "Отдельные коронки или мост на имплантах при отсутствии нескольких зубов.", icon: "tooth", href: "/ru/expertise/multiple-teeth-implants", group: "multiple" },
  { id: "pterygoid-implants", shortTitle: "Птеригоидные импланты", description: "Вариант опоры в заднем отделе верхней челюсти: анатомические условия, альтернативы и риски.", icon: "teeth", href: "/ru/expertise/pterygoid-implants", group: "bone-loss" },
  { id: "botox", shortTitle: "Ботулинотерапия лица", description: "Как действует ботулинический токсин, кому подходит процедура и какие ограничения важно обсудить.", icon: "sparkles", href: "/ru/expertise/botox", group: "cosmetic" },
  { id: "lip-augmentation", shortTitle: "Увеличение и коррекция губ", description: "Филлеры для губ: выбор подхода, временный эффект, ограничения и возможные осложнения.", icon: "sparkles", href: "/ru/expertise/lip-augmentation", group: "cosmetic" },
  { id: "dermal-fillers", shortTitle: "Контурная пластика филлерами", description: "Коррекция объёма мягких тканей: показания, ограничения и риски инъекционных филлеров.", icon: "sparkles", href: "/ru/expertise/dermal-fillers", group: "cosmetic" },
  { id: "all-on-4-revision", shortTitle: "Ревизия протеза All-on-4", description: "Оценка боли, подвижности и повреждений полного протеза на четырёх имплантах перед выбором коррекции.", icon: "teeth", href: "/ru/expertise/all-on-4-revision", group: "implant-care" },
  { id: "peri-implantitis", shortTitle: "Воспаление вокруг импланта", description: "Периимплантит: симптомы, диагностика убыли кости и обсуждение возможностей сохранения импланта.", icon: "tooth", href: "/ru/expertise/peri-implantitis", group: "implant-care" },
  { id: "implant-consultation", shortTitle: "Консультация по имплантации", description: "Какие документы подготовить и что обсудить с врачом при выборе или пересмотре плана имплантации.", icon: "tooth", href: "/ru/expertise/implant-consultation", group: "planning" },
  { id: "sinus-lift", shortTitle: "Синус-лифтинг верхней челюсти", description: "Подготовка к имплантации у верхнечелюстной пазухи: варианты операции, ограничения и восстановление.", icon: "teeth", href: "/ru/expertise/sinus-lift", group: "bone-loss" },
] as const;

export type RuServiceDiscoveryGroup = typeof ruServiceDiscovery[number]["group"];
