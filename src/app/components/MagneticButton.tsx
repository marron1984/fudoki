"use client";

import { useRef, useCallback, useEffect, useState } from "react";

export default function MagneticButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isTouch) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  }, [isTouch]);

  const handleMouseLeave = useCallback(() => {
    if (isTouch) return;
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  }, [isTouch]);

  return (
    <a
      ref={ref}
      href={href}
      className={`mag tap inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}
