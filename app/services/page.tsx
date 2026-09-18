import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | MES",
  description: "Recruitment, documentation, logistics, and HR consultancy services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] uppercase text-teal">What we do</p>
            <h1 className="mt-4 font-serif font-semibold text-4xl leading-tight text-ink sm:text-5xl">
              Everything between a vacancy and a first day.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink/70">
              Each service works on its own, or together as a single, managed
              process. Most clients start with sourcing and let us carry the rest.
            </p>
          </Reveal>
        </div>
      </section>

      {services.map((service, index) => {
        const Icon = service.icon;
        const reversed = index % 2 === 1;
        return (
          <section key={service.slug} className="border-b border-line">
            <div
              className={`mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                />
                <div className="absolute inset-0 bg-ink-deep/10 mix-blend-multiply" />
              </Reveal>

              <Reveal>
                <Icon size={26} strokeWidth={1.5} className="text-teal" />
                <h2 className="mt-4 font-serif font-semibold text-3xl text-ink">{service.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink/70">{service.detail}</p>
              </Reveal>
            </div>
          </section>
        );
      })}

      <CtaBanner />
    </>
  );
}
