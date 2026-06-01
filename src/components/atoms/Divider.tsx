// src/components/atoms/Divider.tsx
interface DividerProps {
  className?: string
}

export function Divider({ className }: DividerProps) {
  return (
    <div
      className={`h-px w-full bg-[var(--color-border)] ${className ?? ''}`}
      aria-hidden="true"
      role="separator"
    />
  )
}
