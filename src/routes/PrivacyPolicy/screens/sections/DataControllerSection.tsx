import { Separator } from "../../components/ui/separator";

const dataSharingContent = [
  {
    text: "We share Personal Data with the following categories of recipients:",
  },
  {
    boldText: "Service providers. ",
    text: "We use service providers for the delivery of our Website and Service. This includes different analytical services, hosting, delivery services;",
  },
  {
    text: "Professional consultants. We use professional consultants to receive accounting, legal, or similar services.",
  },
  {
    boldText: "Authorities",
    text: ". We may share personal data with governmental authorities when we are required to do so pursuant to the applicable law. For example, we may share Personal Data contained in invoices when local tax authorities require us to do so.",
  },
  {
    text: "We may transfer Personal Data outside the territory of the European Economic Area, provided that any such transfer shall be subject to data processing agreement and appropriate or suitable safeguards.",
  },
];

export const DataControllerSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          DATA SHARING AND TRANSFERS
        </h2>

        {dataSharingContent.map((item, index) => (
          <p
            key={index}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            {item.boldText && (
              <span className="font-medium">{item.boldText}</span>
            )}
            {item.text}
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
