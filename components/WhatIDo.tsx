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
    <Section bgColor="soft-sage" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Colorful accent shapes */}
      <div className="absolute top-1/4 right-10 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-ocean/20 to-mint/20 blur-2xl"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-amber/20 to-sunset/20 blur-2xl"></div>
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <motion.div
          className="content-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-lg md:text-xl leading-[1.75] mb-10 font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-terracotta via-amber to-sunset bg-clip-text text-transparent font-semibold text-xl md:text-2xl">
              Lately, that&apos;s meant:
            </span>
          </motion.p>
          <ul className="space-y-7 text-lg md:text-xl leading-[1.75] text-near-black dark:text-dark-text font-sans">
            {items.map((item, index) => {
              const colors = [
                { dot: "bg-terracotta", accent: "from-terracotta to-amber" },
                { dot: "bg-sage", accent: "from-sage to-ocean" },
                { dot: "bg-lavender", accent: "from-lavender to-rose" },
              ];
              const color = colors[index % 3];
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className={`w-3 h-3 rounded-full ${color.dot} mt-2 flex-shrink-0`}></div>
                  <span className="flex-1">
                    <span className={`bg-gradient-to-r ${color.accent} bg-clip-text text-transparent font-medium`}>
                      {item.split(' ')[0]}
                    </span>
                    {" " + item.split(' ').slice(1).join(' ')}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

