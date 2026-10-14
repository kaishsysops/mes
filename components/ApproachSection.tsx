import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { checklistItems } from "@/lib/content";

export default function ApproachSection() {
  return (
    <section className="px-2 sm:px-3">
      <div className="grid overflow-hidden rounded-2xl bg-navy text-on-navy lg:grid-cols-2">
        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[680px]">
          <Image
            src="/images/elite-process.jpg"
            alt="MES specialist preparing a passport and arrival plan for a new hire"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 lg:py-24 xl:px-24">
          <Reveal>
            <h2 className="max-w-[14ch] text-4xl leading-[1.02] font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              One team from brief to arrival.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
            {checklistItems.map((item, i) => (
              <div key={item} className="bg-navy">
                <Reveal delay={i * 0.07} className="flex h-full flex-col gap-6 p-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <Check size={16} strokeWidth={1.5} />
                  </span>
                  <p className="text-[15px] leading-relaxed text-on-navy/80">{item}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
