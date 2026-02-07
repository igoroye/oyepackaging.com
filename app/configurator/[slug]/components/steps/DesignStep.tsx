import { Palette } from 'lucide-react'
import { useConfigurator } from '../../context/ConfiguratorContext'
import { InfoCard } from '../InfoCard'
import { NavigationButtons } from '../NavigationButtons'

export function DesignStep() {
  const { config, selections, dispatch } = useConfigurator()
  const { design: designConfig } = config

  const activeType = designConfig.types.find(t => t.id === selections.designType) ?? designConfig.types[0]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {designConfig.types.map(dt => (
          <button
            key={dt.id}
            onClick={() => dispatch({ type: 'SET_DESIGN_TYPE', designType: dt.id })}
            className={`
              px-5 py-3 rounded-xl border transition-all [font-family:'Inter',Helvetica] font-medium text-sm
              ${selections.designType === dt.id
                ? 'border-[#264eab] bg-[#264eab] text-white'
                : 'border-[#e5e7eb] bg-white text-text hover:border-[#9ca3af]'
              }
            `}
          >
            {dt.label}
          </button>
        ))}
      </div>

      <div>
        <h3 className="[font-family:'Inter',Helvetica] font-bold text-base text-text mb-3">
          {activeType.title}
        </h3>
        <p className="[font-family:'Inter',Helvetica] text-sm leading-relaxed text-[#4b5563]">
          {activeType.description}
        </p>
      </div>

      {activeType.colorOptions && activeType.colorOptions.length > 0 && (
        <div className="p-5 rounded-xl border border-[#e5e7eb] bg-white">
          <h4 className="[font-family:'Inter',Helvetica] font-bold text-sm text-text mb-3">
            COLOR
          </h4>
          <div className="flex items-center gap-6">
            {activeType.colorOptions.map(color => (
              <label key={color.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="designColor"
                  checked={selections.designColor === color.id}
                  onChange={() => dispatch({ type: 'SET_DESIGN_COLOR', color: color.id })}
                  className="w-4 h-4 accent-[#264eab]"
                />
                <span className="[font-family:'Inter',Helvetica] font-medium text-sm text-text">
                  {color.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      <InfoCard
        icon={<Palette className="w-5 h-5" />}
        text={designConfig.infoText}
      />

      <NavigationButtons />
    </div>
  )
}
