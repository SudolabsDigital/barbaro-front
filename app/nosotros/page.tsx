"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen pt-32 pb-24 overflow-hidden">
      
      {/* 1. HERO EDITORIAL */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-32">
        <div className="relative w-full aspect-[21/9] overflow-hidden mb-16 border border-white/5">
          <Image 
            src="/hero-barbaro.webp" 
            alt="Interior de Bárbaro" 
            fill 
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-12 left-12">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display text-white leading-none"
            >
              EL CÓDIGO <br /> <span className="text-primary italic font-serif">bárbaro</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* 2. MANIFIESTO (TIPOGRAFÍA) */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-40 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.6em] text-primary">NUESTROS VALORES</span>
          <p className="font-serif italic text-3xl md:text-5xl lg:text-6xl text-white/90 leading-tight">
            "Creemos en la elegancia como una forma de respeto, en la tradición como nuestra brújula y en la perfección como nuestra única medida."
          </p>
          <div className="w-24 h-[1px] bg-primary/40 mx-auto pt-8" />
        </div>
      </section>

      {/* 3. FILOSOFÍA (Doble Columna) */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square border border-white/10 p-4">
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/service-standard.webp" 
                alt="El Arte de la Barbería" 
                fill 
                className="object-cover grayscale hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-r border-b border-primary/20 pointer-events-none" />
          </div>
          
          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-display text-white uppercase tracking-tighter">EL ARTE DE LA <br /> PACIENCIA</h2>
            <p className="font-sans text-lg text-white/70 leading-relaxed max-w-xl">
              En un mundo que corre, nosotros nos detenemos. Cada servicio en Bárbaro es un recordatorio de que la verdadera excelencia requiere tiempo, atención y una dedicación obsesiva por el detalle.
            </p>
            <p className="font-sans text-lg text-white/70 leading-relaxed max-w-xl">
              Nuestros barberos no son solo técnicos; son artesanos de la imagen que entienden la responsabilidad de llevar una corona.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 mt-40 border-t border-white/5 pt-24 text-center">
         <h2 className="text-4xl md:text-6xl font-display mb-12 uppercase tracking-tighter text-white">ÚNETE AL <span className="text-primary italic lowercase">círculo</span></h2>
         <Link 
            href="/" 
            className="inline-block px-12 py-5 bg-primary text-primary-foreground font-sans text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-accent transition-colors"
          >
            RESERVAR EXPERIENCIA
          </Link>
      </section>

    </main>
  );
}
