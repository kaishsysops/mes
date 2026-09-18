import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { stats } from "@/lib/content";

export default function Hero() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="grid items-stretch lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:py-24 lg:pl-16 lg:pr-10 xl:pl-24">
          <p className="animate-fade-up text-xs font-semibold tracking-[0.2em] uppercase text-accent-deep">
            Maldives Employment Services
          </p>
          <h1
            className="animate-fade-up mt-5 font-serif text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-[4rem]"
            style={{ animationDelay: "0.1s" }}
          >
            Streamline your
            <br />
            <span className="text-accent">hiring</span> process.
          </h1>
          <p
            className="animate-fade-up mt-7 max-w-md text-lg leading-relaxed text-ink/70"
            style={{ animationDelay: "0.2s" }}
          >
            Recruitment, visas, documents, and logistics for employers in the
            Maldives, from the first brief to the worker&rsquo;s first day.
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
            >
              Discuss your requirement
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Our services
            </Link>
          </div>

          <div
            className="animate-fade-up mt-12 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4"
            style={{ animationDelay: "0.4s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <stat.icon size={18} strokeWidth={1.75} className="text-accent" />
                <p className="mt-2 font-serif text-3xl font-semibold text-ink">{stat.value}</p>
                <p className="mt-1 text-xs text-ink/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-in relative min-h-[360px] sm:min-h-[460px] lg:min-h-[640px]">
          <Image
            src="/images/hero-workforce.jpg"
            alt="Recruitment team meeting with an employer in an office"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
