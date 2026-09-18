import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function CtaBanner() {
  return (
    <section className="bg-ink">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-16 text-center">
        <h2 className="max-w-lg font-serif font-semibold text-3xl leading-tight text-cream sm:text-4xl">
          Ready to build your <em className="font-serif italic text-teal">team</em>?
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-cream/70">
          Tell us what you&rsquo;re hiring for and we&rsquo;ll get back to you within one
          business day.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-sm bg-cream px-6 py-3 text-sm text-ink transition-colors hover:bg-teal hover:text-cream"
        >
          Get in touch <ArrowRight size={16} />
        </Link>
      </Reveal>
    </section>
  );
}
