"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import bgShowroom from "@/app/assets/images/pexels-artbovich-8089093.jpg";

export default function StoreShowcase() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black select-none">
      {/* FULLSCREEN BACKGROUND PHOTOGRAPHY */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={bgShowroom}
          alt="Bath-x Flagship Showroom"
          fill
          priority
          className="object-cover object-center transition-transform duration-[4000ms] ease-out scale-102 hover:scale-105"
        />
        {/* PREMIUM GRADIENT OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/35 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-transparent to-transparent z-10 hidden md:block" />
      </div>

      {/* FLOATING GLASSMORPHIC INFO CARD */}
      <div className="absolute bottom-20 md:bottom-24 left-6 md:left-20 right-6 md:right-auto z-20 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 md:p-10 rounded-3xl bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-5 md:gap-6"
        >
          <div>
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-zinc-300 mb-2.5 font-light">
              Experience Bath-x
            </p>
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-wide leading-tight">
              Our Flagship Store
            </h2>
            <p className="mt-3.5 text-zinc-400 text-sm tracking-wide leading-relaxed font-light">
              Immerse yourself in our world of crafted elegance and architectural luxury bath fittings. Experience the tactility of metals, stones, and waterscapes firsthand.
            </p>
          </div>

          {/* CTA BUTTON */}
          <div>
            <Link 
              href="/showrooms" 
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-black hover:bg-zinc-100 transition-all duration-300 font-medium text-xs tracking-wider uppercase shadow-xl cursor-pointer"
            >
              Explore Showroom
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
