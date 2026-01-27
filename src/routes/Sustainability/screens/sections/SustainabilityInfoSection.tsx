import { Card, CardContent } from "../../components/ui/card";

export const SustainabilityInfoSection = (): JSX.Element => {
  const contentData = [
    {
      text: "Being a sustainable company is a challenge!",
      className: "font-medium",
    },
    {
      text: "You constantly balance responsibilities to employees, customers, and partners while striving to innovate, which is an enormous investment that we need to make.",
      className: "font-normal",
    },
    {
      text: "We always remember that the sustainability factor is a path we follow. We prefer to take small steps with complete mindfulness to improve today.",
      className: "font-normal",
    },
  ];

  return (
    <section className="relative w-full">
      <Card className="rounded-[20px] bg-white border-0 shadow-none overflow-hidden">
        <CardContent className="p-0 relative">
          <div className="px-8 pt-[30px] pb-[269px]">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-3xl leading-[39px] text-text tracking-[0] mb-[20px]">
              SUSTAINABILITY
            </h2>

            <div className="space-y-[20px]">
              {contentData.map((item, index) => (
                <p
                  key={index}
                  className={`[font-family:'Inter',Helvetica] ${item.className} text-text text-lg tracking-[0] leading-[22px] max-w-[730px]`}
                >
                  {item.text}
                </p>
              ))}
            </div>
          </div>

          <img
            className="absolute bottom-0 left-0 w-full h-[190px] object-cover"
            alt="Mask group"
            src="https://c.animaapp.com/mkved9hrg5UXzm/img/mask-group-1.png"
          />
        </CardContent>
      </Card>
    </section>
  );
};
