import { Separator } from "../../components/ui/separator";

const withdrawalPoints = [
  "The visitor has the right to decide at any point whether to accept or reject the use of the analytical cookies by the ÖYE Packaging OÜ. The visitor may not refuse the use of essential cookies by the ÖYE Packaging OÜ.",
  "The visitor has the right to accept or withdraw previously given visitors' consent to analytical cookies by clicking on the relevant button of the displayed box.",
];

export const CookiePolicyAcceptanceSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] px-4">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          WITHDRAWAL OF ACCEPTANCE
        </h2>

        {withdrawalPoints.map((point, index) => (
          <p
            key={index}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            • {point}
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
