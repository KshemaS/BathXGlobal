"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/images/logo.svg";
import MegaMenuSlider from "./MegaMenuSlider";

const menuLinks = [
  { label: "Home", href: "/", num: "01" },
  { label: "Collections", href: "/categories", num: "02" },
  { label: "About Us", href: "/about", num: "03" },
  { label: "Journal", href: "/blog", num: "04" },
  { label: "Contact Us", href: "/contact", num: "05" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black">
        <div className="grid grid-cols-3 items-center py-6 px-6 md:px-12 lg:px-20 4xl:px-0 max-w-[1600px] mx-auto">
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen((o) => !o)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="flex flex-col gap-1.25 py-1 cursor-pointer"
            >
              <span
                className={`block h-px w-8 bg-white transition-all duration-300 ${isOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-200 ${isOpen ? "w-0 opacity-0" : "w-4"
                  }`}
              />
              <span
                className={`block h-px w-8 bg-white transition-all duration-300 ${isOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
              />
            </button>
          </div>

          <div className="flex justify-center">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src={logo}
                alt="BathX"
                height={50}
                className="h-12 w-auto brightness-0 invert"
                priority
              />
            </Link>
          </div>

          <div className="flex justify-end">
            <label className="flex items-center gap-2 border-b border-zinc-400 pb-1 cursor-text">
              <input
                type="search"
                placeholder="Search"
                className="text-sm bg-transparent outline-none w-28 sm:w-36 md:w-60 placeholder:text-white text-white"
              />
              <svg
                className="w-4 h-4 text-white shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="h-px bg-zinc-800" />
      </header>
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 bg-black min-h-screen flex flex-col transition-all duration-700 ease-out ${isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="h-16 shrink-0" />
        <div className="h-px bg-zinc-800 shrink-0" />
        <div className="flex-1 overflow-y-auto flex flex-col justify-center">
          <div className="w-full max-w-[1600px] 4xl:px-0 mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* LEFT COLUMN: PRIMARY PAGES */}
              <nav className="lg:col-span-5 flex flex-col justify-center">
                <ul className="space-y-6 md:space-y-8 text-left">
                  {menuLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-baseline gap-6 cursor-pointer w-fit"
                      >
                        <span className="text-xs font-mono tracking-widest text-zinc-500 font-light transition-colors duration-300 group-hover:text-amber-500">
                          {item.num}
                        </span>
                        <span className="text-3xl md:text-5xl lg:text-6xl font-light text-zinc-300 transition-all duration-500 ease-out group-hover:text-white group-hover:italic group-hover:pl-3">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* RIGHT COLUMN: CINEMATIC SHOWCASE SLIDER */}
              <div className="lg:col-span-7 hidden lg:block pr-3 pb-3">
                <MegaMenuSlider isOpen={isOpen} />
              </div>
            </div>

            {/* LOWER EDITORIAL DETAILS */}
            <div className="mt-12 md:mt-16 pt-8 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3 font-semibold">
                  Flagship Studio
                </p>
                <p className="text-sm text-zinc-300 font-light">
                  123 Design District, Dubai, UAE
                </p>
                <p className="text-xs text-zinc-500 mt-1 font-light">
                  Mon – Sat: 10:00 – 19:00
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3 font-semibold">
                  Contact
                </p>
                <a
                  href="mailto:hello@bathx.com"
                  className="text-sm text-zinc-300 hover:text-white transition-colors font-light"
                >
                  hello@bathx.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3 font-semibold">
                  Follow
                </p>
                <div className="flex gap-5">
                  {["Instagram", "Pinterest", "Houzz"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-sm text-zinc-300 hover:text-white transition-colors font-light"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
