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
    buttonText: "SIGN UP",
  },
  {
    value: "test-print",
    title: "TEST PRINT",
    content:
      "Want to test your design before ordering? We've got you covered! We'll print it and deliver it to your doorstep within 10 days so you can review and adjust it before placing your final order.",
    hasButton: true,
    buttonText: "SIGN UP",
  },
  {
    value: "3d-previews",
    title: "3D PREVIEWS",
    content:
      "Need pictures of your new designer bags? We've got you covered! Simply upload your design to our design service and receive a 3D model that can be used for any purpose.",
    hasButton: true,
    buttonText: "LEARN MORE",
  },
  {
    value: "product-photoshoot",
    title: "PRODUCT PHOTOSHOOT",
    content:
      "Showcase your packaging at its best! After printing, we'll conduct a professional photoshoot to capture high-quality photo of your final product. Perfect for marketing, e-commerce, or social media.",
    hasButton: true,
    buttonText: "CONTACT US",
  },
];

export const PackagingConfiguratorSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-8 md:py-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-6 md:mb-[30px]">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-2xl sm:text-3xl md:text-[44px] tracking-[0] leading-tight md:leading-[49px]">
          ÖYE INNOVATIONS
        </h2>
      </div>

      <div className="relative w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
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
                              {item.buttonText}
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

          <div className="relative flex items-center justify-end min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] pr-0 lg:pr-8">
            {/* Decorative circles - top left */}
            <div className="absolute top-[60px] sm:top-[80px] lg:top-[100px] left-0 sm:left-8 lg:left-12 z-10 flex items-center gap-2">
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full border-2 border-text/20 flex items-center justify-center bg-white">
                <img
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px]"
                  alt="Edit icon"
                  src="https://c.animaapp.com/mko0yo41F03JfF/img/group-251.png"
                />
              </div>
              <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border-2 border-text/20 bg-white"></div>
            </div>

            {/* Packaging bag - tilted to the right */}
            <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[450px] h-[350px] sm:h-[420px] lg:h-[500px]">
              <img
                className="absolute inset-0 w-full h-full object-contain transform rotate-[15deg] origin-center"
                alt="Product packaging"
                src="/images/home-page/slider-1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
