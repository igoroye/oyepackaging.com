import { Separator } from "../../components/ui/separator";

export const DataRetentionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          HOW TO EXERCISE YOUR RIGHTS
        </h2>

        <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          To exercise any of your rights regarding your personal data, please
          contact us through the following channels:
        </p>

        <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          <span className="font-medium text-[#101014]">Email:</span>
          <span className="text-[#101014]">&nbsp;</span>
          <span className="text-[#264eab]">hello@oyepackaging.com</span>
          <span className="text-[#101014]"> </span>
          <span className="font-medium text-[#101014]">Postal Address:</span>
          <span className="text-[#101014]">
            {" "}
            Päevalille tn 6-15, 13517, Tallinn, Estonia
          </span>
        </p>

        <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          Please include your name, contact details, and a detailed description
          of Your request. We may need to verify your identity before processing
          your request to ensure that Personal Data is protected. We will
          respond to Your request within the time frame required by applicable
          law, typically within one month, and may extend the response time to
          60 days. If you withdraw your consent or exercise your right to
          object, this will not affect the lawfulness of processing based on
          your consent before its withdrawal.
        </p>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
