import { Separator } from "../../components/ui/separator";

const contentData = {
  title: "WHAT PERSONAL DATA IS COLLECTED BY US",
  introduction:
    "In order to provide services, we process the following Personal Data:",
  sections: [
    {
      label: "a.",
      description:
        "collected from visitors of our Website who browse or use our Website through cookies:",
      items: [
        "IP Address: Collected when visiting our website.",
        "Browser Type: Type of browser used.",
        "Device Information: Details about the device used.",
        "Contact Information: Name, email address, and location if a message is sent.",
      ],
    },
    {
      label: "b.",
      description:
        "collected from clients who contact us via forms made available by Us on Website, make an order pursuant to our Terms and Conditions, or contact us on our social media:",
      items: [
        "Personal Information: Name, address, date of birth, phone number, and email address.",
        "Order Details: Type, order number, design, and quantity.",
        "Delivery Information: Address, contact information for delivery, and recipient details",
        "Payment Information: payment amount, billing address, transaction information",
      ],
    },
  ],
  footer: [
    "We process the Personal data when You visit the Our social networks (Facebook, LinkedIn, etc.). Such data is processed exclusively in connection with maintaining the profile, including informing You about Our activities and promoting various types of Services.",
    "For the avoidance of doubt, Personal Data is not used for the purposes of automated decision-making, including profiling, referred to in Article 22(1) and (4) GDPR.",
  ],
};

export const LegalBasisSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          {contentData.title}
        </h2>

        <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          {contentData.introduction}
        </p>

        {contentData.sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-5 w-full">
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              <span className="font-medium">{section.label}</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">
                {" "}
                {section.description}
              </span>
            </p>

            <div className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              {section.items.map((item, itemIndex) => (
                <span key={itemIndex}>
                  {item}
                  {itemIndex < section.items.length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-0 w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          {contentData.footer.map((paragraph, index) => (
            <span key={index}>
              {paragraph}
              {index < contentData.footer.length - 1 && <br />}
            </span>
          ))}
        </div>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
