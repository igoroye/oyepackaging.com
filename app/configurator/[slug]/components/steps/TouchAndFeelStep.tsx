import { Hand } from 'lucide-react'
import { useConfigurator } from '../../context/ConfiguratorContext'
import { InfoCard } from '../InfoCard'
import { NavigationButtons } from '../NavigationButtons'

export function TouchAndFeelStep() {
  const { config, selections, dispatch } = useConfigurator()
  const { touchAndFeel: tafConfig } = config

  const selectedOption = tafConfig.options.find(o => selections.touchAndFeel.includes(o.id))

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {tafConfig.options.map(option => {
          const isSelected = selections.touchAndFeel.includes(option.id)
          return (
            <button
              key={option.id}
              disabled={!option.enabled}
              onClick={() => dispatch({ type: 'SET_TOUCH_AND_FEEL', optionId: option.id })}
              className={`
                px-5 py-3 rounded-xl border transition-all [font-family:'Inter',Helvetica] font-medium text-sm
                ${!option.enabled
                  ? 'border-[#e5e7eb] bg-[#f9fafb] text-[#9ca3af] cursor-not-allowed'
                  : isSelected
                    ? 'border-[#264eab] bg-[#264eab] text-white'
                    : 'border-[#e5e7eb] bg-white text-text hover:border-[#9ca3af] cursor-pointer'
                }
              `}
            >
              {option.label}
            </button>
          )
        })}
      </div>

      {selectedOption && (
        <div>
          <h3 className="[font-family:'Inter',Helvetica] font-bold text-base text-text mb-2">
            ABOUT {selectedOption.label}
          </h3>
          <p className="[font-family:'Inter',Helvetica] text-sm leading-relaxed text-[#4b5563]">
            {tafConfig.aboutText}
          </p>
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
