"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MoveUpRight, SlidersHorizontal, RotateCcw, Tag } from "lucide-react";
import Footer from "@/components/Footer";

// Import local image assets for brand consistency
import img1 from "@/app/assets/images/new-modern-steel.jpg";
import img2 from "@/app/assets/images/3d-rendering-modern-design-marble-tile-toilet-bathroom.jpg";
import img3 from "@/app/assets/images/pexels-artbovich-6316056.jpg";
import img4 from "@/app/assets/images/pexels-artbovich-7227647.jpg";
import img5 from "@/app/assets/images/pexels-artbovich-7587484.jpg";
import img6 from "@/app/assets/images/pexels-artbovich-8089093.jpg";

// Rich type-safe product database
interface Product {
  id: number;
  name: string;
  collection: string;
  type: string;
  finish: string;
  image: any;
  description: string;
  spec: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Adris Monolithic Basin",
    collection: "Steel Series",
    type: "Sanitaryware",
    finish: "Brushed Gold",
    image: img1,
    description: "Concealed drain design fabricated from high-grade marine stainless steel, finished in brushed gold PVD.",
    spec: "500 x 400 x 900 mm"
  },
  {
    id: 2,
    name: "Carrara Floating Tub",
    collection: "Marble Collection",
    type: "Bathtubs",
    finish: "Carrara Marble",
    image: img2,
    description: "Monolithic freestanding soaking bathtub carved from a single block of selected fine-veined Carrara stone.",
    spec: "1800 x 850 x 550 mm"
  },
  {
    id: 3,
    name: "HydroSense Ceiling Mist",
    collection: "Spa Retreat",
    type: "Showers",
    finish: "Polished Chrome",
    image: img3,
    description: "Triple-zone rainfall, atomized mist, and laminar column shower integrated directly flush into ceilings.",
    spec: "600 x 600 mm Dual Inlet"
  },
  {
    id: 4,
    name: "Soho Minimalist Mixer",
    collection: "Urban Luxe",
    type: "Faucets",
    finish: "Matte Black",
    image: img4,
    description: "Ultra-slim single lever deck-mounted faucet with advanced laminar flow regulator and silent aeration.",
    spec: "220 mm Spout Projection"
  },
  {
    id: 5,
    name: "Milanese Atelier Tap",
    collection: "Matt Black",
    type: "Faucets",
    finish: "Matte Black",
    image: img5,
    description: "generations-perfected hand-finished matte black wall mixer featuring an invisible built-in structural sleeve.",
    spec: "2-Hole In-Wall Mixer"
  },
  {
    id: 6,
    name: "Aura Thermostatic Column",
    collection: "Thermostatic Range",
    type: "Showers",
    finish: "Rose Gold",
    image: img6,
    description: "Intelligent water pressure balancing system, temperature memory locks, and heavy rainfall overhead arrays.",
    spec: "Integrated 3-Way Thermostat"
  },
  {
    id: 7,
    name: "Venezia PVD Washbasin",
    collection: "Steel Series",
    type: "Sanitaryware",
    finish: "Rose Gold",
    image: img1,
    description: "Sleek wall-suspended stainless console featuring an anti-fingerprint surface protection layer.",
    spec: "800 x 420 x 120 mm"
  },
  {
    id: 8,
    name: "Architectural Wall Valve",
    collection: "Urban Luxe",
    type: "Faucets",
    finish: "Brushed Gold",
    image: img4,
    description: "Minimalist cross-handle thermostatic wall controller with solid brass cartridges and custom gold alloys.",
    spec: "Dual Outlet Diverter"
  },
  {
    id: 9,
    name: "Zen Satin-Drench Head",
    collection: "Spa Retreat",
    type: "Showers",
    finish: "Matte Black",
    image: img3,
    description: "High-density silicone nozzle matrix producing heavy drops simulating warm tropical rain.",
    spec: "400 mm Diameter Column"
  },
  {
    id: 10,
    name: "Monolith Wall Cistern",
    collection: "Marble Collection",
    type: "Sanitaryware",
    finish: "Carrara Marble",
    image: img2,
    description: "In-wall toilet mounting console enclosed in premium matching Carrara marble slab finishes.",
    spec: "Rimless Siphon Jet Console"
  }
];

// Curated filter dimensions
const COLLECTIONS = ["Steel Series", "Marble Collection", "Spa Retreat", "Urban Luxe", "Matt Black", "Thermostatic Range"];
const TYPES = ["Faucets", "Bathtubs", "Showers", "Sanitaryware"];
const FINISHES = ["Brushed Gold", "Matte Black", "Polished Chrome", "Carrara Marble", "Rose Gold"];

const ease = [0.16, 1, 0.3, 1] as const;

export default function CategoriesClient() {
  // Multiselect filter state
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggles multiselect values
  const toggleFilter = (value: string, type: "collection" | "type" | "finish") => {
    const setter = 
      type === "collection" ? setSelectedCollections :
      type === "type" ? setSelectedTypes :
      setSelectedFinishes;
    
    const state = 
      type === "collection" ? selectedCollections :
      type === "type" ? selectedTypes :
      selectedFinishes;

    if (state.includes(value)) {
      setter(state.filter((item) => item !== value));
    } else {
      setter([...state, value]);
    }
  };

  // Resets all filters
  const resetFilters = () => {
    setSelectedCollections([]);
    setSelectedTypes([]);
    setSelectedFinishes([]);
  };

  const hasActiveFilters = 
    selectedCollections.length > 0 || 
    selectedTypes.length > 0 || 
    selectedFinishes.length > 0;

  // Filter logic
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCollection = selectedCollections.length === 0 || selectedCollections.includes(product.collection);
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type);
    const matchesFinish = selectedFinishes.length === 0 || selectedFinishes.includes(product.finish);
    return matchesCollection && matchesType && matchesFinish;
  });

  return (
    <>
      <main className="bg-black text-white select-none overflow-x-hidden relative min-h-screen font-sans pt-32">
        
        {/* GOLD/METALLIC MESH GLOW ACCENTS (Visual brand signature styling) */}
        <div className="absolute top-[10vh] -left-[10vw] w-[45vw] h-[45vw] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="absolute top-[80vh] -right-[10vw] w-[50vw] h-[50vw] bg-zinc-500/5 rounded-full blur-[180px] pointer-events-none z-0" />

        {/* HERO HEADER */}
        <section className="relative px-[16px] md:px-16 lg:px-24 4xl:px-0 pb-12 pt-8 max-w-[1600px] mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease }}
            className="max-w-3xl"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-4 block font-medium">
              Curated Ateliers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl 3xl:text-[76px] font-medium tracking-tight leading-none text-white mb-6">
              Our Collections
            </h1>
            <p className="text-zinc-400 font-light text-base md:text-lg leading-relaxed tracking-wide">
              Explore our masterfully crafted bath fittings, minimal thermostatic shower systems, and monolithic sanitary coordinates categorized by premium material finishes and architectural concepts.
            </p>
          </motion.div>
        </section>

        {/* DYNAMIC TWO-COLUMN FILTERING SYSTEM */}
        <section className="relative px-[16px] md:px-16 lg:px-24 4xl:px-0 pb-28 max-w-[1600px] mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* COLUMN 1: STICKY FILTERS PANEL */}
          <div className="lg:col-span-3">
            <div className={`sticky top-28 flex flex-col ${(!isMobile || isMobileFilterOpen) ? "gap-8" : "gap-0"} bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl relative transition-all duration-300 z-30`}>
              
              {/* HEADER TAPPED TO TOGGLE ON MOBILE */}
              <div 
                onClick={() => isMobile && setIsMobileFilterOpen(!isMobileFilterOpen)}
                className={`flex items-center justify-between border-b border-white/10 pb-4 ${isMobile ? "cursor-pointer select-none" : ""}`}
              >
                <h3 className="text-xs uppercase tracking-[0.25em] text-white font-semibold flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-amber-500" />
                  <span>
                    Filters {hasActiveFilters && `(${selectedCollections.length + selectedTypes.length + selectedFinishes.length})`}
                  </span>
                </h3>
                
                <div className="flex items-center gap-4">
                  {hasActiveFilters && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        resetFilters();
                      }}
                      className="text-[10px] uppercase tracking-[0.15em] text-amber-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                      id="reset-filters-btn"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </button>
                  )}
                  {isMobile && (
                    <motion.svg
                      animate={{ rotate: isMobileFilterOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="w-4 h-4 text-zinc-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  )}
                </div>
              </div>

              {/* COLLAPSIBLE CONTAINER */}
              <AnimatePresence initial={false}>
                {(!isMobile || isMobileFilterOpen) && (
                  <motion.div
                    initial={isMobile ? { height: 0, opacity: 0, marginTop: 0 } : undefined}
                    animate={isMobile ? { height: "auto", opacity: 1, marginTop: 16 } : undefined}
                    exit={isMobile ? { height: 0, opacity: 0, marginTop: 0 } : undefined}
                    transition={{ duration: 0.45, ease }}
                    className="overflow-hidden flex flex-col gap-8"
                  >
                    {/* Dimension 1: Collection Series */}
                    <div className="flex flex-col gap-4">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
                        Collection Series
                      </h4>
                      <div className="flex flex-col gap-3">
                        {COLLECTIONS.map((col) => {
                          const isChecked = selectedCollections.includes(col);
                          return (
                            <button
                              key={col}
                              onClick={() => toggleFilter(col, "collection")}
                              className="flex items-center justify-between text-left text-xs uppercase tracking-wider font-light transition-all duration-300 group cursor-pointer"
                            >
                              <span className={isChecked ? "text-white font-medium" : "text-zinc-400 group-hover:text-zinc-200"}>
                                {col}
                              </span>
                              <div className={`w-3.5 h-3.5 rounded border transition-colors flex items-center justify-center ${
                                isChecked ? "bg-amber-500 border-amber-500" : "border-white/20 group-hover:border-white/40"
                              }`}>
                                {isChecked && <div className="w-1.5 h-1.5 bg-black rounded-sm" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Dimension 2: Product Type */}
                    <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
                        Product Type
                      </h4>
                      <div className="flex flex-col gap-3">
                        {TYPES.map((type) => {
                          const isChecked = selectedTypes.includes(type);
                          return (
                            <button
                              key={type}
                              onClick={() => toggleFilter(type, "type")}
                              className="flex items-center justify-between text-left text-xs uppercase tracking-wider font-light transition-all duration-300 group cursor-pointer"
                            >
                              <span className={isChecked ? "text-white font-medium" : "text-zinc-400 group-hover:text-zinc-200"}>
                                {type}
                              </span>
                              <div className={`w-3.5 h-3.5 rounded border transition-colors flex items-center justify-center ${
                                isChecked ? "bg-amber-500 border-amber-500" : "border-white/20 group-hover:border-white/40"
                              }`}>
                                {isChecked && <div className="w-1.5 h-1.5 bg-black rounded-sm" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Dimension 3: Finishes */}
                    <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
                        Atelier Finish
                      </h4>
                      <div className="flex flex-col gap-3">
                        {FINISHES.map((finish) => {
                          const isChecked = selectedFinishes.includes(finish);
                          return (
                            <button
                              key={finish}
                              onClick={() => toggleFilter(finish, "finish")}
                              className="flex items-center justify-between text-left text-xs uppercase tracking-wider font-light transition-all duration-300 group cursor-pointer"
                            >
                              <span className={isChecked ? "text-white font-medium" : "text-zinc-400 group-hover:text-zinc-200"}>
                                {finish}
                              </span>
                              <div className={`w-3.5 h-3.5 rounded border transition-colors flex items-center justify-center ${
                                isChecked ? "bg-amber-500 border-amber-500" : "border-white/20 group-hover:border-white/40"
                              }`}>
                                {isChecked && <div className="w-1.5 h-1.5 bg-black rounded-sm" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* COLUMN 2: HARDWARE-ACCELERATED DYNAMIC PRODUCT GRID */}
          <div className="lg:col-span-9">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease }}
                    className="flex flex-col bg-zinc-950/40 rounded-2xl border border-white/5 overflow-hidden group shadow-lg hover:border-white/10 transition-colors duration-500"
                  >
                    {/* Portrait Image Frame aspect-[3/4] */}
                    <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 brightness-[0.8] group-hover:brightness-[0.9]"
                      />
                      
                      {/* Corner Badge tag */}
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-[0.25em] font-medium text-white shadow-md flex items-center gap-1">
                        <Tag className="w-3 h-3 text-amber-500" />
                        <span>{product.type}</span>
                      </div>

                      {/* Glassmorphic Overlay hover specification */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6">
                        <p className="text-zinc-300 text-xs font-light leading-relaxed mb-4 line-clamp-3">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">
                          <span>Spec</span>
                          <span>{product.spec}</span>
                        </div>
                      </div>
                    </div>

                    {/* Metadata Content */}
                    <div className="p-6 flex flex-col gap-3 relative bg-black/40 flex-1">
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">
                        <span>{product.collection}</span>
                        <span className="text-amber-500">{product.finish}</span>
                      </div>
                      
                      <h3 className="text-lg font-medium text-white group-hover:text-zinc-200 transition-colors leading-tight">
                        {product.name}
                      </h3>

                      {/* <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold group-hover:text-white transition-colors duration-300">
                          View Details
                        </span>
                        
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
                          <MoveUpRight className="w-4 h-4" />
                        </div>
                      </div> */}
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Zero state feedback */}
            {filteredProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-white/10 rounded-3xl bg-zinc-950/20"
              >
                <p className="text-zinc-400 font-light text-base mb-6 tracking-wide">
                  No luxury coordinates match your active filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] font-light text-zinc-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 shadow-md active:scale-98 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </motion.div>
            )}
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
