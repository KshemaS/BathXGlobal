"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  Send, 
  CheckCircle,
  Building
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Private Consultation",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", inquiryType: "Private Consultation", message: "" });
    }, 1500);
  };

  return (
    <section className="relative px-6 md:px-16 lg:px-24 4xl:px-0 py-12 max-w-[1600px] mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      
      {/* COLUMN 1: DYNAMIC INQUIRY FORM */}
      <div className="lg:col-span-7">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="bg-zinc-950/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none opacity-40" />

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form-fields"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-medium text-white mb-8 tracking-wide">
                  Submit Specification Inquiry
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Jean-Louis Architect"
                      className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-5 py-4 text-sm tracking-wide text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-colors duration-300 font-light focus:bg-zinc-900"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                      Corporate Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. design@atelier.com"
                      className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-5 py-4 text-sm tracking-wide text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-colors duration-300 font-light focus:bg-zinc-900"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="inquiryType" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                      Inquiry Intent
                    </label>
                    <div className="relative">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-5 py-4 text-sm tracking-wide text-white focus:border-amber-500 focus:outline-none transition-colors duration-300 font-light focus:bg-zinc-900 appearance-none cursor-pointer"
                      >
                        <option value="Private Consultation">Private Showroom Consultation</option>
                        <option value="Trade & Specification">Trade & Architect Specification</option>
                        <option value="Bespoke Design">Bespoke Finish Customization</option>
                        <option value="General Support">General Press & Support</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                      Project Details & Description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your design specifications, dimensions, finish requests, or timeline..."
                      rows={5}
                      className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-5 py-4 text-sm tracking-wide text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-colors duration-300 font-light focus:bg-zinc-900 resize-none leading-relaxed"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 mt-4 px-8 py-4.5 rounded-full border border-white/15 bg-white/5 text-zinc-200 hover:text-black hover:bg-white hover:border-white transition-all duration-300 text-xs uppercase tracking-[0.25em] font-medium shadow-lg active:scale-[0.98] cursor-pointer ${
                      isSubmitting ? "opacity-50 pointer-events-none" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <span>Processing Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Specification</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-medium text-white mb-4 tracking-wide leading-tight">
                  Inquiry Received
                </h2>
                <p className="text-zinc-400 font-light text-base leading-relaxed tracking-wide max-w-md mb-8">
                  Thank you for contacting our ateliers. A dedicated architectural consultant will review your design specifications and follow up within 24 business hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] font-light text-zinc-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 shadow-md active:scale-98 cursor-pointer"
                >
                  Submit Another Specification
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* COLUMN 2: DIRECT CONNECTS INFO */}
      <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="flex flex-col gap-6"
        >
          <div className="bg-zinc-950/40 p-8 rounded-3xl border border-white/5 flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold mb-1 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Direct Communication</span>
            </h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              For immediate global trade assistance or standard catalogue requests, connect with our principal desks:
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a href="mailto:specifications@bathxglobal.com" className="text-base text-zinc-200 hover:text-white font-light flex items-center gap-2 group transition-colors duration-300">
                <span>specifications@bathxglobal.com</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:ateliers@bathxglobal.com" className="text-base text-zinc-200 hover:text-white font-light flex items-center gap-2 group transition-colors duration-300">
                <span>ateliers@bathxglobal.com</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="bg-zinc-950/40 p-8 rounded-3xl border border-white/5 flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold mb-1 flex items-center gap-2">
              <Building className="w-4 h-4" />
              <span>Corporate Head Office</span>
            </h3>
            <p className="text-zinc-200 text-sm font-light leading-relaxed">
              <span className="block text-white font-semibold">BathX Corporate HQ</span>
              12 Via della Spiga, Quadrilatero della Moda,<br />
              20121 Milano MI, Italy
            </p>
            <div className="flex flex-col gap-1 mt-2 text-zinc-400 text-xs font-light">
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                <span>+39 02 89045612</span>
              </span>
              <span className="flex items-center gap-2 mt-1">
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                <span>Mon – Fri: 09:00 – 18:00 (GMT+1)</span>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-amber-500/5 p-8 rounded-3xl border border-amber-500/10"
        >
          <h4 className="text-xs uppercase tracking-[0.3em] text-amber-400 font-bold mb-2">Architectural Spec Kit</h4>
          <p className="text-zinc-400 text-xs font-light leading-relaxed">
            Registered professionals gain instant access to download BIM files, dynamic Revit blocks, installation metrics, and high-fidelity material mapping textures.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
