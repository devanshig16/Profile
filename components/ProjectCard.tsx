"use client";

import { motion } from "framer-motion";

/**
 * ProjectCard component
 * Reusable project display with hover interactions
 * Lifts and adds shadow on hover for depth
 * Staggered animation on scroll
 */
interface ProjectCardProps {
  title: string;
  description: string;
  index?: number;
}

export default function ProjectCard({ title, description, index = 0 }: ProjectCardProps) {
  const gradientColors = [
    "from-terracotta/20 via-peach/20 to-amber/20 dark:from-terracotta/10 dark:via-peach/10 dark:to-amber/10",
    "from-sage/20 via-mint/20 to-ocean/20 dark:from-sage/10 dark:via-mint/10 dark:to-ocean/10",
    "from-lavender/20 via-rose/20 to-coral/20 dark:from-lavender/10 dark:via-rose/10 dark:to-coral/10",
  ];
  const borderColors = [
    "border-l-terracotta",
    "border-l-sage",
    "border-l-lavender",
  ];
  
  return (
    <motion.article
      className={`mb-8 md:mb-10 p-6 md:p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-default bg-gradient-to-br ${gradientColors[index % 3]} border-l-4 ${borderColors[index % 3]} backdrop-blur-sm relative overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Decorative corner accent */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradientColors[index % 3]} opacity-30 rounded-bl-full`}></div>
      
      <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-4 md:mb-5 text-near-black dark:text-dark-text tracking-tight relative z-10">
        <span className={`bg-gradient-to-r ${index % 3 === 0 ? 'from-terracotta to-amber' : index % 3 === 1 ? 'from-sage to-ocean' : 'from-lavender to-rose'} bg-clip-text text-transparent`}>
          {title}
        </span>
      </h3>
      <p className="text-base sm:text-lg md:text-xl leading-[1.75] text-near-black dark:text-dark-text max-w-reading relative z-10">{description}</p>
    </motion.article>
  );
}

