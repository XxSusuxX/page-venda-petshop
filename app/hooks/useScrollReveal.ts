"use client";

import { useEffect, useRef } from "react";

/**
 * useScrollReveal — attaches IntersectionObserver to a container element
 * and adds `.is-visible` to any child with `.reveal-on-scroll`, `.reveal-from-left`,
 * `.reveal-from-right`, or `.reveal-scale` as they enter the viewport.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal-on-scroll, .reveal-from-left, .reveal-from-right, .reveal-scale"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
