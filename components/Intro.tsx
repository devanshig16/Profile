"use client";

import { motion } from "framer-motion";
import Section from "./Section";

/**
 * Intro section - Personal introduction
 * Establishes context and background
 * Staggered child animations for visual flow
 */
export default function Intro() {
  return (
    <Section bgColor="warm-cream" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Colorful accent shapes */}
      <div className="absolute top-10 left-5 w-24 h-24 rounded-full bg-gradient-to-br from-amber/20 to-sunset/20 blur-xl"></div>
      <div className="absolute bottom-10 right-5 w-32 h-32 rounded-full bg-gradient-to-br from-mint/20 to-ocean/20 blur-xl"></div>
      
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <motion.div
          className="content-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-lg md:text-xl leading-[1.75] mb-6 font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-terracotta via-amber to-sunset bg-clip-text text-transparent font-semibold text-xl md:text-2xl">
              Hi, I&apos;m Devanshi.
            </span>
          </motion.p>
          <motion.p
            className="text-lg md:text-xl leading-[1.75] mb-6 text-near-black font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I study computer science at Penn State and spend most of my time
            building software that makes complex systems easier to understand.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl leading-[1.75] text-near-black font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I like work that sits between data, systems, and people — where a small
            technical decision can quietly improve how someone does their job.
          </motion.p>
        </motion.div>
      </div>
    </Section>
  );
}

