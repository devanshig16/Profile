/**
 * Footer component - Contact links
 * Simple, accessible navigation to external profiles
 * Generous spacing for visual separation
 */
export default function Footer() {
  return (
    <footer className="py-16 md:py-20 border-t border-gray-200">
      <nav aria-label="Contact and social links">
        <ul className="flex flex-wrap gap-6 text-base md:text-lg text-black leading-relaxed">
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-black"
            >
              GitHub
            </a>
          </li>
          <li>
            <span aria-hidden="true" className="text-black">·</span>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-black"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <span aria-hidden="true" className="text-black">·</span>
          </li>
          <li>
            <a
              href="mailto:devanshi.gpt16@gmail.com"
              className="hover:underline text-black"
            >
              devanshi.gpt16@gmail.com
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

