import { Section, Container, GlassCard } from "@/components/sections"
import { siteConfig } from "@/constants/siteConfig"
import PageHero from "@/components/PageHero"

export const metadata = {
  title: "Условия использования | Dr. Antipov",
  description:
    "Условия использования сайта доктора Александра Антипова. Пожалуйста, внимательно прочитайте эти условия перед использованием нашего сайта.",
  robots: "index, follow",
  alternates: {
    canonical: "/ru/legal/terms-of-service",
    languages: {
      ru: "/ru/legal/terms-of-service",
      en: "/legal/terms-of-service",
      "x-default": "/legal/terms-of-service"
    }
  }
}

export default function TermsOfServicePage() {
  const lastUpdated = "12 октября 2025"

  return (
    <>
      <PageHero
        image="/images/landing-pages/dental-implants/art/pattern-background01-5a7afc40.jpg"
        eyebrow="Юридическое"
        title="Условия использования"
        subtitle="Правила и условия использования сайта и услуг."
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
                    <a href="#acceptance" className="text-primary-600 hover:underline">
                      Принятие условий
                    </a>
                  </li>
                  <li>
                    <a href="#use-of-website" className="text-primary-600 hover:underline">
                      Использование сайта
                    </a>
                  </li>
                  <li>
                    <a href="#intellectual-property" className="text-primary-600 hover:underline">
                      Права на интеллектуальную собственность
                    </a>
                  </li>
                  <li>
                    <a href="#user-content" className="text-primary-600 hover:underline">
                      Контент, отправляемый пользователями
                    </a>
                  </li>
                  <li>
                    <a href="#disclaimers" className="text-primary-600 hover:underline">
                      Отказ от гарантий
                    </a>
                  </li>
                  <li>
                    <a href="#limitation" className="text-primary-600 hover:underline">
                      Ограничение ответственности
                    </a>
                  </li>
                  <li>
                    <a href="#governing-law" className="text-primary-600 hover:underline">
                      Применимое право
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-primary-600 hover:underline">
                      Контактная информация
                    </a>
                  </li>
                </ol>
              </div>

              {/* Introduction */}
              <p className="text-neutral-700 leading-relaxed mb-8">
                Добро пожаловать на сайт доктора Александра Антипова. Настоящие Условия использования
                («Условия») регулируют ваш доступ к{" "}
                <a href={siteConfig.url} className="text-primary-600 hover:underline">
                  нашему сайту
                </a>{" "}
                и его использование. Получая доступ к этому сайту или используя его, вы соглашаетесь
                соблюдать настоящие Условия. Если вы не согласны с этими Условиями, пожалуйста, не
                используйте этот сайт.
              </p>

              {/* Acceptance of Terms */}
              <div id="acceptance" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  1. Принятие условий
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Получая доступ к этому сайту, вы подтверждаете, что:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Вам не менее 18 лет</li>
                  <li>Вы обладаете правоспособностью заключать обязывающие соглашения</li>
                  <li>
                    Вы соглашаетесь соблюдать все применимые местные, региональные, национальные и
                    международные законы и нормы
                  </li>
                  <li>Вы принимаете настоящие Условия в полном объёме</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Мы оставляем за собой право изменять настоящие Условия в любое время. Продолжение
                  использования сайта после публикации изменений означает ваше согласие с изменёнными
                  Условиями.
                </p>
              </div>

              {/* Use of Website */}
              <div id="use-of-website" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  2. Использование сайта
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">2.1 Разрешённое использование</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Вы можете использовать этот сайт только в законных целях, включая:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Просмотр информации о наших услугах</li>
                  <li>Запрос записи на консультацию</li>
                  <li>Обращение в наш офис</li>
                  <li>Доступ к образовательным материалам</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">2.2 Запрещённое использование</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">Вы соглашаетесь НЕ:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    Использовать сайт в любых незаконных целях или для побуждения к незаконной деятельности
                  </li>
                  <li>
                    Пытаться получить несанкционированный доступ к нашим системам, сетям или данным
                  </li>
                  <li>
                    Вмешиваться в работу сайта или серверов или нарушать её
                  </li>
                  <li>
                    Передавать вирусы, вредоносное ПО или другой вредоносный код
                  </li>
                  <li>
                    Собирать, сканировать или извлекать данные с сайта без разрешения
                  </li>
                  <li>
                    Выдавать себя за другое лицо или организацию либо искажать свою принадлежность
                  </li>
                  <li>
                    Использовать автоматизированные системы (боты, парсеры) для доступа к сайту
                  </li>
                  <li>
                    Воспроизводить, распространять или изменять контент сайта без разрешения
                  </li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div id="intellectual-property" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  3. Права на интеллектуальную собственность
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Весь контент на этом сайте, включая, помимо прочего, текст, графику, логотипы,
                  изображения, видео, аудиозаписи и программное обеспечение, является собственностью
                  доктора Александра Антипова или его поставщиков контента и защищён законодательством США
                  и международными законами об авторском праве.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Компиляция всего контента на этом сайте является исключительной собственностью доктора
                  Александра Антипова и защищена законодательством США и международными законами об
                  авторском праве.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Вы не вправе использовать, воспроизводить, распространять, передавать, транслировать,
                  отображать, продавать, лицензировать или иным образом эксплуатировать любой контент в
                  коммерческих целях без нашего предварительного письменного согласия.
                </p>
              </div>

              {/* User Content */}
              <div id="user-content" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  4. Контент, отправляемый пользователями
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Если вы отправляете какой-либо контент через наш сайт (например, запросы на консультацию,
                  контактные формы или комментарии), вы предоставляете нам неисключительную, безвозмездную,
                  бессрочную и всемирную лицензию на использование, воспроизведение, изменение и
                  распространение такого контента в целях оказания наших услуг и улучшения нашего сайта.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">Вы заявляете и гарантируете, что:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Вы владеете или обладаете необходимыми правами на отправляемый контент</li>
                  <li>Ваш контент не нарушает прав третьих лиц</li>
                  <li>Ваш контент не содержит незаконных, вредоносных или оскорбительных материалов</li>
                  <li>Ваш контент точен и не вводит в заблуждение</li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                  <p className="text-sm text-neutral-800 font-medium">
                    <strong>Важно:</strong> Не отправляйте защищённую медицинскую информацию (PHI) или
                    конфиденциальные медицинские записи через наш сайт. Наши формы предназначены только для
                    общих обращений и запросов на консультацию.
                  </p>
                </div>
              </div>

              {/* Disclaimers */}
              <div id="disclaimers" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  5. Отказ от гарантий
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  ЭТОТ САЙТ ПРЕДОСТАВЛЯЕТСЯ «КАК ЕСТЬ» И «ПО МЕРЕ ДОСТУПНОСТИ» БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ,
                  ПРЯМЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ, ПОМИМО ПРОЧЕГО:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Подразумеваемые гарантии товарной пригодности</li>
                  <li>Пригодность для определённой цели</li>
                  <li>Отсутствие нарушений прав</li>
                  <li>Точность, полноту или надёжность контента</li>
                  <li>Доступность, своевременность или безопасность сайта</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Мы не гарантируем, что:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Сайт будет работать бесперебойно или без ошибок</li>
                  <li>Дефекты будут устранены</li>
                  <li>Сайт свободен от вирусов или иных вредоносных компонентов</li>
                  <li>Результаты, полученные при использовании сайта, будут точными или надёжными</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Использование сайта осуществляется исключительно на ваш риск. Вы несёте ответственность
                  за принятие мер защиты своих данных и систем.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div id="limitation" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  6. Ограничение ответственности
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  В МАКСИМАЛЬНОЙ СТЕПЕНИ, ДОПУСКАЕМОЙ ЗАКОНОМ, ДОКТОР АЛЕКСАНДР АНТИПОВ, ЕГО СОТРУДНИКИ,
                  АГЕНТЫ, АФФИЛИРОВАННЫЕ ЛИЦА И ПАРТНЁРЫ НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ЗА ЛЮБОЙ ПРЯМОЙ, КОСВЕННЫЙ,
                  СЛУЧАЙНЫЙ, ОСОБЫЙ, ПОСЛЕДУЮЩИЙ ИЛИ ШТРАФНОЙ УЩЕРБ, ВОЗНИКШИЙ В РЕЗУЛЬТАТЕ ИЛИ В СВЯЗИ С:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Использованием или невозможностью использования сайта</li>
                  <li>Любыми ошибками, упущениями или неточностями в контенте сайта</li>
                  <li>Несанкционированным доступом к вашим данным или их изменением</li>
                  <li>Заявлениями или поведением любого третьего лица на сайте</li>
                  <li>Любым иным вопросом, связанным с сайтом</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Это ограничение применяется независимо от того, основана ли предполагаемая ответственность
                  на договоре, деликте, небрежности, строгой ответственности или ином основании, даже если
                  нас уведомили о возможности такого ущерба.
                </p>
              </div>

              {/* Governing Law */}
              <div id="governing-law" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  7. Применимое право и разрешение споров
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Настоящие Условия регулируются и толкуются в соответствии с законодательством штата
                  Калифорния, без учёта его коллизионных норм.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Любые споры, возникающие из настоящих Условий или вашего использования сайта либо
                  связанные с ними, разрешаются в судах штата или федеральных судах, расположенных в округе
                  Плейсер, Калифорния. Вы соглашаетесь с исключительной юрисдикцией и подсудностью таких
                  судов.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Делимость положений</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Если какое-либо положение настоящих Условий будет признано недействительным или не
                  имеющим исковой силы, остальные положения сохраняют полную силу и действие.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Полнота соглашения</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Настоящие Условия вместе с нашей Политикой конфиденциальности и Медицинским дисклеймером
                  составляют полное соглашение между вами и доктором Александром Антиповым в отношении
                  использования вами этого сайта.
                </p>
              </div>

              {/* Contact */}
              <div id="contact" className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  8. Контактная информация
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Если у вас есть вопросы об этих Условиях использования, пожалуйста, свяжитесь с нами:
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
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Изменения этих Условий</h3>
                <p className="text-sm text-neutral-700">
                  Мы оставляем за собой право обновлять или изменять настоящие Условия в любое время без
                  предварительного уведомления. Продолжение использования сайта после внесения любых таких
                  изменений означает ваше согласие с новыми Условиями. Мы рекомендуем периодически
                  просматривать эти Условия.
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
