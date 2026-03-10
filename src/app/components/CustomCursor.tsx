"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on non-touch devices
    if (typeof window === "undefined" || "ontouchstart" in window) return;

    let mx = 0, my = 0;
    let dx = 0, dy = 0;
    let ringX = 0, ringY = 0;
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onEnter = () => {
      if (dot.current) dot.current.style.opacity = "1";
      if (ring.current) ring.current.style.opacity = "1";
    };
    const onLeave = () => {
      if (dot.current) dot.current.style.opacity = "0";
      if (ring.current) ring.current.style.opacity = "0";
    };

    const onLinkEnter = () => {
      hovering = true;
      if (ring.current) {
        ring.current.style.width = "64px";
        ring.current.style.height = "64px";
        ring.current.style.borderColor = "rgba(12,12,12,0.15)";
      }
      if (dot.current) {
        dot.current.style.transform = "translate(-50%,-50%) scale(0.5)";
      }
    };
    const onLinkLeave = () => {
      hovering = false;
      if (ring.current) {
        ring.current.style.width = "40px";
        ring.current.style.height = "40px";
        ring.current.style.borderColor = "rgba(12,12,12,0.25)";
      }
      if (dot.current) {
        dot.current.style.transform = "translate(-50%,-50%) scale(1)";
      }
    };

    const raf = () => {
      dx = mx; dy = my;
      ringX += (mx - ringX) * 0.12;
      ringY += (my - ringY) * 0.12;

      if (dot.current) {
        dot.current.style.left = `${dx}px`;
        dot.current.style.top = `${dy}px`;
      }
      if (ring.current) {
        ring.current.style.left = `${ringX}px`;
        ring.current.style.top = `${ringY}px`;
      }
      requestAnimationFrame(raf);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    const links = document.querySelectorAll("a, button, .magnetic");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onLinkEnter);
      el.addEventListener("mouseleave", onLinkLeave);
    });

    requestAnimationFrame(raf);

    // Hide default cursor
    document.documentElement.style.cursor = "none";
    links.forEach((el) => {
      (el as HTMLElement).style.cursor = "none";
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onLinkEnter);
        el.removeEventListener("mouseleave", onLinkLeave);
      });
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-fg opacity-0"
        style={{ transform: "translate(-50%,-50%)", transition: "opacity .3s, transform .2s" }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed z-[9998] rounded-full border border-fg/25 opacity-0"
        style={{
          width: 40, height: 40,
          transform: "translate(-50%,-50%)",
          transition: "opacity .3s, width .35s cubic-bezier(.16,1,.3,1), height .35s cubic-bezier(.16,1,.3,1), border-color .3s",
        }}
      />
    </>
  );
}
