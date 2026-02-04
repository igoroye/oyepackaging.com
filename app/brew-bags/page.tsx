import type { Metadata } from 'next'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'

export const metadata: Metadata = {
  title: 'Brew Bags - Coffee Packaging Services | ÖYE Packaging',
  description: 'Premium brew bag packaging services for specialty coffee roasters.',
  alternates: { canonical: 'https://oyepackaging.com/brew-bags' }
}

export default function BrewBagsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />
      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">Brew Bags</h1>
        <p className="text-lg text-gray-600">Premium brew bag packaging services.</p>
      </main>
    </div>
  )
}
