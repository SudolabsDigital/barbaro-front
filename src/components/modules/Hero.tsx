"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={cn("relative h-[100svh] w-full overflow-hidden bg-background grain-overlay", className)}>
      
      {/* Cinematic Background with Ken Burns Effect */}
      {/* Optimized for mobile: uses object-position to prioritize the right/focal part of the ritual image */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero-barbaro.webp"
          alt="Ritual Bárbaro"
          fill
          priority
          className="object-cover object-[75%_center] md:object-center grayscale contrast-125 brightness-[0.4]"
          sizes="100vw"
        />
        {/* Mobile-Specific Gradient Overlay: Softens the bottom for branding clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent md:hidden" />
      </motion.div>

      {/* Layered Text: Tradition Background (Hidden or reduced on very small screens to avoid clutter) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 0.015, letterSpacing: "0.15em" }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-[25vw] md:text-[20vw] font-display text-white select-none whitespace-nowrap rotate-90 md:rotate-0 opacity-10 md:opacity-100"
        >
          TRADICIÓN
        </motion.h2>
      </div>

      {/* Main Content: Branding & Signature */}
      <div className="relative z-20 h-full w-full container mx-auto flex flex-col items-center justify-center px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="relative w-full max-w-[280px] sm:max-w-md md:max-w-2xl lg:max-w-3xl aspect-[3/1] mb-8 md:mb-12"
        >
          <Image
            src="/logo-hero-new.webp"
            alt="Bárbaro Signature"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Slogan with Editorial Treatment */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className="w-px h-8 md:h-10 bg-primary/30" />
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary leading-tight max-w-[280px] sm:max-w-md md:max-w-2xl px-4">
            "Donde el estilo alcanza la elegancia"
          </p>
        </motion.div>
      </div>

      {/* Bottom Status Accents - Simplified for Mobile */}
      <div className="absolute bottom-8 left-6 md:left-10 z-30 flex flex-col gap-2">
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] md:tracking-[0.8em] text-primary/40">SANTUARIO</span>
        <div className="w-8 md:w-12 h-px bg-primary/20" />
      </div>

      <div className="absolute bottom-8 right-6 md:right-10 z-30 flex items-center gap-4 md:gap-6">
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-muted-foreground/60 rotate-90 origin-right">EST. 2026</span>
        <div className="w-px h-12 md:h-16 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 z-15 bg-radial-gradient from-transparent via-background/40 to-background pointer-events-none" />

    </section>
  );
}
