import { Phone } from "lucide-react";
import { contact } from "@/lib/content";

export default function UtilityBar() {
  const hotline = contact.hotlines[0];
  return (
    <div className="hidden bg-ink-deep text-cream sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
        <p className="tracking-[0.15em] uppercase text-cream/70">
          Maldives Employment Services &middot; Integrated HR Solutions
        </p>
        <a
          href={`tel:${hotline.replace(/[^+\d]/g, "")}`}
          className="flex items-center gap-1.5 font-medium text-accent transition-colors hover:text-cream"
        >
          <Phone size={12} strokeWidth={2} />
          Hotline {hotline}
        </a>
      </div>
    </div>
  );
}
