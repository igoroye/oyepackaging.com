import type { Metadata } from 'next'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'
import { ProductSidebar } from './components/ProductSidebar'
import { CartonHeroSection } from './components/CartonHeroSection'
import { InfoCardsSection } from './components/InfoCardsSection'
import { MaterialsCartonSection } from './components/MaterialsCartonSection'
import { BoxTypesSection } from './components/BoxTypesSection'
import { CustomizationSection } from './components/CustomizationSection'
import { CartonFeaturesSection } from './components/CartonFeaturesSection'
import { DetailsSection } from './components/DetailsSection'
import { CTACardsSection } from './components/CTACardsSection'
import { FooterSection } from '../products/components/FooterSection'

export const metadata: Metadata = {
  title: 'Carton Boxes - Coffee Packaging | ÖYE Packaging',
  description: 'Durable carton boxes for bulk coffee packaging and shipping solutions.',
  alternates: { canonical: 'https://oyepackaging.com/carton-boxes' }
}

export default function CartonBoxesPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />

      <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-[100px] py-6 lg:py-8">
        <ProductSidebar />

        <main className="flex-1 space-y-8">
          <CartonHeroSection />

          <InfoCardsSection />

          <div>
            <h2 className="font-semibold text-text text-3xl tracking-[-0.60px] leading-[49px] mb-6 text-center">
              СUSTOMIZATION OPTIONS
            </h2>
            <div className="space-y-8">
              <MaterialsCartonSection />
              <BoxTypesSection />
              <CustomizationSection />
            </div>
          </div>

          <CartonFeaturesSection />

          <DetailsSection />

          <CTACardsSection />
        </main>
      </div>

      <FooterSection />
    </div>
  )
}
