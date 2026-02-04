import type { Metadata } from 'next'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'

export const metadata: Metadata = {
  title: 'Flat Bottom Bags - Coffee Packaging | ÖYE Packaging',
  description: 'Professional flat bottom bags with excellent shelf presence for premium coffee packaging.',
  alternates: {
    canonical: 'https://oyepackaging.com/flat-bottom-bags'
  }
}

export default function FlatBottomBagsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />
      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">Flat Bottom Bags</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Professional flat bottom bags with superior shelf presence and stability.
        </p>
      </main>
    </div>
  )
}
