"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useContext, useEffect } from "react";

import { FpsContext } from "@/lib/FpsContext";
import CollectionsGrid from "@/components/CollectionsGrid";
import heroImage from "../app/assets/images/collection-hero.png";

const SCROLL_RANGE = 1000;

export default function ContentSection() {
  const { registerInnerScroll, unregisterInnerScroll, prevIndex } =
    useContext(FpsContext);

  const progress = useMotionValue(prevIndex > 3 ? 1 : 0);

  // IMAGE SPLIT: 0% to 35% scroll splits panels vertically
  const topY = useTransform(progress, [0, 0.35], ["0%", "-100%"]);
  const bottomY = useTransform(progress, [0, 0.35], ["0%", "100%"]);

  // TITLE POSITION & SCALE: stays centered till 0.55, then slides up to top by 0.75
  const titleY = useTransform(
    progress,
    [0.55, 0.65],
    ["0%", "-33%"]
  );

  const titleScale = useTransform(
    progress,
    [0.55, 0.75],
    [1, 0.84]
  );

  // GRID REVEAL: triggers on the next scroll after title is fully shown (from 0.6 to 0.78)
  const sliderOpacity = useTransform(
    progress,
    [0.6, 0.78],
    [0, 1]
  );

  const sliderY = useTransform(
    progress,
    [0.6, 0.78],
    [100, 0]
  );

  useEffect(() => {
    registerInnerScroll((delta: number) => {
      const cur = progress.get();

      if (cur >= 1 && delta > 0) return false;
      if (cur <= 0 && delta < 0) return false;

      progress.set(
        Math.min(1, Math.max(0, cur + delta / SCROLL_RANGE))
      );

      return true;
    });

    return () => unregisterInnerScroll();
  }, [registerInnerScroll, unregisterInnerScroll, progress]);

  return (
    <section className="relative h-[260vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* BACKGROUND CONTENT */}
        <div className="absolute inset-0 bg-black">

          {/* TITLE */}
          <motion.div
            style={{
              y: titleY,
              scale: titleScale,
            }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pointer-events-none"
          >
            <h2 className="text-5xl md:text-7xl font-medium text-white mb-6 text-center">
              Our Collections
            </h2>

            <p className="max-w-xl text-zinc-400 text-sm tracking-wide text-center">
              Scroll to explore our curated range of luxury bath fittings.
            </p>
          </motion.div>

          {/* COLLECTIONS GRID */}
          <motion.div
            style={{
              opacity: sliderOpacity,
              y: sliderY,
            }}
            className="absolute inset-x-0 bottom-6 md:bottom-12 lg:bottom-14 z-20"
          >
            <CollectionsGrid />
          </motion.div>
        </div>

        {/* SPLIT IMAGE */}
        <div className="absolute inset-0 z-30 pointer-events-none">

          {/* TOP HALF */}
          <motion.div
            style={{
              y: topY,
              clipPath: "inset(0 0 50% 0)",
            }}
            className="absolute inset-0"
          >
            <Image
              src={heroImage}
              alt="Hero"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />
          </motion.div>

          {/* BOTTOM HALF */}
          <motion.div
            style={{
              y: bottomY,
              clipPath: "inset(50% 0 0 0)",
            }}
            className="absolute inset-0"
          >
            <Image
              src={heroImage}
              alt="Hero"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}