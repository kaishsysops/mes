import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/content";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="group flex h-full flex-col border border-line p-6 transition-all hover:-translate-y-1 hover:border-ink/40 hover:shadow-sm">
      <Icon size={22} strokeWidth={1.5} className="text-teal transition-transform group-hover:scale-110" />
      <p className="mt-4 font-serif text-lg text-ink">{service.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">{service.summary}</p>
      <Link
        href="/services"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink/70 transition-colors group-hover:text-teal-deep"
      >
        Learn more
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
