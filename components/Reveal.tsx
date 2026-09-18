"use client";

import { Children, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger direct children in, in seconds (e.g. 0.1). Omit to animate as one block. */
  stagger?: number;
};

export default function Reveal({ children, className, stagger }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
  });

  if (!stagger) {
    return (
      <div ref={ref} className={className} style={style()}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {Children.toArray(children).map((child, i) => (
        <div key={i} style={style(i * stagger)}>
          {child}
        </div>
      ))}
    </div>
  );
}
