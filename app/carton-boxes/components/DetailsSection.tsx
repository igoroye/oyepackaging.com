'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const certifications = [
  { label: 'FSC Certificate' },
  { label: 'Compostable Certificate' },
]

const keyFeatures = [
  'Highly recyclable materials',
  'Made in Europe',
  'Design check before print',
  'Production time from 4 - 6 weeks',
]

export function DetailsSection() {
  return (
    <Card className="bg-[#f7f7f8] rounded-[20px] border-0">
      <CardContent className="p-8">
        <h2 className="font-medium text-text text-[22px] mb-6">
          DETAILS THAT MAKE THE DIFFERENCE
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white rounded-[20px] border border-[#1010144c]">
            <CardContent className="p-6">
              <h3 className="font-medium text-text text-lg mb-4">
                CERTIFICATIONS
              </h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-white rounded-[50px] border border-[#b7b7b94c] h-auto px-5 py-[5px]"
                  >
                    <span className="font-normal italic text-text text-sm">
                      {cert.label}
                    </span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#7ba0d0]/25 rounded-[20px] border-0">
            <CardContent className="p-6">
              <h3 className="font-medium text-text text-lg mb-4">
                KEY FEATURES:
              </h3>
              <ul className="text-sm text-text space-y-1">
                {keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-main">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
