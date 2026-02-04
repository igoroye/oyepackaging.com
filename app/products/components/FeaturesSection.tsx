'use client'

const features = [
  {
    row: 1,
    items: [
      { id: 'top-zipper', label: 'TOP-OPENING ZIPPER' },
      { id: 'front-zipper', label: 'FRONT ZIPPER' },
      { id: 'tear-notch', label: 'TEAR NOTCH' },
    ],
  },
  {
    row: 2,
    items: [
      { id: 'coffee-valve', label: 'COFFEE VALVE' },
      { id: 'handle', label: 'HANDLE' },
    ],
  },
  {
    row: 3,
    items: [
      { id: 'carton-vertical', label: 'CARTON BOX (VERTICAL)' },
      { id: 'carton-horizontal', label: 'CARTON BOX (HORIZONTAL)' },
    ],
  },
]

function BagIllustration({ type }: { type: string }) {
  if (type === 'top-zipper') {
    return (
      <svg width="114" height="169" viewBox="0 0 114 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 40 L10 160 L104 160 L104 40 L57 10 L10 40Z" fill="#F7F7F8" stroke="#101014" strokeWidth="2"/>
        <path d="M20 45 L94 45" stroke="#264EAB" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="25" cy="45" r="4" fill="#264EAB"/>
        <circle cx="89" cy="45" r="4" fill="#264EAB"/>
        <line x1="30" y1="60" x2="84" y2="60" stroke="#101014" strokeWidth="1" strokeDasharray="2 2"/>
      </svg>
    )
  }

  if (type === 'front-zipper') {
    return (
      <svg width="114" height="169" viewBox="0 0 114 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 40 L10 160 L104 160 L104 40 L57 10 L10 40Z" fill="#F7F7F8" stroke="#101014" strokeWidth="2"/>
        <path d="M57 50 L57 150" stroke="#264EAB" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="57" cy="55" r="4" fill="#264EAB"/>
        <circle cx="57" cy="145" r="4" fill="#264EAB"/>
      </svg>
    )
  }

  if (type === 'tear-notch') {
    return (
      <svg width="114" height="169" viewBox="0 0 114 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 40 L10 160 L104 160 L104 40 L57 10 L10 40Z" fill="#F7F7F8" stroke="#101014" strokeWidth="2"/>
        <path d="M94 45 L104 40 L104 50 L94 45Z" fill="#FF6B6B" stroke="#101014" strokeWidth="2"/>
        <path d="M94 45 L88 45" stroke="#FF6B6B" strokeWidth="2" strokeDasharray="3 2"/>
      </svg>
    )
  }

  if (type === 'coffee-valve') {
    return (
      <svg width="114" height="169" viewBox="0 0 114 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 40 L10 160 L104 160 L104 40 L57 10 L10 40Z" fill="#F7F7F8" stroke="#101014" strokeWidth="2"/>
        <circle cx="57" cy="80" r="20" fill="white" stroke="#101014" strokeWidth="2"/>
        <circle cx="57" cy="80" r="12" fill="#264EAB" opacity="0.2"/>
        <circle cx="57" cy="80" r="6" fill="#264EAB"/>
        <path d="M57 74 L57 86" stroke="white" strokeWidth="2"/>
        <path d="M51 80 L63 80" stroke="white" strokeWidth="2"/>
      </svg>
    )
  }

  if (type === 'handle') {
    return (
      <svg width="114" height="169" viewBox="0 0 114 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 40 L10 160 L104 160 L104 40 L57 10 L10 40Z" fill="#F7F7F8" stroke="#101014" strokeWidth="2"/>
        <path d="M40 30 Q57 10 74 30" fill="none" stroke="#101014" strokeWidth="3" strokeLinecap="round"/>
        <rect x="38" y="28" width="8" height="10" rx="2" fill="#101014"/>
        <rect x="68" y="28" width="8" height="10" rx="2" fill="#101014"/>
      </svg>
    )
  }

  if (type === 'carton-vertical') {
    return (
      <svg width="129" height="198" viewBox="0 0 129 198" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20 L20 180 L109 180 L109 20 Z" fill="#F7F7F8" stroke="#101014" strokeWidth="2"/>
        <path d="M20 20 L64.5 5 L109 20" fill="#E8E8E8" stroke="#101014" strokeWidth="2"/>
        <line x1="20" y1="60" x2="109" y2="60" stroke="#101014" strokeWidth="1" opacity="0.3"/>
        <line x1="20" y1="100" x2="109" y2="100" stroke="#101014" strokeWidth="1" opacity="0.3"/>
        <line x1="20" y1="140" x2="109" y2="140" stroke="#101014" strokeWidth="1" opacity="0.3"/>
        <line x1="64.5" y1="20" x2="64.5" y2="180" stroke="#101014" strokeWidth="1" opacity="0.3"/>
      </svg>
    )
  }

  if (type === 'carton-horizontal') {
    return (
      <svg width="157" height="161" viewBox="0 0 157 161" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 40 L20 140 L137 140 L137 40 Z" fill="#F7F7F8" stroke="#101014" strokeWidth="2"/>
        <path d="M20 40 L78.5 25 L137 40" fill="#E8E8E8" stroke="#101014" strokeWidth="2"/>
        <line x1="40" y1="40" x2="40" y2="140" stroke="#101014" strokeWidth="1" opacity="0.3"/>
        <line x1="78.5" y1="40" x2="78.5" y2="140" stroke="#101014" strokeWidth="1" opacity="0.3"/>
        <line x1="117" y1="40" x2="117" y2="140" stroke="#101014" strokeWidth="1" opacity="0.3"/>
      </svg>
    )
  }

  return null
}

function FeatureCard({ id, label }: { id: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[281px] h-[200px] lg:h-[263px] bg-bg-gray/50 rounded-[20px] relative mb-4 flex items-center justify-center">
        <BagIllustration type={id} />
      </div>
      <p className="text-sm font-medium text-text text-center">{label}</p>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <div>
      <h3 className="text-[22px] font-medium text-text mb-8">FEATURES</h3>

      <div className="space-y-8">
        {features.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-6 ${
              row.items.length === 3
                ? 'grid-cols-1 sm:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2 max-w-[600px] mx-auto'
            }`}
          >
            {row.items.map((item) => (
              <FeatureCard key={item.id} id={item.id} label={item.label} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
