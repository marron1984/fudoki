"use client";

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover blur-md scale-105 brightness-[0.35]"
        src="/hero.mp4"
      />
      {/* Extra dark overlay for text readability */}
      <div className="absolute inset-0 bg-bg/50" />
    </div>
  );
}
