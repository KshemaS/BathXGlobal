"use client";

import Image from "next/image";
import brandImg from "@/app/assets/images/pexels-artbovich-6316056.jpg";

export default function AboutHeritage() {
  return (
    <section className="relative py-[60px] lg:py-[80px] 2xl:py-[120px] px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* LEFT TEXT CONTENT - Structured with gold indicator lines */}
        <div className="lg:col-span-6 flex flex-col justify-center relative">
          <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-500/40 via-transparent to-transparent hidden lg:block" />
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[12px] tracking-[0.3em] font-medium text-amber-500 uppercase">
              01 // HERITAGE
            </span>
            <div className="h-[1px] w-12 bg-amber-500/35" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-10 tracking-tight leading-[1.1] font-sans">
            Sculpting the Flow of Bespoke Elegance
          </h2>

          <div className="space-y-6 text-zinc-300 font-light text-base md:text-lg leading-relaxed tracking-wide">
            <p>
              BathX was founded on an uncompromised vision: to rescue the bath space from ordinary utility and reshape it into a sensory realm of absolute luxury and design continuity. 
            </p>
            <p>
              We treat every faucet, mixing valve, and sculptural shower face as an architectural structure in miniature. To achieve this, our design labs in Milan collaborate directly with precision metallurgists in Stuttgart. The result is a perfect synergy of minimal lines and robust mechanical longevity.
            </p>
            <p className="text-zinc-100 font-normal">
              Our products are built not merely to direct the flow of water, but to choreograph a daily experience of sublime relaxation.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE FRAME - Floating Offset Premium Layout */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full aspect-[4/5] max-w-[480px] group">
            {/* Thin gold glass boundary border */}
            <div className="absolute inset-0 border border-amber-500/60 translate-x-4 translate-y-4 rounded-sm transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none z-0" />
            
            <div className="relative w-full h-full overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950 z-10">
              <Image
                src={brandImg}
                fill
                alt="Modern Minimalist Bath Suite"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 brightness-[0.85] group-hover:brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
