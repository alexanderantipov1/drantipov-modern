import { Section, Container, GlassCard } from "@/components/sections"
import { siteConfig } from "@/constants/siteConfig"
import PageHero from "@/components/PageHero"

export const metadata = {
  title: "Политика конфиденциальности | Dr. Antipov",
  description: "Политика конфиденциальности сайта доктора Александра Антипова. Узнайте, как мы собираем, используем и защищаем вашу информацию.",
  robots: "index, follow",
  alternates: {
    canonical: "/ru/legal/privacy-policy",
    languages: {
      ru: "/ru/legal/privacy-policy",
      en: "/legal/privacy-policy",
      "x-default": "/legal/privacy-policy"
    }
  }
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "12 октября 2025"

  return (
    <>
      <PageHero
        image="/images/landing-pages/dental-implants/art/pattern-background01-5a7afc40.jpg"
        eyebrow="Юридическое"
        title="Политика конфиденциальности"
        subtitle="Как мы собираем, используем и защищаем вашу информацию."
        overlay="navy"
      />

      {/* Main Content */}
      <Section background="default" padding="xl">
        <Container size="md">
          <GlassCard className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Table of Contents */}
              <div className="bg-primary-50 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Содержание</h2>
                <ol className="space-y-2 list-decimal list-inside text-neutral-700">
                  <li>
                    <a href="#information-we-collect" className="text-primary-600 hover:underline">
                      Какую информацию мы собираем
                    </a>
                  </li>
                  <li>
                    <a href="#how-we-use-information" className="text-primary-600 hover:underline">
                      Как мы используем вашу информацию
                    </a>
                  </li>
                  <li>
                    <a href="#data-security" className="text-primary-600 hover:underline">
                      Меры безопасности данных
                    </a>
                  </li>
                  <li>
                    <a href="#cookies" className="text-primary-600 hover:underline">
                      Файлы cookie и отслеживание
                    </a>
                  </li>
                  <li>
                    <a href="#third-party" className="text-primary-600 hover:underline">
                      Сторонние сервисы
                    </a>
                  </li>
                  <li>
                    <a href="#your-rights" className="text-primary-600 hover:underline">
                      Ваши права на конфиденциальность
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-primary-600 hover:underline">
                      Свяжитесь с нами
                    </a>
                  </li>
                </ol>
              </div>

              {/* Introduction */}
              <p className="text-neutral-700 leading-relaxed mb-8">
                Доктор Александр Антипов («мы», «наш» или «нас») уважает вашу конфиденциальность и стремится
                защищать вашу персональную информацию. Настоящая Политика конфиденциальности объясняет, как
                мы собираем, используем, раскрываем и защищаем вашу информацию при посещении{" "}
                <a href={siteConfig.url} className="text-primary-600 hover:underline">
                  нашего сайта
                </a>
                .
              </p>

              {/* Information We Collect */}
              <div id="information-we-collect" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  1. Какую информацию мы собираем
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  1.1 Информация, которую вы предоставляете
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Мы собираем информацию, которую вы добровольно предоставляете, когда вы:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Отправляете форму запроса на консультацию</li>
                  <li>Связываетесь с нами по электронной почте или телефону</li>
                  <li>Подписываетесь на нашу рассылку (если применимо)</li>
                  <li>Заполняете любые другие формы на нашем сайте</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Эта информация может включать ваше имя, адрес электронной почты, номер телефона, а также
                  любое сообщение или запрос, который вы предоставляете.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                  <p className="text-sm text-neutral-800 font-medium">
                    <strong>Важно:</strong> Этот сайт НЕ собирает защищённую медицинскую информацию (PHI) в
                    том значении, в каком она определена HIPAA. Не отправляйте конфиденциальные медицинские
                    сведения, данные о диагнозе или записи о лечении через формы на нашем сайте.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  1.2 Автоматически собираемая информация
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  При посещении нашего сайта мы автоматически собираем определённую информацию о вашем
                  устройстве и поведении в браузере:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>IP-адрес</li>
                  <li>Тип и версия браузера</li>
                  <li>Операционная система</li>
                  <li>Посещённые страницы и время, проведённое на них</li>
                  <li>Сайт-источник перехода</li>
                  <li>Дата и время посещения</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div id="how-we-use-information" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  2. Как мы используем вашу информацию
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Мы используем собранную информацию в следующих целях:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Для ответа на ваши запросы на консультацию и обращения</li>
                  <li>Для связи с вами по поводу наших услуг</li>
                  <li>Для улучшения нашего сайта и удобства пользователей</li>
                  <li>Для анализа трафика и моделей использования сайта</li>
                  <li>Для соблюдения юридических обязательств</li>
                  <li>Для предотвращения мошенничества и обеспечения безопасности сайта</li>
                </ul>
              </div>

              {/* Data Security */}
              <div id="data-security" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  3. Меры безопасности данных
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Мы применяем стандартные для отрасли меры безопасности для защиты вашей персональной
                  информации:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Шифрование SSL/TLS при передаче данных</li>
                  <li>Защищённые серверы и базы данных</li>
                  <li>Регулярные аудиты безопасности и обновления</li>
                  <li>Контроль доступа и аутентификация</li>
                  <li>Обучение сотрудников вопросам защиты данных</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Однако ни один способ передачи данных через интернет не является на 100% безопасным. Хотя
                  мы стремимся защитить вашу информацию, мы не можем гарантировать абсолютную безопасность.
                </p>
              </div>

              {/* Cookies */}
              <div id="cookies" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  4. Файлы cookie и технологии отслеживания
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Мы используем файлы cookie и аналогичные технологии отслеживания, чтобы улучшить ваш опыт
                  просмотра и проанализировать работу сайта. Файлы cookie — это небольшие текстовые файлы,
                  сохраняемые на вашем устройстве.
                </p>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Типы используемых нами файлов cookie:</h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    <strong>Необходимые файлы cookie:</strong> требуются для работы сайта
                  </li>
                  <li>
                    <strong>Аналитические файлы cookie:</strong> помогают нам понять, как посетители
                    используют наш сайт (Google Analytics)
                  </li>
                  <li>
                    <strong>Маркетинговые файлы cookie:</strong> отслеживают посетителей на разных сайтах в
                    рекламных целях (Facebook Pixel, если применимо)
                  </li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Вы можете управлять файлами cookie в настройках своего браузера. Отключение файлов cookie
                  может повлиять на работу сайта.
                </p>
              </div>

              {/* Third-Party Services */}
              <div id="third-party" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  5. Сторонние сервисы
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Мы используем следующие сторонние сервисы, которые могут собирать информацию:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    <strong>Google Analytics:</strong> анализ трафика сайта
                  </li>
                  <li>
                    <strong>Google Tag Manager:</strong> управление тегами
                  </li>
                  <li>
                    <strong>Hotjar:</strong> аналитика поведения пользователей и тепловые карты
                  </li>
                  <li>
                    <strong>Facebook Pixel:</strong> реклама и аналитика (если применимо)
                  </li>
                  <li>
                    <strong>Resend:</strong> сервис доставки электронной почты
                  </li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  У этих сервисов есть собственные политики конфиденциальности. Мы рекомендуем ознакомиться
                  с ними:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Политика конфиденциальности Google
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hotjar.com/legal/policies/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Политика конфиденциальности Hotjar
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/privacy/policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Политика конфиденциальности Facebook
                    </a>
                  </li>
                </ul>
              </div>

              {/* Your Rights */}
              <div id="your-rights" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  6. Ваши права на конфиденциальность
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  6.1 GDPR (резиденты Европейского союза)
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Если вы находитесь в Европейском союзе, у вас есть следующие права:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Право на доступ к своим персональным данным</li>
                  <li>Право на исправление неточных данных</li>
                  <li>Право на удаление («право быть забытым»)</li>
                  <li>Право на ограничение обработки</li>
                  <li>Право на переносимость данных</li>
                  <li>Право возражать против обработки</li>
                  <li>Право отозвать согласие</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  6.2 CCPA (резиденты Калифорнии)
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Если вы являетесь резидентом Калифорнии, у вас есть следующие права в соответствии с
                  Законом Калифорнии о защите прав потребителей (CCPA):
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Право знать, какая персональная информация собирается</li>
                  <li>Право знать, продаётся ли или раскрывается ли персональная информация</li>
                  <li>Право отказаться от продажи персональной информации</li>
                  <li>Право на удаление персональной информации</li>
                  <li>Право на отсутствие дискриминации за реализацию своих прав</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  <strong>Примечание:</strong> Мы не продаём вашу персональную информацию.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Как реализовать свои права
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Чтобы реализовать любое из этих прав, пожалуйста, свяжитесь с нами по адресу{" "}
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-primary-600 hover:underline">
                    {siteConfig.contact.email}
                  </a>
                  . Мы ответим на ваш запрос в течение 30 дней.
                </p>
              </div>

              {/* Contact */}
              <div id="contact" className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">7. Свяжитесь с нами</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Если у вас есть вопросы об этой Политике конфиденциальности или о наших практиках
                  конфиденциальности, пожалуйста, свяжитесь с нами:
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

              {/* Updates */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Изменения этой Политики</h3>
                <p className="text-sm text-neutral-700">
                  Мы можем время от времени обновлять настоящую Политику конфиденциальности. Мы уведомим вас
                  о любых изменениях, разместив новую Политику конфиденциальности на этой странице и обновив
                  дату «Последнее обновление». Мы рекомендуем периодически просматривать эту Политику
                  конфиденциальности.
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
