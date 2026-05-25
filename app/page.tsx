"use client";

import HeroSection from "@/components/HeroSection";
import ImageSection from "@/components/ImageSection";
import FullPageScroll from "@/components/FullPageScroll";
import ContentSection from "@/components/ContentSection";
import img1 from "@/app/assets/images/pexels-artbovich-7587484.jpg";
import img2 from "@/app/assets/images/pexels-pu-ca-adryan-163345030-35209394.jpg";
import NewArrivalsSlider from "@/components/NewArrivalsSlider";
import StoreShowcase from "@/components/StoreShowcase";
import BlogSlider from "@/components/BlogSlider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <FullPageScroll>
        <HeroSection />
        <ImageSection image={img1.src} title="Crafted Elegance" />
        <ImageSection image={img2.src} title="Timeless Luxury" />
        <ContentSection />
        <NewArrivalsSlider />
        <StoreShowcase />
        <BlogSlider />
      </FullPageScroll>
      <Footer />
    </>
  );
}
