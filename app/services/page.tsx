import type { Metadata } from 'next'
import Link from 'next/link'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'

export const metadata: Metadata = {
  title: 'Our Services - Coffee Packaging & Filling Solutions',
  description: 'Professional coffee packaging services including drip bags, brew bags, and cold brew solutions for roasting companies.',
  openGraph: {
    title: 'Our Services - Coffee Packaging Solutions | ÖYE Packaging',
    description: 'Professional coffee packaging and filling services.',
    url: 'https://oyepackaging.com/services',
  }
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Drip Bags',
      href: '/drip-bags',
      description: 'Convenient single-serve drip bag solutions',
      image: 'https://c.animaapp.com/mko0yo41F03JfF/img/image-9.png'
    },
    {
      title: 'Brew Bags',
      href: '/brew-bags',
      description: 'Premium brew bag packaging services',
      image: 'https://c.animaapp.com/mko0yo41F03JfF/img/image-10.png'
    },
    {
      title: 'Cold Brew Bags',
      href: '/cold-brew-bags',
      description: 'Specialized cold brew coffee bag solutions',
      image: 'https://c.animaapp.com/mko0yo41F03JfF/img/image-11.png'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />

      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          We provide comprehensive filling and packaging services tailored to your coffee roasting business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-main transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
