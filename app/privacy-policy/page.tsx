"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="bg-black text-white overflow-x-hidden relative min-h-screen font-sans pt-32 pb-24">
        
        {/* GOLD/METALLIC MESH GLOW ACCENTS (Sleek Modern Luxury Visuals) */}
        <div className="absolute top-[10vh] -left-[10vw] w-[45vw] h-[45vw] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="absolute top-[40vh] -right-[10vw] w-[50vw] h-[50vw] bg-zinc-500/5 rounded-full blur-[180px] pointer-events-none z-0" />

        <div className="relative w-full max-w-[1600px] mx-auto px-[16px] md:px-16 lg:px-24 4xl:px-0 z-10">
          <div className="max-w-4xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-white/10 pb-8 mb-12"
            >
            <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
              Privacy Policy
            </h1>
            <p className="text-zinc-400 text-sm tracking-widest uppercase">
              Last updated: July 2026
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="prose prose-invert max-w-none text-zinc-300 font-light leading-relaxed tracking-wide space-y-8"
          >
            <p>
              At <span className="text-white font-medium">BathX</span>, we highly value your privacy. This privacy policy outlines how we handle the personal information you provide to us when using our website. We have crafted this Privacy Policy to transparently communicate our data collection and usage practices.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-normal text-white tracking-wide border-l-2 border-amber-500/60 pl-4 mt-8">
                Protection of Your Information
              </h2>
              <p className="pl-5 text-zinc-300">
                BathX is committed to safeguarding the confidentiality and integrity of your personally identifiable information. We do not collect your personal information without your explicit consent. After obtaining your consent, you may voluntarily provide us with personal information such as your name, mobile number, demographic details, video recordings, address, or email identification address, which may be necessary for our business operations and future communications with you.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-normal text-white tracking-wide border-l-2 border-amber-500/60 pl-4 mt-8">
                Automatic Data Collection
              </h2>
              <p className="pl-5 text-zinc-300">
                When you access our websites or apps, we automatically collect and analyze certain information. This includes unique browser identifiers, IP addresses, browser and operating system details, device identifiers, geolocation data, and other device-specific information. Additionally, we gather information about your Internet connection and interactions with our websites and apps.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-normal text-white tracking-wide border-l-2 border-amber-500/60 pl-4 mt-8">
                Purpose of Information Collection
              </h2>
              <p className="pl-5 text-zinc-300">
                We collect information for various purposes, including but not limited to:
              </p>
              <ul className="list-disc list-inside pl-8 space-y-3 text-zinc-300 marker:text-amber-500/60">
                <li>Facilitating the purchase of our products or the provision of services you have requested.</li>
                <li>Sharing information with trusted entities working on our behalf under strict confidentiality agreements, with no independent right to further share or disseminate this information.</li>
                <li>Responding to subpoenas, court orders, legal processes, or to assert our legal rights or defend against legal claims.</li>
                <li>Sharing information to investigate, prevent, or take action against illegal activities, suspected fraud, potential threats to the safety of individuals, or as required by law.</li>
                <li>Protecting and enforcing BathX&apos;s rights, usage terms, intellectual or physical property, or the safety of BathX or associated parties.</li>
                <li>Contacting you for market research purposes through email, phone, fax, or mail. We may use this information to tailor our website content according to your interests.</li>
                <li>Conducting research and analysis, including surveys.</li>
              </ul>
            </div>

            <p className="pt-4 border-t border-white/5 text-zinc-400 text-sm">
              We retain information for as long as it remains relevant to the aforementioned purposes. Data may persist in backup copies for business continuity purposes for additional time. For any of the purposes mentioned above, we may share information with other members of our corporate family and third-party service providers who perform services on our behalf.
            </p>
          </motion.div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
