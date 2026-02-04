import type { Metadata } from 'next'
import { HeroSection } from '@/src/routes/AboutUs/screens/sections/HeroSection'
import { PackagingOverviewSection } from '@/src/routes/AboutUs/screens/sections/PackagingOverviewSection'
import { CoffeePassionSection } from '@/src/routes/AboutUs/screens/sections/CoffeePassionSection'
import { ClientStatsSection } from '@/src/routes/AboutUs/screens/sections/ClientStatsSection'
import { ProductionHighlightsSection } from '@/src/routes/AboutUs/screens/sections/ProductionHighlightsSection'
import { ProactiveTeamSection } from '@/src/routes/AboutUs/screens/sections/ProactiveTeamSection'
import { SustainabilitySection } from '@/src/routes/AboutUs/screens/sections/SustainabilitySection'

export const metadata: Metadata = {
  title: 'About Us - ÖYE Packaging',
  description: 'Learn about ÖYE Packaging - European leaders in coffee packaging solutions. We know everything about packaging and support coffee roasting companies with customized solutions.',
  keywords: [
    'about us',
    'coffee packaging company',
    'European packaging manufacturer',
    'sustainable packaging',
    'coffee roasting solutions'
  ],
  openGraph: {
    title: 'About Us - ÖYE Packaging',
    description: 'European leaders in coffee packaging solutions for roasting companies.',
    url: 'https://oyepackaging.com/about-us',
    type: 'website',
  },
  alternates: {
    canonical: 'https://oyepackaging.com/about-us'
  }
}

export default function AboutUsPage() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <img
        className="absolute top-[-39px] right-[-1080px] w-[3621px] h-[1893px] pointer-events-none hidden xl:block"
        alt="Background decoration"
        src="https://c.animaapp.com/mkvbxc2okqfhzF/img/bg.svg"
      />

      <div className="relative w-full">
        <HeroSection />
      </div>

      <section className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-10">
        <h2 className="[font-family:'Inter',Helvetica] font-medium text-text text-2xl sm:text-3xl md:text-[44px] text-center tracking-[0] leading-tight md:leading-[49px] mb-4">
          WE KNOW EVERYTHING
        </h2>
        <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-4xl sm:text-5xl md:text-[80px] text-center tracking-[0] leading-tight md:leading-[99px]">
          ABOUT PACKAGING
        </h1>
      </section>

      <div className="relative w-full">
        <PackagingOverviewSection />
      </div>

      <section className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-10">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-2xl sm:text-3xl md:text-[44px] text-center tracking-[0] leading-tight md:leading-[49px]">
          SMART. SUSTAINABLE. SUPERIOR.
        </h2>
      </section>

      <div className="relative w-full">
        <CoffeePassionSection />
      </div>

      <div className="relative w-full">
        <ClientStatsSection />
      </div>

      <div className="relative w-full">
        <ProductionHighlightsSection />
      </div>

      <div className="relative w-full">
        <ProactiveTeamSection />
      </div>

      <div className="relative w-full">
        <SustainabilitySection />
      </div>
    </div>
  )
}
