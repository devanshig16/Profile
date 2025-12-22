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
    <Section bgColor="white" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="content-container">
          <SectionHeading delay={0.1}>How I think</SectionHeading>
          <motion.p
            className="text-lg md:text-xl leading-[1.75] mb-7 text-near-black font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I don&apos;t think good software has to be loud.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl leading-[1.75] mb-7 text-near-black font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The best systems I&apos;ve worked on:
          </motion.p>
          <ul className="space-y-5 text-lg md:text-xl leading-[1.75] mb-7 ml-6 text-near-black list-disc font-sans">
            {listItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
          <motion.p
            className="text-lg md:text-xl leading-[1.75] text-near-black font-sans"
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

