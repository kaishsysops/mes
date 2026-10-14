import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { clientNames, sectors } from "@/lib/content";
import { arrowNudge } from "@/lib/ui";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {clientNames.map((name) => (
        <li
          key={name}
          className="flex items-center text-3xl font-medium tracking-[-0.02em] whitespace-nowrap text-ink/35 transition-colors duration-300 hover:text-ink sm:text-4xl"
        >
          {name}
          <span aria-hidden className="mx-8 inline-block h-1.5 w-1.5 rotate-45 bg-accent/60 sm:mx-12" />
        </li>
      ))}
    </ul>
  );
}

export default function ClientsMarquee() {
  return (
    <section className="border-y border-line py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
            Organisations that have worked with MES
          </h2>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">
            Skilled, semi-skilled, and professional roles across {sectors.slice(0, -1).join(", ").toLowerCase()}, and{" "}
            {sectors[sectors.length - 1].toLowerCase()}.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:px-4">
          <Row />
          <div className="motion-reduce:hidden">
            <Row hidden />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Link href="/clients" className="group inline-flex items-center gap-2 text-sm font-medium text-accent-ink">
          See all {clientNames.length} clients
          <ArrowRight size={16} strokeWidth={1.5} className={arrowNudge} />
        </Link>
      </div>
    </section>
  );
}
