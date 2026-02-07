import { Hand, Waves, Sparkles, Leaf } from 'lucide-react'
import { useConfigurator } from '../../context/ConfiguratorContext'
import { InfoCard } from '../InfoCard'
import { NavigationButtons } from '../NavigationButtons'
import type { TouchAndFeelOption } from '../../config/types'

const iconMap = {
  hand: Hand,
  waves: Waves,
  sparkles: Sparkles,
} as const

function OptionPill({ option, isSelected, onSelect }: {
  option: TouchAndFeelOption
  isSelected: boolean
  onSelect: () => void
}) {
  const Icon = iconMap[option.icon]
  return (
    <button
      disabled={!option.enabled}
      onClick={onSelect}
      className={`
        inline-flex items-center gap-2 px-5 py-3 rounded-full border transition-all
        [font-family:'Inter',Helvetica] font-medium text-sm
        ${!option.enabled
          ? 'border-[#e5e7eb] bg-[#f9fafb] text-[#9ca3af] cursor-not-allowed'
          : isSelected
            ? 'border-[#264eab] bg-[#264eab] text-white'
            : 'border-[#e5e7eb] bg-white text-text hover:border-[#9ca3af] cursor-pointer'
        }
      `}
    >
      <Icon className="w-4 h-4" />
      {option.label}
    </button>
  )
}

function SustainabilityRating({ rating, maxRating }: { rating: number; maxRating: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="[font-family:'Inter',Helvetica] font-bold text-sm text-text">
        SUSTAINABILITY RATE
      </span>
      <div className="flex gap-0.5">
        {Array.from({ length: maxRating }).map((_, i) => (
          <Leaf
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-text fill-text' : 'text-[#d1d5db]'}`}
          />
        ))}
      </div>
    </div>
  )
}

export function TouchAndFeelStep() {
  const { config, selections, dispatch } = useConfigurator()
  const { touchAndFeel: tafConfig } = config

  const selectedId = selections.touchAndFeel[0]
  const selectedOption = tafConfig.options.find(o => o.id === selectedId)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {tafConfig.options.filter(o => o.enabled).map(option => (
          <OptionPill
            key={option.id}
            option={option}
            isSelected={option.id === selectedId}
            onSelect={() => dispatch({ type: 'SET_TOUCH_AND_FEEL', optionId: option.id })}
          />
        ))}
      </div>

      {selectedOption && (
        <div className="flex flex-col gap-4">
          {selectedOption.showMoqWarning && selectedOption.moqWarningText && (
            <p className="[font-family:'Inter',Helvetica] text-sm text-[#dc2626] italic">
              {selectedOption.moqWarningText}
            </p>
          )}

          <h3 className="[font-family:'Inter',Helvetica] font-bold text-lg text-text">
            {selectedOption.title}
          </h3>

          <p className="[font-family:'Inter',Helvetica] text-sm leading-relaxed text-[#4b5563]">
            {selectedOption.description}
          </p>

          <SustainabilityRating
            rating={selectedOption.sustainabilityRating}
            maxRating={selectedOption.maxRating}
          />
        </div>
      )}

      <InfoCard
        icon={<Hand className="w-5 h-5" />}
        text={tafConfig.infoText}
      />

      <NavigationButtons />
    </div>
  )
}
