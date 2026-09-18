# MES — Recruitment & Workforce Website

Marketing site for MES (Maldives Employment Services): recruitment, visa
assistance, logistics, and HR consultancy.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS v4
- lucide-react icons
- Source Serif 4 (headings) + Source Sans 3 (body), via `next/font`

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

- All copy, client names, and contact details in `lib/content.ts` come from
  mes.mv. Stats are counts derived from that data, not marketing figures.
- The contact form opens a prefilled email to info@mes.mv (no backend).
- `service-sourcing.jpg`, `service-hr.jpg`, and `approach-bg.jpg` are stock
  photos from Unsplash; the rest are MES photography.
