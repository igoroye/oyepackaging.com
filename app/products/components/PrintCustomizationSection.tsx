'use client'

import { useState } from 'react'

const printOptions = [
  {
    id: 'single',
    title: 'SINGLE COLOR',
    subtitle: '(from stock)',
    image: 'https://c.animaapp.com/mko0yo41F03JfF/img/image-7.png',
  },
  {
    id: 'partly',
    title: 'PARTLY PRINTED',
    subtitle: '(front & back)',
    image: 'https://c.animaapp.com/mko0yo41F03JfF/img/image-7.png',
  },
  {
    id: 'fully',
    title: 'FULLY PRINTED',
    subtitle: '(front & back + side gussets)',
    image: 'https://c.animaapp.com/mko0yo41F03JfF/img/image-7.png',
  },
]

const colorSwatches = [
  { color: '#ffffff', border: true },
  { color: '#101014', border: false },
  { color: '#7ba0d0', border: false },
  { color: '#1e3e89', border: false },
]

export function PrintCustomizationSection() {
  const [selectedPrint, setSelectedPrint] = useState<string | null>(null)

  return (
    <div className="pt-6 border-t border-[#101014]/10">
      <h3 className="text-[22px] font-medium text-text mb-2">PRINT CUSTOMIZATION</h3>
      <p className="text-sm text-text mb-6">Try different print options for your package</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {printOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedPrint(option.id)}
            className={`group relative rounded-[20px] overflow-hidden transition-all ${
              selectedPrint === option.id ? 'ring-2 ring-main' : ''
            }`}
          >
            <div className="bg-bg-beige h-[200px] lg:h-[269px] flex items-center justify-center relative">
              {option.id === 'single' && (
                <div className="absolute top-4 left-4 flex gap-1">
                  {colorSwatches.map((swatch, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full ${swatch.border ? 'border border-[#101014]/30' : ''}`}
                      style={{ backgroundColor: swatch.color }}
                    />
                  ))}
                </div>
              )}
              <img
                src={option.image}
                alt={option.title}
                className="h-[180px] lg:h-[240px] w-auto object-contain"
              />
            </div>
            <div className="py-4 text-center">
              <p className="text-lg font-medium text-text">{option.title}</p>
              <p className="text-sm text-text">{option.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
