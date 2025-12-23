"use client";

import { motion } from "framer-motion";

/**
 * Footer component - Contact links
 * Simple, accessible navigation to external profiles
 * Links have hover interactions with underline and opacity
 */
export default function Footer() {
  return (
    <motion.footer
      className="py-16 md:py-20 border-t border-gray-200 w-full bg-warm-cream relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12">
        <nav aria-label="Contact and social links" className="flex justify-center">
          <ul className="flex flex-wrap gap-6 text-base md:text-lg leading-relaxed justify-center items-center">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-interactive text-near-black"
              >
                GitHub
              </a>
            </li>
            <li>
              <span aria-hidden="true" className="text-gray-400">·</span>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-interactive text-near-black"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <span aria-hidden="true" className="text-gray-400">·</span>
            </li>
            <li>
              <a
                href="mailto:devanshi.gpt16@gmail.com"
                className="link-interactive text-near-black"
              >
                devanshi.gpt16@gmail.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.footer>
  );
}

