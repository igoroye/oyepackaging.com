import { buildMetadata } from '@/lib/seo'
import { HeroPackagingIntroSection } from '@/src/screens/V/sections/HeroPackagingIntroSection/HeroPackagingIntroSection'
import { CoffeeProductsSection } from '@/src/screens/V/sections/CoffeeProductsSection/CoffeeProductsSection'
import { PackagingBenefitsSection } from '@/src/screens/V/sections/PackagingBenefitsSection/PackagingBenefitsSection'
import { PackagingConfiguratorSection } from '@/src/screens/V/sections/PackagingConfiguratorSection/PackagingConfiguratorSection'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata = buildMetadata('home')

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <Header />

      <section className="relative w-full">
        <HeroPackagingIntroSection />
      </section>

      <CoffeeProductsSection />

      <section className="relative w-full overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-[726px] pointer-events-none hidden xl:block object-cover"
          alt="Background decoration"
          src="https://c.animaapp.com/mko0yo41F03JfF/img/bg.svg"
        />
        <PackagingBenefitsSection />
      </section>

      <section className="relative w-full">
        <PackagingConfiguratorSection />
      </section>

      <section className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-12">
        <div className="max-w-[1240px] mx-auto">
          <img
            className="w-full h-auto"
            alt="Any questions left"
            src="https://c.animaapp.com/mko0yo41F03JfF/img/any-questions--left-.png"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
