// src/components/molecules/CutCard.tsx
import Image from 'next/image'

interface CutCardProps {
  name: string
  imageSrc: string
  category?: string
}

export function CutCard({ name, imageSrc, category }: CutCardProps) {
  return (
    <div className="group relative overflow-hidden aspect-square cursor-pointer">
      <Image
        src={imageSrc}
        alt={`Corte ${name}`}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay */}
      <div
        className="
          absolute inset-0 flex flex-col items-start justify-end p-4
          bg-gradient-to-t from-black/80 via-black/20 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        {category && (
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-1">
            {category}
          </span>
        )}
        <span className="font-display uppercase tracking-tighter text-2xl text-white leading-none">
          {name}
        </span>
      </div>
    </div>
  )
}
