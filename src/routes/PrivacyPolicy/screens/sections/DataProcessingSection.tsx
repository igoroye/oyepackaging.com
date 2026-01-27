import { Separator } from "../../components/ui/separator";

const dataProcessingItems = [
  {
    letter: "a.",
    content:
      "We collect data to monitor website traffic, ensure security, and improve user experience by optimizing the website's compatibility, functionality, and display across different locations, browsers, and devices. Additionally, if you contact us, we use your information to respond to inquiries and provide customer support.",
  },
  {
    letter: "b.",
    content:
      "We collect data to identify and communicate with you, process and fulfill Your inquiries and orders accurately, ensure timely delivery, and handle payment transactions. This data is also used to comply with financial regulations and provide tailored customer services.",
  },
];

export const DataProcessingSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          PURPOSE OF DATA PROCESSING
        </h2>

        <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          We Process Personal Data to ensure the effective operation,
          enhancement, and security of Our Services. Specifically:
        </p>

        {dataProcessingItems.map((item, index) => (
          <p
            key={index}
            className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            <span className="font-medium">{item.letter}</span>
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">
              {" "}
              {item.content}
            </span>
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
