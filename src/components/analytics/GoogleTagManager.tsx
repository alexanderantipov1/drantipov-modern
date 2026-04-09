"use client"

import Script from "next/script"

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

/**
 * Check if Google Tag Manager is enabled
 */
const isGTMEnabled = () => {
  return !!GTM_ID && GTM_ID !== 'GTM-XXXXXXX'
}

/**
 * Google Tag Manager Component
 *
 * Loads Google Tag Manager scripts.
 * Only loads if GTM_ID is configured in environment variables.
 */
export function GoogleTagManager() {
  if (!isGTMEnabled()) {
    return null
  }

  return (
    <>
      {/* GTM Script */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  )
}

/**
 * Google Tag Manager NoScript Component
 *
 * Fallback for users with JavaScript disabled.
 * Should be placed immediately after the opening <body> tag.
 */
export function GoogleTagManagerNoScript() {
  if (!isGTMEnabled()) {
    return null
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}
