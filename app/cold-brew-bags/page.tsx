import type { Metadata } from 'next'
import { ColdBrewBagsContent } from './components/ColdBrewBagsContent'

export const metadata: Metadata = {
  title: 'Cold Brew Bags - Coffee Packaging | ÖYE Packaging',
  description: 'Cold brew bags offer a refreshing way to serve your coffee cold. Simply send us your beans and receive a product ready for the fridge.',
  alternates: { canonical: 'https://oyepackaging.com/cold-brew-bags' }
}

export default function ColdBrewBagsPage() {
  return <ColdBrewBagsContent />
}
