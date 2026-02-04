'use client'

import { Button } from '@/components/ui/button'

export function CTACardsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="relative h-[260px] rounded-[20px] overflow-hidden bg-gradient-to-br from-[#5a7a9f] to-[#3d5a7f]">
        <div className="absolute inset-0 opacity-30 bg-[url(https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=800)] bg-cover bg-center" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
          <h3 className="font-semibold text-white text-[22px] text-center">
            STILL HAVE QUESTIONS?
          </h3>
          <Button
            variant="outline"
            className="rounded-[40px] border-2 border-white bg-transparent text-white font-medium text-base h-auto px-6 py-3 hover:bg-white/10"
          >
            BOOK A CALL
          </Button>
        </div>
      </div>

      <div className="relative h-[260px] rounded-[20px] overflow-hidden bg-gradient-to-br from-[#8fa8c4] to-[#6b8aa8]">
        <div className="absolute inset-0 opacity-30 bg-[url(https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800)] bg-cover bg-center" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
          <h3 className="font-semibold text-white text-[22px] text-center">
            ENJOY THE PACKAGING
          </h3>
          <Button
            variant="outline"
            className="rounded-[40px] border-2 border-white bg-transparent text-white font-medium text-base h-auto px-6 py-3 hover:bg-white/10"
          >
            CONFIGURE PACKAGING
          </Button>
        </div>
      </div>
    </div>
  )
}
