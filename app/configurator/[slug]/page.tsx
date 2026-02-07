import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProductConfig, getAllProductSlugs } from './config'
import { ConfiguratorShell } from './components/ConfiguratorShell'

export function generateStaticParams() {
  return getAllProductSlugs().map(slug => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const config = getProductConfig(params.slug)
  if (!config) return {}
  return {
    title: `${config.title} Configurator - OYE Packaging`,
    description: `Configure your ${config.title.toLowerCase()} with custom size, material, features, and design options.`,
    openGraph: {
      title: `${config.title} Configurator - OYE Packaging`,
      description: `Configure your ${config.title.toLowerCase()} packaging.`,
      url: `https://oyepackaging.com/configurator/${config.slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://oyepackaging.com/configurator/${config.slug}`,
    },
  }
}

export default function ConfiguratorProductPage({ params }: { params: { slug: string } }) {
  const config = getProductConfig(params.slug)
  if (!config) notFound()
  return <ConfiguratorShell config={config} />
}
