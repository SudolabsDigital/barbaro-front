// src/components/atoms/SectionLabel.tsx
interface SectionLabelProps {
  children: string
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={`
        font-sans text-xs font-medium uppercase tracking-[0.2em]
        text-[var(--color-primary)] ${className ?? ''}
      `}
    >
      {children}
    </span>
  )
}
