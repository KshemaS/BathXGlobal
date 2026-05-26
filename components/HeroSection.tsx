// components/HeroSection.tsx

"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* VIDEO */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/bg-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-10">
        <motion.h1
          initial={{ y: "100px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease,
          }}
          className="
            text-white
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-medium
            tracking-tight
            pb-12
          "
        >
          The Luxury of Space
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-300">
            Scroll
          </span>

          <div className="h-14 w-px bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
