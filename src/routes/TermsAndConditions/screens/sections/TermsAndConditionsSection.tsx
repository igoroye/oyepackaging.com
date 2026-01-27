import { Separator } from "../../components/ui/separator";

const termsContent = [
  {
    id: "6.1",
    text: "6.1. Property rights in all the Products or Services delivered shall remain vested in the ÖYE Packaging and shall not pass to the Customer until all monies owing to the ÖYE Packaging by the Customer as per agreement/invoices, as well as any other debts owing to the ÖYE Packaging by the Customer, have been paid in full by the Customer.",
  },
  {
    id: "6.2",
    text: "6.2. ÖYE Packaging is entitled to reclaim the Products or Services and unilaterally withdraw from these Conditions of Sale unilaterally and without the consent of the Customer in cases specified in clause 13.1. of these Conditions of Sale.",
  },
  {
    id: "6.3",
    text: "6.3. The parties agree that reorganization/restructuring or change of either parties management cannot form the grounds for termination of these Conditions of Sale. In the event when one of the parties is reorganized or liquidated, these Conditions of Sale remain in force and their provisions are binding on the Party's successor. The parties shall notify each other of the occurrence of such circumstances 1 (one) month in advance in writing.",
  },
];

export const TermsAndConditionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          RETENTION OF TITLE
        </h2>

        {termsContent.map((term) => (
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
