import type { Metadata } from 'next'
import { seoConfig, SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from './seo-config'
import type { PageSEO } from './seo-config'

export function getPageSEO(pageKey: string): PageSEO {
  return seoConfig[pageKey] ?? {
    title: SITE_NAME,
    description: '',
  }
}

export function buildMetadata(pageKey: string): Metadata {
  const seo = getPageSEO(pageKey)

  const ogImage = seo.ogImage ?? DEFAULT_OG_IMAGE
  const ogTitle = seo.ogTitle ?? seo.title
  const ogDescription = seo.ogDescription ?? seo.description

  const metadata: Metadata = {
    title: seo.absoluteTitle ? { absolute: seo.title } : seo.title,
    description: seo.description,
  }

  if (seo.keywords?.length) {
    metadata.keywords = seo.keywords
  }

  metadata.openGraph = {
    title: ogTitle,
    description: ogDescription,
    url: seo.canonical ?? SITE_URL,
    type: 'website',
    siteName: SITE_NAME,
    images: [{ url: ogImage, width: 1200, height: 630 }],
  }

  metadata.twitter = {
    card: seo.twitterCard ?? 'summary_large_image',
    title: ogTitle,
    description: ogDescription,
    images: [ogImage],
  }

  if (seo.canonical) {
    metadata.alternates = { canonical: seo.canonical }
  }

  if (seo.noIndex) {
    metadata.robots = { index: false, follow: false }
  }

  return metadata
}
