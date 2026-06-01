"use client";

import { motion } from "framer-motion";
import { ServiceCategory } from "@/src/domain/service";
import Image from "next/image";
import { CTASection } from "@/src/components/organisms/CTASection";

interface ServicesPageProps {
  categories: ServiceCategory[];
}

export default function ServicesPageClient({ categories }: ServicesPageProps) {
  return (
    <main className="bg-background min-h-screen pt-32 pb-24 grain-overlay">
      {/* Editorial Header */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-24">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-[10px] uppercase tracking-[0.8em] text-primary/60 mb-6 block"
          >
            CATÁLOGO DE SERVICIOS PREMIUM
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.85] mb-12 uppercase tracking-tighter"
          >
            EL ESTILO <br /> <span className="text-primary italic font-serif text-3xl md:text-5xl lg:text-6xl lowercase">sin límites</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-lg md:text-xl text-white/70 max-w-2xl border-l border-primary/20 pl-8"
          >
            &quot;Explore nuestra selección exhaustiva de servicios diseñados para el caballero contemporáneo que no acepta compromisos en su imagen.&quot;
          </motion.p>
        </div>
      </section>

      {/* Categories & Services Loop */}
      <div className="space-y-32">
        {categories.map((category, catIndex) => (
          <section key={category.id} className="container mx-auto px-6 md:px-12 lg:px-20">
            {/* Category Title Overlay */}
            <div className="relative mb-16 overflow-hidden">
               <span className="absolute -top-6 -left-6 text-[10rem] font-display text-white/[0.02] select-none pointer-events-none uppercase">
                 {category.id}
               </span>
               <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-primary/10 pb-12">
                  <div className="max-w-xl">
                    <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-2 block">0{catIndex + 1}</span>
                    <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tighter text-white">{category.title}</h2>
                  </div>
                  <p className="font-serif italic text-base md:text-lg text-white/50 max-w-md md:text-right">
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
                  className="group relative bg-secondary/10 border border-primary/5 p-6 md:p-8 hover:border-primary/30 transition-all duration-500 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-video mb-8 overflow-hidden border border-primary/5">
                    <Image
                      src={`https://picsum.photos/seed/${service.slug}/800/450?grayscale`}
                      alt={service.title}
                      fill
                      className="object-cover contrast-110 brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-700" />
                    <div className="absolute bottom-4 right-4 bg-primary px-3 py-1 text-primary-foreground font-display text-lg">
                      {service.price}
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl md:text-2xl font-display group-hover:text-primary transition-colors text-white tracking-tight uppercase">{service.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {service.features?.map((f, i) => (
                        <span key={i} className="text-[9px] uppercase tracking-widest text-primary/80 font-bold flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-primary" />
                          {f}
                        </span>
                      ))}
                    </div>
                    <p className="font-sans text-sm text-white/60 leading-relaxed pt-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-primary/5 flex justify-between items-center">
                    <span className="font-serif text-[10px] italic text-white/40">{service.duration} de ritual</span>
                    <button className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 hover:tracking-[0.4em]">
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
      <CTASection />
    </main>
  );
}
