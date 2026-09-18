import Reveal from "@/components/Reveal";
import { sectors } from "@/lib/content";

export default function SectorsStrip() {
  return (
    <section className="border-b border-line bg-ink-deep">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 lg:flex-row lg:items-center lg:justify-between">
        <Reveal className="max-w-sm">
          <p className="font-serif text-3xl font-semibold text-cream">Sectors we recruit for</p>
          <p className="mt-2 text-sm text-cream/60">Skilled, semi-skilled, and professional roles.</p>
        </Reveal>
        <Reveal stagger={0.05} className="flex flex-wrap gap-3 lg:justify-end">
          {sectors.map((sector) => (
            <span
              key={sector}
              className="rounded-sm border border-cream/20 px-4 py-2 text-sm text-cream/85"
            >
              {sector}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
