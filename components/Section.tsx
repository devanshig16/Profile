"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Section component
 * Reusable section wrapper with scroll animations
 * Fades in and translates up when scrolled into view
 * Animation triggers once for performance
 * Includes gradient transitions to next section
 */
interface SectionProps {
  children: ReactNode;
  bgColor: "white" | "warm-cream" | "soft-sage" | "light-terracotta";
  nextBgColor?: "white" | "warm-cream" | "soft-sage" | "light-terracotta";
  className?: string;
}

const bgColorClasses = {
  white: "bg-white dark:bg-dark-surface",
  "warm-cream": "bg-warm-cream dark:bg-dark-surface-2",
  "soft-sage": "bg-soft-sage dark:bg-dark-surface-3",
  "light-terracotta": "bg-light-terracotta dark:bg-dark-surface-2",
};

// Gradient colors for transitions (light mode)
const gradientColorsLight = {
  white: "#ffffff",
  "warm-cream": "#faf8f5",
  "soft-sage": "#f5f7f4",
  "light-terracotta": "#faf6f3",
};

// Gradient colors for transitions (dark mode)
const gradientColorsDark = {
  white: "#141414", // dark-surface
  "warm-cream": "#1a1a1a", // dark-surface-2
  "soft-sage": "#202020", // dark-surface-3
  "light-terracotta": "#1a1a1a", // dark-surface-2
};

export default function Section({ children, bgColor, nextBgColor, className = "" }: SectionProps) {
  const currentColorLight = gradientColorsLight[bgColor];
  const nextColorLight = nextBgColor ? gradientColorsLight[nextBgColor] : currentColorLight;
  const currentColorDark = gradientColorsDark[bgColor];
  const nextColorDark = nextBgColor ? gradientColorsDark[nextBgColor] : currentColorDark;
  const hasTransition = nextBgColor && nextBgColor !== bgColor;
  
  return (
    <motion.section
      className={`w-full relative z-10 ${bgColorClasses[bgColor]} ${hasTransition ? 'pb-0' : ''} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative z-10">
        {children}
      </div>
      {/* Gradient transition to next section - creates smooth blend at bottom */}
      {/* Same gradient behavior for both light and dark mode, consistent across all screen sizes */}
      {hasTransition && (
        <>
          {/* Light mode gradient */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 pointer-events-none dark:hidden"
            style={{
              background: `linear-gradient(to bottom, 
                ${currentColorLight} 0%, 
                ${currentColorLight}E6 25%, 
                ${nextColorLight}E6 75%, 
                ${nextColorLight} 100%)`,
            }}
          />
          {/* Dark mode gradient - same structure and behavior */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 pointer-events-none hidden dark:block"
            style={{
              background: `linear-gradient(to bottom, 
                ${currentColorDark} 0%, 
                ${currentColorDark}E6 25%, 
                ${nextColorDark}E6 75%, 
                ${nextColorDark} 100%)`,
            }}
          />
        </>
      )}
    </motion.section>
  );
}

