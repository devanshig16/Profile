/**
 * How I think section - Philosophy and approach
 * Explains the underlying principles behind the work
 * Clear hierarchy with comfortable reading width
 */
export default function HowIThink() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-light mb-10 text-black tracking-tight">How I think</h2>
        <p className="text-lg md:text-xl leading-[1.75] mb-7 text-black">
          I don&apos;t think good software has to be loud.
        </p>
        <p className="text-lg md:text-xl leading-[1.75] mb-7 text-black">
          The best systems I&apos;ve worked on:
        </p>
        <ul className="space-y-5 text-lg md:text-xl leading-[1.75] mb-7 ml-6 text-black list-disc">
          <li>remove friction instead of adding features</li>
          <li>make the right thing easier to do</li>
          <li>and don&apos;t need much explaining</li>
        </ul>
        <p className="text-lg md:text-xl leading-[1.75] text-black">
          That&apos;s usually what I aim for.
        </p>
      </div>
    </section>
  );
}

