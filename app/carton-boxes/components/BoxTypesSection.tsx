'use client'

import { Card, CardContent } from '@/components/ui/card'

const boxTypes = [
  {
    category: 'FLAT BOTTOM BAGS',
    boxes: [
      { name: 'VERTICAL BOX', type: 'vertical' },
      { name: 'HORIZONTAL BOX', type: 'horizontal' },
    ],
  },
  {
    category: 'STANDUP BAGS',
    boxes: [
      { name: 'TUCK FLAP BOX', type: 'tuck-flap' },
    ],
  },
  {
    category: 'DRIP & BREW BAGS',
    boxes: [
      { name: 'CLASSY BOX', type: 'classy' },
      { name: 'PERFORATED BOX', type: 'perforated' },
      { name: 'ENVELOPE BOX', type: 'envelope' },
    ],
  },
]

function BoxIllustration({ type }: { type: string }) {
  if (type === 'vertical') {
    return (
      <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 30 L20 140 L100 140 L100 30 L60 10 L20 30Z" fill="#F7F7F8" stroke="#101014" strokeWidth="2"/>
        <path d="M20 30 L60 10 L100 30" stroke="#101014" strokeWidth="2"/>
        <line x1="20" y1="60" x2="100" y2="60" stroke="#101014" strokeWidth="1" opacity="0.2"/>
        <line x1="20" y1="90" x2="100" y2="90" stroke="#101014" strokeWidth="1" opacity="0.2"/>
        <line x1="60" y1="30" x2="60" y2="140" stroke="#101014" strokeWidth="1" opacity="0.2"/>
      </svg>
    )
  }

  if (type === 'horizontal') {
    return (
      <svg width="150" height="120" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 30 L20 100 L130 100 L130 30 L75 10 L20 30Z" fill="#F7F7F8" stroke="#101014" strokeWidth="2"/>
        <path d="M20 30 L75 10 L130 30" stroke="#101014" strokeWidth="2"/>
        <line x1="40" y1="30" x2="40" y2="100" stroke="#101014" strokeWidth="1" opacity="0.2"/>
        <line x1="75" y1="30" x2="75" y2="100" stroke="#101014" strokeWidth="1" opacity="0.2"/>
        <line x1="110" y1="30" x2="110" y2="100" stroke="#101014" strokeWidth="1" opacity="0.2"/>
      </svg>
    )
  }

  if (type === 'tuck-flap') {
    return (
      <svg width="130" height="150" viewBox="0 0 130 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 45 L25 135 L105 135 L105 45" fill="#F7F7F8" stroke="#101014" strokeWidth="2"/>
        <path d="M25 45 L65 25 L105 45" fill="#E8E8E8" stroke="#101014" strokeWidth="2"/>
        <path d="M35 45 L35 20 L65 15 L95 20 L95 45" stroke="#101014" strokeWidth="2" fill="none"/>
        <line x1="25" y1="70" x2="105" y2="70" stroke="#101014" strokeWidth="1" opacity="0.2"/>
        <line x1="25" y1="100" x2="105" y2="100" stroke="#101014" strokeWidth="1" opacity="0.2"/>
      </svg>
    )
  }

  if (type === 'classy') {
    return (
      <svg width="110" height="140" viewBox="0 0 110 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 40 L20 130 L90 130 L90 40" fill="#F7F7F8" stroke="#101014" strokeWidth="2"/>
        <path d="M20 40 L55 20 L90 40" fill="#E8E8E8" stroke="#101014" strokeWidth="2"/>
        <rect x="35" y="65" width="40" height="50" rx="3" stroke="#101014" strokeWidth="1.5" fill="none"/>
        <line x1="20" y1="60" x2="90" y2="60" stroke="#101014" strokeWidth="1" opacity="0.2"/>
      </svg>
    )
  }

  if (type === 'perforated') {
    return (
      <svg width="110" height="140" viewBox="0 0 110 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 40 L20 130 L90 130 L90 40" fill="#F7F7F8" stroke="#101014" strokeWidth="2"/>
        <path d="M20 40 L55 20 L90 40" fill="#E8E8E8" stroke="#101014" strokeWidth="2"/>
        <line x1="25" y1="75" x2="85" y2="75" stroke="#101014" strokeWidth="1" strokeDasharray="3 3"/>
        <line x1="20" y1="60" x2="90" y2="60" stroke="#101014" strokeWidth="1" opacity="0.2"/>
      </svg>
    )
  }

  if (type === 'envelope') {
    return (
      <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="20" width="110" height="70" rx="3" fill="#F7F7F8" stroke="#101014" strokeWidth="2"/>
        <path d="M15 20 L70 55 L125 20" stroke="#101014" strokeWidth="2" fill="none"/>
        <path d="M15 90 L45 60" stroke="#101014" strokeWidth="2"/>
        <path d="M125 90 L95 60" stroke="#101014" strokeWidth="2"/>
      </svg>
    )
  }

  return null
}

export function BoxTypesSection() {
  return (
    <Card className="rounded-[20px] border border-[#101014]/30 bg-[#f7f7f8]/50">
      <CardContent className="p-6">
        <h3 className="font-medium text-text text-[22px] mb-6">
          TYPES OF BOXES
        </h3>

        <div className="space-y-6">
          {boxTypes.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h4 className="font-medium text-text text-lg mb-4 text-center">
                {category.category}
              </h4>
              <Card className="bg-[#f7f7f8] rounded-[20px] border-0">
                <CardContent className="p-6">
                  <div className={`grid gap-6 ${
                    category.boxes.length === 3
                      ? 'grid-cols-1 sm:grid-cols-3'
                      : category.boxes.length === 2
                      ? 'grid-cols-1 sm:grid-cols-2'
                      : 'grid-cols-1 sm:grid-cols-1 max-w-[300px] mx-auto'
                  }`}>
                    {category.boxes.map((box, index) => (
                      <div key={index} className="text-center">
                        <Card className="bg-white rounded-[20px] border border-[#101014] mb-2.5">
                          <CardContent className="p-8 flex items-center justify-center h-[150px]">
                            <BoxIllustration type={box.type} />
                          </CardContent>
                        </Card>
                        <p className="font-medium text-text text-sm text-center">
                          {box.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
