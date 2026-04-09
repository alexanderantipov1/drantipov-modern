# Analytics Setup Guide

This guide explains how to configure Google Analytics 4 and Google Tag Manager for the Dr. Antipov website.

## Google Analytics 4 Setup

### Step 1: Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Admin" in the bottom left
3. In the Property column, click "Create Property"
4. Enter property details:
   - Property name: "Dr. Antipov Website"
   - Time zone: Select your timezone
   - Currency: USD
5. Click "Next" and complete the setup wizard
6. After creation, you'll receive a **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 2: Configure Environment Variables

1. Open `.env.local` file in the project root
2. Replace the placeholder with your actual Measurement ID:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Save the file

### Step 3: Verify Installation

1. Start your development server: `npm run dev`
2. Open your site in a browser
3. Open browser DevTools → Network tab
4. Look for requests to `google-analytics.com/g/collect`
5. Or use the [Google Analytics Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger)

## Google Tag Manager Setup

### Step 1: Create a GTM Container

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click "Create Account"
3. Enter account details:
   - Account Name: "Dr. Antipov"
   - Container Name: "Dr. Antipov Website"
   - Target Platform: Web
4. Accept Terms of Service
5. You'll receive a **Container ID** (format: `GTM-XXXXXXX`)

### Step 2: Configure Environment Variables

1. Open `.env.local` file
2. Replace the placeholder with your actual Container ID:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```
3. Save the file

### Step 3: Configure Tags in GTM

1. In GTM, click "Add a new tag"
2. Common tags to add:
   - **Google Analytics 4 Configuration Tag** (if using GTM for GA4)
   - **Facebook Pixel** (for ads)
   - **LinkedIn Insight Tag** (for professional audience)
   - **Form Submission Tracking**
   - **Click Tracking** (for phone numbers, buttons)

### Step 4: Publish Container

1. Click "Submit" in the top right
2. Add a version name: "Initial Setup"
3. Click "Publish"

## Event Tracking

The website includes built-in event tracking for:

### Consultation Form Submissions
```typescript
import { trackConsultationSubmission } from '@/lib/analytics'
trackConsultationSubmission('Dental Implants')
```

### Phone Clicks
```typescript
import { trackPhoneClick } from '@/lib/analytics'
trackPhoneClick()
```

### Email Clicks
```typescript
import { trackEmailClick } from '@/lib/analytics'
trackEmailClick()
```

### CTA Clicks
```typescript
import { trackCTAClick } from '@/lib/analytics'
trackCTAClick('Book Consultation', 'Header')
```

### Video Plays
```typescript
import { trackVideoPlay } from '@/lib/analytics'
trackVideoPlay('All-on-4 Procedure Overview')
```

### External Links
```typescript
import { trackExternalLink } from '@/lib/analytics'
trackExternalLink('https://example.com', 'Partner Website')
```

## Testing

### Test in Development
The analytics scripts will **not load** if the IDs still contain placeholders (`G-XXXXXXXXXX` or `GTM-XXXXXXX`). This prevents test data from polluting production analytics.

### Test in Production
1. Deploy your site with the actual IDs
2. Use Google Analytics Real-Time view to see visitors
3. Use GTM Preview mode to debug tags

## Privacy Considerations

- The implementation respects user privacy
- Consider adding a cookie consent banner
- Update Privacy Policy to mention analytics usage
- Consider implementing analytics opt-out

## Troubleshooting

### Analytics Not Working?
1. Check that `.env.local` has the correct IDs
2. Restart the development server after changing `.env.local`
3. Check browser console for errors
4. Verify IDs don't contain placeholders

### GTM Container Not Loading?
1. Check Network tab for `googletagmanager.com` requests
2. Ensure GTM container is published
3. Check for ad blockers that might block GTM

## Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/9304153)
- [Google Tag Manager Documentation](https://support.google.com/tagmanager/answer/6102821)
- [Next.js Analytics Guide](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
