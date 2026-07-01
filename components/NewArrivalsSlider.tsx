"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import local image assets
import bgImage from "@/app/assets/images/pexels-artbovich-7167075.jpg";
import img1 from "@/app/assets/images/pexels-pu-ca-adryan-163345030-35209394.jpg";
import img2 from "@/app/assets/images/pexels-the-ghazi-2152398165-36353409.jpg";
import img3 from "@/app/assets/images/pexels-artbovich-7587484.jpg";
import img4 from "@/app/assets/images/new-modern-steel.jpg";
import img5 from "@/app/assets/images/pexels-artbovich-7227647.jpg";
import img6 from "@/app/assets/images/pexels-artbovich-6908370.jpg";

const products = [
  {
    title: "Adris Wash Basin",
    description: "Sculpted minimal organic stone wash basin.",
    image: img1,
    finish: "Matte Stone",
    spec: "Ø 420mm",
  },
  {
    title: "Premium Gold Fitting",
    description: "Minimalist deck-mounted gold water mixer.",
    image: img2,
    finish: "Brushed Gold",
    spec: "H 320mm",
  },
  {
    title: "Minimalist Vanity Suite",
    description: "Monolithic modular smoked oak coordinate.",
    image: img3,
    finish: "Smoked Oak",
    spec: "1200mm Width",
  },
  {
    title: "Thermostatic Shower",
    description: "Precision temperature controller panel.",
    image: img4,
    finish: "Brushed Steel",
    spec: "3-Way Control",
  },
  {
    title: "Freestanding Coordinate",
    description: "Architectural bath coordinate in black granite.",
    image: img5,
    finish: "Nero Marquina",
    spec: "H 850mm",
  },
  {
    title: "Vola Minimal Tap",
    description: "Wall-mounted minimal water outlet faucet.",
    image: img6,
    finish: "Gunmetal",
    spec: "L 220mm",
  },
];

export default function NewArrivalsSlider() {
  const sliderRef = useRef<Slider | null>(null);
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
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute -bottom-10 left-0 right-0 z-25">
        <ul className="flex justify-center items-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-2 h-2 rounded-full bg-white/20 transition-all duration-300 hover:bg-white/40 active-dot" />
    ),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950 select-none flex items-center">
      {/* BACKGROUND IMAGE FOR THE ENTIRE SECTION */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="New Arrivals Background"
          fill
          priority
          className="object-cover object-center brightness-30"
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative w-full z-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center pt-24 lg:pt-0 px-[16px] md:px-16 lg:pl-20 2xl:pl-40 lg:pr-0">
        
        {/* LEFT COLUMN: BRANDING & TITLE */}
        <div className="lg:col-span-4 flex flex-col items-start text-left gap-3 md:gap-6 pr-[16px] lg:pr-0 z-10">
          <span className="text-[12px] uppercase tracking-[0.3em] text-amber-500 font-medium font-mono">
            03 // Curation
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-none">
            New Arrivals <br />
          </h2>
          <p className="text-white font-normal text-[15px] md:text-[18px] leading-relaxed max-w-sm">
            Discover our latest orchestrations of water and metal. Hand-finished brassware, minimal stone basins, and sculptural coordinates engineered in Milan.
          </p>
          
          <div className="mt-2">
            <Link href="/categories" className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 font-semibold text-xs xl:text-[15px] tracking-wider uppercase shadow-xl cursor-pointer w-fit">
              <span>Explore All</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: HORIZONTAL PRODUCTS CAROUSEL */}
        <div className="lg:col-span-8 w-full overflow-hidden pb-4 md:pb-12 flex flex-col gap-4 md:gap-6 pt-2 md:pt-10 3xl:pt-30 4xl:pt-40">
          <Slider ref={sliderRef} {...settings} className="new-arrivals-slick-carousel -mx-3">
            {products.map((product, idx) => (
              <div key={idx} className="px-3 outline-none py-4">
                {/* PRODUCT CARD */}
                <Link 
                  href="/categories" 
                  className="block bg-black/80 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/20 group/card flex flex-col h-[320px] md:h-[460px] cursor-pointer"
                >
                  
                  {/* Image Frame with responsive height/aspect ratio */}
                  <div className="relative w-full h-[160px] md:h-[280px] lg:h-auto lg:aspect-[4/5] overflow-hidden flex items-center justify-center p-8">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover/card:scale-103 group-hover/card:brightness-[0.95]"
                    />
                  </div>

                  {/* Meta Contents and spec */}
                  <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-medium">
                        {product.finish}
                      </span>
                      <h3 className="text-lg font-medium text-white mt-1.5 line-clamp-1 leading-snug">
                        {product.title}
                      </h3>
                      <p className="text-zinc-400 font-light text-xs line-clamp-2 mt-1 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                      <span className="text-xs font-light text-zinc-300 font-mono">
                        {product.spec}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-300 font-semibold group-hover/card:text-amber-500 transition-colors duration-300 flex items-center gap-1">
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                </Link>
              </div>
            ))}
          </Slider>
          {/* Slider Buttons below the Slider */}
          <div className="hidden md:flex gap-4 self-end pr-20 pl-3 mt-4">
            <button 
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/20 hover:bg-white hover:text-black hover:border-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => sliderRef.current?.slickNext()}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/20 hover:bg-white hover:text-black hover:border-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
