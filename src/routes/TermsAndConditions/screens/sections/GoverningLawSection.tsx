import { Separator } from "../../components/ui/separator";

const deliveryTerms = [
  {
    number: "5.1.",
    text: "Products are delivered under Incoterm DAP (Delivery At Place). ÖYE Packaging delivers to the Customer's destination. Transport costs are separate, paid by the Customer. Import formalities' costs of the Product or Service are excluded and are borne by the Customer.",
  },
  {
    number: "5.2.",
    text: "All Products and/or Services are shipped at the expense and risk of the Customer unless otherwise agreed in writing.",
  },
  {
    number: "5.3.",
    text: "Partial deliveries are permissible if feasible for the Customer and there was a prior mutual written agreement reached between the parties.",
  },
  {
    number: "5.4.",
    text: "The delivery date may be delayed due to technical production problems, as purchased Products and/or Services are produced and designed individually for each Customer. In the case of delayed deliveries or services, the Customer may set a reasonable grace period if ÖYE Packaging exceeds the agreed timeframe or fails in contractual obligations.",
  },
  {
    number: "5.5.",
    text: "If the Product or Service delivery is not met after a grace period, the Customer must notify ÖYE Packaging, setting further deadlines for withdrawal or compensation.",
  },
  {
    number: "5.6.",
    text: "Delays of up to five (5) working days due to export controls for Products or Services shipped outside the European Union do not constitute grounds for delay.",
  },
  {
    number: "5.7.",
    text: "The shipping costs for the return of the Product or Service are totally borne by the Customer.",
  },
];

export const GoverningLawSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          DELIVERIES, DEADLINES, DELAYS AND RETURN
        </h2>

        {deliveryTerms.map((term, index) => (
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
