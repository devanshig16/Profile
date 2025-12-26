"use client";

/**
 * Footer component - Contact links
 * Simple, accessible navigation to external profiles
 * Links have hover interactions with underline and opacity
 */
export default function Footer() {
  return (
    <footer
      className="py-10 md:py-14 border-t border-gray-200 dark:border-gray-800 w-full bg-white dark:bg-dark-surface relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <nav aria-label="Contact and social links" className="flex justify-center">
          <ul className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed justify-center items-center">
            <li>
              <a
                href="https://github.com/devanshig16"
                target="_blank"
                rel="noopener noreferrer"
                className="link-interactive text-near-black dark:text-dark-text"
              >
                GitHub
              </a>
            </li>
            <li>
              <span aria-hidden="true" className="text-gray-400 dark:text-gray-600">·</span>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/devanshigupta99"
                target="_blank"
                rel="noopener noreferrer"
                className="link-interactive text-near-black dark:text-dark-text"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <span aria-hidden="true" className="text-gray-400 dark:text-gray-600">·</span>
            </li>
            <li>
              <a
                href="mailto:devanshi.gpt16@gmail.com"
                className="link-interactive text-near-black dark:text-dark-text break-all sm:break-normal"
              >
                devanshi.gpt16@gmail.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

