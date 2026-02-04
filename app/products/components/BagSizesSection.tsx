'use client'

import { useState } from 'react'

const bagSizes = ['250g', '500g', '1000g', '3000g', 'Custom size']

export function BagSizesSection() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  return (
    <div className="pt-6 border-t border-[#101014]/10">
      <h3 className="text-[22px] font-medium text-text mb-2">CHOOSE A BAG SIZE</h3>
      <p className="text-sm text-text mb-6">
        This product is perfectly tailored for display on shelves and transportation. It is suitable for all types of coffee beans (from small to very large).
      </p>
      <div className="flex flex-wrap gap-4">
        {bagSizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`min-w-[120px] h-[100px] lg:h-[123px] px-6 rounded-[20px] border transition-all text-[22px] font-medium ${
              selectedSize === size
                ? 'border-main border-2 bg-main/5 text-main'
                : 'border-[#101014] hover:border-main/50 text-text'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
