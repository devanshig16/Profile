"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Section component
 * Reusable section wrapper with scroll animations
 * Fades in and translates up when scrolled into view
 * Animation triggers once for performance
 */
interface SectionProps {
  children: ReactNode;
  bgColor: "white" | "warm-cream" | "soft-sage" | "light-terracotta";
  className?: string;
}

const bgColorClasses = {
  white: "bg-white",
  "warm-cream": "bg-warm-cream",
  "soft-sage": "bg-soft-sage",
  "light-terracotta": "bg-light-terracotta",
};

export default function Section({ children, bgColor, className = "" }: SectionProps) {
  return (
    <motion.section
      className={`w-full relative z-10 ${bgColorClasses[bgColor]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

