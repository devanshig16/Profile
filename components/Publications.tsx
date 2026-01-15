"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

/**
 * Research section - Research work
 * Shows current research projects
 */
export default function Publications() {
  return (
    <Section bgColor="white" nextBgColor="warm-cream" className="py-10 md:py-14 lg:py-16 relative overflow-hidden">
      <div className="absolute top-20 left-5 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-lavender/20 to-rose/20 blur-2xl"></div>
      <div className="absolute bottom-20 right-5 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-coral/20 to-amber/20 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="mb-12 md:mb-16">
          <SectionHeading delay={0.1}>Research</SectionHeading>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl leading-[1.75] text-near-black dark:text-dark-text font-sans mb-4">
            <a
              href="https://www.biorxiv.org/content/10.64898/2026.01.12.699092v1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-lavender to-rose bg-clip-text text-transparent font-semibold hover:opacity-80 transition-opacity inline-flex items-center gap-1"
            >
              Outlier Detection in Single-Cell Transcriptomics Reveals Disease-Enriched Cytotoxic Immune Populations
              <span className="text-xs">↗</span>
            </a>
          </p>
          <p className="text-lg md:text-xl leading-[1.75] text-near-black dark:text-dark-text font-sans">
            Building and evaluating a computational framework that identifies rare immune cell populations in scRNA-seq data using outlier-aware clustering and demonstrating how it differs from standard clustering.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

