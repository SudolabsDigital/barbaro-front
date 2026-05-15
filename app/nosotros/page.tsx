"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen pt-32 pb-24 overflow-hidden grain-overlay">
      
      {/* 1. HERO EDITORIAL */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-32">
        <div className="relative w-full aspect-[21/9] overflow-hidden mb-16 border border-primary/10">
          <Image 
            src="https://picsum.photos/seed/barbaro-about/1920/1080?grayscale" 
            alt="Interior de Bárbaro" 
            fill 
            className="object-cover contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-none uppercase tracking-tighter"
            >
              EL CÓDIGO <br /> <span className="text-primary italic font-serif lowercase">bárbaro</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* 2. MANIFIESTO (TIPOGRAFÍA) */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-40 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <span className="font-sans text-[10px] uppercase tracking-[0.8em] text-primary/60">NUESTROS VALORES</span>
          <p className="font-serif italic text-2xl md:text-4xl lg:text-5xl text-white/90 leading-tight">
            "Creemos en la elegancia como una forma de respeto, en la tradición como nuestra brújula y en la perfección como nuestra única medida."
          </p>
          <div className="w-16 h-px bg-primary/30 mx-auto mt-12" />
        </div>
      </section>

      {/* 3. FILOSOFÍA (Doble Columna) */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-square border border-primary/10 p-4 bg-secondary/5">
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/barbaro-craft/1000/1000?grayscale" 
                alt="El Arte de la Barbería" 
                fill 
                className="object-cover contrast-110 hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
            {/* Aesthetic Corner Acent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-primary/30 pointer-events-none" />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white uppercase tracking-tighter leading-none">EL ARTE DE LA <br /> PACIENCIA</h2>
            <div className="w-12 h-px bg-primary/40" />
            <div className="space-y-6">
              <p className="font-serif italic text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
                En un mundo que corre, nosotros nos detenemos. Cada servicio en Bárbaro es un recordatorio de que la verdadera excelencia requiere tiempo, atención y una dedicación obsesiva por el detalle.
              </p>
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-white/50 leading-relaxed max-w-xl">
                Nuestros barberos no son solo técnicos; son artesanos de la imagen que entienden la responsabilidad de llevar una corona.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 mt-40 border-t border-primary/10 pt-24 text-center relative">
         {/* Background Watermark */}
         <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap">
            SANTUARIO
         </span>
         
         <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display mb-12 uppercase tracking-tighter text-white">ÚNETE AL <span className="text-primary italic lowercase">círculo</span></h2>
            <Link 
              href="/" 
              className="inline-block px-10 py-5 bg-primary text-primary-foreground font-sans text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-accent transition-all duration-500 hover:-translate-y-1 active:translate-y-0"
            >
              RESERVAR EXPERIENCIA
            </Link>
         </div>
      </section>

    </main>
  );
}
