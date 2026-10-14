"use client";

import { Children, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger direct children in, in seconds (e.g. 0.1). Omit to animate as one block. */
  stagger?: number;
  /** Class applied to each wrapper when staggering. */
  itemClassName?: string;
  /** Delay before this block reveals, in seconds. */
  delay?: number;
};

// Transitions live in globals.css and only run under prefers-reduced-motion: no-preference.
export default function Reveal({ children, className, stagger, itemClassName, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const state = shown ? "shown" : "hidden";

  if (!stagger) {
    return (
      <div
        ref={ref}
        className={className}
        data-reveal={state}
        style={delay ? ({ "--delay": `${delay}s` } as React.CSSProperties) : undefined}
      >
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {Children.toArray(children).map((child, i) => (
        <div
          key={i}
          className={itemClassName}
          data-reveal={state}
          style={{ "--delay": `${i * stagger}s` } as React.CSSProperties}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
