import type { Metadata } from 'next'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'

export const metadata: Metadata = {
  title: 'Drip Bags - Coffee Packaging Services | ÖYE Packaging',
  description: 'Convenient single-serve drip bag solutions for specialty coffee.',
  alternates: { canonical: 'https://oyepackaging.com/drip-bags' }
}

export default function DripBagsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />
      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">Drip Bags</h1>
        <p className="text-lg text-gray-600">Convenient single-serve drip bag solutions.</p>
      </main>
    </div>
  )
}
