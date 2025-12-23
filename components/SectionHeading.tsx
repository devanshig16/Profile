"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * SectionHeading component
 * Playful heading with decorative gradient accent line
 * Staggered animation for visual interest
 */
interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionHeading({ 
  children, 
  className = "",
  delay = 0 
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-near-black dark:text-dark-text tracking-tight mb-4">
        {children}
      </h2>
      {/* Decorative gradient accent line with more vibrant colors */}
      <div className="mt-6 mb-8 relative">
        <div 
          className="h-1 w-32 rounded-full"
          style={{
            background: "linear-gradient(to right, #d4a574, #ffb347, #a8b89a, #4ecdc4, transparent)",
          }}
        />
        <div 
          className="h-0.5 w-24 mt-1 rounded-full opacity-60"
          style={{
            background: "linear-gradient(to right, #b19cd9, #ff6b6b, transparent)",
          }}
        />
      </div>
    </motion.div>
  );
}

