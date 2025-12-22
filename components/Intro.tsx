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
    <Section bgColor="warm-cream" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="content-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-lg md:text-xl leading-[1.75] mb-6 text-near-black font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I&apos;m Devanshi.
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

