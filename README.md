# MES — Recruitment & Workforce Website

Marketing site for MES (Maldives Employment Services): recruitment, visa
assistance, logistics, and HR consultancy.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS v4
- lucide-react icons
- Fraunces (display serif) + Inter (body), via `next/font`

## Running locally

With Docker / OrbStack:

```bash
docker compose up
```

Then open http://localhost:3000. The dev server hot-reloads on file changes.

Without Docker (requires Node 20+):

```bash
npm install
npm run dev
```

## Structure

```
app/            Routes: home, about, services, clients, contact
components/     Shared UI (Navbar, Hero, ServiceCard, Reveal, ...)
lib/content.ts  Site copy and data (services, stats, testimonials, ...)
public/images/  Site photography and logo
```

## Notes

- Testimonials and client names in `lib/content.ts` are placeholders — swap
  in real quotes and logos before launch.
- Contact form in `components/ContactForm.tsx` is UI-only (no backend wired
  up yet).
