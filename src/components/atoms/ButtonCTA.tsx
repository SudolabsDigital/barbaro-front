// src/components/atoms/ButtonCTA.tsx
import { ReactNode } from 'react'

interface ButtonCTAProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
}

export function ButtonCTA({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
}: ButtonCTAProps) {
  const sizes = {
    sm:  'px-5 py-2 text-xs',
    md:  'px-8 py-3 text-sm',
    lg:  'px-10 py-4 text-base',
  }
  const variants = {
    primary: `
      bg-[var(--color-primary)] text-[var(--color-primary-foreground)]
      hover:bg-[var(--color-accent)] hover:scale-[1.03]
      active:bg-[var(--color-gold-dark)] active:scale-[0.98]
    `,
    outline: `
      bg-transparent text-[var(--color-primary)]
      border border-[var(--color-primary)]
      hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)]
      hover:scale-[1.03]
    `,
  }
  const base = `
    inline-flex items-center justify-center gap-2
    font-sans font-medium uppercase tracking-widest
    transition-all duration-150 cursor-pointer
    ${sizes[size]} ${variants[variant]} ${className ?? ''}
  `

  if (href) return <a href={href} className={base}>{children}</a>
  return <button onClick={onClick} className={base}>{children}</button>
}
