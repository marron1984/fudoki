"use client";

import { useRef, useEffect, useState } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.play()
      .then(() => setPlaying(true))
      .catch(() => {});
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#1a1a1a]">
      <video
        ref={ref}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(8px) brightness(0.4)",
          transform: "scale(1.05)",
          opacity: playing ? 1 : 0,
          transition: "opacity 1s",
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(250,250,250,0.35)",
        }}
      />
    </div>
  );
}
