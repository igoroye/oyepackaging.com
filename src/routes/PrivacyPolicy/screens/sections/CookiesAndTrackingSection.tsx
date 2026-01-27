import { Separator } from "../../components/ui/separator";

const contactData = [
  {
    label: 'ÖYE Packaging OÜ ("We," "Us," "Our"),',
    content:
      "has its headquarters in Tallinn, Estonia shall be the Data Controller of your Personal Data.",
  },
  {
    label: "Register code:",
    content: "16760411",
  },
  {
    label: "Legal address:",
    content: "Päevalille tn 6-15, 13517, Tallinn, Estonia",
  },
];

export const CookiesAndTrackingSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          DATA CONTROLLER AND CONTACT
        </h2>

        {contactData.map((item, index) => (
          <p
            key={index}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            <span className="font-medium">{item.label} </span>
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">
              {item.content}
            </span>
          </p>
        ))}

        <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          <span className="text-[#101014]">
            You can contact us by sending your inquiry to{" "}
          </span>
          <span className="text-[#264eab]">hello@oyepackaging.com</span>
        </p>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
