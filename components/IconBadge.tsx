import type { LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
  size?: "sm" | "md";
  tone?: "light" | "dark";
};

export default function IconBadge({ icon: Icon, size = "md", tone = "light" }: IconBadgeProps) {
  const box = size === "sm" ? "h-9 w-9" : "h-12 w-12";
  const bg = tone === "light" ? "bg-accent-soft" : "bg-accent/15";
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-md ${box} ${bg} text-accent`}>
      <Icon size={size === "sm" ? 18 : 22} strokeWidth={1.75} />
    </span>
  );
}
