import Reveal from "@/components/Reveal";
import { stats } from "@/lib/content";

export default function StatsRow() {
  return (
    <Reveal stagger={0.1} className="grid grid-cols-2 gap-8 border-y border-line py-10 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="font-serif text-3xl text-ink sm:text-4xl">{stat.value}</p>
          <p className="mt-1 text-xs font-medium tracking-wide uppercase text-ink/50">{stat.label}</p>
        </div>
      ))}
    </Reveal>
  );
}
