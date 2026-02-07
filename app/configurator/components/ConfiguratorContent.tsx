'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Package, Box, Coffee, Timer, Layers } from 'lucide-react'

interface ProductCard {
  id: string
  title: string
  description: string
  moq: string
  productionTime: string
  image: string
  href: string
  primary: boolean
  enabled: boolean
}

const products: ProductCard[] = [
  {
    id: 'flat-bottom-bags',
    title: 'FLAT BOTTOM BAGS',
    description:
      'The bag is perfect for coffee roasters, offering various form factors, EU-made materials, and extensive customization options.',
    moq: '1500 pcs',
    productionTime: '4 weeks',
    image: '/images/flat-bottom-bags/top-opening.png',
    href: '/configurator/flat-bottom-bags',
    primary: true,
    enabled: true,
  },
  {
    id: 'standup-bags',
    title: 'STANDUP BAGS',
    description:
      'Our standup bags combine premium quality with a sleek, functional design. The wide shape ensures easy filling, while the front panel offers the perfect space for bold branding.',
    moq: '2500 pcs',
    productionTime: '4 weeks',
    image: '/images/standup-bags/top-zipper.png',
    href: '/configurator/standup-bags',
    primary: false,
    enabled: true,
  },
  {
    id: 'drip-bags',
    title: 'DRIP BAGS',
    description:
      'Drip bags are a new way for your customers to taste your coffee on the go. This service involves sending us your coffee and getting ready-to-sell single-serve products.',
    moq: '2500 pcs',
    productionTime: '4 weeks',
    image: '/images/drip-bags/drip-bags.webp',
    href: '/configurator/drip-bags',
    primary: false,
    enabled: true,
  },
  {
    id: 'carton-boxes',
    title: 'CARTON BOXES',
    description:
      "Our coffee boxes are made to hold your bags in a neat and stylish way. They're durable, easy to open, and look great on the shelf.",
    moq: '500 pcs',
    productionTime: '4 weeks',
    image: '/images/home-page/products-section.png',
    href: '/configurator/carton-boxes',
    primary: false,
    enabled: true,
  },
]

const moqIcons: Record<string, React.ReactNode> = {
  'flat-bottom-bags': <Package className="w-5 h-5 text-[#6b7280]" />,
  'standup-bags': <Layers className="w-5 h-5 text-[#6b7280]" />,
  'drip-bags': <Coffee className="w-5 h-5 text-[#6b7280]" />,
  'carton-boxes': <Box className="w-5 h-5 text-[#6b7280]" />,
}

export function ConfiguratorContent() {
  const router = useRouter()
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const handleCardClick = (product: ProductCard) => {
    if (!product.enabled) return
    router.push(product.href)
  }

  return (
    <PageLayout>
      <main className="w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-12 md:py-20">
        <div className="max-w-[1240px] mx-auto">
          <h1 className="[font-family:'Inter',Helvetica] font-bold text-text text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-[-1px] leading-tight text-center mb-12 md:mb-16">
            PACKAGING TYPE
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => {
              const isHovered = hoveredId === product.id
              const isPrimary = product.primary

              return (
                <div
                  key={product.id}
                  onClick={() => handleCardClick(product)}
                  onMouseEnter={() => product.enabled && setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`
                    relative rounded-[20px] p-6 sm:p-8 transition-all duration-200
                    ${product.enabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}
                    ${isPrimary
                      ? 'border-2 border-dashed border-[#9ca3af] bg-white'
                      : 'border border-[#e5e7eb] bg-white'
                    }
                    ${isHovered && product.enabled ? 'shadow-lg -translate-y-0.5' : 'shadow-sm'}
                  `}
                >
                  <div className="flex gap-5 sm:gap-6">
                    <div className="flex-shrink-0 w-[100px] sm:w-[120px] md:w-[140px] flex items-start justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto object-contain max-h-[160px]"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h2 className="[font-family:'Inter',Helvetica] font-bold text-text text-xl sm:text-2xl tracking-[-0.3px] leading-tight mb-3">
                        {product.title}
                      </h2>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#4b5563] text-sm sm:text-[15px] leading-relaxed mb-6">
                        {product.description}
                      </p>

                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2.5">
                          {moqIcons[product.id]}
                          <span className="[font-family:'Inter',Helvetica] text-sm text-[#4b5563]">
                            MOQ (minimum order quantity):{' '}
                            <strong className="text-text font-semibold">{product.moq}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Timer className="w-5 h-5 text-[#6b7280]" />
                          <span className="[font-family:'Inter',Helvetica] text-sm text-[#4b5563]">
                            Production time from{' '}
                            <strong className="text-text font-semibold">{product.productionTime}</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {!product.enabled && (
                    <div className="absolute inset-0 rounded-[20px] bg-white/60 flex items-center justify-center">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-[#9ca3af] text-sm bg-white px-4 py-2 rounded-full border border-[#e5e7eb]">
                        Coming soon
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
