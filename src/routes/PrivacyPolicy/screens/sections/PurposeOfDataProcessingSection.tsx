import { Separator } from "../../components/ui/separator";

export const PurposeOfDataProcessingSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          CHILDREN&#39;S ONLINE PRIVACY
        </h2>

        <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          We do not Process any Personal Data of children under the age of 18.
          Should we determine that any piece of Personal Data belongs to a
          child, we will immediately remove it from our systems.
        </p>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
