## EDD Profiler Website — Build Instructions

### Product Context
EDD Profiler is an AI-powered Enhanced Due Diligence automation platform for banks and financial institutions. It automates the BSA/AML EDD review process: risk scoring customers using a YellowHammer-compatible model, running negative news searches, analyzing transaction patterns (CTR, structuring, cash intensity), generating analyst-grade narratives, and producing examiner-ready PDF reports.

The working prototype exists at /Users/jamessnay/Desktop/EDD/ with Python modules, sample reports, and full documentation.

### Build Workflow
This site is built iteratively with the business partner. Follow this process:

1. **Kickoff Q&A** — Ask questions ONE AT A TIME to fill out DECISIONS.md. Cover: branding, audience, tone, content, business model, CTAs, legal, infrastructure. Don't assume — ask.
2. **Record answers** — Every answer goes into DECISIONS.md immediately.
3. **Build incrementally** — After enough answers to build a section, build it. Show on localhost:3000. Get feedback. Iterate.
4. **Design direction** — Fintech compliance aesthetic (deep navy, teal accent, Inter font, no serif). Research references: Jack Henry, Verafin, Abrigo, Alessa, NICE Actimize. See DESIGN_RESEARCH.md for detailed analysis.
5. **Deploy** — When ready, deploy to Cloudflare Pages. Connect HubSpot for lead capture.

### Tech Stack
- Next.js 14, TypeScript, Tailwind CSS
- lucide-react for icons
- Static export for Cloudflare Pages deployment
- HubSpot API for form submissions

### Key Rules
- Ask before building. Don't assume the partner wants what was in the prototype.
- One question at a time. Multiple choice when possible.
- Record every decision in DECISIONS.md with date.
- The partner may not be technical — explain options in business terms.
- Security messaging is critical for this audience (bank compliance officers).
- Never claim SOC 2 / ISO certifications unless told the company has them.
- "Patent Pending" only if told a provisional patent is filed.
