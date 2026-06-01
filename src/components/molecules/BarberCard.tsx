// src/components/molecules/BarberCard.tsx
import { PhotoFrame } from '@/src/components/atoms/PhotoFrame'

interface BarberCardProps {
  name: string
  specialty: string
  imageSrc: string
  instagram?: string
}

export function BarberCard({ name, specialty, imageSrc, instagram }: BarberCardProps) {
  return (
    <div className="group flex flex-col gap-3">
      {/* Foto con overlay de redes en hover */}
      <div className="relative overflow-hidden">
        <PhotoFrame
          src={imageSrc}
          alt={`${name} — barbero`}
          aspectRatio="portrait"
          grayscaleHover
        />
        {instagram && (
          <a
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              absolute inset-0 flex items-end justify-start p-4
              bg-black/0 group-hover:bg-black/40
              transition-all duration-300
              opacity-0 group-hover:opacity-100
            "
            aria-label={`Instagram de ${name}`}
          >
            <span className="font-sans text-xs text-white uppercase tracking-widest">
              @{instagram}
            </span>
          </a>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <div className="h-px w-8 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
        <h3 className="font-display uppercase tracking-tighter text-xl text-[var(--color-foreground)]">
          {name}
        </h3>
        <p className="font-sans text-xs uppercase tracking-widest text-[var(--color-muted-foreground)]">
          {specialty}
        </p>
      </div>
    </div>
  )
}
