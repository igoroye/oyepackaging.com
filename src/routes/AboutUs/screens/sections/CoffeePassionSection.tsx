import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const accordionData = [
  {
    value: "item-1",
    title: "DRIVEN BY PURPOSE",
    content: [
      "We bring fresh ideas to the packaging world while caring for our beautiful planet.",
      "As a next-generation packaging company, we're excited to innovate with our flexible solutions and strong commitment to sustainability.",
    ],
  },
  {
    value: "item-2",
    title: "CHASING EXCELLENCE",
    content: [],
  },
  {
    value: "item-3",
    title: "PROUDLY EUROPEAN",
    content: [],
  },
  {
    value: "item-4",
    title: "EXPANDING HORIZONS",
    content: [],
  },
];

export const CoffeePassionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[641px] items-start relative">
      <div className="flex flex-col w-full max-w-[605px] items-start gap-2.5 relative">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          {accordionData.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b border-border"
            >
              <AccordionTrigger className="flex w-full items-center justify-between py-[13px] px-0 [font-family:'Inter',Helvetica] font-medium text-text text-3xl tracking-[0] leading-[39px] hover:no-underline">
                {item.title}
              </AccordionTrigger>
              {item.content.length > 0 && (
                <AccordionContent className="flex flex-col items-start gap-5 pb-5">
                  {item.content.map((text, index) => (
                    <p
                      key={index}
                      className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
                    >
                      {text}
                    </p>
                  ))}
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
