# drotegadnp.com

Official website for **Dr. Otega Ojukwu, DNP, FNP-C, PMHNP-BC, LFP** — integrated health, mental wellness, and financial empowerment services in North Miami Beach, FL.

**Tagline:** Inform. Empower. Uplift.

## Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** Formspree (React)
- **Fonts:** Playfair Display (headings), Inter (body) via Google Fonts
- **Deployment:** Vercel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, problem, guide, 3-pillar model, timeline, trust bar, transformation, thought leadership preview |
| `/about` | About Dr. Otega (placeholder) |
| `/services` | Services overview — three pillars, integrated care, audience cards |
| `/services/health` | Health & Clinical services |
| `/services/lab-testing` | Lab & Diagnostics services |
| `/services/financial-wellness` | Financial Wellness services |
| `/thought-leadership` | Books, speaking, workshops, the movement |
| `/contact` | Contact form, direct contact, booking, first visit steps |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/disclaimers` | Important Disclaimers |

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

```bash
npm i -g vercel
vercel --prod
```

**Custom domain setup:** Add `drotegadnp.com` in Vercel Dashboard > Settings > Domains.

## Placeholders to Replace

- **Formspree form ID:** Replace `YOUR_FORM_ID` in `app/contact/ContactContent.tsx`
- **Setmore embed:** Replace placeholder in `app/contact/ContactContent.tsx` (search for `TODO: Replace with Setmore`)
- **Book covers & Amazon links:** Replace placeholders in `app/thought-leadership/ThoughtLeadershipContent.tsx`
- **OG image:** Replace `public/og-image.jpg` with a branded 1200x630 image
- **Professional photos:** Replace the placeholder div in the homepage Guide section with Dr. Otega's photo
- **Social links:** Update Instagram, Facebook, LinkedIn URLs in `lib/brand.ts`
- **Google Maps embed:** Update the iframe src in `app/contact/ContactContent.tsx` with an actual embed URL
