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
      <h2 className="text-3xl md:text-4xl font-light text-near-black tracking-tight mb-4">
        {children}
      </h2>
      {/* Decorative gradient accent line */}
      <div 
        className="h-px w-24 mt-6 mb-8"
        style={{
          background: "linear-gradient(to right, #d4a574, #a8b89a, transparent)",
        }}
      />
    </motion.div>
  );
}

