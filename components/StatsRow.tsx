import Reveal from "@/components/Reveal";
import IconBadge from "@/components/IconBadge";
import { stats } from "@/lib/content";

export default function StatsRow() {
  return (
    <Reveal stagger={0.1} className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex h-full items-center gap-4 rounded-md border border-line bg-white/60 p-5">
          <IconBadge icon={stat.icon} />
          <div>
            <p className="font-serif text-3xl font-semibold text-ink">{stat.value}</p>
            <p className="text-xs font-medium tracking-wide uppercase text-ink/50">{stat.label}</p>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
