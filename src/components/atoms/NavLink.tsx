'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: string
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`
        relative font-sans text-xs font-medium uppercase tracking-widest
        transition-colors duration-150 pb-0.5
        after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[var(--color-primary)]
        after:transition-all after:duration-300
        ${isActive
          ? 'text-[var(--color-primary)] after:w-full'
          : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)] after:w-0 hover:after:w-full'
        }
      `}
    >
      {children}
    </Link>
  )
}
