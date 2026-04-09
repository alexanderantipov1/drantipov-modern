"use client"

import { useState, useEffect } from "react"
import { useTracking } from "./TrackingProvider"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const { acceptAllCookies, rejectAllCookies, hasConsent } = useTracking()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasConsent()) {
        setShowBanner(true)
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [hasConsent])

  const handleAccept = () => {
    acceptAllCookies()
    setShowBanner(false)
  }

  const handleReject = () => {
    rejectAllCookies()
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700">
              We use cookies to enhance your experience, analyze site traffic, and personalize content.
              By clicking &quot;Accept All&quot;, you consent to the use of cookies.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-[#011F33] rounded-md hover:bg-[#012840] transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
