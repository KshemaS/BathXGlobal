"use client";

import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import local image assets
import tub from "@/app/assets/images/collections/btub.jpg";
import mixtures from "@/app/assets/images/collections/mixtures.jpg";
import basins from "@/app/assets/images/collections/basin.jpg";
import bathroomAccessories from "@/app/assets/images/collections/shower.jpg";
import waterCloset from "@/app/assets/images/collections/closet.jpg";

export const collections = [
  {
    title: "Bath Tub",
    image: tub.src,
    description:
      "When it comes to trusted tubs, our collection of tubs is no exception. We maintain a great collection of whirlpool tubs and freestanding tubs.",
  },
  {
    title: "Mixtures",
    image: mixtures.src,
    description:
      "Back your basin with a strong mixer with elegant design. The stylish mixer fulfils the overall design for the wash area.",
  },
  {
    title: "Basins",
    image: basins.src,
    description:
      "Wide collection of washbasins with perfect blend materials delivering the quality as well as style to your bathroom.",
  },
  {
    title: "Bathroom Accessories",
    image: bathroomAccessories.src,
    description:
      "Elegantly designed accessories provide the bold look for the bath area. Have a tour through our collection.",
  },
  {
    title: "Water Closet",
    image: waterCloset.src,
    description:
      "Explore through our wide range collection of Water closets including intelligent as well as futuristic designs.",
  },
];


interface CollectionsSliderProps {
  activeSlide?: number;
  setActiveSlide?: (idx: number) => void;
}

export default function CollectionsSlider({ activeSlide, setActiveSlide }: CollectionsSliderProps) {
  const sliderRef = useRef<Slider | null>(null);
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update slider position smoothly when activeSlide prop changes from inner scroll
  useEffect(() => {
    if (activeSlide !== undefined && sliderRef.current) {
      sliderRef.current.slickGoTo(activeSlide);
    }
  }, [activeSlide]);

  const isMobile = slidesToShow === 1;

  const handlePrev = () => {
    if (activeSlide !== undefined && setActiveSlide && activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const handleNext = () => {
    if (activeSlide !== undefined && setActiveSlide && activeSlide < collections.length - 2) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const settings = {
    dots: isMobile,
    infinite: isMobile,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: isMobile,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: true,
  };

  const getCardVariant = (idx: number) => {
    const currentActive = activeSlide || 0;
    
    // 1. Off-screen to the right (not yet revealed)
    if (idx >= currentActive + slidesToShow) {
      return {
        opacity: 0,
        scale: 0.85,
        y: 30,
        filter: "blur(8px)",
      };
    }
    // 2. Visible in the viewport (revealed)
    if (idx >= currentActive && idx < currentActive + slidesToShow) {
      return {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
      };
    }
    // 3. Off-screen to the left (already passed)
    return {
      opacity: 0.4,
      scale: 0.95,
      y: 0,
      filter: "blur(2px)",
    };
  };

  const isAtStart = (activeSlide || 0) === 0;
  const isAtEnd = (activeSlide || 0) >= collections.length - 2;

  // If on desktop (slidesToShow === 2), render the custom scroll-reveal Framer Motion track
  if (slidesToShow === 2) {
    return (
      <div className="relative w-full z-20 group/slider">
        <div className="w-full overflow-hidden px-1">
          <motion.div
            className="flex"
            animate={{ x: `-${(activeSlide || 0) * 50}%` }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            style={{ width: "100%" }}
          >
            {collections.map((col, idx) => (
              <motion.div
                key={idx}
                className="px-3 min-w-[50%] w-[50%] shrink-0 outline-none"
                animate={getCardVariant(idx)}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              >
                <Link 
                  href="/categories" 
                  className="block relative h-[320px] md:h-[500px] xl:h-[540px] w-full overflow-hidden group cursor-pointer rounded-xl"
                >
                  {/* Image Frame */}
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    className="object-cover brightness-65 transition-all duration-[1200ms] ease-out group-hover:scale-103 group-hover:brightness-90"
                  />

                  {/* Metadata content */}
                  <div className="absolute bottom-6 left-3 md:left-6 right-6 z-10 flex items-end justify-between">
                    <h4 className="text-xl md:text-2xl 2xl:text-[30px] font-light text-white tracking-normal leading-tight pl-0.5 group-hover:pl-1 transition-all duration-500">
                      {col.title}
                    </h4>

                    {/* Custom Action Trigger */}
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white opacity-0 translate-y-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-white group-hover:text-black shadow-md shrink-0">
                      <ArrowUpRight className="w-4.5 h-4.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons for large devices */}
        <div className="hidden lg:flex justify-end gap-4 mt-6 pr-3">
          <button 
            onClick={handlePrev}
            disabled={isAtStart}
            className={`w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/20 hover:bg-white hover:text-black hover:border-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
              isAtStart ? "opacity-30 cursor-not-allowed hover:scale-100 hover:bg-white/20 hover:text-white hover:border-white/20" : ""
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNext}
            disabled={isAtEnd}
            className={`w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/20 hover:bg-white hover:text-black hover:border-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
              isAtEnd ? "opacity-30 cursor-not-allowed hover:scale-100 hover:bg-white/20 hover:text-white hover:border-white/20" : ""
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }

  // Fallback to React-Slick for mobile touch and swipe gestures
  return (
    <div className="relative w-full z-20 group/slider overflow-hidden">
      <Slider ref={sliderRef} {...settings} className={`collections-slick-slider px-1 ${isMobile ? "pb-10" : ""}`}>
        {collections.map((col, idx) => (
          <div key={idx} className="px-3 outline-none">
            <Link 
              href="/categories" 
              className="block relative h-[320px] md:h-[500px] xl:h-[540px] w-full overflow-hidden group cursor-pointer rounded-xl"
            >
              {/* Image Frame */}
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover brightness-65 transition-all duration-[1200ms] ease-out group-hover:scale-103 group-hover:brightness-90"
              />

              {/* Metadata content */}
              <div className="absolute bottom-6 left-3 md:left-6 right-6 z-10 flex items-end justify-between">
                <h4 className="text-xl md:text-2xl 2xl:text-[30px] font-light text-white tracking-normal leading-tight pl-0.5 group-hover:pl-1 transition-all duration-500">
                  {col.title}
                </h4>

                {/* Custom Action Trigger */}
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white opacity-0 translate-y-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-white group-hover:text-black shadow-md shrink-0">
                  <ArrowUpRight className="w-4.5 h-4.5" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
