import type { Metadata } from 'next'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'

export const metadata: Metadata = {
  title: 'Sustainability - ÖYE Packaging',
  description: 'Our commitment to sustainable coffee packaging solutions. Learn about our eco-friendly practices and materials.',
  openGraph: {
    title: 'Sustainability - ÖYE Packaging',
    url: 'https://oyepackaging.com/sustainability',
  },
  alternates: {
    canonical: 'https://oyepackaging.com/sustainability'
  }
}

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />

      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">Sustainability</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          We are committed to sustainable packaging solutions that protect both your product and our planet.
        </p>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-text mb-4">Our Commitment</h2>
          <p className="text-gray-600 mb-6">
            At ÖYE Packaging, sustainability is at the core of everything we do. We continuously work to minimize our environmental impact while delivering premium packaging solutions.
          </p>

          <h2 className="text-2xl font-semibold text-text mb-4">Eco-Friendly Materials</h2>
          <p className="text-gray-600 mb-6">
            We use recyclable and compostable materials whenever possible, ensuring your coffee packaging is as sustainable as your business values.
          </p>

          <h2 className="text-2xl font-semibold text-text mb-4">Sustainable Practices</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Energy-efficient production processes</li>
            <li>Waste reduction initiatives</li>
            <li>Sustainable sourcing of materials</li>
            <li>Carbon footprint minimization</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
