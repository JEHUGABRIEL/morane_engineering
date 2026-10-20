"use client";

import { useEffect, useRef, type ReactNode } from "react";

type StackedRealisationsProps = {
  children: ReactNode;
  className?: string;
  mobileOnly?: boolean;
};

export function StackedRealisations({
  children,
  className = "",
  mobileOnly = false,
}: StackedRealisationsProps) {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const active = window.matchMedia(
      mobileOnly ? "(max-width: 980px)" : "(min-width: 0px)",
    );
    let frame = 0;

    const update = () => {
      frame = 0;
      const cards = Array.from(
        stack.querySelectorAll<HTMLElement>(".stack-card"),
      );
      const header = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--head-h"),
      );
      const top = (Number.isFinite(header) ? header : 125) + 24;

      cards.forEach((card, index) => {
        card.style.zIndex = String(index + 1);
        const next = cards[index + 1];
        if (!next || !active.matches || reduced.matches) {
          card.style.transform = "";
          return;
        }

        const nextTop = next.getBoundingClientRect().top;
        const start = window.innerHeight;
        const progress = Math.min(
          1,
          Math.max(0, (start - nextTop) / Math.max(1, start - top)),
        );

        card.style.transform = `translateY(${Math.round(progress * -10)}px)`;
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    const onPreference = () => update();
    reduced.addEventListener("change", onPreference);
    active.addEventListener("change", onPreference);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reduced.removeEventListener("change", onPreference);
      active.removeEventListener("change", onPreference);
    };
  }, [mobileOnly]);

  return (
    <div className={`stack ${className}`.trim()} ref={stackRef}>
      {children}
    </div>
  );
}
