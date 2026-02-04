'use client'

import { Card, CardContent } from '@/components/ui/card'

const features = [
  { name: 'TOP OPENING', type: 'top-opening' },
  { name: 'TEAR STRIP', type: 'tear-strip' },
  { name: 'PERFORATION', type: 'perforation' },
  { name: 'CUTOUT', type: 'cutout' },
  { name: 'PERFORATED TEAR STRIP', type: 'perforated-tear' },
]

function FeatureIllustration({ type }: { type: string }) {
  const baseBox = (
    <path d="M30 30 L30 120 L145 120 L145 30 L87.5 10 L30 30Z" fill="#F7F7F8" stroke="#101014" strokeWidth="2"/>
  )

  if (type === 'top-opening') {
    return (
      <svg width="175" height="148" viewBox="0 0 175 148" fill="none" xmlns="http://www.w3.org/2000/svg">
        {baseBox}
        <path d="M30 30 L87.5 10 L145 30" stroke="#101014" strokeWidth="2"/>
        <path d="M40 30 L40 10 L87.5 5 L135 10 L135 30" stroke="#264EAB" strokeWidth="2.5" fill="none"/>
        <circle cx="45" cy="20" r="3" fill="#264EAB"/>
        <circle cx="130" cy="20" r="3" fill="#264EAB"/>
      </svg>
    )
  }

  if (type === 'tear-strip') {
    return (
      <svg width="175" height="148" viewBox="0 0 175 148" fill="none" xmlns="http://www.w3.org/2000/svg">
        {baseBox}
        <path d="M30 30 L87.5 10 L145 30" stroke="#101014" strokeWidth="2"/>
        <line x1="30" y1="50" x2="145" y2="50" stroke="#FF6B6B" strokeWidth="2.5" strokeDasharray="5 3"/>
        <path d="M140 45 L150 50 L140 55Z" fill="#FF6B6B"/>
      </svg>
    )
  }

  if (type === 'perforation') {
    return (
      <svg width="175" height="148" viewBox="0 0 175 148" fill="none" xmlns="http://www.w3.org/2000/svg">
        {baseBox}
        <path d="M30 30 L87.5 10 L145 30" stroke="#101014" strokeWidth="2"/>
        <line x1="30" y1="65" x2="145" y2="65" stroke="#101014" strokeWidth="1.5" strokeDasharray="4 4"/>
        <circle cx="35" cy="65" r="2" fill="#101014"/>
        <circle cx="50" cy="65" r="2" fill="#101014"/>
        <circle cx="65" cy="65" r="2" fill="#101014"/>
        <circle cx="80" cy="65" r="2" fill="#101014"/>
      </svg>
    )
  }

  if (type === 'cutout') {
    return (
      <svg width="175" height="148" viewBox="0 0 175 148" fill="none" xmlns="http://www.w3.org/2000/svg">
        {baseBox}
        <path d="M30 30 L87.5 10 L145 30" stroke="#101014" strokeWidth="2"/>
        <rect x="65" y="55" width="45" height="35" rx="5" stroke="#264EAB" strokeWidth="2" fill="white"/>
      </svg>
    )
  }

  if (type === 'perforated-tear') {
    return (
      <svg width="175" height="148" viewBox="0 0 175 148" fill="none" xmlns="http://www.w3.org/2000/svg">
        {baseBox}
        <path d="M30 30 L87.5 10 L145 30" stroke="#101014" strokeWidth="2"/>
        <line x1="30" y1="50" x2="145" y2="50" stroke="#FF6B6B" strokeWidth="2" strokeDasharray="5 3"/>
        <line x1="30" y1="55" x2="145" y2="55" stroke="#101014" strokeWidth="1" strokeDasharray="3 3"/>
      </svg>
    )
  }

  return null
}

export function CartonFeaturesSection() {
  return (
    <div>
      <h2 className="font-medium text-text text-[22px] mb-6">
        FEATURES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-bg-gray rounded-[20px] border-0"
          >
            <CardContent className="p-8">
              <div className="relative h-[148px] flex items-center justify-center mb-4">
                <FeatureIllustration type={feature.type} />
              </div>
              <p className="font-medium text-text text-sm text-center">
                {feature.name}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
