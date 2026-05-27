"use client";

import React, { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/logo.svg";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! Subscribed: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-white/5 py-20 px-6 md:px-16 text-white select-none">
      <div className="max-w-[84vw] mx-auto flex flex-col gap-16">

        {/* MAIN COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* BRAND COLUMN */}
          <div className="flex flex-col gap-6 max-w-sm">
            <Link href="/">
              <Image
                src={logo}
                alt="BathX"
                height={50}
                className="h-12 w-auto brightness-0 invert"
                priority
              />
            </Link>
            <p className="text-zinc-300 text-sm tracking-wide leading-relaxed font-light">
              Crafting architectural water systems, luxury shower sets, and custom bath fittings that bring emotions and minimalism into private sanctuaries.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-semibold">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm tracking-wide text-zinc-300 font-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-300">Collections</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-300">New Arrivals</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-semibold">
              Headquarters
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm tracking-wide text-zinc-300 leading-relaxed font-light">
              <li>
                <span className="block text-white font-medium mb-1">Bath-x Flagship Store</span>
                102 Luxury Boulevard, Design District, Milan, Italy
              </li>
              <li>
                <span className="block text-white font-medium mb-0.5">Direct Inquiry</span>
                contact@bathxglobal.com
              </li>
              <li>
                +39 02 89045612
              </li>
            </ul>
          </div>

          {/* NEWSLETTER SIGNUP */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-semibold">
              Newsletter
            </h4>
            <p className="text-zinc-300 text-sm tracking-wide leading-relaxed font-light">
              Subscribe to receive exclusive insights on architecture, design launches, and showroom events.
            </p>
            <form onSubmit={handleSubmit} className="relative flex items-center mt-2">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 py-3.5 text-sm tracking-widest text-white placeholder-zinc-500 focus:border-white focus:outline-none transition-colors duration-300 font-light"
                required
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:scale-105 active:scale-95 transition-all text-zinc-400 hover:text-white cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* MIDDLE SECTION - EDITORIAL SOCIALS */}
        <div className="w-full h-px bg-white/5" />

        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* SOCIAL LINKS */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.3em] text-zinc-400 font-light">
            <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
            <span>/</span>
            <a href="#" className="hover:text-white transition-colors duration-300">Linkedin</a>
            <span>/</span>
            <a href="#" className="hover:text-white transition-colors duration-300">Pinterest</a>
            <span>/</span>
            <a href="#" className="hover:text-white transition-colors duration-300">Youtube</a>
          </div>

          {/* SECONDARY INFO */}
          <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-light">
            Milan  /  London  /  New York  /  Dubai
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="w-full h-px bg-white/5" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs uppercase tracking-[0.2em] text-zinc-400 font-light">
          <div>
            © {new Date().getFullYear()} Bath-x Global. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
