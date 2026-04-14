# Deployment & Integration Guide

## Overview

This guide covers the full deployment pipeline: local development → GitHub → Cloudflare Pages (auto-deploy) → custom domain → HubSpot integration → analytics.

---

## Phase 1: Prepare for Static Export

### 1.1 Set Next.js to static export

Edit `next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

export default nextConfig;
```

### 1.2 Verify build works
```bash
npm run build
```
This creates an `out/` directory with the static site. Open `out/index.html` to verify.

### 1.3 Test locally
```bash
npx serve out
```
Visit http://localhost:3000 to verify all pages work as static files.

---

## Phase 2: GitHub Repository

### 2.1 Create the repo
```bash
# From the project directory
git init
git add .
git commit -m "Initial site"
```

Create a repo on GitHub (e.g., `your-org/edd-profiler-site`), then:
```bash
git remote add origin https://github.com/YOUR_ORG/edd-profiler-site.git
git push -u origin main
```

### 2.2 Add GitHub Actions for auto-deploy

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy out --project-name edd-profiler-site
```

### 2.3 Add GitHub Secrets

In GitHub repo → Settings → Secrets and variables → Actions, add:
- `CLOUDFLARE_API_TOKEN` — create at https://dash.cloudflare.com/profile/api-tokens (use "Edit Cloudflare Workers" template)
- `CLOUDFLARE_ACCOUNT_ID` — found at https://dash.cloudflare.com → right sidebar

---

## Phase 3: Cloudflare Pages

### 3.1 Create the Pages project

Option A (dashboard):
1. Go to https://dash.cloudflare.com → Workers & Pages → Create
2. Select "Pages" → "Connect to Git"
3. Select the GitHub repo
4. Build settings: Framework = Next.js (Static), Build command = `npm run build`, Output directory = `out`

Option B (CLI — for manual deploys before CI is set up):
```bash
npm run build
npx wrangler pages deploy out --project-name edd-profiler-site
```

### 3.2 Create deploy.sh for manual deploys
```bash
#!/bin/bash
# Deploy EDD Profiler site to Cloudflare Pages
echo "Building site..."
npm run build

echo "Deploying to Cloudflare Pages..."
npx wrangler pages deploy out --project-name edd-profiler-site

echo "Done!"
```
```bash
chmod +x deploy.sh
```

---

## Phase 4: Custom Domain

### 4.1 Register domain
Register your domain (e.g., eddprofiler.com) via GoDaddy, Namecheap, or Cloudflare Registrar.

### 4.2 Move DNS to Cloudflare (if not registered there)
1. In Cloudflare dashboard → Add a Site → enter domain
2. Select Free plan
3. Cloudflare gives you nameservers (e.g., `ada.ns.cloudflare.com`, `brad.ns.cloudflare.com`)
4. Go to your registrar → update nameservers to Cloudflare's
5. Wait for propagation (up to 24 hours, usually minutes)

### 4.3 Connect domain to Pages project
1. Cloudflare dashboard → Workers & Pages → your project → Custom domains
2. Add domain: `eddprofiler.com` and `www.eddprofiler.com`
3. Cloudflare creates the DNS records automatically
4. SSL certificate is provisioned automatically

### 4.4 Verify
- `https://eddprofiler.com` loads the site
- `https://www.eddprofiler.com` redirects to root
- SSL certificate shows as valid (padlock icon)

---

## Phase 5: HubSpot Integration

### 5.1 Create HubSpot account
Go to https://www.hubspot.com/ → Start Free. The free CRM tier includes:
- Contact management
- Forms
- Email marketing (limited)
- Basic workflows

### 5.2 Install HubSpot tracking code

Get your Portal ID and tracking code from HubSpot → Settings → Tracking & Analytics → Tracking Code.

Add to `src/app/layout.tsx` in the `<head>`:
```tsx
<Script
  id="hs-script-loader"
  strategy="afterInteractive"
  src={`//js.hs-scripts.com/YOUR_PORTAL_ID.js`}
/>
```

### 5.3 Create forms in HubSpot

**Form 1: "Request Demo" (primary CTA)**
- Fields: First Name, Last Name, Email, Company/Institution, Title/Role, Message
- HubSpot → Marketing → Forms → Create Form
- Note the Form ID (GUID)

**Form 2: "Contact Us" (general inquiry)**
- Fields: Name, Email, Message
- Note the Form ID

### 5.4 Connect forms to the site

Option A: HubSpot API submission (recommended — keeps your design):
```typescript
// src/lib/hubspot.ts
export async function submitToHubSpot(formId: string, fields: Record<string, string>) {
  const portalId = 'YOUR_PORTAL_ID';
  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: Object.entries(fields).map(([name, value]) => ({ name, value })),
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      }),
    }
  );
  return response.ok;
}
```

Option B: Embed HubSpot form (easier but less design control):
```tsx
<script
  charset="utf-8"
  type="text/javascript"
  src="//js.hsforms.net/forms/embed/v2.js"
/>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "YOUR_PORTAL_ID",
    formId: "YOUR_FORM_ID"
  });
</script>
```

### 5.5 Register external domains in HubSpot
HubSpot → Settings → Tracking & Analytics → Tracking Code → Advanced Tracking
Add your domain (e.g., `eddprofiler.com` and `www.eddprofiler.com`)

### 5.6 Create workflow automation

**Demo Request → Email Response:**
1. HubSpot → Automation → Workflows → Create workflow
2. Trigger: Form submission (select "Request Demo" form)
3. Action 1: Send email (create a "Demo Confirmation" email template)
4. Action 2: (Optional) Create task for sales team
5. Action 3: (Optional) Send internal notification email
6. Turn ON the workflow

### 5.7 Verify email sending domain
If using a custom "from" address (e.g., `info@eddprofiler.com`):
1. HubSpot → Settings → Marketing → Email → Connect a sending domain
2. Add your domain
3. HubSpot provides DNS records (SPF, DKIM, DMARC)
4. Add those records in Cloudflare DNS
5. Verify in HubSpot

---

## Phase 6: Analytics

### 6.1 Google Analytics
1. Create property at https://analytics.google.com/
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `src/app/layout.tsx`:
```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 6.2 Microsoft Clarity (optional — heatmaps & session recording)
1. Create project at https://clarity.microsoft.com/
2. Get Project ID
3. Add tracking code to layout.tsx

### 6.3 Cloudflare Analytics
Automatically available in your Cloudflare dashboard — no code needed.

---

## Phase 7: Email Setup (Google Workspace)

If using Google Workspace for email (info@eddprofiler.com):

### 7.1 Add MX records in Cloudflare DNS:
| Type | Name | Content | Priority |
|------|------|---------|----------|
| MX | @ | aspmx.l.google.com | 1 |
| MX | @ | alt1.aspmx.l.google.com | 5 |
| MX | @ | alt2.aspmx.l.google.com | 5 |
| MX | @ | alt3.aspmx.l.google.com | 10 |
| MX | @ | alt4.aspmx.l.google.com | 10 |

### 7.2 Add SPF record:
| Type | Name | Content |
|------|------|---------|
| TXT | @ | v=spf1 include:_spf.google.com ~all |

### 7.3 Add DKIM (from Google Workspace Admin):
Follow Google Workspace Admin → Apps → Google Workspace → Gmail → Authenticate email

---

## Checklist

### Pre-Launch
- [ ] All DECISIONS.md items resolved
- [ ] Site builds without errors (`npm run build`)
- [ ] All pages work as static files
- [ ] Forms submit to HubSpot correctly
- [ ] Legal pages (Privacy, Terms) reviewed and approved
- [ ] Favicon and OpenGraph image set
- [ ] Mobile responsive verified

### Deploy
- [ ] GitHub repo created and code pushed
- [ ] Cloudflare Pages project created
- [ ] Custom domain connected and SSL active
- [ ] GitHub Actions auto-deploy working (push to main → live)
- [ ] deploy.sh works for manual deploys

### Post-Deploy
- [ ] HubSpot tracking code live and collecting data
- [ ] HubSpot forms receiving submissions
- [ ] Workflow sending confirmation emails
- [ ] Google Analytics receiving pageviews
- [ ] Email domain verified for sending
- [ ] Test form submission end-to-end
- [ ] Test on mobile devices
- [ ] Test page speed (aim for 90+ Lighthouse score)

### Ongoing
- [ ] Monitor HubSpot for leads
- [ ] Review Clarity heatmaps after first 100 visitors
- [ ] Update DECISIONS.md with any post-launch changes
