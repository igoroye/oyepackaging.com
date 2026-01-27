import { Separator } from "../../components/ui/separator";

const contentItems = [
  {
    text: "12.1. ÖYE Packaging Products necessitates maintaining humidity level between 45% (forty five percent) and 55% (fifty-five percent) and storage temperatures within the range of 19°C to 23°C, as well as other conditions specified in the Product's Technical data sheet found on the Website.",
  },
  {
    text: "12.2. ÖYE Packaging Products are not suitable for sterilization, pasteurization, vacuumization or microwave heating unless otherwise specified in the Product's Technical data sheet found on the Website.",
  },
  {
    text: "12.3. ÖYE Packaging may require a minimum number of units of a Product or Service or a minimum weight of a Product or Service to place the order of the Customer. If the Customer submits a purchase order that falls short of the minimum required by ÖYE Packaging for placing production, the order will be amended accordingly and sent back to the Customer for approval.",
  },
  {
    text: "12.4. ÖYE Packaging makes reasonable efforts to accurately display the attributes of the Products or Services ordered by the Customer, including the applicable colors, however ÖYE Packaging at the same time does not guarantee the exact color tone match of any Product or Service. Deviation in color resulting from the standard printing process, wide range of colors, melting of color pigments that originate stains on chromatic variations areas, temperature sensitive ink that may lead to slight color tone differences are permissible and do not form the grounds for rejection of the Products and/or Services. The Customer is fully aware that deviation of the color is permissible in accordance with the standards of the International Commission on Illumination – Delta E.",
  },
];

export const IntroductionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          QUALITY STANDARDS, PERMITTED QUANTITIES AND COLOR DEVIATIONS
        </h2>

        {contentItems.map((item, index) => (
          <p
            key={index}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            {item.text}
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
