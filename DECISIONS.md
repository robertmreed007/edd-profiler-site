# Project Decisions

## Kickoff Answers — Partner Session 2026-04-14

### Branding
- Product name: **EDD Profiler**
- Company name: **EDD Profiler** (product and company are the same)
- Tagline: *EDD Profiler: Uncovering and reporting on your High-Risk Customers for Smarter Financial Decisions.*
- Logo: To be created (no existing logo)
- Patent status: TBD
- Trademark status: TBD

### Audience & Tone
- Primary audience: BSA/Compliance Officers
- Buying process: Compliance officer champions the product; board approves purchase
- Tone focus: Efficiency, time savings, and ROI — messaging must resonate with both the compliance officer and the board

### Product Positioning
- Elevator pitch: *EDD Profiler empowers financial institutions to efficiently analyze high-risk customers through comprehensive analysis and tailored EDD reporting, ensuring compliance and enhancing risk management.*
- Key differentiator: Reports are generated based on **the bank's own policy and procedure** — not out-of-the-box, one-size-fits-all reporting. Can also review entire customer populations against bank policy to identify red flags for risk rating review.
- Relationship to existing systems: **Complement** to any AML system on the market (YellowHammer, Verafin, Abrigo, etc.) — not a replacement
- Value framing: Scalability — FTE savings of **days per review cycle**

### Content & Messaging
- Hero headline: TBD (to be drafted based on above)
- Key value props: Policy-driven reporting, population-wide screening, FTE time savings, flexible deployment, compliance confidence
- Product screenshots: Available — real outputs on fake/sample clients
- Screenshot access: **Gated behind the contact form**
- Case studies / testimonials: None — pre-launch site
- Client logos: None — pre-launch site
- Statistics / social proof: Frame around scalability and FTE savings (days saved per review cycle)

### Business Model
- Pricing model: TBD
- Pricing tiers: TBD
- Display pricing on site: **No** — drive prospects to Contact Sales
- Free trial / demo: TBD
- How prospects engage: **Contact Sales form on the site**

### Call to Action
- Primary CTA: **Contact Sales**
- CTA destination: **On-site form**
- Form fields: Name, Title, Institution Name, Email, Phone

### Security & Compliance Claims
- Deployment model: **Cloud or On-Premise** (bank's choice)
- Data handling: Cloud option — customer data leaves the bank's network. On-premise option — data stays within the bank's environment.
- Certifications: **In progress** — do NOT claim SOC 2, ISO 27001, or others on the site yet
- AI model usage: TBD
- Encryption standards: TBD

### Legal
- Jurisdiction / governing law: **Florida**
- Terms of Service: To be drafted
- Privacy Policy: To be drafted
- Company address: TBD

### Infrastructure
- Domain: **eddprofiler.com**
- Hosting: **Cloudflare Pages**
- CRM: **HubSpot** — account needs to be created
- Analytics: **Google Analytics**
- Email: TBD
- Code repository: TBD

## Design Decisions
- 2026-04-13: Fintech compliance aesthetic selected (deep navy + teal). See DESIGN_RESEARCH.md
- 2026-04-13: Tech stack: Next.js 14 + Tailwind + TypeScript
- 2026-04-13: Initial scaffold created with placeholder components
- 2026-04-14: Logo to be created — no existing brand mark

## What's Built So Far
- Project scaffolded at ~/Desktop/edd-profiler-site/
- Placeholder components exist but ALL content is subject to partner input
- Dev server: `npm run dev` → localhost:3000
