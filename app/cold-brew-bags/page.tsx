import type { Metadata } from 'next'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'

export const metadata: Metadata = {
  title: 'Cold Brew Bags - Coffee Packaging | ÖYE Packaging',
  description: 'Specialized cold brew coffee bag solutions for modern coffee brands.',
  alternates: { canonical: 'https://oyepackaging.com/cold-brew-bags' }
}

export default function ColdBrewBagsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />
      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">Cold Brew Bags</h1>
        <p className="text-lg text-gray-600">Specialized cold brew coffee bag solutions.</p>
      </main>
    </div>
  )
}
