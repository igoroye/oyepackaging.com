import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const cardsData = [
  {
    type: "image-background",
    backgroundImage:
      "https://c.animaapp.com/mkvbxc2okqfhzF/img/mask-group-3.png",
  },
  {
    type: "image",
    src: "https://c.animaapp.com/mkvbxc2okqfhzF/img/2.png",
    alt: "Element",
  },
  {
    type: "stat",
    value: "95%",
    label: "SATISFACTION RATE",
    hasBorder: true,
  },
  {
    type: "feature",
    icon: "https://c.animaapp.com/mkvbxc2okqfhzF/img/vector-1-1.svg",
    title: "TOP PRODUCT",
    subtitle: "FLAT BOTTOM BAGS",
  },
  {
    type: "gradient-text",
    text: "100% RECYCLABLE MATERIALS",
    subtitle: "SECO-FRIENDLY SOLUTIONS",
    gradient:
      "linear-gradient(136deg,rgba(251,175,6,1)_0%,rgba(231,72,45,1)_24%,rgba(204,76,225,1)_61%,rgba(44,78,173,1)_100%)",
  },
  {
    type: "feature",
    icon: "https://c.animaapp.com/mkvbxc2okqfhzF/img/bio-leaves--1-.svg",
    title: "PRODUCTION CAPACITY:",
    subtitle: "1M+ UNITS MONTHLY",
    hasBorder: true,
  },
  {
    type: "stat",
    value: "10+ YEARS IN PACKAGING",
    label: "COUNTRIES WE SERVE",
    valueSize: "text-[40px]",
  },
  {
    type: "gradient-text",
    text: "TAILORED\nFOR EVERY BUSINESS",
    subtitle: "CUSTOM DESIGNS:",
    gradient:
      "linear-gradient(136deg,rgba(15,156,90,1)_0%,rgba(204,76,225,1)_61%,rgba(44,78,173,1)_100%)",
    subtitleFirst: true,
  },
];

export const PackagingOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-8">
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-5 px-4">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              className={`flex-shrink-0 w-[400px] h-[390px] rounded-[20px] shadow-[0px_3px_18px_#0000001c] overflow-hidden ${
                card.hasBorder ? "border-[#264eab]" : "border-0"
              }`}
            >
              <CardContent className="relative w-full h-full p-0">
                {card.type === "image-background" && (
                  <div
                    className="w-full h-full bg-white rounded-[20px]"
                    style={{
                      backgroundImage: `url(${card.backgroundImage})`,
                      backgroundSize: "100% 100%",
                    }}
                  />
                )}

                {card.type === "image" && (
                  <img
                    className="w-full h-full object-cover"
                    alt={card.alt}
                    src={card.src}
                  />
                )}

                {card.type === "stat" && (
                  <div className="flex flex-col items-center justify-center w-full h-full bg-white">
                    <div
                      className={`[font-family:'Inter',Helvetica] font-bold text-main text-center tracking-[0] leading-[50px] px-[51px] ${
                        card.valueSize || "text-[70px]"
                      }`}
                    >
                      {card.value}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-medium text-[#101014] text-[22px] text-center tracking-[0] leading-[30px] mt-6 px-[34px]">
                      {card.label}
                    </div>
                  </div>
                )}

                {card.type === "feature" && (
                  <div className="flex flex-col items-center justify-between w-full h-full bg-white p-8">
                    <div className="flex-1 flex items-center justify-center">
                      <img
                        className="max-w-[160px] max-h-[161px]"
                        alt="Feature icon"
                        src={card.icon}
                      />
                    </div>
                    <div className="flex flex-col items-center gap-2 w-full">
                      <div className="[font-family:'Inter',Helvetica] font-medium text-[#101014] text-[22px] text-center tracking-[0] leading-[29px]">
                        {card.title}
                      </div>
                      <div className="[font-family:'Inter',Helvetica] font-medium text-new-text text-3xl text-center tracking-[0] leading-[39px]">
                        {card.subtitle}
                      </div>
                    </div>
                  </div>
                )}

                {card.type === "gradient-text" && (
                  <div className="flex flex-col items-center justify-center w-full h-full bg-white px-[51px]">
                    {card.subtitleFirst && (
                      <div className="[font-family:'Inter',Helvetica] font-medium text-[#101014] text-[22px] text-center tracking-[0] leading-[29px] mb-6">
                        {card.subtitle}
                      </div>
                    )}
                    <div
                      className="[font-family:'Inter',Helvetica] font-bold text-[40px] text-center tracking-[0] leading-[50px] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]"
                      style={{
                        background: card.gradient,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      {card.text?.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < (card.text?.split("\n").length ?? 0) - 1 && <br />}
                        </span>
                      ))}
                    </div>
                    {!card.subtitleFirst && (
                      <div className="[font-family:'Inter',Helvetica] font-medium text-[#101014] text-[22px] text-center tracking-[0] leading-[29px] mt-6">
                        {card.subtitle}
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="absolute bottom-8 right-8 flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-[34px] h-[34px] bg-bg-grey-2 rounded-full hover:bg-bg-grey-2/80"
          >
            <ChevronLeftIcon className="w-[18px] h-[18px]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-[34px] h-[34px] bg-bg-grey-2 rounded-full hover:bg-bg-grey-2/80"
          >
            <ChevronRightIcon className="w-[18px] h-[18px]" />
          </Button>
        </div>
      </div>
    </section>
  );
};
