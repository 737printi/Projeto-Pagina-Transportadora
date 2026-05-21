"use client";

import { useEffect, useState } from "react";

/**
 * Detecta scroll para aplicar efeito glass/blur na navbar.
 * Threshold em pixels evita flicker em micro-scrolls.
 */
export function useScrollBlur(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
