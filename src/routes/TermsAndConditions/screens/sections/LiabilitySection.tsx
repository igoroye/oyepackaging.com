import { Separator } from "../../components/ui/separator";

const invoicingTerms = [
  {
    number: "8.1.",
    text: "ÖYE Packaging sends invoices electronically.",
  },
  {
    number: "8.2.",
    text: "Payment for Products or Services shall be completed via bank transfer based on the invoice issued by ÖYE Packaging.",
  },
  {
    number: "8.3.",
    text: "For bank transfers, payment must be made within 3 (three) working days from the day ÖYE Packaging sent the invoice to the Customer unless otherwise mutually agreed in writing",
  },
  {
    number: "8.4.",
    text: "Failure to settle the payment or provide proof that the transaction occurred within 3 (three) working days from the day ÖYE Packaging has sent the invoice to the Customer shall result in cancellation of the order and loss of applied sale conditions.",
  },
  {
    number: "8.5.",
    text: "All orders are subject to acceptance by ÖYE Packaging. The orders shall be deemed accepted by ÖYE Packaging upon written confirmation sent via e-mail stating that the credited sum(-s) was received by ÖYE Packaging.",
  },
  {
    number: "8.6.",
    text: "ÖYE Packaging shall have the right to reject any order if the Customer fails to execute the payment according to the provisions of these Conditions of Sale or other terms agreed by the parties in a written form, by giving the Customer written notice not less than 3 (three) days prior to the effective date of such rejection.",
  },
  {
    number: "8.7.",
    text: "The orders exceeding €10,000 (ten thousand euros) may be paid in two installments. The first installment of 50% (fifty percent) from the total amount is payable within 3 (three) working days from the day ÖYE Packaging has sent the invoice to the Customer. The second installment of the remaining 50%  (fifty percent) balance is due within 3 (three) working days from the day ÖYE Packaging sent the e-mail to the Customer confirming the fact that the Customer's order was produced.",
  },
  {
    number: "8.8.",
    text: "If the Customer delays the payment, all outstanding payments owed to ÖYE Packaging shall become immediately due, and other orders made by the Customer shall be stopped until all monies owed to the ÖYE Packaging by the Customer, have been paid in full.",
  },
];

export const LiabilitySection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          INVOICING AND PAYMENT
        </h2>

        {invoicingTerms.map((term, index) => (
          <p
            key={index}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            {term.number} {term.text}
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
