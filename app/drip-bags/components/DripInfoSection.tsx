'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function DripInfoSection() {
  return (
    <Card className="rounded-[20px] border border-[#101014]/30 max-w-[925px] mx-auto mb-12">
      <CardContent className="flex flex-col md:flex-row items-center justify-around p-6 gap-6">
        <div className="flex items-center gap-4">
          <svg width="28" height="54" viewBox="0 0 28 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2L2 10V30L14 38L26 30V10L14 2Z" stroke="#101014" strokeWidth="2"/>
            <path d="M2 10L14 18L26 10M14 18V38" stroke="#101014" strokeWidth="2"/>
            <path d="M14 42L2 50V54H26V50L14 42Z" fill="#101014"/>
          </svg>
          <Separator orientation="vertical" className="h-[69px] hidden md:block" />
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="10" width="32" height="28" rx="2" stroke="#101014" strokeWidth="2"/>
            <path d="M12 10V6C12 4.89543 12.8954 4 14 4H30C31.1046 4 32 4.89543 32 6V10" stroke="#101014" strokeWidth="2"/>
            <circle cx="22" cy="24" r="3" fill="#101014"/>
          </svg>
          <div>
            <p className="font-medium text-text text-lg leading-[29px]">
              MOQ (MINIMUM ORDER QUANTITY)
            </p>
            <p className="font-medium text-text text-3xl leading-[29px]">
              1000 PCS
            </p>
          </div>
        </div>

        <Separator orientation="vertical" className="h-[69px] hidden md:block" />

        <div>
          <p className="font-medium text-text text-lg text-center leading-[29px]">
            PRODUCTION TIME FROM
          </p>
          <p className="font-medium text-text text-3xl text-center leading-[29px]">
            2 WEEKS
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
