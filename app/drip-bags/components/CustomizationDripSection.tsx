'use client'

import { Card, CardContent } from '@/components/ui/card'

export function CustomizationDripSection() {
  return (
    <section className="max-w-[925px] mx-auto mb-16">
      <h2 className="font-semibold text-text text-3xl tracking-[-0.60px] leading-[49px] mb-8 text-center">
        СUSTOMIZATION OPTIONS
      </h2>

      <Card className="rounded-[20px] border border-[#101014]/30">
        <CardContent className="flex flex-col lg:flex-row gap-8 p-8">
          <div className="flex-1 bg-[#f7f7f8] rounded-[20px] p-6 relative min-h-[300px] flex items-center justify-center">
            <svg width="217" height="259" viewBox="0 0 217 259" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="dripGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#E8F4FF', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <rect x="40" y="40" width="137" height="180" rx="8" fill="url(#dripGrad)" stroke="#101014" strokeWidth="2"/>
              <path d="M40 80L108.5 40L177 80" stroke="#101014" strokeWidth="2"/>
              <rect x="60" y="100" width="97" height="100" rx="5" fill="#F7F7F8" stroke="#264EAB" strokeWidth="1.5"/>
              <circle cx="108.5" cy="150" r="20" fill="#264EAB"/>
              <text x="108.5" y="158" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Ö</text>
              <path d="M80 220L108.5 240L137 220" stroke="#101014" strokeWidth="1.5" strokeDasharray="3 3"/>
            </svg>

            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-2 bg-white/40 backdrop-blur-sm rounded-full border border-white/60">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 1V14M1 7.5H14" stroke="#101014" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-[10px] text-text">HOLD AND ROTATE</span>
            </div>

            <div className="absolute top-1/2 right-4 w-[27px] h-[27px] bg-white/40 backdrop-blur-sm rounded-full border border-white/60 flex items-center justify-center">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="2" fill="#101014"/>
                <path d="M7.5 3V5M7.5 10V12M3 7.5H5M10 7.5H12" stroke="#101014" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-normal text-text text-[22px] leading-[39px] mb-4">
                DRIP BAGS
              </h3>
              <p className="font-normal text-text text-sm leading-[22px] mb-8">
                Customize every part of your product
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f7f7f8] rounded-[20px] p-4 flex items-center justify-center min-h-[60px]">
                <span className="font-medium text-black text-sm text-center">
                  DRIP PACKAGING
                </span>
              </div>
              <div className="bg-[#f7f7f8] rounded-[20px] p-4 flex items-center justify-center min-h-[60px]">
                <span className="font-medium text-black text-sm text-center">
                  DRIP BOX
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
