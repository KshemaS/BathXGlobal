"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Import required image assets
import locMilan from "@/app/assets/images/pexels-artbovich-7587484.jpg";
import locLondon from "@/app/assets/images/pexels-artbovich-7227647.jpg";
import locNY from "@/app/assets/images/pexels-artbovich-6908370.jpg";
import locDubai from "@/app/assets/images/new-modern-steel.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const showrooms = [
  {
    city: "Milano",
    country: "Italy",
    address: "Via Montenapoleone, 8, 20121 Milano",
    phone: "+39 02 1234567",
    image: locMilan,
    coords: "45.4682° N, 9.1952° E",
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "24 Chelsea Harbour, London SW10 0XE",
    phone: "+44 20 7352 1234",
    image: locLondon,
    coords: "51.4770° N, 0.1804° W",
  },
  {
    city: "New York",
    country: "United States",
    address: "152 Mercer St, New York, NY 10012",
    phone: "+1 212 555 0199",
    image: locNY,
    coords: "40.7251° N, 73.9997° W",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    address: "Boutique 4, Design District, Dubai",
    phone: "+971 4 456 7890",
    image: locDubai,
    coords: "25.1843° N, 55.2996° E",
  },
];

export default function AboutShowrooms() {
  const [selectedShowroom, setSelectedShowroom] = useState(0);

  return (
    <section className="relative py-[60px] lg:py-[80px] 2xl:py-[120px] px-6 md:px-16 lg:px-24 4xl:px-0 max-w-[1600px] mx-auto z-10">
      
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 max-w-[1600px] mx-auto gap-6">
        <div>
          <span className="text-[12px] tracking-[0.3em] font-medium text-amber-500 uppercase block mb-3 font-mono">
            04 // EXPERIENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Global Showrooms
          </h2>
        </div>
        <p className="text-zinc-400 font-light text-[14px] xl:text-[16px] leading-relaxed tracking-wide max-w-lg">
          Experience the tactile finishes and fluid water choreographies of our collections first-hand inside our architectural spaces.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch max-w-[1600px] mx-auto">
        
        {/* LEFT COLUMN: THE INTERACTIVE CANVAS (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="relative w-full aspect-[16/10] rounded-sm overflow-hidden border border-zinc-900 bg-zinc-950 shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedShowroom}
                initial={{ opacity: 0, scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.5, ease }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={showrooms[selectedShowroom].image}
                  fill
                  priority
                  alt={`${showrooms[selectedShowroom].city} Showroom`}
                  className="object-cover transition-all duration-[1200ms] group-hover:scale-102"
                />
                {/* Radial gold-mesh overlay and bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-black/35" />
                <div className="absolute inset-0 bg-radial-gradient(circle_at_center,transparent_30%,#09090b_90%) opacity-75" />
                {/* Showroom detail overlay at bottom */}
                <div className="absolute bottom-8 left-8 right-8 z-10 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] tracking-[0.25em] font-mono text-amber-500 uppercase">
                      {showrooms[selectedShowroom].country}
                    </span>
                    <span className="h-[1px] w-6 bg-amber-500/40" />
                    <span className="text-[10px] font-mono text-zinc-400">
                      BOUTIQUE NO. 0{selectedShowroom + 1}
                    </span>
                  </div>
                  <h3 className="text-3xl font-light text-white tracking-wide mb-4">
                    {showrooms[selectedShowroom].city}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-800/80 pt-4 mt-2">
                    <div>
                      <span className="text-[9px] font-mono tracking-wider text-zinc-500 block mb-1 uppercase">Address</span>
                      <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed">
                        {showrooms[selectedShowroom].address}
                      </p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-wider text-zinc-500 block mb-1 uppercase">Contact / Hours</span>
                      <p className="text-xs md:text-sm text-zinc-300 font-mono mb-1">
                        {showrooms[selectedShowroom].phone}
                      </p>
                      <p className="text-[11px] text-zinc-400 font-light">
                        Mon - Sat // 10:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT COLUMN: THE SELECTOR MENU (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-4">
          {showrooms.map((showroom, idx) => {
            const isSelected = idx === selectedShowroom;
            return (
              <button
                key={showroom.city}
                onClick={() => setSelectedShowroom(idx)}
                onMouseEnter={() => setSelectedShowroom(idx)}
                className={`w-full text-left p-6 rounded-lg border transition-all duration-500 cursor-pointer flex items-center justify-between group/btn ${
                  isSelected
                    ? "bg-zinc-900/40 border-zinc-800/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] shadow-lg"
                    : "bg-transparent border-transparent hover:bg-zinc-950/15"
                }`}
              >
                <div className="flex items-center gap-6">
                  {/* Huge structural number indicator */}
                  <span className={`text-2xl font-mono tracking-widest transition-colors duration-500 ${
                    isSelected ? "text-amber-500 font-medium" : "text-zinc-600 group-hover/btn:text-zinc-400"
                  }`}>
                    0{idx + 1}
                  </span>
                  
                  <div>
                    <h4 className={`text-xl md:text-2xl font-light tracking-wide transition-all duration-500 ${
                      isSelected ? "text-white font-normal italic pl-1" : "text-zinc-400 group-hover/btn:text-zinc-200"
                    }`}>
                      {showroom.city}
                    </h4>
                    <span className="text-[10px] tracking-[0.2em] font-mono uppercase text-zinc-500 block mt-0.5">
                      {showroom.country}
                    </span>
                  </div>
                </div>

                {/* Micro-interaction interactive arrow / line */}
                <div className="flex items-center gap-3">
                  <div className={`h-[1px] bg-amber-500/40 transition-all duration-700 ${
                    isSelected ? "w-12" : "w-0 group-hover/btn:w-6"
                  }`} />
                  <ArrowUpRight className={`w-4 h-4 transition-all duration-500 ${
                    isSelected ? "text-amber-400 transform translate-x-0.5 -translate-y-0.5" : "text-zinc-700 group-hover/btn:text-zinc-400"
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
