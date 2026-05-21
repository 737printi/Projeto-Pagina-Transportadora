"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewCounterOptions {
  end: number;
  duration?: number;
  decimals?: number;
  start?: number;
}

/**
 * Anima número de 0 até `end` quando o elemento entra na viewport.
 * Usado nas métricas — desacopla animação da UI do card.
 */
export function useInViewCounter({
  end,
  duration = 2000,
  decimals = 0,
  start = 0,
}: UseInViewCounterOptions) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * eased;
            setCount(
              decimals > 0
                ? parseFloat(current.toFixed(decimals))
                : Math.floor(current)
            );
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, decimals, start, hasAnimated]);

  const formatted =
    decimals > 0
      ? count.toLocaleString("pt-BR", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : count.toLocaleString("pt-BR");

  return { ref, count, formatted };
}
