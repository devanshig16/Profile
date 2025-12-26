"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

/**
 * Publications section - Research and writing
 * Shows upcoming publications
 */
export default function Publications() {
  return (
    <Section bgColor="white" nextBgColor="warm-cream" className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-20 left-5 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-lavender/20 to-rose/20 blur-2xl"></div>
      <div className="absolute bottom-20 right-5 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-coral/20 to-amber/20 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="mb-12 md:mb-16">
          <SectionHeading delay={0.1}>Publications</SectionHeading>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl leading-[1.75] text-near-black dark:text-dark-text font-sans">
            incoming.. (i am working on a research related to AI4SG collaborations)
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

