'use client'

import { Button } from '@/components/ui/button'

const heroFeatures = [
  { icon: 'customize', text: 'Customization options' },
  { icon: 'europe', text: 'Made in Europe' },
  { icon: 'materials', text: 'Innovative materials' },
  { icon: 'shield', text: 'Best coffee protection' },
]

export function ProductHeroSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      <div className="w-full lg:w-[550px] h-[300px] lg:h-[450px] bg-bg-beige rounded-[20px] relative overflow-hidden flex-shrink-0">
        <div className="hidden absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/50">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 1V14M1 7.5H14" stroke="#101014" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-[10px] text-text">HOLD AND ROTATE</span>
          </div>
          <div className="w-7 h-7 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full border border-white/50">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 3V12M3 7.5H12" stroke="#101014" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://c.animaapp.com/mko0yo41F03JfF/img/image-7.png"
            alt="Flat Bottom Bag"
            className="w-auto h-[280px] lg:h-[320px] object-contain"
          />
        </div>
      </div>

      <div className="flex-1">
        <h1 className="text-3xl lg:text-4xl font-bold text-text mb-4">FLAT BOTTOM BAGS</h1>
        <p className="text-lg text-text leading-relaxed mb-6">
          The bag is perfect for coffee roasters, offering various form factors, EU-made materials, and extensive customization options. With our configurator, you can create the package of your dreams.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {heroFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              {feature.icon === 'customize' && (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="8" height="8" rx="2" stroke="#101014" strokeWidth="2"/>
                  <rect x="13" y="1" width="8" height="8" rx="2" stroke="#101014" strokeWidth="2"/>
                  <rect x="1" y="13" width="8" height="8" rx="2" stroke="#101014" strokeWidth="2"/>
                  <rect x="13" y="13" width="8" height="8" rx="2" stroke="#101014" strokeWidth="2"/>
                </svg>
              )}
              {feature.icon === 'europe' && (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="10" stroke="#264EAB" strokeWidth="2"/>
                  <path d="M11 3L12.5 7H16L13 9.5L14.5 14L11 11L7.5 14L9 9.5L6 7H9.5L11 3Z" fill="#264EAB"/>
                </svg>
              )}
              {feature.icon === 'materials' && (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2L2 7V15L11 20L20 15V7L11 2Z" stroke="#101014" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M11 10V20M2 7L11 12L20 7" stroke="#101014" strokeWidth="2"/>
                </svg>
              )}
              {feature.icon === 'shield' && (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2L3 5V10C3 15 6.5 19 11 20C15.5 19 19 15 19 10V5L11 2Z" stroke="#101014" strokeWidth="2"/>
                  <path d="M8 11L10 13L14 9" stroke="#101014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              <span className="text-lg font-medium text-text">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button className="inline-flex items-center gap-2 px-6 py-4 bg-main rounded-[40px] border-2 border-main text-white text-base font-medium hover:bg-main/90">
            CONFIGURE PACKAGING
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 6.5L1 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
          <Button variant="outline" className="px-6 py-4 bg-white rounded-[40px] border-2 border-main text-main text-base font-medium hover:bg-gray-50">
            ORDER SAMPLE KIT
          </Button>
        </div>
      </div>
    </div>
  )
}
