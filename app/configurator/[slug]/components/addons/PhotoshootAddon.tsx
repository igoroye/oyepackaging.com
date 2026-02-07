import { Camera } from 'lucide-react'
import { useConfigurator } from '../../context/ConfiguratorContext'
import { InfoCard } from '../InfoCard'
import { NavigationButtons } from '../NavigationButtons'

export function PhotoshootAddon() {
  const { config, selections, dispatch } = useConfigurator()
  const { photoshoot: psConfig } = config

  const activePackage = psConfig.packages.find(p => p.id === selections.photoshootPackage) ?? psConfig.packages[0]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {psConfig.packages.map(pkg => (
          <button
            key={pkg.id}
            onClick={() => {
              dispatch({ type: 'SET_PHOTOSHOOT_ENABLED', enabled: true })
              dispatch({ type: 'SET_PHOTOSHOOT_PACKAGE', packageId: pkg.id })
            }}
            className={`
              px-5 py-3 rounded-xl border transition-all [font-family:'Inter',Helvetica] font-medium text-sm
              ${selections.photoshootPackage === pkg.id
                ? 'border-[#264eab] bg-[#264eab] text-white'
                : 'border-[#e5e7eb] bg-white text-text hover:border-[#9ca3af]'
              }
            `}
          >
            {pkg.label}
          </button>
        ))}
      </div>

      <p className="[font-family:'Inter',Helvetica] text-sm text-[#6b7280] italic">
        {psConfig.footnote}
      </p>

      <p className="[font-family:'Inter',Helvetica] text-sm text-[#6b7280] italic">
        {activePackage.tagline}
      </p>

      <div>
        <h4 className="[font-family:'Inter',Helvetica] font-bold text-sm text-text mb-3">
          WHAT YOU GET:
        </h4>
        <ul className="flex flex-col gap-2">
          {activePackage.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#264eab] mt-1.5 flex-shrink-0">
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                  <circle cx="6" cy="6" r="3" />
                </svg>
              </span>
              <span className="[font-family:'Inter',Helvetica] text-sm text-[#4b5563]">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <InfoCard
        icon={<Camera className="w-5 h-5" />}
        text={activePackage.whyItWorks}
      />

      <NavigationButtons />
    </div>
  )
}
