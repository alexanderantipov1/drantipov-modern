/**
 * Русский реестр статей-инсайтов (RU).
 *
 * Единый источник данных для русскоязычного хаба
 * (/ru/for-patients/insights) и блока <RelatedArticles /> на RU-страницах.
 * Зеркалит структуру insights.ts, но title/excerpt/category/date/readTime/author
 * переведены на русский. Порядок проекций совпадает с insights.ts.
 */
import type { InsightPost } from "./insights"
import { ruRevisionArticles } from "./ruRevisionArticles"
import { ruGuideArticles } from "./ruGuideArticles"

const baseInsightPostsRu: InsightPost[] = [
  {
    slug: "how-to-fix-an-overbite-treatment-options-and-cost",
    title: "Как исправить глубокий прикус: варианты лечения, операция и стоимость",
    excerpt:
      "Как исправить глубокий прикус? Все варианты - прозрачные элайнеры, брекеты и ортогнатическая хирургия - для взрослых и детей, с реальными сроками и стоимостью.",
    date: "22 июня 2026",
    image: "/images/blog/2026-06-22/how-to-fix-an-overbite.png",
    category: "Ортогнатическая хирургия",
    readTime: "11 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "can-you-fix-an-overbite-naturally",
    title: "Можно ли исправить глубокий прикус естественным путём? Что работает на самом деле",
    excerpt:
      "Можно ли исправить глубокий прикус естественным путём? Что действительно работает, каких мифов избегать и почему сформировавшийся прикус - особенно у взрослых - исправляют элайнерами, брекетами или операцией.",
    date: "22 июня 2026",
    image: "/images/blog/2026-06-22/fix-overbite-naturally.png",
    category: "Ортогнатическая хирургия",
    readTime: "8 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "dental-implant-procedure-complete-guide",
    title: "Имплантация зуба: пошаговое руководство",
    excerpt:
      "Всё, что происходит во время имплантации зуба - от консультации и 3D-снимка до остеоинтеграции, абатмента и финальной коронки - с реальными сроками, ожиданиями по боли и диапазонами стоимости.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/dental-implant-procedure.png",
    category: "Имплантация зубов",
    readTime: "10 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "bone-grafting-for-dental-implants-explained",
    title: "Костная пластика для имплантов простыми словами",
    excerpt:
      "Кому нужна костная пластика, виды трансплантатов (аутотрансплантат, аллотрансплантат, ксенотрансплантат, синтетический), сроки заживления, риски и как пластика восстанавливает опору для долговечного импланта.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/bone-grafting.png",
    category: "Имплантация зубов",
    readTime: "6 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "understanding-sinus-lift-for-dental-implants",
    title: "Синус-лифтинг для дентальных имплантов: что это и зачем",
    excerpt:
      "Что такое синус-лифтинг, когда он нужен при имплантации на верхней челюсти, как проводится процедура, чего ожидать при восстановлении и как он делает импланты возможными при недостатке высоты кости.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/sinus-lift.png",
    category: "Имплантация зубов",
    readTime: "6 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "zygomatic-implants-vs-bone-grafting-for-severe-bone-loss",
    title: "Скуловые импланты или костная пластика",
    excerpt:
      "При выраженной убыли кости верхней челюсти сравниваем скуловые импланты и поэтапную костную пластику по срокам, восстановлению, стоимости и показаниям - чтобы вы поняли, какой путь подходит вашей анатомии.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/zygomatic-vs-grafting.png",
    category: "Имплантация зубов",
    readTime: "7 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "zygomatic-dental-implants-when-traditional-implants-not-possible",
    title: "Скуловые импланты: когда обычные импланты невозможны",
    excerpt:
      "Когда кости верхней челюсти слишком мало для обычных имплантов, скуловые импланты крепятся в скуловой кости. Когда нужна эта продвинутая методика и чего ожидать.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/zygomatic-when-impossible.png",
    category: "Имплантация зубов",
    readTime: "6 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "dental-implants-after-tooth-extraction-timing-healing-and-options",
    title: "Импланты после удаления зуба",
    excerpt:
      "Немедленная, ранняя или отсроченная установка после удаления - как сроки влияют на сохранение кости, какие этапы заживления проходят и когда импланты в день удаления помогают предотвратить убыль кости.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/implants-after-extraction.png",
    category: "Имплантация зубов",
    readTime: "8 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "guided-dental-implant-surgery-how-3d-planning-improves-accuracy",
    title: "Имплантация по шаблону: 3D-планирование",
    excerpt:
      "Как 3D-снимки КЛКТ и индивидуальные хирургические шаблоны превращают цифровое планирование в точную и предсказуемую установку имплантов - и что эта точность значит для безопасности и результата.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/guided-implant-surgery.png",
    category: "Имплантация зубов",
    readTime: "9 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "sedation-options-dental-implant-surgery",
    title: "Варианты седации при установке дентальных имплантов",
    excerpt:
      "Сравнение местной анестезии, седации в таблетках, внутривенной седации и общего наркоза - как каждый из них ощущается, для чего подходит и как выбрать комфортный для вас уровень.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/sedation-options.png",
    category: "Челюстно-лицевая хирургия",
    readTime: "5 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "what-is-an-oral-surgeon-and-what-do-they-do",
    title: "Кто такой челюстно-лицевой хирург и что он делает?",
    excerpt:
      "Челюстно-лицевой хирург - стоматолог-специалист с годами дополнительной хирургической подготовки. Что он лечит, как обучается и когда к нему стоит обратиться вместо обычного стоматолога.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/what-is-oral-surgeon.png",
    category: "Челюстно-лицевая хирургия",
    readTime: "9 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "severe-overbite-when-jaw-surgery-is-needed",
    title: "Сильный глубокий прикус: когда нужна хирургия челюсти",
    excerpt:
      "Большинство глубоких прикусов исправляют брекетами или элайнерами, но при тяжёлом скелетном прикусе нужна ортогнатическая (челюстная) хирургия. Как понять, что подходит вам, и что включает хирургический путь.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/severe-overbite-jaw-surgery.png",
    category: "Ортогнатическая хирургия",
    readTime: "9 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "full-mouth-dental-implants-cost-process",
    title: "Импланты на всю челюсть в Roseville и Сакраменто: стоимость и процесс",
    excerpt:
      "Полное руководство по имплантам на всю челюсть в регионе Сакраменто - All-on-4, пошаговый процесс, честные диапазоны стоимости, показания и что отличает долговечный результат от неудачи.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/full-mouth-dental-implants.png",
    category: "Имплантация зубов",
    readTime: "9 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "all-on-4-vs-all-on-6",
    title: "All-on-4 или All-on-6: что лучше?",
    excerpt:
      "Сравниваем количество имплантов, требования к плотности кости, стоимость, сроки восстановления и стабильность - чтобы вы поняли, какой подход для полной дуги действительно подходит вашей анатомии и целям.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/all-on-4-vs-all-on-6.png",
    category: "Имплантация зубов",
    readTime: "7 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "all-on-x-dental-implants-cost",
    title: "Стоимость имплантов All-on-X: 4, 6 или 8 имплантов?",
    excerpt:
      "Что на самом деле означает All-on-X, как меняется стоимость при 4, 6 и 8 имплантах на челюсть, что должно входить в честную смету и как решить, что нужно именно в вашем случае.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/all-on-x-cost.png",
    category: "Имплантация зубов",
    readTime: "8 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "zirconia-arches",
    title: "Что такое циркониевые зубные дуги? Плюсы, цена и срок службы",
    excerpt:
      "Циркониевые дуги - золотой стандарт для имплантов на всю челюсть. Как их изготавливают, почему они служат 15–20+ лет, сколько стоят и чем отличаются от акриловых и металлокерамических.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/zirconia-arches.png",
    category: "Имплантация зубов",
    readTime: "8 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "hybrid-dentures-vs-fixed-implant-bridges",
    title: "Гибридные протезы или несъёмные мосты на имплантах",
    excerpt:
      "Выбираете реставрацию на всю челюсть? Сравниваем гибридные протезы на имплантах и несъёмные мосты на имплантах по ощущениям, стоимости, уходу и долговечности, чтобы найти подходящий вариант.",
    date: "19 июня 2026",
    image: "/images/blog/2026-06-19/hybrid-vs-fixed.png",
    category: "Имплантация зубов",
    readTime: "7 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "zygomatic-implants",
    title: "Скуловые импланты - когда они нужны",
    excerpt:
      "Если вам сказали, что обычные импланты невозможны из-за недостатка кости в верхней челюсти, скуловые импланты могут стать решением. Узнайте, как проходит процедура, кому она подходит, какие сроки и как стоимость соотносится с поэтапной костной пластикой.",
    date: "28 апреля 2026",
    image: "/images/blog/2026-04-28/zygomatic-implants.jpg",
    category: "Имплантация зубов",
    readTime: "9 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "same-day-implants",
    title: "Импланты за один день - миф или реальность?",
    excerpt:
      "«Импланты за один день» и «зубы за день» - рекламные фразы, которые видит каждый пациент. Вот что вы действительно получаете в день операции, почему финальный протез ставят через 4–6 месяцев, кому подходит немедленная нагрузка и что честный хирург расскажет о рисках.",
    date: "28 апреля 2026",
    image: "/images/blog/2026-04-28/same-day-implants.jpg",
    category: "Имплантация зубов",
    readTime: "8 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "implants-vs-dentures",
    title: "Импланты или съёмные протезы - инновации 2026",
    excerpt:
      "Дентальные импланты прошли долгий путь с момента появления в 1960-х. Знакомимся с новейшими разработками в технологиях имплантации: 3D-печать, нанотехнологии, «умные» импланты и многое другое.",
    date: "13 августа 2024",
    image: "/images/blog/2024-08-13/implants-vs-dentures-78639392.jpg",
    category: "Имплантация зубов",
    readTime: "8 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "tooth-lost-emotional-toll",
    title: "Скрытая эмоциональная цена потери зуба",
    excerpt:
      "Потеря зуба - это больше, чем физическое изменение. Узнайте, как потеря зуба влияет на самооценку, общение и психическое здоровье, и о стратегиях преодоления и вариантах лечения.",
    date: "9 августа 2024",
    image: "/images/blog/2024-08-09/tooth-lost-emotional-toll-fcc97e30.jpg",
    category: "Уход за пациентом",
    readTime: "7 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "poor-oral-health-systemic-diseases",
    title: "Здоровье полости рта и системные болезни - связь",
    excerpt:
      "Здоровье полости рта часто упускают из виду в общем благополучии. Узнайте о связи между бактериями полости рта и системными заболеваниями, включая рак, сердечно-сосудистые болезни и диабет.",
    date: "8 августа 2024",
    image: "/images/blog/2024-08-08/poor-oral-health-733c21c2.jpg",
    category: "Здоровье полости рта",
    readTime: "9 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "dental-implant-complications",
    title: "Осложнения дентальных имплантов - риски и решения",
    excerpt:
      "Хотя дентальные импланты в целом безопасны, важно понимать возможные осложнения. Узнайте об инфекции, несостоятельности импланта, повреждении нерва и о том, как предотвратить эти проблемы.",
    date: "14 апреля 2023",
    image: "/images/blog/2023-04-14/dental-implant-complications-48eec3cd.jpg",
    category: "Имплантация зубов",
    readTime: "10 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
  {
    slug: "dental-implant-aftercare",
    title: "Уход после имплантации - советы по восстановлению",
    excerpt:
      "Правильный уход важен для успешного заживления имплантов. Узнайте экспертные советы по послеоперационному уходу, гигиене полости рта, рекомендациям по питанию и о том, чего ожидать во время восстановления.",
    date: "13 апреля 2023",
    image: "/images/blog/2023-04-13/dental-implant-aftercare-3ae5a0d1.jpg",
    category: "Уход за пациентом",
    readTime: "8 мин чтения",
    author: "Dr. Alexander V. Antipov",
  },
]

/**
 * Кластер «Ревизия имплантов и сложные случаи» (ruRevisionArticles.ts),
 * спроецированный в InsightPost для хаба и кросс-линкера.
 */
const revisionInsightPostsRu: InsightPost[] = ruRevisionArticles.map((a) => ({
  slug: a.slug,
  title: a.title,
  excerpt: a.excerpt,
  date: a.date,
  image: a.image,
  category: a.category,
  readTime: a.readTime,
  author: a.author,
}))

/**
 * Кластер показаний / материалов / стоимости / восстановления
 * (ruGuideArticles.ts), спроецированный в InsightPost.
 */
const guideInsightPostsRu: InsightPost[] = ruGuideArticles.map((a) => ({
  slug: a.slug,
  title: a.title,
  excerpt: a.excerpt,
  date: a.date,
  image: a.image,
  category: a.category,
  readTime: a.readTime,
  author: a.author,
}))

export const ruInsightPosts: InsightPost[] = [
  ...guideInsightPostsRu,
  ...revisionInsightPostsRu,
  ...baseInsightPostsRu,
]

/**
 * Возвращает до `count` соседних статей для кросс-линковки, выбранных
 * циклически после текущего слага (та же логика, что и getRelatedInsights).
 */
export function getRelatedInsightsRu(currentSlug: string, count = 3): InsightPost[] {
  const index = ruInsightPosts.findIndex((p) => p.slug === currentSlug)
  if (index === -1) return ruInsightPosts.slice(0, count)
  const related: InsightPost[] = []
  for (let i = 1; i <= count; i++) {
    related.push(ruInsightPosts[(index + i) % ruInsightPosts.length]!)
  }
  return related
}
