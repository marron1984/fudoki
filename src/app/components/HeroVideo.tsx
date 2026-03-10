"use client";

import { useRef, useEffect } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video
        ref={ref}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover blur-md scale-105 brightness-[0.35]"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      {/* Extra dark overlay for text readability */}
      <div className="absolute inset-0 bg-bg/50" />
    </div>
  );
}
