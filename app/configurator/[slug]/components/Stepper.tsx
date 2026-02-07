import { useConfigurator } from '../context/ConfiguratorContext'
import type { StepId, AddonId } from '../config/types'

export function Stepper() {
  const { config, activePanel, selections, dispatch, getStepSubtitle } = useConfigurator()

  const hasSelection = (stepId: StepId): boolean => {
    switch (stepId) {
      case 'size': return !!selections.series && !!selections.size
      case 'material': return !!selections.material
      case 'features': return selections.features.length > 0
      case 'touchAndFeel': return selections.touchAndFeel.length > 0
      case 'design': return !!selections.designType
      case 'quantity': return selections.quantity > 0
    }
  }

  const handleStepClick = (id: StepId | AddonId, enabled: boolean) => {
    if (!enabled) return
    dispatch({ type: 'SET_ACTIVE_PANEL', panelId: id })
  }

  const visibleSteps = config.steps.filter(s => s.visible)
  const visibleAddons = config.addons.filter(a => a.visible)

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#f3f4f6] rounded-2xl p-2.5 flex flex-col gap-2">
        {visibleSteps.map(step => {
          const isActive = activePanel === step.id
          const filled = hasSelection(step.id) || isActive
          const subtitle = getStepSubtitle(step.id)

          return (
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id, step.enabled)}
              disabled={!step.enabled}
              className={`
                w-full px-4 py-3 rounded-[14px] text-center transition-all
                ${!step.enabled
                  ? 'bg-[#e5e7eb] text-[#9ca3af] cursor-not-allowed opacity-60'
                  : filled
                    ? 'bg-[#8eaed4] text-white cursor-pointer hover:bg-[#7ba0d0]'
                    : 'bg-[#eaecf0] text-text cursor-pointer hover:bg-[#dde0e6]'
                }
              `}
            >
              <span className="[font-family:'Inter',Helvetica] font-semibold text-sm block leading-tight">
                {step.label}
              </span>
              {filled && subtitle && (
                <span className="[font-family:'Inter',Helvetica] font-normal text-[11px] block mt-0.5 opacity-90">
                  {subtitle}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {visibleAddons.length > 0 && (
        <div className="bg-[#f3f4f6] rounded-2xl p-2.5 flex flex-col gap-2">
          <span className="[font-family:'Inter',Helvetica] text-xs font-medium text-[#9ca3af] text-center py-1">
            ADD-ONS
          </span>
          {visibleAddons.map(addon => {
            const isActive = activePanel === addon.id
            return (
              <button
                key={addon.id}
                onClick={() => handleStepClick(addon.id, addon.enabled)}
                disabled={!addon.enabled}
                className={`
                  w-full px-4 py-3 rounded-[14px] text-center transition-all
                  ${!addon.enabled
                    ? 'bg-[#e5e7eb] text-[#9ca3af] cursor-not-allowed opacity-60'
                    : isActive
                      ? 'bg-[#8eaed4] text-white cursor-pointer hover:bg-[#7ba0d0]'
                      : 'bg-[#eaecf0] text-text cursor-pointer hover:bg-[#dde0e6]'
                  }
                `}
              >
                <span className="[font-family:'Inter',Helvetica] font-semibold text-sm">
                  {addon.label}
                </span>
              </button>
            )
          })}
        </div>
      )}

      <div className="bg-[#f3f4f6] rounded-2xl p-4 text-center">
        <span className="[font-family:'Inter',Helvetica] font-bold text-xl text-text block">
          {config.priceRange.currency}{config.priceRange.min.toFixed(2)} - {config.priceRange.currency}{config.priceRange.max.toFixed(2)}
        </span>
        <span className="[font-family:'Inter',Helvetica] font-medium text-xs text-[#6b7280] block mt-0.5">
          ({config.priceRange.perUnit})
        </span>
      </div>
    </div>
  )
}
