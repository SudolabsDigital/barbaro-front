// src/components/molecules/SectionHeader.tsx
import { SectionLabel } from '@/src/components/atoms/SectionLabel'
import { GoldLine } from '@/src/components/atoms/GoldLine'

interface SectionHeaderProps {
  label: string          // ej: "El equipo"
  title: string          // ej: "Nuestros Barberos"
  align?: 'left' | 'center'
  light?: boolean        // true para secciones con fondo claro (no se usa en este proyecto actualmente)
}

export function SectionHeader({
  label,
  title,
  align = 'left',
  light = false,
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  const textColor = light ? 'text-[var(--color-background)]' : 'text-[var(--color-foreground)]'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <SectionLabel>{label}</SectionLabel>
      <h2
        className={`
          font-display uppercase tracking-tighter leading-none
          text-4xl md:text-5xl lg:text-6xl
          ${textColor}
        `}
      >
        {title}
      </h2>
      <GoldLine width={align === 'center' ? 'md' : 'md'} />
    </div>
  )
}
