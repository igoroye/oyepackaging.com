'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function InfoCardsSection() {
  return (
    <Card className="rounded-[20px] border border-[#101014]/30">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#101014]/30">
          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <svg width="40" height="43" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5L35 12V28L20 35L5 28V12L20 5Z" stroke="#101014" strokeWidth="2"/>
                <path d="M20 20V35M5 12L20 20L35 12" stroke="#101014" strokeWidth="2"/>
              </svg>
              <Separator orientation="vertical" className="h-[69px]" />
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="10" width="32" height="28" rx="2" stroke="#101014" strokeWidth="2"/>
                <path d="M12 10V6C12 4.89543 12.8954 4 14 4H30C31.1046 4 32 4.89543 32 6V10" stroke="#101014" strokeWidth="2"/>
                <path d="M16 20H28" stroke="#101014" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="22" cy="26" r="2" fill="#101014"/>
              </svg>
            </div>
            <p className="font-medium text-text text-lg mb-2">
              MOQ (MINIMUM ORDER QUANTITY)
            </p>
            <p className="font-medium text-text text-3xl">
              500 PCS
            </p>
          </div>
          <div className="p-6 text-center">
            <p className="font-medium text-text text-lg mb-2">
              PRODUCTION TIME FROM
            </p>
            <p className="font-medium text-text text-3xl">
              4 WEEKS
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
