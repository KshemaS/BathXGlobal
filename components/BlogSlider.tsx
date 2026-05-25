"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
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
    title: "The Art of Minimalist Bath Space Design",
    image: img1,
  },
  {
    title: "Selecting the Perfect Matt Black Finish",
    image: img2,
  },
  {
    title: "Integrating Smart Faucets in Modern Homes",
    image: img3,
  },
  {
    title: "The Calm of Spa-Inspired Bathroom Suites",
    image: img4,
  },
  {
    title: "Terrazzo & Marble: A Timeless Material Match",
    image: img5,
  },
];

interface ArrowProps {
  onClick?: () => void;
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer"
      aria-label="Next slide"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
  );
}

export default function BlogSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center bg-black px-6 md:px-16 overflow-hidden select-none">
      {/* HEADER SECTION */}
      <div className="w-full max-w-[84vw] mx-auto mb-10 md:mb-12">
        <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-2.5 font-light">
          Insights & Inspiration
        </p>
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-wide leading-tight">
          Our Blog
        </h2>
      </div>

      {/* CAROUSEL SLIDER WRAPPER */}
      <div className="w-full max-w-[84vw] mx-auto">
        <Slider {...settings} className="blog-slick-slider">
          {blogs.map((blog, i) => (
            <div key={i} className="px-3 outline-none">
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

                {/* ELEGANT HOVER INNER FRAME */}
                <div className="absolute inset-4 border border-white/0 rounded-xl transition-all duration-500 ease-out group-hover:border-white/10 pointer-events-none" />

                {/* BLOG TITLE */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="text-xl md:text-2xl font-medium text-white leading-tight tracking-wide group-hover:text-zinc-200 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  
                  {/* Subtle underline transition */}
                  <div className="w-0 h-[1.5px] bg-white mt-4 transition-all duration-500 ease-out group-hover:w-full" />
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
