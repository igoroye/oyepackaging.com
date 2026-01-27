import { Separator } from "../../components/ui/separator";

const definitionsContent = [
  {
    id: "2.1",
    text: "In these Conditions of Sale, except to the extent that the context requires otherwise or has specifically defined, the following expressions shall have the meanings ascribed to them below:",
  },
  {
    id: "2.1.1",
    text: '"Applicable Laws" means:',
  },
  {
    id: "2.1.1.1",
    text: 'all laws, code of practice, regulations, guidelines, instructions, or other instruments having the force of law whatsoever form that any competent regulatory, governmental, or judicial authorities in the Republic of Estonia ("Estonia") may issue from time to time related to the subject of these Conditions of Sale or otherwise, including Tarbijakaitseseadus (Law on Consumers Protection of the Republic of Estonia);',
  },
  {
    id: "2.1.1.2",
    text: "Directive 97/7/EC of the European Parliament and of the Council of 20 May 1997 on the protection of consumers in respect of distance contracts;",
  },
  {
    id: "2.1.1.3",
    text: "Regulation (EU) 2016/679 of the European Parliament and of the Council (April 27, 2016) on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC (General Data Protection Regulation);",
  },
  {
    id: "2.1.1.4",
    text: "In the event of any dispute between the Customer and ÖYE Packaging, the Customer and ÖYE Packaging agree to attempt to reach an amicable settlement in good faith. Should an attempt to reach an amicable settlement be unsuccessful the Customer and ÖYE Packaging agree to irrevocably submit to the jurisdiction of the Courts of the Republic of Estonia.",
  },
  {
    id: "2.1.2",
    text: '"the Service" – designing, developing, producing, assisting in producing, printing, preparing, and placing production orders of sustainable packaging (drip coffee bags, pouch bag(s), carton box(-es), as well as preserving, processing and sorting raw materials provided to ÖYE Packaging by the Customer.',
  },
  {
    id: "2.1.3",
    text: '"Raw material" – unprocessed materials or natural materials such as coffee beans or ground coffee provided to ÖYE Packaging by the Customer with the purpose of manufacturing the Product and/or receiving the Service.',
  },
  {
    id: "2.1.4",
    text: '"the Design or Packaging design" – form, models, figures, dimensions, weights, structure, materials, color, imagery, typography, and regulatory information with ancillary design elements provided by the Customer to ÖYE Packaging to render the Service or manufacture the Product in terms of these Conditions of Sale. ÖYE Packaging shall use its best efforts to ensure their accuracy.',
  },
  {
    id: "2.1.5",
    text: '"Products" – various sustainable packaging products found on the Website or offered to Customer by ÖYE Packaging on an individual basis. Products and all content found on the Website is provided solely for informational purposes. All photos, videos, and other images of Products found on the ÖYE Packaging Website are for illustrative purposes only. The actual product may differ from that shown on the ÖYE Packaging Website.',
  },
  {
    id: "2.1.6",
    text: '"Disclosing Party" – natural or legal person disclosing confidential information.',
  },
  {
    id: "2.1.7",
    text: '"Receiving Party" – natural or legal person who receives the confidential information.',
  },
  {
    id: "2.1.8",
    text: '"Personal Data" – refers to data, whether true or not, about an individual who can be identified from (a) that data alone or (b) from that data and other information which ÖYE Packaging has or is likely to have access.',
  },
  {
    id: "2.1.9",
    text: '"Imminent harm" means harm that is on the point of happening to the ÖYE Packaging business due to the fault of the Customer.',
  },
  {
    id: "2.1.10",
    text: '"Confidential Information" refers to:',
  },
  {
    id: "2.1.10.1",
    text: "any kind of information or material related to Disclosing Party's business, including (but not limited to) trade secrets, user data, business, scientific or technical information, and any concept, samples, reports data, know-how, works-in-progress, designs, any marketing strategies, customers or suppliers lists, employees, partners, capital, products, systems, methodologies, processes, financial information, sales estimates, market opportunities, business plans and/or ideas/intentions related to the ÖYE Packaging or the Customer and their development (whether in written, oral, electronic, illustrated or any other form) expressed directly or indirectly by the Disclosing party or representatives of the Disclosing party to the Receiving party prior or after the date of conclusion of these Conditions of Sale or in the case if the Receiving party has obtained the said information during the term of provision of services stipulated in these Conditions of Sale;",
  },
  {
    id: "2.1.10.2",
    text: "any kind of information related to the scope of these Conditions of Sale;",
  },
  {
    id: "2.1.10.3",
    text: "all documents and information prepared by the Customer and/or ÖYE Packaging in any form or obtained in any other way within the scope of these Conditions of Sale.",
  },
  {
    id: "2.1.11",
    text: "Notwithstanding the aforementioned, Confidential Information shall exclude information that:",
  },
  {
    id: "2.1.11.1",
    text: "is already in the public domain at the time of disclosure by the Disclosing party to the Receiving party;",
  },
  {
    id: "2.1.11.2",
    text: "was developed by the Receiving Party on its own, independent from any confidential or proprietary information obtained from the Disclosing Party and/or any third party;",
  },
  {
    id: "2.1.11.3",
    text: "is permitted for distribution by the written permission of the Disclosing party;",
  },
  {
    id: "2.1.11.4",
    text: "the disclosure of which is required by the Applicable laws and regulations.",
  },
];

export const LayoutWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <article className="flex flex-col w-full items-start gap-5">
        <header className="flex items-center w-full">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
            DEFINITIONS AND INTERPRETATIONS
          </h2>
        </header>

        <div className="flex flex-col w-full gap-5">
          {definitionsContent.map((item) => (
            <p
              key={item.id}
              className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
            >
              {item.id}. {item.text}
            </p>
          ))}
        </div>
      </article>

      <Separator className="w-full" />
    </section>
  );
};
