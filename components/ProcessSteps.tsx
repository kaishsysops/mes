import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/content";

export default function ProcessSteps() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide uppercase text-teal">How it works</p>
            <h2 className="mt-4 font-serif font-semibold text-3xl text-ink sm:text-4xl">From brief to arrival</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
            Most clients hear back from us within a day of the first call, and
            see a shortlist inside a week.
          </p>
        </Reveal>

        <Reveal stagger={0.1} className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <div key={item.step} className="border-t border-line pt-5">
              <p className="font-serif text-2xl text-teal-deep">{item.step}</p>
              <p className="mt-3 text-base text-ink">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
