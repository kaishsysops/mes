import type { Metadata } from "next";
import Image from "next/image";
import { Eye, HeartHandshake, Target } from "lucide-react";
import Reveal from "@/components/Reveal";
import IconBadge from "@/components/IconBadge";
import StatsRow from "@/components/StatsRow";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About | MES",
  description: "Maldives-based recruiting agent and manpower supplier.",
};

const principles = [
  {
    icon: Eye,
    title: "Vision",
    text: "To be a well-regarded company among the leading organisations in the Maldives.",
  },
  {
    icon: HeartHandshake,
    title: "Values",
    text: "Responsible corporate conduct, respect for people, and a meaningful contribution to employment creation.",
  },
  {
    icon: Target,
    title: "Mission",
    text: "To be a reliable total-solutions provider that brings practical value to clients and workforce requirements.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <Reveal>
            <p className="text-xs font-semibold tracking-wide uppercase text-accent-deep">About MES</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              A Maldives-based recruiting agent and manpower supplier.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              MES supports employers with skilled, semi-skilled, and professional
              workforce requirements, and was set up to help the Maldivian
              community find suitable work.
            </p>
          </Reveal>
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
            <Image
              src="/images/elite-hero-ready.jpg"
              alt="MES coordinator supporting a workforce arrival"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-accent-soft/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold tracking-wide uppercase text-accent-deep">Company background</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
              Two agencies, one entity
            </h2>
          </Reveal>
          <Reveal className="space-y-5 text-base leading-relaxed text-ink/75">
            <p>
              MESPL is registered in the Maldives as a limited liability company
              providing skilled, semi-skilled, and professional recruitment and
              manpower support.
            </p>
            <p>
              Waveline Maldives, an established human-resources and manpower
              recruitment agency, was amalgamated with MESPL. The combined company
              handles recruitment, statutory and legal documentation, visas, work
              permits, passports, and qualification and testing support through a
              single entity.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal stagger={0.1} className="grid gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="h-full rounded-md border border-line bg-white/60 p-7">
                <IconBadge icon={item.icon} />
                <p className="mt-5 font-serif text-xl font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <StatsRow />
      </section>

      <CtaBanner />
    </>
  );
}
