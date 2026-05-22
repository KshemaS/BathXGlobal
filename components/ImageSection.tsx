"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

interface Props {
  image: string;
  title: string;
}

export default function ImageSection({ image, title }: Props) {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background image — subtle Ken Burns on mount */}
      <motion.img
        src={image}
        alt={title}
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1,    opacity: 1 }}
        transition={{ duration: 1.6, ease }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      {/* Heading — same bottom position as hero */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full flex flex-col items-center gap-2 text-zinc-500">
        <motion.h2
          initial={{ y: "80vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.7 }}
          className="text-[40px] md:text-[44px] lg:text-[50px] font-medium text-white leading-none tracking-normal pb-10 text-center px-6"
        >
          {title}
        </motion.h2>
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-zinc-500 to-transparent" />
      </div>

    </section>
  );
}
