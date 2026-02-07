import { useConfigurator } from '../context/ConfiguratorContext'
import type { StepId, AddonId } from '../config/types'

export function Stepper() {
  const { config, activePanel, selections, visitedPanels, dispatch, getStepSubtitle } = useConfigurator()

  const handleStepClick = (id: StepId | AddonId, enabled: boolean) => {
    if (!enabled) return
    dispatch({ type: 'SET_ACTIVE_PANEL', panelId: id })
  }

  const visibleSteps = config.steps.filter(s => s.visible)
  const visibleAddons = config.addons.filter(a => a.visible)

  const isCustomSize = selections.series === 'custom'
  const priceOnRequest = isCustomSize && config.size.customSize?.priceText

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#f3f4f6] rounded-2xl p-2.5 flex flex-col gap-2">
        {visibleSteps.map(step => {
          const isActive = activePanel === step.id
          const visited = visitedPanels.includes(step.id)
          const filled = isActive || visited
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
            const visited = visitedPanels.includes(addon.id)
            const filled = isActive || visited
            return (
              <button
                key={addon.id}
                onClick={() => handleStepClick(addon.id, addon.enabled)}
                disabled={!addon.enabled}
                className={`
                  w-full px-4 py-3 rounded-[14px] text-center transition-all
                  ${!addon.enabled
                    ? 'bg-[#e5e7eb] text-[#9ca3af] cursor-not-allowed opacity-60'
                    : filled
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
        {priceOnRequest ? (
          <span className="[font-family:'Inter',Helvetica] font-bold text-lg text-text block">
            {config.size.customSize!.priceText}
          </span>
        ) : (
          <>
            <span className="[font-family:'Inter',Helvetica] font-bold text-xl text-text block">
              {config.priceRange.currency}{config.priceRange.min.toFixed(2)} - {config.priceRange.currency}{config.priceRange.max.toFixed(2)}
            </span>
            <span className="[font-family:'Inter',Helvetica] font-medium text-xs text-[#6b7280] block mt-0.5">
              ({config.priceRange.perUnit})
            </span>
          </>
        )}
      </div>
    </div>
  )
}
