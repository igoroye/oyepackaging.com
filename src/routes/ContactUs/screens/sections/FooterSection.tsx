import { Card, CardContent } from "../../components/ui/card";

const featureCards = [
  {
    type: "gradient-primary",
    mainText: "100% RECYCLABLE MATERIALS",
    subText: "ECO-FRIENDLY SOLUTIONS",
    gradientClass:
      "bg-[linear-gradient(136deg,rgba(251,175,6,1)_0%,rgba(231,72,45,1)_24%,rgba(204,76,225,1)_61%,rgba(44,78,173,1)_100%)]",
  },
  {
    type: "with-icon",
    label: "PRODUCTION CAPACITY:",
    mainText: "1M+ UNITS MONTHLY",
    iconSrc: "https://c.animaapp.com/mkvehh2nHV8P1S/img/bio-leaves--1-.svg",
  },
  {
    type: "simple",
    mainText: "10+ YEARS IN PACKAGING",
    subText: "COUNTRIES WE SERVE",
  },
  {
    type: "gradient-secondary",
    label: "CUSTOM DESIGNS:",
    mainText: "TAILORED\nFOR EVERY BUSINESS",
    gradientClass:
      "bg-[linear-gradient(136deg,rgba(15,156,90,1)_0%,rgba(204,76,225,1)_61%,rgba(44,78,173,1)_100%)]",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center gap-4 px-4 py-8">
      {featureCards.map((card, index) => {
        if (card.type === "gradient-primary") {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full max-w-[335px] min-h-[185px] gap-1.5 shadow-[0px_3px_18px_#0000001c] py-6 bg-white rounded-[20px]"
            >
              <div
                className={`${card.gradientClass} [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-bold text-transparent text-[40px] text-center tracking-[0] leading-[50px] px-4`}
              >
                {card.mainText}
              </div>
              <div className="[font-family:'Inter',Helvetica] font-medium text-[#101014] text-[22px] text-center tracking-[0] leading-[29px] mt-5">
                {card.subText}
              </div>
            </div>
          );
        }

        if (card.type === "with-icon") {
          return (
            <Card
              key={index}
              className="w-full max-w-[400px] h-[390px] bg-white rounded-[20px] border border-solid border-[#264eab] shadow-[0px_3px_18px_#0000001c] relative overflow-hidden"
            >
              <CardContent className="flex flex-col items-center justify-end h-full p-0 pb-[46px]">
                <img
                  className="absolute top-[30px] left-1/2 -translate-x-1/2 w-40 h-[145px]"
                  alt="Bio leaves"
                  src={card.iconSrc}
                />
                <div className="flex flex-col items-center gap-2 px-8">
                  <div className="[font-family:'Inter',Helvetica] font-medium text-[#101014] text-[22px] text-center tracking-[0] leading-[29px]">
                    {card.label}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-medium text-new-text text-3xl text-center tracking-[0] leading-[39px]">
                    {card.mainText}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        }

        if (card.type === "simple") {
          return (
            <Card
              key={index}
              className="w-full max-w-[400px] h-[390px] bg-white rounded-[20px] shadow-[0px_3px_18px_#0000001c] relative"
            >
              <CardContent className="flex flex-col items-center justify-center h-full p-0">
                <div className="[font-family:'Inter',Helvetica] font-bold text-main text-[40px] text-center tracking-[0] leading-[50px] px-12 mb-8">
                  {card.mainText}
                </div>
                <div className="[font-family:'Inter',Helvetica] font-medium text-[#101014] text-[22px] text-center tracking-[0] leading-[30px] px-8">
                  {card.subText}
                </div>
              </CardContent>
            </Card>
          );
        }

        if (card.type === "gradient-secondary") {
          return (
            <Card
              key={index}
              className="w-full max-w-[400px] h-[390px] bg-white rounded-[20px] shadow-[0px_3px_18px_#0000001c] relative"
            >
              <CardContent className="flex flex-col items-center justify-center h-full p-0">
                <div
                  className={`${card.gradientClass} [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-bold text-transparent text-[40px] text-center tracking-[0] leading-[50px] px-12 mb-8 whitespace-pre-line`}
                >
                  {card.mainText}
                </div>
                <div className="[font-family:'Inter',Helvetica] font-medium text-[#101014] text-[22px] text-center tracking-[0] leading-[29px] px-8">
                  {card.label}
                </div>
              </CardContent>
            </Card>
          );
        }

        return null;
      })}
    </section>
  );
};
