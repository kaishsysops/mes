import { clientNames } from "@/lib/content";

export default function LogoStrip() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-center text-xs font-medium tracking-wide uppercase text-ink/40">
          Trusted by teams across industries
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clientNames.map((name) => (
            <span key={name} className="font-serif text-lg text-ink/30">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
