import { Phone } from "lucide-react";

export default function UtilityBar() {
  return (
    <div className="hidden bg-ink-deep text-cream sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
        <p className="tracking-[0.18em] uppercase text-cream/70">
          Talent Sourcing &middot; Visa Assistance &middot; Logistics
        </p>
        <a
          href="tel:+10000000000"
          className="flex items-center gap-1.5 tracking-[0.1em] uppercase text-teal hover:text-cream transition-colors"
        >
          <Phone size={12} strokeWidth={2} />
          +1 (000) 000-0000
        </a>
      </div>
    </div>
  );
}
