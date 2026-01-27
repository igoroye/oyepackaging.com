import { Separator } from "../../components/ui/separator";

const contentData = [
  {
    text: "19.1. The director and/or representative of the Customer personally, irrevocably, and unconditionally represents and warrants to ÖYE Packaging that he or she has full authority to act on behalf of the Customer and further, that the Customer has duly authorized and is aware of these Conditions of Sale and has agreed to the same. In the event that the director and/or representative of the Customer has no authority to act on behalf of the Customer, he or she agrees to fully indemnify ÖYE Packaging in respect of all costs, losses, damages, and injury suffered as a result of his or her representation and/or warranty.",
  },
  {
    text: "19.2. The Customer agrees that ÖYE Packaging may at its sole discretion, carry out verification checks of the Customer and/or its representatives and will require the Customer and/or its representatives to provide certain documents for verification purposes. The Customer and/or its representatives agree that the Customer will, when requested, promptly provide the documents for the purposes of proof of identity, residence and address, and age as may be necessary.",
  },
];

export const SocialMediaSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          THE CUSTOMERS CAPACITY TO CONTRACT
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
