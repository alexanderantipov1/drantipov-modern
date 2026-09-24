// Requires an already-running production server. Never starts/restarts one.
const { test } = require("node:test");
const assert = require("node:assert/strict");
const base = process.env.SEO_TEST_BASE_URL || "http://localhost:5000";

for (const [locale, route, title] of [
  ["en", "/nonexistent-audit-review", "Page not found"],
  ["ru", "/ru/nonexistent-audit-review", "Страница не найдена"],
]) {
  for (const userAgent of ["Mozilla/5.0 (X11; Linux x86_64)", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"]) {
    test(`raw HTTP 404 ${locale}, ${userAgent.includes("iPhone") ? "mobile" : "desktop"}`, async () => {
      const response = await fetch(`${base}${route}`, { redirect: "manual", headers: { "User-Agent": userAgent } });
      assert.equal(response.status, 404);
      const html = await response.text();
      assert.ok(new RegExp(`<html\\s+lang="${locale}"`).test(html), `Missing server-rendered lang=${locale}: ${html.slice(0, 100)}`);
      assert.ok(html.includes(title));
      assert.ok(/<meta name="robots" content="noindex, nofollow">/.test(html), "Missing explicit robots noindex");
      assert.ok(!/__next_error__|rel="canonical"|hreflang=/.test(html), "Generic Next error payload or unwanted SEO links");
      assert.equal(response.headers.get("content-language"), locale);
      assert.match(response.headers.get("x-robots-tag"), /noindex/);
      const head = await fetch(`${base}${route}`, { method: "HEAD", redirect: "manual" });
      assert.equal(head.status, 404);
      assert.equal(head.headers.get("content-language"), locale);
    });
  }
}