"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import local image assets
import img1 from "@/app/assets/images/pexels-pu-ca-adryan-163345030-35209394.jpg";
import img2 from "@/app/assets/images/pexels-the-ghazi-2152398165-36353409.jpg";
import img3 from "@/app/assets/images/pexels-artbovich-7587484.jpg";

const slides = [
  {
    title: "Adris Wash Basin",
    subtitle: "New Arrivals",
    image: img1,
  },
  {
    title: "Premium Gold Fitting",
    subtitle: "New Arrivals",
    image: img2,
  },
  {
    title: "Minimalist Vanity Suite",
    subtitle: "New Arrivals",
    image: img3,
  },
];

interface ArrowProps {
  onClick?: () => void;
  progress?: number;
}

function NextArrow({ onClick, progress = 0 }: ArrowProps) {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={onClick}
      className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer"
      aria-label="Next slide"
    >
      {/* CIRCULAR SVG PROGRESS RING */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
        <circle
          cx="28"
          cy="28"
          r={radius}
          className="stroke-white/10"
          strokeWidth="2"
          fill="transparent"
        />
        <circle
          cx="28"
          cy="28"
          r={radius}
          className="stroke-white"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 16ms linear" }}
        />
      </svg>
      <ChevronRight className="w-5 h-5 z-10" />
    </button>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  const radius = 26;

  return (
    <button
      onClick={onClick}
      className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer"
      aria-label="Previous slide"
    >
      {/* STATIC OUTLINE CIRCLE */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <circle
          cx="28"
          cy="28"
          r={radius}
          className="stroke-white/15"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
      <ChevronLeft className="w-5 h-5 z-10" />
    </button>
  );
}

export default function NewArrivalsSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  // Sync autoplay progress timer at 60fps
  useEffect(() => {
    let startTime = Date.now();
    const duration = 5000; // 5 seconds autoplay duration

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);

      if (elapsed >= duration) {
        sliderRef.current?.slickNext();
        setProgress(0);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const settings = {
    dots: true,
    infinite: true,
    fade: true, // Clean cross-fade transitions
    autoplay: false, // Handled custom by our React effect
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow progress={progress} />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next);
    },
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: "absolute", bottom: "35px", width: "100%", zIndex: 25 }}>
        <ul className="slick-dots flex justify-center items-center gap-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black select-none">
      {/* FULLSCREEN SLIDER */}
      <Slider ref={sliderRef} {...settings} className="h-full w-full arrivals-slick-slider">
        {slides.map((slide, i) => (
          <div key={i} className="relative h-screen w-full outline-none">
            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover object-center"
              />
              {/* VIGNETTE SHADOW OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/75 z-10" />
            </div>
          </div>
        ))}
      </Slider>

      {/* DYNAMIC TEXT TRANSITIONS */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-28 md:bottom-32 left-0 right-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
        >
          <p className="text-[18px] uppercase tracking-[0.4em] text-zinc-200/90 mb-3 font-light drop-shadow-md">
            New Arrivals
          </p>
          <h2 className="text-4xl md:text-6xl font-medium text-white tracking-wide leading-tight drop-shadow-lg max-w-3xl">
            {slides[activeSlide].title}
          </h2>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
