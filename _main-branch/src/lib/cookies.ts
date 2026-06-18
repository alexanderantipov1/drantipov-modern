export class CookieManager {
  private domain: string
  private defaultExpiry: number

  constructor(domain = "", expiry = 30) {
    this.domain = domain || this.getCurrentDomain()
    this.defaultExpiry = expiry
  }

  private getCurrentDomain(): string {
    if (typeof window === "undefined") return ""
    const hostname = window.location.hostname
    if (hostname === "localhost" || hostname === "127.0.0.1" || hostname.includes(".replit.")) return hostname
    const parts = hostname.split(".")
    return parts.length >= 2 ? "." + parts.slice(-2).join(".") : hostname
  }

  setCookie(name: string, value: string, days?: number): void {
    if (typeof document === "undefined") return
    const expiry = days ?? this.defaultExpiry
    const date = new Date()
    date.setTime(date.getTime() + expiry * 24 * 60 * 60 * 1000)
    const parts = [
      `${name}=${encodeURIComponent(value)}`,
      `expires=${date.toUTCString()}`,
      "path=/",
      `domain=${this.domain}`,
      "SameSite=Lax",
    ]
    if (window.location.protocol === "https:") {
      parts.push("Secure")
    }
    document.cookie = parts.join("; ")
  }

  getCookie(name: string): string | null {
    if (typeof document === "undefined") return null
    const target = name + "="
    const cookies = document.cookie.split(";")
    for (let i = 0; i < cookies.length; i++) {
      let c = cookies[i]
      if (c) {
        while (c.charAt(0) === " ") c = c.substring(1)
        if (c.indexOf(target) === 0) {
          return decodeURIComponent(c.substring(target.length, c.length))
        }
      }
    }
    return null
  }

  deleteCookie(name: string): void {
    if (typeof document === "undefined") return
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${this.domain}`
  }

  getJSONCookie<T>(name: string): T | null {
    const value = this.getCookie(name)
    if (!value) return null
    try {
      return JSON.parse(value)
    } catch {
      return null
    }
  }

  setJSONCookie(name: string, value: unknown, days?: number): void {
    try {
      const json = JSON.stringify(value)
      this.setCookie(name, json, days)
    } catch {
      // silently fail
    }
  }

  hasCookie(name: string): boolean {
    return this.getCookie(name) !== null
  }

  clearAll(names: string[]): void {
    names.forEach((name) => this.deleteCookie(name))
  }
}
