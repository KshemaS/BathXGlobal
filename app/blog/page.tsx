"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MoveUpRight, Clock, Calendar } from "lucide-react";
import Footer from "@/components/Footer";

// Import custom shared dataset and banner asset
import { ALL_POSTS } from "./blogData";
import img5 from "@/app/assets/images/3d-rendering-modern-design-marble-tile-toilet-bathroom.jpg";

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
        <section className="relative w-full h-[60vh] min-h-[480px] flex items-end overflow-hidden z-10 select-none">
          <div className="absolute inset-0 z-0">
            <Image
              src={img5}
              alt="Editorial Banner"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/50 z-10" />
            <div className="absolute inset-0 bg-black/30 z-10" />
          </div>

          {/* CONTENT INNER WRAPPER */}
          <div className="relative w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 pb-16 z-20">
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
            </motion.div>
          </div>
        </section>

        {/* BLOG POSTS GRID SECTION */}
        <section className="relative px-6 md:px-16 lg:px-24 pt-20 lg:pt-28 pb-20 max-w-[1600px] mx-auto z-10">
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
                <Link href={`/blog/${post.id}`} key={post.id} className="flex flex-col group">
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.08, ease }}
                    className="flex flex-col h-full cursor-pointer"
                  >
                    {/* Aspect ratio frame containing image with hover effect */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-xl">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority={idx < 3}
                        className="object-cover transition-transform duration-1000 ease-out hover:scale-110"
                      />
                      
                      {/* Corner category pill tag */}
                      <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-[0.25em] font-medium text-white shadow-md">
                        {post.category}
                      </div>
                    </div>

                    {/* Meta stats element */}
                    <div className="flex items-center gap-6 mt-6 mb-3 text-[13px] uppercase tracking-[0.15em] text-zinc-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-zinc-700" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-zinc-700" />
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
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* PAGINATION SECTION */}
        <section className="relative px-6 md:px-16 lg:px-24 pb-28 max-w-[1600px] mx-auto z-10 border-t border-white/5 pt-12">
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
