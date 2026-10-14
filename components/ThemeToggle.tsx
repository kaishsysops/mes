"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

// The pre-paint script in app/layout.tsx always sets data-theme, so <html> is the source of truth.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getTheme = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => null);
  const next: Theme = theme === "dark" ? "light" : "dark";

  function toggle() {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={`flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-ink/[0.06] hover:text-ink ${className}`}
    >
      {/* Both icons render on the server; CSS picks one so there is no flash before hydration */}
      <Sun size={18} strokeWidth={1.5} className="hidden dark:block" />
      <Moon size={18} strokeWidth={1.5} className="dark:hidden" />
    </button>
  );
}
