"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/images/logo.svg";
import MegaMenuBg from "./MegaMenuBg";

const navGroups = [
  {
    heading: "Products",
    links: [
      "Faucets & Taps",
      "Bathtubs",
      "Thermostatic Showers",
      "Sanitaryware",
      "Bathroom Accessories",
    ],
  },
  {
    heading: "Explore",
    links: [
      "Collections",
      "BathX Journal",
      "Lookbook",
      "Trade & Specification",
    ],
  },
  {
    heading: "Company",
    links: [
      "About BathX",
      "Showrooms",
      "Press & Media",
      "Sustainability",
      "Careers",
    ],
  },
  {
    heading: "Support",
    links: [
      "Find a Dealer",
      "Book a Consultation",
      "Customer Support",
      "Warranties",
    ],
  },
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
        <div className="grid grid-cols-3 items-center py-6 px-6 md:px-12 lg:px-20">
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
        <MegaMenuBg />
        <div className="h-16 shrink-0" />
        <div className="h-px bg-zinc-800 shrink-0" />
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
              {navGroups.map((group) => (
                <nav key={group.heading}>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6 font-medium">
                    {group.heading}
                  </p>
                  <ul className="space-y-3 md:space-y-4">
                    {group.links.map((link) => {
                      const isAbout = link === "About BathX";
                      const isContact = link === "Book a Consultation" || link === "Customer Support";
                      const isCategories = link === "Collections";
                      const href = isAbout ? "/about" : isContact ? "/contact" : isCategories ? "/categories" : "#";
                      return (
                        <li key={link}>
                          <Link
                            href={href}
                            className="block text-base md:text-lg text-zinc-300 hover:text-white transition-colors duration-200 font-light tracking-wide"
                            onClick={() => setIsOpen(false)}
                          >
                            {link}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              ))}
            </div>
            <div className="mt-16 md:mt-24 pt-10 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3 font-medium">
                  Flagship Showroom
                </p>
                <p className="text-sm text-zinc-300 font-light">
                  123 Design District, Dubai, UAE
                </p>
                <p className="text-sm text-zinc-500 mt-1 font-light">
                  Mon – Sat: 10:00 – 19:00
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3 font-medium">
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
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3 font-medium">
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
