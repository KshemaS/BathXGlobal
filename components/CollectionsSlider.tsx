"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import img1 from "@/app/assets/images/new-modern-steel.jpg";
import img2 from "@/app/assets/images/3d-rendering-modern-design-marble-tile-toilet-bathroom.jpg";
import img3 from "@/app/assets/images/pexels-artbovich-6316056.jpg";
import img4 from "@/app/assets/images/pexels-artbovich-7227647.jpg";

const collections = [
  { title: "Steel Series",      subtitle: "Modern Minimalism",    image: img1.src },
  { title: "Marble Collection", subtitle: "Timeless Elegance",    image: img2.src },
  { title: "Spa Retreat",       subtitle: "Pure Serenity",        image: img3.src },
  { title: "Urban Luxe",        subtitle: "City Sophistication",  image: img4.src },
  { title: "Steel Series",      subtitle: "Modern Minimalism",    image: img1.src },
  { title: "Marble Collection", subtitle: "Timeless Elegance",    image: img2.src },
];

export default function CollectionsSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-black py-24">
      <div className="px-8 mb-12">
        <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-3">
          Curated for you
        </p>
        <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
          Our Collections
        </h2>
        <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Drag to explore
        </p>
      </div>

      <div className="overflow-hidden" ref={trackRef}>
        <motion.div
          drag="x"
          dragConstraints={trackRef}
          dragElastic={0.04}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }}
          className="flex gap-4 px-8 w-max cursor-grab active:cursor-grabbing"
        >
          {collections.map((col, i) => (
            <motion.div
              key={i}
              className="relative flex-shrink-0 w-64 h-[420px] overflow-hidden"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={col.image}
                alt={col.title}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-7 left-6">
                <p className="text-[9px] uppercase tracking-[0.35em] text-zinc-400 mb-1.5">
                  {col.subtitle}
                </p>
                <h3 className="text-xl font-medium text-white leading-tight">
                  {col.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
