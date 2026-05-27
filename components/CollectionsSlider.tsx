"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import local image assets
import img1 from "@/app/assets/images/new-modern-steel.jpg";
import img2 from "@/app/assets/images/3d-rendering-modern-design-marble-tile-toilet-bathroom.jpg";
import img3 from "@/app/assets/images/pexels-artbovich-6316056.jpg";
import img4 from "@/app/assets/images/pexels-artbovich-7227647.jpg";
import img5 from "@/app/assets/images/pexels-artbovich-7587484.jpg";
import img6 from "@/app/assets/images/pexels-artbovich-8089093.jpg";

const collections = [
  { title: "Steel Series", subtitle: "Modern Minimalism", image: img1 },
  { title: "Marble Collection", subtitle: "Timeless Elegance", image: img2 },
  { title: "Spa Retreat", subtitle: "Pure Serenity", image: img3 },
  { title: "Urban Luxe", subtitle: "City Sophistication", image: img4 },
  { title: "Matt Black", subtitle: "Bold Aesthetics", image: img5 },
  { title: "Thermostatic Range", subtitle: "Smart Technology", image: img6 },
];

export default function CollectionsSlider() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2, // Show 2 cards on desktop for maximum focus and scale
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full z-20 group/slider">
      {/* SLICK CAROUSEL */}
      <Slider ref={sliderRef} {...settings} className="collections-slick-slider px-1">
        {collections.map((col, idx) => (
          <div key={idx} className="px-3 outline-none">
            <div className="relative h-[440px] md:h-[500px] xl:h-[540px] w-full overflow-hidden group cursor-pointer">

              {/* Image Frame */}
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover brightness-65 transition-all duration-[1200ms] ease-out group-hover:scale-103 group-hover:brightness-90"
              />

              {/* Metadata content */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                <h4 className="text-xl md:text-2xl 2xl:text-[40px] font-light text-white tracking-wide leading-tight pl-0.5 group-hover:pl-1 transition-all duration-500">
                  {col.title}
                </h4>

                {/* Custom Action Trigger */}
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white opacity-0 translate-y-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-white group-hover:text-black shadow-md shrink-0">
                  <ArrowUpRight className="w-4.5 h-4.5" />
                </div>
              </div>

            </div>
          </div>
        ))}
      </Slider>
        {/* CUSTOM LUXURY NAVIGATION BUTTONS */}
      <div className="flex items-center gap-3 z-30 pt-4 absolute right-0">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="w-16 h-16 rounded-full border border-white/50 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer"
          aria-label="Previous Collection"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="w-16 h-16 rounded-full border border-white/50 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer"
          aria-label="Next Collection"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
