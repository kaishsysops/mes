import Reveal from "@/components/Reveal";
import IconBadge from "@/components/IconBadge";
import { processSteps } from "@/lib/content";

export default function ProcessSteps() {
  return (
    <section className="border-b border-line bg-accent-soft/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide uppercase text-accent-deep">How MES works</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            From requirement to readiness
          </h2>
        </Reveal>

        <Reveal stagger={0.1} className="mt-12 grid gap-6 md:grid-cols-3">
          {processSteps.map((item) => (
            <div key={item.step} className="h-full rounded-md border border-line bg-cream p-7">
              <div className="flex items-center justify-between">
                <IconBadge icon={item.icon} />
                <span className="font-serif text-3xl font-semibold text-accent/30">{item.step}</span>
              </div>
              <p className="mt-5 text-lg font-semibold text-ink">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
