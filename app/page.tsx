import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import ApproachSection from "@/components/ApproachSection";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import SectorsStrip from "@/components/SectorsStrip";
import LogoStrip from "@/components/LogoStrip";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <ApproachSection />

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wide uppercase text-accent-deep">What we do</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
                Four service lines, one team
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-accent-deep">
              View all services <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal stagger={0.1} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Reveal>
        </div>
      </section>

      <ProcessSteps />
      <SectorsStrip />
      <LogoStrip />
      <CtaBanner />
    </>
  );
}
