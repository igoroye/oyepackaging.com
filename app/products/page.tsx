'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'
import { ProductHeroSection } from './components/ProductHeroSection'
import { MaterialsSection } from './components/MaterialsSection'
import { BagSizesSection } from './components/BagSizesSection'
import { PrintCustomizationSection } from './components/PrintCustomizationSection'
import { TouchFeelSection } from './components/TouchFeelSection'
import { FeaturesSection } from './components/FeaturesSection'
import { BarrierSection } from './components/BarrierSection'
import { CTASection } from './components/CTASection'
import { FooterSection } from './components/FooterSection'

const products = [
  { id: 'flat-bottom-bags', label: 'FLAT BOTTOM BAGS' },
  { id: 'standup-bags', label: 'STANDUP BAGS', link: '/standup-bags' },
  { id: 'carton-boxes', label: 'CARTON BOXES' },
]

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState('flat-bottom-bags')

  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />

      <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-[100px] py-6 lg:py-8">
        <aside className="w-full lg:w-[320px] flex-shrink-0">
          <div className="flex lg:flex-col gap-4">
            {products.map((product) => {
              const isSelected = selectedProduct === product.id
              const buttonContent = (
                <>
                  <svg width="19" height="36" viewBox="0 0 19 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 2L9.5 18L2 34M17 2L9.5 18L17 34"
                      stroke={isSelected ? '#264EAB' : '#101014'}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className={`font-semibold text-lg ${isSelected ? 'text-main' : 'text-text'}`}>
                    {product.label}
                  </span>
                </>
              )

              const className = `flex items-center gap-3 px-6 py-4 rounded-[10px] transition-all w-full text-left ${
                isSelected
                  ? 'bg-white shadow-[0px_5px_16px_-1px_rgba(0,0,0,0.15)]'
                  : 'bg-white opacity-60 hover:opacity-80'
              }`

              if (product.link) {
                return (
                  <Link key={product.id} href={product.link} className={className}>
                    {buttonContent}
                  </Link>
                )
              }

              return (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product.id)}
                  className={className}
                >
                  {buttonContent}
                </button>
              )
            })}
          </div>
        </aside>

        <main className="flex-1 min-w-0">
          <ProductHeroSection />

          <div className="mt-8 lg:mt-12">
            <div className="border border-[#101014]/30 rounded-[20px] p-6 lg:p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-around gap-8">
                <div className="flex items-center gap-4">
                  <svg width="28" height="54" viewBox="0 0 28 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L14 27L2 52M26 2L14 27L26 52" stroke="#101014" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="text-center md:text-left">
                    <p className="text-lg font-medium text-text">MOQ (MINIMUM ORDER QUANTITY)</p>
                    <p className="text-3xl font-medium text-text">1500 PCS</p>
                  </div>
                </div>
                <div className="hidden md:block w-px h-16 bg-[#101014]" />
                <div className="flex items-center gap-4">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="10" width="40" height="32" rx="2" stroke="#101014" strokeWidth="2"/>
                    <path d="M10 2V10M34 2V10" stroke="#101014" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M2 18H42" stroke="#101014" strokeWidth="2"/>
                  </svg>
                  <div className="text-center md:text-left">
                    <p className="text-lg font-medium text-text">PRODUCTION TIME FROM</p>
                    <p className="text-3xl font-medium text-text">4 WEEKS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-8">
            <h2 className="text-3xl font-semibold text-text mb-6">CUSTOMIZATION OPTIONS</h2>

            <div className="border border-[#101014]/30 rounded-[20px] p-6 lg:p-8 space-y-8">
              <MaterialsSection />
              <BagSizesSection />
              <PrintCustomizationSection />
              <TouchFeelSection />
            </div>
          </section>

          <section className="mt-8 lg:mt-12">
            <div className="border border-[#101014]/30 rounded-[20px] p-6 lg:p-8">
              <FeaturesSection />
            </div>
          </section>

          <section className="mt-8 lg:mt-12">
            <BarrierSection />
          </section>

          <CTASection />
        </main>
      </div>

      <FooterSection />
    </div>
  )
}
