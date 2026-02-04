'use client'

import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative h-[260px] rounded-[20px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4349720/pexels-photo-4349720.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Still have questions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-main/80 to-main/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h3 className="text-[22px] font-semibold text-white mb-4">STILL HAVE QUESTIONS?</h3>
          <Button
            variant="outline"
            className="px-6 py-3 bg-transparent rounded-[40px] border-2 border-white text-white text-base font-medium hover:bg-white/10"
          >
            BOOK A CALL
          </Button>
        </div>
      </div>

      <div className="relative h-[260px] rounded-[20px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Enjoy the packaging"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/80 to-[#1a365d]/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h3 className="text-[22px] font-semibold text-white mb-4">ENJOY THE PACKAGING</h3>
          <Button
            variant="outline"
            className="px-6 py-3 bg-transparent rounded-[40px] border-2 border-white text-white text-base font-medium hover:bg-white/10"
          >
            CONFIGURE PACKAGING
          </Button>
        </div>
      </div>
    </section>
  )
}
