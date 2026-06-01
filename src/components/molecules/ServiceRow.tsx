// src/components/molecules/ServiceRow.tsx
import { PriceTag } from '@/src/components/atoms/PriceTag'
import { Divider } from '@/src/components/atoms/Divider'

interface ServiceRowProps {
  name: string
  description?: string
  price: number
  isLast?: boolean
}

export function ServiceRow({ name, description, price, isLast = false }: ServiceRowProps) {
  return (
    <>
      <div
        className="
          group flex items-center justify-between gap-4
          py-4 cursor-default
          transition-all duration-150
          hover:pl-2
        "
      >
        <div className="flex flex-col gap-0.5">
          <span
            className="
              font-sans text-sm font-medium uppercase tracking-wide
              text-[var(--color-foreground)]
              group-hover:text-[var(--color-primary)] transition-colors duration-150
            "
          >
            {name}
          </span>
          {description && (
            <span className="font-sans text-xs text-[var(--color-muted-foreground)]">
              {description}
            </span>
          )}
        </div>
        <PriceTag amount={price} variant="inline" />
      </div>
      {!isLast && <Divider />}
    </>
  )
}
