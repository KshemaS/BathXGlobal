import React from "react";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactDirectory from "@/components/ContactDirectory";
import ContactFAQ from "@/components/ContactFAQ";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Our Ateliers | BathX Luxury Bath Fittings",
  description: "Get in touch with our spatial specification advisors. Book showroom visits in Milan, London, Dubai, or Soho, and download technical specifications.",
};

export default function ContactPage() {
  return (
    <>
      <main className="bg-black text-white select-none overflow-x-hidden relative min-h-screen font-sans pt-32">
        {/* GOLD/METALLIC MESH GLOW ACCENTS (Visual brand signature styling) */}
        <div className="absolute top-[10vh] -left-[10vw] w-[45vw] h-[45vw] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="absolute top-[80vh] -right-[10vw] w-[50vw] h-[50vw] bg-zinc-500/5 rounded-full blur-[180px] pointer-events-none z-0" />

        {/* Modular Sections */}
        <ContactHero />
        <ContactForm />
        <ContactDirectory />
        <ContactFAQ />
      </main>
      <Footer />
    </>
  );
}
