import { Card, CardContent } from "@/components/ui/card"

export function SustainabilityInfoCards() {
  return (
    <section className="relative w-full py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="rounded-[20px] bg-white border border-gray-100 shadow-none overflow-hidden">
          <CardContent className="p-0 relative min-h-[420px] flex flex-col">
            <div className="px-6 sm:px-8 pt-8 pb-52 flex-1">
              <h2 className="[font-family:'Inter',Helvetica] font-semibold text-2xl sm:text-3xl leading-tight text-text tracking-[0] mb-6">
                SUSTAINABILITY
              </h2>
              <div className="space-y-4">
                <p className="[font-family:'Inter',Helvetica] font-medium text-text text-base sm:text-lg tracking-[0] leading-relaxed">
                  Being a sustainable company is a challenge!
                </p>
                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base tracking-[0] leading-relaxed">
                  You constantly balance responsibilities to employees, customers, and partners while striving to innovate, which is an enormous investment that we need to make.
                </p>
                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base tracking-[0] leading-relaxed">
                  We always remember that the sustainability factor is a path we follow. We prefer to take small steps with complete mindfulness to improve today.
                </p>
              </div>
            </div>
            <img
              className="absolute bottom-0 left-0 w-full h-[190px] object-cover"
              alt="ÖYE Packaging"
              src="/images/sustainability/oye1.webp"
            />
          </CardContent>
        </Card>

        <Card className="rounded-[20px] bg-bg-beige border-0 shadow-none overflow-hidden">
          <CardContent className="p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center min-h-[420px] gap-6">
            <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg sm:text-xl md:text-[22px] tracking-[0] leading-tight text-center max-w-md">
              WE DO NOT FOLLOW WOW TRENDS AND ARE FIGHTING AGAINST GREENWASHING
            </p>
            <img
              src="/images/sustainability/leaf.webp"
              alt="Green leaves"
              className="w-full max-w-[380px] h-auto rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
