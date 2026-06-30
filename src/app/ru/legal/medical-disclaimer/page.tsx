import { Section, Container, GlassCard } from "@/components/sections"
import { siteConfig } from "@/constants/siteConfig"
import { AlertTriangle } from "lucide-react"
import PageHero from "@/components/PageHero"

export const metadata = {
  title: "Медицинский дисклеймер | Dr. Antipov",
  description:
    "Медицинский дисклеймер сайта доктора Александра Антипова. Важная информация о содержании, размещённом на этом сайте.",
  robots: "index, follow",
  alternates: {
    canonical: "/ru/legal/medical-disclaimer",
    languages: {
      ru: "/ru/legal/medical-disclaimer",
      en: "/legal/medical-disclaimer",
      "x-default": "/legal/medical-disclaimer"
    }
  }
}

export default function MedicalDisclaimerPage() {
  const lastUpdated = "12 октября 2025"

  return (
    <>
      <PageHero
        image="/images/landing-pages/dental-implants/art/pattern-background01-5a7afc40.jpg"
        eyebrow="Юридическое"
        title="Медицинский дисклеймер"
        subtitle="Важная информация о медицинском содержании этого сайта."
        overlay="navy"
      />

      {/* Main Content */}
      <Section background="default" padding="xl">
        <Container size="md">
          <GlassCard className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Important Notice */}
              <div className="bg-amber-50 border-2 border-amber-500 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  Важное уведомление
                </h2>
                <p className="text-amber-900 font-medium leading-relaxed">
                  Информация на этом сайте предоставлена исключительно в общих информационных и
                  образовательных целях. Она НЕ предназначена заменять профессиональную медицинскую
                  консультацию, диагностику или лечение. По любым вопросам, связанным с состоянием
                  здоровья, всегда обращайтесь к своему врачу или другому квалифицированному медицинскому
                  специалисту.
                </p>
              </div>

              {/* Not Medical Advice */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  1. Не является медицинской консультацией
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Содержание этого сайта, включая текст, графику, изображения, видео и другие материалы
                  («Материалы»), предоставлено исключительно в информационных целях и не является
                  медицинской консультацией, диагнозом или рекомендацией по лечению.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Материалы не предназначены для того, чтобы:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Заменять личное общение с квалифицированным медицинским специалистом</li>
                  <li>Служить медицинской консультацией, диагнозом или лечением</li>
                  <li>Рассматривать индивидуальные медицинские состояния или обстоятельства</li>
                  <li>Рекомендовать конкретные схемы лечения без надлежащего обследования</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>
                    Никогда не пренебрегайте профессиональной медицинской консультацией и не откладывайте
                    обращение за ней из-за того, что вы прочитали на этом сайте.
                  </strong>
                </p>
              </div>

              {/* No Doctor-Patient Relationship */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  2. Отсутствие отношений врач–пациент
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Использование этого сайта, включая отправку формы запроса на консультацию или обращение к
                  нам по электронной почте, НЕ создаёт отношений врач–пациент между вами и доктором
                  Александром Антиповым.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Отношения врач–пациент возникают только тогда, когда:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Вы записываетесь на очную консультацию и приходите на неё</li>
                  <li>Доктор Антипов проводит клиническое обследование</li>
                  <li>Обсуждается и согласовывается официальный план лечения</li>
                  <li>Вы подписываете соответствующие формы информированного согласия</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Общение через этот сайт НЕ является конфиденциальным и не должно рассматриваться как
                  установление защищённых отношений врач–пациент.
                </p>
              </div>

              {/* Consult Qualified Provider */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  3. Проконсультируйтесь с квалифицированным специалистом
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Прежде чем принимать какие-либо решения о своём здоровье или лечении:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    <strong>Проконсультируйтесь с квалифицированным челюстно-лицевым хирургом или
                    медицинским специалистом</strong>, который сможет оценить вашу индивидуальную
                    историю болезни и текущее состояние
                  </li>
                  <li>
                    <strong>Пройдите комплексное обследование</strong>, включая соответствующую
                    диагностическую визуализацию (рентген, КТ КЛКТ и т. п.)
                  </li>
                  <li>
                    <strong>Обсудите все варианты лечения, риски и преимущества</strong> применительно к
                    вашей ситуации
                  </li>
                  <li>
                    <strong>Задавайте вопросы</strong>, пока полностью не поймёте своё состояние и
                    предлагаемое лечение
                  </li>
                </ul>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <p className="text-sm text-red-900 font-medium">
                    <strong>Неотложная медицинская помощь:</strong> Если у вас неотложное состояние,
                    немедленно звоните 911. Не полагайтесь на информацию с этого сайта в экстренных
                    ситуациях.
                  </p>
                </div>
              </div>

              {/* Accuracy of Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  4. Точность и актуальность информации
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Хотя мы стремимся предоставлять точную и актуальную информацию, мы не даём никаких
                  заверений или гарантий в отношении:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Точности, полноты или своевременности Материалов</li>
                  <li>Пригодности процедур или методов лечения для конкретного человека</li>
                  <li>Результатов или исходов какой-либо процедуры</li>
                  <li>Доступности конкретных методов лечения или технологий</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Медицинские знания и передовые методы постоянно развиваются. Информация, точная на момент
                  публикации, может устареть. Мы оставляем за собой право обновлять или удалять Материалы
                  без предварительного уведомления.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>
                    Всегда проверяйте информацию у своего лечащего врача и сверяйтесь с актуальной
                    медицинской литературой.
                  </strong>
                </p>
              </div>

              {/* Individual Results Vary */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  5. Индивидуальные результаты могут отличаться
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Каждый пациент уникален. На результаты лечения могут влиять следующие факторы:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Возраст, общее состояние здоровья и история болезни</li>
                  <li>Плотность кости и анатомия челюсти</li>
                  <li>Способность к заживлению и функция иммунной системы</li>
                  <li>Гигиена полости рта и соблюдение послеоперационных рекомендаций</li>
                  <li>Факторы образа жизни (курение, диабет, приём лекарств и т. п.)</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>Результаты, описанные на этом сайте, не гарантируются</strong> и не являются
                  гарантией или предсказанием вашего индивидуального исхода. Ваши результаты могут
                  существенно отличаться.
                </p>
              </div>

              {/* Testimonials Disclaimer */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  6. Отказ от ответственности в отношении отзывов
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Отзывы и оценки пациентов на этом сайте отражают индивидуальный опыт и мнения. Их не
                  следует истолковывать как:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Гарантии или предсказания результатов для других пациентов</li>
                  <li>Медицинскую консультацию или рекомендации по лечению</li>
                  <li>Утверждения об эффективности конкретных процедур</li>
                  <li>Типичные или средние результаты</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Отзывы отражают субъективные взгляды пациентов и могут не соответствовать опыту всех
                  пациентов. Некоторые отзывы могли быть отредактированы для ясности, грамотности или
                  объёма, но не по содержанию.
                </p>
              </div>

              {/* Before/After Photos */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  7. Отказ от ответственности в отношении фото «до и после»
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Фотографии «до и после» (если они представлены) приводятся исключительно в иллюстративных
                  целях. Эти фотографии:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Отражают конкретные клинические случаи и могут не быть типичными результатами</li>
                  <li>Не являются гарантией аналогичных результатов</li>
                  <li>Могут не отражать весь спектр возможных результатов или осложнений</li>
                  <li>Не должны использоваться для принятия решений о лечении без консультации</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Фотографии являются собственностью доктора Александра Антипова, и пациенты дали согласие
                  на их использование. Несанкционированное воспроизведение запрещено.
                </p>
              </div>

              {/* External Links */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  8. Внешние ссылки и контент третьих лиц
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Этот сайт может содержать ссылки на внешние сайты или контент третьих лиц. Мы не одобряем,
                  не контролируем и не несём ответственности за:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Точность или надёжность информации на сторонних сайтах</li>
                  <li>Практики конфиденциальности внешних сайтов</li>
                  <li>Товары, услуги или методы лечения, рекламируемые в других местах</li>
                  <li>Мнения или советы, предоставленные третьими лицами</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Внешние ссылки приводятся исключительно для удобства. Использование сторонних сайтов
                  осуществляется на ваш собственный риск.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  9. Ограничение ответственности
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  В максимальной степени, допускаемой законом, доктор Александр Антипов и его практика не
                  несут ответственности за любой ущерб, убытки или неблагоприятные исходы, возникшие в
                  результате:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Опоры на информацию, предоставленную на этом сайте</li>
                  <li>Решений, принятых на основе Материалов сайта</li>
                  <li>Задержек в обращении за медицинской помощью из-за информации с сайта</li>
                  <li>Ошибок, упущений или неточностей в Материалах</li>
                  <li>Использования или невозможности использования этого сайта</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  10. Вопросы или замечания
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Если у вас есть вопросы об этом Медицинском дисклеймере или информации на нашем сайте,
                  пожалуйста, свяжитесь с нами, чтобы записаться на консультацию:
                </p>
                <div className="bg-neutral-50 rounded-xl p-6">
                  <p className="text-neutral-900 font-semibold mb-2">{siteConfig.name}</p>
                  <p className="text-neutral-700 mb-1">{siteConfig.contact.address.street}, {siteConfig.contact.address.suite}</p>
                  <p className="text-neutral-700 mb-3">
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
                    {siteConfig.contact.address.zip}
                  </p>
                  <p className="text-neutral-700 mb-1">
                    <strong>Телефон:</strong>{" "}
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-primary-600 hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                  <p className="text-neutral-700">
                    <strong>Эл. почта:</strong>{" "}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-primary-600 hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Final Notice */}
              <div className="bg-primary-50 border-2 border-primary-500 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Используя этот сайт
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Получая доступ к этому сайту и используя его, вы подтверждаете, что прочитали, поняли и
                  согласны соблюдать настоящий Медицинский дисклеймер. Если вы не согласны с какой-либо
                  частью этого дисклеймера, пожалуйста, не используйте этот сайт.
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
