"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Luxury images database for the mega menu slider
import img1 from "@/app/assets/images/pexels-artbovich-6316056.jpg";
import img2 from "@/app/assets/images/3d-rendering-modern-design-marble-tile-toilet-bathroom.jpg";
import img3 from "@/app/assets/images/pexels-artbovich-7587484.jpg";
import img4 from "@/app/assets/images/pexels-artbovich-7227647.jpg";

const SLIDE_IMAGES = [
  { src: img1, caption: "Architectural Wellness Spaces & Bespoke Artistry" },
  { src: img2, caption: "Monolithic Elements & Natural Carrara Marbles" },
  { src: img3, caption: "Precision Stuttgart Engineering & Luxury PVD Finishes" },
  { src: img4, caption: "Refining the Daily Choreography of Luxury Living" },
];

type MegaMenuSliderProps = {
  isOpen: boolean;
};

export default function MegaMenuSlider({ isOpen }: MegaMenuSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-fading slider intervals (cycles every 4 seconds only when menu is active)
  useEffect(() => {
    if (!isOpen) {
      setCurrentSlide(0);
      return;
    }
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm border border-zinc-900 bg-zinc-950/40 shadow-2xl group/img">
      {/* Floating Gold Border */}
      <div className="absolute inset-0 border border-amber-500/30 translate-x-3 translate-y-3 rounded-sm transition-transform duration-700 group-hover/img:translate-x-1.5 group-hover/img:translate-y-1.5 pointer-events-none z-0" />
      
      <div className="relative w-full h-full overflow-hidden rounded-sm z-10 bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={SLIDE_IMAGES[currentSlide].src}
              fill
              alt="BathX Luxury Wellness Sanctuary"
              className="object-cover brightness-[0.9]"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Soft, reduced-opacity backdrop to make the caption perfectly legible while keeping the image bright */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none" />
        
        {/* Floating Slide Caption details */}
        <div className="absolute bottom-8 left-8 right-8 z-20 text-left">
          <span className="text-[10px] font-mono tracking-[0.3em] text-amber-500 uppercase block mb-1.5 font-semibold">
            BathX Atelier
          </span>
          <div className="h-6 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm text-zinc-300 font-light tracking-wider leading-relaxed absolute"
              >
                {SLIDE_IMAGES[currentSlide].caption}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
