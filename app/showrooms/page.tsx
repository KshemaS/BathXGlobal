"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import ShowroomCard from "@/components/ShowroomCard";

// Import premium showroom image assets
import locMilan from "@/app/assets/images/pexels-artbovich-7587484.jpg";
import locLondon from "@/app/assets/images/pexels-artbovich-7227647.jpg";
import locNY from "@/app/assets/images/pexels-artbovich-6908370.jpg";
import locDubai from "@/app/assets/images/new-modern-steel.jpg";
import bgBanner from "@/app/assets/images/bathroom-background-zoom-calls.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const showroomsList = [
  {
    id: "milan",
    num: "01",
    city: "Milano",
    country: "Italy",
    address: "Via Montenapoleone, 8, 20121 Milano",
    phone: "+39 02 1234567",
    email: "milan@bathxglobal.com",
    hours: "Mon - Sat // 10:00 AM - 7:00 PM",
    coords: "45.4682° N, 9.1952° E",
    image: locMilan,
    featured: ["Milanese Atelier Series", "Monolithic Nero Vanity Suite", "Brushed Gold Deck Mixers"],
    tagline: "The heart of Italian craftsmanship. Located in the fashion district, displaying bespoke brassworks and sculptured coordinates.",
  },
  {
    id: "london",
    num: "02",
    city: "London",
    country: "United Kingdom",
    address: "24 Chelsea Harbour, London SW10 0XE",
    phone: "+44 20 7352 1234",
    email: "london@bathxglobal.com",
    hours: "Mon - Sat // 10:00 AM - 7:00 PM",
    coords: "51.4770° N, 0.1804° W",
    image: locLondon,
    featured: ["Thermostatic Smart Mixer Systems", "Oxygenated Eco-Streams", "Gunmetal Tapware"],
    tagline: "Chelsea's premium water gallery. Highlighting precision thermo controls and sustainable ecological coordinates.",
  },
  {
    id: "new-york",
    num: "03",
    city: "New York",
    country: "United States",
    address: "152 Mercer St, New York, NY 10012",
    phone: "+1 212 555 0199",
    email: "ny@bathxglobal.com",
    hours: "Mon - Sat // 10:00 AM - 7:00 PM",
    coords: "40.7251° N, 73.9997° W",
    image: locNY,
    featured: ["Custom Finish Atelier Panels", "Minimalist Wall Spouts", "Freestanding Monoliths"],
    tagline: "Soho's tactile showroom. Curated industrial lofts displaying custom metallic coordinate sets and stone freestanding baths.",
  },
  {
    id: "dubai",
    num: "04",
    city: "Dubai",
    country: "United Arab Emirates",
    address: "Boutique 4, Design District, Dubai",
    phone: "+971 4 456 7890",
    email: "dubai@bathxglobal.com",
    hours: "Mon - Sat // 10:00 AM - 7:00 PM",
    coords: "25.1843° N, 55.2996° E",
    image: locDubai,
    featured: ["German Metallurgy Brassware", "Polished Steel Shower Coordinates", "Spa Suites"],
    tagline: "Tactile wellness sanctuaries. Engineering fluid choreographies first-hand inside the iconic Design District.",
  },
];

export default function ShowroomsPage() {
  return (
    <>
      <main className="bg-black text-white select-none overflow-x-hidden relative min-h-screen font-sans">
      
        {/* HERO HEADER */}
        <section className="relative w-full h-[70vh] min-h-[500px] flex items-end overflow-hidden z-10 select-none">
          <div className="absolute inset-0 z-0">
            <Image
              src={bgBanner}
              alt="Exclusive Display Centers"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70 z-10" />
          </div>

          <div className="relative w-full max-w-[1600px] mx-auto px-[16px] md:px-16 lg:px-24 4xl:px-0 pb-20 z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease }}
              className="max-w-3xl"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 mb-4 block font-semibold font-mono">
                Exclusive Display Centers
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[84px] font-light tracking-tight leading-none text-white">
                Global Ateliers
              </h1>
              <p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed tracking-wide mt-6 max-w-2xl">
                Explore our meticulously curated showrooms. Each space alternates tactile stone coordinates and active custom fittings under custom-designed architectural gallery lighting.
              </p>
            </motion.div>
          </div>
        </section>

        {/* EDITORIAL ALTERNATING SHOWROOMS SHOWCASE */}
        <section className="relative px-[16px] md:px-16 lg:px-24 4xl:px-0 pt-20 lg:pt-32 max-w-[1600px] mx-auto z-10 flex flex-col gap-5 lg:gap-36">
          {showroomsList.map((boutique, index) => (
            <ShowroomCard
              key={boutique.id}
              boutique={boutique}
              index={index}
            />
          ))}
        </section>


        {/* PRIVATE ATELIER SCHEDULING PORTAL */}
        <section 
          className="relative px-[16px] md:px-16 lg:px-24 4xl:px-0 pt-10 pb-24 lg:pb-36 bg-zinc-950/20 z-10 overflow-hidden"
        >
          {/* Subtle gold glow behind the CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-medium font-mono mb-4 block">
              Private Atelier Scheduling
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight max-w-2xl">
              Begin Your Bespoke Journey
            </h2>
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide max-w-xl mx-auto mt-6">
              Arrange a closed-door consultation session with our design advisors at your preferred boutique location or inquire about bespoke coordination options.
            </p>
            
            <div className="mt-10">
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-3 px-8 py-4.5 rounded-full bg-white text-black hover:bg-zinc-100 transition-all duration-300 font-semibold text-xs xl:text-sm tracking-[0.2em] uppercase shadow-2xl cursor-pointer"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
