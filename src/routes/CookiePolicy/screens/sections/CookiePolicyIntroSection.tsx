import { Separator } from "../../components/ui/separator";

export const CookiePolicyIntroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] relative px-4">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          WHAT IS A COOKIE?
        </h2>

        <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
          A cookie is a small text file that is stored on your computer or
          mobile device. These files are used to record information on how you
          have used the ÖYE Packaging OÜ website, for example, when was the last
          time you visited the ÖYE Packaging OÜ website and the type of
          information you have checked therein. The text files can only be read
          by the ÖYE Packaging OÜ website, and no one else has access to these
          files. This text file is harmless, and it has no viruses or malicious
          software, as well as it cannot be tracked back to a particular user or
          IP address.
        </p>
      </div>

      <Separator className="w-full" />
    </section>
  );
};
