import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | MES",
  description: "Recruitment and manpower, logistics, document and passport handling, and HR consultancy.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Everything between a vacancy and a first day."
        lead="Use one service or all four. Either way, the same team is responsible from the brief to arrival."
      />

      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 pb-8 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        {/* Sticky index on desktop; hidden on mobile where the stacked sections are enough */}
        <nav aria-label="Services" className="hidden lg:col-span-3 lg:block">
          <ul className="sticky top-28 space-y-1 border-l border-line">
            {services.map((service) => (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="-ml-px block border-l border-transparent py-2 pl-5 text-sm text-muted transition-colors hover:border-accent hover:text-ink"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-24 lg:col-span-9 lg:space-y-32">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <section key={service.slug} id={service.slug} className="scroll-mt-24">
                <Reveal className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-navy">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 70vw, 100vw"
                  />
                </Reveal>
                <Reveal className="mt-10 grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-accent-ink">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h2 className="text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">{service.title}</h2>
                    <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">{service.detail}</p>
                  </div>
                </Reveal>
              </section>
            );
          })}
        </div>
      </div>

      <CtaBanner />
    </>
  );
}
