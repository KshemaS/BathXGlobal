"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ImageSection from "@/components/ImageSection";
import FullPageScroll from "@/components/FullPageScroll";
import ContentSection from "@/components/ContentSection";
import img1 from "@/app/assets/images/pexels-artbovich-7587484.jpg";
import img2 from "@/app/assets/images/pexels-pu-ca-adryan-163345030-35209394.jpg";
import heroImage from "@/app/assets/images/collection-hero.png";
import NewArrivalsSlider from "@/components/NewArrivalsSlider";
import StoreShowcase from "@/components/StoreShowcase";
import BlogSlider from "@/components/BlogSlider";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    setMounted(true);
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", checkScreen);

    // Hide scrollbar on homepage
    document.documentElement.classList.add("no-scrollbar");
    document.body.classList.add("no-scrollbar");

    return () => {
      window.removeEventListener("resize", checkScreen);
      document.documentElement.classList.remove("no-scrollbar");
      document.body.classList.remove("no-scrollbar");
    };
  }, []);

  const showMobileLayout = mounted && !isDesktop;

  return (
    <>
      <FullPageScroll>
        <HeroSection />
        <ImageSection image={img1.src} title="Crafted Elegance" />
        <ImageSection image={img2.src} title="Timeless Luxury" />        
        {showMobileLayout && (
          <ImageSection image={heroImage.src} title="Modern Serenity" />
        )}
        <ContentSection />
        <NewArrivalsSlider />
        <StoreShowcase />
        <BlogSlider />
      </FullPageScroll>
      <Footer />
    </>
  );
}
