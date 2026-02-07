'use client'

import { ChevronLeftIcon, ChevronRightIcon, X } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const benefitsData = [
  {
    icon: "https://c.animaapp.com/mko0yo41F03JfF/img/tour-virtual-2.png",
    title: "FULL CUSTOMIZATION",
    description: "CREATE ANY SIZE AND ADD EFFECTS",
    iconAlt: "Tour virtual",
    reversed: false,
    modalHeading: "Craft your perfect packaging",
    modalTitle: "FULL CUSTOMIZATION",
    modalText:
      "Get ready to bring your ideas to life with our various customization options. Choose from various customized sizes, or pick from our selection of standard sizes! Using our easy-to-use configurator, you can add your print design on every side of your packaging, making it even more special with different textures and finishes. Enjoy creating something unique!",
  },
  {
    icon: "https://c.animaapp.com/mko0yo41F03JfF/img/truck-arrow-right-2.png",
    title: "FASTEST DELIVERY",
    description: "PRODUCTION TIME STARTING FROM 4 WEEKS",
    iconAlt: "Truck arrow right",
    reversed: false,
    modalHeading: "Say goodbye to the long delivery!",
    modalTitle: "FASTEST DELIVERY",
    modalText:
      "Get ready for the fastest delivery ever! Thanks to our streamlined production schedule, we're excited to offer customized bags made just for you in just four weeks. Say goodbye to long waits and customs hassles - your bags will arrive right at your doorstep, ready to impress!",
  },
  {
    icon: "https://c.animaapp.com/mko0yo41F03JfF/img/breathable-1.png",
    title: "SUSTAINABLE MATERIALS",
    description: "SOURCED FROM EUROPE",
    iconAlt: "Breathable",
    reversed: false,
    modalHeading: "Certified quality for your coffee",
    modalTitle: "SUSTAINABLE MATERIALS",
    modalText:
      "We meticulously select and source materials that comply with European Packaging Standards and collaborate with European material suppliers to consistently offer the latest sustainable packaging trends.",
  },
  {
    icon: "https://c.animaapp.com/mko0yo41F03JfF/img/european-union.png",
    title: "IN EUROPE",
    description: "PRODUCTION BASED",
    iconAlt: "European union",
    reversed: true,
    modalHeading: "We are the 1st European coffee packaging producer",
    modalTitle: "PRODUCTION BASED",
    modalText:
      "Based in the Baltics, our state-of-the-art production equipment allows us to manufacture packaging quickly and with exceptional quality. Our laboratory monitors quality control at every stage, 24/7. With BRC and ISO 9001 certifications, we guarantee the highest quality standards and full packaging traceability.",
  },
  {
    icon: "https://c.animaapp.com/mko0yo41F03JfF/img/tour-virtual-2.png",
    title: "RETURN POLICY",
    description: "ACCORDING TO EUROPEAN STANDARDS",
    iconAlt: "Return policy",
    reversed: false,
    modalHeading: "European roasters deserve European return policies",
    modalTitle: "RETURN POLICY",
    modalText:
      "You can trust in our unwavering commitment to quality and service. Unlike many non-EU packaging companies, we provide a transparent refund and re-production policy with no hidden fees or unreasonable terms.",
  },
];

function BenefitModal({
  benefit,
  onClose,
}: {
  benefit: (typeof benefitsData)[number];
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="relative bg-white rounded-[20px] w-full max-w-[800px] max-h-[90vh] overflow-y-auto p-8 sm:p-12 md:p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-2xl sm:text-3xl md:text-[40px] tracking-[-0.5px] leading-tight mb-8 pr-12 uppercase">
          {benefit.modalHeading}
        </h2>

        <div className="bg-[#f5f5f5] rounded-[20px] p-8 sm:p-10">
          <img
            className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] mb-6"
            alt={benefit.iconAlt}
            src={benefit.icon}
          />
          <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-xl sm:text-2xl tracking-[0] leading-tight mb-4">
            {benefit.modalTitle}
          </h3>
          <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base sm:text-lg tracking-[0] leading-relaxed">
            {benefit.modalText}
          </p>
        </div>
      </div>
    </div>
  );
}

export const PackagingBenefitsSection = (): JSX.Element => {
  const desktopScrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const getActiveContainer = () => {
    if (
      desktopScrollContainerRef.current &&
      desktopScrollContainerRef.current.offsetParent
    ) {
      return desktopScrollContainerRef.current;
    }
    return mobileScrollContainerRef.current;
  };

  const checkScrollButtons = () => {
    const container = getActiveContainer();
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    const container = getActiveContainer();
    if (container) {
      const cardWidth = 380;
      const newScrollLeft =
        direction === "left"
          ? container.scrollLeft - cardWidth
          : container.scrollLeft + cardWidth;

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(checkScrollButtons, 300);
    }
  };

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handlePlusClick = useCallback(
    (e: React.MouseEvent, index: number) => {
      e.stopPropagation();
      setSelectedIndex(index);
      setModalIndex(index);
    },
    []
  );

  const closeModal = useCallback(() => {
    setModalIndex(null);
  }, []);

  const renderCard = (
    benefit: (typeof benefitsData)[number],
    index: number,
    isMobile: boolean
  ) => {
    const isSelected = selectedIndex === index;
    const sizeClasses = isMobile
      ? "min-w-[280px] sm:min-w-[320px] md:min-w-[360px] h-[280px] snap-start"
      : "w-[360px] h-[280px] flex-shrink-0 translate-y-[-1rem] animate-fade-in opacity-0";
    const paddingClass = isMobile ? "p-6 sm:p-8" : "p-8";

    return (
      <Card
        key={index}
        onClick={() => handleCardClick(index)}
        className={`bg-white rounded-[30px] ${sizeClasses} transition-[transform,box-shadow,border-color] duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
          isSelected
            ? "border-2 border-[#264eab]"
            : "border border-transparent"
        }`}
        style={
          !isMobile
            ? ({
                "--animation-delay": `${(index + 1) * 200}ms`,
              } as React.CSSProperties)
            : undefined
        }
      >
        <CardContent className={`${paddingClass} h-full flex flex-col justify-between`}>
          <div className="flex flex-col gap-6">
            <img
              className="w-[52px] h-[52px]"
              alt={benefit.iconAlt}
              src={benefit.icon}
            />
            <div className="flex flex-col gap-1">
              {benefit.reversed ? (
                <>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-[#101014] text-base sm:text-lg tracking-[0] leading-[24px]">
                    {benefit.description}
                  </p>
                  <h3 className="[font-family:'Inter',Helvetica] font-medium text-new-text text-xl sm:text-2xl tracking-[0] leading-[32px]">
                    {benefit.title}
                  </h3>
                </>
              ) : (
                <>
                  <h3 className="[font-family:'Inter',Helvetica] font-medium text-new-text text-xl sm:text-2xl tracking-[0] leading-[32px]">
                    {benefit.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-[#101014] text-base sm:text-lg tracking-[0] leading-[24px]">
                    {benefit.description}
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={(e) => handlePlusClick(e, index)}
              className="w-9 h-9 bg-bord rounded-[18px] flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 0V12M0 6H12" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <section className="relative w-full py-12 md:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-2xl sm:text-3xl md:text-[44px] tracking-[-0.88px] leading-tight md:leading-[49px] mb-8 md:mb-16 translate-y-[-1rem] animate-fade-in opacity-0">
            WHY ÖYE IS YOUR <br />
            PACKAGING PARTNER
          </h2>

          <div className="hidden lg:block relative">
            <div
              ref={desktopScrollContainerRef}
              onScroll={checkScrollButtons}
              className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {benefitsData.map((benefit, index) =>
                renderCard(benefit, index, false)
              )}
            </div>
          </div>

          <div className="lg:hidden relative">
            <div
              ref={mobileScrollContainerRef}
              onScroll={checkScrollButtons}
              className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {benefitsData.map((benefit, index) =>
                renderCard(benefit, index, true)
              )}
            </div>
          </div>

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

      {modalIndex !== null && (
        <BenefitModal
          benefit={benefitsData[modalIndex]}
          onClose={closeModal}
        />
      )}
    </>
  );
};
