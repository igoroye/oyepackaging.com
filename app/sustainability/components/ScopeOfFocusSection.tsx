import { Card, CardContent } from "@/components/ui/card"

export function ScopeOfFocusSection() {
  return (
    <section className="relative w-full py-12">
      <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl sm:text-4xl tracking-[0] leading-tight mb-10">
        OUR SCOPE OF FOCUS TILL 2030
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="bg-bg-beige border-0 rounded-[20px] overflow-hidden relative min-h-[380px] md:col-span-2">
          <CardContent className="relative z-10 p-8 sm:p-10 flex flex-col h-full">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                <div className="relative w-[100px] h-[100px]">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#d1d1d1" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#d1d1d1" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="36" fill="none" stroke="#d1d1d1" strokeWidth="0.5" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center [font-family:'Inter',Helvetica] font-medium text-text text-2xl tracking-[0]">
                    90%
                  </span>
                </div>
              </div>
              <div className="flex items-center flex-1 pt-[50px]">
                <div className="h-[1px] bg-text flex-1" />
              </div>
            </div>
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm sm:text-base tracking-[0] leading-relaxed max-w-[220px]">
              of renewable energy is used in production, offices, and all company space.
            </p>
            <div className="absolute bottom-0 right-0 w-[55%] h-[75%]">
              <img
                src="/images/sustainability/renewable-energy.webp"
                alt="Renewable energy"
                className="w-full h-full object-cover object-top rounded-tl-[20px]"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#e8f0eb] border-0 rounded-[20px] overflow-hidden min-h-[380px]">
          <CardContent className="p-8 flex flex-col items-center justify-center h-full text-center gap-6">
            <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg sm:text-xl md:text-[22px] tracking-[0] leading-tight">
              OFFSET EMISSIONS
              <br />
              THROUGH TREE PLANTING
              <br />
              AND SOCIAL PROJECTS
            </p>
            <img
              src="/images/sustainability/tree-deciduous-icon.svg"
              alt="Tree planting"
              className="w-[140px] h-[140px] sm:w-[157px] sm:h-[157px]"
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-bg-beige border-0 rounded-[20px] overflow-hidden min-h-[380px]">
          <CardContent className="p-8 flex flex-col items-center justify-center h-full text-center gap-6">
            <img
              src="/images/sustainability/gradient-cloud.svg"
              alt="Minimal CO2 emissions"
              className="w-[140px] h-[140px] sm:w-[157px] sm:h-[157px]"
            />
            <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg md:text-xl tracking-[0] leading-tight">
              ONLY USE RAW MATERIALS, PRODUCTION AND OFFICE EQUIPMENT WITH MINIMAL CO2 EMISSIONS
            </p>
          </CardContent>
        </Card>

        <Card className="bg-bg-gray border-0 rounded-[20px] overflow-hidden min-h-[380px]">
          <CardContent className="p-0 flex flex-col h-full">
            <div className="p-6 pb-4">
              <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg md:text-xl tracking-[0] leading-tight text-center">
                COMPANY CARS ARE 100% ELECTRIC
              </p>
            </div>
            <div className="flex-1 relative">
              <img
                src="/images/sustainability/company-cars-are-100-electric.webp"
                alt="Electric company cars"
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-bg-gray border-0 rounded-[20px] overflow-hidden min-h-[380px]">
          <CardContent className="p-0 flex flex-col h-full">
            <div className="p-6 pb-4">
              <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg md:text-xl tracking-[0] leading-tight text-center">
                TRAIN EMPLOYEES,
                <br />
                CUSTOMERS AND PARTNERS
                <br />
                TO BECOME <span className="text-[#249369]">CO2</span>{" "}
                <span className="text-main">NEUTRAL</span>
              </p>
            </div>
            <div className="flex-1 relative">
              <img
                src="/images/sustainability/co2-neutral.webp"
                alt="CO2 Neutral training"
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
