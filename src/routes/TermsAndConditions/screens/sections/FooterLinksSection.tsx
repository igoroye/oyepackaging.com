import { Separator } from "../../components/ui/separator";

export const FooterLinksSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          ENTIRE AGREEMENT CLAUSE
        </h2>

        <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          15.1. These Conditions of Sale embody all the terms and conditions
          agreed upon between Parties and supersede and cancel in all respects
          all previous representations, warranties, agreements, and undertakings
          (if any) whether such be written or oral, made between the Parties
          with respect to the subject matter hereof, save and except those
          mutually agreed in writing between Parties.
        </p>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
