// src/components/molecules/TestimonialCard.tsx
interface TestimonialCardProps {
  quote: string
  author: string
  rating?: number
}

export function TestimonialCard({ quote, author, rating = 5 }: TestimonialCardProps) {
  return (
    <div
      className="
        relative flex flex-col gap-4 p-6
        border border-[var(--color-border)]
        hover:border-[var(--color-primary)]
        transition-colors duration-300
        bg-[var(--color-secondary)]
      "
    >
      {/* Comilla decorativa — heredada del estilo display del Hero */}
      <span
        className="
          absolute top-4 right-6
          font-display text-8xl leading-none
          text-[var(--color-primary)] opacity-15
          select-none pointer-events-none
        "
        aria-hidden="true"
      >
        &quot;
      </span>

      {/* Estrellas */}
      {rating > 0 && (
        <div className="flex gap-1" aria-label={`${rating} estrellas`}>
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-[var(--color-primary)] text-sm">★</span>
          ))}
        </div>
      )}

      {/* Texto */}
      <blockquote className="font-serif italic text-base leading-relaxed text-[var(--color-foreground)] opacity-90">
        &quot;{quote}&quot;
      </blockquote>

      {/* Autor */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="h-px w-6 bg-[var(--color-primary)]" aria-hidden="true" />
        <cite className="font-sans text-xs uppercase tracking-widest text-[var(--color-muted-foreground)] not-italic">
          {author}
        </cite>
      </div>
    </div>
  )
}
