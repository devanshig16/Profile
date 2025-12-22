"use client";

import { motion } from "framer-motion";
import Section from "./Section";

/**
 * What I do section - Current focus areas
 * Lists recent work themes in a clean, scannable format
 * Staggered list item animations
 */
export default function WhatIDo() {
  const items = [
    "analytics dashboards that help teams see patterns they were missing",
    "machine learning systems that try to be fair, interpretable, and useful",
    "internal tools that have to work in the real world, not just in demos",
  ];

  return (
    <Section bgColor="soft-sage" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="content-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-lg md:text-xl leading-[1.75] mb-10 text-near-black font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Lately, that&apos;s meant:
          </motion.p>
          <ul className="space-y-7 text-lg md:text-xl leading-[1.75] text-near-black font-sans">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

