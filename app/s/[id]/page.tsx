import { ALL_SERVICES } from '@/src/lib/services'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export async function generateMetadata(
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const service = ALL_SERVICES.find(s => s.id === params.id)
  
  if (!service) return {}

  return {
    title: `${service.name} | Estilo Bárbaro`,
    description: service.description,
    openGraph: {
      title: `${service.name} | Estilo Bárbaro`,
      description: service.description,
      images: [
        {
          url: service.imageSrc,
          width: 800,
          height: 600,
          alt: service.name,
        }
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} | Estilo Bárbaro`,
      description: service.description,
      images: [service.imageSrc],
    }
  }
}

export default async function ServiceRedirect(
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  // Redirigir siempre a la landing page y scrollear al servicio exacto
  redirect(`/#${params.id}`)
}
