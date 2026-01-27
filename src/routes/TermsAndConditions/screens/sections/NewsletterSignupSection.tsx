import { Separator } from "../../components/ui/separator";

export const NewsletterSignupSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[30px] relative">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5 relative">
        <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          ENTIRE AGREEMENT AND SEVERABILITY
        </h2>

        <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          16.1. If any term or other provision of these Conditions of Sale is
          invalid, illegal, or incapable of being enforced by any rule of law or
          public policy, all other conditions and provisions of these Conditions
          of Sale shall nevertheless remain in full force and effect so long as
          the economic or legal substance of the transactions contemplated
          hereby is not affected in any manner adverse to either party. Upon
          such determination that any term or other provision is invalid,
          illegal, or incapable of being enforced, the Parties hereto shall
          negotiate in good faith to modify these Conditions of Sale so as to
          affect the original intent of the Parties as closely as possible in an
          acceptable manner to the end that transactions contemplated hereby are
          fulfilled to the extent possible.
        </p>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
