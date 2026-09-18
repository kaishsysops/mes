import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/content";

export default function TestimonialsSection() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <p className="text-xs font-semibold tracking-wide uppercase text-teal">Client feedback</p>
          <h2 className="mt-4 font-serif font-semibold text-3xl text-ink sm:text-4xl">What clients say</h2>
        </Reveal>

        <Reveal stagger={0.1} className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name + t.company} className="border border-line p-6">
              <Quote size={20} className="text-teal" strokeWidth={1.5} />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink/70">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-xs font-medium tracking-wide uppercase text-ink/50">
                {t.name} &middot; {t.company}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
