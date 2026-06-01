'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Share2, ArrowRight, Link as LinkIcon, Check, X } from 'lucide-react'
import { BARBARO_INFO, SITE_URL } from '@/src/lib/constants'

// Usaremos un SVG personalizado simple para WhatsApp ya que lucide-react a veces varía el icono.
const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

interface ServiceCardProps {
  id: string
  name: string
  description: string
  price: string | number
  imageSrc: string
  features?: string[]
  isPremium?: boolean
}

export function ServiceCard({
  id,
  name,
  description,
  price,
  imageSrc,
  features = [],
  isPremium = false,
}: ServiceCardProps) {
  const [shareOpen, setShareOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const shareMenuRef = useRef<HTMLDivElement>(null)
  
  const whatsappNumber = BARBARO_INFO.phone.replace(/\D/g, "")
  const bookingLink = `https://wa.me/${whatsappNumber}?text=Hola%20Estilo%20Bárbaro,%20me%20gustaría%20reservar%20el%20servicio:%20${encodeURIComponent(name)}.`

  // Cierra el menú si hacen clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setShareOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const getShareUrl = () => {
    return `${SITE_URL}/s/${id}`
  }

  const handleNativeShare = async () => {
    const url = getShareUrl()
    if (navigator.share && /mobile|android|iphone/i.test(navigator.userAgent.toLowerCase())) {
      try {
        await navigator.share({
          title: `${name} en Estilo Bárbaro`,
          text: `Descubre ${name} por S/ ${price}. ${description}`,
          url: url
        })
        setShareOpen(false)
      } catch (err) {
        console.log("Compartir cancelado o no soportado", err)
      }
    } else {
      setShareOpen(!shareOpen)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getShareUrl())
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      setShareOpen(false)
    }, 2000)
  }

  const shareToWhatsApp = () => {
    const text = encodeURIComponent(`¡Mira este servicio en Estilo Bárbaro!\n\n*${name}* por S/ ${price}\n${description}\n\nResérvalo aquí: `)
    window.open(`https://api.whatsapp.com/send?text=${text}${getShareUrl()}`, '_blank')
    setShareOpen(false)
  }

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`, '_blank')
    setShareOpen(false)
  }

  return (
    <div 
      id={id}
      className={`
        group relative flex flex-col h-full bg-[var(--color-secondary)]/30 border
        transition-all duration-300 overflow-visible
        ${isPremium ? 'border-[var(--color-primary)]/40 shadow-[0_0_30px_rgba(223,147,54,0.05)] hover:border-[var(--color-primary)]' : 'border-[var(--color-border)] hover:border-[var(--color-primary)]/50'}
      `}
    >
      {/* Contenedor de Imagen */}
      <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] overflow-hidden">
        {/* Etiqueta Premium */}
        {isPremium && (
          <div className="absolute top-4 left-4 z-20 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1">
            Recomendado
          </div>
        )}
        
        {/* Botón y Menú de Compartir */}
        <div className="absolute top-4 right-4 z-30" ref={shareMenuRef}>
          <button 
            onClick={(e) => { e.preventDefault(); handleNativeShare(); }}
            className="bg-black/50 backdrop-blur-sm border border-white/10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black transition-colors"
            aria-label="Compartir servicio"
            aria-expanded={shareOpen}
          >
            {shareOpen ? <X size={16} /> : <Share2 size={16} />}
          </button>

          {/* Dropdown Menu */}
          {shareOpen && (
            <div className="absolute top-12 right-0 w-48 bg-[var(--color-background)] border border-[var(--color-border)] shadow-2xl p-2 flex flex-col gap-1 origin-top-right animate-in fade-in zoom-in-95 duration-200">
              <button onClick={shareToWhatsApp} className="flex items-center gap-3 w-full p-2 hover:bg-[var(--color-secondary)] text-left text-sm text-[var(--color-foreground)] transition-colors">
                <WhatsAppIcon size={16} /> WhatsApp
              </button>
              <button onClick={shareToFacebook} className="flex items-center gap-3 w-full p-2 hover:bg-[var(--color-secondary)] text-left text-sm text-[var(--color-foreground)] transition-colors">
                <FacebookIcon size={16} /> Facebook
              </button>
              <button onClick={copyToClipboard} className="flex items-center gap-3 w-full p-2 hover:bg-[var(--color-secondary)] text-left text-sm text-[var(--color-foreground)] transition-colors border-t border-[var(--color-border)]/50 mt-1 pt-3">
                {copied ? <Check size={16} className="text-green-500" /> : <LinkIcon size={16} />}
                {copied ? '¡Copiado!' : 'Copiar Enlace'}
              </button>
            </div>
          )}
        </div>

        <Image
          src={imageSrc}
          alt={`Servicio: ${name}`}
          fill
          className={`
            object-cover object-center
            transition-all duration-700 ease-out
            grayscale contrast-125 brightness-75
            group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100
            @media (hover: none) { grayscale-[50%] brightness-90 }
          `}
        />
        
        {/* Gradiente para que el texto resalte */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>

      {/* Contenido (Textos y Botón) */}
      <div className="flex flex-col flex-grow p-6 md:p-8 relative z-10">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="font-display text-2xl md:text-3xl text-[var(--color-foreground)] uppercase tracking-tighter leading-none">
            {name}
          </h3>
          <div className="font-serif text-2xl text-[var(--color-primary)] shrink-0">
            S/ {price}
          </div>
        </div>

        <p className="font-sans text-sm text-[var(--color-muted-foreground)] leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="flex flex-col gap-2 mb-8">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span className="font-sans text-[10px] uppercase tracking-widest text-[var(--color-foreground)]/80">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        <a 
          href={bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-between w-full border-t border-[var(--color-border)] pt-6 group/btn cursor-pointer"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-foreground)] group-hover/btn:text-[var(--color-primary)] transition-colors">
            Reservar Ritual
          </span>
          <ArrowRight size={18} className="text-[var(--color-primary)] transform group-hover/btn:translate-x-2 transition-transform" />
        </a>
      </div>
    </div>
  )
}
