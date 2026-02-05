'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const features = [
  { icon: 'coffee', text: 'Grinding & filing coffee service' },
  { icon: 'europe', text: 'Made in Europe' },
  { icon: 'sustainable', text: 'Sustainable materials' },
  { icon: 'customizable', text: 'Fully customizable' },
  { icon: 'subscription', text: 'Subscription' },
]

function FeatureIcon({ type }: { type: string }) {
  if (type === 'coffee') {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8C4 8 4 4 8 4C12 4 12 8 12 8" stroke="#101014" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 8C10 8 10 4 14 4C18 4 18 8 18 8" stroke="#101014" strokeWidth="2" strokeLinecap="round"/>
        <rect x="2" y="8" width="16" height="10" rx="2" stroke="#101014" strokeWidth="2"/>
        <path d="M18 11H20C21 11 21 13 20 13H18" stroke="#101014" strokeWidth="2"/>
      </svg>
    )
  }

  if (type === 'europe') {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="9" stroke="#264EAB" strokeWidth="2"/>
        <path d="M11 3L12 6.5H15L12.5 8.5L13.5 12L11 10L8.5 12L9.5 8.5L7 6.5H10L11 3Z" fill="#264EAB"/>
      </svg>
    )
  }

  if (type === 'sustainable') {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2L3 6V11C3 15.5 6.5 19 11 20C15.5 19 19 15.5 19 11V6L11 2Z" stroke="#101014" strokeWidth="2"/>
        <path d="M8 11L10 13L14 9" stroke="#101014" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }

  if (type === 'customizable') {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="8" height="8" rx="2" stroke="#101014" strokeWidth="2"/>
        <rect x="12" y="2" width="8" height="8" rx="2" stroke="#101014" strokeWidth="2"/>
        <rect x="2" y="12" width="8" height="8" rx="2" stroke="#101014" strokeWidth="2"/>
        <rect x="12" y="12" width="8" height="8" rx="2" stroke="#101014" strokeWidth="2"/>
      </svg>
    )
  }

  if (type === 'subscription') {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#101014" strokeWidth="2"/>
        <path d="M11 6V11L14 14" stroke="#101014" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }

  return null
}

export function DripHeroSection() {
  return (
    <section className="max-w-[925px] mx-auto mb-16">
      <div className="w-full h-[380px] mb-8 rounded-[20px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          alt="Drip bags hero"
          src="/images/drip-bags/drip-bags.webp"
        />
      </div>

      <h1 className="font-semibold text-text text-3xl tracking-[-0.60px] leading-[49px] mb-6 text-center">
        DRIP BAGS
      </h1>

      <p className="font-normal text-text text-lg leading-[22px] mb-8 text-center">
        Drip bags make it easy for your customers to enjoy your coffee - just steep like tea.
        Send us your coffee and get a ready-to-sell product.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {features.map((feature, index) => (
          <Badge
            key={index}
            variant="outline"
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-[40px] border-0 h-auto"
          >
            <FeatureIcon type={feature.icon} />
            <span className="font-medium text-text text-lg">{feature.text}</span>
          </Badge>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button className="h-auto px-6 py-4 bg-main rounded-[40px] border-2 border-main hover:bg-main/90">
          <span className="font-medium text-white text-base tracking-[0.48px]">
            ADD TO WAITING LIST FOR TEST
          </span>
          <svg className="w-2 h-[13px] ml-2.5" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 6.5L1 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
        <Button
          variant="outline"
          className="h-auto px-6 py-4 bg-white rounded-[40px] border-2 border-main text-main hover:bg-gray-50"
        >
          <span className="font-medium text-main text-base tracking-[0.48px]">
            TEST YOUR COFFEE
          </span>
        </Button>
      </div>
    </section>
  )
}
