import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/content";

export default function CtaBanner() {
  return (
    <section className="bg-ink">
      <Reveal className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl">
            Start with the requirement in front of you.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Tell us what your business needs to hire, coordinate, or prepare.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
          >
            Discuss requirements <ArrowRight size={16} />
          </Link>
          <a
            href={`tel:${contact.hotlines[0].replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-cream/80 hover:text-cream"
          >
            <Phone size={16} className="text-accent" /> {contact.hotlines[0]}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
