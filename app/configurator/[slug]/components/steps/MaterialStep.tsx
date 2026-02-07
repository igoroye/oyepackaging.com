import { Layers } from 'lucide-react'
import { useConfigurator } from '../../context/ConfiguratorContext'
import { InfoCard } from '../InfoCard'
import { NavigationButtons } from '../NavigationButtons'

function LeafIcon({ filled }: { filled: boolean }) {
  return (
    <svg className={`w-5 h-5 ${filled ? 'text-[#264eab]' : 'text-[#d1d5db]'}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
    </svg>
  )
}

export function MaterialStep() {
  const { config, selections, dispatch } = useConfigurator()
  const { material: matConfig } = config

  const activeMaterial = matConfig.materials.find(m => m.id === selections.material) ?? matConfig.materials[0]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {matConfig.materials.map(mat => (
          <button
            key={mat.id}
            onClick={() => dispatch({ type: 'SET_MATERIAL', material: mat.id })}
            className={`
              px-5 py-3 rounded-xl border text-center transition-all [font-family:'Inter',Helvetica] font-medium text-sm
              ${selections.material === mat.id
                ? 'border-[#264eab] bg-[#264eab] text-white'
                : 'border-[#e5e7eb] bg-white text-text hover:border-[#9ca3af]'
              }
            `}
          >
            {mat.tabLabel}
          </button>
        ))}
      </div>

      <div>
        <h3 className="[font-family:'Inter',Helvetica] font-bold text-base text-text mb-3">
          {activeMaterial.aboutTitle}
        </h3>
        <p className="[font-family:'Inter',Helvetica] text-sm leading-relaxed text-[#4b5563]">
          {activeMaterial.aboutText}
        </p>
      </div>

      {activeMaterial.certificates.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeMaterial.certificates.map(cert => (
            <span
              key={cert}
              className="px-4 py-2 rounded-lg border border-[#e5e7eb] [font-family:'Inter',Helvetica] text-sm text-[#4b5563] italic"
            >
              {cert}
            </span>
          ))}
        </div>
      )}

      <div>
        <div className="flex items-center gap-2">
          <span className="[font-family:'Inter',Helvetica] font-bold text-sm text-text">
            SUSTAINABILITY RATE
          </span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <LeafIcon key={i} filled={i < activeMaterial.sustainabilityRating} />
            ))}
          </div>
        </div>
      </div>

      <InfoCard
        icon={<Layers className="w-5 h-5" />}
        text={matConfig.infoText}
      />

      <NavigationButtons />
    </div>
  )
}
