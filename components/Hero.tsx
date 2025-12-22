"use client";

import { motion } from "framer-motion";
import Section from "./Section";

/**
 * Hero section - Opening statement
 * Large serif typography for impact
 * Fade in animation on scroll
 */
export default function Hero() {
  return (
    <Section bgColor="white" className="py-20 md:py-32 lg:py-40">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="content-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-normal leading-[1.1] mb-8 text-near-black tracking-tight">
            I like boring problems.
          </h1>
          <motion.p
            className="text-xl md:text-2xl font-sans font-normal leading-[1.7] text-gray-600 max-w-reading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            The kind hiding in workflows, dashboards, and datasets no one looks at
            — until something breaks, scales, or suddenly matters.
          </motion.p>
        </motion.div>
      </div>
    </Section>
  );
}

