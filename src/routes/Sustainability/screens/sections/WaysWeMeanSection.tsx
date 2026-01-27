import { Card, CardContent } from "../../components/ui/card";

export const WaysWeMeanSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <Card className="bg-bg-beige border-0 rounded-[20px]">
        <CardContent className="flex flex-col items-center justify-center p-8 min-h-[422px]">
          <div className="[font-family:'Inter',Helvetica] font-semibold text-text text-[26px] text-center tracking-[0] leading-[49px] mb-4">
            90%
          </div>
          <p className="[font-family:'Inter',Helvetica] font-normal text-black text-lg tracking-[0] leading-[22px] text-center max-w-[306px]">
            of renewable energy is used in production, offices, and all company
            space.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
