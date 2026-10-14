import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/Stats";
import CtaBanner from "@/components/CtaBanner";
import { frame, frameSizes } from "@/lib/ui";

export const metadata: Metadata = {
  title: "About | MES",
  description: "Maldives-based recruiting agent and manpower supplier.",
};

const principles = [
  {
    title: "Vision",
    text: "To be a well-regarded company among the leading organisations in the Maldives.",
  },
  {
    title: "Values",
    text: "Responsible corporate conduct, respect for people, and a meaningful contribution to employment creation.",
  },
  {
    title: "Mission",
    text: "To be a reliable total-solutions provider that brings practical value to clients and workforce requirements.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="A Maldives-based recruiting agent and manpower supplier."
        lead="MES supports employers with skilled, semi-skilled, and professional workforce requirements, and was set up to help the Maldivian community find suitable work."
      />

      <div className={frame}>
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy sm:aspect-[21/9]">
          <Image
            src="/images/elite-arrival.jpg"
            alt="MES coordinator briefing newly arrived workers at the ferry terminal"
            fill
            className="object-cover"
            sizes={frameSizes}
          />
        </Reveal>
      </div>

      <section className="mx-auto grid max-w-[1400px] gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-32">
        <Reveal className="lg:col-span-5">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">Two agencies, one entity</h2>
        </Reveal>
        <Reveal className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7" delay={0.08}>
          <p>
            MESPL is registered in the Maldives as a limited liability company providing skilled,
            semi-skilled, and professional recruitment and manpower support.
          </p>
          <p>
            Waveline Maldives, an established human-resources and manpower recruitment agency, was
            amalgamated with MESPL. The combined company handles recruitment, statutory and legal
            documentation, visas, work permits, passports, and qualification and testing support through
            a single entity.
          </p>
        </Reveal>
      </section>

      <section className={frame}>
        <div className="grid gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-3">
          {principles.map((item, i) => (
            <div key={item.title} className="bg-surface">
              <Reveal delay={i * 0.08} className="flex h-full flex-col justify-between gap-16 p-8 lg:p-12">
                <h3 className="text-sm font-medium text-accent-ink">{item.title}</h3>
                <p className="text-2xl leading-snug font-medium tracking-[-0.02em] text-ink">{item.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 pt-24 sm:px-6 lg:px-10 lg:pt-32">
        <Stats />
      </section>

      <CtaBanner />
    </>
  );
}
