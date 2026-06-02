"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroBg from "@/app/assets/images/pexels-artbovich-7167075.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          fill
          priority
          alt="Luxury Bath Fitting Close-up"
          className="object-cover object-center brightness-60 scale-105"
        />
      </div>

      <div className="relative z-10 text-center px-[16px] max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Thin animated line accent */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1.5, ease }}
          className="h-[1px] bg-amber-500/80 mb-8"
        />

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.2, ease }}
          className="text-[10px] md:text-[12px] uppercase text-white font-light mb-6 tracking-[0.5em] block leading-[26px] md:leading-none"
        >
          ESTABLISHED IN 2012 // THE ART OF WATER
        </motion.p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-normal text-white mb-10 leading-none">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease }}
            className="inline-block"
          >
            REDEFINING
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease }}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-amber-200/90 to-zinc-400 font-normal"
          >
            WELLNESS
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease }}
          className="text-zinc-300 max-w-3xl mx-auto text-base md:text-lg lg:text-xl font-light leading-relaxed tracking-wide mb-12"
        >
          BathX stands at the intersection of architectural precision, Italian designer heritage, and pioneering ecological mindfulness. We create water environments that transcend utility to nurture the human spirit.
        </motion.p>

        {/* Premium magnetic-feel scroll prompt */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease }}
          className="flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight * 0.95,
              behavior: "smooth",
            });
          }}
        >
          <div className="w-9 h-14 rounded-full border border-white flex items-start justify-center p-2 group-hover:border-white transition-colors duration-500">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
