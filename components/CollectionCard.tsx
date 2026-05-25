"use client";

import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CollectionCardProps {
  title: string;
  subtitle: string;
  image: string | StaticImageData;
  index?: number;
}

export default function CollectionCard({ title, subtitle, image, index = 0 }: CollectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1, // Stagger enter animations beautifully!
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ y: -8, scale: 1.015 }}
      className="relative h-[180px] md:h-[220px] rounded-2xl overflow-hidden group cursor-pointer shadow-2xl border border-white/5 bg-zinc-950"
    >
      {/* BACKGROUND IMAGE WITH PREMIUM GRAYSCALE TO COLOR TRANSITION */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover filter grayscale contrast-[1.1] brightness-[0.8] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
      />
      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition-all duration-500 group-hover:via-black/35" />

      {/* INNER FRAME HIGHLIGHT */}
      <div className="absolute inset-4 border border-white/0 rounded-xl transition-all duration-500 ease-out group-hover:border-white/10 pointer-events-none" />

      {/* TEXT & ACTION FLOATER */}
      <div className="absolute bottom-5 left-6 right-6 z-10 flex items-end justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-[0.35em] text-zinc-400 mb-1.5 font-light transition-colors duration-300 group-hover:text-zinc-200">
            {subtitle}
          </p>
          <h3 className="text-xl md:text-2xl font-medium text-white leading-tight tracking-wide">
            {title}
          </h3>
        </div>

        {/* GLOWING ACTION BUTTON */}
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white opacity-0 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-white group-hover:text-black">
          <ArrowUpRight className="w-4.5 h-4.5" />
        </div>
      </div>
    </motion.div>
  );
}
