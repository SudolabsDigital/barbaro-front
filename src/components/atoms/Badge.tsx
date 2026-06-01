// src/components/atoms/Badge.tsx
interface BadgeProps {
  children: string
  active?: boolean
  onClick?: () => void
}

export function Badge({ children, active = false, onClick }: BadgeProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-1.5 rounded-full text-xs font-sans font-medium uppercase tracking-wider
        border transition-all duration-150 cursor-pointer
        ${active
          ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-[var(--color-primary-foreground)]'
          : 'bg-transparent border-[var(--color-border)] text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
        }
      `}
    >
      {children}
    </button>
  )
}
