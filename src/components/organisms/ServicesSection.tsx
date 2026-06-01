// src/components/organisms/ServicesSection.tsx
'use client'
import { SectionHeader } from '@/src/components/molecules/SectionHeader'
import { ServiceRow } from '@/src/components/molecules/ServiceRow'
import { ButtonCTA } from '@/src/components/atoms/ButtonCTA'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/src/lib/motion'

const SERVICES = [
  { name: 'Corte Clásico Básico', description: 'Corte tradicional', price: 15 },
  { name: 'Corte Clásico Moderno', description: 'Solo corte (Con lavado S/ 30)', price: 20 },
  { name: 'Cortes Fade', description: 'Mid, Low, High, Comprimidos, Texturizados, Ondulaciones (Con lavado S/ 30)', price: 25 },
  { name: 'Limpieza Facial', description: 'Vapor y toalla caliente', price: 20 },
  { name: 'Masajes / Lavado capilar', description: 'Con los mejores productos del cuidado capilar', price: 15 },
  { name: 'Demo Premium', description: 'Limpieza facial + masajes + corte + whisky de cortesía', price: 79.90 },
  { name: 'Premium Full', description: 'Limpieza con vapor + corte + lavado + masajes + whisky', price: 99.90 },
]

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="bg-[var(--color-background)] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Columna izquierda */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col gap-8 lg:sticky lg:top-24"
          >
            <motion.div variants={fadeUp}>
              <SectionHeader label="Lo que ofrecemos" title="Servicios" />
            </motion.div>
            <motion.p variants={fadeUp} className="font-serif italic text-lg text-[var(--color-foreground)] opacity-75 leading-relaxed">
              Cada servicio es ejecutado con precisión y los mejores productos del mercado.
            </motion.p>
            <motion.div variants={fadeUp}>
              <ButtonCTA variant="primary" size="md" href="/contacto">
                Reservar ahora
              </ButtonCTA>
            </motion.div>
          </motion.div>

          {/* Columna derecha — lista */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {SERVICES.map((service, i) => (
              <motion.div key={service.name} variants={fadeUp}>
                <ServiceRow
                  name={service.name}
                  description={service.description}
                  price={service.price}
                  isLast={i === SERVICES.length - 1}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
