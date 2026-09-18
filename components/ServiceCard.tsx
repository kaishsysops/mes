import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IconBadge from "@/components/IconBadge";
import type { Service } from "@/lib/content";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex h-full flex-col rounded-md border border-line bg-white/60 p-7 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
      <IconBadge icon={service.icon} />
      <p className="mt-5 font-serif text-xl font-semibold text-ink">{service.title}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{service.summary}</p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-deep"
      >
        Learn more
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
