// src/components/atoms/GrainOverlay.tsx
import { ReactNode } from 'react'

interface GrainOverlayProps {
  children: ReactNode
  className?: string
}

export function GrainOverlay({ children, className }: GrainOverlayProps) {
  return (
    <div className={`grain-overlay relative ${className ?? ''}`}>
      {children}
    </div>
  )
}
