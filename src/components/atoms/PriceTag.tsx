// src/components/atoms/PriceTag.tsx
interface PriceTagProps {
  amount: number
  currency?: string
  variant?: 'featured' | 'inline'
}

export function PriceTag({ amount, currency = 'S/', variant = 'inline' }: PriceTagProps) {
  if (variant === 'featured') {
    return (
      <span className="font-serif text-4xl font-normal text-[var(--color-primary)]">
        {currency} {amount}
      </span>
    )
  }
  return (
    <span className="font-sans text-sm font-medium text-[var(--color-primary)] whitespace-nowrap">
      {currency} {amount}
    </span>
  )
}
