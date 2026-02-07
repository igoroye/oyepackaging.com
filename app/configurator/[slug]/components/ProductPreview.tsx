import { Sun } from 'lucide-react'
import { useConfigurator } from '../context/ConfiguratorContext'

export function ProductPreview() {
  const { config } = useConfigurator()

  return (
    <div className="relative rounded-2xl bg-[#f5f5f5] overflow-hidden flex items-center justify-center min-h-[350px] lg:min-h-[450px]">
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm">
          <svg className="w-4 h-4 text-[#6b7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 12h.01M8 12h.01M12 12h.01" strokeLinecap="round" />
            <path d="M17 12a5 5 0 11-10 0 5 5 0 0110 0z" />
          </svg>
          <span className="[font-family:'Inter',Helvetica] text-xs font-medium text-[#6b7280]">
            HOLD AND ROTATE
          </span>
        </div>
        <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm text-[#6b7280] hover:text-[#374151] transition-colors">
          <Sun className="w-4 h-4" />
        </button>
      </div>
      <img
        src={config.previewImage}
        alt={config.title}
        className="w-full max-w-[320px] h-auto object-contain p-8"
        draggable={false}
      />
    </div>
  )
}
