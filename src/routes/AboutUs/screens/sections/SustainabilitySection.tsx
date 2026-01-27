import { Card, CardContent } from "../../components/ui/card";

export const SustainabilitySection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <Card className="relative w-full max-w-[610px] h-[420px] overflow-hidden rounded-[20px] border-0">
        <div className="absolute inset-0 bg-main rounded-[20px]" />

        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Modern production equipment"
          src="https://c.animaapp.com/mkvbxc2okqfhzF/img/mask-group-2.png"
        />

        <CardContent className="relative z-10 flex flex-col items-center justify-start pt-10 px-20 h-full">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-3xl text-center tracking-[0] leading-[39px] mb-[10px]">
            MODERN PRODUCTION
          </h2>

          <p className="[font-family:'Inter',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[22px] max-w-[454px]">
            We use production equipment that is flexible and efficient and suits
            our customer needs.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
