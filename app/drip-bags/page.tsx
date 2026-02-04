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

      <ServicesSidebar />

      <main className="pt-8 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:pt-[132px] xl:pl-[414px] xl:pr-[100px]">
        <DripHeroSection />

        <DripInfoSection />

        <CustomizationDripSection />

        <HowItWorksSection />

        <WhereToOfferSection />

        <DripCTASection />
      </main>

      <FooterSection />
    </div>
  )
}
