import Link from "next/link";
import { ruServiceDiscovery, type RuServiceDiscoveryGroup } from "@/data/ruServiceDiscovery";

export default function RuServiceDetailsLinks({ group }: { group: RuServiceDiscoveryGroup }) {
  const entries = ruServiceDiscovery.filter(service => service.group === group);
  const introductions: Record<RuServiceDiscoveryGroup, { title: string; text: string }> = {
    "full-arch": { title: "Варианты опоры для полного зубного ряда", text: "Число имплантов выбирают после обследования, а не по названию метода. Сравните особенности планов на четырёх, пяти и шести опорах." },
    multiple: { title: "Если отсутствует несколько зубов", text: "Для соседних или раздельных промежутков могут использоваться разные конструкции. Узнайте, как планируют мост или отдельные коронки на имплантах." },
    "bone-loss": { title: "Планирование имплантации на верхней челюсти", text: "Синус-лифтинг увеличивает объём кости у пазухи, а птеригоидные импланты используют другую область опоры. Выбор между этими подходами зависит от анатомии, состояния пазух и плана протезирования." },
    cosmetic: { title: "Инъекционные процедуры: в чём различия", text: "Ботулинический токсин влияет на активность мышц, а филлеры изменяют объём тканей. Показания, ограничения и риски этих процедур различаются." },
    "implant-care": { title: "Когда имплант или протез требует повторной оценки", text: "Боль, кровоточивость и подвижность требуют выяснения причины. Воспаление тканей вокруг импланта и механические проблемы полного протеза могут требовать разных способов лечения." },
    planning: { title: "Подготовка к консультации по имплантации", text: "До выбора метода важно обсудить состояние здоровья, снимки, альтернативы и этапы лечения. Узнайте, что подготовить к приёму и какие вопросы задать врачу." },
  };
  const introduction = introductions[group];
  return (
    <section className="bg-slate-50 px-4 py-16" aria-labelledby={`service-details-${group}`}>
      <div className="mx-auto max-w-6xl">
        <h2 id={`service-details-${group}`} className="text-3xl font-serif font-bold text-slate-900">{introduction.title}</h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{introduction.text}</p>
        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {entries.map(service => (
            <li key={service.id} className="rounded-2xl border border-slate-200 bg-white p-6">
              <Link href={service.href} className="font-semibold text-primary underline underline-offset-4">{service.shortTitle}</Link>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
