"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/src/lib/utils";

const STORY_BLOCKS = [
  {
    tag: "I. LEGADO",
    title: "Herencia",
    content: "Rescatamos los rituales de la barbería clásica para ofrecer una experiencia premium en Huancayo.",
    metrics: [{ label: "RITUALES", value: "15K" }]
  },
  {
    tag: "II. EL CLAN",
    title: "Maestros",
    content: "Esculpimos su versión más imponente con precisión de cirujano.",
    metrics: [{ label: "ARTESANOS", value: "12" }]
  },
  {
    tag: "III. SANTUARIO",
    title: "Refugio",
    content: "Un santuario donde el tiempo se detiene y la distinción se encuentra con la calma.",
    metrics: [{ label: "AÑOS", value: "08" }]
  },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Hook para el progreso del scroll en esta sección
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Movimiento horizontal para la columna de narrativa
  const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  return (
    <section 
      ref={containerRef} 
      id="nosotros" 
      className="relative h-[300vh] bg-background grain-overlay border-t border-primary/5"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Marca de agua de fondo (Aesthetic) */}
        <div className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none flex items-center justify-center">
          <span className="text-[40vw] font-display text-white select-none whitespace-nowrap">BÁRBARO</span>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12 items-center relative z-10">
          
          {/* Ancla narrativa fija (Izquierda) */}
          <div className="flex flex-col justify-center border-l-2 border-primary/20 pl-8 md:pl-12">
            <motion.div
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.5, 1, 1, 0.5]),
              }}
            >
              <span className="font-sans text-[9px] uppercase tracking-[0.8em] text-primary/50 mb-6 block">
                FILOSOFÍA
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.85] text-white uppercase tracking-tighter">
                EL <br /> 
                CÓDIGO <br />
                <span className="text-primary italic font-serif lowercase block mt-2">bárbaro</span>
              </h2>
            </motion.div>
          </div>

          {/* Carrusel horizontal de capítulos (Derecha) */}
          <div className="relative overflow-hidden h-[450px]">
            <motion.div 
              style={{ x: xTranslate }}
              className="flex h-full"
            >
              {STORY_BLOCKS.map((block, index) => (
                <div 
                  key={index}
                  className="min-w-full lg:min-w-[100%] flex flex-col justify-center pr-12 lg:pr-24"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-primary bg-primary/5 px-4 py-2 border border-primary/10">
                      {block.tag}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>

                  <h3 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-tight uppercase leading-none">
                    {block.title}
                  </h3>
                  
                  <p className="font-serif italic text-xl md:text-3xl text-white/80 leading-snug max-w-xl mb-12 border-l-4 border-primary/20 pl-8">
                    &quot;{block.content}&quot;
                  </p>

                  {/* Métricas con estilo vintage */}
                  {block.metrics && (
                    <div className="flex gap-10 pt-10 border-t border-primary/10 w-fit">
                      {block.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex flex-col gap-1">
                          <span className="font-display text-3xl md:text-4xl text-primary">{m.value}</span>
                          <span className="font-sans text-[8px] uppercase tracking-[0.5em] text-muted-foreground font-bold">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Indicador de progreso horizontal */}
      <div className="absolute bottom-10 right-20 left-20 h-px bg-white/5 hidden lg:block z-50">
        <motion.div 
          style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
          className="h-full bg-primary/40 shadow-[0_0_10px_rgba(223,147,54,0.3)]"
        />
        <div className="absolute -top-6 left-0 text-[7px] uppercase tracking-widest text-primary/40">
          EVOLUCIÓN DEL CÓDIGO
        </div>
      </div>

    </section>
  );
}
