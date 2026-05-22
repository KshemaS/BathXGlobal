"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useContext, useEffect } from "react";
import { FpsContext } from "@/lib/FpsContext";

const SCROLL_RANGE = 1800;

export default function ContentSection() {
  const { registerInnerScroll, unregisterInnerScroll } = useContext(FpsContext);
  const progress = useMotionValue(0);

  const leftX  = useTransform(progress, [0, 1], ["0%", "-100%"]);
  const rightX = useTransform(progress, [0, 1], ["0%",  "100%"]);
  const opacity = useTransform(progress, [0, 0.3], [1, 0]);

  useEffect(() => {
    registerInnerScroll((delta: number) => {
      const cur  = progress.get();
      if (cur >= 1 && delta > 0) return false;
      if (cur <= 0 && delta < 0) return false;
      progress.set(Math.min(1, Math.max(0, cur + delta / SCROLL_RANGE)));
      return true;
    });
    return () => unregisterInnerScroll();
  }, [registerInnerScroll, unregisterInnerScroll, progress]);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* LEFT PANEL */}
      <motion.div
        style={{ x: leftX }}
        className="absolute left-0 top-0 h-full w-1/2 overflow-hidden"
      >
        <div className="h-full w-full bg-zinc-950 flex items-center justify-end pr-10">
          <motion.h2
            style={{ opacity }}
            className="text-white text-5xl md:text-7xl font-medium text-right"
          >
            Architecture
          </motion.h2>
        </div>
      </motion.div>

      {/* RIGHT PANEL */}
      <motion.div
        style={{ x: rightX }}
        className="absolute right-0 top-0 h-full w-1/2 overflow-hidden"
      >
        <div className="h-full w-full bg-zinc-950 flex items-center justify-start pl-10">
          <motion.h2
            style={{ opacity }}
            className="text-white text-5xl md:text-7xl font-medium"
          >
            Meets Emotion
          </motion.h2>
        </div>
      </motion.div>

      {/* REVEALED CONTENT BEHIND PANELS */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center bg-black">
        <div className="text-center px-6">
          <h2 className="text-5xl md:text-7xl font-medium text-white mb-6">
            Our Collections
          </h2>
          <p className="max-w-xl text-zinc-400 text-sm tracking-wide">
            Scroll to explore our curated range of luxury bath fittings.
          </p>
        </div>
      </div>
    </section>
  );
}
