import { Printer } from 'lucide-react'
import { useConfigurator } from '../../context/ConfiguratorContext'
import { InfoCard } from '../InfoCard'
import { NavigationButtons } from '../NavigationButtons'

export function TestPrintAddon() {
  const { config, selections, dispatch } = useConfigurator()
  const { testPrint: tpConfig } = config

  return (
    <div className="flex flex-col gap-6">
      <label className="flex items-center gap-3 cursor-pointer">
        <div
          className={`
            w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors
            ${selections.testPrintEnabled
              ? 'border-[#264eab] bg-[#264eab]'
              : 'border-[#9ca3af] bg-white'
            }
          `}
          onClick={() => dispatch({ type: 'SET_TEST_PRINT_ENABLED', enabled: !selections.testPrintEnabled })}
        >
          {selections.testPrintEnabled && (
            <svg className="w-4 h-4 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <span className="[font-family:'Inter',Helvetica] font-bold text-base text-text">
          TEST PRINT
        </span>
        <span className="[font-family:'Inter',Helvetica] text-sm text-[#6b7280]">
          Test printing is optional
        </span>
      </label>

      {selections.testPrintEnabled && (
        <>
          <div>
            <h4 className="[font-family:'Inter',Helvetica] font-bold text-sm text-text mb-3">
              APPLY TEST PRINT TO SELECTED DESIGN(S):
            </h4>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#e5e7eb] cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#264eab]" />
                <span className="[font-family:'Inter',Helvetica] text-sm text-text">Design 1</span>
              </label>
            </div>
          </div>
        </>
      )}

      <div>
        <h3 className="[font-family:'Inter',Helvetica] font-bold text-base text-text mb-2">
          {tpConfig.title}
        </h3>
        <p className="[font-family:'Inter',Helvetica] text-sm leading-relaxed text-[#4b5563]">
          {tpConfig.description}
        </p>
      </div>

      <InfoCard
        icon={<Printer className="w-5 h-5" />}
        text={tpConfig.infoText}
      />

      <NavigationButtons />
    </div>
  )
}
