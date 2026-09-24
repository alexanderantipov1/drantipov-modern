/**
 * A terminal HTTP response for URLs outside the page tree.
 *
 * Next 16's initial notFound() error payload may use <html id="__next_error__">
 * before hydration, even with locale root boundaries. A route handler avoids
 * that error-render path and guarantees both the HTTP status and document lang.
 * Real pages still use their normal layouts and not-found boundaries.
 */
export function unmatchedResponse(locale: "en" | "ru"): Response {
  const ru = locale === "ru";
  const title = ru ? "Страница не найдена" : "Page not found";
  const description = ru
    ? "Такого адреса не существует. Вернитесь на главную страницу или свяжитесь с нашей клиникой."
    : "This address does not exist. Return to the homepage or contact our practice.";
  const home = ru ? "/ru" : "/";
  const contact = ru ? "/ru/contact" : "/contact";
  return new Response(`<!DOCTYPE html>
<html lang="${locale}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${title} — ${ru ? "Доктор Антипов" : "Dr. Antipov"}</title>
<style>
body{margin:0;background:#132b42;color:#fff;font:18px/1.6 system-ui,sans-serif}
main{max-width:720px;margin:12vh auto;padding:32px}
h1{font-size:clamp(2rem,6vw,3.5rem);line-height:1.2}
a{color:#69e0c6;text-underline-offset:4px}
nav{display:flex;flex-wrap:wrap;gap:24px;margin-top:32px}
</style>
</head>
<body><main><p>404</p><h1>${title}</h1><p>${description}</p>
<nav aria-label="${ru ? "Полезные ссылки" : "Helpful links"}">
<a href="${home}">${ru ? "Главная" : "Homepage"}</a>
<a href="${contact}">${ru ? "Контакты" : "Contact"}</a>
</nav></main></body></html>`, {
    status: 404,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Language": locale,
      "X-Robots-Tag": "noindex, nofollow",
      // Do not persist arbitrary typo URLs or mask subsequently published pages.
      "Cache-Control": "no-store",
    },
  });
}