import { Separator } from "../../components/ui/separator";

const contentData = {
  title: "QUANTITY TOLERANCES",
  paragraphs: [
    "11.1. Given the intricate nature of industrial production processes, all orders are subject to under-runs and over-runs of not more than 10% (ten percent). ÖYE Packaging reserves the right to vary the quantity delivered by a margin up to 10% (ten percent) in under-runs or over-runs of the original quantity ordered by the Customer and to charge or refund for this variation in quantity on a pro-rata basis. Should such a variation in the quantity arise, the Customer will receive prompt written notification.",
    "11.2. Deviations within standard limits for quality, colors, weight, or appearance align with product quality standards and are considered acceptable.",
  ],
};

export const SubContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          {contentData.title}
        </h2>

        {contentData.paragraphs.map((paragraph, index) => (
          <p
            key={`paragraph-${index}`}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
