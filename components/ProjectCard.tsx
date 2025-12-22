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
  return (
    <motion.article
      className="mb-16 md:mb-20 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <h3 className="text-2xl md:text-3xl font-light mb-5 text-near-black tracking-tight">{title}</h3>
      <p className="text-lg md:text-xl leading-[1.75] text-near-black max-w-reading">{description}</p>
    </motion.article>
  );
}

