import type { Metadata } from 'next'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'

export const metadata: Metadata = {
  title: 'Carton Boxes - Coffee Packaging | ÖYE Packaging',
  description: 'Durable carton boxes for bulk coffee packaging and shipping solutions.',
  alternates: { canonical: 'https://oyepackaging.com/carton-boxes' }
}

export default function CartonBoxesPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />
      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">Carton Boxes</h1>
        <p className="text-lg text-gray-600">Durable carton boxes for bulk packaging and shipping.</p>
      </main>
    </div>
  )
}
