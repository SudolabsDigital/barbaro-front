// src/components/atoms/PhotoFrame.tsx
import Image from 'next/image'

interface PhotoFrameProps {
  src: string
  alt: string
  aspectRatio?: 'square' | 'portrait' | 'landscape'
  grayscaleHover?: boolean
  className?: string
}

export function PhotoFrame({
  src,
  alt,
  aspectRatio = 'portrait',
  grayscaleHover = true,
  className,
}: PhotoFrameProps) {
  const aspects = {
    square:    'aspect-square',
    portrait:  'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  }
  return (
    <div className={`relative overflow-hidden ${aspects[aspectRatio]} ${className ?? ''}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`
          object-cover object-top
          transition-all duration-300 ease-out
          ${grayscaleHover ? 'grayscale hover:grayscale-0' : ''}
        `}
      />
    </div>
  )
}
