/**
 * RU dictionary for the AI Forms cost-calculator content that comes from the
 * DentalPrice API in English (step/component names, descriptions, insurance
 * plan names). This is "Option B" from Phase 3: a curated translation
 * dictionary maintained in our own code, keyed by the stable step/component
 * id from DentalPrice so it survives minor English copy edits on their side
 * without breaking (falls back to the original English text if an id/field
 * isn't in the dictionary yet - never crashes, never shows blank).
 *
 * A handful of ids are reused across packages with DIFFERENT English text
 * (currently only "auto_client_form": "Get Your Cost Estimate" on All-on-4 /
 * Single Implant vs "Contact Information" on Zirconia / Snap-in-Denture).
 * Those are keyed as `${id}::${trimmed original text}` so both variants
 * translate correctly; everything else is keyed by plain id.
 */

export type FunnelLocale = "en" | "ru";

interface Entry {
  name?: string;
  description?: string;
}

const DICT: Record<string, Entry> = {
  /* ---------- Shared across every package ---------- */
  auto_insurance: {
    name: "Информация о страховке",
    description:
      "Укажите вашу страховую программу, и мы проверим, какие льготы и покрытие могут быть доступны для вашего лечения",
  },
  auto_financing: {
    name: "Варианты оплаты",
    description: "Выберите удобный для вас способ оплаты",
  },
  one_time_payment: {
    name: "💵 Оплата всей суммой",
    description: "Оплатите всю сумму сразу - при полной оплате действуют скидки",
  },
  monthly_payments: {
    name: "💰 Помесячная оплата",
    description: "Сделайте лечение доступнее с гибкими вариантами рассрочки",
  },
  "auto_client_form::Get Your Cost Estimate": {
    name: "Получите расчёт стоимости",
    description:
      "Получите предварительный расчёт стоимости в PDF с вариантами лечения и текущими акциями. Итоговая цена определяется на консультации",
  },
  "auto_client_form::Contact Information": {
    name: "Контактная информация",
    description: "Оставьте свои контакты, чтобы получить подробную информацию по вашему запросу и доступным вариантам",
  },
  promotions_header: {
    name: "Специальные предложения и акции",
    description: "Выберите доступные акции и скидки",
  },
  no_promotions: {
    name: "Без спецпредложений",
    description: "Продолжить без специальных акций",
  },

  /* ---------- All-on-4/6/8 ---------- */
  step_1756696622269: {
    name: "Диагностика и план лечения",
    description:
      "Первый и самый важный шаг к новой улыбке. Чтобы составить точный план лечения и назвать окончательную стоимость, нам нужно разобраться в вашей ситуации. Этот бесплатный визит объединяет три ключевых обследования:",
  },
  comp_1756696632512: { name: "👨‍⚕️ Консультация врача", description: "Личная встреча с вашим имплантологом" },
  comp_1756920224931: { name: "🩻 КТ-снимок (3D)", description: "Трёхмерное изображение челюсти и лицевых структур" },
  comp_1756920243026: {
    name: "🖥️ Цифровое сканирование / слепок",
    description: "Точная цифровая модель полости рта за несколько минут",
  },
  step_1756696641060: {
    name: "Выбор импланта",
    description:
      "Выберите основу вашей новой улыбки. Качество импланта влияет на стоимость, точность установки, срок службы и гарантию.",
  },
  comp_1756938242473: {
    name: "All-on-4 - вся челюсть",
    description: "Полное восстановление челюсти на 4 имплантах - зубы в тот же день",
  },
  comp_1784748694358: {
    name: "Закись азота",
    description: "Лёгкая ингаляционная седация (веселящий газ) - помогает расслабиться.",
  },
  comp_1756938250306: {
    name: "All-on-6 - вся челюсть",
    description: "Премиальное восстановление челюсти на 6 имплантах для максимальной стабильности",
  },
  comp_1756938253998: {
    name: "Имплантация All-on-8 (на одну челюсть)",
    description: "✅ Восстановление всей челюсти на 8 имплантах для максимальной опоры",
  },
  step_1756938186957: {
    name: "Временные зубы в день операции",
    description: "Полноценные функциональные зубы сразу после операции благодаря 3D-печати",
  },
  comp_1756938332114: {
    name: "3D-печатная полная зубная дуга",
    description: "✅ Полный несъёмный ряд зубов на всю челюсть",
  },
  step_1756938423068: {
    name: "Удаление зубов",
    description: "Удаление зубов или корней, которые мешают установке имплантов. Пропустите этот шаг, если он вам не нужен.",
  },
  comp_1756938511868: {
    name: "Полное удаление зубов на челюсти (при необходимости)",
    description: "✅ Удаление всех оставшихся зубов на обрабатываемой челюсти",
  },
  step_1756939165308: {
    name: "Седация и анестезия",
    description: "Варианты обезболивания и седации с учётом ваших потребностей и сложности процедуры.",
  },
  comp_1756943900733: { name: "Местная анестезия", description: "Обезболивает область лечения для безболезненной операции" },
  comp_1756943911337: {
    name: "Внутривенная седация",
    description: "Глубокая седация или общий наркоз для максимального комфорта",
  },
  step_1756943962544: {
    name: "Подготовка тканей (костная пластика и мягкие ткани)",
    description:
      "Восстановление кости или десны при недостатке тканей:\n- костная пластика добавляет объём для опоры импланта\n- наращивание мягких тканей утолщает и укрепляет десну\nРекомендуется при атрофии костного гребня или истончении тканей.",
  },
  comp_1756944527246: {
    name: "Костная пластика",
    description: "Добавляет костную ткань для опоры и стабилизации импланта",
  },
  comp_1756944535954: {
    name: "Синус-лифтинг",
    description: "Приподнимает дно пазухи, создавая место для установки импланта",
  },
  comp_1756944544158: {
    name: "Мембрана",
    description: "Барьер, который используется вместе с костной пластикой для защиты и стабилизации места пересадки",
  },
  step_1756939051700: {
    name: "📆 Ваши сроки",
    description: "✅ Когда вы планируете начать лечение? Это поможет нам подобрать оптимальный план",
  },
  comp_1756939078204: { name: "📆 Готов(а) начать сегодня", description: "✳️ Нужно начать как можно скорее" },
  comp_1756939110859: { name: "🦷 В течение месяца", description: "✳️ Планирую начать в ближайшее время" },
  comp_1756939118797: { name: "⁉️ Пока изучаю варианты", description: "✳️ Собираю информацию для решения" },
  comp_1756939126600: { name: "＄Зависит от цены", description: "✳️ Решение зависит от стоимости и рассрочки" },
  "0b6c5077-cda0-4af2-945d-7a098ba528c2": {
    name: "СКИДКА НА 2 ЧЕЛЮСТИ",
    description:
      "Экономия при лечении обеих челюстей. Скидка растёт вместе со сложностью случая, числом имплантов (All-on-6/8) и дополнительными процедурами. Ваш координатор рассчитает максимальную скидку для вашего плана лечения.",
  },
  "45f9e51b-a6a2-4d2f-8e30-230dfcaa5a14": {
    name: "0% на 24 месяца",
    description:
      "Без процентов при полной оплате в течение 24 месяцев!\n✓ Минимальная сумма рассрочки $1,000\n✓ Требуется хорошая кредитная история (680+)\n✓ Мгновенное одобрение доступно\n✓ Требуются ежемесячные платежи\nПроценты начисляются с даты покупки, если остаток не погашен полностью к концу акционного периода. Подлежит кредитному одобрению.",
  },

  /* ---------- Single Implant ---------- */
  "9162aacb-c615-409d-982f-0e0186af0298": {
    name: "Диагностика и план лечения",
    description:
      "Первый и самый важный шаг к новой улыбке. Чтобы составить точный план лечения и назвать окончательную стоимость, нам нужно разобраться в вашей ситуации. Этот бесплатный визит объединяет три ключевых обследования:",
  },
  "0cfc9543-8a3a-467a-b22a-041beaf06400": { name: "Консультация врача", description: "Личная встреча с вашим имплантологом" },
  "3f652000-6107-4d53-b977-f9a2e426d9ef": { name: "КТ-снимок (CBCT)", description: "Трёхмерное изображение челюсти и лицевых структур" },
  "65182175-74cf-44ad-8ced-44b72c0c1e7a": {
    name: "Цифровое сканирование / слепок",
    description: "Точная модель полости рта за несколько минут",
  },
  "d388982f-4d80-41b0-9a2c-a89fcffb8144": {
    name: "Выбор импланта",
    description:
      "Выберите основу вашей новой улыбки. Качество импланта влияет на стоимость, точность установки, срок службы и гарантию.",
  },
  comp_1755622753414: {
    name: "Одиночный зубной имплант",
    description: "Восстановление одного отсутствующего зуба постоянным титановым имплантом с коронкой",
  },
  "c9598236-7fd7-456f-ba65-895e44107fb6": {
    name: "Выбор абатмента",
    description:
      "Абатмент соединяет имплант с коронкой или мостом. Правильный выбор зависит от положения импланта, угла наклона и эстетических задач.",
  },
  "cf9e0c31-8f94-40c2-9ace-6cba40b28b4e": {
    name: "Базовый абатмент",
    description: "Стандартный титановый абатмент, включён в стоимость пакета",
  },
  "368a030d-0640-4902-8718-8cbe360cf50b": {
    name: "Циркониевый абатмент",
    description: "Белый циркониевый абатмент для более естественной эстетики",
  },
  "c041840d-eaec-4ec4-b978-269c34ae8e9d": {
    name: "Выбор коронки",
    description: "Выберите материал финальной коронки или моста:",
  },
  "79a5d06b-e77f-4f7f-9c49-e0674c00685d": {
    name: "Временная композитная коронка (за единицу, при немедленной нагрузке)",
    description: "Временная коронка для функции сразу после операции",
  },
  "5105c8b9-520e-4324-b35c-1d69dc29e774": {
    name: "Металлокерамическая коронка (PFM)",
    description: "Фарфор на металлической основе - прочность и классическая эстетика.",
  },
  "ae7ceece-8fed-45e0-8727-a62f5ceb67c5": {
    name: "Циркониевая коронка (за единицу)",
    description: "Прочная, высокоэстетичная безметалловая коронка",
  },
  step_1755112237690: {
    name: "Удаление зубов",
    description: "Удаление зубов или корней, которые мешают установке имплантов. Пропустите этот шаг, если он вам не нужен.",
  },
  comp_1755112276430: {
    name: "Простое удаление (за зуб)",
    description: "Удаление подвижного или несложного зуба",
  },
  comp_1756949862002: {
    name: "Хирургическое удаление",
    description: "Удаление сломанного или ретинированного зуба с отслаиванием десны",
  },
  step_1756609477653: {
    name: "Седация и анестезия",
    description: "Варианты обезболивания и седации с учётом ваших потребностей и сложности процедуры.",
  },
  comp_1756609520920: { name: "Местная анестезия", description: "Обезболивает область лечения для безболезненной операции" },
  comp_1756609529883: {
    name: "Закись азота",
    description: "Лёгкая ингаляционная седация для расслабления",
  },
  comp_1756609538137: {
    name: "Внутривенная седация",
    description: "Глубокая седация или общий наркоз для максимального комфорта",
  },
  step_1755199145983: {
    name: "Ваши сроки",
    description: "Когда вы планируете начать лечение? Это поможет нам подобрать оптимальный план",
  },
  comp_1755199165025: { name: "Готов(а) начать сегодня", description: "Нужно начать как можно скорее" },
  comp_1755199177228: { name: "В течение месяца", description: "Планирую начать в ближайшее время" },
  comp_1755276143335: { name: "Пока изучаю варианты", description: "Собираю информацию для решения" },
  comp_1755276155294: { name: "Зависит от цены", description: "Решение зависит от стоимости и рассрочки" },
  "8be18e6a-d97a-42bc-9f3b-d614f6373d1e": {
    name: "Рождественская скидка",
    description: "Специальная рождественская акция",
  },
  "a05d91ff-26aa-4dce-a7e4-210f16e26f9c": {
    name: "Для новых пациентов",
    description: "Скидка для новых пациентов",
  },

  /* ---------- Insurance plans (shared across packages) ---------- */
  "c494a5ef-05e6-4498-803e-b3492d9ac371": {
    name: "Medicare / Medicaid",
    description: "Государственная медицинская страховка",
  },
  "424c0cb3-b9e6-47c0-81f1-b504dd51748c": {
    name: "План PPO",
    description: "Стоматологическая страховка типа Preferred Provider Organization",
  },
  "5fb89630-9afe-41f2-9b98-04e4ee182711": {
    name: "DHMO",
    description: "Dental Health Maintenance Organization - стоматологическая страховка с прикреплением к сети клиник",
  },
  "2c43c7f9-a13c-400d-84e0-9dc87dc72d80": {
    name: "Оплата без страховки",
    description: "Прямая оплата без участия страховой компании",
  },

  /* ---------- Supplemental steps (Zirconia Teeth / Snap-in Denture) ---------- */
  // DentalPrice "Prosthesis Options" steps + priced components added 2026-07-20
  // for Zirconia Teeth ($8,999) and Snap-in Denture ($9,999).
  step_1784587663159: {
    name: "Финальные зубы - материал",
    description:
      "Ваши финальные зубы на имплантах. Выберите материал - от него зависят прочность, внешний вид и стоимость. Цена за одну челюсть.",
  },
  comp_1784587716850: {
    name: "Цирконий (керамика) - за челюсть",
    description:
      "Премиальный монолитный цирконий - самый прочный и естественный вариант. Устойчив к сколам и окрашиванию, рассчитан на долгие годы ежедневной нагрузки. Цена за одну челюсть.",
  },
  comp_1785184587967: {
    name: "Акрил PMMA - за челюсть",
    description:
      "Акриловые зубы на усиленном каркасе - самый доступный вариант на всю челюсть. Легче по весу, проще в ремонте и коррекции, но служит меньше циркония. Цена за одну челюсть.",
  },
  comp_1785184687042: {
    name: "Балочная конструкция (Thimble Bar) - за челюсть",
    description:
      "Титановый каркас с отдельными фарфоровыми коронками - премиальный вариант. Каждый зуб отдельная коронка на фрезерованной титановой балке, поэтому один зуб можно заменить, не переделывая всю челюсть. Цена за одну челюсть.",
  },
  step_1784587842790: {
    name: "Выбор протеза",
    description: "Выберите вариант протеза:",
  },
  comp_1784587912428: {
    name: "Съёмный протез на кнопках (за челюсть)",
    description: "Надёжный протез на имплантах, который не соскальзывает и не смещается.",
  },
  supp_zirconia_base: {
    name: "Циркониевый протез на всю челюсть (за челюсть)",
    description: "Премиальный монолитный циркониевый протез на имплантах - за одну челюсть.",
  },
  supp_zirconia_arch: {
    name: "Циркониевая дуга (за челюсть)",
    description: "Несъёмный монолитный циркониевый протез - самый прочный и естественный вариант.",
  },
  supp_snap_base: {
    name: "Съёмный протез на кнопках (за челюсть)",
    description: "Съёмный протез на имплантах, который защёлкивается на кнопках - за одну челюсть.",
  },
  supp_snap_arch: {
    name: "Съёмный протез на кнопках (за челюсть)",
    description: "Надёжный съёмный протез, удерживаемый имплантами.",
  },
  supp_diagnostics: {
    name: "Диагностика и план лечения",
    description:
      "Первый шаг к новой улыбке. Чтобы подтвердить точный план лечения и итоговую стоимость, нам нужно разобраться в вашей ситуации.",
  },
  supp_doctor_consult: {
    name: "👨‍⚕️ Консультация врача",
    description: "Личная встреча с вашим имплантологом для обсуждения целей лечения и состояния полости рта.",
  },
  supp_ct_scan: {
    name: "🩻 КТ-снимок (3D)",
    description: "Трёхмерное изображение челюсти, чтобы проверить объём кости и точно спланировать установку имплантов.",
  },
  supp_digital_scan: {
    name: "🖥️ Цифровое сканирование / слепок",
    description: "Быстрая и безболезненная цифровая модель полости рта для проектирования вашей реставрации.",
  },
  supp_arch: {
    name: "Какая челюсть",
    description: "Какую челюсть (или обе) нужно лечить?",
  },
  supp_arch_upper: { name: "Только верхняя челюсть" },
  supp_arch_lower: { name: "Только нижняя челюсть" },
  supp_arch_both: { name: "Обе челюсти (верхняя и нижняя)" },
  supp_sedation: {
    name: "Седация и анестезия",
    description: "Варианты обезболивания и седации с учётом ваших потребностей и сложности процедуры.",
  },
  supp_local_anesthesia: {
    name: "Местная анестезия",
    description: "Обезболивает область лечения для комфортной установки.",
  },
  supp_iv_sedation: {
    name: "Внутривенная седация",
    description: "Глубокое расслабление или полный сон во время лечения - подходит для длительных визитов или повышенной тревожности.",
  },
  supp_timeline: {
    name: "📆 Ваши сроки",
    description: "Когда вы планируете начать лечение? Это поможет нам подобрать оптимальный план.",
  },
  supp_timeline_today: { name: "📆 Готов(а) начать сегодня" },
  supp_timeline_month: { name: "🦷 В течение месяца" },
  supp_timeline_researching: { name: "⁉️ Пока изучаю варианты" },
  supp_timeline_pricing: { name: "＄Зависит от цены" },
  supp_shade: {
    name: "Оттенок и финиш",
    description: "Циркониевые коронки можно подобрать под натуральный оттенок зубов или сделать ярко-белыми для эффекта голливудской улыбки.",
  },
  supp_shade_natural: { name: "Естественный оттенок" },
  supp_shade_bright: { name: "Ярко-белый" },
  supp_shade_doctor: { name: "Пусть решит врач" },
  supp_denture_status: {
    name: "Текущая ситуация с протезом",
    description: "Это поможет нам понять, на каком этапе вы сейчас находитесь.",
  },
  supp_denture_have: { name: "У меня уже есть съёмный протез" },
  supp_denture_extract: { name: "Сначала нужно удалить зубы" },
  supp_denture_none: { name: "У меня пока нет протеза" },
};

/**
 * Translate one field (name/description) of a step or component by its
 * stable id. `discriminator` should always be the ORIGINAL ENGLISH NAME of
 * the step/component (even when translating its description) - it is only
 * used to disambiguate the handful of ids whose English content differs by
 * package (currently just "auto_client_form"), so both name and description
 * lookups for the same item resolve to the same dictionary variant.
 */
/**
 * EN display overrides. The DentalPrice dashboard silently rejects edits to
 * some Name fields (package name and step display name), so where we need a
 * different English label than what the API returns we override it here,
 * keyed by the same stable id used by DICT.
 */
const EN_OVERRIDES: Record<string, Entry> = {
  // Package "Zirconia Teeth" -> shown as "Final Teeth"; its single step is the
  // material choice for the final prosthesis.
  step_1784587663159: {
    name: "Final Teeth - Material",
    description:
      "Your final set of teeth on implants. Choose the material - it determines durability, appearance, and cost. Priced per arch.",
  },
};

export function translateCalcField(
  id: string,
  discriminator: string,
  field: "name" | "description",
  original: string | undefined,
  locale: FunnelLocale,
): string | undefined {
  if (original == null) return original;
  if (locale !== "ru") {
    const en = EN_OVERRIDES[id];
    if (en && en[field] != null) return en[field];
    return original;
  }
  const composite = DICT[`${id}::${discriminator.trim()}`];
  if (composite && composite[field] != null) return composite[field];
  const byId = DICT[id];
  if (byId && byId[field] != null) return byId[field];
  return original;
}
