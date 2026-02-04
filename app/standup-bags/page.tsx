import type { Metadata } from 'next'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'

export const metadata: Metadata = {
  title: 'Standup Bags - Coffee Packaging | ÖYE Packaging',
  description: 'Premium standup pouches for coffee packaging. Customizable designs with excellent barrier properties and shelf presence.',
  openGraph: {
    title: 'Standup Bags - Coffee Packaging | ÖYE Packaging',
    url: 'https://oyepackaging.com/standup-bags',
  },
  alternates: {
    canonical: 'https://oyepackaging.com/standup-bags'
  }
}

export default function StandupBagsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />

      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">Standup Bags</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Premium standup pouches designed for coffee roasters who demand excellence in packaging.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://c.animaapp.com/mko0yo41F03JfF/img/image-6.png"
              alt="Standup Bags"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-text mb-4">Features</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-main mr-2">✓</span>
                <span>Excellent barrier properties to preserve coffee freshness</span>
              </li>
              <li className="flex items-start">
                <span className="text-main mr-2">✓</span>
                <span>Customizable designs and sizes</span>
              </li>
              <li className="flex items-start">
                <span className="text-main mr-2">✓</span>
                <span>Resealable zipper options</span>
              </li>
              <li className="flex items-start">
                <span className="text-main mr-2">✓</span>
                <span>Degassing valve available</span>
              </li>
              <li className="flex items-start">
                <span className="text-main mr-2">✓</span>
                <span>High-quality printing for brand visibility</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
