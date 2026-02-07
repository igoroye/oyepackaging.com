import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useConfigurator } from '../context/ConfiguratorContext'

export function NavigationButtons() {
  const { canGoPrevious, canGoNext, goPrevious, goNext, isLastPanel, openModal } = useConfigurator()

  return (
    <div className="flex items-center gap-3 mt-8">
      {canGoPrevious && (
        <button
          onClick={goPrevious}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#1a202c] text-[#1a202c] hover:bg-[#f9fafb] transition-colors [font-family:'Inter',Helvetica] font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          PREVIOUS
        </button>
      )}
      {isLastPanel ? (
        <button
          onClick={openModal}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#1a202c] text-[#1a202c] hover:bg-[#f9fafb] transition-colors [font-family:'Inter',Helvetica] font-medium text-sm"
        >
          SUBMIT
          <ArrowRight className="w-4 h-4" />
        </button>
      ) : (
        <button
          onClick={goNext}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#1a202c] text-[#1a202c] hover:bg-[#f9fafb] transition-colors [font-family:'Inter',Helvetica] font-medium text-sm"
        >
          NEXT
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
