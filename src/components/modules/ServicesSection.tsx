"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceCategory } from "@/src/domain/service";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface ServicesSectionProps {
  categories: ServiceCategory[];
}

export default function ServicesSection({ categories = [] }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string | undefined>(categories?.[0]?.id);

  if (!categories || categories.length === 0) return null;

  const activeServices = categories.find(c => c.id === activeCategory)?.services || [];
  const activeCategoryInfo = categories.find(c => c.id === activeCategory);

  return (
    <section id="servicios" className="relative bg-background py-24 px-6 md:px-12 lg:px-20 overflow-hidden grain-overlay border-y border-primary/5">
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* SECTION HEADER - High Contrast & Authority */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl border-l border-primary/20 pl-8">
            <h2 className="text-4xl md:text-6xl font-display leading-tight mb-6 text-white uppercase tracking-tighter">
              EL RITUAL <br /> <span className="text-primary italic font-serif text-2xl md:text-4xl lowercase block mt-2">de servicios</span>
            </h2>
            <p className="font-serif italic text-lg text-white/50 max-w-xl">
              "{activeCategoryInfo?.description}"
            </p>
          </div>
          <Link 
            href="/servicios" 
            className="group flex items-center gap-4 font-sans text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-primary transition-all duration-500 pb-2 border-b border-white/10 hover:border-primary"
          >
            CATÁLOGO COMPLETO →
          </Link>
        </div>

        {/* ROW 1: CATEGORIES - Refined Contrast & Readability */}
        <div className="mb-12 border-b border-primary/10 pb-2 overflow-x-auto no-scrollbar">
          <div className="flex gap-10 md:gap-14 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "font-sans text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.5em] transition-all duration-500 relative py-4",
                  activeCategory === category.id 
                    ? "text-primary font-bold" 
                    : "text-white/30 hover:text-white"
                )}
              >
                {category.title}
                {activeCategory === category.id && (
                  <motion.div 
                    layoutId="activeCategoryIndicator"
                    className="absolute -bottom-px left-0 w-full h-px bg-primary z-20 shadow-[0_0_8px_rgba(223,147,54,0.4)]" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ROW 2: SERVICES - Horizontal Cards (2 Columns) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {activeServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-secondary/5 border border-primary/5 hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[260px]"
              >
                {/* Image Area - Left (40%) */}
                <div className="relative w-full sm:w-2/5 h-[200px] sm:h-full overflow-hidden border-r border-primary/5">
                  <Image
                    src={`https://picsum.photos/seed/${service.slug}/600/600?grayscale`}
                    alt={service.title}
                    fill
                    className="object-cover contrast-110 brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content Area - Right (60%) */}
                <div className="flex-1 p-8 flex flex-col justify-center space-y-4">
                  
                  {/* Title & Price - High Hierarchy */}
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl md:text-2xl font-display text-white group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <span className="font-display text-lg md:text-xl text-primary whitespace-nowrap bg-primary/5 px-3 py-1 border border-primary/10">
                      {service.price}
                    </span>
                  </div>
                  
                  {/* Features - Minimalist */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {service.features?.map((f, i) => (
                      <span key={i} className="text-[9px] uppercase tracking-widest text-primary/70 flex items-center gap-2 font-bold">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Description - Editorial Contrast */}
                  <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                </div>

                {/* Aesthetic Detail */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/0 group-hover:border-primary/20 transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
