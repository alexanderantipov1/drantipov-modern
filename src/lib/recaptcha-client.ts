"use client";

/**
 * Client-side helper to obtain a reCAPTCHA v3 token before submitting a form.
 * Degrades gracefully: returns "" if grecaptcha is not loaded (e.g. localhost,
 * or before the deferred script initializes). The server verifies the token.
 */
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
  "6LfAv8grAAAAAFkd5EJ1HC4fbmTfdq3yce7rgPtg";

type Grecaptcha = {
  ready: (cb: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

function readGrecaptcha(): Grecaptcha | undefined {
  return (window as unknown as { grecaptcha?: Grecaptcha }).grecaptcha;
}

/**
 * Loads the reCAPTCHA script on demand (if the deferred loader hasn't run yet)
 * and waits until window.grecaptcha is available, up to timeoutMs.
 */
function ensureRecaptchaLoaded(timeoutMs = 4000): Promise<Grecaptcha | undefined> {
  return new Promise((resolve) => {
    const existing = readGrecaptcha();
    if (existing) {
      resolve(existing);
      return;
    }

    if (!document.getElementById("recaptcha-v3")) {
      const script = document.createElement("script");
      script.id = "recaptcha-v3";
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.head.appendChild(script);
    }

    const started = Date.now();
    const poll = window.setInterval(() => {
      const g = readGrecaptcha();
      if (g) {
        window.clearInterval(poll);
        resolve(g);
      } else if (Date.now() - started > timeoutMs) {
        window.clearInterval(poll);
        resolve(undefined);
      }
    }, 100);
  });
}

export function getRecaptchaToken(action = "form_submit"): Promise<string> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve("");
      return;
    }

    // Never let token generation hang the form submission.
    const failSafe = window.setTimeout(() => resolve(""), 8000);
    const finish = (token: string) => {
      window.clearTimeout(failSafe);
      resolve(token);
    };

    ensureRecaptchaLoaded()
      .then((grecaptcha) => {
        if (!grecaptcha) {
          finish("");
          return;
        }
        try {
          grecaptcha.ready(() => {
            grecaptcha
              .execute(RECAPTCHA_SITE_KEY, { action })
              .then(finish)
              .catch(() => finish(""));
          });
        } catch {
          finish("");
        }
      })
      .catch(() => finish(""));
  });
}
