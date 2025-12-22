/**
 * Intro section - Personal introduction
 * Establishes context and background
 * Comfortable reading width with generous line-height
 */
export default function Intro() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-2xl">
        <p className="text-lg md:text-xl leading-[1.75] mb-6 text-black">
          Hi, I&apos;m Devanshi.
        </p>
        <p className="text-lg md:text-xl leading-[1.75] mb-6 text-black">
          I study computer science at Penn State and spend most of my time
          building software that makes complex systems easier to understand.
        </p>
        <p className="text-lg md:text-xl leading-[1.75] text-black">
          I like work that sits between data, systems, and people — where a small
          technical decision can quietly improve how someone does their job.
        </p>
      </div>
    </section>
  );
}

