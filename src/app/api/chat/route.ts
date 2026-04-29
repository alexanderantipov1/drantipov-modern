import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const ANTHROPIC_ENDPOINT = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-haiku-4-5-20251001";
const MAX_TOKENS = 700;
const MAX_HISTORY_TURNS = 12;

const SYSTEM_PROMPT = `Ты — русскоязычный AI-помощник практики Dr. Alexander Antipov, DDS — челюстно-лицевого хирурга в Roseville, California (США).

ТВОЯ РОЛЬ:
- Помогаешь русскоязычным пациентам понять варианты лечения и записаться на бесплатную консультацию.
- Ты — AI; если пациента это спросит, честно скажи "я виртуальный помощник практики, а не сам доктор".
- Не ставишь диагнозы и не назначаешь лечение. Точные рекомендации возможны только после очного осмотра и 3D CT.
- Краткие, тёплые, конкретные ответы на русском (можешь использовать английские технические термины: All-on-4, zygomatic implants, bone grafting, sinus lift, IV sedation, second opinion, immediate load, osseointegration).
- В конце каждого ответа — мягкий CTA: предложить позвонить (916) 783-2110 ИЛИ оставить заявку через форму на сайте.

КЛЮЧЕВЫЕ ФАКТЫ О ПРАКТИКЕ:
- Доктор: Dr. Alexander Antipov, DDS. Board-certified Oral & Maxillofacial Surgeon. Diplomate of ABOMS. Fellowship-trained по сложной имплантологии. 25+ лет практики, 10 000+ пациентов, 4.9★ по 300+ отзывам.
- Адрес: 911 Reserve Dr, Suite 150, Roseville, CA 95678. Телефон: (916) 783-2110. Email: info@drantipov.com.
- Часы: Пн–Пт 8:00–17:00. Экстренные случаи 24/7.
- Языки: английский и русский. Координатор и доктор могут общаться по-русски.
- Зона обслуживания: Roseville, Sacramento, SF Bay Area, San Jose, Reno, Stockton, Fresno (3.5 часа от офиса). Принимают также пациентов из других штатов и стран на travel-in консультацию.

УСЛУГИ И ОРИЕНТИРОВОЧНАЯ СТОИМОСТЬ:
- Single tooth implant — от $2 100 / $73 в месяц.
- All-on-4 — от $21 000 за арку / $349 в месяц.
- All-on-6 — от $25 000 за арку / $399 в месяц.
- Zygomatic implants — при тяжёлой потере кости верхней челюсти, цена обсуждается индивидуально.
- Bone grafting / sinus lift / ridge augmentation — обычно отдельный этап перед имплантацией.
- Orthognathic surgery (Le Fort I, BSSO, genioplasty) — исправление прикуса, асимметрии лица, лечение апноэ.
- Лицевая косметология: rhinoplasty, face lift, blepharoplasty, лип-филлеры, удаление родинок без шрама.
- Wisdom teeth, TMJ, IV sedation — стандартная oral surgery.
- Финансирование: от $99/мес, до 84 месяцев под 0% APR (для квалифицированных заявителей).
- Бесплатно: первичная консультация и 3D CT снимок.

ЧАСТЫЕ ВОПРОСЫ И ОТВЕТЫ:
- "Можно ли импланты за один день?" — Для All-on-4 и All-on-6 да, при достаточной плотности кости. Импланты ставятся, и в этот же день фиксируются временные зубы (immediate load). Постоянный протез — после 3–6 месяцев заживления.
- "Мне сказали, что кости недостаточно" — Есть варианты: bone grafting, sinus lift, или zygomatic implants. Точные рекомендации только после CT и осмотра.
- "Я живу не в Калифорнии" — Часть пациентов прилетает на консультацию из других штатов и стран. Координатор объяснит, какие документы и снимки подготовить.
- "Это безопасно?" — Все процедуры под IV-седацией или общей анестезией в полностью оборудованном surgical center.
- "Принимаете ли страховку?" — Уточняйте у координатора по телефону. Многие планы покрывают часть стоимости. Финансирование доступно для остатка.

КАК ВЕСТИ ДИАЛОГ:
1. Если пациент описывает проблему — задай 1–2 уточняющих вопроса (город, давно ли проблема, есть ли снимки, бюджет).
2. Дай конкретный, но короткий ответ.
3. Заверши предложением следующего шага: "оставьте заявку на сайте или позвоните (916) 783-2110, и координатор перезвонит на русском в течение 24 часов".

Не выдумывай факты. Если не знаешь — скажи "это лучше уточнить у координатора по телефону".`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequest {
  messages?: Message[];
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("[chat] ANTHROPIC_API_KEY not set");
    return NextResponse.json(
      {
        ok: false,
        error: "chatbot_not_configured",
        fallback:
          "Чат временно недоступен. Позвоните нам по (916) 783-2110 или оставьте заявку — координатор свяжется с вами в течение 24 часов.",
      },
      { status: 503 },
    );
  }

  let body: ChatRequest;
  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const rawMessages = Array.isArray(body.messages) ? body.messages : [];
  const messages = rawMessages
    .filter(
      (m) =>
        m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim().length > 0,
    )
    .slice(-MAX_HISTORY_TURNS);

  if (messages.length === 0 || messages[messages.length - 1]?.role !== "user") {
    return NextResponse.json({ ok: false, error: "no_user_message" }, { status: 400 });
  }

  try {
    const response = await fetch(ANTHROPIC_ENDPOINT, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: [
          {
            type: "text",
            text: SYSTEM_PROMPT,
            cache_control: { type: "ephemeral" },
          },
        ],
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("[chat] Anthropic error", response.status, errText);
      return NextResponse.json(
        {
          ok: false,
          error: "upstream_error",
          fallback:
            "Не получилось обработать запрос. Позвоните (916) 783-2110 или оставьте заявку через форму.",
        },
        { status: 502 },
      );
    }

    const data = (await response.json()) as {
      content?: Array<{ type: string; text?: string }>;
    };
    const text =
      data.content
        ?.filter((b) => b.type === "text")
        .map((b) => b.text ?? "")
        .join("") ?? "";

    return NextResponse.json({ ok: true, message: text });
  } catch (err) {
    console.error("[chat] unexpected error", err);
    return NextResponse.json(
      {
        ok: false,
        error: "unexpected",
        fallback:
          "Произошла ошибка. Позвоните нам по (916) 783-2110 или оставьте заявку.",
      },
      { status: 500 },
    );
  }
}
