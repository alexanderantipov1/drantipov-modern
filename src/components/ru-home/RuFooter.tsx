import Link from "next/link";
import {
  officeAddress,
  officePhone,
  officePhoneHref,
  officeEmail,
} from "@/data/russianImplantFunnel";

const linkGroups = [
  {
    title: "Услуги",
    links: [
      { label: "Все услуги", href: "/ru/expertise" },
      { label: "Имплантация челюсти", href: "/ru/expertise/full-arch-implants" },
      { label: "Одиночные импланты", href: "/ru/expertise/single-tooth" },
      { label: "Ортогнатическая хирургия", href: "/ru/expertise/jaw-surgery" },
      { label: "Sleep Apnea", href: "/ru/expertise/sleep-apnea" },
      { label: "Костная пластика", href: "/ru/expertise/bone-grafting" },
      { label: "Удаление родинок", href: "/ru/expertise/mole-removal" },
    ],
  },
  {
    title: "О практике",
    links: [
      { label: "Команда", href: "/ru/our-team" },
      { label: "Контакты", href: "/ru/contact" },
      { label: "Страховка и финансирование", href: "/ru/insurance" },
      { label: "До и после", href: "/ru/surgical-cases" },
      { label: "Результаты", href: "/ru/results" },
      { label: "Глоссарий", href: "/ru/glossary" },
    ],
  },
  {
    title: "Пациентам",
    links: [
      { label: "Информация для пациентов", href: "/ru/for-patients" },
      { label: "Запись на консультацию", href: "/ru/for-patients/consultation" },
      { label: "Подготовка к операции", href: "/ru/for-patients/pre-op" },
      { label: "Восстановление", href: "/ru/for-patients/post-op" },
      { label: "Частые вопросы", href: "/ru/for-patients/faqs" },
      { label: "Отзывы", href: "/ru/results" },
    ],
  },
  {
    title: "Стоматологам и Медиа",
    links: [
      { label: "Партнёрство со стоматологами", href: "/ru/for-dentists" },
      { label: "Направить пациента", href: "/ru/for-dentists/refer-patients" },
      { label: "Видео и лекции", href: "/ru/media/videos" },
      { label: "Выступления", href: "/ru/media/speaking" },
      { label: "English version", href: "/" },
    ],
  },
];

export default function RuFooter() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Brand block */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">Доктор Антипов</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Board-certified челюстно-лицевой хирург. 25+ лет практики, 10 000+ пациентов. Roseville, Калифорния. Двуязычный приём: английский и русский.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p>{officeAddress}</p>
              <p>
                <a href={officePhoneHref} className="hover:text-primary">
                  {officePhone}
                </a>
              </p>
              <p>
                <a href={`mailto:${officeEmail}`} className="hover:text-primary">
                  {officeEmail}
                </a>
              </p>
              <p>Пн–Пт: 8:00–17:00 · Экстренные случаи 24/7</p>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-white/50">
          <p>
            © {new Date().getFullYear()} Dr. Alexander Antipov, DDS — Roseville, California
          </p>
          <div className="flex gap-4">
            <Link href="/ru/legal/privacy-policy" className="hover:text-white">
              Конфиденциальность
            </Link>
            <Link href="/ru/legal/terms-of-service" className="hover:text-white">
              Условия использования
            </Link>
            <Link href="/" className="hover:text-white">
              English
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
