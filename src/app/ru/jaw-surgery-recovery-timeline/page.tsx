import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import { getBreadcrumbSchema, getFAQSchema, structuredDataScript } from "@/lib/structured-data";
import DualCTA from "@/components/DualCTA";

export const metadata: Metadata = {
  title: "Восстановление после челюстной операции — неделя за неделей | Доктор Антипов",
  description:
    "Подробное руководство по восстановлению после ортогнатической операции — неделя за неделей. Что ждать с первых 24 часов до полной консолидации кости за 12 месяцев.",
  alternates: { canonical: "/ru/jaw-surgery-recovery-timeline", languages: { ru: "/ru/jaw-surgery-recovery-timeline", en: "/jaw-surgery-recovery-timeline" } },
  openGraph: {
    locale: "ru_RU",
    title: "Восстановление после челюстной операции — по неделям",
    description: "Подробная шкала восстановления после ортогнатической операции.",
    url: `${siteConfig.url}/ru/jaw-surgery-recovery-timeline`,
    type: "article",
    images: [{ url: "/images/corrective-jaw-surgery/corrective-jaw-surgery-97156448.jpg", width: 1920, height: 1080, alt: "Восстановление после челюстной операции" }],
  },
};

const faqs = [
  { question: "Когда можно вернуться на работу после челюстной операции?", answer: "Офисные работники чаще всего возвращаются через 2–3 недели. Физический труд — 4–6 недель. Мы пишем индивидуальные справки на работу под вашу операцию и темп восстановления." },
  { question: "Когда можно вернуться к обычной еде?", answer: "Жидкая диета: 1–2 недели. Мягкая/пюре: 3–6 недели. Мягкие жевательные продукты (паста, омлет): 6–8 недели. Большинство продуктов: 8–12 недели. Жёсткое и хрустящее (сырые овощи, орехи): только после 12-й недели с разрешения хирурга." },
  { question: "Челюсть будут связывать проволокой?", answer: "С современной техникой — редко. У большинства пациентов — эластики (резинки) между верхними и нижними зубами: они направляют заживление, но позволяют говорить и немного двигать челюстью. Эластики снимаются для чистки." },
  { question: "Лицо будет выглядеть по-другому?", answer: "Да — в этом и смысл. Изменения обычно сдержанные, но улучшают гармонию лица. Первичный отёк (пик на 2–4 день) скрывает итоговый результат первые 2–3 недели. Финальный результат виден через 3–6 месяцев, когда остаточный отёк полностью спадает." },
  { question: "Восстановление болезненное?", answer: "Большинство пациентов говорят, что боли меньше, чем ожидали. Первые 5–7 дней хорошо контролируется рецептурными обезболивающими, потом ещё неделю — безрецептурными. Главные сложности — это онемение (временное), отёк и ограничения по еде." },
];

const phases = [
  {
    phase: "Первые 24–48 часов",
    icon: "🏥",
    points: [
      "Стационар: обычно одна ночь под наблюдением",
      "Начинается заметный отёк (пик на 2–4 день)",
      "IV-обезболивающие, потом переход на таблетки",
      "Лёд каждый час пока не спите (20 минут на, 20 от)",
      "Строгая жидкая диета — бульоны, протеиновые коктейли, смузи",
      "Спать с приподнятой головой минимум на 30°",
    ],
  },
  {
    phase: "Дни 3–7",
    icon: "🛌",
    points: [
      "Выписка домой — восстановление продолжается дома",
      "Отёк на пике (3–5 день), потом начинает спадать",
      "Онемение губ, щёк, подбородка — это нормально и ожидаемо",
      "Жидкая и пюрированная еда (йогурт, яблочное пюре, пудинг)",
      "Аккуратные полоскания солёной водой 4–6 раз в день после еды",
      "К 5–7 дню большинство справляется с повседневными делами",
    ],
  },
  {
    phase: "2–3 недели",
    icon: "📚",
    points: [
      "Офисные работники возвращаются на работу в 2–3 неделю",
      "Отёк ушёл на 50% — лицо выглядит ближе к обычному",
      "Часть онемения сохраняется (большая часть проходит к 6 месяцам)",
      "Только мягкая еда — картофельное пюре, омлет, рыба",
      "Первый послеоперационный рентген и корректировка эластиков",
      "Лёгкая ходьба и спокойная нагрузка — можно",
    ],
  },
  {
    phase: "4–6 недели",
    icon: "🏃",
    points: [
      "Можно лёгкое кардио, контактные виды спорта пока нет",
      "Кость заживает — прикус стабилизируется",
      "Мягкая твёрдая еда: паста, мягкий хлеб, хорошо проваренные овощи",
      "Натяжение эластиков может уменьшаться по мере стабилизации прикуса",
      "Онемение продолжает уходить (чувствительность возвращается)",
      "Энергия возвращается к обычному уровню",
    ],
  },
  {
    phase: "6–12 недели",
    icon: "🍽️",
    points: [
      "Постепенный возврат к большинству продуктов (жёсткое и хрустящее — после 12 недель)",
      "Кость зажила на 60–80%",
      "Начинается финальная ортодонтическая доводка",
      "Чувствительность возвращается полностью (95% случаев)",
      "Можно контактные виды спорта, тренажёрный зал, активные нагрузки",
      "Виден результат — большая часть остаточного отёка ушла",
    ],
  },
  {
    phase: "3–6 месяцев",
    icon: "😊",
    points: [
      "Финальный эстетический результат проявляется полностью",
      "К 6 месяцу кость полностью консолидирована",
      "Ортодонтическая доводка продолжается с эластиками",
      "Можно любую еду — сырые овощи, орехи, лёд",
      "Онемение полностью прошло у 95%+ пациентов",
      "Финальные послеоперационные снимки и выписка от хирурга",
    ],
  },
  {
    phase: "6–12 месяцев",
    icon: "🎓",
    points: [
      "Ортодонтическая доводка и ретенция",
      "Брекеты или элайнеры обычно снимают через 9–12 месяцев после операции",
      "Финальный прикус подтверждают ортодонт и хирург",
      "Начинается длительная фаза ретейнеров",
      "Ежегодные осмотры для контроля стабильности",
    ],
  },
];

export default function RecoveryTimelinePage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Главная", url: `${siteConfig.url}/ru` },
    { name: "Восстановление после челюстной операции", url: `${siteConfig.url}/ru/jaw-surgery-recovery-timeline` },
  ]);
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript([breadcrumb, faqSchema])} />

      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/corrective-jaw-surgery/corrective-jaw-surgery-97156448.jpg" alt="Шкала восстановления" fill className="object-cover opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/ru" className="hover:text-primary-light">Главная</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">Восстановление после челюстной операции</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Руководство по восстановлению</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Восстановление после челюстной операции — неделя за неделей
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
            Подробная шкала — что ждать с первых 24 часов до 12 месяцев после ортогнатической операции. Когда знаешь что впереди, путь становится легче.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ol className="relative space-y-12 border-l-2 border-primary-600/30 pl-8">
            {phases.map((p, i) => (
              <li key={p.phase} className="relative">
                <span className="absolute -left-[44px] top-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary-600 bg-white text-xl">
                  {p.icon}
                </span>
                <h2 className="font-serif text-2xl font-bold text-neutral-900">{p.phase}</h2>
                <ul className="mt-5 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-neutral-700 leading-7">
                      <span className="text-primary-600 font-bold mt-1">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-amber-50 border-l-4 border-amber-500 py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-amber-900 text-sm leading-7">
            <strong>Важно:</strong> Это общая шкала. Ваше восстановление зависит от возраста, общего здоровья, сложности операции, курения и того, насколько вы следуете послеоперационным рекомендациям. Всегда следуйте конкретным указаниям своего хирурга — при любых сомнениях звоните в офис.
          </p>
        </div>
      </section>

      <section className="bg-light py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Частые вопросы</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={f.question} open={i === 0} className="group rounded-2xl border border-neutral-200 bg-white px-6 py-4 shadow-sm">
                <summary className="cursor-pointer font-bold text-neutral-900 list-none [&::-webkit-details-marker]:hidden flex items-start justify-between gap-4">
                  <span>{f.question}</span>
                  <svg className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="leading-7 text-neutral-700 mt-3">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-8 text-center">Спланируйте свой путь к челюстной операции</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/ru/expertise/jaw-surgery" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Процедура</p>
            <h3 className="font-bold text-neutral-900 leading-snug">Корректирующая хирургия челюстей</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">Le Fort I, BSSO и гениопластика — от диагноза до операции.</p>
          </Link>
          <Link href="/ru/surgical-cases/corrective-jaw-surgery" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Результаты</p>
            <h3 className="font-bold text-neutral-900 leading-snug">Галерея кейсов челюстной хирургии</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">Реальные «до и после» — преображения после корректирующей хирургии челюстей.</p>
          </Link>
          <Link href="/ru/for-patients/travel" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Логистика</p>
            <h3 className="font-bold text-neutral-900 leading-snug">Приехать на операцию из другого города</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">Что нужно знать пациентам, которые едут на челюстную операцию из других штатов и стран.</p>
          </Link>
        </div>
      </section>

      <DualCTA />
    </>
  );
}
