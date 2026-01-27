import { Separator } from "../../components/ui/separator";

export const PersonalDataCollectionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          DATA RETENTION
        </h2>

        <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          We retain Personal Data only for as long as necessary to fulfill the
          purposes for which it was collected, including fulfilling orders and
          processing payments, and to comply with legal, accounting, or
          reporting obligations. We generally store Personal Data for the term
          of 1 year except for Personal Data necessary for fulfillment of our
          legal obligations. For accounting and tax purposes, under Estonian
          law, we are required to retain relevant financial records, including
          payment and invoicing information, for 7 years from the end of the
          financial year in which the transaction occurred.
        </p>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
