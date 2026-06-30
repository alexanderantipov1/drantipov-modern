import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import { structuredDataScript } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: { absolute: "Глоссарий челюстно-лицевой хирургии — термины простыми словами" },
  description: "Понятные определения терминов: импланты, челюстная хирургия, апноэ сна, костная пластика и другие термины челюстно-лицевой хирургии.",
  alternates: {
    canonical: `${siteConfig.url}/ru/glossary`,
    languages: {
      ru: `${siteConfig.url}/ru/glossary`,
      en: `${siteConfig.url}/glossary`,
      "x-default": `${siteConfig.url}/glossary`,
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Глоссарий — импланты и челюстно-лицевая хирургия",
    description: "Определения ключевых терминов челюстно-лицевой хирургии — импланты, остеоинтеграция, костная пластика, ортогнатика.",
    images: [
      {
        url: "/images/procedures/dental-implants@2x-06d1b2ea.jpg",
        width: 1200,
        height: 630,
        alt: "Глоссарий — импланты и челюстно-лицевая хирургия",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Глоссарий — импланты и челюстно-лицевая хирургия",
    description: "Определения ключевых терминов челюстно-лицевой хирургии — импланты, остеоинтеграция, костная пластика, ортогнатика.",
    images: ["/images/procedures/dental-implants@2x-06d1b2ea.jpg"],
  }
};

interface Term {
  term: string;
  body: string;
}

const sections: { heading: string; intro: string; terms: Term[] }[] = [
  {
    heading: "Дентальная имплантация",
    intro: "Основные термины в имплантологии — что такое имплант, чем отличаются протоколы и почему хирурги используют именно эти названия.",
    terms: [
      { term: "Дентальный имплант", body: "Титановый или циркониевый штифт, который хирургически устанавливают в челюстную кость, чтобы заменить корень утраченного зуба. После остеоинтеграции на него крепят коронку, мост или протез." },
      { term: "Имплант одного зуба", body: "Замена одного отсутствующего зуба связкой имплант + абатмент + коронка. Соседние зубы не трогаем, в отличие от классического моста." },
      { term: "All-on-4", body: "Целая челюсть фиксированных зубов на 4 имплантах. Два передних — вертикально, два задних — под углом, чтобы обойти пазухи и нервы. Обычно с немедленной нагрузкой: временные зубы ставят в день операции." },
      { term: "All-on-6", body: "Та же идея, что All-on-4, но с 6 имплантами для дополнительной опоры — обычно при достаточном объёме кости или на крупной челюсти." },
      { term: "Скуловые импланты", body: "Длинные импланты, закреплённые в скуловой кости вместо верхней челюсти. Применяют при тяжёлой убыли кости, когда классические импланты и синус-лифтинг невозможны." },
      { term: "Немедленная нагрузка", body: "Протокол, при котором временные зубы фиксируют на имплантах в день операции. Нужна достаточная первичная стабильность (обычно от 35 Н·см)." },
      { term: "Остеоинтеграция", body: "Биологическое сращивание поверхности импланта с окружающей костью. Занимает 3–6 месяцев. Без полной интеграции имплант не выдержит долгой нагрузки." },
      { term: "Snap-on протезы / Overdentures", body: "Съёмный протез, который защёлкивается на 2–4 имплантах через кнопки или балку. Снимается для чистки, но при еде держится надёжно." },
    ],
  },
  {
    heading: "Кость и подготовка",
    intro: "Имплантату нужен достаточный объём и плотность кости. Когда её мало — вот как её наращивают.",
    terms: [
      { term: "Костная пластика", body: "Добавление костного материала туда, где собственной кости для импланта не хватает. Варианты материалов: аутогенный (ваша кость), аллограф (донорский), ксенограф (бычий) или синтетический." },
      { term: "Синус-лифтинг", body: "Процедура наращивания кости в верхней челюсти за счёт поднятия дна гайморовой пазухи. Латеральный доступ (окно) или крестальный (через место установки импланта)." },
      { term: "Наращивание гребня", body: "Восстановление ширины или высоты альвеолярного гребня, потерянных из-за долгого отсутствия зубов. Можно делать отдельно или вместе с установкой импланта." },
      { term: "Сохранение лунки", body: "Закладка костного материала в лунку сразу после удаления зуба — чтобы кость не рассосалась и сохранился объём под будущий имплант." },
      { term: "Блочная пластика", body: "Цельный блок кости (аутогенный или донорский), который фиксируют винтами на дефицитном участке. Применяют при тяжёлых дефектах гребня." },
    ],
  },
  {
    heading: "Корректирующая хирургия челюстей",
    intro: "Термины ортогнатики — что делает каждая операция и когда её применяют.",
    terms: [
      { term: "Остеотомия Le Fort I", body: "Хирургический разрез верхней челюсти выше корней зубов. Позволяет переместить челюсть вперёд, назад, вверх, вниз или разделить её на сегменты." },
      { term: "BSSO (двусторонняя сагиттальная остеотомия)", body: "Хирургическое расщепление нижней челюсти с двух сторон для смещения вперёд или назад. Самая частая ортогнатическая операция на нижней челюсти." },
      { term: "Гениопластика", body: "Хирургическое изменение формы подбородка — выдвижение, уменьшение, удлинение или поворот. Часто комбинируется с челюстной операцией для гармонии лица." },
      { term: "MMA (максилло-мандибулярное выдвижение)", body: "Одновременное выдвижение обеих челюстей вперёд. Очень эффективная хирургическая методика лечения обструктивного апноэ сна." },
      { term: "Нарушение прикуса (malocclusion)", body: "Неправильное положение зубов при смыкании. Class I — в целом нормальный прикус, но со скученностью. Class II — верхняя челюсть впереди нижней (дистальный прикус). Class III — нижняя впереди верхней (мезиальный прикус)." },
      { term: "Виртуальное хирургическое планирование (VSP)", body: "3D-цифровое моделирование операции на челюсти по данным КТ (CBCT). Позволяет точно спланировать операцию заранее и напечатать индивидуальные хирургические шаблоны." },
    ],
  },
  {
    heading: "Анестезия и седация",
    intro: "Уровни комфорта при челюстно-лицевой операции — что означает каждый.",
    terms: [
      { term: "Местная анестезия", body: "Обезболивание только в зоне операции. Пациент полностью в сознании. Подходит для простых удалений и мелких процедур." },
      { term: "Закись азота (веселящий газ)", body: "Газ для лёгкой релаксации, вдыхается через маску. Пациент в сознании. После прекращения подачи действие проходит за несколько минут." },
      { term: "IV-седация", body: "Седативные препараты вводятся внутривенно. Пациент дышит сам, но почти ничего не помнит. Самый частый выбор при удалении зубов мудрости, имплантации и биопсии." },
      { term: "Общий наркоз", body: "Пациент полностью без сознания, дыхание поддерживается. Применяют при крупных операциях вроде ортогнатики в условиях стационара." },
      { term: "ABOMS (American Board of Oral and Maxillofacial Surgery)", body: "Сертификация совета, которая подтверждает, что хирург прошёл аккредитованную резидентуру по челюстно-лицевой хирургии и сдал серьёзные письменные и устные экзамены. Золотой стандарт в специальности." },
    ],
  },
  {
    heading: "Снимки и диагностика",
    intro: "Инструменты диагностики для точного планирования челюстно-лицевой операции.",
    terms: [
      { term: "3D КТ (Cone Beam CT)", body: "Стоматологический 3D-снимок: детально показывает кость, пазухи, нервы и корни зубов. Без него не спланировать имплантацию, челюстную операцию или сложное удаление. Доза облучения сильно ниже, чем у медицинской КТ." },
      { term: "Панорамный снимок", body: "Один 2D-снимок, на котором видны все зубы, обе челюсти и окружающие структуры. Хорош для скрининга, но для планирования операции уступает 3D КТ." },
      { term: "Прицельный снимок", body: "Маленький детальный 2D-снимок одного-двух зубов и окружающей кости. Применяется для диагностики проблем конкретного зуба." },
      { term: "Внутриротовое сканирование", body: "Цифровое сканирование зубов и дёсен вместо обычных слепков. Используется для проектирования коронок, хирургических шаблонов и ортодонтических планов." },
    ],
  },
  {
    heading: "Восстановление и осложнения",
    intro: "Что слышат пациенты во время восстановления и что эти слова означают.",
    terms: [
      { term: "«Сухая лунка» (альвеолярный остеит)", body: "Болезненное состояние, когда сгусток крови в лунке после удаления выпадает и обнажается кость. Случается в 1–5% удалений. Лечится медикаментозной повязкой." },
      { term: "Перикоронит", body: "Воспаление дёсен вокруг частично прорезавшегося зуба — частая причина для удаления зуба мудрости." },
      { term: "Парестезия", body: "Временное (редко стойкое) онемение из-за раздражения нерва. Чаще всего возникает при удалении нижних зубов мудрости рядом с нижнечелюстным нервом. Обычно проходит за недели или месяцы." },
      { term: "Pericoronitis", body: "Infection of the gum tissue around a partially erupted wisdom tooth, often the reason for surgical removal." },
    ],
  },
];

export default function GlossaryPage() {
  const definedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${siteConfig.url}/ru/glossary#termset`,
    name: "Глоссарий челюстно-лицевой хирургии",
    url: `${siteConfig.url}/ru/glossary`,
    hasDefinedTerm: sections.flatMap((s) =>
      s.terms.map((t) => ({
        "@type": "DefinedTerm",
        name: t.term,
        description: t.body,
        inDefinedTermSet: `${siteConfig.url}/ru/glossary#termset`,
      })),
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript([definedTermSet])} />

      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/landing-pages/dental-implants/art/office01-d1051d16.jpg"
            alt="Глоссарий челюстно-лицевой хирургии"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/ru" className="hover:text-primary-light">Главная</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">Глоссарий</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Образование пациентов</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Челюстно-лицевая хирургия — глоссарий
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
            Понятные определения терминов, которые вы услышите на консультации: All-on-4, скуловые импланты, синус-лифтинг, остеоинтеграция, MMA и других.
          </p>
          <nav aria-label="Sections" className="mt-8 flex flex-wrap gap-2">
            {sections.map((s, i) => (
              <a
                key={s.heading}
                href={`#section-${i}`}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-primary hover:border-primary"
              >
                {s.heading}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {sections.map((s, i) => (
        <section
          key={s.heading}
          id={`section-${i}`}
          className={`py-20 lg:py-24 ${i % 2 === 1 ? "bg-light" : ""}`}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600">{s.heading}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {s.heading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-700 max-w-3xl">{s.intro}</p>
            <dl className="mt-10 grid gap-6 md:grid-cols-2">
              {s.terms.map((t) => (
                <div
                  key={t.term}
                  className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  id={`term-${t.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                >
                  <dt>
                    <h3 className="text-xl font-bold text-neutral-900">{t.term}</h3>
                  </dt>
                  <dd className="mt-3 leading-7 text-neutral-700 text-sm">{t.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}

      <section className="bg-dark py-20 text-white lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Не нашли термин?
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/80">
            Приходите с вопросом на бесплатную консультацию. Доктор Антипов или наш координатор подробно объяснят, что значит ваш диагноз и какие варианты лечения у вас есть.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/ru/contact"
              className="rounded-2xl bg-primary-600 px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-700"
            >
              Schedule a free consultation
            </Link>
            <Link
              href="/ru/expertise"
              className="rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Browse procedures
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
