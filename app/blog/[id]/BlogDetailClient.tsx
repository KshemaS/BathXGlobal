"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ChevronLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Copy, 
  Check, 
  MoveUpRight 
} from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Footer from "@/components/Footer";
import { BlogPost } from "../blogData";

interface BlogDetailClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function BlogDetailClient({ post, relatedPosts }: BlogDetailClientProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <main className="bg-black text-white select-none overflow-x-clip relative min-h-screen font-sans">
        
        {/* GOLD/METALLIC MESH GLOW ACCENTS (Visual brand signature styling) */}
        <div className="absolute top-[10vh] -left-[10vw] w-[45vw] h-[45vw] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="absolute top-[60vh] -right-[10vw] w-[50vw] h-[50vw] bg-zinc-500/5 rounded-full blur-[180px] pointer-events-none z-0" />

        {/* HERO SECTION WITH BACKGROUND IMAGE */}
        <section className="relative w-full h-[70vh] min-h-[500px] flex items-end overflow-hidden z-10">
          {/* Background Image with elegant darkness brightness */}
          <div className="absolute inset-0 z-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
            {/* Cinematic Gradients for premium blending and text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/60 z-10" />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>

          {/* Back to Editorial Button */}
          <div className="absolute top-28 left-6 md:left-16 lg:left-24 z-30">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-zinc-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 text-xs uppercase tracking-[0.2em] font-light shadow-lg cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Editorial</span>
            </Link>
          </div>

          {/* CONTENT INNER WRAPPER */}
          <div className="relative w-full max-w-[1600px] mx-auto px-[16px] md:px-16 lg:px-24 4xl:px-0 pb-16 z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease }}
              className="max-w-4xl"
            >
              {/* Category Pill */}
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] uppercase tracking-[0.3em] font-medium text-amber-400 mb-6 shadow-md">
                {post.category}
              </span>

              {/* Page Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-white mb-8">
                {post.title}
              </h1>

              {/* Author & Stats Card */}
              <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-4 border-t border-white/10 max-w-2xl">
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-amber-500/30 bg-amber-500/5 flex items-center justify-center text-xs font-semibold text-amber-400 shadow-inner">
                    {post.author.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{post.author.name}</div>
                    <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-light">{post.author.role}</div>
                  </div>
                </div>

                {/* Vertical Separator */}
                <div className="hidden sm:block w-[1px] h-8 bg-white/10" />

                {/* Date */}
                <div className="flex items-center gap-2 text-zinc-300 text-xs uppercase tracking-wider font-light">
                  <Calendar className="w-4 h-4 text-zinc-500" />
                  <span>{post.date}</span>
                </div>

                {/* Read Time */}
                <div className="flex items-center gap-2 text-zinc-300 text-xs uppercase tracking-wider font-light">
                  <Clock className="w-4 h-4 text-zinc-500" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EDITORIAL CONTENT SECTION */}
        <section className="relative px-[16px] md:px-16 lg:px-24 4xl:px-0 py-16 md:py-24 max-w-[1600px] mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* ARTICLE BODY */}
          <div className="lg:col-span-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-invert prose-amber max-w-none"
            >
              {post.content.map((element, idx) => {
                if (element.type === "paragraph") {
                  // Custom Dropped Capital Letter styling for the very first paragraph
                  const isFirstParagraph = idx === 0;
                  if (isFirstParagraph) {
                    const firstLetter = element.text.charAt(0);
                    const remainingText = element.text.slice(1);
                    return (
                      <p key={idx} className="text-zinc-300 font-light text-base md:text-lg leading-relaxed tracking-wide mb-8">
                        <span className="text-5xl md:text-6xl font-medium font-serif float-left mr-3.5 mt-1 text-amber-400 line-height-none select-none">
                          {firstLetter}
                        </span>
                        {remainingText}
                      </p>
                    );
                  }
                  return (
                    <p key={idx} className="text-zinc-300 font-light text-base md:text-lg leading-relaxed tracking-wide mb-8">
                      {element.text}
                    </p>
                  );
                }

                if (element.type === "heading") {
                  const HeadingTag = element.level === 2 ? "h2" : "h3";
                  const classStyle = element.level === 2 
                    ? "text-2xl md:text-3xl font-medium text-white tracking-wide mt-12 mb-6 font-sans border-b border-white/5 pb-3"
                    : "text-xl md:text-2xl font-medium text-white tracking-wide mt-10 mb-4 font-sans";
                  return (
                    <HeadingTag key={idx} className={classStyle}>
                      {element.text}
                    </HeadingTag>
                  );
                }

                if (element.type === "quote") {
                  return (
                    <blockquote 
                      key={idx} 
                      className="my-10 pl-6 md:pl-8 border-l-2 border-amber-500/60 py-2 relative bg-white/2 backdrop-blur-sm rounded-r-2xl pr-6 shadow-md"
                    >
                      <p className="text-xl md:text-2xl italic font-light leading-relaxed text-zinc-100 mb-3 tracking-wide">
                        "{element.text}"
                      </p>
                      {element.author && (
                        <cite className="block text-xs uppercase tracking-[0.25em] font-medium text-amber-400 not-italic">
                          — {element.author}
                        </cite>
                      )}
                    </blockquote>
                  );
                }

                if (element.type === "image") {
                  return (
                    <figure key={idx} className="my-12">
                      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl">
                        <Image
                          src={element.imageSrc}
                          alt={element.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {element.caption && (
                        <figcaption className="mt-4 text-center text-xs uppercase tracking-widest text-zinc-500 font-light">
                          {element.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }

                return null;
              })}
            </motion.div>
          </div>

          {/* SIDEBAR SHARE & INFO */}
          <div className="lg:col-span-4 lg:pl-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="sticky top-32 flex flex-col gap-8 bg-zinc-950/60 backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-xl"
            >
              <div>
                <h4 className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-amber-500" />
                  <span>Share This Article</span>
                </h4>
                
                <div className="flex flex-col gap-3">
                  {/* Copy Link Button */}
                  <button 
                    onClick={handleCopyLink}
                    className="w-full flex items-center justify-between px-5 py-3.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 text-xs uppercase tracking-[0.15em] font-light cursor-pointer active:scale-98"
                    id="copy-link-btn"
                  >
                    <span>{copied ? "Link Copied!" : "Copy Link"}</span>
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>

                  {/* Social Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 cursor-pointer"
                      title="Share on X"
                      id="share-twitter-btn"
                    >
                      <FaTwitter className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 cursor-pointer"
                      title="Share on LinkedIn"
                      id="share-linkedin-btn"
                    >
                      <FaLinkedinIn className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 cursor-pointer"
                      title="Share on Facebook"
                      id="share-facebook-btn"
                    >
                      <FaFacebookF className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Brand Spec Info */}
              <div className="border-t border-white/10 pt-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-semibold mb-2 block">BathX Atelier</span>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  You are reading the BathX Editorial. We write architectural spatial essays, craft journals, and design perspectives curated for premium wellness suites.
                </p>
              </div>
            </motion.div>
          </div>

        </section>

        {/* RELATED READS SECTION */}
        <section className="relative py-20 lg:py-28 bg-zinc-950 border-t border-white/5 z-10">
          <div className="max-w-[1600px] mx-auto px-[16px] md:px-16 lg:px-24 4xl:px-0">
            
            {/* Section Header */}
            <div className="mb-12 md:mb-16">
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-3 block font-light">
                Extended Reading
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-wide">
                Related Articles
              </h2>
            </div>

            {/* Related Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, idx) => (
                <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id} className="flex flex-col group">
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="flex flex-col h-full cursor-pointer"
                  >
                    {/* Image Aspect ratio frame */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-lg">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-103 brightness-[0.85] group-hover:brightness-[0.95]"
                      />
                      
                      {/* Corner Category */}
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-[0.25em] font-medium text-white shadow-md">
                        {relatedPost.category}
                      </div>
                    </div>

                    {/* Stats details */}
                    <div className="flex items-center gap-4 mt-5 mb-2 text-[10px] uppercase tracking-[0.15em] text-zinc-500 font-light">
                      <span>{relatedPost.date}</span>
                    </div>

                    {/* Post Title */}
                    <h3 className="text-lg md:text-xl font-medium text-white mb-2 tracking-wide leading-snug group-hover:text-zinc-200 transition-colors duration-300">
                      {relatedPost.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-zinc-400 font-light text-sm leading-relaxed tracking-wide line-clamp-2 mb-4">
                      {relatedPost.excerpt}
                    </p>

                    {/* Read trigger link */}
                    <div className="mt-auto flex items-center gap-1 text-xs uppercase tracking-[0.25em] font-light text-zinc-300 group-hover:text-white transition-colors duration-300">
                      <span>Read Article</span>
                      <MoveUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                  </motion.article>
                </Link>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
