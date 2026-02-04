import type { Metadata } from 'next'
import Link from 'next/link'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'

export const metadata: Metadata = {
  title: 'Our Products - Coffee Packaging Solutions',
  description: 'Explore our range of premium coffee packaging products including standup bags, flat bottom bags, and carton boxes.',
  openGraph: {
    title: 'Our Products - Coffee Packaging Solutions | ÖYE Packaging',
    description: 'Premium coffee packaging solutions for roasting companies.',
    url: 'https://oyepackaging.com/products',
  }
}

export default function ProductsPage() {
  const products = [
    {
      title: 'Standup Bags',
      href: '/standup-bags',
      description: 'Premium standup pouches for coffee packaging',
      image: 'https://c.animaapp.com/mko0yo41F03JfF/img/image-6.png'
    },
    {
      title: 'Flat Bottom Bags',
      href: '/flat-bottom-bags',
      description: 'Professional flat bottom bags with excellent shelf presence',
      image: 'https://c.animaapp.com/mko0yo41F03JfF/img/image-7.png'
    },
    {
      title: 'Carton Boxes',
      href: '/carton-boxes',
      description: 'Durable carton boxes for bulk packaging',
      image: 'https://c.animaapp.com/mko0yo41F03JfF/img/image-8.png'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />

      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">Our Products</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Discover our comprehensive range of coffee packaging solutions designed for roasting companies across Europe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-main transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
