"use client";

import { motion } from "framer-motion";
import { ServiceCategory } from "@/src/domain/service";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ServicesPageProps {
  categories: ServiceCategory[];
}

export default function ServicesPageClient({ categories }: ServicesPageProps) {
  return (
    <main className="bg-black min-h-screen pt-32 pb-24">
      {/* Editorial Header */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-24">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-[10px] uppercase tracking-[0.6em] text-primary mb-6 block"
          >
            CATÁLOGO COMPLETO DE RITUALES
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] mb-12"
          >
            EL ESTILO <br /> <span className="text-primary italic font-serif text-4xl md:text-6xl lg:text-7xl lowercase">sin límites</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl text-white/70 max-w-2xl border-l border-primary/20 pl-8"
          >
            "Explore nuestra selección exhaustiva de servicios diseñados para el caballero contemporáneo que no acepta compromisos en su imagen."
          </motion.p>
        </div>
      </section>

      {/* Categories & Services Loop */}
      <div className="space-y-32">
        {categories.map((category, catIndex) => (
          <section key={category.id} className="container mx-auto px-6 md:px-12 lg:px-20">
            {/* Category Title Overlay */}
            <div className="relative mb-16 overflow-hidden">
               <span className="absolute -top-10 -left-10 text-[12rem] font-display text-white/[0.03] select-none pointer-events-none uppercase">
                 {category.id}
               </span>
               <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
                  <div className="max-w-xl">
                    <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-2 block">0{catIndex + 1}</span>
                    <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter text-white">{category.title}</h2>
                  </div>
                  <p className="font-serif italic text-lg md:text-xl text-white/60 max-w-md md:text-right">
                    {category.description}
                  </p>
               </div>
            </div>

            {/* Services Grid for this category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-secondary/10 border border-white/10 p-6 md:p-8 hover:border-primary/40 transition-all duration-500 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-video mb-8 overflow-hidden border border-white/5">
                    <Image
                      src="/service-standard.webp"
                      alt={service.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700" />
                    <div className="absolute bottom-4 right-4 bg-primary px-4 py-1 text-primary-foreground font-display text-xl">
                      {service.price}
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-display group-hover:text-primary transition-colors text-white">{service.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {service.features?.map((f, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest text-primary font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {f}
                        </span>
                      ))}
                    </div>
                    <p className="font-sans text-sm text-white/70 leading-relaxed pt-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-white/40 italic">{service.duration} de ritual</span>
                    <button className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Reservar →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 mt-40 border-t border-white/5 pt-24 text-center">
         <h2 className="text-4xl md:text-6xl font-display mb-12">¿LISTO PARA TU <span className="text-primary italic">ritual</span>?</h2>
         <Link 
            href="/" 
            className="inline-block px-12 py-5 bg-primary text-primary-foreground font-sans text-xs uppercase tracking-[0.4em] font-bold hover:bg-accent transition-colors"
          >
            VOLVER AL INICIO
          </Link>
      </section>
    </main>
  );
}
