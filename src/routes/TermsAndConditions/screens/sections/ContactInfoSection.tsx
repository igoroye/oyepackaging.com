import { Separator } from "../../components/ui/separator";

const provisions = [
  {
    number: "20.1",
    text: "ÖYE Packaging hereby warrants and guarantees that the Products and Services shall not be in breach of any Applicable Laws and shall be provided in accordance with the terms of these Conditions of Sale.",
  },
  {
    number: "20.2",
    text: "The Customer is obliged to ensure compliance with import, transport, storage, and usage regulations of any applicable law.",
  },
  {
    number: "20.3",
    text: "No failure, delay, relaxation, or indulgence on the part of any Party in exercising any power or right conferred upon such Party in terms of these Conditions of Sale shall operate as a waiver of such power or right, nor shall any single exercise of any such power or right preclude any other or future exercise thereof, or the exercise of any other power or right under these Conditions of Sale.",
  },
  {
    number: "20.4",
    text: "Except as expressly provided under these Conditions of Sale, no variation, modification, or waiver of any provision of these Conditions of Sale nor consent to any departure by any party therefrom, shall in any event be of any force or effect, unless the same shall be confirmed in writing, signed by all Parties, and then such variation, modification, waiver or consent shall be effective only to the extent for which it may be made or given.",
  },
];

export const ContactInfoSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          OTHER PROVISIONS
        </h2>

        {provisions.map((provision, index) => (
          <p
            key={`provision-${index}`}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            {provision.number}. {provision.text}
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
