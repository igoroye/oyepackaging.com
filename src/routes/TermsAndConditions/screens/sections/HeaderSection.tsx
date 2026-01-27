import { Separator } from "../../components/ui/separator";

const contentItems = [
  {
    id: "14.1",
    text: "14.1. Except as otherwise expressly provided in these Conditions of Sale, each Party shall bear all legal and other professional costs and expenses, incurred by it in connection with the preparation, negotiation or entry into of these Conditions of Sale.",
  },
  {
    id: "14.2",
    text: "14.2. The data is processed according to article 13 of the General Data Protection Regulation and Privacy Policy found on the Website. The Parties shall comply with the General Data Protection Regulation.",
  },
  {
    id: "14.3",
    text: "14.3. By signing these Conditions of Sale, the Parties confirm that they agree to the processing of their data for the purposes of performance of these Conditions of Sale and to use such data for the provision of the Products or Services and performance of obligations referred to in these Conditions of Sale according to the laws of the European Union and the Republic of Estonia.",
  },
  {
    id: "14.4",
    text: "14.4. Each Party is aware that upon receipt of any personal data from the other Party within the framework of these Conditions of Sale, it becomes the controller of the received personal data.",
  },
  {
    id: "14.5",
    text: "14.5. All Confidential Information disclosed shall remain the sole and exclusive property of the Disclosing Party. Nothing in these Conditions of Sale nor the disclosure of Confidential Information pursuant to these Conditions of Sale constitutes or shall be construed information of the Receiving Party or its copyright, patent trade secrets, trademarks, or other intellectual property rights.",
  },
  {
    id: "14.6",
    text: "14.6. The Receiving Party by accepting these Conditions of Sale acknowledges that all existing and future intellectual property rights related to the Confidential Information are exclusive titles of the Disclosing Party.",
  },
  {
    id: "14.7",
    text: "14.7. The Receiving Party shall promptly cease to use and return or destroy any Confidential Information (including copies and reproductions) upon the request of the Disclosing Party or when the use of the Confidential Information is no longer required for the purposes of these Conditions of Sale or upon termination of these Conditions of Sale. If the Confidential Information or its copies and reproductions cannot be returned, the Receiving Party is obliged to destroy it completely.",
  },
  {
    id: "14.8",
    text: "14.8. The obligation not to disclose the Confidential information shall remain in force indefinitely, notwithstanding the termination of these Conditions of Sale",
  },
  {
    id: "14.9",
    text: "14.9. ÖYE Packaging does not acquire any rights in any and all the Customer's intellectual property and all such property will remain at all times with the Customer. Similarly, ÖYE Packaging is not permitted to use any intellectual property belonging to the Customer except upon the prior written consent by the Customer and for the purpose of performing these Conditions of Sale Agreement and/or using particular images of Customer's goods for advertisement purposes.",
  },
  {
    id: "14.10",
    text: "14.10. The Customer is not permitted to use any intellectual property of ÖYE Packaging except for the purposes contemplated by the Products or Services provided to the Customer or as permitted in a written form by ÖYE Packaging.",
  },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="w-full relative">
        <div className="flex flex-col w-full items-start gap-5 relative">
          <header className="flex items-center w-full">
            <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
              CONFIDENTIALITY, PERSONAL DATA, INTELLECTUAL PROPERTY, ADVERTISING
            </h2>
          </header>

          {contentItems.map((item) => (
            <p
              key={item.id}
              className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
            >
              {item.text}
            </p>
          ))}
        </div>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
