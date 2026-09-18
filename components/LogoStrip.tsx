import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { clientNames } from "@/lib/content";

export default function LogoStrip() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide uppercase text-accent-deep">Clients</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
              Organisations that have worked with MES
            </h2>
          </div>
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-deep"
          >
            See all {clientNames.length} clients <ArrowRight size={16} />
          </Link>
        </Reveal>

        <Reveal stagger={0.04} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {clientNames.slice(0, 12).map((name) => (
            <div
              key={name}
              className="flex h-full min-h-20 items-center justify-center rounded-md border border-line bg-white/60 px-4 py-5 text-center text-sm font-medium text-ink/75"
            >
              {name}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
