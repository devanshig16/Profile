"use client";

import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

/**
 * DarkModeToggle component
 * Toggle button for switching between light and dark modes
 * Smooth animation and accessible design
 */
export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-3 md:p-3 rounded-full bg-white dark:bg-dark-surface-2 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 group touch-manipulation"
      aria-label="Toggle dark mode"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div className="relative w-6 h-6 md:w-6 md:h-6">
        {/* Sun icon */}
        <motion.svg
          className="absolute inset-0 w-6 h-6 text-amber dark:text-amber/0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
            scale: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <circle cx="12" cy="12" r="5" strokeWidth="2" />
          <path
            strokeLinecap="round"
            strokeWidth="2"
            d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          />
        </motion.svg>

        {/* Moon icon */}
        <motion.svg
          className="absolute inset-0 w-6 h-6 text-lavender dark:text-lavender"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={false}
          animate={{
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
            scale: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </motion.svg>
      </div>
    </button>
  );
}

