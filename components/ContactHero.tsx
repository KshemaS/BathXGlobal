"use client";

import React from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContactHero() {
  return (
    <section className="relative px-6 md:px-16 lg:px-24 pb-12 pt-8 max-w-[1600px] mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease }}
        className="max-w-3xl"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-4 block font-medium">
          Worldwide Presence
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-[76px] font-medium tracking-tight leading-none text-white mb-6">
          Connect With Us
        </h1>
        <p className="text-zinc-400 font-light text-base md:text-lg leading-relaxed tracking-wide">
          Whether specifying for a bespoke private residence, an architectural boutique hotel, or a major commercial project, our global specification studios are ready to assist.
        </p>
      </motion.div>
    </section>
  );
}
