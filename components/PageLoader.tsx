"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";

export function PageLoader() {
  const [state, setState] = useState<"show" | "leaving" | "hidden">("show");

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem("morane:intro") === "done") {
        window.setTimeout(() => setState("hidden"), 0);
        return;
      }
    } catch {
      // Storage can be unavailable in private modes; show the intro anyway.
    }

    let cancelled = false;
    const minimum = new Promise((resolve) => window.setTimeout(resolve, 650));
    const ready =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((resolve) =>
            window.addEventListener("load", resolve, { once: true }),
          );

    void Promise.all([minimum, ready]).then(() => {
      if (cancelled) return;
      try {
        window.sessionStorage.setItem("morane:intro", "done");
      } catch {
        // Ignore storage failures.
      }
      setState("leaving");
      window.setTimeout(() => {
        if (!cancelled) setState("hidden");
      }, 450);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (state === "hidden") return null;

  return (
    <div
      className={`page-loader${state === "leaving" ? " is-leaving" : ""}`}
      aria-hidden={state === "leaving" ? "true" : undefined}
    >
      <LoadingScreen />
    </div>
  );
}
