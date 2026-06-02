import { Hero } from '@/src/components/organisms/Hero'
import { ServicesSection } from '@/src/components/organisms/ServicesSection'
import { PromosSection } from '@/src/components/organisms/PromosSection'
import { BarbersSection } from '@/src/components/organisms/BarbersSection'
import { GallerySection } from '@/src/components/organisms/GallerySection'
import { ContactSection } from '@/src/components/organisms/ContactSection'
import { PartnerCarousel } from '@/src/components/organisms/PartnerCarousel'
import { CTASection } from '@/src/components/organisms/CTASection'
import { getPartners } from '@/src/infrastructure/mdx-repository'

export default function HomePage() {
  const partners = getPartners()

  return (
    <main className="flex-1">
      <Hero />
      <PartnerCarousel partners={partners} />
      <ServicesSection />
      <PromosSection />
      <BarbersSection />
      <GallerySection />
      <ContactSection />
      <CTASection />
    </main>
  )
}
