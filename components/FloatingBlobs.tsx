"use client";

/**
 * FloatingBlobs component
 * Creates organic, blurred gradient shapes that slowly move
 * Uses GPU-accelerated CSS blur for performance
 * Different animation durations create natural, varied motion
 */
export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Terracotta blob - slowest movement */}
      <div
        className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, #d4a574 0%, transparent 70%)",
          top: "10%",
          left: "5%",
          animation: "float-terracotta 25s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      
      {/* Sage blob - medium speed */}
      <div
        className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, #a8b89a 0%, transparent 70%)",
          top: "60%",
          right: "10%",
          animation: "float-sage 20s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      
      {/* Peach blob - faster movement */}
      <div
        className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full opacity-35 blur-3xl"
        style={{
          background: "radial-gradient(circle, #f4c2a1 0%, transparent 70%)",
          bottom: "15%",
          left: "20%",
          animation: "float-peach 18s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      
      {/* Additional smaller blob for depth */}
      <div
        className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, #d4a574 0%, transparent 70%)",
          top: "40%",
          right: "30%",
          animation: "float-terracotta 30s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />
      
      {/* New colorful blobs */}
      <div
        className="absolute w-56 h-56 md:w-96 md:h-96 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, #ffb347 0%, transparent 70%)",
          top: "25%",
          right: "15%",
          animation: "float-peach 22s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      
      <div
        className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full opacity-28 blur-3xl"
        style={{
          background: "radial-gradient(circle, #4ecdc4 0%, transparent 70%)",
          bottom: "30%",
          right: "25%",
          animation: "float-sage 24s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />
      
      <div
        className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full opacity-22 blur-3xl"
        style={{
          background: "radial-gradient(circle, #b19cd9 0%, transparent 70%)",
          top: "70%",
          left: "40%",
          animation: "float-terracotta 28s ease-in-out infinite",
          willChange: "transform",
        }}
      />
    </div>
  );
}

