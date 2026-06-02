"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

// Curated Flagship Ateliers Directory
const ATELIERS = [
  {
    city: "Milan",
    name: "Milan Atelier & Galleria",
    address: "102 Luxury Boulevard, Design District, Milan, Italy",
    phone: "+39 02 89045612",
    email: "milan@bathxglobal.com",
    hours: "Mon – Sat: 10:00 – 19:00",
  },
  {
    city: "London",
    name: "London Specification Studio",
    address: "45 Clerkenwell Road, Design Quarter, London, UK",
    phone: "+44 20 7946 0192",
    email: "london@bathxglobal.com",
    hours: "Mon – Fri: 09:00 – 18:00",
  },
  {
    city: "Dubai",
    name: "Dubai Flagship Showroom",
    address: "123 Alserkal Avenue, Dubai, UAE",
    phone: "+971 4 346 8920",
    email: "dubai@bathxglobal.com",
    hours: "Mon – Sat: 10:00 – 20:00",
  },
  {
    city: "New York",
    name: "New York Experience Center",
    address: "88 Greene Street, Soho, New York, USA",
    phone: "+1 212 555 0148",
    email: "ny@bathxglobal.com",
    hours: "Mon – Sat: 10:00 – 18:00",
  },
];

export default function ContactDirectory() {
  return (
    <section className="relative py-20 bg-zinc-950 border-t border-white/5 z-10">
      <div className="max-w-[1600px] mx-auto px-[16px] md:px-16 lg:px-24 4xl:px-0">
        
        <div className="mb-12 md:mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-3 block font-light">
            Worldwide Hubs
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-wide">
            Our Flagship Ateliers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ATELIERS.map((atelier, idx) => (
            <motion.div
              key={atelier.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-black p-6 rounded-2xl border border-white/5 flex flex-col justify-between gap-6 hover:border-white/10 transition-colors duration-300 shadow-md group"
            >
              <div>
                <span className="text-[12px] uppercase tracking-[0.25em] text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full inline-block mb-4">
                  {atelier.city}
                </span>
                <h3 className="text-lg font-medium text-white mb-3 group-hover:text-zinc-200 transition-colors">
                  {atelier.name}
                </h3>
                <p className="text-zinc-400 text-[14px] leading-relaxed font-light mb-4 flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                  <span>{atelier.address}</span>
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 flex flex-col gap-2.5 text-[14px] font-light text-zinc-400">
                <a href={`tel:${atelier.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                  <Phone className="w-3.5 h-3.5 text-zinc-600" />
                  <span>{atelier.phone}</span>
                </a>
                <a href={`mailto:${atelier.email}`} className="flex items-center gap-2 hover:text-white transition-colors duration-300 truncate">
                  <Mail className="w-3.5 h-3.5 text-zinc-600" />
                  <span>{atelier.email}</span>
                </a>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="w-3.5 h-3.5 text-zinc-600" />
                  <span>{atelier.hours}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
