"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";

/**
 * Intro section - Personal introduction
 * Establishes context and background
 * Staggered child animations for visual flow
 */
export default function Intro() {
  return (
    <Section bgColor="warm-cream" nextBgColor="white" className="py-10 md:py-14 lg:py-16 relative overflow-hidden">
      {/* Colorful accent shapes */}
      <div className="absolute top-10 left-5 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-amber/20 to-sunset/20 blur-xl"></div>
      <div className="absolute bottom-10 right-5 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-mint/20 to-ocean/20 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Text Content */}
          <div className="flex-1 order-2 md:order-1">
            <motion.p
              className="text-base sm:text-lg md:text-xl leading-[1.75] mb-4 sm:mb-6 text-near-black dark:text-dark-text font-sans"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              i&apos;m a third year penn state cs major interested in ai strategy, responsible machine learning, and building data systems that make complex information accessible. i&apos;m currently president of HackPSU, penn state&apos;s largest student-run hackathon, and i work on ai consulting, research, and web development projects.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl leading-[1.75] text-near-black dark:text-dark-text font-sans"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              i also build websites and write poetry in my spare time, and i enjoy public speaking and mentoring. i&apos;m currently working at The Daily Collegian building analytics dashboards, and i also help with research at the Center for Socially Responsible AI.
            </motion.p>
          </div>

          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0 order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-terracotta/20 dark:ring-lavender/20 shadow-lg bg-gradient-to-br from-terracotta/20 to-peach/20 dark:from-lavender/20 dark:to-rose/20">
              <Image
                src="/profile.png"
                alt="Devanshi Gupta"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

