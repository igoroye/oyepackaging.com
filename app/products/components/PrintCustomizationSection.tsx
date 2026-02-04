'use client'

import { useState } from 'react'

const printOptions = [
  {
    id: 'single',
    title: 'SINGLE COLOR',
    subtitle: '(from stock)',
  },
  {
    id: 'partly',
    title: 'PARTLY PRINTED',
    subtitle: '(front & back)',
  },
  {
    id: 'fully',
    title: 'FULLY PRINTED',
    subtitle: '(front & back + side gussets)',
  },
]

const colorSwatches = [
  { color: '#ffffff', border: true },
  { color: '#101014', border: false },
  { color: '#7ba0d0', border: false },
  { color: '#1e3e89', border: false },
]

function BagPrint({ type }: { type: string }) {
  if (type === 'single') {
    return (
      <svg width="205" height="263" viewBox="0 0 205 263" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 80 L30 250 L175 250 L175 80 L102.5 20 L30 80Z" fill="#D8D8D8" stroke="#101014" strokeWidth="2"/>
        <path d="M30 80 L175 80" stroke="#101014" strokeWidth="1.5" opacity="0.3"/>
        <path d="M175 80 L175 250 L205 230 L205 60 L175 80Z" fill="#C0C0C0" stroke="#101014" strokeWidth="2"/>
      </svg>
    )
  }

  if (type === 'partly') {
    return (
      <svg width="202" height="264" viewBox="0 0 202 264" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="brandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#E8F4FF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#D0E8FF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path d="M30 80 L30 250 L172 250 L172 80 L101 20 L30 80Z" fill="url(#brandGrad)" stroke="#101014" strokeWidth="2"/>
        <ellipse cx="101" cy="150" rx="35" ry="35" fill="#264EAB"/>
        <text x="101" y="160" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">Ö</text>
        <path d="M70 190 L132 190" stroke="#264EAB" strokeWidth="2"/>
        <text x="101" y="210" textAnchor="middle" fill="#264EAB" fontSize="12">YE</text>
        <path d="M172 80 L172 250 L202 230 L202 60 L172 80Z" fill="#C0D8F0" stroke="#101014" strokeWidth="2"/>
      </svg>
    )
  }

  if (type === 'fully') {
    return (
      <svg width="191" height="264" viewBox="0 0 191 264" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fullBrandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#E8F4FF', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#D0E8FF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path d="M25 80 L25 250 L166 250 L166 80 L95.5 20 L25 80Z" fill="url(#fullBrandGrad)" stroke="#101014" strokeWidth="2"/>
        <ellipse cx="95.5" cy="150" rx="40" ry="40" fill="#264EAB"/>
        <text x="95.5" y="162" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold">Ö</text>
        <path d="M60 195 L131 195" stroke="#264EAB" strokeWidth="2.5"/>
        <text x="95.5" y="220" textAnchor="middle" fill="#264EAB" fontSize="14" fontWeight="600">YE</text>
        <path d="M166 80 L166 250 L191 230 L191 60 L166 80Z" fill="#A8C8E8" stroke="#101014" strokeWidth="2"/>
        <rect x="170" y="100" width="17" height="120" fill="#264EAB" opacity="0.3"/>
      </svg>
    )
  }

  return null
}

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
              <BagPrint type={option.id} />
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
