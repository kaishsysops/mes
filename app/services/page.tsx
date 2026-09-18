import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import IconBadge from "@/components/IconBadge";
import CtaBanner from "@/components/CtaBanner";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | MES",
  description: "Recruitment and manpower, logistics, document and passport handling, and HR consultancy.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide uppercase text-accent-deep">Services</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Everything between a vacancy and a first day.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Use one service or all four. Either way, the same team is
              responsible from the brief to arrival.
            </p>
          </Reveal>
        </div>
      </section>

      {services.map((service, index) => (
        <section key={service.slug} id={service.slug} className="scroll-mt-24 border-b border-line">
          <div
            className={`mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 90vw"
              />
            </Reveal>

            <Reveal>
              <IconBadge icon={service.icon} />
              <h2 className="mt-5 font-serif text-3xl font-semibold text-ink">{service.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">{service.detail}</p>
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBanner />
    </>
  );
}
