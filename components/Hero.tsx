import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ctaLabel } from "@/lib/content";
import { arrowNudge, buttonOnImage, buttonPrimary } from "@/lib/ui";

const delay = (s: number) => ({ "--delay": `${s}s` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section className="px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="relative isolate flex min-h-[calc(100dvh-4.75rem)] items-end overflow-hidden rounded-2xl bg-navy">
        {/* On desktop the photo occupies the right of the frame and dissolves into navy, keeping the copy on clear ground */}
        <div className="animate-settle absolute inset-0 -z-10 lg:left-auto lg:w-[70%]">
          <Image
            src="/images/hero-workforce.jpg"
            alt="MES recruitment team reviewing a hiring plan in an office overlooking the lagoon"
            fill
            preload
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover object-[72%_center] lg:object-right"
          />
          <div
            aria-hidden
            className="absolute inset-y-0 -left-2 right-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10 lg:bg-gradient-to-r lg:from-navy lg:via-navy/30 lg:via-35% lg:to-transparent"
          />
        </div>

        <div className="mx-auto w-full max-w-[1400px] px-4 pt-32 pb-10 sm:px-6 sm:pb-14 lg:px-10 lg:pb-20">
          <div className="max-w-2xl">
            <p className="animate-rise text-sm font-medium text-white/75">Maldives Employment Services</p>
            <h1
              className="animate-rise mt-5 text-5xl leading-[0.98] font-semibold tracking-[-0.035em] text-balance text-white sm:text-6xl lg:text-7xl"
              style={delay(0.08)}
            >
              Streamline your hiring process.
            </h1>
            <p
              className="animate-rise mt-6 max-w-[46ch] text-lg leading-relaxed text-white/80"
              style={delay(0.16)}
            >
              Recruitment, visas, documents, and logistics for employers in the Maldives, from the
              first brief to the first day.
            </p>
            <div className="animate-rise mt-9 flex flex-wrap gap-3" style={delay(0.24)}>
              <Link href="/contact" className={buttonPrimary}>
                {ctaLabel}
                <ArrowRight size={16} strokeWidth={1.5} className={arrowNudge} />
              </Link>
              <Link href="/services" className={buttonOnImage}>
                Our services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
