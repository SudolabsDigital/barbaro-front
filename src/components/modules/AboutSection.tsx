"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/src/lib/utils";
import Link from "next/link";

const STORY_BLOCKS = [
  {
    tag: "EL LEGADO",
    title: "Nuestra Autoridad",
    content: "Más que números, son historias de confianza. Hemos perfeccionado el arte de la barbería clásica a través de miles de rituales que definen nuestra posición como referentes del sector.",
    metrics: [
      { label: "Servicios Realizados", value: "+15K" },
      { label: "Maestros Artesanos", value: "12" },
      { label: "Años de Tradición", value: "08" },
    ]
  },
  {
    tag: "EL CLAN",
    title: "Artesanos de la Imagen",
    content: "No somos simples barberos; somos guardianes de una tradición centenaria. Cada miembro de nuestro equipo es un especialista formado en las técnicas más exigentes para garantizar que cada corte sea una obra de autor.",
  },
  {
    tag: "EL COMPROMISO",
    title: "Nuestra Promesa",
    content: "En Bárbaro, el resultado es innegociable. Nuestra promesa es brindarte no solo un servicio impecable, sino un santuario donde la distinción y la confianza se encuentran en cada detalle del ritual.",
  },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      ref={containerRef} 
      id="nosotros" 
      className="relative h-[350vh] bg-black"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #df9336 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-[0.25fr_0.75fr] gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Fixed Minimalist Anchor (25%) */}
          <div className="relative h-full flex flex-col justify-center border-r border-white/5 pr-12">
            <motion.div
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
              }}
            >
              <span className="font-sans text-[10px] uppercase tracking-[0.6em] text-primary/60 mb-6 block">
                FILOSOFÍA
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display leading-[0.9] text-white uppercase tracking-tighter">
                EL CÓDIGO <br /> 
                <span className="text-primary italic font-serif lowercase">bárbaro</span>
              </h2>
            </motion.div>
          </div>

          {/* Right Column: High Hierarchy Content (75%) */}
          <div className="relative h-[500px] flex items-center">
            {STORY_BLOCKS.map((block, index) => {
              const start = index / STORY_BLOCKS.length;
              const end = (index + 1) / STORY_BLOCKS.length;
              
              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.1, end - 0.1, end],
                [0, 1, 1, 0]
              );
              
              const x = useTransform(
                scrollYProgress,
                [start, start + 0.1, end - 0.1, end],
                [50, 0, 0, -50]
              );

              return (
                <motion.div
                  key={index}
                  style={{ opacity, x }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-6 mb-8">
                    <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary px-3 py-1 border border-primary/20 bg-primary/5">
                      {block.tag}
                    </span>
                    <div className="flex-1 h-[1px] bg-white/10" />
                  </div>

                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-8 tracking-tight">
                    {block.title}
                  </h3>
                  
                  <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-white/80 leading-snug max-w-4xl mb-12">
                    "{block.content}"
                  </p>

                  {/* Dynamic Metrics Visual for the first block */}
                  {block.metrics && (
                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
                      {block.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="space-y-2">
                          <span className="font-display text-4xl md:text-5xl text-primary block">{m.value}</span>
                          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-muted-foreground">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
