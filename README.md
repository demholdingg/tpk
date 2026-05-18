# Teknika Pesona Kahayan — Next.js Website

Industrial dark theme company profile website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 15** — App Router, SSR/SSG
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Page animations
- **Lucide React** — Icons
- **next/font** — Barlow + Barlow Condensed (Google Fonts)
- **next/image** — Optimized images

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout (fonts, Navbar, Footer)
│   ├── page.tsx            ← Home page
│   ├── contact/page.tsx    ← Contact page
│   └── api/contact/route.ts← Email API endpoint
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhySection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── CtaSection.tsx
│   │   └── ContactForm.tsx
│   └── ui/
│       └── index.tsx       ← Reusable UI primitives
├── data/
│   └── index.ts            ← Static content (services, projects, stats)
└── types/
    └── index.ts            ← TypeScript interfaces
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Setup environment
cp .env.local.example .env.local
# Edit .env.local with your SMTP or Resend credentials

# 3. Run development server
npm run dev
# Open http://localhost:3000

# 4. Build for production
npm run build
npm run start
```

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard or:
vercel env add SMTP_HOST
vercel env add SMTP_PASS
# ... etc
```

## Adding New Content

**New service** → edit `src/data/index.ts`, add to `SERVICES` array  
**New project** → edit `src/data/index.ts`, add to `PROJECTS` array  
**New page** → create `src/app/[slug]/page.tsx`

## Contact Form Email

Choose one in `src/app/api/contact/route.ts`:

- **Nodemailer** (SMTP) — works with Gmail, Zoho, etc.
- **Resend** — modern email API, free up to 3,000 emails/month

```bash
# For Resend:
npm install resend

# For Nodemailer:
npm install nodemailer @types/nodemailer
```
