import { Maximize2, X } from 'lucide-react'
import { useConfigurator } from '../../context/ConfiguratorContext'
import { InfoCard } from '../InfoCard'
import { NavigationButtons } from '../NavigationButtons'

function PresetSizes() {
  const { config, selections, dispatch } = useConfigurator()
  const { size: sizeConfig } = config

  const activeSeries = sizeConfig.series.find(s => s.id === selections.series) ?? sizeConfig.series[0]

  return (
    <>
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
    </>
  )
}

function CustomSizeInputs() {
  const { config, selections, dispatch } = useConfigurator()
  const customConfig = config.size.customSize
  if (!customConfig) return null

  const values: Record<string, string> = {
    width: selections.customWidth,
    height: selections.customHeight,
    depth: selections.customDepth,
  }

  const hasDimensions = selections.customWidth || selections.customHeight || selections.customDepth

  return (
    <>
      <div>
        <h4 className="[font-family:'Inter',Helvetica] font-bold text-sm text-text mb-4">
          PACKAGING
        </h4>
        <div className="grid grid-cols-3 gap-3">
          {customConfig.fields.map(field => (
            <div key={field.id}>
              <label className="[font-family:'Inter',Helvetica] text-xs font-medium text-[#6b7280] block mb-1.5">
                {field.label}
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                placeholder={field.placeholder}
                value={values[field.id]}
                onChange={e => dispatch({ type: 'SET_CUSTOM_DIMENSION', field: field.id, value: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] focus:border-[#264eab] focus:outline-none [font-family:'Inter',Helvetica] text-sm"
              />
            </div>
          ))}
        </div>
        {hasDimensions && (
          <button
            onClick={() => dispatch({ type: 'CLEAR_CUSTOM_SIZE' })}
            className="flex items-center gap-1.5 mt-3 text-[#6b7280] hover:text-[#374151] transition-colors [font-family:'Inter',Helvetica] text-sm"
          >
            <X className="w-3.5 h-3.5" />
            CLEAR
          </button>
        )}
      </div>

      <p className="[font-family:'Inter',Helvetica] text-sm leading-relaxed text-[#4b5563]">
        {customConfig.aboutText}
      </p>
    </>
  )
}

export function SizeStep() {
  const { config, selections, dispatch } = useConfigurator()
  const { size: sizeConfig } = config

  const isCustom = selections.series === 'custom'
  const customEnabled = sizeConfig.customSize?.enabled ?? false

  const handleSeriesChange = (seriesId: string) => {
    dispatch({ type: 'SET_SERIES', series: seriesId })
    if (seriesId !== 'custom') {
      const series = sizeConfig.series.find(s => s.id === seriesId)
      const firstSize = series?.sizes.find(s => s.enabled)
      if (firstSize) dispatch({ type: 'SET_SIZE', size: firstSize.id })
    } else {
      dispatch({ type: 'SET_SIZE', size: '' })
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        {sizeConfig.series.map(series => (
          <label key={series.id} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="series"
              checked={selections.series === series.id}
              onChange={() => handleSeriesChange(series.id)}
              className="w-4 h-4 accent-[#264eab]"
            />
            <span className="[font-family:'Inter',Helvetica] font-medium text-sm text-text">
              {series.label}
            </span>
          </label>
        ))}
        {customEnabled && (
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="series"
              checked={isCustom}
              onChange={() => handleSeriesChange('custom')}
              className="w-4 h-4 accent-[#264eab]"
            />
            <span className="[font-family:'Inter',Helvetica] font-medium text-sm text-text">
              {sizeConfig.customSize!.label}
            </span>
          </label>
        )}
      </div>

      {isCustom ? <CustomSizeInputs /> : <PresetSizes />}

      <InfoCard
        icon={<Maximize2 className="w-5 h-5" />}
        text={sizeConfig.infoText}
      />

      <NavigationButtons />
    </div>
  )
}
