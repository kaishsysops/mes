import Image from "next/image";
import Reveal from "@/components/Reveal";
import ChecklistCard from "@/components/ChecklistCard";
import { checklistItems } from "@/lib/content";

export default function ApproachSection() {
  return (
    <section className="relative overflow-hidden bg-ink-deep">
      <Image
        src="/images/approach-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-15"
        sizes="100vw"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-wide uppercase text-accent">Our approach</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
            One team from brief to arrival.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70">
            Hiring from overseas means recruiters, visa agents, document
            handlers, and travel coordinators. MES does all of it, so you deal
            with one company instead of four.
          </p>
        </Reveal>
        <Reveal>
          <ChecklistCard title="Why work with us?" items={checklistItems} />
        </Reveal>
      </div>
    </section>
  );
}
