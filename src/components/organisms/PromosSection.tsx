// src/components/organisms/PromosSection.tsx
'use client'
import { GrainOverlay } from '@/src/components/atoms/GrainOverlay'
import { SectionHeader } from '@/src/components/molecules/SectionHeader'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/src/lib/motion'

export function PromosSection() {
  return (
    <GrainOverlay className="bg-[var(--color-secondary)] py-24 lg:py-32 border-t border-[var(--color-primary)]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-16">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <SectionHeader label="Beneficios Exclusivos" title="Membresía & Promos" align="center" />
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
           {/* Card Membresia */}
           <motion.div variants={fadeUp} className="group border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/60 transition-colors duration-300 p-8 md:p-12 flex flex-col items-center text-center gap-6 bg-[var(--color-background)]/50">
              <div className="w-20 h-20 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                 <span className="font-display text-5xl text-[var(--color-primary)]">8</span>
              </div>
              <h3 className="font-display text-3xl uppercase tracking-widest text-[var(--color-foreground)]">Tarjeta de Membresía</h3>
              <p className="font-sans text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                Reclame su tarjeta de membresía. Por cada 8 cortes acumulados, el siguiente es <strong className="text-[var(--color-primary)] font-bold">totalmente GRATIS</strong>.
              </p>
           </motion.div>
           
           {/* Card Colegios */}
           <motion.div variants={fadeUp} className="group border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/60 transition-colors duration-300 p-8 md:p-12 flex flex-col items-center text-center gap-6 bg-[var(--color-background)]/50">
              <div className="flex gap-6 items-center justify-center h-20">
                 <div className="relative w-12 h-16 group-hover:-translate-y-2 transition-transform duration-300 delay-0"><Image src="/logo-mariscal-castilla.webp" alt="Mariscal Castilla" fill className="object-contain" /></div>
                 <div className="relative w-12 h-16 group-hover:-translate-y-2 transition-transform duration-300 delay-75"><Image src="/logo-politecnico.webp" alt="Politécnico" fill className="object-contain" /></div>
                 <div className="relative w-12 h-16 group-hover:-translate-y-2 transition-transform duration-300 delay-150"><Image src="/logo-santa-isabel.webp" alt="Santa Isabel" fill className="object-contain" /></div>
              </div>
              <h3 className="font-display text-3xl uppercase tracking-widest text-[var(--color-foreground)]">Promos Escolares</h3>
              <p className="font-sans text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                Exclusivo para colegios Mariscal Castilla, Politécnico y Santa Isabel: Por cada 2 compañeros que asistan juntos, <strong className="text-[var(--color-primary)] font-bold">el 3ro obtiene un 50% de descuento</strong>.
              </p>
           </motion.div>
        </motion.div>
      </div>
    </GrainOverlay>
  )
}
