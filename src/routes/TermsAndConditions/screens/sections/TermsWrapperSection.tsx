import { Separator } from "../../components/ui/separator";

const termsData = [
  {
    id: "3.1",
    text: "3.1. ÖYE Packaging Service and Product offers are subject to change. The information contained in ÖYE Packaging Website may be changed at any time at the sole discretion of ÖYE Packaging and without prior notice. ÖYE Packaging encourages the Customer to read these Conditions of Sale before each purchase.",
  },
  {
    id: "3.2",
    text: "3.2. The Customer manifests the intent of accepting, reading, and understanding these Conditions of Sale by:",
  },
  {
    id: "3.2.1",
    text: "3.2.1. paying the full amount due to ÖYE Packaging for Products or Services purchased as specified in these Conditions of Sale. The orders exceeding €10,000 (ten thousand euro) shall be paid in two installments: the first 50% (fifty percent) payment constitutes the acceptance of these Conditions of Sale by the Customer and;",
  },
  {
    id: "3.2.2",
    text: "3.2.2. upon final confirmation of the design by the Customer. The Customer shall confirm the final Design within 2 weeks. If the Customer is unable to meet the Design confirmation deadline stated in this clause or finds the deadline to be unacceptable for some other reasons, ÖYE Packaging reserves the right to cancel the order at its sole discretion",
  },
  {
    id: "3.3",
    text: "3.3. Approved Design by the Customer serves as the basis for agreed Products or Services. Any claims by the Customer after final confirmation of the Design are null and void.",
  },
  {
    id: "3.4",
    text: "3.4. This contract of Conditions of Sale is finalized upon written confirmation that the order is executed by ÖYE Packaging. The said written confirmation is sent by virtue of e-mail.",
  },
];

export const TermsWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          CONCLUSION OF CONTRACT, ACCEPTANCE BY THE CUSTOMER, AND COOPERATION
          OBLIGATIONS
        </h2>

        {termsData.map((term) => (
          <p
            key={term.id}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            {term.text}
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
