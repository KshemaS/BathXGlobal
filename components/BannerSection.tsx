"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bgImage from "@/app/assets/images/3d-rendering-modern-design-marble-tile-toilet-bathroom.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BannerSection() {
  return (
    <section className="relative h-screen snap-start overflow-hidden">

      {/* Background image */}
      <Image
        src={bgImage}
        alt="Modern luxury bathroom"
        fill
        className="object-cover"
      />

      {/* Overlay — matches hero gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/55" />

      {/* Heading — same position as hero banner heading */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full flex flex-col items-center gap-2 text-zinc-500">
        <motion.h2
          initial={{ y: "80vh", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 1.2, ease }}
          className="text-[40px] md:text-[44px] lg:text-[50px] font-medium text-white leading-none tracking-normal pb-10 text-center"
        >
          Crafted for Living
        </motion.h2>

        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-zinc-500 to-transparent" />
      </div>

    </section>
  );
}
