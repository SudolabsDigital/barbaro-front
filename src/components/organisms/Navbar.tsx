// src/components/organisms/Navbar.tsx
'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { NavItem } from '@/src/components/molecules/NavItem'
import { ButtonCTA } from '@/src/components/atoms/ButtonCTA'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/socios', label: 'Socios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Activar fondo al bajar 40px
      setScrolled(currentScrollY > 40)

      // Lógica de Smart Header (esconder al bajar, mostrar al subir)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true) // Scrolling down
      } else {
        setHidden(false) // Scrolling up
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${hidden ? '-translate-y-full' : 'translate-y-0'}
        ${scrolled
          ? 'bg-[var(--color-background)]/95 backdrop-blur-md border-b border-[var(--color-border)]'
          : 'bg-transparent'
        }
      `}
    >
      <nav
        className="max-w-6xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo & Slogan */}
        <div className="flex items-center gap-4">
          <Link href="/" className="shrink-0" aria-label="Inicio">
            <div className="relative h-8 w-32 md:h-10 md:w-40">
              <Image
                src="/logo-hero-new.webp"
                alt="Estilo Bárbaro logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-4">
            <div className="h-6 w-px bg-white/20" />
            <span className="font-serif italic text-sm text-white/70 tracking-wide mt-1">
              Donde el estilo alcanza la elegancia
            </span>
          </div>
        </div>

        {/* Links — desktop */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.href} href={link.href} label={link.label} />
          ))}
        </ul>

        {/* CTA — desktop */}
        <div className="hidden md:block">
          <ButtonCTA variant="outline" size="sm" href="/contacto">
            Reservar cita
          </ButtonCTA>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-6 bg-[var(--color-foreground)] transition-all duration-300
              ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-[var(--color-foreground)] transition-all duration-300
              ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-[var(--color-foreground)] transition-all duration-300
              ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          bg-[var(--color-background)] border-t border-[var(--color-border)]
          ${menuOpen ? 'max-h-screen py-6' : 'max-h-0'}
        `}
      >
        <ul className="flex flex-col gap-6 px-6" role="list">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.href} href={link.href} label={link.label} />
          ))}
          <li>
            <ButtonCTA variant="primary" size="md" href="/contacto" className="w-full justify-center">
              Reservar cita
            </ButtonCTA>
          </li>
        </ul>
      </div>
    </header>
  )
}
