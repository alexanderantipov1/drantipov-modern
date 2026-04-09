# Deployment Guide - Dr. Antipov Website

This guide covers deploying the Dr. Antipov website to production.

## 📋 Pre-Deployment Checklist

### 1. Code & Content Review
- [ ] All 19 pages tested and working
- [ ] Forms validated and tested
- [ ] All links working (internal and external)
- [ ] Legal pages reviewed by legal counsel
- [ ] Medical content reviewed by Dr. Antipov
- [ ] Placeholder images noted for replacement
- [ ] Contact information verified (phone, email, address)

### 2. Environment Configuration
- [ ] Production environment variables configured
- [ ] Resend API key obtained and configured
- [ ] Domain ownership verified
- [ ] SSL certificate ready (usually handled by hosting provider)
- [ ] Analytics IDs ready (GA4, GTM, etc.)

### 3. Performance Optimization
- [ ] Run `yarn build` locally to verify no errors
- [ ] Test build output
- [ ] Images optimized (when real images are added)
- [ ] Unused dependencies removed

### 4. SEO Configuration
- [ ] Sitemap generated (automatic on build)
- [ ] Robots.txt generated (automatic on build)
- [ ] Structured data verified on key pages
- [ ] Meta tags reviewed on all pages
- [ ] Google Search Console account created

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the creator of Next.js and offers the best integration.

#### Setup Steps

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Connect Repository**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import from GitHub/GitLab/Bitbucket
   - Select the Dr-Antipov repository

3. **Configure Build Settings**:
   ```
   Framework Preset: Next.js
   Build Command: yarn build
   Output Directory: .next (auto-detected)
   Install Command: yarn install
   ```

4. **Add Environment Variables**:
   Go to Project Settings → Environment Variables and add:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=info@drantipov.com
   ADMIN_EMAIL=admin@drantipov.com
   SITE_URL=https://drantipov.com
   NEXT_PUBLIC_SITE_URL=https://drantipov.com
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/dr-antipov

   # Analytics (when ready)
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   NEXT_PUBLIC_HOTJAR_ID=XXXXXXX
   NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX
   ```

5. **Configure Custom Domain**:
   - Go to Project Settings → Domains
   - Add `drantipov.com` and `www.drantipov.com`
   - Follow DNS configuration instructions
   - Vercel automatically provisions SSL certificate

6. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Every push to main branch will trigger auto-deployment

#### DNS Configuration for Vercel

Add these DNS records at your domain registrar:

```
Type    Name    Value                           TTL
A       @       76.76.21.21                     Auto
CNAME   www     cname.vercel-dns.com.          Auto
```

Or use Vercel's nameservers:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### Option 2: Netlify

1. **Connect Repository**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git provider

2. **Build Settings**:
   ```
   Build command: yarn build
   Publish directory: .next
   ```

3. **Add Environment Variables**:
   Site settings → Environment variables
   (Same variables as Vercel above)

4. **Configure Domain**:
   - Domain settings → Add custom domain
   - Follow DNS instructions
   - SSL certificate auto-provisioned

### Option 3: AWS Amplify

1. **Connect Repository**:
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect repository

2. **Build Settings**:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - yarn install
       build:
         commands:
           - yarn build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables**:
   App settings → Environment variables
   (Same as above)

4. **Domain Configuration**:
   App settings → Domain management → Add domain

### Option 4: Custom VPS/Server

For custom hosting on your own server:

#### Requirements
- Node.js 18.17 or higher
- PM2 or similar process manager
- Nginx for reverse proxy
- SSL certificate (Let's Encrypt recommended)

#### Setup Steps

1. **Install Dependencies**:
   ```bash
   cd /var/www/dr-antipov
   yarn install --production
   ```

2. **Create .env File**:
   ```bash
   cp .env.example .env
   nano .env
   # Add production environment variables
   ```

3. **Build Application**:
   ```bash
   yarn build
   ```

4. **Install PM2**:
   ```bash
   npm install -g pm2
   ```

5. **Start Application**:
   ```bash
   pm2 start yarn --name "dr-antipov" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx**:
   ```nginx
   server {
       listen 80;
       server_name drantipov.com www.drantipov.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **Install SSL with Let's Encrypt**:
   ```bash
   sudo certbot --nginx -d drantipov.com -d www.drantipov.com
   ```

## 🔧 Post-Deployment Configuration

### 1. Email Service (Resend)

1. **Verify Domain**:
   - Log in to [resend.com](https://resend.com)
   - Go to Domains → Add Domain
   - Add `drantipov.com`
   - Add DNS records provided by Resend:
     ```
     Type    Name                Value
     TXT     _resend             [provided value]
     MX      drantipov.com       feedback-smtp.resend.com
     ```

2. **Test Email Delivery**:
   - Submit test form on staging/production
   - Verify email received at `info@drantipov.com`
   - Check spam folder if not received
   - Verify sender reputation

### 2. Google Search Console

1. **Add Property**:
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property: `https://drantipov.com`
   - Verify ownership (HTML file method or DNS TXT record)

2. **Submit Sitemap**:
   - Go to Sitemaps section
   - Submit: `https://drantipov.com/sitemap.xml`
   - Verify successful indexing

3. **Configure Settings**:
   - Set preferred domain (www vs non-www)
   - Set target country: United States
   - Set up email notifications for critical issues

### 3. Google Analytics 4

1. **Create Property**:
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new GA4 property: "Dr. Antipov Website"
   - Set timezone: Pacific Time
   - Set currency: USD

2. **Add Measurement ID**:
   - Copy Measurement ID (G-XXXXXXXXXX)
   - Add to environment variables
   - Redeploy application

3. **Configure Goals**:
   - Form submissions (consultation, contact)
   - Phone click events
   - Email click events
   - Video play events
   - Download events (if applicable)

### 4. Google Tag Manager (Optional)

1. **Create Container**:
   - Go to [tagmanager.google.com](https://tagmanager.google.com)
   - Create new container: "Dr. Antipov Website"
   - Type: Web

2. **Add GTM Code**:
   - Copy Container ID (GTM-XXXXXXX)
   - Add to environment variables
   - Redeploy application

3. **Configure Tags**:
   - Google Analytics 4
   - Facebook Pixel
   - Hotjar
   - Any other tracking tools

### 5. Monitoring & Alerts

1. **Uptime Monitoring**:
   - Set up with [UptimeRobot](https://uptimerobot.com) (free)
   - Monitor: `https://drantipov.com`
   - Alert email: `admin@drantipov.com`
   - Check interval: 5 minutes

2. **Error Tracking** (Optional):
   - Consider [Sentry](https://sentry.io) for error tracking
   - Monitor JavaScript errors
   - Monitor API failures
   - Set up email alerts

3. **Performance Monitoring**:
   - Google Search Console (Core Web Vitals)
   - Lighthouse CI for continuous monitoring
   - PageSpeed Insights regular checks

## 🧪 Testing After Deployment

### Automated Testing

Run all page tests:
```bash
for route in "/" "/about" "/contact" "/expertise" "/expertise/full-arch-implants" "/expertise/single-tooth" "/expertise/bone-grafting" "/expertise/jaw-surgery" "/expertise/sleep-apnea" "/for-dentists/referral-partners" "/for-dentists/education/courses" "/for-patients/testimonials" "/for-patients/consultation" "/legal/privacy-policy" "/legal/terms-of-service" "/legal/medical-disclaimer" "/legal/hipaa-notice" "/media/videos" "/media/speaking"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "https://drantipov.com$route")
  echo "$route: $status"
done
```

Expected output: All routes should return `200`

### Manual Testing Checklist

- [ ] All 19 pages load without errors
- [ ] Navigation menu works on desktop
- [ ] Mobile menu opens and closes correctly
- [ ] Footer links work
- [ ] Contact form submits successfully
- [ ] Consultation form submits successfully
- [ ] Emails received for both forms
- [ ] Phone numbers are clickable (mobile)
- [ ] Email addresses are clickable
- [ ] External links open in new tabs
- [ ] Animations trigger on scroll
- [ ] Page transitions are smooth
- [ ] No console errors in browser
- [ ] SSL certificate is valid (green padlock)
- [ ] Sitemap accessible: `/sitemap.xml`
- [ ] Robots.txt accessible: `/robots.txt`

### Cross-Browser Testing

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Performance Testing

1. **Lighthouse Audit**:
   ```bash
   # Install Lighthouse CLI
   npm install -g lighthouse

   # Run audit
   lighthouse https://drantipov.com --view
   ```

   Target scores:
   - Performance: 95+
   - Accessibility: 100
   - Best Practices: 100
   - SEO: 100

2. **PageSpeed Insights**:
   - Go to [pagespeed.web.dev](https://pagespeed.web.dev)
   - Test: `https://drantipov.com`
   - Review recommendations
   - Verify Core Web Vitals pass

### SEO Verification

1. **Structured Data Testing**:
   - Go to [validator.schema.org](https://validator.schema.org)
   - Test homepage: `https://drantipov.com`
   - Verify no errors in structured data
   - Check all schemas are detected

2. **Rich Results Test**:
   - Go to [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
   - Test key pages
   - Verify FAQ rich results
   - Verify Breadcrumb results

3. **Mobile-Friendly Test**:
   - Go to [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)
   - Test: `https://drantipov.com`
   - Verify mobile-friendly

## 🔄 Continuous Deployment

### Auto-Deploy on Git Push (Vercel/Netlify)

Automatic deployment is configured by default. Every push to main branch will:
1. Trigger build
2. Run tests (if configured)
3. Generate sitemap
4. Deploy to production
5. Invalidate CDN cache

### Manual Deploy (Custom Server)

SSH into server and run:
```bash
cd /var/www/dr-antipov
git pull origin main
yarn install --production
yarn build
pm2 restart dr-antipov
```

## 📊 Post-Launch Monitoring

### Week 1
- [ ] Monitor error rates daily
- [ ] Check form submissions working
- [ ] Verify emails being received
- [ ] Monitor site uptime
- [ ] Check analytics data collection
- [ ] Review search console for errors

### Week 2-4
- [ ] Monitor search rankings
- [ ] Review user behavior in analytics
- [ ] Check page load times
- [ ] Review Core Web Vitals
- [ ] Monitor form conversion rates
- [ ] Check for broken links

### Monthly
- [ ] Run Lighthouse audit
- [ ] Review analytics trends
- [ ] Check search console performance
- [ ] Update content as needed
- [ ] Review and respond to contact form inquiries
- [ ] Check SSL certificate expiration

## 🆘 Troubleshooting

### Site Not Loading
1. Check DNS propagation: `dig drantipov.com`
2. Verify build succeeded in hosting dashboard
3. Check server logs for errors
4. Verify environment variables are set

### Forms Not Sending Emails
1. Verify Resend API key is correct
2. Check Resend dashboard for delivery status
3. Verify domain is verified in Resend
4. Check spam folder
5. Review API route logs

### Slow Page Load
1. Run Lighthouse audit
2. Check image sizes (optimize if needed)
3. Review network tab in browser DevTools
4. Check hosting provider status
5. Consider CDN if not already using one

### SEO Issues
1. Verify sitemap is accessible
2. Check robots.txt not blocking pages
3. Verify structured data is valid
4. Check Google Search Console for errors
5. Ensure all pages have unique meta tags

## 📞 Support Contacts

- **Hosting Support**: Contact your hosting provider
- **Domain Registrar**: Contact domain provider
- **Email Service (Resend)**: support@resend.com
- **Development Team**: [Your contact information]

---

**Deployment Date**: _____________________

**Deployed By**: _____________________

**Production URL**: https://drantipov.com

**Status**: ⏳ Pending / ✅ Live / ❌ Issues
