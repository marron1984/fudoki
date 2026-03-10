"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if ("ontouchstart" in window) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let mx = 0, my = 0, ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onEnter = () => {
      if (dot.current) dot.current.style.opacity = "1";
      if (ring.current) ring.current.style.opacity = "1";
    };
    const onLeave = () => {
      if (dot.current) dot.current.style.opacity = "0";
      if (ring.current) ring.current.style.opacity = "0";
    };

    const onLinkEnter = () => {
      if (ring.current) { ring.current.style.width = "60px"; ring.current.style.height = "60px"; ring.current.style.borderColor = "rgba(12,12,12,0.12)"; }
      if (dot.current) dot.current.style.transform = "translate(-50%,-50%) scale(0.4)";
    };
    const onLinkLeave = () => {
      if (ring.current) { ring.current.style.width = "36px"; ring.current.style.height = "36px"; ring.current.style.borderColor = "rgba(12,12,12,0.2)"; }
      if (dot.current) dot.current.style.transform = "translate(-50%,-50%) scale(1)";
    };

    const raf = () => {
      ringX += (mx - ringX) * 0.12;
      ringY += (my - ringY) * 0.12;
      if (dot.current) { dot.current.style.left = `${mx}px`; dot.current.style.top = `${my}px`; }
      if (ring.current) { ring.current.style.left = `${ringX}px`; ring.current.style.top = `${ringY}px`; }
      requestAnimationFrame(raf);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    const links = document.querySelectorAll("a, button");
    links.forEach(el => {
      el.addEventListener("mouseenter", onLinkEnter);
      el.addEventListener("mouseleave", onLinkLeave);
    });

    requestAnimationFrame(raf);
    document.documentElement.style.cursor = "none";
    links.forEach(el => { (el as HTMLElement).style.cursor = "none"; });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      links.forEach(el => {
        el.removeEventListener("mouseenter", onLinkEnter);
        el.removeEventListener("mouseleave", onLinkLeave);
      });
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div ref={dot} className="pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-fg opacity-0 hidden md:block"
        style={{ transform: "translate(-50%,-50%)", transition: "opacity .3s, transform .15s" }} />
      <div ref={ring} className="pointer-events-none fixed z-[9998] rounded-full border border-fg/20 opacity-0 hidden md:block"
        style={{ width: 36, height: 36, transform: "translate(-50%,-50%)",
          transition: "opacity .3s, width .3s cubic-bezier(.16,1,.3,1), height .3s cubic-bezier(.16,1,.3,1), border-color .3s" }} />
    </>
  );
}
