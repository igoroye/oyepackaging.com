'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function DripCTASection() {
  return (
    <section className="max-w-[925px] mx-auto mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="relative rounded-[20px] overflow-hidden h-[260px]">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              alt="Send coffee"
              src="https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
          <CardContent className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/40">
            <h3 className="font-semibold text-white text-[22px] text-center leading-8 mb-4">
              SEND US 1 KG OF YOUR COFFEE
            </h3>
            <Button
              variant="outline"
              className="h-auto px-6 py-3 rounded-[40px] border-2 border-white bg-transparent text-white hover:bg-white/10"
            >
              <span className="font-medium text-white text-base tracking-[0.48px]">
                REQUEST A TEST
              </span>
            </Button>
          </CardContent>
        </Card>

        <Card className="relative rounded-[20px] overflow-hidden h-[260px]">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              alt="Configure packaging"
              src="https://images.pexels.com/photos/4226900/pexels-photo-4226900.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
          <CardContent className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/40">
            <h3 className="font-semibold text-white text-[22px] text-center leading-8 mb-4">
              CONFIGURE PACKAGING
              <br />
              FOR YOUR COFFEE
            </h3>
            <Button
              variant="outline"
              className="h-auto px-6 py-3 rounded-[40px] border-2 border-white bg-transparent text-white hover:bg-white/10"
            >
              <span className="font-medium text-white text-base tracking-[0.48px]">
                CONFIGURE PACKAGING
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
