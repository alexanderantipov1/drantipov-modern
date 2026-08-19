import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import { getBreadcrumbSchema, getFAQSchema, structuredDataScript } from "@/lib/structured-data";
import DualCTA from "@/components/DualCTA";
import CalculatorPackages from "@/components/CalculatorPackages";

export const metadata: Metadata = {
  title: "Стоимость All-on-4 в Калифорнии - честный разбор",
  description:
    "Сколько реально стоят импланты All-on-4 в 2026: детальный разбор, факторы цены, варианты рассрочки, страховое покрытие. Челюстно-лицевой хирург в Северной Калифорнии.",
  alternates: { canonical: "/ru/all-on-4-cost", languages: { ru: "/ru/all-on-4-cost", en: "/all-on-4-cost" } },
  openGraph: {
    locale: "ru_RU",
    title: "Стоимость All-on-4 - детальный разбор",
    description: "Честные цены на имплантацию полного зубного ряда.",
    url: `${siteConfig.url}/ru/all-on-4-cost`,
    type: "article",
    images: [{ url: "/images/fullarch/08-final-result.jpeg", width: 1920, height: 1080, alt: "Стоимость All-on-4 - разбор" }],
  },
};

const faqs = [
  { question: "Почему All-on-4 так дорого?", answer: "В All-on-4 входит: установка 4 имплантов, временный фиксированный протез в день операции, 3D-планирование по КТ, IV-седация, индивидуально фрезерованный финальный протез (обычно цирконий), плюс несколько контрольных приёмов на 6–12 месяцев. Только сами импланты (Nobel Biocare или Straumann) обходятся клинике в $1 500–3 000 за челюсть. Итог - это и материалы, и работа квалифицированного хирурга на протяжении года." },
  { question: "Можно разделить лечение между челюстями?", answer: "Да. Многие пациенты сначала делают верхнюю челюсть, через 6–12 месяцев - нижнюю. Это растягивает затраты и восстановление. Если делать обе челюсти в одну операцию - часто действует скидка." },
  { question: "Покрывает ли это страховка?", answer: "У большинства стоматологических страховок годовой лимит $1 500–3 000, и они часто покрывают только этап удаления зубов. Медицинская страховка иногда покрывает компоненты, связанные с функциональной реабилитацией. Мы бесплатно проверяем условия вашего конкретного полиса." },
  { question: "Какая рассрочка доступна?", answer: "Работаем с CareCredit и Lending Club. Планы стартуют от $99 в месяц, есть промо-периоды 0% годовых на 18–24 месяца. Большие суммы - до 84 месяцев. Можем сделать предварительное одобрение прямо на консультации." },
  { question: "Самый дешёвый All-on-4 - выгодная сделка?", answer: "Осторожнее с ценой ниже $20 000 за челюсть. Проверьте: бренд имплантов (избегайте дженериков), есть ли у хирурга board-сертификация, включена ли костная пластика если она нужна, из чего финальный протез (акрил быстро изнашивается, цирконий служит 20+ лет), и входит ли послеоперационное наблюдение." },
];

const costItems = [
  { item: "4 импланта премиум-бренда", range: "$1 500 – $3 000", note: "Nobel Biocare, Straumann или эквивалент. С гарантией." },
  { item: "Установка имплантов и IV-седация", range: "$6 000 – $9 000", note: "Работа хирурга, анестезия, операционная, инструменты." },
  { item: "3D КТ-планирование и шаблон", range: "$800 – $1 500", note: "Цифровая подготовка к операции." },
  { item: "Временный протез в день операции", range: "$2 500 – $4 500", note: "Носится 3–6 месяцев, пока импланты приживаются." },
  { item: "Финальный циркониевый протез", range: "$8 000 – $15 000", note: "Индивидуальная фрезеровка, служит 20+ лет." },
  { item: "Удаление зубов (если нужно)", range: "$200 – $600 за зуб", note: "Часто выполняется в одну операцию с имплантацией." },
  { item: "Костная пластика (если нужна)", range: "$1 000 – $4 000", note: "Иногда можно обойти наклонными или скуловыми имплантами." },
  { item: "Контрольные приёмы и уход", range: "Включено", note: "Первый год обычно входит в стоимость." },
];

const factors = [
  "Лечим одну челюсть или обе",
  "Сколько зубов нужно удалить",
  "Нужна ли костная пластика",
  "Бренд имплантов и материал протеза",
  "Тип седации (местная, IV или общий наркоз)",
  "Сложность случая (при тяжёлой атрофии могут понадобиться скуловые импланты)",
  "Регион (Северная Калифорния - средняя цена, побережье дороже)",
];

export default function AllOn4CostPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Главная", url: `${siteConfig.url}/ru` },
    { name: "Стоимость All-on-4", url: `${siteConfig.url}/ru/all-on-4-cost` },
  ]);
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript([breadcrumb, faqSchema])} />

      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/procedures/full-arch-prosthesis.png" alt="Протез All-on-4 на имплантах в руках хирурга" fill priority sizes="100vw" className="object-cover object-[center_55%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/45" />
          <div className="absolute inset-0 bg-dark/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/ru" className="hover:text-primary-light">Главная</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold">Стоимость All-on-4</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-light">Честные цены</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Стоимость All-on-4 в Калифорнии - что вы реально платите
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85">
            Детальный разбор: что включено, что опционально, и куда уходят деньги. Никаких скрытых пакетных платежей. Никакого давления продаж.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-primary-light/20 backdrop-blur-sm border border-primary-light/30 px-6 py-3">
            <span className="text-3xl font-bold">$22K – $40K</span>
            <span className="text-sm text-white/80 max-w-xs">типичная итоговая цена за челюсть у доктора Антипова, с премиум-материалами и первым годом наблюдения</span>
          </div>
        </div>
      </section>

      {/* Мгновенный расчёт - калькулятор на API (RU) */}
      <section className="bg-light py-8 lg:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary-600">Мгновенный расчёт</p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Рассчитайте стоимость за 2 минуты</h2>
            <p className="mt-4 text-lg text-neutral-600">
              Ответьте на несколько вопросов и получите персональный расчёт с вариантами рассрочки и страховки - сразу, на email. Без обязательств.
            </p>
            <p className="mt-3 text-base text-neutral-500">Выберите лечение, которое ближе всего к вашей ситуации.</p>
          </div>
          <div className="mt-5">
            <CalculatorPackages locale="ru" />
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-3">Детальный разбор</h2>
          <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-6">
            Из чего складывается полная стоимость All-on-4 для одной челюсти. Это типичные диапазоны для Северной Калифорнии; точная цена - после консультации.
          </p>
          <div className="rounded-3xl border border-neutral-200 shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-dark text-white">
                <tr>
                  <th className="text-left p-5 font-bold">Компонент</th>
                  <th className="text-left p-5 font-bold">Типичный диапазон</th>
                  <th className="text-left p-5 font-bold">Примечания</th>
                </tr>
              </thead>
              <tbody>
                {costItems.map((c, i) => (
                  <tr key={c.item} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                    <td className="p-5 font-semibold text-neutral-900 align-top">{c.item}</td>
                    <td className="p-5 font-bold text-primary-600 align-top whitespace-nowrap">{c.range}</td>
                    <td className="p-5 text-neutral-700 align-top text-sm leading-6">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-light py-10 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-6">Что меняет цену</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {factors.map((f) => (
              <li key={f} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">
                <svg className="h-6 w-6 shrink-0 text-primary-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-700 leading-7">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-6">Рассрочка делает лечение доступным</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white p-7 shadow-sm border border-neutral-200">
              <p className="text-3xl font-bold text-primary-600">$99</p>
              <p className="text-sm text-neutral-600">/мес от</p>
              <p className="mt-4 font-bold text-neutral-900">CareCredit</p>
              <p className="mt-2 text-sm text-neutral-700 leading-6">Промо-периоды с 0% годовых на 18–24 месяца на подходящие суммы.</p>
            </div>
            <div className="rounded-3xl bg-white p-7 shadow-sm border border-neutral-200">
              <p className="text-3xl font-bold text-primary-600">84 мес</p>
              <p className="text-sm text-neutral-600">длинный срок</p>
              <p className="mt-4 font-bold text-neutral-900">Lending Club</p>
              <p className="mt-2 text-sm text-neutral-700 leading-6">Большие суммы до 7 лет. Фиксированная ставка по вашему кредитному профилю.</p>
            </div>
            <div className="rounded-3xl bg-white p-7 shadow-sm border border-neutral-200">
              <p className="text-3xl font-bold text-primary-600">5%</p>
              <p className="text-sm text-neutral-600">скидка при полной оплате</p>
              <p className="mt-4 font-bold text-neutral-900">Наличные / чек</p>
              <p className="mt-2 text-sm text-neutral-700 leading-6">5% скидка, если оплачиваете лечение полностью до его начала.</p>
            </div>
          </div>
          <p className="mt-8 text-center text-neutral-600 text-sm">
            Подробности - на <Link href="/ru/insurance" className="text-primary-600 hover:underline font-semibold">странице о страховках и рассрочке</Link>.
          </p>
        </div>
      </section>

      {/* Expanded SEO content - what's included, financing, factors */}
      <section className="bg-white py-10 lg:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-8">
            Что реально входит в цену All-on-4
          </h2>
          <p className="text-lg leading-8 text-neutral-700 mb-6">
            Цифра, которая важна - это <strong>полная цена за челюсть «всё включено»</strong>: от консультации до постоянного протеза у вас во рту. В нашу детальную цену All-on-4 входит:
          </p>
          <ul className="space-y-3 text-neutral-700 text-base leading-relaxed list-disc pl-6 mb-5">
            <li><strong>3D КТ и виртуальное планирование операции</strong> - включено, без отдельной платы за диагностику.</li>
            <li><strong>Удаление зубов перед операцией</strong> - оставшихся разрушенных зубов (некоторые клиники берут $200–500 за зуб сверх цены имплантации).</li>
            <li><strong>4–6 титановых имплантов</strong> на челюсть, премиум-бренд (Neodent, Nobel Biocare или Straumann - по ситуации).</li>
            <li><strong>Индивидуальный навигационный шаблон</strong> для точной установки имплантов.</li>
            <li><strong>IV-седация</strong>, которую проводит сам хирург (без отдельной платы анестезиологу).</li>
            <li><strong>Фиксированный временный протез в день операции</strong> (PMMA / акрил) - крепится на импланты в день операции.</li>
            <li><strong>Постоянный протез</strong> - циркониевый или PMMA с титановым каркасом - устанавливается через 4–6 месяцев после остеоинтеграции.</li>
            <li><strong>Контрольные приёмы на 7-й, 30-й, 90-й день и через 6 месяцев</strong>, плюс проверка приживаемости через 12 месяцев.</li>
          </ul>
          <p className="text-lg leading-8 text-neutral-700 mb-6">
            Сравните это с «приманочными» ценами вроде $9 995 за челюсть - в них обычно не входит удаление, финальный протез, седация и наблюдение. Когда всё это добавляют, реальная итоговая цена приходит к тому же диапазону $25K–35K, что и в прозрачной смете.
          </p>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mt-8 mb-4">
            Рассрочка и страховка - честная версия
          </h2>
          <p className="text-lg leading-8 text-neutral-700 mb-6">
            Большинство стоматологических страховок в США относятся к All-on-4 как к съёмному протезу: возмещают «эквивалент протеза», обычно $1 500–3 000 за челюсть. Сама установка имплантов стоматологической страховкой обычно <em>не</em> покрывается. Несколько медицинских страховок покрывают хирургические компоненты при подтверждённой медицинской необходимости (тяжёлая адентия, реконструкция после травмы, после онкологии) - мы готовим документы для таких заявок.
          </p>
          <p className="text-lg leading-8 text-neutral-700 mb-6">
            Для части, которую платит пациент, мы работаем с{" "}
            <a href="https://www.carecredit.com/" target="_blank" rel="noopener nofollow" className="text-primary hover:underline">CareCredit</a>,{" "}
            <a href="https://www.lendingclub.com/patient-solutions" target="_blank" rel="noopener nofollow" className="text-primary hover:underline">LendingClub Patient Solutions</a>{" "}
            and{" "}
            <a href="https://www.proceedfinance.com/" target="_blank" rel="noopener nofollow" className="text-primary hover:underline">Proceed Finance</a>{" "}
            по ежемесячным планам от <strong>$99 в месяц</strong> на срок до 84 месяцев. С хорошей кредитной историей доступны промо-периоды с 0% годовых на коротких сроках (обычно 6–24 месяца).
          </p>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mt-8 mb-4">
            Почему цены отличаются от клиники к клинике
          </h2>
          <p className="text-lg leading-8 text-neutral-700 mb-6">
            Самые частые причины, почему в одной клинике All-on-4 стоит $18 000, а в другой $45 000:
          </p>
          <ul className="space-y-3 text-neutral-700 text-base leading-relaxed list-disc pl-6 mb-6">
            <li><strong>Квалификация хирурга.</strong> Стоматолог общего профиля, ставящий импланты, обычно берёт меньше, чем сертифицированный челюстно-лицевой хирург (Diplomate ABOMS), но и сложность случаев и риск осложнений тоже отличаются.</li>
            <li><strong>Бренд имплантов.</strong> Премиум-бренды (Nobel, Straumann, Neodent) обходятся клинике в 2–4 раза дороже дженериков, но за ними десятилетия рецензируемых клинических данных.</li>
            <li><strong>Материал протеза.</strong> Цирконий (+$5 000 к цене акрила) - прочнее, эстетичнее и служит 15–25 лет против 5–10 лет у акрила.</li>
            <li><strong>Тип анестезии.</strong> IV-седация, которую делает сам хирург, добавляет $800–1 500. Общий наркоз в операционной больницы - $3 000–5 000.</li>
            <li><strong>Подготовительная работа.</strong> Синус-лифтинг, костная пластика, скуловые импланты при тяжёлой атрофии - каждое добавляет $2 000–8 000 в зависимости от объёма.</li>
            <li><strong>География.</strong> Крупные побережные мегаполисы (Сан-Франциско, Нью-Йорк, Лос-Анджелес, Сиэтл) идут на 20–30% выше медианы по США; сельский Средний Запад на 15–25% ниже.</li>
          </ul>
          <p className="text-lg leading-8 text-neutral-700 mb-6">
            Когда сравниваете предложения - просите детальную смету и уточняйте, что входит и что нет. Бесплатная консультация с КТ в нашем офисе в Roseville даёт вам твёрдую письменную смету без неприятных сюрпризов потом.
          </p>
        </div>
      </section>

      <section className="bg-light py-10 lg:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center mb-6">Частые вопросы</h2>
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

      <section className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-8 text-center">Продолжайте изучать варианты</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/ru/all-on-4-clearchoice-alternative" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Сравнение</p>
            <h3 className="font-bold text-neutral-900 leading-snug">All-on-4 vs ClearChoice</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">Как сравнить независимого ЧЛХ-хирурга и корпоративную модель имплантации.</p>
          </Link>
          <Link href="/ru/expertise/full-arch-implants" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Процедура</p>
            <h3 className="font-bold text-neutral-900 leading-snug">Лечение имплантацией полного ряда</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">Как проходит фиксированная имплантация полного ряда - от консультации до финальных зубов.</p>
          </Link>
          <Link href="/ru/expertise/zygomatic-implants" className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-xs uppercase tracking-widest text-primary-600 font-bold mb-2">Продвинутая опция</p>
            <h3 className="font-bold text-neutral-900 leading-snug">Скуловые импланты</h3>
            <p className="text-sm text-neutral-600 mt-2 leading-6">Вариант без пластики, когда не хватает кости верхней челюсти.</p>
          </Link>
        </div>
      </section>

      <DualCTA />
    </>
  );
}
