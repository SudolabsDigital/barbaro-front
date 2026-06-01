"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MembershipSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="membresia" className="relative py-24 lg:py-32 bg-background overflow-hidden grain-overlay border-t border-primary/5">
      
      {/* Decorative background text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-display text-white whitespace-nowrap uppercase">LEALTAD</span>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Narrative & Info */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.8em] text-primary/60 block">
                BENEFICIOS ELITE
              </span>
              <h2 className="text-4xl md:text-6xl font-display text-white uppercase tracking-tighter leading-none">
                RECOMPENSAMOS <br /> 
                <span className="text-primary italic font-serif lowercase">tu lealtad</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="font-serif italic text-xl md:text-2xl text-white/80 leading-snug max-w-xl">
                &quot;La constancia merece distinción. Únete a nuestro programa de fidelidad y eleva cada visita a un nivel superior.&quot;
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="space-y-2 border-l border-primary/20 pl-6">
                  <span className="font-display text-3xl text-primary block">8 = 1</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-white/50 font-bold">
                    8 cortes = 1 corte GRATIS
                  </p>
                </div>
                <div className="space-y-2 border-l border-primary/20 pl-6">
                  <span className="font-display text-3xl text-primary block">MARTES</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-white/50 font-bold">
                    Válido solo los días martes
                  </p>
                </div>
              </div>

              <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/30 pt-4">
                * Consulta términos y condiciones en nuestra página.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive 3D Card */}
          <div className="relative flex flex-col items-center justify-center order-1 lg:order-2 h-[400px]">
            <div 
              className="relative w-full max-w-[450px] aspect-[1.6/1] cursor-pointer perspective-1000 group"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-700 ease-in-out"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl border border-primary/10 bg-secondary/20">
                  <Image 
                    src="/membership-front.webp" 
                    alt="Membresía Estilo Bárbaro Portada" 
                    fill 
                    className="object-cover contrast-110"
                  />
                  {/* Glassmorphism effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl border border-primary/10 bg-secondary/20"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <Image 
                    src="/membership-back.webp" 
                    alt="Membresía Bárbaro Reverso" 
                    fill 
                    className="object-cover contrast-110"
                  />
                  {/* Hover visual cue to flip back */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                     <span className="text-[10px] uppercase tracking-[0.4em] text-white font-bold border border-white/20 px-4 py-2 bg-black/40 backdrop-blur-md">VOLTEAR</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Flip hint */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              className="mt-8 font-sans text-[10px] uppercase tracking-[0.6em] text-white flex items-center gap-4"
            >
              <span className="w-8 h-px bg-primary/30" />
              Haz click para voltear
              <span className="w-8 h-px bg-primary/30" />
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
