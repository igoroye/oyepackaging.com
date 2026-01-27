import { Separator } from "../../components/ui/separator";

const contentData = [
  {
    id: "4.1",
    text: "4.1. The price applied to Products and/or Services is based on the prevailing rate at the time of the purchase order placement by the Customer. Prices are denominated in the currency of Euro and are exclusive of VAT, taxes, duties, and other applicable charges under the contract, which are the responsibility of the Customer. Delivery costs and any associated expenses are also borne by the Customer.",
  },
  {
    id: "4.2",
    text: "4.2. In the event of fluctuations in material or semi-finished goods prices, employer contributions, employment conditions, exchange rates, or similar post-order acceptance circumstances, ÖYE Packaging reserves the right to adjust prices accordingly. Should the increase exceed 12% (twelve percent), the Customer may cancel these Conditions of Sale via written statement, unless ÖYE Packaging agrees to fulfill the order, fully or partially, at the originally agreed-upon price.",
  },
];

export const TermsContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          PRICES AND TAXES
        </h2>

        {contentData.map((item) => (
          <p
            key={item.id}
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
