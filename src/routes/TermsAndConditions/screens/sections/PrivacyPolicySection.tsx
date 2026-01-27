import { Separator } from "../../components/ui/separator";

const warrantyContent = [
  {
    id: "9.1",
    text: "9.1. The Customer shall immediately upon receipt examine whether a delivery corresponds to the quantity and type of Products or Services ordered and whether there are any external recognizable transportation damages or other obvious deficiencies. The Customer must notify ÖYE Packaging within 14 (fourteen) days of receipt of the shipment of any defect or non-conformance. After such a 14 (fourteen) day period, Customer shall be deemed to have irrevocably accepted the Products or Services. The Сustomer's failure to inspect and report any defect within 14 (fourteen) days waives ÖYE Packaging's obligation to correct such error.",
  },
  {
    id: "9.2",
    text: "9.2. If the Products or Services delivered do not correspond to the quantity or quality, or have material defects in them (including wrong Product and/or Services) the Customer may give written notice to ÖYE Packaging within 14 (fourteen) days of receipt of the shipment of the Products and/or Services, and ÖYE Packaging must within a reasonable time rectify non-compliance and if reasonably required, must re-supply the complying Products and/or Services.",
  },
  {
    id: "9.3",
    text: "9.3. Notwithstanding provision 9.1. and 9.2. of these Conditions of Sale, in the event of a latent defect, Customer shall have a maximum of 6 (six) months to report such latent defect to ÖYE Packaging. If the Products and/or Services have been used or processed in any way, claims won't be accepted. Claims do not empower the Customer to postpone any payment owed to ÖYE Packaging.",
  },
  {
    id: "9.4",
    text: "9.4. The ÖYE Packaging must review and investigate complaints on an individual basis, informing the Customer within a reasonable period, not exceeding 45 (forty-five) working days.",
  },
  {
    id: "9.5",
    text: "9.5. For confirmed defective orders, ÖYE Packaging provides replacements, improvements, discounts, or refunds within a reasonable timeframe. When the Customer is entitled to the refund such refund may not exceed the total invoice amount of the order done by the Customer, except in cases of intent or willful recklessness.",
  },
  {
    id: "9.6",
    text: "9.6. Notwithstanding the above, ÖYE Packaging will have no obligation to correct errors, refund, replace, or repair any Products and/or Services if:",
  },
  {
    id: "9.6.1",
    text: "9.6.1. the Products and/or Services have been handled, processed, or stored inappropriately by the Customer;",
  },
  {
    id: "9.6.2",
    text: "9.6.2. the Products and/or Services have already been processed or used;",
  },
  {
    id: "9.6.3",
    text: "9.6.3. if the Customer has not fully met his obligation under these Conditions of Sale, as well as if the Customer did not complete the Claim Report Form accordingly.",
  },
  {
    id: "9.7",
    text: "9.7. Customer's recourse claims follow the legal scope; agreements with customers of the Customer do not extend to ÖYE Packaging. This also applies to expense, defect or damage reimbursement.",
  },
  {
    id: "9.8",
    text: "9.8. The ÖYE Packaging replaces faulty goods at their expense and risk. The costs of any returns approved by ÖYE Packaging in accordance with these Conditions of Sale will be borne by the Customer, unless otherwise mutually agreed between ÖYE Packaging and the Customer in writing.",
  },
  {
    id: "9.9",
    text: "9.9. Partial delivery faults do not warrant complete rejection of the order.",
  },
  {
    id: "9.10",
    text: "9.10. The ÖYE Packaging is not responsible for faults in the Raw material furnished by the Customer. The Customer shall make sure that their Raw materials supplied to ÖYE Packaging are of good quality.",
  },
  {
    id: "9.11",
    text: "9.11. The ÖYE Packaging is not liable for any faults that the Customer provided in relation to content design, including grammatical mistakes, EAN, or QR codes.",
  },
];

export const PrivacyPolicySection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          WARRANTY, LIABILITY AND INDEMNITY
        </h2>

        {warrantyContent.map((item) => (
          <p
            key={item.id}
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
