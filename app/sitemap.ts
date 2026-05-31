import type { MetadataRoute } from 'next'
import { getServicesByCategory } from '@/src/infrastructure/mdx-repository'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://estilobarbaro.com'

  // Rutas estáticas principales
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // En el futuro, si hay páginas dinámicas por servicio, se pueden mapear aquí.
  // const categories = getServicesByCategory();
  // const dynamicRoutes = categories.flatMap(cat => cat.services.map(service => ...))

  return [...staticRoutes]
}
