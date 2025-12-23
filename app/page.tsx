/**
 * Main page - Single scroll layout
 * Composes all sections in narrative order
 * Includes floating background blobs for visual interest
 */
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhatIDo from "@/components/WhatIDo";
import SelectedWork from "@/components/SelectedWork";
import HowIThink from "@/components/HowIThink";
import Background from "@/components/Background";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import FloatingBlobs from "@/components/FloatingBlobs";
import ScrollProgress from "@/components/ScrollProgress";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <DarkModeToggle />
      <ScrollProgress />
      <FloatingBlobs />
      <Hero />
      <Intro />
      <WhatIDo />
      <SelectedWork />
      <HowIThink />
      <Background />
      <Closing />
      <Footer />
    </main>
  );
}

