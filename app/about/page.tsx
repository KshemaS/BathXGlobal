"use client";

import AboutHero from "@/components/AboutHero";
import AboutHeritage from "@/components/AboutHeritage";
import AboutPillars from "@/components/AboutPillars";
import AboutVideo from "@/components/AboutVideo";
import AboutShowrooms from "@/components/AboutShowrooms";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <main className="bg-black text-white select-none overflow-x-hidden relative min-h-screen font-sans">
        
        {/* GOLD/METALLIC MESH GLOW ACCENTS (Sleek Modern Luxury Visuals) */}
        <div className="absolute top-[30vh] -left-[10vw] w-[45vw] h-[45vw] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="absolute top-[120vh] -right-[10vw] w-[50vw] h-[50vw] bg-zinc-500/5 rounded-full blur-[180px] pointer-events-none z-0" />
        <div className="absolute top-[240vh] left-[20vw] w-[40vw] h-[40vw] bg-amber-500/3 rounded-full blur-[150px] pointer-events-none z-0" />

        {/* HERO SECTION */}
        <AboutHero />

        {/* HERITAGE SECTION */}
        <AboutHeritage />

        {/* PHILOSOPHY & PILLARS */}
        <AboutPillars />

        {/* CINEMATIC VIDEO DISPLAY */}
        <AboutVideo />

        {/* SHOWROOM GALLERY */}
        <AboutShowrooms />

      </main>

      <Footer />
    </>
  );
}
