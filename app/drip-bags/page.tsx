import type { Metadata } from 'next'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'
import { ServicesSidebar } from './components/ServicesSidebar'
import { DripHeroSection } from './components/DripHeroSection'
import { DripInfoSection } from './components/DripInfoSection'
import { CustomizationDripSection } from './components/CustomizationDripSection'
import { HowItWorksSection } from './components/HowItWorksSection'
import { WhereToOfferSection } from './components/WhereToOfferSection'
import { DripCTASection } from './components/DripCTASection'
import { FooterSection } from '../products/components/FooterSection'

export const metadata: Metadata = {
  title: 'Drip Bags - Coffee Packaging Services | ÖYE Packaging',
  description: 'Convenient single-serve drip bag solutions for specialty coffee.',
  alternates: { canonical: 'https://oyepackaging.com/drip-bags' }
}

export default function DripBagsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />

      <div className="pt-8 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:pt-[132px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col xl:flex-row gap-6">
            <ServicesSidebar />

            <main className="flex-1 min-w-0">
        <DripHeroSection />

        <DripInfoSection />

        <CustomizationDripSection />

        <HowItWorksSection />

        <WhereToOfferSection />

        <DripCTASection />
            </main>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
