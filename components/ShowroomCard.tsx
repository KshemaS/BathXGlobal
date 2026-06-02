"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight, Compass } from "lucide-react";

interface ShowroomCardProps {
  boutique: {
    id: string;
    num: string;
    city: string;
    country: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    coords: string;
    image: StaticImageData;
    featured: string[];
    tagline: string;
  };
  index: number;
  onBookingClick: (cityName: string) => void;
}

export default function ShowroomCard({ boutique, index, onBookingClick }: ShowroomCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-b border-white/5 pb-20 lg:pb-32"
    >
      
      {/* PHOTO CONTAINER (7 Columns) */}
      <div 
        className={`lg:col-span-7 w-full overflow-hidden ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-900 bg-zinc-950 shadow-2xl group">
          <Image
            src={boutique.image}
            fill
            alt={`${boutique.city} Flagroom`}
            className="object-cover transition-transform duration-[2000ms] group-hover:scale-103 brightness-[0.8]"
          />
          
          {/* Outline boutique coordinates */}
          <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-zinc-300 font-mono tracking-widest flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
            <span>{boutique.coords}</span>
          </div>
        </div>
      </div>

      {/* DETAILS CONTAINER (5 Columns) */}
      <div 
        className={`lg:col-span-5 flex flex-col gap-6 lg:gap-8 ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        
        {/* Title & Outline numbers */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-mono tracking-widest text-amber-500 font-semibold uppercase">
              ATELIER NO. {boutique.num}
            </span>
            <span className="h-[1px] w-6 bg-amber-500/40" />
            <span className="text-[12px] tracking-[0.2em] uppercase text-zinc-500">
              {boutique.country}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide font-serif">
            {boutique.city}
          </h2>
        </div>

        <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide">
          {boutique.tagline}
        </p>

        <div className="h-px bg-white/5" />

        {/* Operational Details */}
        <div className="flex flex-col gap-3.5">
          <div className="flex items-start gap-3">
            <MapPin className="w-4.5 h-4.5 text-zinc-500 mt-0.5 shrink-0" />
            <span className="text-xs md:text-sm text-zinc-300 font-light">{boutique.address}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4.5 h-4.5 text-zinc-500 shrink-0" />
            <span className="text-xs md:text-sm text-zinc-300 font-mono">{boutique.phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4.5 h-4.5 text-zinc-500 shrink-0" />
            <span className="text-xs md:text-sm text-zinc-300 font-light">{boutique.hours}</span>
          </div>
        </div>

        <div className="h-px bg-white/5" />

        {/* Highlights */}
        <div>
          <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold block mb-3 font-mono">
            Exhibited Coordinates:
          </span>
          <div className="flex flex-wrap gap-2">
            {boutique.featured.map((item, idx) => (
              <span 
                key={idx} 
                className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-300 uppercase tracking-wider font-light"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

    </motion.div>
  );
}
