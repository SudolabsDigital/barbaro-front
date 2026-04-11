"use client";

import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageSquare, Share2 } from "lucide-react";

export default function ContactSection() {
  return (
    <footer id="contacto" className="relative bg-black pt-32 pb-12 overflow-hidden">
      {/* Decorative Grid - Fading out */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #df9336 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* 1. CONTACT MAIN BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
          
          {/* Left: The Invitation */}
          <div className="space-y-12">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.6em] text-primary mb-6 block">
                EL PRÓXIMO PASO
              </span>
              <h2 className="text-6xl md:text-8xl font-display leading-[0.85] text-white uppercase tracking-tighter">
                TU LUGAR <br /> 
                <span className="text-primary italic font-serif lowercase">en la silla</span>
              </h2>
            </div>
            
            <p className="font-serif italic text-xl md:text-2xl text-white/60 max-w-lg leading-relaxed">
              "La distinción no es un acto, es un hábito. Reserva tu ritual y permítenos elevar tu estándar."
            </p>

            <div className="pt-8">
              <button className="group relative px-12 py-6 bg-primary text-primary-foreground font-sans font-bold uppercase tracking-[0.4em] text-xs transition-all hover:bg-white hover:text-black hover:tracking-[0.5em] active:scale-95 shadow-2xl">
                RESERVAR AHORA
                <div className="absolute -inset-2 border border-primary/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
              </button>
            </div>
          </div>

          {/* Right: Technical Info (The Coordinate) */}
          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              
              {/* Info Item */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary/60">
                  <MapPin size={14} />
                  <span className="font-sans text-[10px] uppercase tracking-widest font-bold">Ubicación</span>
                </div>
                <p className="font-sans text-sm text-white/80 leading-relaxed">
                  Av. de la Tradición 1240<br />
                  Distrito Bárbaro, CP 1500<br />
                  Ciudad de México
                </p>
              </div>

              {/* Info Item */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary/60">
                  <Clock size={14} />
                  <span className="font-sans text-[10px] uppercase tracking-widest font-bold">Horarios</span>
                </div>
                <div className="font-sans text-sm text-white/80 space-y-1">
                  <p className="flex justify-between"><span>Lunes - Viernes:</span> <span className="text-white">09:00 - 21:00</span></p>
                  <p className="flex justify-between"><span>Sábados:</span> <span className="text-white">10:00 - 20:00</span></p>
                  <p className="flex justify-between text-white/40 italic"><span>Domingos:</span> <span>Cerrado</span></p>
                </div>
              </div>

              {/* Info Item */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary/60">
                  <Phone size={14} />
                  <span className="font-sans text-[10px] uppercase tracking-widest font-bold">Teléfono</span>
                </div>
                <p className="font-display text-xl text-white tracking-widest">
                  +52 (55) 8000 1234
                </p>
              </div>

              {/* Info Item */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary/60">
                  <Mail size={14} />
                  <span className="font-sans text-[10px] uppercase tracking-widest font-bold">Digital</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Link href="mailto:hola@barbaro.com" className="font-sans text-sm text-white/80 hover:text-primary transition-colors">
                    hola@barbaro.com
                  </Link>
                  <div className="flex gap-4 pt-2">
                    <Link href="#" className="p-2 border border-white/10 text-white/60 hover:text-primary hover:border-primary transition-all duration-300">
                      <MessageSquare size={16} />
                    </Link>
                    <Link href="#" className="p-2 border border-white/10 text-white/60 hover:text-primary hover:border-primary transition-all duration-300">
                      <Share2 size={16} />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 2. ARCHITECTURAL FOOTER */}
        <div className="relative pt-24 border-t border-white/5">
          {/* Massive Watermark Label */}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[18vw] font-display text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap">
            BÁRBARO
          </span>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div className="flex gap-8">
              {["Inicio", "Servicios", "Nosotros", "Contacto"].map((item) => (
                <Link key={item} href="#" className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/40 hover:text-primary transition-colors">
                  {item}
                </Link>
              ))}
            </div>
            
            <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/20 text-center md:text-right">
              © 2026 Bárbaro. El estilo que define al hombre. <br className="md:hidden" /> 
              Desarrollado con rigor por Sudolabs.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
