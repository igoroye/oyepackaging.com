import type { Metadata } from 'next'
import { ProductsContent } from './components/ProductsContent'

export const metadata: Metadata = {
  title: 'Products - Flat Bottom Bags | ÖYE Packaging',
  description: 'Explore our premium flat bottom bags for coffee roasters. EU-made materials, extensive customization options, and best coffee protection. MOQ 1500 pcs.',
  keywords: [
    'flat bottom bags',
    'coffee packaging',
    'coffee bags',
    'recyclable packaging',
    'European packaging',
    'coffee roasters',
    'custom coffee bags'
  ],
  openGraph: {
    title: 'Flat Bottom Bags - ÖYE Packaging',
    description: 'Premium flat bottom bags with extensive customization options for coffee roasters.',
    url: 'https://oyepackaging.com/products',
    type: 'website',
  },
  alternates: {
    canonical: 'https://oyepackaging.com/products'
  }
}

export default function ProductsPage() {
  return <ProductsContent />
}
