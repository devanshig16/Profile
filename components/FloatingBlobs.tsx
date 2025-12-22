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
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
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
        className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
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
        className="absolute w-72 h-72 rounded-full opacity-18 blur-3xl"
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
        className="absolute w-64 h-64 rounded-full opacity-12 blur-3xl"
        style={{
          background: "radial-gradient(circle, #d4a574 0%, transparent 70%)",
          top: "40%",
          right: "30%",
          animation: "float-terracotta 30s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />
    </div>
  );
}

