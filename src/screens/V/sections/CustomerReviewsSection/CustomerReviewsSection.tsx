import { Card, CardContent } from "../../../../components/ui/card";

const reviewsData = [
  {
    id: 1,
    quote:
      '"Öye is a perfect fit for us: high quality products, sustainable and uncomplicated, and excellent customer service 👌"',
    companyName: "Doris Erne",
    companyTag: "Wheycation",
    productImage: "https://c.animaapp.com/mko0yo41F03JfF/img/mask-group-1.png",
    logoBackground: "https://c.animaapp.com/mko0yo41F03JfF/img/ellipse-39.png",
    logo: "https://c.animaapp.com/mko0yo41F03JfF/img/feve-logo-2023-300x106-1.png",
    logoClasses: "w-[53px] h-[19px]",
  },
  {
    id: 2,
    quote:
      '"Öye is a perfect fit for us: high quality products, sustainable and uncomplicated, and excellent customer service 👌"',
    companyName: "Zero Gravity Coffee",
    companyTag: "Wheycation",
    productImage: "https://c.animaapp.com/mko0yo41F03JfF/img/mask-group-2.png",
    logoBackground:
      "https://c.animaapp.com/mko0yo41F03JfF/img/ellipse-39-1.png",
    logo: "https://c.animaapp.com/mko0yo41F03JfF/img/b3a25a-5890cb8df2e94a7aaed5aedcc66d1df6-mv2-1.png",
    logoClasses: "w-9 h-[42px]",
  },
];

export const CustomerReviewsSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-2xl sm:text-3xl md:text-[44px] tracking-[0] leading-tight md:leading-[49px] mb-8 md:mb-[79px] translate-y-[-1rem] animate-fade-in opacity-0">
        REVIEWS ABOUT ÖYE
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {reviewsData.map((review, index) => (
          <Card
            key={review.id}
            className="bg-white rounded-[20px] border border-solid border-[#101014] opacity-30 overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0"
            style={
              {
                "--animation-delay": `${200 + index * 200}ms`,
              } as React.CSSProperties
            }
          >
            <CardContent className="p-0 relative min-h-[231px] flex flex-col md:flex-row">
              <img
                className="w-full md:w-[285px] h-[200px] md:h-[211px] object-cover md:absolute md:top-2.5 md:left-2.5"
                alt="Product showcase"
                src={review.productImage}
              />

              <div className="flex-1 p-6 md:pl-[315px] md:pr-9 md:pt-[30px] flex flex-col justify-between">
                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base sm:text-lg tracking-[0] leading-relaxed md:leading-[22px] mb-4">
                  {review.quote}
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-[67px] h-[67px] flex-shrink-0">
                    <img
                      className="w-full h-full"
                      alt="Company logo background"
                      src={review.logoBackground}
                    />
                    <img
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover ${review.logoClasses}`}
                      alt="Company logo"
                      src={review.logo}
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-text text-lg sm:text-2xl tracking-[0] leading-6">
                      {review.companyName}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-text text-xs tracking-[0] leading-6 whitespace-nowrap">
                      {review.companyTag}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
