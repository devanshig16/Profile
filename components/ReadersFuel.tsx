"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

/**
 * ReadersFuel section - Personal blog and creative work
 * Links to Wix website with poetry, reviews, and photography
 */
export default function ReadersFuel() {
  return (
    <Section bgColor="soft-sage" nextBgColor="soft-sage" className="py-10 md:py-14 lg:py-16 relative overflow-hidden">
      {/* Colorful accent shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-lavender/20 to-rose/20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-coral/20 to-amber/20 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="mb-12 md:mb-16">
          <SectionHeading delay={0.1}>Beyond code</SectionHeading>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl leading-[1.75] font-sans text-near-black dark:text-dark-text">
            <span>I published a poetry collection titled </span>
            <a
              href="https://books.google.com/books/about/UNFOLDING.html?id=LqKEEAAAQBAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-lavender to-rose bg-clip-text text-transparent font-semibold hover:opacity-80 transition-opacity inline-flex items-center gap-1"
            >
              UNFOLDING
              <span className="text-xs">↗</span>
            </a>
            <span>. You can find more of my poetry, novel reviews, and photography on my blog </span>
            <a
              href="https://readersfuel.wixsite.com/readersfuel/my-blog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-lavender to-rose bg-clip-text text-transparent font-semibold hover:opacity-80 transition-opacity inline-flex items-center gap-1"
            >
              ReadersFuel
              <span className="text-xs">↗</span>
            </a>
            <span>.</span>
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

