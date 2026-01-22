import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

const accordionItems = [
  {
    value: "packaging-configurator",
    title: "PACKAGING CONFIGURATOR",
    content:
      "Design the packaging that suits your brand perfectly with our intuitive, step-by-step configurator. Enjoy complete freedom in selecting materials, print options, finishes, and add-ons, while controlling a price tailored to your needs.",
    hasButton: true,
  },
  {
    value: "test-print",
    title: "TEST PRINT",
    content: null,
    hasButton: false,
  },
  {
    value: "3d-previews",
    title: "3D PREVIEWS",
    content: null,
    hasButton: false,
  },
  {
    value: "product-photoshoot",
    title: "PRODUCT PHOTOSHOOT",
    content: null,
    hasButton: false,
  },
];

export const PackagingConfiguratorSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex flex-col gap-6 md:gap-[30px] px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-2xl sm:text-3xl md:text-[44px] tracking-[0] leading-tight md:leading-[49px]">
        ÖYE INNOVATIONS
      </h2>

      <div className="relative w-full max-w-[1662px] mx-auto">
        <div className="bg-bg-beige rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-[60px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col items-start">
            <Accordion
              type="single"
              collapsible
              defaultValue="packaging-configurator"
              className="w-full"
            >
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border-b border-text/20"
                >
                  <AccordionTrigger className="[font-family:'Inter',Helvetica] font-medium text-text text-xl sm:text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[39px] hover:no-underline py-[13px] [&[data-state=open]>svg]:rotate-180">
                    {item.title}
                  </AccordionTrigger>
                  {item.content && (
                    <AccordionContent className="pb-[30px]">
                      <div className="flex flex-col gap-[30px]">
                        <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base sm:text-lg tracking-[0] leading-relaxed md:leading-[22px]">
                          {item.content}
                        </p>
                        {item.hasButton && (
                          <Button
                            variant="outline"
                            className="h-auto w-fit px-6 py-3 rounded-[40px] border-2 border-main bg-transparent hover:bg-main/10 transition-colors"
                          >
                            <span className="text-main text-base tracking-[0.48px] [font-family:'Inter',Helvetica] font-medium">
                              SIGN UP
                            </span>
                          </Button>
                        )}
                      </div>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
            <img
              className="absolute w-[100px] sm:w-[120px] md:w-[140px] h-auto top-0 left-0 lg:left-auto z-10"
              alt="Decoration"
              src="https://c.animaapp.com/mko0yo41F03JfF/img/group-251.png"
            />
            <img
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[354px] h-auto object-cover"
              alt="Product packaging"
              src="https://c.animaapp.com/mko0yo41F03JfF/img/----------1-9.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
