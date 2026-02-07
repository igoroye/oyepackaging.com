'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { ProductConfig } from '../config/types'
import { ConfiguratorProvider } from '../context/ConfiguratorContext'
import { PageLayout } from '@/components/layout/PageLayout'
import { Stepper } from './Stepper'
import { ProductPreview } from './ProductPreview'
import { StepContent } from './StepContent'
import { SubmitModal } from './SubmitModal'

function MobileStepperToggle({ title, open, onToggle }: { title: string; open: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full px-4 py-3 bg-[#f3f4f6] rounded-xl lg:hidden"
    >
      <span className="[font-family:'Inter',Helvetica] font-semibold text-sm text-text">Steps</span>
      <ChevronDown className={`w-4 h-4 text-[#6b7280] transition-transform ${open ? 'rotate-180' : ''}`} />
    </button>
  )
}

function ConfiguratorLayout({ config }: { config: ProductConfig }) {
  const [mobileStepperOpen, setMobileStepperOpen] = useState(false)

  return (
    <PageLayout>
      <main className="w-full px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[100px] py-6 md:py-10">
        <div className="max-w-[1300px] mx-auto">
          <h1 className="[font-family:'Inter',Helvetica] font-bold text-text text-2xl sm:text-3xl md:text-4xl tracking-[-0.5px] leading-tight mb-6 md:mb-8">
            {config.title}
          </h1>

          <div className="lg:hidden mb-4">
            <MobileStepperToggle
              title={config.title}
              open={mobileStepperOpen}
              onToggle={() => setMobileStepperOpen(!mobileStepperOpen)}
            />
            {mobileStepperOpen && (
              <div className="mt-2">
                <Stepper />
              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="hidden lg:block lg:w-[220px] xl:w-[240px] flex-shrink-0">
              <div className="sticky top-6">
                <Stepper />
              </div>
            </div>

            <div className="w-full lg:flex-1 lg:max-w-[420px]">
              <div className="sticky top-6">
                <ProductPreview />
              </div>
            </div>

            <div className="w-full lg:flex-1 lg:min-w-0">
              <StepContent />
            </div>
          </div>
        </div>
      </main>

      <SubmitModal />
    </PageLayout>
  )
}

export function ConfiguratorShell({ config }: { config: ProductConfig }) {
  return (
    <ConfiguratorProvider config={config}>
      <ConfiguratorLayout config={config} />
    </ConfiguratorProvider>
  )
}
