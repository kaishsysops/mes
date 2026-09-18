import { Check } from "lucide-react";

export default function ChecklistCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-sm border border-cream/20 bg-ink/40 p-8">
      <p className="font-serif text-xl text-cream">{title}</p>
      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-cream/80">
            <Check size={16} className="mt-0.5 shrink-0 text-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
