// src/components/organisms/CTASection.tsx
import { GrainOverlay } from '@/src/components/atoms/GrainOverlay'
import { GoldLine } from '@/src/components/atoms/GoldLine'
import { ButtonCTA } from '@/src/components/atoms/ButtonCTA'
import Image from 'next/image'
import { BARBARO_INFO } from '@/src/lib/constants'

export function CTASection() {
  const whatsappNumber = BARBARO_INFO.phone.replace(/\D/g, "");

  return (
    <GrainOverlay className="relative py-16 lg:py-20">
      <Image src="https://picsum.photos/seed/cta-barbaro/1920/1080?grayscale" alt="Estilo Bárbaro interior" fill className="object-cover object-center" aria-hidden="true" />
      {/* Patrón P01 heredado del Hero */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/30" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-6">
        <div className="max-w-xl flex flex-col gap-6">
          {/* Patrón P02 + P03 heredados del Hero */}
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Reserva tu lugar
          </span>
          <h2 className="font-display uppercase tracking-tighter leading-none text-4xl lg:text-6xl text-white">
            Tu próxima cita te espera
          </h2>
          {/* Patrón P04 heredado */}
          <GoldLine width="md" />
          <p className="font-serif italic text-lg text-white/80">
            Llámanos o escríbenos para agendar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <ButtonCTA variant="primary" size="lg" href={`tel:${whatsappNumber}`}>
              Llamar ahora
            </ButtonCTA>
            <ButtonCTA variant="outline" size="lg" href={`https://wa.me/${whatsappNumber}?text=Hola%20Estilo%20Bárbaro,%20me%20gustaría%20reservar%20un%20ritual.`}>
              WhatsApp
            </ButtonCTA>
          </div>
        </div>
      </div>
    </GrainOverlay>
  )
}
