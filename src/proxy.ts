import { NextResponse } from "next/server";

/**
 * Intentionally inert. <html lang> is handled client-side by HtmlLangSetter,
 * so no proxy logic is needed. The matcher below never matches a real
 * route, so this never runs. (Kept as a no-op instead of removed entirely.)
 *
 * Renamed from middleware.ts -> proxy.ts per Next.js 16 convention:
 * https://nextjs.org/docs/messages/middleware-to-proxy
 */
export function proxy() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/__noop_proxy_never_matches__"],
};
