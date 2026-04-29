import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StickyConciergeBar from "@/components/StickyConciergeBar";
import { officePhone, officePhoneHref, siteUrl } from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: "Глоссарий имплантологии и челюстной хирургии — RU/EN",
  description:
    "Русско-английский словарь терминов имплантологии и oral surgery: All-on-4, zygomatic implants, bone grafting, sinus lift, IV sedation, osseointegration. Термины с переводом и кратким объяснением для пациентов Dr. Antipov.",
  alternates: {
    canonical: `${siteUrl}/ru/glossary`,
    languages: {
      ru: `${siteUrl}/ru/glossary`,
      "x-default": `${siteUrl}/ru`,
    },
  },
  openGraph: {
    title: "Глоссарий имплантологии — Dr. Antipov",
    description:
      "RU/EN термины: All-on-4, zygomatic implants, bone grafting, sinus lift и другие. Что они значат и зачем нужны.",
    url: `${siteUrl}/ru/glossary`,
    locale: "ru_RU",
    type: "website",
  },
};

interface GlossaryTerm {
  en: string;
  ru: string;
  body: string;
}

const sections: { heading: string; intro: string; terms: GlossaryTerm[] }[] = [
  {
    heading: "Имплантация",
    intro:
      "Базовые термины имплантологии — что значит «имплант», в чём разница между протоколами и почему их называют по-разному.",
    terms: [
      {
        en: "Dental implant",
        ru: "Зубной имплант",
        body:
          "Титановый или цирконовый винт, вживляемый в кость челюсти как замена корня зуба. После остеоинтеграции на него фиксируется коронка, мостовидный протез или полный протез.",
      },
      {
        en: "Single tooth implant",
        ru: "Одиночный имплант",
        body:
          "Замена одного отсутствующего зуба: имплант + абатмент + коронка. Не затрагивает соседние здоровые зубы (в отличие от мостовидного протеза на опорах).",
      },
      {
        en: "All-on-4",
        ru: "All-on-4 / имплантация на 4 имплантах",
        body:
          "Полная дуга фиксированных зубов на 4 имплантах. Два передних импланта — вертикально, два задних — под углом, чтобы обойти пазухи и нерв. В большинстве случаев временный протез ставится в день операции (immediate load).",
      },
      {
        en: "All-on-6",
        ru: "All-on-6 / имплантация на 6 имплантах",
        body:
          "То же, что All-on-4, но с 6 имплантами для большей жёсткости — обычно при достаточном объёме кости и крупной челюсти. Протоколы Nobel Biocare, Straumann и других производителей.",
      },
      {
        en: "Zygomatic implants",
        ru: "Зигоматические импланты",
        body:
          "Длинные импланты, фиксируемые в скуловую кость (zygoma) вместо стандартной верхней челюсти. Решение при тяжёлой потере кости, когда обычные импланты и синус-лифтинг невозможны.",
      },
      {
        en: "Immediate load",
        ru: "Немедленная нагрузка",
        body:
          "Протокол, при котором временные зубы фиксируются на импланты в день операции. Возможен при достаточной первичной стабильности импланта (обычно ≥35 Ncm).",
      },
      {
        en: "Osseointegration",
        ru: "Остеоинтеграция",
        body:
          "Сращение поверхности импланта с костью челюсти. Занимает 3–6 месяцев. Без полной остеоинтеграции имплант не способен нести постоянную нагрузку.",
      },
      {
        en: "Snap-on dentures / Overdentures",
        ru: "Съёмные протезы на имплантах",
        body:
          "Протез, фиксируемый на 2–4 имплантах с помощью кнопок или балочной системы. Снимается пациентом для гигиены, но плотно держится при еде.",
      },
    ],
  },
  {
    heading: "Кость и подготовка",
    intro:
      "Импланту нужна достаточная по объёму и плотности кость. Когда её мало — есть несколько способов её нарастить.",
    terms: [
      {
        en: "Bone grafting",
        ru: "Костная пластика",
        body:
          "Подсадка костного материала в зону, где собственной кости недостаточно для импланта. Материал может быть собственным (autogenous), донорским (allograft), бычьим (xenograft) или синтетическим.",
      },
      {
        en: "Sinus lift",
        ru: "Синус-лифтинг / поднятие дна гайморовой пазухи",
        body:
          "Процедура наращивания кости в верхней челюсти за счёт смещения дна гайморовой пазухи. Открытый sinus lift — через боковое окно; закрытый — через ложе под имплант.",
      },
      {
        en: "Ridge augmentation",
        ru: "Аугментация альвеолярного гребня",
        body:
          "Восстановление ширины и/или высоты гребня челюсти, утраченного из-за длительного отсутствия зубов. Проводится отдельно или одновременно с установкой импланта.",
      },
      {
        en: "Socket preservation",
        ru: "Сохранение лунки",
        body:
          "Подсадка костного материала в лунку сразу после удаления зуба, чтобы предотвратить атрофию кости и сохранить объём для будущего импланта.",
      },
      {
        en: "Block bone graft",
        ru: "Блочная костная пластика",
        body:
          "Подсадка цельного блока кости (часто из ветви нижней челюсти или подбородка) в зоны с тяжёлой атрофией. Применяется для восстановления крупных дефектов перед имплантацией.",
      },
      {
        en: "Guided bone regeneration (GBR)",
        ru: "Направленная регенерация кости",
        body:
          "Использование барьерных мембран для изоляции зоны костной пластики от мягких тканей, чтобы кость регенерировала без врастания соединительной ткани.",
      },
    ],
  },
  {
    heading: "Хирургия челюсти",
    intro:
      "Orthognathic surgery — хирургическая коррекция прикуса и положения челюстей. Англоязычные термины здесь стандартны и используются в международных протоколах.",
    terms: [
      {
        en: "Orthognathic surgery",
        ru: "Ортогнатическая хирургия",
        body:
          "Хирургическое исправление неправильного положения верхней или нижней челюсти. Применяется при тяжёлых нарушениях прикуса, асимметрии лица, обструктивном апноэ.",
      },
      {
        en: "Le Fort I osteotomy",
        ru: "Остеотомия по Ле Фор I",
        body:
          "Хирургическая мобилизация верхней челюсти на уровне основания носа для перемещения вперёд / назад / вверх / вниз. Один из ключевых протоколов orthognathic surgery.",
      },
      {
        en: "BSSO (bilateral sagittal split osteotomy)",
        ru: "Двусторонняя сагиттальная остеотомия нижней челюсти",
        body:
          "Стандартная методика для перемещения нижней челюсти вперёд (при ретрогнатии) или назад (при прогнатии). Выполняется через внутриротовой доступ — без видимых шрамов.",
      },
      {
        en: "Genioplasty",
        ru: "Гениопластика / коррекция подбородка",
        body:
          "Хирургическое перемещение подбородочной части нижней челюсти для эстетической или функциональной коррекции (микрогения, асимметрия).",
      },
      {
        en: "Maxillomandibular advancement (MMA)",
        ru: "Бимаксиллярное выдвижение",
        body:
          "Одновременное выдвижение верхней и нижней челюсти. Используется как лечение тяжёлого обструктивного апноэ — расширяет дыхательные пути.",
      },
    ],
  },
  {
    heading: "Анестезия и диагностика",
    intro:
      "Имплантация и сложные удаления выполняются под седацией или общей анестезией. 3D CT обязателен перед сложной операцией.",
    terms: [
      {
        en: "3D cone-beam CT (CBCT)",
        ru: "3D-конусно-лучевая компьютерная томография",
        body:
          "Рентгенологическое исследование с 3D-моделью челюсти. Показывает плотность кости, расположение нерва и пазух — основа для точного планирования импланта или ортогнатической операции.",
      },
      {
        en: "Computer-guided surgery",
        ru: "Навигационная хирургия",
        body:
          "Хирургический шаблон, изготовленный по 3D CT, который физически направляет сверло в запланированную точку с точностью до миллиметра. Снижает риск повреждения нерва и пазухи.",
      },
      {
        en: "IV sedation",
        ru: "Внутривенная седация",
        body:
          "Уровень анестезии между местной и общей. Пациент в полусне, не помнит ход операции, дышит самостоятельно. Стандарт для длительных и сложных вмешательств.",
      },
      {
        en: "General anesthesia",
        ru: "Общая анестезия",
        body:
          "Полный сон с искусственной вентиляцией. Применяется в наиболее сложных случаях (orthognathic surgery, обширная реконструкция) и у пациентов со страхом перед стоматологией.",
      },
    ],
  },
  {
    heading: "Финансирование и оплата",
    intro: "Стоимость и варианты оплаты — частые вопросы перед началом лечения.",
    terms: [
      {
        en: "Free CT scan & consultation",
        ru: "Бесплатный CT и консультация",
        body:
          "В клинике Dr. Antipov первичный осмотр и 3D CT снимок выполняются без оплаты. Цель — дать понятный план лечения и стоимость до того, как пациент примет решение.",
      },
      {
        en: "Financing / payment plan",
        ru: "Финансирование / рассрочка",
        body:
          "Помесячная оплата лечения через сторонние финансовые сервисы. Тарифы от $99/мес, до 84 месяцев под 0% APR (для квалифицированных заявителей).",
      },
      {
        en: "0% APR",
        ru: "0% годовых",
        body:
          "Финансирование без процентов в течение оговорённого срока (обычно 12–24 месяца). Дальше — стандартная ставка, если баланс не погашен.",
      },
    ],
  },
];

const allTerms = sections.flatMap((s) => s.terms);

const definedTermSetSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${siteUrl}/ru/glossary#termset`,
  name: "Глоссарий имплантологии и челюстной хирургии",
  description:
    "Русско-английский глоссарий ключевых терминов имплантологии, ортогнатической хирургии, костной пластики и анестезии у Dr. Alexander Antipov, Roseville, CA.",
  inLanguage: ["ru", "en"],
  hasDefinedTerm: allTerms.map((t) => ({
    "@type": "DefinedTerm",
    name: t.en,
    alternateName: t.ru,
    description: t.body,
    inDefinedTermSet: `${siteUrl}/ru/glossary#termset`,
  })),
};

export default function RussianGlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
      <div className="min-h-screen bg-white text-dark" lang="ru">
        <header className="sticky top-0 z-50 border-b border-dark/10 bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/ru" className="flex items-center gap-3">
              <Image
                src="/images/logo-d10cd66c.svg"
                alt="Dr. Alexander Antipov, DDS"
                width={180}
                height={60}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
              <Link href="/ru#services" className="transition hover:text-primary">Услуги</Link>
              <Link href="/ru/questions" className="transition hover:text-primary">Гиды</Link>
              <Link href="/ru/glossary" className="text-primary">Глоссарий</Link>
              <Link href="/ru/about" className="transition hover:text-primary">О докторе</Link>
              <Link href="/ru#contact" className="transition hover:text-primary">Контакты</Link>
            </nav>
            <a
              href={officePhoneHref}
              className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-dark sm:px-5"
            >
              {officePhone}
            </a>
          </div>
        </header>

        <main>
          <section className="bg-light py-20 lg:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Глоссарий</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl lg:text-6xl">
                Имплантология и челюстная хирургия — термины
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                Русско-английский словарь основных терминов: что значит «All-on-4», чем zygomatic implants
                отличаются от обычных, что такое sinus lift и почему 3D CT важнее панорамного снимка. Термины,
                которые вы услышите от Dr. Antipov на консультации.
              </p>
              <nav aria-label="Разделы глоссария" className="mt-8 flex flex-wrap gap-2">
                {sections.map((s, i) => (
                  <a
                    key={s.heading}
                    href={`#section-${i}`}
                    className="rounded-full border border-dark/10 bg-white px-4 py-2 text-sm font-semibold text-dark transition hover:border-primary/40 hover:text-primary"
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
              className={`py-20 lg:py-24 ${i % 2 === 0 ? "" : "bg-light"}`}
            >
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{s.heading}</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                  {s.heading}
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted">{s.intro}</p>
                <dl className="mt-12 space-y-8">
                  {s.terms.map((t) => (
                    <div
                      key={t.en}
                      className="rounded-3xl border border-dark/5 bg-white p-7 shadow-sm"
                      id={`term-${t.en.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    >
                      <dt>
                        <h3 className="text-xl font-bold text-dark">
                          {t.en}{" "}
                          <span className="block text-base font-semibold text-primary">{t.ru}</span>
                        </h3>
                      </dt>
                      <dd className="mt-4 leading-7 text-muted">{t.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          ))}

          <section className="bg-dark py-20 text-white lg:py-24">
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Не нашли нужный термин?
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/80">
                Спросите на бесплатной консультации — Dr. Antipov или координатор объяснит, что значит
                диагноз и какие варианты лечения возможны в вашем случае.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/ru#contact"
                  className="rounded-2xl bg-primary px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  Бесплатная консультация
                </Link>
                <a
                  href={officePhoneHref}
                  className="rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Позвонить {officePhone}
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-dark/10 bg-white py-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} Dr. Alexander Antipov, DDS — Roseville, California</p>
            <div className="flex gap-4">
              <Link href="/" className="font-semibold text-primary hover:text-primary-dark">
                English
              </Link>
              <Link href="/ru" className="hover:text-primary">
                Главная
              </Link>
            </div>
          </div>
        </footer>

        <StickyConciergeBar />
      </div>
    </>
  );
}
