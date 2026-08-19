import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import { getBreadcrumbSchema, getFAQSchema, structuredDataScript } from "@/lib/structured-data";
import DualCTA from "@/components/DualCTA";
import CalculatorEmbed from "@/components/CalculatorEmbed";

export const metadata: Metadata = {
  title: "All-on-4: независимый хирург против корпоративных сетей",
  description:
    "Сравните варианты All-on-4 в Северной Калифорнии: независимый сертифицированный челюстно-лицевой хирург против корпоративных стоматологических сетей. Прозрачность цен, опыт хирурга и философия лечения.",
  alternates: { canonical: "/ru/all-on-4-clearchoice-alternative", languages: { ru: "/ru/all-on-4-clearchoice-alternative", en: "/all-on-4-clearchoice-alternative" } },
  openGraph: {
    locale: "ru_RU",
    title: "Альтернативы All-on-4 в Северной Калифорнии",
    description: "Независимый сертифицированный хирург против корпоративных сетей - в чём разница.",
    url: `${siteConfig.url}/ru/all-on-4-clearchoice-alternative`,
    type: "article",
    images: [{ url: "/images/fullarch/08-final-result.jpeg", width: 1920, height: 1080, alt: "Сравнение альтернатив All-on-4" }],
  },
};

const faqs = [
  { question: "Почему корпоративные стоматологические сети такие дорогие?", answer: "Корпоративные сети обычно берут $35 000–60 000+ за челюсть. В эту цену входят расходы на отделы продаж, национальную рекламу, сеть клиник и текучку персонала. Независимые челюстно-лицевые хирурги часто берут на 30–50% меньше, потому что у них нет такого корпоративного оверхеда." },
  { question: "Я буду видеть одного и того же хирурга на всех приёмах?", answer: "В клинике доктора Антипова вы видите его лично на каждом хирургическом этапе - консультация, операция, контрольные приёмы. В корпоративных сетях во время лечения вы можете попадать к разным хирургам или быть переведены между клиниками." },
  { question: "Какие сертификаты должны быть у хирурга All-on-4?", answer: "Ищите: Diplomate American Board of Oral and Maxillofacial Surgery (ABOMS), государственную лицензию на общую анестезию для офисной седации, права госпитализации на случай медицинских осложнений и не меньше 5 лет опыта именно по протоколам полной челюсти." },
  { question: "Можно ли получить точную цену до того, как соглашаться?", answer: "Да. Доктор Антипов даёт полный письменный план лечения с детальной сметой после бесплатной консультации с 3D КТ. Никакого давления продажников, никаких отдельных финансовых консультантов, никаких «скидок только сегодня»." },
  { question: "А если мне нужна костная пластика?", answer: "Независимые хирурги делают костную пластику сами. Многие сети либо направляют наружу (дополнительные расходы и координация), либо «допродают» развёрнутые планы пластики. У доктора Антипова есть fellowship по продвинутой костной реконструкции, и он часто обходится без пластики - за счёт наклонных или скуловых имплантов." },
];

const compareRows = [
  { feature: "Квалификация хирурга", drAntipov: "Сертифицированный ЧЛХ (Diplomate ABOMS), 25+ лет, 10 000+ операций", chain: "Зависит от клиники; некоторые хирурги могут быть новичками или перемещаться между офисами" },
  { feature: "Как проходит консультация", drAntipov: "Бесплатное 3D КТ и личная консультация с хирургом. Никакого давления.", chain: "Часто включает «координатора лечения» или финансового консультанта; типично давление принять решение в тот же день" },
  { feature: "Прозрачность цен", drAntipov: "Детальная письменная смета после консультации. Без скрытых платежей.", chain: "Пакетные цены - что входит и не входит, не всегда понятно. Часто $35 000–60 000+ за челюсть." },
  { feature: "Кто делает операцию", drAntipov: "Доктор Антипов лично выполняет каждый этап", chain: "Могут быть задействованы несколько хирургов; своего хирурга вы можете не увидеть до дня операции" },
  { feature: "Долгосрочное наблюдение", drAntipov: "Та же клиника, тот же хирург на всю жизнь имплантов", chain: "Клиники могут закрыться, персонал - меняться; преемственность лечения может быть нарушена" },
  { feature: "Права госпитализации", drAntipov: "Sutter Roseville, Sutter General, Mercy General, Mercy San Juan", chain: "Зависит от клиники" },
  { feature: "Русский / испанский", drAntipov: "Да - русский родной, есть испаноговорящий персонал", chain: "В большинстве клиник ограниченно" },
  { feature: "Зубы в день операции", drAntipov: "Да - стандартный протокол", chain: "Да - стандартный протокол" },
  { feature: "Сложные случаи (скуловые, тяжёлая атрофия)", drAntipov: "Fellowship по скуловым имплантам и сложной реконструкции", chain: "Могут отправить в другую клинику или «допродать» обширную пластику" },
  { feature: "Работа со страховкой", drAntipov: "Помогаем с PPO-заявками и предварительным согласованием; честно говорим о покрытии", chain: "Часто вне сети; упор на финансирование" },
];

export default function AllOn4AlternativesPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Главная", url: `${siteConfig.url}/ru` },
    { name: "All-on-4 Alternatives", url: `${siteConfig.url}/ru/all-on-4-clearchoice-alternative` },
  ]);
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript([breadcrumb, faqSchema])} />

      {/* Hero */}
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/fullarch/08-final-result.jpeg" alt="Альтернативы All-on-4" fill className="object-cover opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/55" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/ru" className="hover:text-primary-light">Главная</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">Альтернативы All-on-4</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Независимый хирург против корпоративных сетей</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Думаете о ClearChoice или другой сети для All-on-4?
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
            Вот что стоит сравнить, прежде чем принять решение: квалификация хирурга, прозрачность цен, кто реально делает вашу операцию, и что будет через 5 лет, когда понадобится коррекция.
          </p>
        </div>
      </section>

      {/* Honest disclaimer */}
      <section className="bg-amber-50 border-l-4 border-amber-500 py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-amber-900 text-sm leading-7">
            <strong>Честно говоря:</strong> корпоративные стоматологические сети помогли миллионам пациентов вернуть улыбки. Эта страница не о том, чтобы их принизить - она поможет вам сравнить и принять осознанное решение. Кому-то ближе структурированный, маркетингово-ведомый опыт сети; кому-то - преемственность независимой практики, где всем рулит хирург. И тот и другой формат могут давать отличный результат в умелых руках.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Side-by-side comparison
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Факторы, которые больше всего влияют на результат All-on-4 - и как их решает клиника доктора Антипова.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-neutral-200 shadow-xl">
            <table className="w-full">
              <thead className="bg-dark text-white">
                <tr>
                  <th className="text-left p-5 font-bold">Фактор</th>
                  <th className="text-left p-5 font-bold bg-primary-700">Доктор Антипов (независимая ЧЛХ-практика)</th>
                  <th className="text-left p-5 font-bold">Корпоративная имплантационная сеть</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r, i) => (
                  <tr key={r.feature} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                    <td className="p-5 font-bold text-neutral-900 align-top">{r.feature}</td>
                    <td className="p-5 text-neutral-700 align-top text-sm leading-7 bg-primary-50/50">{r.drAntipov}</td>
                    <td className="p-5 text-neutral-700 align-top text-sm leading-7">{r.chain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost narrative */}
      <section className="bg-light py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center">Честная правда о ценах</h2>
          <div className="mt-10 space-y-6 text-lg leading-8 text-neutral-700">
            <p>
              Корпоративные стоматологические сети обычно ставят All-on-4 в диапазоне <strong>$35 000–60 000 за челюсть</strong>. В цену заложены национальные рекламные бюджеты, расходы на отделы продаж, инфраструктура сети клиник и пакетные финансовые условия.
            </p>
            <p>
              Независимый сертифицированный хирург, выполняющий ту же процедуру по тому же клиническому стандарту, часто берёт <strong>$22 000–40 000 за челюсть</strong> - экономия 30–50% - без компромиссов по материалам (премиальный цирконий, импланты Nobel Biocare или Straumann), по хирургическому протоколу (3D-планирование, немедленная нагрузка) и по последующему наблюдению.
            </p>
            <p>
              Разница не в клиническом качестве. Разница в структуре бизнеса. Клиника, где владелец - сам хирург, убирает слои корпоративного оверхеда.
            </p>
            <p>
              Полную детальную смету мы даём на бесплатной консультации. <Link href="/ru/insurance" className="text-primary-600 hover:underline font-semibold">Рассрочка</Link> доступна от <strong>$99 в месяц</strong> через CareCredit и Lending Club.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-12">Частые вопросы</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={f.question} open={i === 0} className="group rounded-2xl border border-neutral-200 bg-light px-6 py-4 shadow-sm">
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
        <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-8 text-center">Продолжайте изучать варианты</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/ru/all-on-4-cost" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Цена</p>
            <h3 className="font-bold text-neutral-900 leading-snug">Сколько стоит All-on-4</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">Сколько реально стоит имплантация полного ряда и что влияет на цену.</p>
          </Link>
          <Link href="/ru/expertise/full-arch-implants" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Процедура</p>
            <h3 className="font-bold text-neutral-900 leading-snug">Лечение имплантацией полного ряда</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">Как проходит фиксированная имплантация полного ряда - от консультации до финальных зубов.</p>
          </Link>
          <Link href="/ru/surgical-cases/dental-implants" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Результаты</p>
            <h3 className="font-bold text-neutral-900 leading-snug">Галерея кейсов имплантации</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">Реальные кейсы «до и после» - полная имплантация и одиночные зубы.</p>
          </Link>
        </div>
      </section>

      <CalculatorEmbed slug="all-on-468-per-arch" locale="ru" />

      <DualCTA />
    </>
  );
}
