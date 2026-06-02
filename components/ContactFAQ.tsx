"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

// Interactive Brand FAQ dataset
const FAQS = [
  {
    id: 1,
    question: "How do I book a private showroom consultation?",
    answer: "You can easily schedule a private, one-on-one session by selecting the 'Private Consultation' option in our inquiry form or contacting your local atelier directly by phone or email. Our team will coordinate a dedicated time slot to walk you through our collection displays.",
  },
  {
    id: 2,
    question: "Do you supply CAD drawings and 3D architectural assets?",
    answer: "Yes. We offer fully detailed 2D CAD blocks, 3D Revit/BIM models, and high-fidelity textures for all our product lines. Registered trade partners can access these directly from our portal or request the technical specification kit through our specifiers inquiry option.",
  },
  {
    id: 3,
    question: "What is your standard production lead time for bespoke finishes?",
    answer: "While we keep standard finishes (such as electroplated chrome and matte black) in stock, custom physical vapor deposition (PVD) finishes (like brushed gold, copper, and champagne) carry a meticulous hand-finishing lead time of 6 to 8 weeks in our Milan atelier.",
  },
  {
    id: 4,
    question: "Do you offer international shipping and on-site specification support?",
    answer: "Absolutely. BathX operates a global logistics network handling secure container delivery directly to your project site. For master developments and commercial boutique hotels, our site engineering consultants are available for physical installation oversight.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContactFAQ() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="relative px-[16px] md:px-16 lg:px-24 py-20 lg:py-28 bg-black z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-3 block font-light">
            Design Support
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-wide">
            Frequently Asked Inquiries
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div 
                key={faq.id}
                className="rounded-2xl border border-white/5 bg-zinc-950/40 overflow-hidden transition-all duration-300"
              >
                {/* Header trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer select-none"
                >
                  <span className="text-base md:text-lg font-medium text-white tracking-wide pr-6 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`} 
                  />
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                    >
                      <div className="px-[16px] md:px-8 pb-8 pt-0 border-t border-white/5 text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
