"use client";

import { motion } from "framer-motion";
import Section from "./Section";

/**
 * Closing section - Invitation to connect
 * Ends on a warm, inviting note
 * Fade in animation
 */
export default function Closing() {
  return (
    <Section bgColor="soft-sage" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Colorful accent shapes */}
      <div className="absolute top-1/2 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-lavender/25 to-rose/25 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 rounded-full bg-gradient-to-br from-ocean/25 to-mint/25 blur-2xl"></div>
      
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <motion.div
          className="content-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl leading-[1.75] font-sans">
            <span className="text-near-black dark:text-dark-text">If you&apos;re building something </span>
            <span className="bg-gradient-to-r from-coral to-rose bg-clip-text text-transparent font-semibold">messy</span>
            <span className="text-near-black dark:text-dark-text">, </span>
            <span className="bg-gradient-to-r from-lavender to-sage bg-clip-text text-transparent font-semibold">under-documented</span>
            <span className="text-near-black dark:text-dark-text">, or slightly </span>
            <span className="bg-gradient-to-r from-amber to-sunset bg-clip-text text-transparent font-semibold">boring</span>
            <span className="text-near-black dark:text-dark-text"> — I&apos;d probably enjoy working on it.</span>
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

