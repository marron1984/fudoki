"use client";

import { useEffect, useRef } from "react";

export default function SplitText({
  text,
  className = "",
  charClass = "",
  baseDelay = 0,
  stagger = 0.035,
}: {
  text: string;
  className?: string;
  charClass?: string;
  baseDelay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll<HTMLSpanElement>("[data-char]");
    chars.forEach((c, i) => {
      c.style.animationDelay = `${baseDelay + i * stagger}s`;
      c.classList.add("char-animated");
    });
  }, [baseDelay, stagger]);

  return (
    <span ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          data-char
          className={`inline-block char-base ${charClass}`}
          style={{ animationFillMode: "both" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
