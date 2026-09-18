import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import ApproachSection from "@/components/ApproachSection";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import CountriesStrip from "@/components/CountriesStrip";
import LogoStrip from "@/components/LogoStrip";
import TestimonialsSection from "@/components/TestimonialsSection";
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
              <p className="text-xs tracking-[0.2em] uppercase text-teal">What we do</p>
              <h2 className="mt-4 font-serif font-semibold text-3xl text-ink sm:text-4xl">Our services</h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ink"
            >
              View all services <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal stagger={0.1} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Reveal>
        </div>
      </section>

      <ProcessSteps />
      <CountriesStrip />
      <LogoStrip />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
