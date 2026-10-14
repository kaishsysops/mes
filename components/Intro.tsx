import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";

export default function Intro() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <Reveal>
        <p className="max-w-[30ch] text-3xl leading-[1.15] font-medium tracking-[-0.025em] text-balance text-ink sm:text-4xl lg:text-5xl">
          Hiring from overseas means recruiters, visa agents, document handlers, and travel
          coordinators.{" "}
          <span className="text-muted">MES does all of it, so you deal with one company instead of four.</span>
        </p>
      </Reveal>
      <div className="mt-20 lg:mt-28">
        <Stats />
      </div>
    </section>
  );
}
