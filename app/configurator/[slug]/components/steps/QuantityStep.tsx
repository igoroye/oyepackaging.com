import { useState } from 'react'
import { Heart } from 'lucide-react'
import { useConfigurator } from '../../context/ConfiguratorContext'
import { InfoCard } from '../InfoCard'
import { NavigationButtons } from '../NavigationButtons'

export function QuantityStep() {
  const { config, selections, dispatch } = useConfigurator()
  const { quantity: qtyConfig } = config

  const [showCustom, setShowCustom] = useState(selections.customQuantity)
  const [customValue, setCustomValue] = useState(selections.customQuantity ? String(selections.quantity) : '')
  const [customError, setCustomError] = useState('')

  const designLabel = `Design 1`
  const helperText = qtyConfig.helperText.replace('{moq}', String(qtyConfig.moq))

  const handlePresetClick = (value: number) => {
    setShowCustom(false)
    setCustomError('')
    dispatch({ type: 'SET_QUANTITY', quantity: value, isCustom: false })
  }

  const handleCustomToggle = () => {
    setShowCustom(true)
  }

  const handleCustomApply = () => {
    const num = parseInt(customValue, 10)
    if (isNaN(num) || num <= 0) {
      setCustomError('Please enter a valid number')
      return
    }
    if (num < qtyConfig.moq) {
      setCustomError(`Minimum order quantity is ${qtyConfig.moq} pcs`)
      return
    }
    setCustomError('')
    dispatch({ type: 'SET_QUANTITY', quantity: num, isCustom: true })
  }

  return (
    <div className="flex flex-col gap-6">
      <h3 className="[font-family:'Inter',Helvetica] font-bold text-base text-text">
        QUANTITY FOR {designLabel.toUpperCase()} ({selections.quantity})
      </h3>

      <div className="flex flex-wrap gap-2.5">
        {qtyConfig.options.map(opt => (
          <button
            key={opt}
            onClick={() => handlePresetClick(opt)}
            className={`
              px-5 py-3 rounded-xl border transition-all [font-family:'Inter',Helvetica] font-medium text-sm min-w-[80px]
              ${!showCustom && selections.quantity === opt
                ? 'border-[#264eab] bg-[#264eab] text-white'
                : 'border-[#e5e7eb] bg-white text-text hover:border-[#9ca3af]'
              }
            `}
          >
            {opt.toLocaleString()}
          </button>
        ))}
        {qtyConfig.allowCustom && (
          <button
            onClick={handleCustomToggle}
            className={`
              px-5 py-3 rounded-xl border transition-all [font-family:'Inter',Helvetica] font-medium text-sm
              ${showCustom
                ? 'border-[#264eab] bg-[#264eab] text-white'
                : 'border-[#e5e7eb] bg-white text-text hover:border-[#9ca3af]'
              }
            `}
          >
            CUSTOM AMOUNT
          </button>
        )}
      </div>

      {showCustom && (
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <input
              type="number"
              value={customValue}
              onChange={e => { setCustomValue(e.target.value); setCustomError('') }}
              placeholder={`Min ${qtyConfig.moq}`}
              className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] focus:border-[#264eab] focus:outline-none [font-family:'Inter',Helvetica] text-sm"
            />
            {customError && (
              <p className="mt-1 text-xs text-red-500 [font-family:'Inter',Helvetica]">{customError}</p>
            )}
          </div>
          <button
            onClick={handleCustomApply}
            className="px-5 py-3 rounded-xl bg-[#264eab] text-white [font-family:'Inter',Helvetica] font-medium text-sm hover:bg-[#1d3d8a] transition-colors"
          >
            Apply
          </button>
        </div>
      )}

      <p className="[font-family:'Inter',Helvetica] text-sm text-[#4b5563] leading-relaxed">
        {helperText}
      </p>

      <InfoCard
        icon={<Heart className="w-5 h-5" />}
        text={qtyConfig.infoText}
      />

      <NavigationButtons />
    </div>
  )
}
