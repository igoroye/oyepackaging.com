import { Card, CardContent } from "../../components/ui/card";

export const ProductionHighlightsSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <Card className="bg-white rounded-[20px] max-w-[610px] mx-auto">
        <CardContent className="flex flex-col items-center justify-center px-20 py-10 space-y-6">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-new-text text-3xl text-center tracking-[0] leading-[39px]">
            WE ARE PROACTIVE
          </h2>

          <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg text-center tracking-[0] leading-[22px] max-w-[454px]">
            With a lean approach, we continuously innovate, bringing new
            products, services and disruptive packaging concepts to the market.
          </p>

          <div className="[font-family:'Inter',Helvetica] font-medium text-black text-[80px] tracking-[0] leading-[normal]">
            🤩
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
