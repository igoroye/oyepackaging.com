import { Separator } from "../../components/ui/separator";

const contentData = [
  {
    number: "10.1.",
    text: "A person who is not a party to these Conditions of Sale has no right to enforce any term of these Conditions of Sale.",
  },
  {
    number: "10.2.",
    text: "The rights and obligations of these Conditions of Sale cannot be assigned to any third party without the prior written consent of the ÖYE Packaging, which consent shall not be unreasonably withheld.",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          THIRD PARTY RIGHTS
        </h2>

        {contentData.map((item, index) => (
          <p
            key={index}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            {item.number} {item.text}
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
