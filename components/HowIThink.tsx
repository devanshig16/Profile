"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

/**
 * How I think section - Philosophy and approach
 * Explains the underlying principles behind the work
 * Staggered animations for list items
 */
export default function HowIThink() {
  const listItems = [
    "remove friction instead of adding features",
    "make the right thing easier to do",
    "and don't need much explaining",
  ];

  return (
    <Section bgColor="white" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Colorful accent shapes */}
      <div className="absolute top-20 left-5 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-lavender/20 to-rose/20 blur-2xl"></div>
      <div className="absolute bottom-20 right-5 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-coral/20 to-amber/20 blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="content-container">
          <SectionHeading delay={0.1}>How I think</SectionHeading>
          <motion.p
            className="text-lg md:text-xl leading-[1.75] mb-7 font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-near-black dark:text-dark-text">I don&apos;t think good software has to be </span>
            <span className="bg-gradient-to-r from-coral to-rose bg-clip-text text-transparent font-semibold">loud</span>
            <span className="text-near-black dark:text-dark-text">.</span>
          </motion.p>
          <motion.p
            className="text-lg md:text-xl leading-[1.75] mb-7 text-near-black dark:text-dark-text font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The best systems I&apos;ve worked on:
          </motion.p>
          <ul className="space-y-5 text-lg md:text-xl leading-[1.75] mb-7 ml-6 text-near-black dark:text-dark-text font-sans">
            {listItems.map((item, index) => {
              const colors = [
                { marker: "bg-gradient-to-r from-terracotta to-amber", text: "from-amber to-sunset" },
                { marker: "bg-gradient-to-r from-sage to-ocean", text: "from-ocean to-mint" },
                { marker: "bg-gradient-to-r from-lavender to-rose", text: "from-rose to-coral" },
              ];
              const color = colors[index % 3];
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className={`w-2 h-2 rounded-full ${color.marker} mt-2.5 flex-shrink-0`}></div>
                  <span className={`bg-gradient-to-r ${color.text} bg-clip-text text-transparent`}>
                    {item}
                  </span>
                </motion.li>
              );
            })}
          </ul>
          <motion.p
            className="text-lg md:text-xl leading-[1.75] text-near-black dark:text-dark-text font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            That&apos;s usually what I aim for.
          </motion.p>
        </div>
      </div>
    </Section>
  );
}

