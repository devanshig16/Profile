/**
 * What I do section - Current focus areas
 * Lists recent work themes in a clean, scannable format
 * Generous spacing between items for clarity
 */
export default function WhatIDo() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-2xl">
        <p className="text-lg md:text-xl leading-[1.75] mb-10 text-black">
          Lately, that&apos;s meant:
        </p>
        <ul className="space-y-7 text-lg md:text-xl leading-[1.75] text-black">
          <li>
            analytics dashboards that help teams see patterns they were missing
          </li>
          <li>
            machine learning systems that try to be fair, interpretable, and
            useful
          </li>
          <li>
            internal tools that have to work in the real world, not just in demos
          </li>
        </ul>
      </div>
    </section>
  );
}

