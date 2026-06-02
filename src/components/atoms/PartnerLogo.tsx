'use client';

import Image from "next/image";
import { Partner } from "@/src/domain/partner";

interface PartnerLogoProps {
  partner: Partner;
  className?: string;
  isLarge?: boolean;
}

export function PartnerLogo({ partner, className, isLarge = false }: PartnerLogoProps) {
  const content = (
    <div className={`relative group/logo transition-all duration-500 ${className ?? ''}`}>
      <div className={`
        relative filter grayscale opacity-40 transition-all duration-700
        ${isLarge ? 'h-16 w-52 md:h-24 md:w-72' : 'h-12 w-40 md:h-16 md:w-56'}
        /* Solo aplicar hover en dispositivos que soporten puntero (no touch) */
        @media (hover: hover) {
          group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-105
        }
        /* En móviles/touch, mostrar con un poco más de presencia por defecto */
        @media (hover: none) {
          grayscale-[0.5] opacity-70
        }
      `}>
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );

  if (partner.url) {
    return (
      <a 
        href={partner.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer block"
      >
        {content}
      </a>
    );
  }

  return content;
}
