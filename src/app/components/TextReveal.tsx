"use client";

import { useEffect, useRef } from "react";

export default function TextReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("revealed"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    // Check if already visible
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setTimeout(() => el.classList.add("revealed"), delay);
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`text-reveal ${className}`}>
      <div className="text-reveal-inner">{children}</div>
    </div>
  );
}
