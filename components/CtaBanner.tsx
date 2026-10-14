import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { contact, ctaLabel } from "@/lib/content";
import { arrowNudge, buttonOutline, buttonPrimary } from "@/lib/ui";

export default function CtaBanner() {
  const hotline = contact.hotlines[0];
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
      <Reveal className="max-w-4xl">
        <h2 className="text-5xl leading-[0.98] font-semibold tracking-[-0.04em] text-balance text-ink sm:text-6xl lg:text-7xl">
          Start with the requirement in front of you.
        </h2>
        <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
          Tell us what your business needs to hire, coordinate, or prepare.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className={buttonPrimary}>
            {ctaLabel}
            <ArrowRight size={16} strokeWidth={1.5} className={arrowNudge} />
          </Link>
          <a href={`tel:${hotline.replace(/[^+\d]/g, "")}`} className={buttonOutline}>
            <Phone size={15} strokeWidth={1.5} />
            {hotline}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
