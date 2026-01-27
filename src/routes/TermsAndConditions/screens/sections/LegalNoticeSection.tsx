import { Separator } from "../../components/ui/separator";

const noticeItems = [
  {
    number: "18.1.",
    text: 'All notices, requests, demands and other communications given hereunder (collectively "Notices") shall be in writing and delivered via e-mail.',
  },
  {
    number: "18.2.",
    text: "Any communication made by or on behalf of any of the Parties to any other Party shall be in writing in the English language unless otherwise agreed upon by both parties.",
  },
  {
    number: "18.3.",
    text: "ÖYE Packaging shall confirm receipt of a received Customer's written letter via e-mail within 24 (twenty-four) hours by writing confirmation e-mail.",
  },
];

export const LegalNoticeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          NOTICES AND CORRESPONDENCE
        </h2>

        {noticeItems.map((item, index) => (
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
