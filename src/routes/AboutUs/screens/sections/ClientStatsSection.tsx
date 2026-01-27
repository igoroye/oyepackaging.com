import { Card, CardContent } from "../../components/ui/card";

export const ClientStatsSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="relative p-0">
          <div className="relative w-full max-w-[610px] mx-auto">
            <img
              className="w-full h-auto object-cover"
              alt="Mask group"
              src="https://c.animaapp.com/mkvbxc2okqfhzF/img/mask-group-1.png"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-start pt-10 px-4">
              <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl text-center tracking-[0] leading-[39px] mb-3">
                DEDICATED TEAM
              </h2>

              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg text-center tracking-[0] leading-[22px] max-w-[454px]">
                We bring together ambitious people who want to grow, think
                outside the box, and succeed together.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
