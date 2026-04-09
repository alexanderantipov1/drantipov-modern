# Email Notification Setup Guide

This guide explains how to configure Resend for email notifications on the Dr. Antipov website.

## Overview

The website uses [Resend](https://resend.com/) to send:
- **Admin notifications** when patients submit consultation requests
- **Patient confirmations** thanking them for their submission
- **Contact form notifications** for general inquiries

## Step 1: Create a Resend Account

1. Go to [Resend.com](https://resend.com/)
2. Sign up for a free account
3. The free tier includes:
   - 3,000 emails per month
   - 100 emails per day
   - Perfect for a medical practice website

## Step 2: Verify Your Domain

### Option A: Use Resend's Default Domain (Quick Start)
For testing, you can use Resend's default domain without verification:
- Emails will be sent from `onboarding@resend.dev`
- This is fine for development/testing

### Option B: Use Your Custom Domain (Recommended for Production)

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain: `drantipov.com`
4. Add the DNS records to your domain registrar:
   - **SPF Record** (TXT)
   - **DKIM Record** (TXT)
   - **DMARC Record** (TXT - optional but recommended)
5. Wait for verification (usually 5-30 minutes)

## Step 3: Get Your API Key

1. In Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Name it: "Dr Antipov Production"
4. Set permissions: **Full Access** (or **Sending access** only)
5. Copy the API key (it will only be shown once!)

## Step 4: Configure Environment Variables

1. Open `.env.local` in your project root
2. Update the Resend configuration:

```env
# Resend API for email notifications
RESEND_API_KEY=re_YourActualAPIKey_Here

# Email addresses
CONTACT_EMAIL=info@drantipov.com
ADMIN_EMAIL=admin@drantipov.com

# Phone for email templates
CONTACT_PHONE=(916) 234-5678
```

3. **Important:** Keep your API key secret! Never commit it to version control.

## Step 5: Update Email Sender Domain

If using a custom domain, update the `from` addresses in [`src/lib/email.ts`](src/lib/email.ts):

```typescript
// Change from:
from: 'Dr. Antipov Website <notifications@drantipov.com>'

// To your verified domain:
from: 'Dr. Antipov <notifications@yourdomain.com>'
```

## Step 6: Test the Email System

### Test in Development

1. Start your dev server: `npm run dev`
2. Go to http://localhost:3000/for-patients/consultation
3. Fill out and submit the consultation form
4. Check your console for email logs
5. If configured correctly, check your admin email inbox

### Test in Production

1. Deploy your site with the actual API key
2. Submit a test consultation request
3. Verify you receive:
   - Admin notification email
   - Patient confirmation email

## Email Templates

The system includes three professional HTML email templates:

### 1. Consultation Notification (to Admin)
- Sent to `ADMIN_EMAIL`
- Contains all patient details
- Includes submission metadata (IP, referrer, timestamp)
- Reply-to is set to patient's email

### 2. Consultation Confirmation (to Patient)
- Sent to patient's email
- Professional thank-you message
- Sets expectations (24-hour response)
- Includes practice contact information

### 3. Contact Form Notification (to Admin)
- For general contact form submissions
- Simple, clean design
- Reply-to is set to sender's email

## Customizing Email Templates

Edit [`src/lib/email.ts`](src/lib/email.ts) to customize:
- Email subject lines
- HTML templates
- Office information
- Branding colors

## Monitoring & Analytics

### Resend Dashboard
- View sent emails
- Check delivery status
- Monitor opens and clicks (optional)
- View bounce and complaint rates

### Logs
- All email operations are logged to console
- Failed emails are logged with error details
- Successful sends include Resend message IDs

## Troubleshooting

### Emails Not Sending?

1. **Check API Key**
   ```bash
   # Verify it's set correctly
   echo $RESEND_API_KEY
   ```

2. **Check Domain Verification**
   - Go to Resend dashboard → Domains
   - Ensure status is "Verified"

3. **Check Console Logs**
   - Look for error messages
   - Verify `isEmailConfigured()` returns true

4. **Test with Resend's Test Email**
   ```bash
   curl -X POST 'https://api.resend.com/emails' \
     -H 'Authorization: Bearer YOUR_API_KEY' \
     -H 'Content-Type: application/json' \
     -d '{
       "from": "onboarding@resend.dev",
       "to": "you@example.com",
       "subject": "Test",
       "html": "<p>Test email</p>"
     }'
   ```

### Emails Going to Spam?

1. **Verify SPF/DKIM/DMARC records** are properly configured
2. **Warm up your domain** - Start with small volumes
3. **Avoid spam trigger words** in subject/content
4. **Use a professional from address**
5. **Enable HTTPS** on your website

### Rate Limits

Free tier limits:
- 100 emails per day
- 3,000 emails per month

If you exceed limits:
- Upgrade to a paid plan
- Or implement email queuing/throttling

## Security Best Practices

1. **Never expose API key**
   - Keep it in `.env.local`
   - Add `.env.local` to `.gitignore`
   - Use environment variables in production

2. **Validate all input**
   - The system uses Zod for validation
   - Honeypot field prevents spam

3. **Rate limiting**
   - Consider adding rate limiting for forms
   - Prevent abuse and spam

4. **Monitor for anomalies**
   - Check Resend dashboard regularly
   - Look for unusual patterns

## Production Deployment

### Vercel
```bash
vercel env add RESEND_API_KEY
# Enter your API key when prompted
```

### Other Platforms
Add environment variables in your hosting platform:
- `RESEND_API_KEY`
- `ADMIN_EMAIL`
- `CONTACT_EMAIL`
- `CONTACT_PHONE`

## Support & Resources

- [Resend Documentation](https://resend.com/docs)
- [Resend Node.js SDK](https://github.com/resendlabs/resend-node)
- [Email Best Practices](https://resend.com/docs/knowledge-base/email-best-practices)

## Cost Estimation

### Free Tier
- 3,000 emails/month = ~100 consultations
- Suitable for most small practices

### Pro Tier ($20/month)
- 50,000 emails/month
- Better deliverability
- Priority support
- Remove Resend branding

For most medical practices, the free tier is sufficient initially.
