import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import StatsRow from "@/components/StatsRow";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import { clientNames } from "@/lib/content";

export const metadata: Metadata = {
  title: "Clients | MES",
  description: "The employers we work with, and what they say about MES.",
};

export default function ClientsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] uppercase text-teal">Clients</p>
            <h1 className="mt-4 font-serif font-semibold text-4xl leading-tight text-ink sm:text-5xl">
              180+ employers, one recruitment team.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink/70">
              Resorts, construction firms, and government offices &mdash;
              anyone who needs workers vetted, documented, and on-site on time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <StatsRow />
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Reveal stagger={0.06} className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
            {clientNames.map((name) => (
              <div key={name} className="border border-line p-5 text-center">
                <span className="font-serif text-lg text-ink/70">{name}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
