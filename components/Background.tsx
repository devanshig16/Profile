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
    <Section bgColor="warm-cream" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="content-container">
          <SectionHeading delay={0.1}>Background</SectionHeading>
          <motion.p
            className="text-lg md:text-xl leading-[1.75] text-near-black font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I&apos;ve worked across research, nonprofits, and industry — from AI
            consulting at Bata to analytics systems in a newsroom.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl leading-[1.75] mt-7 text-near-black font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I&apos;m currently finishing my B.S. in Computer Science at Penn State.
          </motion.p>
        </div>
      </div>
    </Section>
  );
}

