import { Separator } from "../../components/ui/separator";

const terminationItems = [
  {
    id: "13.1",
    text: "ÖYE Packaging reserves the right to unilaterally terminate these Conditions of Sale with the Customer, reclaim the Products or Service without the need for prior notice in the following circumstances:",
  },
  {
    id: "13.1.1",
    text: "if the Customer delays any payment or performance of any obligation specified in these Conditions of Sale for more than 10 (ten) working days and such delay is not ÖYE Packaging's fault;",
  },
  {
    id: "13.1.2",
    text: "if the Customer has provided false information or statements during the conclusion or execution of these Conditions of Sale;",
  },
  {
    id: "13.1.3",
    text: "if during the conclusion or execution of these Conditions of Sale, the Customer has violated any legislation that is related to these Conditions of Sale, or any legislation related to the performance/execution of these Conditions of Sale;",
  },
  {
    id: "13.1.4",
    text: "the insolvency process of the Customer has been declared or other circumstances have occurred that prevent or will prevent the Customer from continuing to perform these Conditions of Sale in accordance with the provisions of these Conditions of Sale;",
  },
  {
    id: "13.1.5",
    text: "if the Customer has caused any type of damage to ÖYE Packaging;",
  },
  {
    id: "13.1.6",
    text: "if these Conditions of Sale cannot be executed due to the fact that during the execution of these Conditions of Sale international or national sanctions have been applied to the Customer or sanctions imposed by a member state of the European Union or the North Atlantic Treaty Organization (NATO) affecting significant financial and capital market interests;",
  },
  {
    id: "13.1.7",
    text: "If in ÖYE Packaging's opinion beyond any reasonable doubt, the Customer has actually created imminent harm to ÖYE Packaging business;",
  },
  {
    id: "13.1.8",
    text: "If in ÖYE Packaging's opinion beyond any reasonable doubt, the Customer uses, allows the use, or intends to use the Products and/or Services in a fraudulent way.",
  },
  {
    id: "13.2",
    text: "If the Customer terminates the contract prior to Product or Service production, an operation fee of 10% (ten percent) of the order value will be charged by ÖYE Packaging. If the termination occurs during/after order production, the customer is liable to pay the entire order value.",
  },
];

export const UserAgreementSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          TERMINATION
        </h2>

        {terminationItems.map((item) => (
          <p
            key={item.id}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            {item.id}. {item.text}
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
