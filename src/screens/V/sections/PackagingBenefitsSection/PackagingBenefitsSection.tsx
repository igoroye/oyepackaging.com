import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const benefitsData = [
  {
    icon: "https://c.animaapp.com/mko0yo41F03JfF/img/tour-virtual-2.png",
    title: "FULL CUSTOMIZATION",
    description: "CREATE ANY SIZE AND ADD EFFECTS",
    iconAlt: "Tour virtual",
    highlighted: false,
  },
  {
    icon: "https://c.animaapp.com/mko0yo41F03JfF/img/truck-arrow-right-2.png",
    title: "FASTEST DELIVERY",
    description: "PRODUCTION TIME STARTING FROM 4 WEEKS",
    iconAlt: "Truck arrow right",
    highlighted: true,
  },
  {
    icon: "https://c.animaapp.com/mko0yo41F03JfF/img/breathable-1.png",
    title: "SUSTAINABLE MATERIALS",
    description: "SOURCED FROM EUROPE",
    iconAlt: "Breathable",
    highlighted: false,
  },
  {
    icon: "https://c.animaapp.com/mko0yo41F03JfF/img/european-union.png",
    title: "IN EUROPE",
    description: "PRODUCTION BASED",
    iconAlt: "European union",
    highlighted: false,
    reversed: true,
  },
];

export const PackagingBenefitsSection = (): JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="relative w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[1662px] mx-auto">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-2xl sm:text-3xl md:text-[44px] tracking-[-0.88px] leading-tight md:leading-[49px] mb-8 md:mb-16 translate-y-[-1rem] animate-fade-in opacity-0">
          WHY ÖYE IS YOUR <br />
          PACKAGING PARTNER
        </h2>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5 mb-8">
          {benefitsData.map((benefit, index) => (
            <Card
              key={index}
              className={`bg-white rounded-[20px] h-[292px] transition-[transform,box-shadow] hover:shadow-lg hover:-translate-y-1 translate-y-[-1rem] animate-fade-in opacity-0 ${
                benefit.highlighted ? "border-[#264eab]" : "border-transparent"
              }`}
              style={
                {
                  "--animation-delay": `${(index + 1) * 200}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="p-[30px] h-full flex flex-col justify-between">
                <div className="flex flex-col gap-8">
                  <img
                    className="w-[52px] h-[52px]"
                    alt={benefit.iconAlt}
                    src={benefit.icon}
                  />

                  <div className="flex flex-col gap-0">
                    {benefit.reversed ? (
                      <>
                        <p className="[font-family:'Inter',Helvetica] font-medium text-[#101014] text-[22px] tracking-[0] leading-[29px]">
                          {benefit.description}
                        </p>
                        <h3 className="[font-family:'Inter',Helvetica] font-medium text-new-text text-3xl tracking-[0] leading-[39px]">
                          {benefit.title}
                        </h3>
                      </>
                    ) : (
                      <>
                        <h3 className="[font-family:'Inter',Helvetica] font-medium text-new-text text-3xl tracking-[0] leading-[39px]">
                          {benefit.title}
                        </h3>
                        <p className="[font-family:'Inter',Helvetica] font-medium text-[#101014] text-[22px] tracking-[0] leading-[29px]">
                          {benefit.description}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="w-9 h-9 bg-bord rounded-[18px] flex items-center justify-center">
                    <img
                      className="w-3 h-3"
                      alt="Arrow"
                      src="https://c.animaapp.com/mko0yo41F03JfF/img/-.svg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile/Tablet Slider View */}
        <div className="lg:hidden relative">
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {benefitsData.map((benefit, index) => (
              <Card
                key={index}
                className={`bg-white rounded-[20px] min-w-[280px] sm:min-w-[320px] md:min-w-[380px] h-[292px] snap-start transition-[transform,box-shadow] hover:shadow-lg ${
                  benefit.highlighted ? "border-[#264eab]" : "border-transparent"
                }`}
              >
                <CardContent className="p-[30px] h-full flex flex-col justify-between">
                  <div className="flex flex-col gap-8">
                    <img
                      className="w-[52px] h-[52px]"
                      alt={benefit.iconAlt}
                      src={benefit.icon}
                    />

                    <div className="flex flex-col gap-0">
                      {benefit.reversed ? (
                        <>
                          <p className="[font-family:'Inter',Helvetica] font-medium text-[#101014] text-lg sm:text-[22px] tracking-[0] leading-[29px]">
                            {benefit.description}
                          </p>
                          <h3 className="[font-family:'Inter',Helvetica] font-medium text-new-text text-2xl sm:text-3xl tracking-[0] leading-[39px]">
                            {benefit.title}
                          </h3>
                        </>
                      ) : (
                        <>
                          <h3 className="[font-family:'Inter',Helvetica] font-medium text-new-text text-2xl sm:text-3xl tracking-[0] leading-[39px]">
                            {benefit.title}
                          </h3>
                          <p className="[font-family:'Inter',Helvetica] font-medium text-[#101014] text-lg sm:text-[22px] tracking-[0] leading-[29px]">
                            {benefit.description}
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="w-9 h-9 bg-bord rounded-[18px] flex items-center justify-center">
                      <img
                        className="w-3 h-3"
                        alt="Arrow"
                        src="https://c.animaapp.com/mko0yo41F03JfF/img/-.svg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div
          className="flex justify-end gap-3.5 mt-8 translate-y-[-1rem] animate-fade-in opacity-0"
          style={{ "--animation-delay": "1000ms" } as React.CSSProperties}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-[34px] h-[34px] bg-bg-grey-2 rounded-[17px] hover:bg-bg-grey-2/80 transition-colors p-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon className="w-[18px] h-[18px]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-[34px] h-[34px] bg-bg-grey-2 rounded-[17px] hover:bg-bg-grey-2/80 transition-colors p-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRightIcon className="w-[18px] h-[18px]" />
          </Button>
        </div>
      </div>
    </section>
  );
};
