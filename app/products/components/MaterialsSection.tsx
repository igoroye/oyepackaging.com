'use client'

import { Card, CardContent } from '@/components/ui/card'

const materials = [
  {
    title: 'PERFORMANCE SERIES',
    type: 'performance',
    features: [
      'Extended coffee shelf life',
      'Metalized effects possible',
      '100% recyclable material',
      'Materials sourced from Europe',
    ],
    recyclableCode: 'Recyclable code 5',
    recyclingRate: 3,
  },
  {
    title: 'BARRIER SERIES',
    type: 'barrier',
    features: [
      'Regular barrier',
      'Transparent elements possible',
      '100% recyclable material',
      'Materials sourced from Europe',
    ],
    recyclableCode: 'Recyclable code 5',
    sustainabilityRate: 5,
  },
]

function RatingDots({ count, maxCount = 5 }: { count: number; maxCount?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxCount }).map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${i < count ? 'bg-main' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  )
}

function MaterialTexture({ type }: { type: string }) {
  if (type === 'performance') {
    return (
      <svg width="392" height="132" viewBox="0 0 392 132" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#C0C0C0', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#E8E8E8', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#A8A8A8', stopOpacity: 1 }} />
          </linearGradient>
          <pattern id="metalPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="20" y2="20" stroke="#D0D0D0" strokeWidth="0.5" opacity="0.3"/>
            <line x1="20" y1="0" x2="0" y2="20" stroke="#B0B0B0" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="392" height="132" fill="url(#metalGrad)" rx="10"/>
        <rect width="392" height="132" fill="url(#metalPattern)" rx="10"/>
      </svg>
    )
  }

  return (
    <svg width="392" height="132" viewBox="0 0 392 132" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="barrierGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#F0F0F0', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#E0E0E0', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="392" height="132" fill="url(#barrierGrad)" rx="10"/>
      <rect x="40" y="20" width="80" height="92" fill="#E8E8E8" opacity="0.5" rx="5"/>
      <rect x="140" y="20" width="80" height="92" fill="#D8D8D8" opacity="0.5" rx="5"/>
      <rect x="240" y="20" width="80" height="92" fill="#E8E8E8" opacity="0.5" rx="5"/>
    </svg>
  )
}

export function MaterialsSection() {
  return (
    <div>
      <h3 className="text-[22px] font-medium text-text mb-6">MATERIALS</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {materials.map((material, index) => (
          <Card key={index} className="bg-[#f7f7f8] rounded-[20px] border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="h-[132px] m-5 rounded-lg overflow-hidden">
                <MaterialTexture type={material.type} />
              </div>
              <div className="px-6 pb-6">
                <h4 className="text-lg font-medium text-text mb-3">{material.title}</h4>
                <ul className="space-y-1 mb-4">
                  {material.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-text flex items-start gap-2">
                      <span className="text-main mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 bg-white rounded-full border border-[#b7b7b9]/30 text-xs italic text-text">
                    {material.recyclableCode}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-[#b7b7b9]/30 text-xs italic text-text">
                    {material.recyclingRate !== undefined ? 'Recycling rate' : 'Sustainability rate'}
                    <RatingDots count={material.recyclingRate ?? material.sustainabilityRate ?? 0} />
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
