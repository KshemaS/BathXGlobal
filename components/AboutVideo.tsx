"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import coverImg from "@/app/assets/images/cover_img.png";

const ease = [0.16, 1, 0.3, 1] as const;
const youtubeEmbedUrl = "https://www.youtube.com/embed/XWyNyH5AZt0?autoplay=1&rel=0&modestbranding=1";

export default function AboutVideo() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      {/* CINEMATIC VIDEO DISPLAY - Luxury Framed theater box layout */}
      <section className="relative py-[60px] lg:py-[80px] 2xl:py-[120px] px-[16px] md:px-16 lg:px-24 4xl:px-0 max-w-[1600px] mx-auto z-10">
        
        <div className="flex justify-between items-end mb-10 max-w-[1600px] mx-auto">
          <div>
            <span className="text-[12px] tracking-[0.3em] font-medium text-amber-500 uppercase block mb-3">
              03 // NARRATIVE
            </span>
            <h2 className="text-3xl md:text-4xl xl:text-[60px] font-light text-white tracking-tight">
              The Architecture of Water
            </h2>
          </div>
        </div>

        <div className="relative w-full max-w-[1600px] h-[600px] mx-auto aspect-video rounded-md overflow-hidden bg-zinc-950/40 shadow-2xl group">
          
          <div className="relative w-full h-[600px] overflow-hidden rounded-sm">
            <Image
              src={coverImg}
              fill
              priority
              alt="The Architecture of Water Documentary Cover"
              className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
            />

            {/* Centered play trigger */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                onClick={() => setIsVideoModalOpen(true)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="w-24 h-24 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500 shadow-2xl cursor-pointer relative z-10 group/btn"
                aria-label="Play Brand Story Video"
              >
                <Play className="w-7 h-7 fill-current ml-1 transition-transform duration-300 group-hover/btn:scale-110" />
                
                {/* Concentric Water Ripple Effects */}
                <span className="absolute inset-0 rounded-full bg-white/10 animate-ping [animation-duration:3s] pointer-events-none z-0" />
                <span className="absolute inset-[-12px] rounded-full border border-white/20 animate-ping [animation-duration:2.5s] [animation-delay:0.5s] pointer-events-none z-0" />
                <span className="absolute inset-[-24px] rounded-full border border-white/10 animate-ping [animation-duration:4s] [animation-delay:1s] pointer-events-none z-0" />
              </motion.button>
            </div>
          </div>

        </div>
      </section>

      {/* FULLSCREEN VIDEO MODAL - Theater dark aesthetic */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 px-4 backdrop-blur-xl"
          >
            {/* Modal Close Handler on Background Click */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setIsVideoModalOpen(false)} />

            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-8 right-8 w-14 h-14 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 z-10 cursor-pointer"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-md overflow-hidden border border-zinc-800/60 shadow-[0_0_80px_rgba(197,168,128,0.06)] z-10"
            >
              <iframe
                src={youtubeEmbedUrl}
                title="BathX Brand Story Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
