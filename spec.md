<!-- APPROVED 2026-03-31 -->
# Japan Bureaucracy Buddy — MVP Spec

> Generated: 2026-03-31 by design agent

---

## Basic Info
- **Name:** Japan Bureaucracy Buddy
- **One-liner:** Visa-type-filtered step-by-step checklist that guides foreigners through Japan's post-arrival bureaucracy (address registration > My Number > bank > insurance > pension)
- **Need:** 412M foreign residents (37.7% cite language barriers — MOJ FY2023). No existing tool offers an integrated, interactive flow.
- **Type:** Static site (HTML/CSS/JS)
- **Deploy:** GitHub Pages
- **URL:** `https://humancronadmin.github.io/japan-bureaucracy-buddy/`

---

## GitHub Search Results
Searched 5 keyword patterns. No directly reusable Japan-bureaucracy repo found.

| Keyword | Result |
|---|---|
| "japan guide foreigners" | Travel guides only (leemarrett/Super-Tips-Master-Guide). No admin procedure tool. |
| "expat checklist japan" | RetroHazard/JP_Immigration_Dashboard (stats only). No checklist UI. |
| "interactive checklist" | humaan/Checklist (website launch QA, CC license). UI pattern reusable but content unrelated. |
| "japan onboarding guide" | Gists only. No structured tool. |
| "step wizard template" | AdrianVillamayor/Wizard-JS (MIT, vanilla JS). Lightweight step UI component. |

**Decision:** Clone `japan-utility-setup` as base (same doc-style layout, proven mobile UX). Add filter UI from `japanese-school-finder` JS pattern. No external repo needed.

---

## MVP Scope

### MVP Feature (one only)
**Visa-type-filtered post-arrival checklist** — User selects visa type, sees personalized step-by-step flow with required docs, time estimates, English-friendliness ratings, and tips per step.

### MVP Includes
1. **Visa filter** — Dropdown: Permanent Resident / Engineer-Specialist / Student / Specified Skilled Worker / Spouse. Steps and docs change per selection.
2. **5-step flow** — Address Registration > My Number > Bank Account > Health Insurance > National Pension. Each step: required docs, time estimate, warnings, English support level.
3. **Bank comparison table** — 6 banks (MUFG, SMBC, Mizuho, JP Post, Sony Bank, Rakuten Bank): foreigner acceptance, 6-month rule, English support, required docs, online banking availability.
4. **2027 insurance rule alert** — Prominent banner: unpaid health insurance = visa renewal denial from 2027.
5. **Wise affiliate placement** — In bank comparison section + "Sending money home?" CTA after bank step.
6. **Disclaimer** — Every page: "This guide is for reference only. Always confirm with official sources."
7. **Cross-links** — To japan-utility-setup, japan-tax-calculator, money-transfer-japan.

### MVP Excludes
- Trouble Q&A (post-MVP based on Reddit feedback)
- Life-event guides (moving, marriage, job change)
- Document photo gallery / visual fill-in examples
- Multi-language support
- User accounts / progress saving (use localStorage only)

### MVP Format
Single-page HTML app. Sidebar navigation (same as japan-utility-setup). JS filter logic inline. Data in separate `data/steps.js` and `data/banks.js`.

### MVP Validation
- Post to r/japanlife + r/movingtojapan asking for feedback
- Track via GA4 (same property G-H1N5PR9Y0H)

### MVP Success Criteria
- Reddit: 10+ upvotes OR 5+ constructive comments
- 1 week: 200+ unique visitors
- 1 Wise affiliate click

---

## Data Sources (no dummy data)

All data from official/verified sources. Details in `data_sources.txt`.

| Data | Primary Source |
|---|---|
| Address registration | MOJ Immigration Services Agency (isa.go.jp) |
| My Number | Digital Agency (digital.go.jp), city/ward office websites |
| Bank requirements | Each bank's official English page (see data_sources.txt) |
| Health insurance | MHLW (mhlw.go.jp), NHI enrollment guides |
| National pension | Japan Pension Service (nenkin.go.jp) |
| 6-month rule | FEFTA (Foreign Exchange and Foreign Trade Act) |
| 2027 insurance rule | GaijinPot 2026 report, Immigration Bureau announcements |
| Visa-type differences | ISA visa category pages (isa.go.jp) |

---

## Build Instructions

### Step 1: Scaffold
Copy `japan-utility-setup/` structure. Replace content. Keep: sidebar layout, CSS, mobile menu JS, PWA manifest pattern, GA4 tag.

### Step 2: Files to create/modify

| File | What |
|---|---|
| `index.html` | Main page. Visa filter dropdown at top. 5 step sections + bank comparison. Under 200 lines (use JS data arrays for repeating content). |
| `css/style.css` | Copy from japan-utility-setup. Add filter dropdown styles, progress indicator, alert banner. |
| `js/main.js` | Sidebar toggle (copy). Add: visa filter logic, step visibility toggle, localStorage checklist state. |
| `js/data/steps.js` | 5-step data array. Each step: title, description, required docs (per visa type), time, English support, warnings. |
| `js/data/banks.js` | 6-bank data array. Fields: name, foreigner_ok, six_month_rule, english_support, required_docs, online_banking, url. |
| `images/favicon.svg` | Clipboard/checklist icon |
| `robots.txt` | Standard |
| `sitemap.xml` | Standard |

### Step 3: Deploy
```
git init && git remote add origin git@github.com:humancronadmin/japan-bureaucracy-buddy.git
git add -A && git commit -m "MVP: visa-filtered bureaucracy checklist"
git push -u origin main
# Enable GitHub Pages (main branch, / root)
```

### Step 4: Post-deploy
Run `post-deploy` skill (GA4, Search Console, cross-links, service_catalog update).

---

## Revenue Model
- **Primary:** Wise affiliate (bank comparison section + post-bank-step CTA)
- **Secondary:** Ko-fi/BMC tip buttons, future ad slots
- **Wise link:** Use existing `https://wise.com/invite/drhc/x5ykid2`
- **Affiliate placement:** (1) Bank comparison table "Send money home?" row. (2) After Step 3 completion CTA. (3) Footer.

---

## Publish Info
- **Target:** Foreigners who just moved (or are about to move) to Japan
- **Hook:** "I made a free interactive checklist for all the bureaucracy you need to handle after arriving in Japan — filtered by visa type"
- **Subreddits:** r/japanlife (667K), r/movingtojapan, r/JapanFinance
- **note angle:** "How I built 13+ free tools for foreigners in Japan"

---

## Design Specs
- **Mobile-first:** viewport meta, 480px media query, tap targets 44px+, no horizontal scroll
- **English-first:** All UI and content in English
- **Disclaimer (every page):** "This guide is for reference only. Rules change frequently. Always verify with the official office before your visit. We are not responsible for any outcomes."
- **Last-updated date:** Per section, format "Last updated: YYYY-MM"

---

## Cross-link Plan
| From | To | Where |
|---|---|---|
| bureaucracy-buddy (bank step) | money-transfer-japan | "Compare transfer fees" link |
| bureaucracy-buddy (after all steps) | japan-utility-setup | "Next: Set up your utilities" CTA |
| bureaucracy-buddy (insurance/pension) | japan-tax-calculator | "Estimate your taxes" link |
| japan-utility-setup | bureaucracy-buddy | "First, handle your paperwork" link in intro |
| money-transfer-japan | bureaucracy-buddy | "Need a bank account first?" link |
