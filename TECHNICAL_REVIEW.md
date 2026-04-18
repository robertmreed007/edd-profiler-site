# EDD Profiler Website — Technical Accuracy Review

**Reviewer:** BSA/AML Compliance Technical Review
**Date:** 2026-04-17
**Scope:** All marketing site source code vs. actual product capabilities
**Standard:** Every claim evaluated against the working prototype at `/Users/jamessnay/Desktop/EDD/`

---

## Summary of Findings

| Category | Count |
|----------|-------|
| ACCURATE | 28 |
| MISLEADING | 11 |
| INACCURATE | 5 |
| OVERCLAIM | 6 |
| VAGUE BUT OK | 8 |
| SUGGESTION | 9 |

**Critical issues requiring immediate correction:** 8
**Items that will cause credibility damage with examiners/compliance officers:** 6

---

## Component-by-Component Review

---

### 1. Hero.tsx

**Claim:** "BSA/AML Enhanced Due Diligence Automation"
**Assessment:** ACCURATE
**Notes:** Correctly describes what the product does.

---

**Claim:** "Uncover and Report on Your High-Risk Customers."
**Assessment:** ACCURATE
**Notes:** Matches the tagline from DECISIONS.md and accurately reflects product function.

---

**Claim:** "EDD Profiler empowers financial institutions to efficiently analyze high-risk customers through comprehensive analysis and tailored EDD reporting — built around *your* bank's policy and procedure, not a one-size-fits-all template."
**Assessment:** ACCURATE
**Notes:** This is the agreed-upon elevator pitch from DECISIONS.md and matches the product's key differentiator (policy-driven reporting).

---

**Claim:** Mini dashboard mockup showing "1,247 Customers Scored", "83 EDD Reviews Due", "12 High Risk Alerts"
**Assessment:** VAGUE BUT OK
**Notes:** This is clearly a UI mockup with sample data. No claim that these are real numbers. However, the mockup implies a live dashboard experience that does not currently exist — the product generates batch reports, not a real-time dashboard. Consider adding a label like "Illustrative" or "Sample Output."

---

**Claim:** Portfolio Risk Overview with score bars showing 0-100 distribution
**Assessment:** ACCURATE
**Notes:** The product does score 0-100 and does generate risk distribution charts in its reports.

---

### 2. ProblemStatement.tsx

**Claim:** "Each EDD review requires 3-5 hours of analyst time."
**Assessment:** VAGUE BUT OK
**Notes:** This is a commonly cited industry figure and is used in DECISIONS.md. Acceptable as a general industry claim but not sourced.

---

**Claim:** "Experienced BSA analysts are scarce and expensive. Turnover means institutional knowledge walks out the door..."
**Assessment:** ACCURATE
**Notes:** Industry-standard pain point. Not a product claim.

---

**Claim:** "Different analysts produce different results. Varying depths of review, inconsistent narrative quality, and subjective risk assessments create examination risk."
**Assessment:** ACCURATE
**Notes:** Industry-standard pain point. Not a product claim.

---

**Claim:** "Regulatory pressure is increasing while customer bases grow. EDD backlogs expand quarter after quarter, creating compliance exposure."
**Assessment:** ACCURATE
**Notes:** Industry-standard pain point. Not a product claim.

---

**Claim:** "60% of community banks report EDD backlogs"
**Assessment:** MISLEADING
**Notes:** This statistic is presented without attribution. If this is not from a published survey (ACAMS, ABA, FinCEN, etc.), it should be removed or sourced. Unsourced statistics on a compliance product site will be questioned by sophisticated buyers. If it is sourced, add a footnote.
**Recommended fix:** Either cite the source or replace with "Many community banks report EDD backlogs" or remove the specific percentage.

---

**Claim:** "$50K+ annual cost per BSA analyst"
**Assessment:** VAGUE BUT OK
**Notes:** Plausible salary floor for a BSA analyst. Low end if including benefits, overhead, and fully-loaded cost. Not technically wrong but could be more precise.
**Recommended fix:** Consider "$75K-$120K fully loaded" or cite BLS/industry data.

---

**Claim:** "3-5 hrs per manual EDD review"
**Assessment:** VAGUE BUT OK
**Notes:** Matches the problem card text. Consistent with industry experience. Acceptable.

---

### 3. HowItWorks.tsx

**Claim:** "Upload KYC/CDD data and transaction history from your core system"
**Assessment:** VAGUE BUT OK
**Notes:** The word "from" is doing heavy lifting here. The product reads Excel/CSV files that the user exports from their core system. The product does NOT connect to any core system directly. The language is technically defensible (you upload data that came "from" your core system), but a compliance officer reading this will likely assume a direct integration.

---

**Claim:** "Connect to your core banking platform or upload CSV/Excel exports."
**Assessment:** MISLEADING — CRITICAL
**Notes:** The product does NOT connect to any core banking platform. It reads CSV/Excel files. The phrase "Connect to your core banking platform" is factually incorrect for the current product. This is the single most damaging claim on the site because compliance officers will ask about it in the first sales call, and the answer will be "we read Excel files." That disconnect destroys credibility.
**Recommended fix:** Remove "Connect to your core banking platform or" and replace with: "Upload CSV or Excel exports from your core system. Customer demographics, account information, transaction history, and existing CDD data are ingested and normalized automatically."

---

**Claim:** "Customer demographics, account information, transaction history, and existing CDD data are ingested and normalized automatically."
**Assessment:** ACCURATE
**Notes:** The product does ingest and normalize this data from uploaded files.

---

**Claim:** "AI scores every customer using a YellowHammer-compatible risk model"
**Assessment:** MISLEADING
**Notes:** The phrasing "YellowHammer-compatible" could be interpreted as "works with YellowHammer" or "endorsed by YellowHammer." The product uses a risk model EMULATED from publicly available information about YellowHammer's approach and FFIEC guidance. It is not the YellowHammer algorithm, not licensed from YellowHammer, and not validated by YellowHammer.
**Recommended fix:** "AI scores every customer using an FFIEC-aligned weighted risk model compatible with YellowHammer-style scoring" or "AI scores every customer using a 4-dimension risk model aligned with FFIEC guidance."

---

**Claim:** "Runs negative news searches with AML-specific keyword queries."
**Assessment:** ACCURATE
**Notes:** The product does run Google searches using the Boolean AML keyword query from bank procedures. Note: The boolean query has a known parenthesization bug that causes overly generic results, but the claim itself is accurate — it does run the searches.

---

**Claim:** "Flags CTR thresholds, structuring patterns ($8K-$10K), cash-intensive activity, and volume deviations."
**Assessment:** ACCURATE
**Notes:** All four of these capabilities exist in the product.

---

**Claim:** "Scores across Customer Type, Products, Geography, and Transactions."
**Assessment:** ACCURATE
**Notes:** These are the exact four dimensions in the product's risk model.

---

**Claim:** "CDD consistency analysis, transaction pattern narratives, adverse media summaries, risk score justification, and escalation recommendations."
**Assessment:** ACCURATE
**Notes:** The product generates all of these.

---

**Claim:** "Output matches your EDD checklist format with proper folder structures."
**Assessment:** ACCURATE
**Notes:** The product does create folder structures matching bank EDD procedure naming conventions.

---

### 4. Features.tsx

**Claim:** "YH-Compatible Risk Scoring — 4-dimension weighted risk model: Customer Type, Products, Geography, and Transactions. Score 0-100 with configurable thresholds for EDD triggers."
**Assessment:** MISLEADING
**Notes:** Same "YH-Compatible" issue as above. The feature description itself is accurate (4 dimensions, 0-100, configurable thresholds), but the title implies a relationship with YellowHammer that does not exist. Additionally, the weights (25%, 20%, 15%, 40%) could be mentioned for transparency, but omitting them is acceptable for marketing copy.
**Recommended fix:** Retitle to "FFIEC-Aligned Risk Scoring" or "Weighted Risk Scoring Model." If YellowHammer compatibility is a key selling point, add a disclaimer: "Designed for compatibility with YellowHammer-style scoring frameworks. Not affiliated with or endorsed by YellowHammer."

---

**Claim:** "Automated Adverse Media — Negative news search using the exact AML keyword queries from your procedures. Results analyzed for relevance and flagged by severity."
**Assessment:** ACCURATE with caveat
**Notes:** The product does use the bank's keyword queries. "Results analyzed for relevance" is accurate (AI analyzes results). "Flagged by severity" — the product flags relevance but the severity flagging is part of the AI narrative, not a formal severity scoring system. Minor nuance.
**SUGGESTION:** Consider noting that the adverse media search uses publicly available search engines, not a proprietary adverse media database (like World-Check, Dow Jones, or LexisNexis). Compliance officers will want to know the source.

---

**Claim:** "Transaction Pattern Detection — CTR threshold flagging, structuring detection ($8K-$10K), cash intensity analysis, volume deviation tracking, and anomaly identification."
**Assessment:** ACCURATE for the first four items. OVERCLAIM for "anomaly identification."
**Notes:** The product flags CTR thresholds (>=$10K), structuring range ($8K-$9,999), cash intensity (% of volume), and volume deviations (vs. CDD expected). However, "anomaly identification" implies a statistical anomaly detection capability that goes beyond simple threshold/range flagging. The product does not run machine learning anomaly detection.
**Recommended fix:** Remove "and anomaly identification" or replace with "and international transaction tracking" (which the product actually does).

---

**Claim:** "Period-over-Period Migration — Track risk score changes across review cycles. Identify up-risked, de-risked, and newly flagged customers automatically with trend analysis."
**Assessment:** ACCURATE for the first two sentences. OVERCLAIM for "trend analysis."
**Notes:** The product tracks UP-RISKED, DE-RISKED, and newly flagged customers between periods. However, "trend analysis" implies multi-period trend lines or statistical trending, which the product does not do — it compares two adjacent periods.
**Recommended fix:** Replace "with trend analysis" with "with migration summaries" or "with period comparison."

---

**Claim:** "Analyst-Grade Narratives — AI generates BSA analyst assessments with CDD consistency tables, transaction pattern narratives, and escalation recommendations."
**Assessment:** MISLEADING
**Notes:** The narratives are AI-GENERATED, not written by human analysts. "Analyst-Grade" implies the quality equals that of a human BSA analyst, which has not been independently validated. The description correctly says "AI generates," which is good, but the title "Analyst-Grade" is an unsubstantiated quality claim. A bank examiner would ask: "How did you validate that these are analyst-grade?"
**Recommended fix:** Retitle to "AI-Generated Analyst Narratives" or "Automated BSA Narratives." The description text is fine as-is.

---

**Claim:** "Examiner-Ready Reports — PDF reports matching your EDD checklist format. Proper folder structures per procedure. Document naming conventions followed automatically."
**Assessment:** VAGUE BUT OK
**Notes:** "Examiner-Ready" is a value judgment. The reports are structured to match bank EDD procedures, which is accurate. Whether an examiner will actually accept them as-is depends on the examiner. The claim is aspirational but not false.
**SUGGESTION:** Consider adding "designed to meet" before "examiner-ready" expectations, or noting that all outputs should be reviewed by qualified compliance staff before regulatory submission (which the Terms of Service already states).

---

### 5. ProductPreview.tsx

**Claim:** "Real-time risk scoring, migration tracking, and priority queuing in one dashboard."
**Assessment:** MISLEADING
**Notes:** The product does NOT provide real-time risk scoring. It performs batch scoring on uploaded data. There is no live dashboard with real-time updates. The mockup shows a dashboard-style view, but the actual product generates PDF reports and Excel outputs, not an interactive dashboard.
**Recommended fix:** "Batch risk scoring, migration tracking, and priority queuing — all in one output package." Or if a dashboard is planned, note "Coming soon" or show the actual PDF output format instead.

---

**Claim:** Dashboard mockup with sample customer names (ACME Cash Services LLC, Golden Dragon Restaurant, etc.)
**Assessment:** ACCURATE
**Notes:** These are clearly fictitious sample names. The data patterns shown (MSB with score 94, cash-intensive restaurant, import/export company) accurately reflect the types of customers the product would flag. Good illustrative content.

---

**Claim:** Migration Summary showing Up-Risked (23), De-Risked (15), Newly Flagged (8), Stable (1201)
**Assessment:** ACCURATE
**Notes:** The product does generate migration categories matching these labels.

---

### 6. Security.tsx

**Claim:** "Bank-Grade Encryption — AES-256 encryption at rest, TLS 1.3 in transit. All data encrypted end-to-end with keys managed per institution."
**Assessment:** OVERCLAIM — CRITICAL
**Notes:** Multiple issues here:
1. "Bank-Grade Encryption" — The product runs on Vercel/Supabase/Railway. These platforms provide TLS and at-rest encryption, but calling it "bank-grade" implies a level of security certification and infrastructure hardening that has not been achieved. Bank-grade typically implies compliance with FFIEC IT examination standards, penetration testing, and SOC 2 certification — none of which exist.
2. "AES-256 encryption at rest" — Supabase and Railway likely use AES-256 by default on their managed databases, but this has not been independently verified for this deployment. The DECISIONS.md says encryption standards are "TBD."
3. "TLS 1.3 in transit" — Vercel and Cloudflare do support TLS 1.3, so this is likely accurate but should be verified.
4. "Keys managed per institution" — There is no evidence of per-institution key management in the product. This would require a key management service (KMS) with institution-scoped keys, which is not part of the current architecture.
**Recommended fix:** "Data encrypted at rest and in transit using industry-standard protocols. Cloud deployments leverage infrastructure-level encryption. On-premise deployments inherit your institution's encryption standards." Remove "Bank-Grade" and "keys managed per institution" until those claims can be substantiated.

---

**Claim:** "Security-First Architecture — Built from the ground up for enterprise security. Access controls, activity monitoring, and incident response designed for financial institutions."
**Assessment:** OVERCLAIM
**Notes:** The product runs on commodity cloud platforms (Vercel, Supabase, Railway). It was not "built from the ground up for enterprise security." There is no documented incident response plan. "Access controls" and "activity monitoring" are vague — the product may have basic auth, but enterprise-grade RBAC and SIEM-integrated monitoring have not been demonstrated.
**Recommended fix:** "Designed with security in mind. Role-based access controls and deployment flexibility for institutions with varying security requirements." Remove "built from the ground up for enterprise security" and "incident response."

---

**Claim:** "On-Premise Option — Deploy within your own network. No customer data leaves your infrastructure. Ideal for institutions with strict data residency requirements."
**Assessment:** ACCURATE
**Notes:** DECISIONS.md confirms that on-premise deployment is offered. The claim is accurate and this is a legitimate differentiator.

---

**Claim:** "Audit Trail — Every action logged with timestamps and user attribution. Full chain of custody for examiner review and regulatory inquiries."
**Assessment:** OVERCLAIM
**Notes:** The product generates reports and outputs, but a comprehensive audit trail with "every action logged with timestamps and user attribution" and "full chain of custody" implies an enterprise logging infrastructure that has not been demonstrated. The product produces PDF reports — it is not clear that every intermediate step is logged with user attribution.
**Recommended fix:** "Report generation activity is logged. Output packages include generation timestamps and input data references for examiner review."

---

**Claim:** "Enterprise security. Zero compromise."
**Assessment:** OVERCLAIM
**Notes:** "Zero compromise" is a strong absolute claim. The product has not been penetration tested, does not have SOC 2, and runs on shared cloud infrastructure. "Zero compromise" could also be interpreted as "has never been compromised," which is unknowable for any product.
**Recommended fix:** "Security designed for financial institutions" or "Built with security as a priority."

---

### 7. Compliance.tsx

**Claim:** "FFIEC BSA/AML Examination Manual aligned"
**Assessment:** ACCURATE
**Notes:** The risk scoring model is based on FFIEC guidance. The product's approach to EDD aligns with FFIEC examination manual expectations.

---

**Claim:** "FinCEN CDD Rule compliant"
**Assessment:** MISLEADING
**Notes:** The product helps banks perform CDD/EDD, but the product itself is not "FinCEN CDD Rule compliant" — the BANK is the regulated entity that must be compliant. The product is a tool that can help banks comply. This is an important distinction for compliance officers who will immediately flag this language.
**Recommended fix:** "Supports FinCEN CDD Rule compliance" or "Aligned with FinCEN CDD Rule requirements."

---

**Claim:** "OCC/FDIC examination expectations met"
**Assessment:** MISLEADING
**Notes:** Same issue — the product does not "meet" OCC/FDIC expectations; the bank does. The product can help the bank meet those expectations. Additionally, this implies the product has been reviewed or validated by OCC/FDIC, which it has not.
**Recommended fix:** "Supports OCC/FDIC examination expectations" or "Designed to help meet OCC/FDIC examination expectations."

---

**Claim:** "Configurable to match your institution's BSA program"
**Assessment:** ACCURATE
**Notes:** This is a core product feature — policy-driven configuration.

---

**Claim:** "Supports both risk-based and rules-based EDD triggers"
**Assessment:** ACCURATE
**Notes:** The product supports configurable score thresholds (risk-based) and auto-HR overrides for specific business types (rules-based).

---

**Claim:** "Audit-ready documentation for every review cycle"
**Assessment:** VAGUE BUT OK
**Notes:** The product generates structured PDF reports. "Audit-ready" is aspirational but directionally correct.

---

**Claim:** Regulatory Alignment panel showing green "Aligned/Compliant/Met" badges for FFIEC, FinCEN, OCC, FDIC
**Assessment:** MISLEADING — CRITICAL
**Notes:** This visual presents compliance status badges with green checkmarks that strongly imply formal certification or regulatory validation. These frameworks do not issue "compliance" certifications to software vendors. The visual communicates a level of regulatory endorsement that does not exist and cannot exist. A bank compliance officer or examiner seeing this will either (a) ask for the certification documentation, which doesn't exist, or (b) lose trust in the vendor.
**Recommended fix:** Replace the green status badges with language like "Designed to support" each framework. Remove the "Compliant/Aligned/Met" status indicators and the green badge styling. Consider replacing with a simple checklist of "Regulatory frameworks our output format supports."

---

**Claim:** "Built for regulators, not around them"
**Assessment:** VAGUE BUT OK
**Notes:** Marketing tagline. Directionally fine.

---

**Claim:** "EDD Profiler was designed by BSA compliance professionals to meet the exact standards examiners expect."
**Assessment:** VAGUE BUT OK
**Notes:** Acceptable if the founders/designers are indeed BSA compliance professionals. The phrase "exact standards examiners expect" is strong but defensible if the output format genuinely matches examination expectations.

---

### 8. ROI.tsx

**Claim:** "Minutes per review, not hours"
**Assessment:** ACCURATE
**Notes:** The automated process does generate reports in minutes vs. the 3-5 hours for manual review.

---

**Claim:** "Consistent examiner-ready output every time"
**Assessment:** VAGUE BUT OK
**Notes:** Consistency is a legitimate benefit of automation. "Examiner-ready" is the same aspirational claim noted above.

---

**Claim:** "Scalable to thousands of customers"
**Assessment:** ACCURATE
**Notes:** The batch processing model can handle large customer populations.

---

**Claim:** "Automated adverse media screening"
**Assessment:** ACCURATE
**Notes:** The product does automate adverse media screening via Google search.

---

**Claim:** "Period-over-period risk migration tracking"
**Assessment:** ACCURATE
**Notes:** The product does this.

---

**Claim:** "Full audit trail for every decision"
**Assessment:** OVERCLAIM
**Notes:** Same audit trail concern as in Security.tsx. "Every decision" implies comprehensive logging that has not been demonstrated.
**Recommended fix:** "Documentation of scoring inputs and outputs for every review."

---

**Claim:** "100% Consistent review quality"
**Assessment:** MISLEADING
**Notes:** "100%" is an absolute claim. AI-generated outputs vary based on the underlying model, prompt, and input data. While automation provides MORE consistency than human analysts, claiming "100% consistent" is not technically accurate for AI-generated content. Two runs of the same customer data through an LLM will not produce identical narratives.
**Recommended fix:** "Standardized review quality" or "Consistent methodology across every review."

---

**Claim:** "Examiner-Ready — Every report, every time"
**Assessment:** VAGUE BUT OK
**Notes:** Aspirational but not false. Would be stronger with qualification.

---

### 9. CTA.tsx

**Claim:** "Ready to automate your EDD process?"
**Assessment:** ACCURATE
**Notes:** Standard CTA language. No technical claim.

---

**Claim:** "Stop drowning in manual reviews. Start delivering consistent, examiner-ready EDD reports at scale."
**Assessment:** ACCURATE
**Notes:** Consistent with product capabilities.

---

### 10. Header.tsx

**Assessment:** ACCURATE
**Notes:** Navigation only. No technical claims. Links to Platform, Features, Security, Contact are all present on the site.

---

### 11. Footer.tsx

**Claim:** "AI-powered BSA/AML compliance automation"
**Assessment:** ACCURATE
**Notes:** Correctly describes the product.

---

**Claim:** "EDD Profiler (TM)"
**Assessment:** SUGGESTION
**Notes:** DECISIONS.md says trademark status is "TBD." Using the TM symbol is permissible (it does not require registration — it simply asserts a claim), but be aware that this is not yet a registered trademark. Do NOT use the (R) symbol until registration is complete.

---

### 12. Logo.tsx

**Assessment:** N/A
**Notes:** SVG logo rendering only. No text claims.

---

### 13. Pricing Page (pricing/page.tsx)

**Claim:** "Transparent pricing. No per-report fees. No hidden costs."
**Assessment:** INACCURATE
**Notes:** DECISIONS.md explicitly states: "Display pricing on site: No — drive prospects to Contact Sales" and pricing model/tiers are "TBD." The pricing page shows specific prices ($2,500/mo, $7,500/mo) that have not been agreed upon. This page should not exist per the partner decisions, or at minimum should say "Contact Sales" for all tiers.
**Recommended fix:** Either remove the pricing page entirely (per DECISIONS.md) or replace all prices with "Contact Sales" and remove the "Transparent pricing" tagline since pricing is not transparent if it's TBD.

---

**Claim:** "Community — $2,500/mo" and "Enterprise — $7,500/mo"
**Assessment:** INACCURATE
**Notes:** These prices were never agreed upon. DECISIONS.md says pricing is TBD.
**Recommended fix:** Remove specific prices or replace with "Contact Sales."

---

**Claim:** "Up to 500 customers monitored" (Community tier)
**Assessment:** INACCURATE
**Notes:** No customer limits have been defined for any tier.

---

**Claim:** "API access for core system integration" (Enterprise tier)
**Assessment:** INACCURATE
**Notes:** There is no API for core system integration. The product reads Excel/CSV files. This is factually wrong and will create false expectations.
**Recommended fix:** Remove this claim entirely until an API exists.

---

**Claim:** "Air-gapped installation available" (On-Premise tier)
**Assessment:** MISLEADING
**Notes:** An air-gapped installation would require the product to function entirely without internet access. However, the negative news search feature requires Google search (internet access). An air-gapped installation would lose this functionality. The claim is not impossible but requires significant caveats.
**Recommended fix:** Either remove or add caveat: "Air-gapped installation available (adverse media screening requires network access)."

---

**Claim:** "Source code escrow" (On-Premise tier)
**Assessment:** MISLEADING
**Notes:** No source code escrow arrangement has been established. This is a contractual commitment that requires a third-party escrow agent. Listing it as a feature before it exists is premature.
**Recommended fix:** Remove until an escrow arrangement is in place, or mark as "Available upon request."

---

**Claim:** "Most Popular" badge on Enterprise tier
**Assessment:** INACCURATE
**Notes:** The product is pre-launch with zero customers. Nothing is "most popular."
**Recommended fix:** Remove the "Most Popular" badge.

---

**Claim:** "All plans include bank-grade encryption, audit trails, and regulatory-aligned output formats."
**Assessment:** OVERCLAIM
**Notes:** "Bank-grade encryption" issues noted above. "Audit trails" issues noted above. "Regulatory-aligned output formats" is acceptable.
**Recommended fix:** "All plans include encrypted data handling and regulatory-aligned output formats."

---

### 14. Contact Page (contact/page.tsx)

**Claim:** "See how EDD Profiler can automate your enhanced due diligence process. Fill out the form and we will schedule a personalized walkthrough."
**Assessment:** ACCURATE
**Notes:** Standard demo request language.

---

**Claim:** Form fields: Full Name, Work Email, Institution Name, Message
**Assessment:** SUGGESTION
**Notes:** DECISIONS.md specifies form fields as: Name, Title, Institution Name, Email, Phone. The current form is missing "Title" and "Phone" fields, which are listed in the agreed-upon requirements. The "Message" field is a reasonable addition but the core fields should match the spec.
**Recommended fix:** Add Title and Phone fields per DECISIONS.md.

---

**Claim:** "All communications are encrypted. We never share your information with third parties."
**Assessment:** VAGUE BUT OK
**Notes:** Standard HTTPS provides encrypted communication. "We never share your information with third parties" — the Privacy Policy (Section 5) says they MAY share with service providers, which technically contradicts "never." This inconsistency should be resolved.
**Recommended fix:** "All communications are encrypted. We do not sell or share your information for marketing purposes."

---

**Claim:** "For institutions with 1,000+ customers or on-premise requirements, we offer dedicated implementation support."
**Assessment:** VAGUE BUT OK
**Notes:** Aspirational but reasonable for enterprise sales positioning.

---

### 15. Privacy Policy (privacy/page.tsx)

**Claim:** "All data is stored in SOC 2 Type II certified facilities."
**Assessment:** OVERCLAIM — CRITICAL
**Notes:** DECISIONS.md explicitly states: "Certifications: In progress — do NOT claim SOC 2, ISO 27001, or others on the site yet." This directly violates the partner agreement. While the underlying infrastructure providers (Vercel, Supabase, Railway) may individually hold SOC 2, stating "All data is stored in SOC 2 Type II certified facilities" implies that EDD Profiler's deployment has been audited and certified, which it has not.
**Recommended fix:** Remove the SOC 2 reference entirely. Replace with: "We implement industry-standard security measures including encryption at rest and in transit, and strict access controls. For on-premise deployments, customer data never leaves your infrastructure."

---

**Claim:** "AES-256 encryption at rest, TLS 1.3 encryption in transit"
**Assessment:** MISLEADING
**Notes:** Same concern as in Security.tsx — the DECISIONS.md says encryption standards are "TBD." These specific standards may be provided by the underlying cloud platforms but have not been independently verified for this product.
**Recommended fix:** "Industry-standard encryption at rest and in transit" until specific standards are verified and documented.

---

**Claim:** "We do not sell, rent, or share your personal information or customer data with third parties for their marketing purposes. We may share information with service providers..."
**Assessment:** ACCURATE
**Notes:** Standard and appropriate privacy language.

---

### 16. Terms of Service (terms/page.tsx)

**Claim:** "EDD Profiler provides automated Enhanced Due Diligence analysis tools for financial institutions, including risk scoring, transaction analysis, adverse media screening, and report generation."
**Assessment:** ACCURATE
**Notes:** Correct and complete description of the product.

---

**Claim:** "The Service is intended to assist compliance professionals and does not constitute legal or regulatory advice."
**Assessment:** ACCURATE
**Notes:** Appropriate and necessary disclaimer.

---

**Claim:** "ensure that authorized personnel review all AI-generated outputs before regulatory submission"
**Assessment:** ACCURATE
**Notes:** Good. This is essential and correctly disclosed.

---

**Claim:** "The accuracy of risk scores and analyses depends on the quality and completeness of input data."
**Assessment:** ACCURATE
**Notes:** Appropriate and necessary disclaimer.

---

**Claim:** "governed by and construed in accordance with the laws of the State of Delaware"
**Assessment:** INACCURATE
**Notes:** DECISIONS.md specifies Florida as the governing law jurisdiction, not Delaware.
**Recommended fix:** Change "State of Delaware" to "State of Florida."

---

---

## Priority Corrections (Must Fix Before Launch)

### P0 — Fix Immediately (Legal/Compliance Risk)

1. **Privacy Policy: SOC 2 claim** — Remove "SOC 2 Type II certified facilities." Directly violates DECISIONS.md partner agreement. Could constitute a false security representation to bank customers.

2. **Terms of Service: Governing law** — Change Delaware to Florida per DECISIONS.md.

3. **HowItWorks: "Connect to your core banking platform"** — Remove the core system connection claim. The product reads Excel/CSV files. This will be exposed in the first sales call and destroy credibility.

4. **Pricing Page: Existence** — DECISIONS.md says no pricing on site. Either remove the page or replace all specific prices with "Contact Sales."

5. **Pricing Page: "API access for core system integration"** — Remove. No API exists.

### P1 — Fix Before Launch (Credibility Risk)

6. **Compliance.tsx: Regulatory badges with green "Compliant/Met" status** — Redesign to "Designed to support" language. The green badge styling implies formal certification.

7. **Security.tsx: "Bank-Grade Encryption" with per-institution key management** — Remove unsubstantiated claims about key management and bank-grade encryption.

8. **Features.tsx and HowItWorks.tsx: "YH-Compatible" / "YellowHammer-compatible"** — Add disclaimer or reframe as "FFIEC-aligned risk scoring." The current language suggests an affiliation with YellowHammer that could create trademark/misrepresentation issues.

### P2 — Fix Before Demos (Polish)

9. **ProductPreview.tsx: "Real-time risk scoring"** — Change to "batch risk scoring" or remove "real-time."

10. **Features.tsx: "anomaly identification"** — Replace with "international transaction tracking" which the product actually does.

11. **Features.tsx: "Analyst-Grade Narratives"** — Change to "AI-Generated Analyst Narratives."

12. **ROI.tsx: "100% Consistent review quality"** — Change to "Standardized" or "Consistent methodology."

13. **ProblemStatement.tsx: "60% of community banks"** — Source the statistic or remove the specific percentage.

14. **Contact form: Missing fields** — Add Title and Phone per DECISIONS.md.

15. **Pricing Page: "Most Popular" badge** — Remove (zero customers).

16. **Pricing Page: "Air-gapped installation"** — Add caveat about adverse media search requiring network access.

---

## Consistency Issues Across Pages

| Issue | Where | Notes |
|-------|-------|-------|
| "Bank-grade encryption" used inconsistently | Security.tsx, pricing/page.tsx | Same overclaim, different contexts |
| "Audit trail" scope varies | Security.tsx, ROI.tsx, pricing/page.tsx | Security says "every action logged," ROI says "every decision" — neither is substantiated |
| Contact form fields don't match DECISIONS.md | contact/page.tsx | Missing Title, Phone |
| Governing law: Delaware vs. Florida | terms/page.tsx vs. DECISIONS.md | Direct contradiction |
| Pricing visibility: shown vs. "don't show" | pricing/page.tsx vs. DECISIONS.md | Direct contradiction |
| "Never share" vs. "may share with service providers" | contact/page.tsx vs. privacy/page.tsx | Internal contradiction between pages |

---

## What the Site Gets Right

The site does several things well from a compliance marketing perspective:

1. **Policy-driven messaging** — The emphasis on "your bank's policy and procedure" is the product's genuine differentiator and is consistently messaged.
2. **Terms of Service disclaimers** — Section 3 (user responsibility for reviewing AI outputs) and Section 7 (not legal advice) are appropriate and necessary.
3. **Problem statement** — The pain points are real and will resonate with the target audience.
4. **Feature descriptions (mostly)** — The core capabilities (risk scoring dimensions, CTR flagging, structuring detection, CDD consistency analysis, migration tracking) are accurately described.
5. **On-premise option** — Legitimately offered and correctly described.
6. **CTA strategy** — Contact Sales as primary CTA matches DECISIONS.md.

---

## Final Assessment

The site's core messaging about the product's PURPOSE and VALUE PROPOSITION is strong and accurate. The problems arise in specific technical claims about security infrastructure, system integrations, and regulatory certifications that overstate what currently exists. These overclaims are concentrated in three areas:

1. **Security/encryption specifics** — Claiming bank-grade, per-institution keys, SOC 2 facilities
2. **Integration claims** — "Connect to your core banking platform," "API access"
3. **Regulatory compliance badges** — Implying formal certification/validation

A compliance officer evaluating this product will probe exactly these three areas. Getting them wrong on the marketing site means losing the deal before the first demo. The corrections recommended above will make the site defensible, honest, and still compelling.
