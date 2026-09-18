import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectorsStrip from "@/components/SectorsStrip";
import CtaBanner from "@/components/CtaBanner";
import { clientNames } from "@/lib/content";

export const metadata: Metadata = {
  title: "Clients | MES",
  description: "Organisations that have worked with MES.",
};

export default function ClientsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide uppercase text-accent-deep">Clients</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Organisations that have worked with MES.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Employers in hospitality, health, retail, real estate,
              construction, engineering, and infrastructure.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Reveal stagger={0.03} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clientNames.map((name) => (
              <div
                key={name}
                className="flex h-full items-center gap-3 rounded-md border border-line bg-white/60 p-5 transition-colors hover:border-accent/50"
              >
                <Building2 size={20} strokeWidth={1.75} className="shrink-0 text-accent" />
                <span className="font-medium text-ink/85">{name}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <SectorsStrip />
      <CtaBanner />
    </>
  );
}
