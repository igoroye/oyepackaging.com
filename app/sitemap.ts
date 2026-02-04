import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oyepackaging.com'

  const routes = [
    '',
    '/about-us',
    '/sustainability',
    '/contact-us',
    '/standup-bags',
    '/flat-bottom-bags',
    '/carton-boxes',
    '/drip-bags',
    '/brew-bags',
    '/cold-brew-bags',
    '/privacy-policy',
    '/terms-conditions',
    '/cookies',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
