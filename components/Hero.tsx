"use client";

import { motion } from "framer-motion";
import Section from "./Section";

/**
 * Hero section - Name and tagline
 * Large serif typography for impact
 * Fade in animation on scroll
 */
export default function Hero() {
  return (
    <Section bgColor="white" nextBgColor="warm-cream" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Colorful decorative shapes */}
      <div className="absolute top-20 right-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-terracotta/30 to-peach/30 blur-2xl -z-0"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-sage/25 to-mint/25 blur-2xl -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal leading-[1.1] mb-4 md:mb-6 tracking-tight text-near-black dark:text-dark-text">
            Devanshi Gupta
          </h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-sans font-normal leading-[1.7] text-gray-700 dark:text-dark-text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Building AI solutions and data systems @ Penn State, leading @ HackPSU
          </motion.p>
        </motion.div>
      </div>
    </Section>
  );
}

