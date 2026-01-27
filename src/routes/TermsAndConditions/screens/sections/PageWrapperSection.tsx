import { Separator } from "../../components/ui/separator";

const termsContent = [
  {
    id: "1.1",
    text: 'These General Terms and Conditions of Sale ("Conditions of Sale") govern all deliveries and services provided by ÖYE Packaging OÜ ("ÖYE Packaging"). These conditions are exclusively applicable to entrepreneurs, which include natural or legal persons, or entities subject to public law, conducting commercial or independent business activities within the scope of legal transactions.',
  },
  {
    id: "1.2",
    parts: [
      {
        text: "These Conditions of Sale govern your use of ÖYE Packaging services, including use of the ÖYE Packaging website ",
        color: "text-[#101014]",
      },
      {
        text: "https://oyepackaging.com/",
        color: "text-[#264eab]",
      },
      {
        text: " (the \"Website\"), including the sale, purchase, and use of Products (listed below) and services (the \"Services\"). You agree to these Conditions of Sale by mutually agreeing and signing a purchase order document, invoice, confirming design via e-mail, and other documents that may be applicable with regard to ÖYE Packaging. In this document, you may be referred to as ''you'', ''your'', or ''Customer''.",
        color: "text-[#101014]",
      },
    ],
  },
  {
    id: "1.3",
    text: "Your understanding and agreement with ÖYE Packaging related to the Service is regulated exclusively by these Conditions of Sale. In the event if ÖYE Packaging fails to observe provision(-s) of the Conditions of Sale it shall not be construed as a waiver of rights and obligations established in these Conditions of Sale. A waiver of any rights and obligations established in these Conditions of Sale shall only be valid if it is manifested and agreed in writing by an authorized representative of ÖYE Packaging.",
  },
  {
    id: "1.4",
    text: "Any modifications and/or deviations from these Conditions of Sale proposed by the Customer will not be binding for ÖYE Packaging unless expressly accepted by ÖYE Packaging in writing. Unconditional delivery, service provision, or payment acceptance shall not constitute recognition of differing terms. Any terms that are contrary to these Conditions of Sale are null and void unless otherwise agreed to in writing by an authorized representative of ÖYE Packaging.",
  },
];

export const PageWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <header className="flex items-center w-full">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
            SCOPE
          </h2>
        </header>

        <div className="flex flex-col w-full gap-5">
          {termsContent.map((term) => (
            <p
              key={term.id}
              className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
            >
              {term.id}.{" "}
              {term.parts ? (
                <>
                  {term.parts.map((part, index) => (
                    <span key={index} className={part.color}>
                      {part.text}
                    </span>
                  ))}
                </>
              ) : (
                term.text
              )}
            </p>
          ))}
        </div>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
