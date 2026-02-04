'use client'

import { Card, CardContent } from '@/components/ui/card'

const materials = [
  {
    title: 'PERFORMANCE SERIES',
    image: 'https://c.animaapp.com/mko0yo41F03JfF/img/image-7.png',
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
    image: 'https://c.animaapp.com/mko0yo41F03JfF/img/image-7.png',
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

export function MaterialsSection() {
  return (
    <div>
      <h3 className="text-[22px] font-medium text-text mb-6">MATERIALS</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {materials.map((material, index) => (
          <Card key={index} className="bg-[#f7f7f8] rounded-[20px] border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="h-[132px] bg-gradient-to-b from-gray-200 to-gray-100 m-5 rounded-lg overflow-hidden">
                <img
                  src={material.image}
                  alt={material.title}
                  className="w-full h-full object-cover opacity-60"
                />
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
