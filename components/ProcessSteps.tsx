import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/content";

export default function ProcessSteps() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <Reveal>
        <h2 className="max-w-[18ch] text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
          From requirement to readiness
        </h2>
      </Reveal>

      <ol className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
        {/* The rail: vertical on mobile, horizontal from md up, running through the icon nodes */}
        <span aria-hidden className="absolute top-6 bottom-6 left-6 w-px bg-line md:top-6 md:right-0 md:bottom-auto md:left-6 md:h-px md:w-auto" />
        {processSteps.map((item, i) => {
          const Icon = item.icon;
          return (
            <li key={item.title} className="relative">
              <Reveal delay={i * 0.12} className="flex gap-6 md:flex-col">
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-accent-ink">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink md:mt-2">{item.title}</h3>
                  <p className="mt-3 max-w-[34ch] leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
