import type { Metadata } from 'next'
import { CartonBoxesContent } from './components/CartonBoxesContent'

export const metadata: Metadata = {
  title: 'Carton Boxes - Coffee Packaging | ÖYE Packaging',
  description: 'Durable and stylish carton boxes for coffee packaging. FSC certified, 100% recyclable, compostable. MOQ 500 pcs. Made in Europe.',
  keywords: [
    'carton boxes',
    'coffee packaging boxes',
    'recyclable boxes',
    'FSC certified',
    'compostable packaging',
    'paperboard boxes',
    'European packaging'
  ],
  openGraph: {
    title: 'Carton Boxes - ÖYE Packaging',
    description: 'Durable and stylish carton boxes for coffee packaging with full customization options.',
    url: 'https://oyepackaging.com/carton-boxes',
    type: 'website',
  },
  alternates: {
    canonical: 'https://oyepackaging.com/carton-boxes'
  }
}

export default function CartonBoxesPage() {
  return <CartonBoxesContent />
}
