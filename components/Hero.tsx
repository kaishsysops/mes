import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { stats } from "@/lib/content";

const tags = ["Recruitment", "Logistics", "Documentation", "HR Consultancy"];

export default function Hero() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="grid items-stretch lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:py-24 lg:pl-16 lg:pr-10 xl:pl-24">
          <p className="animate-fade-up text-xs tracking-[0.2em] uppercase text-teal">
            Talent Sourcing &middot; Visa Assistance &middot; Recruitment
          </p>
          <h1
            className="animate-fade-up mt-5 font-serif text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-[4rem]"
            style={{ animationDelay: "0.1s" }}
          >
            Streamline your
            <br />
            <em className="font-serif italic text-teal">hiring</em> process.
          </h1>
          <p
            className="animate-fade-up mt-7 max-w-md text-base leading-relaxed text-ink/70"
            style={{ animationDelay: "0.2s" }}
          >
            We connect skilled professionals with employers, handling sourcing,
            documentation, and relocation so your team can focus on the work.
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-ink-deep"
            >
              Get in touch
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
            >
              Our services
            </Link>
          </div>

          <p className="animate-fade-up mt-10 text-xs font-medium tracking-wide text-ink/50" style={{ animationDelay: "0.4s" }}>
            {tags.join("  /  ")}
          </p>

          <div
            className="animate-fade-up mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 sm:grid-cols-4 lg:mt-auto lg:pt-10"
            style={{ animationDelay: "0.5s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl font-semibold text-ink sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-ink/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-[680px]">
          <Image
            src="/images/hero-workforce.jpg"
            alt="MES workforce team on site"
            fill
            priority
            className="animate-ken-burns object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-cream to-transparent lg:block" />

          <div className="animate-fade-up absolute bottom-6 left-6 sm:bottom-8 sm:left-8" style={{ animationDelay: "0.5s" }}>
            <div className="animate-float flex items-center gap-3 border border-ink/15 bg-cream px-5 py-4 shadow-md">
              <p className="font-serif text-2xl font-semibold text-ink">3,200+</p>
              <p className="text-xs leading-tight text-ink/60">
                Candidates
                <br />
                Placed
              </p>
            </div>
          </div>

          <div className="animate-fade-up absolute top-6 right-6 sm:top-8 sm:right-8" style={{ animationDelay: "0.65s" }}>
            <div className="animate-float-delayed border border-ink/15 bg-cream px-5 py-4 shadow-md">
              <p className="font-serif text-2xl font-semibold text-ink">15+</p>
              <p className="text-xs text-ink/60">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
