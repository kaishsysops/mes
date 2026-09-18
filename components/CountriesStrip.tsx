import { Globe } from "lucide-react";
import Reveal from "@/components/Reveal";
import { sourceCountries } from "@/lib/content";

export default function CountriesStrip() {
  return (
    <section className="border-b border-line bg-ink-deep">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <Globe size={26} strokeWidth={1.5} className="text-teal" />
          <p className="font-serif text-3xl font-semibold text-cream sm:text-4xl">
            Sourcing across the region
          </p>
          <p className="max-w-md text-sm leading-relaxed text-cream/60">
            Every candidate is interviewed and reference-checked in-country
            before their file reaches an employer.
          </p>
        </Reveal>

        <Reveal stagger={0.06} className="mt-10 flex flex-wrap justify-center gap-3">
          {sourceCountries.map((country) => (
            <span
              key={country}
              className="border border-cream/20 px-4 py-2 text-xs font-medium tracking-wide uppercase text-cream/80"
            >
              {country}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
