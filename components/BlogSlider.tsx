"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import local image assets
import img1 from "@/app/assets/images/pexels-artbovich-6908370.jpg";
import img2 from "@/app/assets/images/pexels-artbovich-7587484.jpg";
import img3 from "@/app/assets/images/pexels-artbovich-7227647.jpg";
import img4 from "@/app/assets/images/pexels-artbovich-6316056.jpg";
import img5 from "@/app/assets/images/3d-rendering-modern-design-marble-tile-toilet-bathroom.jpg";

const blogs = [
  {
    id: 1,
    title: "The Art of Minimalist Bath Space Design",
    image: img1,
    date: "OCTOBER 12, 2025",
  },
  {
    id: 2,
    title: "Selecting the Perfect Matt Black Finish",
    image: img2,
    date: "NOVEMBER 08, 2025",
  },
  {
    id: 3,
    title: "Integrating Smart Faucets in Modern Homes",
    image: img3,
    date: "DECEMBER 15, 2025",
  },
  {
    id: 4,
    title: "The Calm of Spa-Inspired Bathroom Suites",
    image: img4,
    date: "JANUARY 22, 2026",
  },
  {
    id: 5,
    title: "Terrazzo & Marble: A Timeless Material Match",
    image: img5,
    date: "FEBRUARY 18, 2026",
  },
];

export default function BlogSlider() {
  const sliderRef = React.useRef<Slider>(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false, 
  };

  return (
    <section className="relative py-[60px] lg:py-[80px] 2xl:py-[120px] w-full flex flex-col justify-center bg-black px-0 md:px-16 4xl:px-0 overflow-hidden select-none">
      {/* HEADER SECTION WITH TOP-RIGHT BUTTONS */}
      <div className="w-full max-w-[84vw] 4xl:max-w-[1600px] mx-auto mb-10 md:mb-12 flex items-end justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-2.5 font-light">
            Insights & Inspiration
          </p>
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-wide leading-tight">
            Our Blog
          </h2>
        </div>

        {/* NAVIGATION BUTTONS IN TOP-RIGHT */}
        <div className="hidden sm:flex items-center gap-4 z-30">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="w-16 h-16 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="w-16 h-16 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* CAROUSEL SLIDER WRAPPER */}
      <div className="w-full max-w-[84vw] 4xl:max-w-[1600px] mx-auto">
        <Slider ref={sliderRef} {...settings} className="blog-slick-slider">
          {blogs.map((blog, i) => (
            <div key={i} className="md:px-3 outline-none">
              <Link href={`/blog/${blog.id}`} className="block">
                <motion.div
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-[340px] md:h-[400px] rounded-2xl overflow-hidden group cursor-pointer shadow-2xl border border-white/5 bg-zinc-900"
                >
                  {/* BLOG BACKGROUND IMAGE */}
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  
                  {/* VIGNETTE GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-500 group-hover:via-black/35" />

                  {/* BLOG TITLE & DATE */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <span className="text-[12px] uppercase tracking-[0.2em] text-zinc-200 mb-2.5 block font-light">
                      {blog.date}
                    </span>
                    <h3 className="text-xl md:text-2xl font-medium text-white leading-tight tracking-wide group-hover:text-zinc-200 transition-colors duration-300">
                      {blog.title}
                    </h3>
                    
                    {/* Subtle underline transition */}
                    <div className="w-0 h-[1.5px] bg-white mt-4 transition-all duration-500 ease-out group-hover:w-full" />
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {/* VIEW ALL BUTTON */}
      <div className="w-full flex justify-center pt-30 z-30">
        <a 
          href="/blog" 
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 text-xs uppercase tracking-[0.25em] font-light shadow-lg active:scale-98 cursor-pointer group"
        >
          View All
          <MoveUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
