'use client'

import { Card, CardContent } from '@/components/ui/card'

function PaperboardTexture() {
  return (
    <svg width="305" height="132" viewBox="0 0 305 132" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="paperTexture" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="#F5E6D3"/>
          <path d="M0 20 Q10 15 20 20 T40 20" stroke="#E8D4B8" strokeWidth="0.5" opacity="0.5"/>
          <path d="M0 30 Q10 25 20 30 T40 30" stroke="#E8D4B8" strokeWidth="0.5" opacity="0.3"/>
          <circle cx="10" cy="10" r="1" fill="#D4C4A8" opacity="0.3"/>
          <circle cx="30" cy="25" r="1.5" fill="#D4C4A8" opacity="0.2"/>
        </pattern>
      </defs>
      <rect width="305" height="132" fill="url(#paperTexture)" rx="10"/>
      <rect width="305" height="132" fill="#F5E6D3" opacity="0.3" rx="10"/>
    </svg>
  )
}

function RatingStars() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 1L7.5 4.5H11L8 7L9.5 11L6 8.5L2.5 11L4 7L1 4.5H4.5L6 1Z" fill={star <= 4 ? "#264EAB" : "#D0D0D0"}/>
        </svg>
      ))}
    </div>
  )
}

export function MaterialsCartonSection() {
  return (
    <Card className="rounded-[20px] border border-[#101014]/30">
      <CardContent className="p-6">
        <h3 className="font-medium text-text text-[22px] mb-6">
          MATERIALS
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-[305px_1fr] gap-8">
          <div className="w-full h-[132px] rounded-lg overflow-hidden">
            <PaperboardTexture />
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-text text-lg">
              PAPERBOARD
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-sm text-text space-y-1">
                <p>Grammage: 360g / 600 microns</p>
                <p>FSC Certified</p>
              </div>
              <div className="text-sm text-text space-y-1">
                <p>100% recyclable material</p>
                <p>Compostable</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <RatingStars />
              <span className="text-sm text-text/60">Recyclable code 5</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
