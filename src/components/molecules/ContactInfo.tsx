// src/components/molecules/ContactInfo.tsx
import { ReactNode } from 'react'

interface ContactInfoProps {
  icon: ReactNode
  label: string
  value: string
  href?: string
}

export function ContactInfo({ icon, label, value, href }: ContactInfoProps) {
  const content = (
    <div className="flex items-start gap-3 group">
      <span className="text-[var(--color-primary)] mt-0.5 shrink-0">{icon}</span>
      <div className="flex flex-col gap-0.5">
        <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-foreground)]">
          {label}
        </span>
        <span
          className="
            font-sans text-sm text-[var(--color-foreground)]
            group-hover:text-[var(--color-primary)] transition-colors duration-150
          "
        >
          {value}
        </span>
      </div>
    </div>
  )

  if (href) return <a href={href} className="no-underline">{content}</a>
  return content
}
