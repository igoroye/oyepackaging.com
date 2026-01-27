import { Separator } from "../../components/ui/separator";

export const LegalBasisForProcessingSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          COOKIES AND TRACKING TECHNOLOGIES
        </h2>

        <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          Information about our cookies and other tracking technologies that we
          use is available in Our Cookies Policy.
        </p>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
