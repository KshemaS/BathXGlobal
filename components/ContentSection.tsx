"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useContext, useEffect, useState, useRef } from "react";

import { FpsContext } from "@/lib/FpsContext";
import CollectionsSlider from "@/components/CollectionsSlider";
import heroImage from "../app/assets/images/collection-hero.png";

const SCROLL_RANGE = 2500;
const ease = [0.22, 1, 0.36, 1] as const;

export default function ContentSection() {
  const { registerInnerScroll, unregisterInnerScroll, prevIndex } =
    useContext(FpsContext);

  const progress = useMotionValue(prevIndex > 3 ? 1 : 0);

  // Smooth out scroll step progress with spring physics for fluid, organic movement
  const smoothProgress = useSpring(progress, {
    stiffness: 70,   // Responsive yet smooth
    damping: 24,     // Prevents bouncy behavior but allows smooth deceleration
    restDelta: 0.001
  });

  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderIndexRef = useRef(0);
  sliderIndexRef.current = sliderIndex;
  const accumulatedDeltaRef = useRef(0);
  const exitDelayRef = useRef(0);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    setMounted(true);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // IMAGE SPLIT: 0% to 50% scroll splits panels vertically (making it slower and more gradual)
  const topY = useTransform(smoothProgress, [0, 0.5], ["0%", "-100%"]);
  const bottomY = useTransform(smoothProgress, [0, 0.5], ["0%", "100%"]);

  // TITLE TRANSFORMS
  // Title fades in immediately as split begins (progress 0% to 35%)
  const titleOpacity = useTransform(smoothProgress, [0, 0.35], [0, 1]);
  const titleScale = useTransform(smoothProgress, [0, 0.35], [0.94, 1]);

  // Title is centered initially (shifted right by 30vw in standard flex) and moves slowly to the left column (0% shift)
  const titleX = useTransform(
    smoothProgress,
    [0.45, 0.85],
    isDesktop ? ["30vw", "0vw"] : ["0vw", "0vw"]
  );

  // SLIDER TRANSFORMS: slider fades and slides in from the right after title is shown and starts moving
  const sliderOpacity = useTransform(smoothProgress, [0.62, 0.85], [0, 1]);
  const sliderX = useTransform(
    smoothProgress,
    [0.62, 0.85],
    isDesktop ? ["100px", "0px"] : ["0px", "0px"]
  );
  const sliderY = useTransform(
    smoothProgress,
    [0.62, 0.85],
    isDesktop ? ["0px", "0px"] : ["80px", "0px"] // slides up from bottom on mobile
  );
  const sliderScale = useTransform(smoothProgress, [0.62, 0.85], [0.98, 1]);

  useEffect(() => {
    if (!isDesktop) return; // Disable inner scroll on mobile and tablet

    registerInnerScroll((delta: number) => {
      const cur = progress.get();
      const smooth = smoothProgress.get();

      // Scrolling Down
      if (delta > 0) {
        // Stage 1: Splitting image
        if (cur < 1) {
          progress.set(Math.min(1, cur + delta / SCROLL_RANGE));
          return true;
        }

        // Stage 2: Advancing Collections Slider step-by-step
        if (cur >= 1 && smooth >= 0.995) {
          const maxIndex = 6 - 2; // total collections (6) - slidesToShow (2) = 4
          const currentIndex = sliderIndexRef.current;

          if (currentIndex < maxIndex) {
            exitDelayRef.current = 0; // Reset exit delay while moving between slides
            accumulatedDeltaRef.current += delta;
            if (accumulatedDeltaRef.current >= 240) { // 240px threshold to trigger slide
              setSliderIndex((prev) => {
                const next = Math.min(maxIndex, prev + 1);
                sliderIndexRef.current = next;
                return next;
              });
              accumulatedDeltaRef.current = 0;
            }
            return true;
          }

          // Stage 2.5: Exit delay buffer (stay on the last slide)
          exitDelayRef.current += delta;
          if (exitDelayRef.current < 600) { // 600px of scroll delay threshold
            return true;
          }

          // Stage 3: Slide to next section
          return false;
        }
      }
      // Scrolling Up
      else {
        // Stage 1: Regressing Collections Slider step-by-step
        if (cur >= 1 && smooth >= 0.995) {
          const currentIndex = sliderIndexRef.current;

          // Reset exit delay on scroll up to keep direction changes instant
          exitDelayRef.current = 0;

          if (currentIndex > 0) {
            accumulatedDeltaRef.current += delta;
            if (accumulatedDeltaRef.current <= -240) { // -240px threshold to trigger slide
              setSliderIndex((prev) => {
                const next = Math.max(0, prev - 1);
                sliderIndexRef.current = next;
                return next;
              });
              accumulatedDeltaRef.current = 0;
            }
            return true;
          }
        }

        // Stage 2: Closing image split
        if (cur > 0) {
          progress.set(Math.max(0, cur + delta / SCROLL_RANGE));
          return true;
        }

        // Stage 3: Slide to previous section
        return false;
      }

      return true;
    });

    return () => unregisterInnerScroll();
  }, [registerInnerScroll, unregisterInnerScroll, progress, smoothProgress, isDesktop]);

  const showDesktop = mounted && isDesktop;

  return (
    <section className={`relative bg-black ${showDesktop ? "h-[260vh]" : "h-screen"}`}>
      <div className={showDesktop ? "sticky top-0 h-screen overflow-hidden" : "relative h-full w-full"}>

        {/* BACKGROUND CONTENT */}
        <div className={showDesktop ? "absolute inset-0 bg-black flex items-center" : "relative h-full w-full flex items-center"}>

          {/* HORIZONTAL FLEX ROW: Title on Left, Slider on Right (via standard lg:flex-row) */}
          <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 z-20 pointer-events-none">

            {/* COLUMN: TITLE (Left side on desktop) */}
            <motion.div
              style={
                showDesktop
                  ? {
                      opacity: titleOpacity,
                      scale: titleScale,
                      x: titleX,
                    }
                  : {
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }
              }
              className="w-full lg:w-[32%] flex flex-col items-center lg:items-start text-center lg:text-left select-none pointer-events-auto shrink-0 z-30"
            >
              <h2 className="text-4xl md:text-5xl lg:text-[60px] 3xl:text-[80px] font-medium text-white mb-6 leading-tight tracking-tight">
                Our Collections
              </h2>

              <p className="max-w-md text-zinc-400 text-sm md:text-base font-light leading-relaxed tracking-wide">
                Explore our curated range of luxury bath fittings and bespoke metallic fixtures.
              </p>
            </motion.div>

            {/* COLUMN: SLIDER (Right side on desktop) */}
            <motion.div
              style={
                showDesktop
                  ? {
                      opacity: sliderOpacity,
                      x: sliderX,
                      y: sliderY,
                      scale: sliderScale,
                    }
                  : {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                    }
              }
              className="w-full lg:w-[63%] pointer-events-auto z-20"
            >
              <CollectionsSlider activeSlide={sliderIndex} setActiveSlide={setSliderIndex} />
            </motion.div>

          </div>

        </div>

        {/* SPLIT IMAGE */}
        {showDesktop && (
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
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full flex flex-col items-center gap-2 text-zinc-500">
                <motion.h2
                  initial={{ y: "80vh", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, ease, delay: 0.7 }}
                  className="text-[40px] md:text-[44px] lg:text-[50px] font-medium text-white leading-none tracking-normal pb-10 text-center px-6"
                >
                  Modern Serenity
                </motion.h2>
                <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
                <div className="w-px h-10 bg-linear-to-b from-zinc-500 to-transparent" />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}