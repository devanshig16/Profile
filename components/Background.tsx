"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

/**
 * Background section - Professional history
 * Provides context about experience and education
 * Staggered paragraph animations
 */
export default function Background() {
  return (
    <Section bgColor="warm-cream" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Colorful accent shapes */}
      <div className="absolute top-20 right-20 w-28 h-28 rounded-full bg-gradient-to-br from-lavender/20 to-rose/20 blur-xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-ocean/20 to-mint/20 blur-xl"></div>
      
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <div className="content-container">
          <SectionHeading delay={0.1}>Background</SectionHeading>
          <motion.p
            className="text-lg md:text-xl leading-[1.75] font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-near-black dark:text-dark-text">I&apos;ve worked across </span>
            <span className="bg-gradient-to-r from-terracotta to-amber bg-clip-text text-transparent font-semibold">research</span>
            <span className="text-near-black dark:text-dark-text">, </span>
            <span className="bg-gradient-to-r from-sage to-ocean bg-clip-text text-transparent font-semibold">nonprofits</span>
            <span className="text-near-black dark:text-dark-text">, and </span>
            <span className="bg-gradient-to-r from-lavender to-rose bg-clip-text text-transparent font-semibold">industry</span>
            <span className="text-near-black dark:text-dark-text"> — from AI consulting at Bata to analytics systems in a newsroom.</span>
          </motion.p>
          <motion.p
            className="text-lg md:text-xl leading-[1.75] mt-7 font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-near-black dark:text-dark-text">I&apos;m currently finishing my </span>
            <span className="bg-gradient-to-r from-amber to-sunset bg-clip-text text-transparent font-semibold">B.S. in Computer Science</span>
            <span className="text-near-black dark:text-dark-text"> at Penn State.</span>
          </motion.p>
        </div>
      </div>
    </Section>
  );
}

