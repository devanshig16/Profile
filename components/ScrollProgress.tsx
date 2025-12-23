"use client";

import { useEffect, useState } from "react";

/**
 * ScrollProgress component
 * Shows a colorful progress bar at the top indicating scroll position
 * Adds visual feedback for page navigation
 */
export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
      <div
        className="h-full bg-gradient-to-r from-terracotta via-amber via-sage to-ocean transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

