import { Card, CardContent } from "../../components/ui/card";

export const ProactiveTeamSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <Card className="bg-white rounded-[20px] max-w-[610px] mx-auto">
        <CardContent className="flex flex-col items-center justify-center px-8 py-10 gap-4">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-new-text text-3xl text-center tracking-[0] leading-[39px]">
            SUSTAINABILITY
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg text-center tracking-[0] leading-[22px] max-w-[454px]">
            No compromises. We use only sustainable, CO2-compensated materials,
            with clear communication and zero greenwashing!
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
