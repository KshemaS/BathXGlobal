"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, MoveUpRight, Clock, Calendar } from "lucide-react";
import Footer from "@/components/Footer";

// Import premium curated local assets
import img1 from "@/app/assets/images/pexels-artbovich-6908370.jpg";
import img2 from "@/app/assets/images/pexels-artbovich-7587484.jpg";
import img3 from "@/app/assets/images/pexels-artbovich-7227647.jpg";
import img4 from "@/app/assets/images/pexels-artbovich-6316056.jpg";
import img5 from "@/app/assets/images/3d-rendering-modern-design-marble-tile-toilet-bathroom.jpg";

// Curated lux editorial blog dataset
const ALL_POSTS = [
  {
    id: 1,
    title: "The Art of Minimalist Bath Space Design",
    category: "DESIGN",
    date: "OCTOBER 12, 2025",
    readTime: "5 MIN READ",
    image: img1,
    excerpt: "Exploring the silent power of negative space, concealed layouts, and monolithic blocks in standard master bathroom architecture.",
  },
  {
    id: 2,
    title: "Selecting the Perfect Matt Black Finish",
    category: "MATERIALS",
    date: "NOVEMBER 08, 2025",
    readTime: "4 MIN READ",
    image: img2,
    excerpt: "A deep dive into high-durability electroplated finishes, matching copper alloy substrates, and structural fingerprint prevention.",
  },
  {
    id: 3,
    title: "Integrating Smart Faucets in Modern Homes",
    category: "TECHNOLOGY",
    date: "DECEMBER 15, 2025",
    readTime: "6 MIN READ",
    image: img3,
    excerpt: "Understanding sensor-activated water regulation, temperature presets, and zero-touch hygiene inside high-end custom residences.",
  },
  {
    id: 4,
    title: "The Calm of Spa-Inspired Bathroom Suites",
    category: "WELLNESS",
    date: "JANUARY 22, 2026",
    readTime: "7 MIN READ",
    image: img4,
    excerpt: "Crafting sensory wellness pathways using thermostatic rainfall showers, visual lighting syncs, and custom aromatic diffusers.",
  },
  {
    id: 5,
    title: "Terrazzo & Marble: A Timeless Material Match",
    category: "MINIMALISM",
    date: "FEBRUARY 18, 2026",
    readTime: "5 MIN READ",
    image: img5,
    excerpt: "Combining classical Carrara stone slabs with rich Italian aggregate terrazzo floors to forge texturally satisfying design layouts.",
  },
  {
    id: 6,
    title: "Choreographing Water: Flow and Sound Dynamics",
    category: "DESIGN",
    date: "MARCH 05, 2026",
    readTime: "6 MIN READ",
    image: img1,
    excerpt: "How laminar flow designs and aeration processes modify acoustic frequencies to transform standard running water into melodic peace.",
  },
  {
    id: 7,
    title: "Brassware Craftsmanship: Inside Our Milan Atelier",
    category: "CRAFTSMANSHIP",
    date: "APRIL 02, 2026",
    readTime: "8 MIN READ",
    image: img2,
    excerpt: "Following the tactile journey of raw solid brass ingots turned into highly polished masterpieces by our generational Italian artisans.",
  },
  {
    id: 8,
    title: "Designing Compact Luxury: Small Space Architecture",
    category: "ARCHITECTURE",
    date: "MAY 10, 2026",
    readTime: "5 MIN READ",
    image: img3,
    excerpt: "Smart structural hacks, floating vanities, and built-in mirror cabinets that optimize layout depth without losing an ounce of status.",
  },
  {
    id: 9,
    title: "Ecological Aesthetics: Sustainable Sanitary Systems",
    category: "ECOLOGY",
    date: "MAY 25, 2026",
    readTime: "4 MIN READ",
    image: img4,
    excerpt: "Integrating high-efficiency low-flow aerators and greywater recycle setups without compromising custom water pressure feels.",
  },
];

const POSTS_PER_PAGE = 6;
const ease = [0.16, 1, 0.3, 1] as const;

export default function BlogListingPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Scroll smoothly to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const totalPages = Math.ceil(ALL_POSTS.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = ALL_POSTS.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <>
      <main className="bg-black text-white select-none overflow-x-hidden relative min-h-screen font-sans">
        
        {/* GOLD/METALLIC MESH GLOW ACCENTS (Visual brand signature styling) */}
        <div className="absolute top-[10vh] -left-[10vw] w-[45vw] h-[45vw] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="absolute top-[80vh] -right-[10vw] w-[50vw] h-[50vw] bg-zinc-500/5 rounded-full blur-[180px] pointer-events-none z-0" />
        {/* HERO SECTION WITH BACKGROUND IMAGE */}
        <section className="relative w-full h-[60vh] min-h-[480px] flex items-end overflow-hidden z-10 select-none">
          {/* Background Image with elegant darkness brightness-[0.3] */}
          <div className="absolute inset-0 z-0">
            <Image
              src={img5}
              alt="Editorial Banner"
              fill
              priority
              className="object-cover"
            />
            {/* Cinematic Gradients for premium blending and text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/60 z-10" />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>

          {/* CONTENT INNER WRAPPER */}
          <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pb-16 z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease }}
              className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
            >
              <div className="max-w-2xl">
                <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-300 mb-4 block font-medium">
                  Insights & Inspirations
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-[76px] font-medium tracking-tight leading-none text-white">
                  The Editorial
                </h1>
                <p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed tracking-wide mt-6 max-w-lg">
                  Curating timeless architectural concepts, spatial wellness designs, material innovations, and the deep aesthetics of minimal water systems.
                </p>
              </div>
              
              <div className="text-[11px] uppercase tracking-[0.25em] text-zinc-300 font-medium shrink-0 bg-black/50 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 shadow-lg">
                Showing {startIndex + 1} - {Math.min(startIndex + POSTS_PER_PAGE, ALL_POSTS.length)} of {ALL_POSTS.length} Articles
              </div>
            </motion.div>
          </div>
        </section>

        {/* BLOG POSTS GRID SECTION */}
        <section className="relative px-6 md:px-16 lg:px-24 pt-20 lg:pt-28 pb-20 max-w-[1440px] mx-auto z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16"
            >
              {paginatedPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease }}
                  className="flex flex-col group cursor-pointer"
                >
                  {/* Aspect ratio frame containing image with hover effect */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      priority={idx < 3}
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-103 brightness-[0.85] group-hover:brightness-[0.95]"
                    />
                    
                    {/* Corner category pill tag */}
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-[0.25em] font-medium text-white shadow-md">
                      {post.category}
                    </div>

                    {/* Gradient bottom vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  {/* Meta stats element */}
                  <div className="flex items-center gap-6 mt-6 mb-3 text-[11px] uppercase tracking-[0.15em] text-zinc-500 font-light">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-zinc-600" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Post Title */}
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-wide leading-snug group-hover:text-zinc-200 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt copy text */}
                  <p className="text-zinc-400 font-light text-sm leading-relaxed tracking-wide line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Read Article Trigger link */}
                  <div className="mt-auto flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] font-light text-zinc-300 group-hover:text-white transition-colors duration-300">
                    <span>Read Article</span>
                    <MoveUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* PAGINATION SECTION */}
        <section className="relative px-6 md:px-16 lg:px-24 pb-28 max-w-[1440px] mx-auto z-10 border-t border-white/5 pt-12">
          <div className="flex items-center justify-between">
            
            {/* Previous Page Trigger */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] font-light text-zinc-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 shadow-md active:scale-98 cursor-pointer ${
                currentPage === 1 ? "opacity-30 pointer-events-none" : ""
              }`}
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            {/* Numerical Index Indicators */}
            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-xs font-light tracking-widest transition-all duration-300 cursor-pointer ${
                    currentPage === page
                      ? "bg-white text-black font-semibold border border-white"
                      : "text-zinc-400 hover:text-white bg-white/5 border border-white/0 hover:border-white/10"
                  }`}
                  aria-label={`Page ${page}`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Page Trigger */}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] font-light text-zinc-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 shadow-md active:scale-98 cursor-pointer ${
                currentPage === totalPages ? "opacity-30 pointer-events-none" : ""
              }`}
              aria-label="Next Page"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
