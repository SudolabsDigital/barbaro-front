// src/components/atoms/GoldLine.tsx
interface GoldLineProps {
  width?: 'sm' | 'md' | 'lg'
  className?: string
}

export function GoldLine({ width = 'md', className }: GoldLineProps) {
  const widths = { sm: 'w-10', md: 'w-16', lg: 'w-24' }
  return (
    <div
      className={`h-px bg-[var(--color-primary)] ${widths[width]} ${className ?? ''}`}
      aria-hidden="true"
    />
  )
}
