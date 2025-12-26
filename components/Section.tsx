"use client";

import { ReactNode } from "react";

/**
 * Section component
 * Reusable section wrapper
 * Uses consistent background throughout
 */
interface SectionProps {
  children: ReactNode;
  bgColor?: "white" | "warm-cream" | "soft-sage" | "light-terracotta"; // Kept for backward compatibility but not used
  nextBgColor?: "white" | "warm-cream" | "soft-sage" | "light-terracotta"; // Kept for backward compatibility but not used
  className?: string;
}

export default function Section({ children, bgColor, nextBgColor, className = "" }: SectionProps) {
  // Single consistent background: white for light mode, dark-surface for dark mode
  return (
    <section className={`w-full relative z-10 bg-white dark:bg-dark-surface ${className}`}>
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}

