"use client";

import React from "react";
import CollectionCard from "@/components/CollectionCard";

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

export default function CollectionsGrid() {
  return (
    <div className="w-full max-w-[88vw] mx-auto px-4 md:px-8 z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {collections.map((col, i) => (
          <CollectionCard
            key={i}
            index={i}
            title={col.title}
            subtitle={col.subtitle}
            image={col.image}
          />
        ))}
      </div>
    </div>
  );
}
