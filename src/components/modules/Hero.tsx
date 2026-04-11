import Image from "next/image";
import { cn } from "@/src/lib/utils";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={cn("relative h-screen w-full overflow-hidden bg-black", className)}>
      {/* Background Image (Right focus) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-barbaro.webp"
          alt="Barbería Bárbaro"
          fill
          priority
          className="object-cover object-right opacity-80 md:opacity-100"
          sizes="100vw"
        />
        {/* Deep Gradient: Ensures content area is clean while transitioning to the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent md:via-black/60" />
      </div>

      {/* Main Content Layout (70/30 Split) */}
      <div className="relative z-10 h-full w-full container mx-auto grid grid-cols-1 md:grid-cols-[0.7fr_0.3fr]">
        
        {/* Left 70% - Branding Dominance */}
        <div className="h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20">
          <div className="relative w-full max-w-2xl aspect-square animate-in fade-in zoom-in duration-1000 delay-200">
            <Image
              src="/logo-hero-new.webp"
              alt="Bárbaro Logo Blanco"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </div>

        {/* Right 30% - Reveal area for background focus */}
        <div className="hidden md:block h-full" />
        
      </div>

      {/* Aesthetic Accents & Slogan (New Position) */}
      <div className="absolute bottom-10 left-6 md:left-12 lg:left-20 z-10 flex flex-col md:flex-row items-start md:items-center gap-6 animate-in fade-in slide-in-from-left-8 duration-1000 delay-500">
        <div className="w-12 h-[1px] bg-primary/40 hidden md:block" />
        <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-primary leading-tight max-w-lg drop-shadow-2xl">
          "Donde el estilo alcanza la elegancia"
        </p>
      </div>
      
      <div className="absolute bottom-10 right-10 z-10 hidden md:flex items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground/40 rotate-90 origin-right">EST. 2026</span>
        <div className="w-[1px] h-20 bg-gradient-to-t from-primary/40 to-transparent" />
      </div>
    </section>
  );
}
