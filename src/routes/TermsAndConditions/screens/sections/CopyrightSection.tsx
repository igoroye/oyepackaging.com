import { Separator } from "../../components/ui/separator";

const legalContent = [
  {
    number: "17.1.",
    text: "These Conditions of Sale shall be construed in accordance with the laws of the Republic of Estonia, excluding the 1980 United Nations Convention on Contracts for the International Sale of Goods (CISG).",
  },
  {
    number: "17.2.",
    text: "The illegality, invalidity or unenforceability of any term of these Conditions of Sale under the law of any jurisdiction shall not affect their legality, validity, or enforceability under the law of any other jurisdiction nor the legality, validity, or enforceability of any other provision of these Conditions of Sale.",
  },
  {
    number: "17.3.",
    text: "In the event of a conflict of laws between the laws, regulations, instructions, and any other legal acts of any jurisdiction other than the Republic of Estonia, the laws of the Republic of Estonia, as well as regulations, instructions and any other legal acts prevail to the extent of the conflict.",
  },
];

export const CopyrightSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          GOVERNING LAW AND JURISDICTION
        </h2>

        {legalContent.map((item, index) => (
          <p
            key={index}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            {item.number} {item.text}
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
