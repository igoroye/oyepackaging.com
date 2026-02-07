import { Card, CardContent } from "@/components/ui/card"

export function ScopeOfFocusSection() {
  return (
    <section className="relative w-full py-12">
      <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl sm:text-4xl tracking-[0] leading-tight mb-10">
        OUR SCOPE OF FOCUS TILL 2030
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="bg-transparent border-0 rounded-[20px] overflow-hidden relative min-h-[380px]">
          <img
            src="/images/sustainability/renewable-energy.webp"
            alt="Renewable energy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <CardContent className="relative z-10 p-8 flex flex-col justify-between h-full">
            <div>
              <div className="[font-family:'Inter',Helvetica] font-bold text-text text-4xl sm:text-5xl tracking-[0] leading-tight mb-3">
                90%
              </div>
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm sm:text-base tracking-[0] leading-relaxed max-w-[220px]">
                of renewable energy is used in production, offices, and all company space.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[linear-gradient(23deg,rgba(215,224,238,1)_0%,rgba(15,156,90,1)_100%)] border-0 rounded-[20px] overflow-hidden min-h-[380px]">
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
