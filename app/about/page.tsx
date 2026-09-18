import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import StatsRow from "@/components/StatsRow";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About | MES",
  description: "Our story, our approach, and the team behind MES.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] uppercase text-teal">About us</p>
            <h1 className="mt-4 font-serif font-semibold text-4xl leading-tight text-ink sm:text-5xl">
              Built by people who&rsquo;ve done the hiring themselves.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink/70">
              MES started as a small team helping local employers fill hard-to-staff
              roles. Fifteen years on, we work across borders, but the job hasn&rsquo;t
              changed: understand what a business needs, find the right person, and
              handle everything in between.
            </p>
          </Reveal>

          <Reveal className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/elite-hero-ready.jpg"
              alt="MES coordinator supporting a workforce arrival process"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-ink-deep/10 mix-blend-multiply" />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-ink-deep">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-teal">Mission</p>
            <p className="mt-4 font-serif text-2xl leading-snug text-cream sm:text-3xl">
              Fifteen years, one job: match the right person to the right
              role, and handle the paperwork so nobody else has to.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-serif text-2xl italic leading-relaxed text-ink sm:text-3xl">
              &ldquo;The paperwork used to take longer than the placement.
              We built MES to fix that first.&rdquo;
            </p>
            <p className="mt-4 text-sm tracking-[0.1em] uppercase text-ink/50">
              Founder, MES
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <StatsRow />
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Reveal>
            <p className="text-xs tracking-[0.2em] uppercase text-teal">Life at MES</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
              On site, on the phone, on it.
            </h2>
          </Reveal>
          <Reveal stagger={0.1} className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { src: "/images/culture-1.jpg", alt: "MES team reviewing a placement plan" },
              { src: "/images/culture-2.jpg", alt: "MES team coordinating on-site" },
              { src: "/images/culture-3.jpg", alt: "MES specialist meeting a candidate" },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
