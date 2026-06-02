import { Hero } from '@/src/components/organisms/Hero'
import { ServicesSection } from '@/src/components/organisms/ServicesSection'
import { PromosSection } from '@/src/components/organisms/PromosSection'
import { BarbersSection } from '@/src/components/organisms/BarbersSection'
import { GallerySection } from '@/src/components/organisms/GallerySection'
import { ContactSection } from '@/src/components/organisms/ContactSection'
import { CTASection } from '@/src/components/organisms/CTASection'

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <ServicesSection />
      <PromosSection />
      <BarbersSection />
      <GallerySection />
      <ContactSection />
      <CTASection />
    </main>
  )
}
