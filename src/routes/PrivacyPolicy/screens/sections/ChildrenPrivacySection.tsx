import { Separator } from "../../components/ui/separator";

export const ChildrenPrivacySection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          CHANGES AND UPDATES TO THE PRIVACY POLICY
        </h2>

        <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          We may update the Privacy Policy from time to time. Our currently
          enforced Privacy Policy may be accessed through Website. We will
          notify you about any such changes should you be part of our newsletter
          list or order any product from us.
        </p>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
