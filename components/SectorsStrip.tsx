import Reveal from "@/components/Reveal";
import { sectors } from "@/lib/content";

export default function SectorsStrip() {
  return (
    <section className="px-2 sm:px-3">
      <div className="rounded-2xl bg-navy px-6 py-20 text-on-navy sm:px-12 lg:px-16 lg:py-28">
        <Reveal>
          <h2 className="text-sm font-medium text-on-navy/60">Sectors we recruit for</h2>
          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-4xl leading-tight font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {sectors.map((sector, i) => (
              <li key={sector}>
                {sector}
                {i < sectors.length - 1 && <span className="text-on-navy/30">,</span>}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-on-navy/70">Skilled, semi-skilled, and professional roles.</p>
        </Reveal>
      </div>
    </section>
  );
}
