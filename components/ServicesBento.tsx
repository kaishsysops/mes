import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { services, type Service } from "@/lib/content";
import { arrowNudge } from "@/lib/ui";

// Bento: recruitment leads as a tall photo tile, documents breaks the rhythm as a solid accent tile.
const layout: Record<string, { cell: string; variant: "photo" | "solid" }> = {
  recruitment: { cell: "md:col-span-2 lg:col-span-7 lg:row-span-2 min-h-[420px] lg:min-h-[640px]", variant: "photo" },
  logistics: { cell: "lg:col-span-5 min-h-[300px]", variant: "photo" },
  documents: { cell: "lg:col-span-5 min-h-[300px]", variant: "solid" },
  "hr-consultancy": { cell: "md:col-span-2 lg:col-span-12 min-h-[300px]", variant: "photo" },
};

function Tile({ service }: { service: Service }) {
  const { variant } = layout[service.slug];
  const Icon = service.icon;

  if (variant === "solid") {
    return (
      <Link
        href={`/services#${service.slug}`}
        className="group flex h-full flex-col justify-between rounded-2xl bg-accent p-6 text-on-accent transition-transform duration-500 ease-out-expo hover:-translate-y-1"
      >
        <div className="flex items-start justify-between">
          <Icon size={32} strokeWidth={1.5} />
          <ArrowUpRight size={20} strokeWidth={1.5} className="transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
          <p className="mt-2 max-w-[42ch] text-sm leading-relaxed opacity-80">{service.summary}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-2xl bg-navy p-6 sm:p-8"
    >
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        sizes="(min-width: 1024px) 58vw, (min-width: 768px) 100vw, 100vw"
        className="-z-10 object-cover object-[75%_center] transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06111f]/85 via-[#06111f]/30 to-transparent" />
      <span className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-transform duration-500 ease-out-expo group-hover:rotate-45">
        <ArrowUpRight size={18} strokeWidth={1.5} />
      </span>
      <h3 className="text-2xl font-semibold tracking-tight text-white">{service.title}</h3>
      <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-white/75">{service.summary}</p>
    </Link>
  );
}

export default function ServicesBento() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pb-24 sm:px-6 lg:px-10 lg:pb-32">
      <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">Four service lines, one team</h2>
        <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-medium text-accent-ink">
          View all services
          <ArrowRight size={16} strokeWidth={1.5} className={arrowNudge} />
        </Link>
      </Reveal>

      <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-12">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 0.08} className={layout[service.slug].cell}>
            <Tile service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
