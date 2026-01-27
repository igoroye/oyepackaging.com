import { Separator } from "../../components/ui/separator";

const cookieUsagePoints = [
  "ÖYE Packaging OÜ uses cookies for the purpose of improving your experience as a visitor, as well as to receive data and insights that may be helpful for the ÖYE Packaging OÜ in order to ensure that our website operates to give you the best possible experience and improve our services.",
  "ÖYE Packaging OÜ may share cookies with ÖYE Packaging OÜ social profiles, advertising, and analytical applications, and they may combine these cookies with other information you have provided to them or that was collected during your use of their services.",
];

export const CookiePolicyMainSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] relative px-4">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          WHAT DO WE USE COOKIES FOR?
        </h2>

        {cookieUsagePoints.map((point, index) => (
          <p
            key={index}
            className="w-full text-text text-lg leading-[22px] [font-family:'Inter',Helvetica] font-normal tracking-[0]"
          >
            • {point}
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
