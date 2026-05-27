"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Import required image assets
import locLondon from "@/app/assets/images/pexels-artbovich-7227647.jpg";
import locMilan from "@/app/assets/images/pexels-artbovich-7587484.jpg";
import locDubai from "@/app/assets/images/new-modern-steel.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const pillars = [
  {
    num: "01",
    tag: "Architectural Integrity",
    title: "Design Excellence",
    description: "We translate fluid mechanics into sculptural beauty. Collaborating with leading Milanese ateliers, we shape premium metals into smooth geometric flows, prioritizing concealed details and ergonomic tactile control.",
    details: ["Tactile Geometry", "Concealed Hardware"],
    image: locLondon,
  },
  {
    num: "02",
    tag: "German Metallurgy",
    title: "Precision Engineering",
    description: "Every fixture is engineered around advanced solid brass cores and high-precision thermostatic cartridge systems. This Stuttgart-bred core maintains exact temperature control and faultless water delivery for a lifetime.",
    details: ["Constant Temp", "Solid Brass Core"],
    image: locDubai,
  },
  {
    num: "03",
    tag: "Sustainable Volumetrics",
    title: "Ecological Stewardship",
    description: "We sculpt water responsibly. Our patented oxygenated eco-flow aerators reduce water flow by 40% while preserving a voluminous, high-pressure, soft feel. Design and ecology unified.",
    details: ["40% Flow Reduction", "Oxygenated Streams"],
    image: locMilan,
  },
];

export default function AboutPillars() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressStartTimeRef = useRef(Date.now());

  // Custom autoplay progress timer using requestAnimationFrame for buttery smooth, continuous growth
  useEffect(() => {
    let animationFrameId: number;
    const duration = 6000; // 6 seconds duration per slide

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - progressStartTimeRef.current;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);

      if (elapsed >= duration) {
        setActiveSlide((prev) => (prev + 1) % pillars.length);
        progressStartTimeRef.current = now; // reset start time for next slide loop
        setProgress(0);
      }

      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="bg-zinc-950/30 py-[60px] lg:py-[80px] 2xl:py-[120px] border-y border-zinc-900/60 relative z-10 backdrop-blur-md w-full">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 w-full flex flex-col items-center">

        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-3 mb-3">
            <span className="text-[12px] tracking-[0.3em] font-medium text-amber-500 uppercase">
              02 // PHILOSOPHY
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl xl:text-[60px] font-light text-white mb-4 tracking-tight">
            Our Core Pillars
          </h2>
          <p className="text-[14px] md:text-base text-zinc-300 font-light italic leading-relaxed tracking-wide max-w-xl mx-auto">
            &ldquo;Water is nature&apos;s ultimate masterpiece. We build the instruments that do it justice.&rdquo;
          </p>
        </div>

        {/* Horizontal Slide Indicators */}
        <div className="flex justify-center gap-6 md:gap-12 w-full max-w-4xl mb-16 pb-4">
          {pillars?.map((p, idx) => {
            const isActive = idx === activeSlide;
            return (
              <button
                key={p.num}
                onClick={() => {
                  setActiveSlide(idx);
                  setProgress(0);
                  progressStartTimeRef.current = Date.now();
                }}
                className="flex flex-col items-start gap-2 text-left cursor-pointer group focus:outline-none"
              >
                <span className="text-[16px] font-mono tracking-widest text-zinc-500">
                  {p.num}
                </span>
                <span className={`text-[16px] md:text-[20px] font-normal tracking-wide transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"}`}>
                  {p.title}
                </span>

                {/* Premium progress bar loader indicator */}
                <div className="w-28 md:w-46 h-[2px] bg-zinc-900 relative overflow-hidden rounded-full mt-1">
                  {isActive && (
                    <div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-amber-500 to-amber-400"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Slide Card Panel */}
        <div className="relative w-full max-w-[1600px] h-auto min-h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease }}
              className="w-full h-auto md:h-[520px] bg-zinc-950 border border-zinc-900 rounded-2xl p-8 md:p-14 overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-16 shadow-sm"
            >
              {/* Outlined Background Number */}
              <div className="absolute right-10 bottom-6 text-[10rem] font-bold text-zinc-900/25 pointer-events-none select-none">
                {pillars[activeSlide].num}
              </div>

              <div className="flex-1 z-10 text-left">
                <span className="text-[12px] font-mono tracking-[0.3em] text-amber-500 block mb-4 uppercase">
                  {pillars[activeSlide].tag}
                </span>
                <h3 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-wide">
                  {pillars[activeSlide].title}
                </h3>
                <p className="text-base text-zinc-300 font-light leading-relaxed tracking-wide mb-6">
                  {pillars[activeSlide].description}
                </p>
                <div className="flex items-center gap-4 text-xs text-zinc-400 font-light uppercase tracking-widest border-t border-zinc-900/80 pt-6">
                  {pillars[activeSlide].details.map((detail, idx) => (
                    <div key={detail} className="flex items-center gap-4">
                      <span>{detail}</span>
                      {idx < pillars[activeSlide].details.length - 1 && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-[400px] aspect-[4/3] md:aspect-square relative overflow-hidden rounded-lg border border-zinc-900 shadow-md shrink-0 group">
                <Image
                  src={pillars[activeSlide].image}
                  fill
                  alt={`${pillars[activeSlide].title} Close-up`}
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105 brightness-[0.8]"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:opacity-0 transition-opacity duration-700" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
