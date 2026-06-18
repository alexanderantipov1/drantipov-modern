"use client"

import { createContext, useContext, useEffect, useRef, useCallback } from "react"
import { Tracker } from "@/lib/tracking"

interface TrackingContextValue {
  getTrackingData: () => Record<string, unknown>
  acceptAllCookies: () => void
  rejectAllCookies: () => void
  hasConsent: () => boolean
}

const TrackingContext = createContext<TrackingContextValue>({
  getTrackingData: () => ({}),
  acceptAllCookies: () => {},
  rejectAllCookies: () => {},
  hasConsent: () => false,
})

export function useTracking() {
  return useContext(TrackingContext)
}

export function TrackingProvider({ children }: { children: React.ReactNode }) {
  const trackerRef = useRef<Tracker | null>(null)

  useEffect(() => {
    if (!trackerRef.current) {
      trackerRef.current = new Tracker()
      trackerRef.current.initialize()
    }
  }, [])

  const getTrackingData = useCallback(() => {
    return trackerRef.current?.getTrackingData() || {}
  }, [])

  const acceptAllCookies = useCallback(() => {
    trackerRef.current?.consentManager.acceptAll()
  }, [])

  const rejectAllCookies = useCallback(() => {
    trackerRef.current?.consentManager.rejectAll()
  }, [])

  const hasConsent = useCallback(() => {
    return trackerRef.current?.consentManager.hasConsent() || false
  }, [])

  return (
    <TrackingContext.Provider value={{ getTrackingData, acceptAllCookies, rejectAllCookies, hasConsent }}>
      {children}
    </TrackingContext.Provider>
  )
}
