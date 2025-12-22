/**
 * Hero section - Opening statement
 * Sets the tone with a thoughtful, understated introduction
 * Prominent but calm typography with generous spacing
 */
export default function Hero() {
  return (
    <section className="py-32 md:py-40">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.15] mb-8 text-black tracking-tight">
          I like boring problems.
        </h1>
        <p className="text-xl md:text-2xl font-normal leading-[1.7] text-gray-700 max-w-xl">
          The kind hiding in workflows, dashboards, and datasets no one looks at
          — until something breaks, scales, or suddenly matters.
        </p>
      </div>
    </section>
  );
}

