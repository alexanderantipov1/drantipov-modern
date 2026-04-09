"use client"

import { CookieManager } from "./cookies"

const COOKIE_NAMES = {
  session: "_fdi_sess",
  firstTouch: "_fdi_ft",
  marketing: "_fdi_mkt",
  consent: "_fdi_consent",
  clientId: "_fdi_cid",
}

interface SessionData {
  session_id: string
  client_id: string
  page_views: number
  landing_page: string
  last_activity: string
  created_at: string
}

interface MarketingParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  utm_id?: string
  utm_location?: string
  utm_adgroup?: string
  utm_creative?: string
  gclid?: string
  fbclid?: string
  [key: string]: string | undefined
}

interface ConsentState {
  ad_storage: "granted" | "denied"
  analytics_storage: "granted" | "denied"
  functionality_storage: "granted" | "denied"
  personalization_storage: "granted" | "denied"
  security_storage: "granted" | "denied"
}

const DEFAULT_CONSENT: ConsentState = {
  ad_storage: "denied",
  analytics_storage: "denied",
  functionality_storage: "granted",
  personalization_storage: "denied",
  security_storage: "granted",
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 10)
}

function getDeviceType(): string {
  if (typeof navigator === "undefined") return "Desktop"
  const ua = navigator.userAgent.toLowerCase()
  if (/ipad|android(?!.*mobile)|tablet/i.test(ua)) return "Tablet"
  if (/mobile|android|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua)) return "Mobile"
  return "Desktop"
}

export class ConsentManager {
  private cookieManager: CookieManager

  constructor(cookieManager: CookieManager) {
    this.cookieManager = cookieManager
  }

  initialize(): void {
    const consent = this.getConsent()
    if (consent) {
      this.updateGTMConsent(consent)
    } else {
      this.setDefaultConsent()
    }
  }

  private setDefaultConsent(): void {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      (window.gtag as Function)("consent", "default", {
        ...DEFAULT_CONSENT,
        wait_for_update: 500,
      })
    }
  }

  private updateGTMConsent(consent: ConsentState): void {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      (window.gtag as Function)("consent", "update", consent)
    }
  }

  getConsent(): ConsentState | null {
    return this.cookieManager.getJSONCookie<ConsentState>(COOKIE_NAMES.consent)
  }

  saveConsent(updates: Partial<ConsentState>): void {
    const current = this.getConsent() || DEFAULT_CONSENT
    const newConsent = { ...current, ...updates }
    this.cookieManager.setJSONCookie(COOKIE_NAMES.consent, newConsent, 365)
    this.updateGTMConsent(newConsent)
  }

  acceptAll(): void {
    this.saveConsent({
      ad_storage: "granted",
      analytics_storage: "granted",
      functionality_storage: "granted",
      personalization_storage: "granted",
      security_storage: "granted",
    })
  }

  rejectAll(): void {
    this.saveConsent({
      ad_storage: "denied",
      analytics_storage: "denied",
      functionality_storage: "granted",
      personalization_storage: "denied",
      security_storage: "granted",
    })
  }

  hasConsent(): boolean {
    return this.cookieManager.hasCookie(COOKIE_NAMES.consent)
  }

  getConsentState(): Record<string, string> {
    const consent = this.getConsent()
    if (!consent) return {}
    return {
      consent_ad_storage: consent.ad_storage,
      consent_analytics_storage: consent.analytics_storage,
      consent_functionality_storage: consent.functionality_storage,
      consent_personalization_storage: consent.personalization_storage,
      consent_security_storage: consent.security_storage,
    }
  }
}

export class Tracker {
  private cookieManager: CookieManager
  public consentManager: ConsentManager
  private initialized = false

  constructor(cookieDomain = "", cookieExpiry = 30) {
    this.cookieManager = new CookieManager(cookieDomain, cookieExpiry)
    this.consentManager = new ConsentManager(this.cookieManager)
  }

  initialize(): void {
    if (this.initialized || typeof window === "undefined") return
    this.initialized = true

    this.consentManager.initialize()
    this.extractAndStoreMarketingParams()
    this.initializeSession()
  }

  private extractAndStoreMarketingParams(): void {
    const urlParams = new URLSearchParams(window.location.search)
    const params: MarketingParams = {}

    const paramKeys = [
      "utm_source", "utm_medium", "utm_campaign", "utm_term",
      "utm_content", "utm_id", "utm_location", "utm_adgroup",
      "utm_creative", "gclid", "fbclid",
    ]

    paramKeys.forEach((key) => {
      const value = urlParams.get(key)
      if (value) params[key] = value
    })

    if (Object.keys(params).length > 0) {
      this.storeMarketingParameters(params)
      this.updateAttribution(params)
    }
  }

  private storeMarketingParameters(params: MarketingParams): void {
    const existing = this.cookieManager.getJSONCookie<MarketingParams>(COOKIE_NAMES.marketing) || {}
    const merged = { ...existing, ...params }
    this.cookieManager.setJSONCookie(COOKIE_NAMES.marketing, merged)
  }

  private updateAttribution(params: MarketingParams): void {
    if (!this.cookieManager.hasCookie(COOKIE_NAMES.firstTouch)) {
      const firstTouch = {
        ...params,
        landing_page: window.location.href,
        device_type: getDeviceType(),
        referral_source: document.referrer || "",
        timestamp: new Date().toISOString(),
      }
      this.cookieManager.setJSONCookie(COOKIE_NAMES.firstTouch, firstTouch, 365)
    }
  }

  private initializeSession(): void {
    let session = this.cookieManager.getJSONCookie<SessionData>(COOKIE_NAMES.session)

    if (!session || this.isSessionExpired(session)) {
      session = {
        session_id: generateId(),
        client_id: this.cookieManager.getCookie(COOKIE_NAMES.clientId) || generateId(),
        page_views: 1,
        landing_page: window.location.href,
        last_activity: new Date().toISOString(),
        created_at: new Date().toISOString(),
      }
    } else {
      session.page_views = (session.page_views || 0) + 1
      session.last_activity = new Date().toISOString()
    }

    this.cookieManager.setJSONCookie(COOKIE_NAMES.session, session)
    if (session.client_id) {
      this.cookieManager.setCookie(COOKIE_NAMES.clientId, session.client_id, 730)
    }
  }

  private isSessionExpired(session: SessionData): boolean {
    if (!session.last_activity) return true
    const lastActivity = new Date(session.last_activity).getTime()
    return Date.now() - lastActivity > 30 * 60 * 1000
  }

  getTrackingData(): Record<string, unknown> {
    const session = this.cookieManager.getJSONCookie<SessionData>(COOKIE_NAMES.session)
    const marketing = this.cookieManager.getJSONCookie<MarketingParams>(COOKIE_NAMES.marketing)
    const attribution = this.cookieManager.getJSONCookie<Record<string, string>>(COOKIE_NAMES.firstTouch)
    const consent = this.consentManager.getConsentState()

    const flatAttribution: Record<string, string> = {}
    if (attribution) {
      if (attribution.utm_source) flatAttribution.utm_source = attribution.utm_source
      if (attribution.utm_medium) flatAttribution.utm_medium = attribution.utm_medium
      if (attribution.utm_campaign) flatAttribution.utm_campaign = attribution.utm_campaign
      if (attribution.utm_term) flatAttribution.utm_term = attribution.utm_term
      if (attribution.utm_content) flatAttribution.utm_content = attribution.utm_content
      if (attribution.referral_source) flatAttribution.referral_source = attribution.referral_source
    }

    return {
      ...(session ? {
        session_id: session.session_id,
        client_id: session.client_id,
      } : {}),
      ...flatAttribution,
      ...(marketing || {}),
      ...consent,
      landing_page: typeof window !== "undefined" ? window.location.href : "",
      device_type: getDeviceType(),
      current_page: typeof window !== "undefined" ? window.location.href : "",
      referral_source: typeof document !== "undefined" ? document.referrer || "" : "",
    }
  }

  getMarketingParameters(): MarketingParams {
    return this.cookieManager.getJSONCookie<MarketingParams>(COOKIE_NAMES.marketing) || {}
  }

  getSessionData(): SessionData | null {
    return this.cookieManager.getJSONCookie<SessionData>(COOKIE_NAMES.session)
  }
}

