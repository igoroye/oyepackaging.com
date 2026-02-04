'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const touchFeelOptions = [
  { label: 'Matte', icon: 'matte' },
  { label: 'Soft touch', icon: 'soft' },
]

function TouchIcon({ type }: { type: string }) {
  if (type === 'matte') {
    return (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="20" height="20" rx="2" stroke="#101014" strokeWidth="2"/>
        <line x1="8" y1="13" x2="18" y2="13" stroke="#101014" strokeWidth="1.5"/>
        <line x1="8" y1="17" x2="18" y2="17" stroke="#101014" strokeWidth="1.5"/>
      </svg>
    )
  }

  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 3C7.5 3 3 7.5 3 13C3 18.5 7.5 23 13 23C18.5 23 23 18.5 23 13C23 7.5 18.5 3 13 3Z" stroke="#101014" strokeWidth="2"/>
      <path d="M13 8V18" stroke="#101014" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 13H18" stroke="#101014" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function CustomizationSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="rounded-[20px] border border-[#101014]/30">
        <CardContent className="p-6">
          <h3 className="font-medium text-text text-[22px] mb-6">
            PRINT CUSTOMIZATION
          </h3>

          <div className="relative">
            <div className="w-full h-[188px] bg-bg-beige rounded-[20px] flex items-center justify-center mb-4">
              <svg width="159" height="131" viewBox="0 0 159 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="boxGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#E8F4FF', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M15 25 L15 120 L144 120 L144 25 L79.5 5 L15 25Z" fill="url(#boxGrad)" stroke="#101014" strokeWidth="2"/>
                <path d="M15 25 L79.5 5 L144 25" stroke="#101014" strokeWidth="2"/>
                <circle cx="79.5" cy="65" r="25" fill="#264EAB"/>
                <text x="79.5" y="75" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">Ö</text>
                <line x1="15" y1="50" x2="144" y2="50" stroke="#101014" strokeWidth="1" opacity="0.2"/>
              </svg>
            </div>

            <div className="text-center">
              <p className="font-medium text-text text-lg">
                FULLY PRINTED
              </p>
              <p className="text-sm text-text">
                (front & back & bottom)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-[20px] border border-[#101014]/30">
        <CardContent className="p-6">
          <h3 className="font-medium text-text text-[22px] mb-6">
            TOUCH & FEEL CUSTOMIZATION
          </h3>

          <div className="flex flex-wrap gap-2">
            {touchFeelOptions.map((option, index) => (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center gap-2.5 px-5 py-1.5 bg-white rounded-[50px] border border-[#101014] h-auto"
              >
                <TouchIcon type={option.icon} />
                <span className="font-medium text-text text-sm">
                  {option.label}
                </span>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
