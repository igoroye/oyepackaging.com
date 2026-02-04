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

function FeatureCard({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[281px] h-[200px] lg:h-[263px] bg-bg-gray/50 rounded-[20px] relative mb-4 flex items-center justify-center">
        <div className="w-[95px] h-[95px] bg-white rounded-full flex items-center justify-center shadow-sm">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="#101014" strokeWidth="2"/>
            <path d="M20 12V28M12 20H28" stroke="#101014" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
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
              <FeatureCard key={item.id} label={item.label} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
