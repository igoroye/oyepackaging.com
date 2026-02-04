'use client'

import { useState } from 'react'

const touchOptions = [
  { id: 'matte', label: 'Matte' },
  { id: 'premium-matte', label: 'Premium Matte' },
  { id: 'soft-touch', label: 'Soft touch' },
  { id: 'sandy-touch', label: 'Sandy touch' },
]

export function TouchFeelSection() {
  const [selectedTouch, setSelectedTouch] = useState<string | null>(null)

  return (
    <div className="pt-6 border-t border-[#101014]/10">
      <h3 className="text-[22px] font-medium text-text mb-2">TOUCH & FEEL CUSTOMIZATION</h3>
      <p className="text-sm text-text mb-6">
        Indulge in a sensory experience with various tactile effects. Customize the touch and feel of your bag with options such as:
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        {touchOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedTouch(option.id)}
            className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full border transition-all ${
              selectedTouch === option.id
                ? 'border-main bg-main/5 text-main'
                : 'border-[#101014] hover:border-main/50 text-text'
            }`}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="12" stroke="currentColor" strokeWidth="2"/>
              <circle cx="13" cy="13" r="6" fill="currentColor" opacity="0.3"/>
            </svg>
            <span className="text-sm font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
