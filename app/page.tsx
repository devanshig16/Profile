/**
 * Main page - Single scroll layout
 * Composes all sections in narrative order
 * Uses semantic HTML and accessible structure
 */
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhatIDo from "@/components/WhatIDo";
import SelectedWork from "@/components/SelectedWork";
import HowIThink from "@/components/HowIThink";
import Background from "@/components/Background";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12">
        <Hero />
        <Intro />
        <WhatIDo />
        <SelectedWork />
        <HowIThink />
        <Background />
        <Closing />
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12">
        <Footer />
      </div>
    </main>
  );
}

