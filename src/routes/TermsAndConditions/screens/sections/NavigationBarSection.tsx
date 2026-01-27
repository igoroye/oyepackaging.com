import { Separator } from "../../components/ui/separator";

const contentData = [
  {
    text: "7.1. In the event of a Force Majeure, which refers to events or conditions beyond the reasonable control of the parties, such as natural disasters, acts of war, government actions, labor strikes, or any other similar occurrences, both parties will be temporarily relieved from their contractual duties until the situation is resolved or the impact is mitigated. This ensures that neither party is held liable for performance delays or failures caused by these exceptional circumstances.",
  },
  {
    text: "7.2. The clause outlines the procedure to be followed when a Force Majeure event occurs. It typically requires the party affected by such an event to promptly notify the other party (not later than 5 (five) working days from the occurrence of such event), indicating the nature of the event, its impact on these Conditions of Sale, and the estimated duration of the delay. The parties may agree to extend deadlines, adjust delivery schedules, or even terminate these Conditions of Sale if the Force Majeure event persists for an extended period of at least 1 (one) month, making performance impractical or commercially unviable.",
  },
];

export const NavigationBarSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          FORCE MAJEURE
        </h2>

        {contentData.map((item, index) => (
          <p
            key={index}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            {item.text}
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
