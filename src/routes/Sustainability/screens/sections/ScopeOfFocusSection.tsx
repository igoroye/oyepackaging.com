import { Card, CardContent } from "../../components/ui/card";

export const ScopeOfFocusSection = (): JSX.Element => {
  const cards = [
    {
      bgColor: "bg-white",
      border: "border border-solid border-[#101014] opacity-30",
      content: (
        <>
          <div className="text-[40px] font-bold text-[#101014] mb-4">80%</div>
          <p className="text-[12px] text-[#101014] mb-4">
            of our carbon footprint is caused by our supply chain and logistics
          </p>
          <img
            className="w-full h-auto"
            alt="Couch"
            src="https://c.animaapp.com/mkved9hrg5UXzm/img/mask-group.png"
          />
        </>
      ),
    },
    {
      bgColor:
        "bg-[linear-gradient(23deg,rgba(215,224,238,1)_0%,rgba(15,156,90,1)_100%)] opacity-[0.26]",
      border: "",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-[157px] h-[157px] bg-white rounded-full border border-solid border-[#101014] flex items-center justify-center mb-6">
            <img
              className="w-20 h-20"
              alt="Cloud tree icon"
              src="https://c.animaapp.com/mkved9hrg5UXzm/img/ellipse-76-1.svg"
            />
          </div>
          <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-[22px] text-center tracking-[0] leading-8">
            OFFSET EMISSIONS THROUGH TREE PLANTING AND SOCIAL PROJECTS
          </p>
        </div>
      ),
    },
    {
      bgColor: "bg-white",
      border: "border border-solid border-[#101014] opacity-30",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-[157px] h-[157px] bg-white rounded-full border border-solid border-[#101014] flex items-center justify-center mb-6">
            <img
              className="w-20 h-[62px]"
              alt="Cloud icon"
              src="https://c.animaapp.com/mkved9hrg5UXzm/img/vector-1.svg"
            />
            <img
              className="absolute w-[23px] h-[26px] mt-[-10px] ml-[36px]"
              alt="Leaf icon"
              src="https://c.animaapp.com/mkved9hrg5UXzm/img/vector.svg"
            />
          </div>
          <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-[22px] text-center tracking-[0] leading-8">
            ONLY USE RAW MATERIALS, PRODUCTION AND OFFICE EQUIPMENT WITH MINIMAL
            CO2 EMISSIONS
          </p>
        </div>
      ),
    },
    {
      bgColor: "bg-bg-gray",
      border: "",
      content: (
        <div className="flex flex-col h-full">
          <img
            className="w-full h-[239px] object-cover rounded-t-[20px] mb-4"
            alt="Ecology concept"
            src="https://c.animaapp.com/mkved9hrg5UXzm/img/ecology-concept-with-green-plants-glass-sphere-3d-render-b-1.png"
          />
          <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-[22px] text-center tracking-[0] leading-8 px-4">
            <span className="text-[#101014]">
              TRAIN EMPLOYEES, CUSTOMERS AND PARTNERS TO BECOME{" "}
            </span>
            <span className="text-[#249369]">CO2</span>
            <span className="text-[#101014]">&nbsp;</span>
            <span className="text-[#264eab]">NEUTRAL</span>
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-[1248px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              className={`${card.bgColor} ${card.border} rounded-[20px] h-[422px] overflow-hidden`}
            >
              <CardContent className="p-6 h-full">{card.content}</CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-[22px] tracking-[0] leading-8">
            COMPANY CARS ARE 100% ELECTRIC
          </p>
        </div>
      </div>
    </section>
  );
};
