import { Section, Container, GlassCard } from "@/components/sections"
import { siteConfig } from "@/constants/siteConfig"
import { Shield, Info } from "lucide-react"
import PageHero from "@/components/PageHero"

export const metadata = {
  title: "Уведомление о практиках конфиденциальности (HIPAA) | Dr. Antipov",
  description:
    "Уведомление о практиках конфиденциальности (HIPAA) практики доктора Александра Антипова. Узнайте, как мы защищаем вашу медицинскую информацию.",
  robots: "index, follow",
  alternates: {
    canonical: "/ru/legal/hipaa-notice",
    languages: {
      ru: "/ru/legal/hipaa-notice",
      en: "/legal/hipaa-notice",
      "x-default": "/legal/hipaa-notice"
    }
  }
}

export default function HIPAANoticePage() {
  const effectiveDate = "12 октября 2025"

  return (
    <>
      <PageHero
        image="/images/landing-pages/dental-implants/art/pattern-background01-5a7afc40.jpg"
        eyebrow="Юридическое"
        title="Уведомление о практиках конфиденциальности (HIPAA)"
        subtitle="Ваши права и наши обязанности в отношении защищённой медицинской информации."
        overlay="navy"
      />

      {/* Main Content */}
      <Section background="default" padding="xl">
        <Container size="md">
          <GlassCard className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Important Website Notice */}
              <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="h-6 w-6" />
                  Важно: этот сайт НЕ собирает защищённую медицинскую информацию
                </h2>
                <p className="text-blue-900 font-medium leading-relaxed mb-3">
                  Этот сайт предназначен только для информационных целей и запросов на консультацию. Мы НЕ
                  собираем защищённую медицинскую информацию (PHI) через этот сайт.
                </p>
                <p className="text-blue-900 leading-relaxed">
                  <strong>Не отправляйте:</strong> медицинские записи, сведения о диагнозе, историю лечения,
                  данные страхования или иную конфиденциальную медицинскую информацию через формы на нашем
                  сайте. Эти формы предназначены только для записи на консультации и общих обращений.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-neutral-50 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Содержание</h2>
                <ol className="space-y-2 list-decimal list-inside text-neutral-700">
                  <li>
                    <a href="#overview" className="text-primary-600 hover:underline">
                      Обзор
                    </a>
                  </li>
                  <li>
                    <a href="#uses-disclosures" className="text-primary-600 hover:underline">
                      Как мы используем и раскрываем PHI
                    </a>
                  </li>
                  <li>
                    <a href="#your-rights" className="text-primary-600 hover:underline">
                      Ваши права в отношении вашей медицинской информации
                    </a>
                  </li>
                  <li>
                    <a href="#our-responsibilities" className="text-primary-600 hover:underline">
                      Наши юридические обязанности и ответственность
                    </a>
                  </li>
                  <li>
                    <a href="#changes" className="text-primary-600 hover:underline">
                      Изменения этого Уведомления
                    </a>
                  </li>
                  <li>
                    <a href="#complaints" className="text-primary-600 hover:underline">
                      Жалобы
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-primary-600 hover:underline">
                      Контактная информация
                    </a>
                  </li>
                </ol>
              </div>

              {/* Overview */}
              <div id="overview" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">1. Обзор</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Настоящее Уведомление о практиках конфиденциальности описывает, как медицинская
                  информация о вас может использоваться и раскрываться нашей практикой и как вы можете
                  получить доступ к этой информации.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  <strong>Пожалуйста, внимательно ознакомьтесь с этим уведомлением.</strong> Закон обязывает
                  нас:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Обеспечивать конфиденциальность защищённой медицинской информации (PHI)</li>
                  <li>Предоставлять вам это уведомление о наших юридических обязанностях и практиках конфиденциальности</li>
                  <li>Соблюдать условия уведомления, действующего в настоящее время</li>
                  <li>Уведомлять вас в случае нарушения безопасности незащищённой PHI</li>
                </ul>

                <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Что такое защищённая медицинская информация (PHI)?
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    PHI включает информацию из вашей медицинской карты, которая может вас идентифицировать,
                    например ваше имя, адрес, историю болезни, записи о лечении, диагнозы, результаты
                    анализов и сведения о выставленных счетах. Это уведомление распространяется на все
                    записи о вашем лечении, созданные нашей практикой.
                  </p>
                </div>
              </div>

              {/* Uses and Disclosures */}
              <div id="uses-disclosures" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  2. Как мы можем использовать и раскрывать вашу медицинскую информацию
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Мы будем использовать и раскрывать вашу PHI только в случаях, разрешённых законом.
                  Следующие категории описывают способы, которыми мы можем использовать и раскрывать вашу
                  информацию.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">2.1 Лечение</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Мы будем использовать и раскрывать вашу PHI для предоставления, координации и организации
                  вашего медицинского обслуживания и связанных с ним услуг. Например:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    Обмен информацией с направившим вас стоматологом о вашей операции и послеоперационном уходе
                  </li>
                  <li>Консультации со специалистами по вашему плану лечения</li>
                  <li>Координация лабораторных работ, визуализации или патологических исследований</li>
                  <li>Предоставление информации анестезиологам для процедур седации</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">2.2 Оплата</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Мы можем использовать и раскрывать вашу PHI для получения оплаты за услуги. Например:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Подача заявок в вашу страховую компанию</li>
                  <li>Проверка страхового покрытия и льгот</li>
                  <li>Получение предварительного разрешения на процедуры</li>
                  <li>Ответы на страховые аудиты или запросы документации</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">2.3 Операционная деятельность медицинской практики</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Мы можем использовать и раскрывать вашу PHI для операционной деятельности медицинской
                  практики, включая:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Деятельность по повышению качества и обеспечению безопасности пациентов</li>
                  <li>Обучение и подготовку персонала</li>
                  <li>Бизнес-планирование и управление</li>
                  <li>Программы соответствия требованиям и аккредитации</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  2.4 Иные разрешённые виды использования и раскрытия (без вашего согласия)
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Мы можем использовать или раскрывать вашу PHI без вашего письменного разрешения в
                  следующих ситуациях:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    <strong>Как требует закон:</strong> когда этого требует федеральное, штатное или местное
                    законодательство
                  </li>
                  <li>
                    <strong>Деятельность в сфере общественного здравоохранения:</strong> для предотвращения
                    или контроля заболеваний, травм или инвалидности
                  </li>
                  <li>
                    <strong>Надзор в сфере здравоохранения:</strong> для аудитов, расследований, проверок
                    или лицензирования
                  </li>
                  <li>
                    <strong>Судебные и административные процессы:</strong> в ответ на судебные постановления
                    или повестки
                  </li>
                  <li>
                    <strong>Правоохранительные органы:</strong> когда этого требуют сотрудники
                    правоохранительных органов
                  </li>
                  <li>
                    <strong>Серьёзные угрозы:</strong> для предотвращения серьёзной угрозы здоровью или
                    безопасности
                  </li>
                  <li>
                    <strong>Компенсация работникам:</strong> как это разрешено законами о компенсации
                    работникам
                  </li>
                  <li>
                    <strong>Коронеры и судебно-медицинские эксперты:</strong> для идентификации или
                    установления причины смерти
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  2.5 Виды использования и раскрытия, требующие вашего согласия
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Мы будем получать ваше письменное согласие на:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>
                    <strong>Маркетинговые цели:</strong> любые маркетинговые сообщения (в настоящее время мы
                    не занимаемся маркетингом)
                  </li>
                  <li>
                    <strong>Продажу PHI:</strong> раскрытие за вознаграждение (мы не продаём PHI)
                  </li>
                  <li>
                    <strong>Записи психотерапии:</strong> если применимо
                  </li>
                  <li>
                    <strong>Иные виды использования:</strong> любое использование или раскрытие, не
                    описанное в этом уведомлении
                  </li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Вы можете отозвать любое согласие в письменной форме в любое время. Однако мы не можем
                  отозвать раскрытия, уже сделанные с вашего согласия.
                </p>
              </div>

              {/* Your Rights */}
              <div id="your-rights" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  3. Ваши права в отношении вашей медицинской информации
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  В отношении вашей PHI у вас есть следующие права:
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">3.1 Право на доступ</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Вы имеете право просматривать и получать копию своих медицинских записей. Запросы должны
                  подаваться в письменной форме. Мы можем взимать разумную плату за копирование и почтовые
                  расходы.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">3.2 Право на внесение исправлений</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Если вы считаете, что ваша медицинская информация неверна или неполна, вы можете запросить
                  внесение исправлений. В определённых ситуациях мы можем отклонить ваш запрос, но
                  предоставим вам письменное объяснение.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">3.3 Право на отчёт о раскрытиях</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Вы имеете право запросить «отчёт о раскрытиях» — список определённых раскрытий вашей PHI,
                  которые мы осуществили. Сюда не входят раскрытия в целях лечения, оплаты или операционной
                  деятельности медицинской практики.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  3.4 Право запрашивать ограничения
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Вы можете запросить ограничения на то, как мы используем или раскрываем вашу PHI. Мы не
                  обязаны соглашаться с вашим запросом, за исключением определённых ситуаций, связанных с
                  оплатой страховым планам.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  3.5 Право на конфиденциальные коммуникации
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Вы имеете право просить нас связываться с вами по поводу вашей медицинской информации
                  определённым способом или в определённом месте. Мы будем удовлетворять разумные запросы.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  3.6 Право на бумажную копию этого Уведомления
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Вы имеете право получить бумажную копию этого уведомления в любое время, даже если вы
                  согласились получать его в электронном виде. Чтобы запросить копию, обратитесь в наш офис.
                </p>
              </div>

              {/* Our Responsibilities */}
              <div id="our-responsibilities" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  4. Наши юридические обязанности и ответственность
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">Закон обязывает нас:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Обеспечивать конфиденциальность и безопасность вашей PHI</li>
                  <li>Предоставлять это уведомление о наших практиках конфиденциальности</li>
                  <li>Соблюдать условия уведомления, действующего в настоящее время</li>
                  <li>
                    Незамедлительно уведомлять вас, если произойдёт нарушение, которое могло поставить под
                    угрозу конфиденциальность или безопасность вашей информации
                  </li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mb-4">Мы не будем:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Использовать или раскрывать вашу информацию без согласия, кроме случаев, описанных в этом уведомлении</li>
                  <li>Продавать вашу PHI</li>
                  <li>Использовать или раскрывать PHI в маркетинговых целях без вашего согласия</li>
                  <li>Передавать вашу информацию неуполномоченным сторонам</li>
                </ul>
              </div>

              {/* Changes */}
              <div id="changes" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  5. Изменения этого Уведомления
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Мы оставляем за собой право изменять это уведомление в любое время и применять
                  пересмотренное уведомление ко всей PHI, которую мы храним. Если мы внесём существенные
                  изменения, мы:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6">
                  <li>Разместим пересмотренное уведомление в нашем офисе</li>
                  <li>Предоставим копии по запросу</li>
                  <li>Разместим действующее уведомление на нашем сайте</li>
                </ul>
              </div>

              {/* Complaints */}
              <div id="complaints" className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">6. Жалобы</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Если вы считаете, что ваши права на конфиденциальность были нарушены, вы можете подать
                  жалобу:
                </p>

                <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">Наша практика</h3>
                  <p className="text-neutral-700 mb-2">{siteConfig.name}</p>
                  <p className="text-neutral-700 mb-1">{siteConfig.contact.address.street}, {siteConfig.contact.address.suite}</p>
                  <p className="text-neutral-700 mb-2">
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
                    {siteConfig.contact.address.zip}
                  </p>
                  <p className="text-neutral-700">
                    Эл. почта:{" "}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-primary-600 hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    Министерство здравоохранения и социальных служб США
                  </h3>
                  <p className="text-neutral-700 mb-2">Управление по гражданским правам</p>
                  <p className="text-neutral-700 mb-2">
                    Сайт:{" "}
                    <a
                      href="https://www.hhs.gov/ocr/complaints/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      www.hhs.gov/ocr/complaints/index.html
                    </a>
                  </p>
                  <p className="text-neutral-700">Телефон: 1-877-696-6775</p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="text-sm text-green-900 font-medium">
                    <strong>Без преследования:</strong> Вас не накажут и не подвергнут преследованию за
                    подачу жалобы.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div id="contact" className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  7. Контактная информация
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  По вопросам об этом уведомлении, для реализации своих прав или для подачи жалобы,
                  пожалуйста, обращайтесь:
                </p>
                <div className="bg-neutral-50 rounded-xl p-6">
                  <p className="text-neutral-900 font-semibold mb-2">Сотрудник по вопросам конфиденциальности</p>
                  <p className="text-neutral-700 mb-2">{siteConfig.name}</p>
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

              {/* Acknowledgment */}
              <div className="bg-primary-50 border-2 border-primary-500 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Подтверждение</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  На вашем первом приёме вас попросят подписать подтверждение о том, что вы получили это
                  Уведомление о практиках конфиденциальности. Это подтверждение будет храниться в вашей
                  медицинской карте.
                </p>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </>
  )
}
