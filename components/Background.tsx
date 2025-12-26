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
    <Section bgColor="warm-cream" nextBgColor="soft-sage" className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Colorful accent shapes */}
      <div className="absolute top-20 right-20 w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-lavender/20 to-rose/20 blur-xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-ocean/20 to-mint/20 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="mb-12 md:mb-16">
          <SectionHeading delay={0.1}>Background</SectionHeading>
        </div>
        <motion.p
          className="text-lg md:text-xl leading-[1.75] font-sans"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-near-black dark:text-dark-text">I&apos;m currently a </span>
          <span className="bg-gradient-to-r from-terracotta to-amber bg-clip-text text-transparent font-semibold">third year Computer Science student</span>
          <span className="text-near-black dark:text-dark-text"> at </span>
          <span className="bg-gradient-to-r from-sage to-ocean bg-clip-text text-transparent font-semibold">Penn State University</span>
          <span className="text-near-black dark:text-dark-text">, with a GPA of 3.62/4.0. My relevant coursework includes Data Structures & Algorithms, Design of Algorithms, Machine Learning, and Web Development.</span>
        </motion.p>
        <motion.p
          className="text-lg md:text-xl leading-[1.75] mt-7 font-sans"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-near-black dark:text-dark-text">I&apos;ve worked across </span>
          <span className="bg-gradient-to-r from-lavender to-rose bg-clip-text text-transparent font-semibold">AI consulting</span>
          <span className="text-near-black dark:text-dark-text">, </span>
          <span className="bg-gradient-to-r from-amber to-sunset bg-clip-text text-transparent font-semibold">research</span>
          <span className="text-near-black dark:text-dark-text">, and </span>
          <span className="bg-gradient-to-r from-sage to-ocean bg-clip-text text-transparent font-semibold">web development</span>
          <span className="text-near-black dark:text-dark-text"> — from securing $80K in AI funding at Bata to building analytics dashboards at The Daily Collegian.</span>
        </motion.p>
      </div>
    </Section>
  );
}

