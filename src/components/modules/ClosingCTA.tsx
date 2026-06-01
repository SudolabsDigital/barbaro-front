"use client";

import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { MessageSquare, MapPin } from "lucide-react";
import Image from "next/image";
import { BARBARO_INFO } from "@/src/lib/constants";

interface ClosingCTAProps {
  title?: string;
  subtitle?: string;
}

export default function ClosingCTA({ 
  title = "La silla está lista. Solo falta tu autoridad.",
  subtitle = "No es solo un servicio, es tu momento de redefinición. Únete a Estilo Bárbaro."
}: ClosingCTAProps) {
  
  return (
    <section className="relative w-full py-32 lg:py-48 bg-background overflow-hidden border-t border-primary/10">
      
      {/* Background Image: The Empty Chair (Dramatic) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/barbaro-chair/1920/1080?grayscale" 
          alt="Santuario Estilo Bárbaro" 
          fill 
          className="object-cover opacity-20 contrast-125 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Tag */}
          <span className="font-sans text-[10px] uppercase tracking-[1em] text-primary/60 block">
            EL CIERRE DEL RITUAL
          </span>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-white leading-tight uppercase tracking-tighter">
            {title}
          </h2>

          {/* Subline */}
          <p className="font-serif italic text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            &quot;{subtitle}&quot;
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            {/* Main Action: WhatsApp -> Link to Contact Page */}
            <Link 
              href="/contacto"
              className="group relative px-12 py-6 bg-primary text-primary-foreground font-sans font-bold uppercase tracking-[0.4em] text-[11px] transition-all hover:bg-white hover:text-black hover:tracking-[0.5em] active:scale-95 shadow-2xl flex items-center gap-3 w-full sm:w-auto"
            >
              <MessageSquare size={18} />
              RESERVAR EN EL CLAN
              <div className="absolute -inset-2 border border-primary/10 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
            </Link>

            {/* Secondary Action: Location -> Link to map section/page */}
            <a 
              href="#contacto"
              className="group flex items-center gap-4 px-12 py-6 border border-white/10 text-white font-sans font-bold uppercase tracking-[0.4em] text-[11px] transition-all hover:border-primary hover:text-primary w-full sm:w-auto"
            >
              <MapPin size={18} />
              VER UBICACIÓN
            </a>
          </div>

          {/* Location Detail Sidenote */}
          <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/30 pt-10">
            Huancayo · El Tambo · {BARBARO_INFO.address.split(",")[0]}
          </p>

        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-primary/[0.03] blur-[150px] rounded-full pointer-events-none" />
      
    </section>
  );
}
