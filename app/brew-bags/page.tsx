import type { Metadata } from 'next'
import { BrewBagsContent } from './components/BrewBagsContent'

export const metadata: Metadata = {
  title: 'Brew Bags - Coffee Packaging Services | ÖYE Packaging',
  description: 'Brew bags make it easy for your customers to enjoy your coffee - just steep like tea. Send us your coffee and get a ready-to-sell product.',
  alternates: { canonical: 'https://oyepackaging.com/brew-bags' }
}

export default function BrewBagsPage() {
  return <BrewBagsContent />
}
