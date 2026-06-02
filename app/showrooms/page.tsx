"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Check, } from "lucide-react";
import Footer from "@/components/Footer";
import ShowroomCard from "@/components/ShowroomCard";

// Import premium showroom image assets
import locMilan from "@/app/assets/images/pexels-artbovich-7587484.jpg";
import locLondon from "@/app/assets/images/pexels-artbovich-7227647.jpg";
import locNY from "@/app/assets/images/pexels-artbovich-6908370.jpg";
import locDubai from "@/app/assets/images/new-modern-steel.jpg";
import bgBanner from "@/app/assets/images/bathroom-background-zoom-calls.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const showroomsList = [
  {
    id: "milan",
    num: "01",
    city: "Milano",
    country: "Italy",
    address: "Via Montenapoleone, 8, 20121 Milano",
    phone: "+39 02 1234567",
    email: "milan@bathxglobal.com",
    hours: "Mon - Sat // 10:00 AM - 7:00 PM",
    coords: "45.4682° N, 9.1952° E",
    image: locMilan,
    featured: ["Milanese Atelier Series", "Monolithic Nero Vanity Suite", "Brushed Gold Deck Mixers"],
    tagline: "The heart of Italian craftsmanship. Located in the fashion district, displaying bespoke brassworks and sculptured coordinates.",
  },
  {
    id: "london",
    num: "02",
    city: "London",
    country: "United Kingdom",
    address: "24 Chelsea Harbour, London SW10 0XE",
    phone: "+44 20 7352 1234",
    email: "london@bathxglobal.com",
    hours: "Mon - Sat // 10:00 AM - 7:00 PM",
    coords: "51.4770° N, 0.1804° W",
    image: locLondon,
    featured: ["Thermostatic Smart Mixer Systems", "Oxygenated Eco-Streams", "Gunmetal Tapware"],
    tagline: "Chelsea's premium water gallery. Highlighting precision thermo controls and sustainable ecological coordinates.",
  },
  {
    id: "new-york",
    num: "03",
    city: "New York",
    country: "United States",
    address: "152 Mercer St, New York, NY 10012",
    phone: "+1 212 555 0199",
    email: "ny@bathxglobal.com",
    hours: "Mon - Sat // 10:00 AM - 7:00 PM",
    coords: "40.7251° N, 73.9997° W",
    image: locNY,
    featured: ["Custom Finish Atelier Panels", "Minimalist Wall Spouts", "Freestanding Monoliths"],
    tagline: "Soho's tactile showroom. Curated industrial lofts displaying custom metallic coordinate sets and stone freestanding baths.",
  },
  {
    id: "dubai",
    num: "04",
    city: "Dubai",
    country: "United Arab Emirates",
    address: "Boutique 4, Design District, Dubai",
    phone: "+971 4 456 7890",
    email: "dubai@bathxglobal.com",
    hours: "Mon - Sat // 10:00 AM - 7:00 PM",
    coords: "25.1843° N, 55.2996° E",
    image: locDubai,
    featured: ["German Metallurgy Brassware", "Polished Steel Shower Coordinates", "Spa Suites"],
    tagline: "Tactile wellness sanctuaries. Engineering fluid choreographies first-hand inside the iconic Design District.",
  },
];

export default function ShowroomsPage() {
  const [isBooked, setIsBooked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("Milano");

  const formRef = useRef<HTMLDivElement | null>(null);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && date) {
      setIsBooked(true);
      setTimeout(() => {
        setIsBooked(false);
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
      }, 4000);
    }
  };

  const scrollToForm = (cityName: string) => {
    setCity(cityName);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="bg-black text-white select-none overflow-x-hidden relative min-h-screen font-sans">
      
        {/* HERO HEADER */}
        <section className="relative w-full h-[70vh] min-h-[500px] flex items-end overflow-hidden z-10 select-none">
          <div className="absolute inset-0 z-0">
            <Image
              src={bgBanner}
              alt="Exclusive Display Centers"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70 z-10" />
          </div>

          <div className="relative w-full max-w-[1600px] mx-auto px-[16px] md:px-16 lg:px-24 4xl:px-0 pb-20 z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease }}
              className="max-w-3xl"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 mb-4 block font-semibold font-mono">
                Exclusive Display Centers
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[84px] font-light tracking-tight leading-none text-white">
                Global Ateliers
              </h1>
              <p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed tracking-wide mt-6 max-w-2xl">
                Explore our meticulously curated showrooms. Each space alternates tactile stone coordinates and active custom fittings under custom-designed architectural gallery lighting.
              </p>
            </motion.div>
          </div>
        </section>

        {/* EDITORIAL ALTERNATING SHOWROOMS SHOWCASE */}
        <section className="relative px-[16px] md:px-16 lg:px-24 4xl:px-0 py-20 lg:py-32 max-w-[1600px] mx-auto z-10 flex flex-col gap-24 lg:gap-36">
          {showroomsList.map((boutique, index) => (
            <ShowroomCard
              key={boutique.id}
              boutique={boutique}
              index={index}
              onBookingClick={scrollToForm}
            />
          ))}
        </section>


        {/* PRIVATE ATELIER SCHEDULING PORTAL */}
        <section 
          ref={formRef} 
          id="consultation-form" 
          className="relative px-[16px] md:px-16 lg:px-24 4xl:px-0 py-20 lg:py-32 bg-zinc-950/20 z-10"
        >
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-16">
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-medium font-mono mb-3 block">
                Atelier Scheduling
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                Request Private Showroom Consultation
              </h2>
              <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide max-w-lg mx-auto mt-4">
                Arrange a closed-door consultation session with our design advisors at your preferred boutique location.
              </p>
            </div>

            <div className="bg-zinc-950 border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!isBooked ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleBooking} 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    {/* Telephone */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold font-mono">
                        Telephone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+39 333 123456"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Preferred Date */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold font-mono">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:border-white focus:outline-none transition-colors text-zinc-400"
                        required
                      />
                    </div>

                    {/* Preferred Showroom */}
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold font-mono">
                        Target Atelier Location *
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:border-white focus:outline-none transition-colors text-zinc-400 cursor-pointer"
                        required
                      >
                        <option value="Milano">Milano // Italy</option>
                        <option value="London">London // United Kingdom</option>
                        <option value="New York">New York // United States</option>
                        <option value="Dubai">Dubai // United Arab Emirates</option>
                      </select>
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2 mt-4">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-white text-black font-semibold uppercase text-xs tracking-[0.25em] hover:bg-zinc-100 transition-colors cursor-pointer shadow-lg flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Reserve Closed Consultation</span>
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6 shadow-xl animate-pulse">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-light text-white tracking-wide mb-3">
                      Closed Consultation Requested
                    </h3>
                    <p className="text-zinc-400 font-light text-sm max-w-md leading-relaxed">
                      Thank you, <span className="text-white font-medium">{name}</span>. Our atelier directors in <span className="text-amber-500 font-medium">{city}</span> will contact you at <span className="text-white font-mono">{email}</span> within 24 hours to confirm your private scheduling details.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
