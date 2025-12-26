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
    <Section bgColor="soft-sage" className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Colorful accent shapes */}
      <div className="absolute top-1/2 left-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-lavender/25 to-rose/25 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-ocean/25 to-mint/25 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl leading-[1.75] font-sans">
            <span className="text-near-black dark:text-dark-text">i&apos;m always looking for collaborators interested in </span>
            <span className="bg-gradient-to-r from-coral to-rose bg-clip-text text-transparent font-semibold">ai strategy</span>
            <span className="text-near-black dark:text-dark-text">, </span>
            <span className="bg-gradient-to-r from-lavender to-sage bg-clip-text text-transparent font-semibold">responsible machine learning</span>
            <span className="text-near-black dark:text-dark-text">, and </span>
            <span className="bg-gradient-to-r from-amber to-sunset bg-clip-text text-transparent font-semibold">data systems</span>
            <span className="text-near-black dark:text-dark-text">. reach out to me via email at devanshi.gpt16@gmail.com</span>
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

