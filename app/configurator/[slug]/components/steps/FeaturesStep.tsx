import { Package } from 'lucide-react'
import { useConfigurator } from '../../context/ConfiguratorContext'
import { InfoCard } from '../InfoCard'
import { NavigationButtons } from '../NavigationButtons'

export function FeaturesStep() {
  const { config, selections, dispatch } = useConfigurator()
  const { features: featConfig } = config

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {featConfig.features.map(feat => {
          const isSelected = selections.features.includes(feat.id)
          return (
            <button
              key={feat.id}
              disabled={!feat.enabled}
              onClick={() => dispatch({ type: 'TOGGLE_FEATURE', featureId: feat.id })}
              className={`
                flex items-center gap-2 px-5 py-3 rounded-xl border transition-all [font-family:'Inter',Helvetica] font-medium text-sm
                ${!feat.enabled
                  ? 'border-[#e5e7eb] bg-[#f9fafb] text-[#9ca3af] cursor-not-allowed'
                  : isSelected
                    ? 'border-[#264eab] bg-white text-[#264eab]'
                    : 'border-[#e5e7eb] bg-white text-text hover:border-[#9ca3af] cursor-pointer'
                }
              `}
            >
              <div className={`
                w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                ${!feat.enabled
                  ? 'border-[#d1d5db]'
                  : isSelected
                    ? 'border-[#264eab] bg-[#264eab]'
                    : 'border-[#9ca3af]'
                }
              `}>
                {isSelected && feat.enabled && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              {feat.label}
            </button>
          )
        })}
      </div>

      <InfoCard
        icon={<Package className="w-5 h-5" />}
        text={featConfig.infoText}
      />

      <NavigationButtons />
    </div>
  )
}
