import { Separator } from "../../components/ui/separator";

export const CookiePolicyFooterSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] relative px-4">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          REJECTION OF COOKIES
        </h2>

        <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          If the visitor does not want analytical cookies to be used on the
          visitor&apos;s device when visiting the ÖYE Packaging OÜ website, the
          visitor must click on the button &quot;I do not agree&quot; in the
          displayed box that warns about the fact that cookies are used on the
          ÖYE Packaging OÜ website.
        </p>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
