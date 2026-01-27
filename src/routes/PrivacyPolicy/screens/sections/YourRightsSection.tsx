import { Separator } from "../../components/ui/separator";

const legalBasisItems = [
  {
    title:
      "Legitimate Interests (Article 6(1)(f) GDPR): We rely on Our legitimate interest:",
    content: [
      "in maintaining and improving our Website, ensuring its security, and enhancing the user experience. This includes monitoring website traffic, optimizing the website's functionality across different locations, browsers, and devices, and responding to user inquiries.",
      "in contacting You for the purpose of offering Services. This includes responding to inquiries, providing information about Services, and following up with potential or existing customers.",
    ],
    isMedium: true,
  },
  {
    title: "Consent (Article 6(1)(a) GDPR):",
    content: [
      "For Personal Data collected through forms, non-essential cookies and inquiries, we rely on Your explicit consent. This consent allows us to process Personal Data to communicate with You, respond to inquiries, and offer personalized services",
    ],
    isMedium: false,
  },
  {
    title: "Contract (Article 6(1)(b) GDPR):",
    content: [
      "We Process Personal Data as necessary for the performance of a contract. This includes fulfilling Your product orders, ensuring accurate and timely delivery, and processing payments. These activities are essential for providing the Services requested.",
    ],
    isMedium: false,
  },
  {
    title: "Legal Obligation (Article 6(1)(c) GDPR):",
    content: [
      "In some cases, we Process Personal Data to comply with legal obligations, such as those related to financial record-keeping and reporting requirements. This ensures Our compliance with applicable laws and regulations.",
    ],
    isMedium: false,
  },
];

export const YourRightsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          LEGAL BASIS FOR PROCESSING
        </h2>

        <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          We process your personal data in compliance with the GDPR,
          specifically under the following legal grounds:
        </p>

        {legalBasisItems.map((item, index) => (
          <div key={index} className="w-full flex flex-col gap-0">
            <p
              className={`w-full [font-family:'Inter',Helvetica] ${item.isMedium ? "font-medium" : "font-normal"} text-text text-lg tracking-[0] leading-[22px]`}
            >
              {item.title}
            </p>
            {item.content.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
