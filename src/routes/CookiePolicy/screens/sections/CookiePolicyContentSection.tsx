import { Separator } from "../../components/ui/separator";

const cookieAcceptanceContent = [
  {
    text: 'When visiting the ÖYE Packaging OÜ website, a window notifying the visitor that cookies are used on the website appears. If the visitor clicks on the button "I agree", it means that the visitor accepts all cookies on the website and confirms that the visitor is aware of cookies and the purposes of their use.',
  },
  {
    text: "The visitors' consent is not required in the case of essential cookies due to the fact that essential cookies ensure a complete and continuous display of the ÖYE Packaging OÜ website content so that the visitor may have a compatible online surfing and digital browsing experience.",
  },
];

export const CookiePolicyContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] relative px-4">
      <Separator className="w-full" />

      <div className="flex flex-col w-full items-start gap-5">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
          ACCEPTANCE OF COOKIES
        </h2>

        {cookieAcceptanceContent.map((item, index) => (
          <p
            key={index}
            className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]"
          >
            • {item.text}
          </p>
        ))}
      </div>

      <Separator className="w-full" />
    </section>
  );
};
