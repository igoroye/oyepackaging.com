import { Maximize2 } from 'lucide-react'
import { useConfigurator } from '../../context/ConfiguratorContext'
import { InfoCard } from '../InfoCard'
import { NavigationButtons } from '../NavigationButtons'

export function SizeStep() {
  const { config, selections, dispatch } = useConfigurator()
  const { size: sizeConfig } = config

  const activeSeries = sizeConfig.series.find(s => s.id === selections.series) ?? sizeConfig.series[0]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        {sizeConfig.series.map(series => (
          <label key={series.id} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="series"
              checked={selections.series === series.id}
              onChange={() => {
                dispatch({ type: 'SET_SERIES', series: series.id })
                const firstSize = series.sizes.find(s => s.enabled)
                if (firstSize) dispatch({ type: 'SET_SIZE', size: firstSize.id })
              }}
              className="w-4 h-4 accent-[#264eab]"
            />
            <span className="[font-family:'Inter',Helvetica] font-medium text-sm text-text">
              {series.label}
            </span>
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        {activeSeries.sizes.map(size => (
          <button
            key={size.id}
            disabled={!size.enabled}
            onClick={() => dispatch({ type: 'SET_SIZE', size: size.id })}
            className={`
              flex items-center gap-4 px-5 py-3.5 rounded-xl border text-left transition-all
              ${selections.size === size.id
                ? 'border-[#264eab] bg-[#f0f4fa]'
                : 'border-[#e5e7eb] bg-white hover:border-[#9ca3af]'
              }
              ${!size.enabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <span className="[font-family:'Inter',Helvetica] font-semibold text-sm text-text min-w-[50px]">
              {size.weight}
            </span>
            <span className="[font-family:'Inter',Helvetica] text-sm text-[#6b7280]">
              {size.dimensions}
            </span>
          </button>
        ))}
      </div>

      <div>
        <h3 className="[font-family:'Inter',Helvetica] font-bold text-base text-text mb-2">
          {activeSeries.aboutTitle}
        </h3>
        <p className="[font-family:'Inter',Helvetica] text-sm leading-relaxed text-[#4b5563]">
          {activeSeries.aboutText}
        </p>
      </div>

      <InfoCard
        icon={<Maximize2 className="w-5 h-5" />}
        text={sizeConfig.infoText}
      />

      <NavigationButtons />
    </div>
  )
}
