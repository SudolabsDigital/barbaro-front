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
    <section id="servicios" className="relative bg-black py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* SECTION HEADER - High Contrast & Authority */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-display leading-tight mb-4 text-white">
              EL RITUAL <br /> <span className="text-primary italic font-serif text-3xl md:text-5xl lowercase">de servicios</span>
            </h2>
            <p className="font-serif italic text-xl text-white/70 max-w-xl">
              "{activeCategoryInfo?.description}"
            </p>
          </div>
          <Link 
            href="/servicios" 
            className="group flex items-center gap-4 font-sans text-xs md:text-sm uppercase tracking-[0.4em] text-white/80 hover:text-primary transition-all duration-500 pb-2 border-b border-white/20 hover:border-primary"
          >
            CATÁLOGO COMPLETO →
          </Link>
        </div>

        {/* ROW 1: CATEGORIES - Refined Contrast & Readability */}
        <div className="mb-12 border-b border-white/10 pb-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-12 md:gap-16 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "font-sans text-sm md:text-base lg:text-lg uppercase tracking-[0.4em] transition-all duration-500 relative py-4",
                  activeCategory === category.id 
                    ? "text-primary font-bold" 
                    : "text-white/40 hover:text-white"
                )}
              >
                {category.title}
                {activeCategory === category.id && (
                  <motion.div 
                    layoutId="activeCategoryIndicator"
                    className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary z-20" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ROW 2: SERVICES - Horizontal Cards (2 Columns) for better space usage and legibility */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {activeServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-secondary/5 border border-white/10 hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[280px]"
              >
                {/* Image Area - Left (40%) */}
                <div className="relative w-full sm:w-2/5 h-[220px] sm:h-full overflow-hidden border-r border-white/5">
                  <Image
                    src="/service-standard.webp"
                    alt={service.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content Area - Right (60%) */}
                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center space-y-5">
                  
                  {/* Title & Price - High Hierarchy */}
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl md:text-3xl font-display text-white group-hover:text-primary transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <span className="font-display text-xl md:text-2xl text-primary whitespace-nowrap bg-primary/5 px-3 py-1 border border-primary/20">
                      {service.price}
                    </span>
                  </div>
                  
                  {/* Features / Included items - Ultra Legible */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {service.features?.map((f, i) => (
                      <span key={i} className="text-[10px] md:text-xs uppercase tracking-widest text-primary/90 flex items-center gap-2 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Description - Editorial Contrast */}
                  <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                </div>

                {/* Aesthetic Corner Reveal */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-primary/0 border-l-[30px] border-l-transparent group-hover:border-t-primary/30 transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
