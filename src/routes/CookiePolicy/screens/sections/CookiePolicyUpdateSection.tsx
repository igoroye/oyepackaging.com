import { Separator } from "../../components/ui/separator";

const policyItems = [
  {
    id: 1,
    content: (
      <>
        • If you have questions about the processing of personal data or this
        Cookie Policy, please contact ÖYE Packaging at{" "}
        <span className="text-[#264eab]">hello@oyepackaging.com</span>.
      </>
    ),
  },
  {
    id: 2,
    content:
      "• ÖYE Packaging may update this Cookie Policy from time to time. Our currently enforced Cookie Policy may be accessed through ÖYE Packaging OÜ.",
  },
];

export const CookiePolicyUpdateSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] relative px-4">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          CHANGES AND UPDATES TO THIS COOKIE POLICY
        </h2>

        {policyItems.map((item) => (
          <p
            key={item.id}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            {item.content}
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
