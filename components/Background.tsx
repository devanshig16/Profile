/**
 * Background section - Professional history
 * Provides context about experience and education
 * Consistent spacing and reading width
 */
export default function Background() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-light mb-10 text-black tracking-tight">Background</h2>
        <p className="text-lg md:text-xl leading-[1.75] text-black">
          I&apos;ve worked across research, nonprofits, and industry — from AI
          consulting at Bata to analytics systems in a newsroom.
        </p>
        <p className="text-lg md:text-xl leading-[1.75] mt-7 text-black">
          I&apos;m currently finishing my B.S. in Computer Science at Penn State.
        </p>
      </div>
    </section>
  );
}

