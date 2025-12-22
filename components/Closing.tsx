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
    <Section bgColor="soft-sage" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="content-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl leading-[1.75] text-near-black font-sans">
            If you&apos;re building something messy, under-documented, or slightly
            boring — I&apos;d probably enjoy working on it.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

