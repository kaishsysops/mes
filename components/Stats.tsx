import Reveal from "@/components/Reveal";
import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <Reveal stagger={0.08} className="grid gap-10 sm:grid-cols-3 sm:gap-8" itemClassName="border-t border-line pt-6">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-6xl font-semibold tracking-[-0.04em] text-ink tabular-nums lg:text-7xl">{stat.value}</p>
          <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-muted">{stat.label}</p>
        </div>
      ))}
    </Reveal>
  );
}
