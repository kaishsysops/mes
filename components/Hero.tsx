import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ctaLabel } from "@/lib/content";
import { arrowNudge, buttonOutline, buttonPrimary, container, frame, frameSizes } from "@/lib/ui";

const delay = (s: number) => ({ "--delay": `${s}s` }) as React.CSSProperties;

// Editorial hero: type on the page ground, photo below as a clean band with no overlay,
// so the lagoon and the team both read and the hero follows the light/dark theme.
export default function Hero() {
  return (
    <section>
      <div className={`${container} grid gap-8 pt-14 pb-10 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pt-20 lg:pb-14`}>
        <div className="lg:col-span-8">
          <p className="animate-rise text-sm font-medium text-muted">Maldives Employment Services</p>
          <h1
            className="animate-rise mt-5 text-[3.25rem] leading-[0.95] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-7xl xl:text-8xl"
            style={delay(0.08)}
          >
            Streamline your hiring process.
          </h1>
        </div>

        <div className="lg:col-span-4 lg:pb-2">
          <p className="animate-rise max-w-[40ch] text-lg leading-relaxed text-muted" style={delay(0.16)}>
            Recruitment, visas, documents, and logistics for employers in the Maldives, from the first
            brief to the first day.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={delay(0.24)}>
            <Link href="/contact" className={buttonPrimary}>
              {ctaLabel}
              <ArrowRight size={16} strokeWidth={1.5} className={arrowNudge} />
            </Link>
            <Link href="/services" className={buttonOutline}>
              Our services
            </Link>
          </div>
        </div>
      </div>

      <div className={frame}>
        {/* Height follows the width but never exceeds 62% of the viewport, so the photo
            frames the same way on a laptop, a 1440p monitor, and a 4K display. */}
        <div className="animate-unveil relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy sm:aspect-auto sm:h-[min(56.25vw,62dvh)] sm:min-h-[380px]">
          <Image
            src="/images/hero-workforce.jpg"
            alt="MES recruitment team reviewing a hiring plan in an office overlooking the lagoon"
            fill
            preload
            sizes={frameSizes}
            className="animate-settle object-cover object-[68%_center] sm:object-[center_40%]"
          />
        </div>
      </div>
    </section>
  );
}
