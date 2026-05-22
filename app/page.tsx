"use client";

import HeroSection from "@/components/HeroSection";
import ImageSection from "@/components/ImageSection";
import FullPageScroll from "@/components/FullPageScroll";
import ContentSection from "@/components/ContentSection";
import CollectionsSlider from "@/components/CollectionsSlider";
import img1 from "@/app/assets/images/new-modern-steel.jpg";
import img2 from "@/app/assets/images/pexels-artbovich-6316056.jpg";

export default function Home() {
  return (
    <>
      <FullPageScroll>
        <HeroSection />
        <ImageSection image={img1.src} title="Crafted Elegance" />
        <ImageSection image={img2.src} title="Timeless Luxury" />
        <ContentSection />
      </FullPageScroll>
      <CollectionsSlider />
    </>
  );
}
