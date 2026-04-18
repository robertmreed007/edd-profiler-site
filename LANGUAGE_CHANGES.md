# EDD Profiler — Site Language Changes

Items that remain after reconciling with production infrastructure plans and stakeholder review.

---

## Open Items

### 1. Terms of Service: Governing law
**File:** `src/app/terms/page.tsx`
**Current:** "laws of the State of Delaware"
**Action:** Confirm with attorney — if entity is Delaware LLC, this is correct and DECISIONS.md should be updated. If Florida entity, change to Florida.

### 2. Contact form: Missing fields from DECISIONS.md
**File:** `src/app/contact/page.tsx`
**Current:** Full Name, Work Email, Institution Name, Message
**DECISIONS.md spec:** Name, Title, Institution Name, Email, Phone
**Action:** Add Title/Role and Phone fields when ready.

---

## Changes Made

### ROI stat callouts (`src/components/ROI.tsx`)
- **"100%" → "Repeatable"** with subtitle "Same rigor, every customer, every time"
- **"Examiner-Ready"** forced to single line, subtitle centered

---

## Reviewed and Confirmed — No Change Needed

- Compliance badges (Aligned/Compliant/Met) — accurately describes framework alignment
- "YH-Compatible" risk scoring — acceptable product positioning
- "Analyst-Grade Narratives" — acceptable marketing language
- "Anomaly identification" — ML model planned for production
- "Trend analysis" — acceptable as product evolves
- Contact page "never share" language — refers to marketing sharing, separate from service providers
- Pricing page — not linked in nav, will be finalized before launch
- "Most Popular" badge — pricing page not live
- All security/encryption claims — resolved by production stack
- All infrastructure claims — resolved by Supabase + Vercel + Railway
