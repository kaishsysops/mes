import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader
        title="Organisations that have worked with MES."
        lead="Employers in hospitality, health, retail, real estate, construction, engineering, and infrastructure."
      />

      <section className="mx-auto max-w-[1400px] px-4 pb-24 sm:px-6 lg:px-10 lg:pb-32">
        <Reveal>
          <ul className="grid border-t border-line pt-6 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
            {clientNames.map((name) => (
              <li
                key={name}
                className="py-3 text-xl font-medium tracking-[-0.015em] text-ink transition-colors duration-300 hover:text-accent-ink"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <SectorsStrip />
      <CtaBanner />
    </>
  );
}
