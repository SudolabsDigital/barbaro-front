// src/components/molecules/NavItem.tsx
import { NavLink } from '@/src/components/atoms/NavLink'

interface NavItemProps {
  href: string
  label: string
}

export function NavItem({ href, label }: NavItemProps) {
  return (
    <li className="list-none">
      <NavLink href={href}>{label}</NavLink>
    </li>
  )
}
